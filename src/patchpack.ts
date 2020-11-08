import * as notepack from "notepack.io"

import {
  TSchemaPatch, IJsonPatch, IReversibleJsonPatch,
  ARRAY_NODE, MAP_NODE, check, ISchemaNode, OP_REPLACE, OP_REMOVE, OP_ADD
} from "./common"
import { Schema } from "./schema"

interface IBuildMeta {
  parent?: ISchemaNode
  key: number | string
  patches?: IJsonPatch[] | null
  op?: 0 | 1 | 2 | -1
}


export class PatchPack {
  public schema: Schema
  constructor (types?: { [type: string]: string[] }) {
    this.schema = new Schema()
    this.schema.addTypes(types || {})
  }

  public packSchemaPatch(patch: IJsonPatch): Buffer {
    // split path to elements
    // "/nodes/1/2"
    const [, type, index, prop] = patch.path.split("/")

    // set operation for patch type
    // if "/nodes/" updated op = -3 | -2 | -1
    // if "/types/" updated op = -6 | -5 | -4
    const opIndex = ["add", "replace", "remove"].indexOf(patch.op) - (type === "nodes" ? 3 : 6)

    // return SchemaPatch
    return notepack.encode([ opIndex, +index, prop === undefined ? -1 : +prop, patch.value ])
  }

  public unpackSchemaPatch(sp: TSchemaPatch): IJsonPatch {
    const [opIndex, nodeId, propIndex, value] = sp

    // set JsonPatch operation
    const op = ["add", "replace", "remove"][opIndex + (opIndex < -3 ? 6 : 3)] as any

    // set path elements
    const pathArr = [, opIndex < -3 ? "types" : "nodes", nodeId]
    if (propIndex >= 0) { pathArr.push(propIndex) }

    const jsonPatch: IJsonPatch = { op, path: pathArr.join("/") }

    if (value !== undefined) {
      jsonPatch.value = value
    }

    // return JsonPatch
    return jsonPatch
  }

  public unpackPatch(sp: TSchemaPatch): IJsonPatch {
    const [opIndex, nodeId, propIndex, ...values] = sp

    const node = this.schema.getNode(nodeId)!
    check (!node, `Cannot decode patch - schema for node with id ${nodeId} not found`)

    const key = typeof node.type === "object" ? node.type.props[propIndex] || "" : ""
    const path = this.schema.getNodePath(node, key)

    const patch: any = { op: ["add", "replace", "remove"][opIndex], path }
    const prop = node.items.find((n) => n.index = propIndex)

    if (values.length && patch.op !== "remove") {
      patch.value = this.decodeNode(values.reverse().pop(), prop || node)
    }

    if (values.length && patch.op !== "add") {
      patch.oldValue = this.decodeNode(values.pop(), prop || node)
    }

    if (values.length) {
      throw new Error(`Unhandled params: ${values.toString()}`)
    }

    return patch
  }

  public encodeNode(value: any, meta: IBuildMeta): any {
    const { parent, key, patches = null, op = 0 } = meta
    let node = parent && this.schema.getChildNode(parent, key)!

    if (node && (op === OP_REPLACE || op === OP_REMOVE)) {
      // delete old node with child nodes
      // this.nodesDelete(node.id)
    }

    if (op !== OP_ADD) {
      check(!node , ` -  array expected on path: ${ this.schema.getNodePath(parent, key) }`)
      check(node!.type !== ARRAY_NODE, ` -  array expected on path: ${ this.schema.getNodePath(parent, key) }`)
    }

    if (Array.isArray(value)) {
      if (op === OP_ADD) {
        node = this.schema.createNode(this.schema.nextId, parent, ARRAY_NODE, key, patches)
      }
      return value.map((item, i) => this.encodeNode(item, { parent: node, key: i, patches, op }))
    } else if (typeof value === "object") {
      if (op === OP_ADD) {
        const type = this.schema.findType(value) || MAP_NODE
        node = this.schema.createNode(this.schema.nextId, parent, type, key, patches)
      }
      return Object.keys(value).map((k) => this.encodeNode(value[k], { parent: node, key: k, patches, op }))
    } else {
      check (typeof value === "function" || typeof value === "symbol",
        `Cannot build schema - wrong value on path ${ this.schema.getNodePath(parent, key) }`)
      if (node) {
        // TODO: delete node
      } else if (op === OP_ADD && parent && parent.type === MAP_NODE) {
        parent.keys!.push(key as string)
      }
      return value
    }
  }


