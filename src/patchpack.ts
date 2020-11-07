import * as notepack from "notepack.io"

import {
  ISchema, TSchemaPatch, IJsonPatch, IReversibleJsonPatch,
  NODE_ARRAY_TYPE, NODE_MAP_TYPE, check, SchemaNode
} from "./common"
import { Schema } from "./schema"

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

  private encodeNode(snapshot: any, sn?: SchemaNode, name?: string | number): any[] {

    const node = this.schema.getChildNode(sn, name === undefined ? "" : name)
    if (!node || !snapshot) { return snapshot }

    if (node.type === NODE_MAP_TYPE) {
      check (typeof snapshot !== "object", `Cannot encode snapshot - object expected on path: ${ this.schema.getNodePath(node) }`)

      return node.items.map((key: string, i) => this.encodeNode(snapshot[key], node, key))
    } else if (node.type === NODE_ARRAY_TYPE) {
      check (!Array.isArray(snapshot), `Cannot encode snapshot - array expected on path: ${ this.schema.getNodePath(node) }`)

      return snapshot.map((item: any, i: number) => this.encodeNode(item, node, i))
    } else {
      const props = this.schema.getTypeProps(node.type)
      return props.map((key, i) => this.encodeNode(snapshot[key], node, key))
    }
  }

  public encodeState(value: any, addSchema = true): Buffer {
    // build schema of encode nodes
    if (!this.schema.nodes.length) {
      // build schema, encode it with snapshot
      this.schema.buildFrom(value)
    }

    // encode snapshot nodes and schema
    const snapshot = [ this.encodeNode(value), ...addSchema ? [this.schema.types, this.schema.nodes] : [] ]

    // return packed snapshot
    return notepack.encode(snapshot)
  }

  public decodeState<T = any>(buffer: Buffer): T {
    const [encodedNode, types, nodes] = notepack.decode(buffer)

    // apply schema
    if (types && nodes) {
      this.schema.types = types
      this.schema.nodes = nodes
    }

    // decode snapshot
    return this.decodeNode(0, encodedNode)
  }

  public encodePatch (patch: IReversibleJsonPatch): Buffer {
    const path = patch.path[0] === "/" ? patch.path.slice(1) : patch.path
    const pathArr = path.split("/")

    let node = this.schema.findNode({ parent: -1 })
    check (!node,`Cannot encode patch, you need to build schema first!`)

    const pathNodes: Array<SchemaNode | undefined> = [node]
    let i = -1
    while (++i < pathArr.length) {
      node = this.schema.getChildNode(node, pathArr[i])
      check(!node && i < pathArr.length - 1, `Cannot add new node - wrong path: ${patch.path}`)
      node && pathNodes.push(node)
    }

    const key = pathNodes.length === pathArr.length && pathArr.pop() || undefined
    const parent = pathNodes.pop()!
    const patches = patch.op === "remove"
      ? [ this.schema.deleteNode(patch.path) ]
      : this.schema.createNode(patch.value, { parent, key })

    node = (patch.op !== "remove" && key !== undefined) && this.schema.getChildNode(parent, key) || parent

    const op = ["add", "replace", "remove"].indexOf(patch.op)
    const props = this.schema.getTypeProps(node.type)
    const propIndex = key === undefined ? -1 : props.indexOf(key)

    const data: TSchemaPatch = [ op, node.id, propIndex ]

    if (patch.op !== "remove") {
      data.push(this.encodeNode(patch.value, parent, key))
    }
    if (patch.op !== "add" && "oldValue" in patch) {
      data.push(this.encodeNode(patch.oldValue, parent, key))
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

  private decodeNode (nodeId: any, encoded: any[]): any {
    const node = this.schema.getNode(nodeId)
    if (!node || !encoded) { return encoded }

    if (node.type === NODE_ARRAY_TYPE) {
      return encoded.map((item, i) => {
        const itemNode = this.schema.getChildNode(node, i)
        return this.decodeNode(itemNode ? itemNode.id : -1, item)
      })
    } else {
      const result: any = {}
      const keys = node.type === NODE_MAP_TYPE ? node.items : this.schema.getTypeProps(node.type)
      keys.forEach((key: string, i: number) => {
        const itemNode = this.schema.getChildNode(node, key)
        const value = this.decodeNode(itemNode ? itemNode.id : -1, encoded[i])
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

    const [opIndex, entryId, propIndex, ...values] = encodedPatch

    const node = this.schema.getNode(entryId)!
    check (!node, `Cannot decode patch - schema for node with id ${entryId} not found`)

    const path = this.schema.getNodePath(node)
    const props = this.schema.getTypeProps(node.type)

    const patch: any = {
      op: ["add", "replace", "remove"][opIndex],
      path: path + (propIndex >= 0 ? "/" + props[propIndex] : "")
    }

    const child = this.schema.findNode({ parent: entryId, index: propIndex })
    const nodeId = child ? child.id : propIndex < 0 && entryId || -1

    if (values.length && patch.op !== "remove") {
      patch.value = this.decodeNode(nodeId, values.reverse().pop())
    }

    if (values.length && patch.op !== "add") {
      patch.oldValue = this.decodeNode(nodeId, values.pop())
    }

    if (values.length) {
      throw new Error(`Unhandled params: ${values.toString()}`)
    }

    return patch
  }
}