  public encodeState(value: any, addSchema = true): Buffer {

    const encoded = this.encodeNode(value, { key: "", patches: null, op: 0 })

    // encode snapshot nodes and schema
    const snapshot = [ encoded, ...addSchema ? [this.schema.types, this.schema.nodes] : [] ]

    // return packed snapshot
    return notepack.encode(snapshot)
  }

  public decodeState<T = any>(buffer: Buffer) {
    const [encodedNode, types, nodes] = notepack.decode(buffer)

    // apply schema
    if (types && nodes) {
      this.schema.apply(types, nodes)
    }

    // decode snapshot
    return this.decodeNode(encodedNode, this.schema.root)
  }

  public encodePatch (patch: IReversibleJsonPatch): Buffer {
    const path = patch.path[0] === "/" ? patch.path.slice(1) : patch.path
    const pathArr = path.split("/").reverse()
    const key = pathArr.splice(0,1)[0]

    let parent: ISchemaNode = this.schema.root!
    check (!parent,`Cannot encode patch, you need to build schema first!`)

    while (pathArr.length) {
      parent = this.schema.getChildNode(parent, pathArr.pop()!)!
      check(!parent, `Cannot add new node - wrong path: ${patch.path}`)
    }

    const patches: IJsonPatch[] = []
    const op = ["add", "replace", "remove"].indexOf(patch.op) as any
    const value = patch.op !== "remove" && this.encodeNode(patch.value, { parent, key, patches, op })
    const oldValue = patch.op !== "remove" && this.encodeNode(patch.oldValue, { parent, key, patches })

    const node = this.schema.getChildNode(parent, key)!
    check(!node, "Cannot encode patch - node not found!")

    const data: TSchemaPatch = [ op, node.id, node.index ]

    if (patch.op !== "remove") {
      data.push(value)
    }
    if (patch.op !== "add" && "oldValue" in patch) {
      data.push(oldValue)
    }

    const result = patches.map((p) => {
      const [, type, index, prop] = p.path.split("/")
      const opIndex = ["add", "replace", "remove"].indexOf(p.op) - (type === "nodes" ? 3 : 6)
      return [ opIndex, +index, prop === undefined ? -1 : +prop, p.value ]
    })

    if (!result.length) {
      return notepack.encode(data)
    }

    result.push(data)
    return notepack.encode(result)
  }

  private decodeNode (encoded: any[], node?: ISchemaNode): any {

    if (!node || !encoded) { return encoded }

    if (node.type === ARRAY_NODE) {
      return encoded.map((item, i) => {
        const itemNode = this.schema.getChildNode(node, i)
        return this.decodeNode(item, itemNode)
      })
    } else {
      const result: any = {}
      const keys = node.type === MAP_NODE ? node.keys! : node.type.props
      keys.forEach((key: string, i: number) => {
        const itemNode = this.schema.getChildNode(node, key)
        const value = this.decodeNode(encoded[i], itemNode)
        if (value === undefined) { return }
        result[key] = value
      })
      return result
    }
  }

  public decodePatch (buffer: Buffer) {

    let patches = notepack.decode<any[]>(buffer)

    const encodedPatch = Array.isArray(patches[0]) ? patches.pop() : patches

    patches = Array.isArray(patches[0]) ? patches : []

    patches.forEach((p) => {
      // decode and apply schema patch
      this.schema.applyPatch(this.unpackSchemaPatch(p))
    })

    return this.unpackPatch(encodedPatch)
  }
}
