import * as notepack from "notepack.io"

import { check, IReversibleJsonPatch, ISchemaNode, MAP_NODE, ARRAY_NODE, TSchemaPatch } from "./common"
import { Schema } from "./schema"

interface IBuildMeta {
  parent?: ISchemaNode
  key: number | string
  index: number
}

export class PatchPack {
  public schema: Schema
  constructor (types?: { [type: string]: string[] }) {
    this.schema = new Schema()
    this.schema.addTypes(types || {})
  }

  public encodeState(value: any, addTypes = true): Buffer {
    // encode root node
    const encoded = this.encodeNode(value, { key: "", index: -1 })

    // encode snapshot nodes and schema
    const snapshot = [ encoded, ...addTypes ? [this.schema.types] : [] ]

    // return packed snapshot
    return notepack.encode(snapshot)
  }

  public decodeState<T = any>(buffer: Buffer) {
    const [encodedNode, types] = notepack.decode(buffer)

    // apply schema types
    this.schema.init(types)

    // decode snapshot
    return this.decodeNode(encodedNode, { key: "", index: -1 })
  }

  private encodeNode(value: any, meta: IBuildMeta): any {
    const { parent, key = "", index = -1 } = meta

    // add key to map schema keys
    if (parent && parent.type === MAP_NODE) {
      parent.keys!.push(key as string)
    }

    // get child node
    let node = parent ? this.schema.getChildNode(parent, key)! : this.schema.root
    const data = []

    if (Array.isArray(value)) {

      // create schema node
      node = node || this.schema.createNode(this.schema.nextId, parent, ARRAY_NODE, key, index)

      // set encoded node type and id
      data.push(ARRAY_NODE, node.id)
      // set encoded node items
      for(let i = 0; i < value.length; i++) {
        data.push(this.encodeNode(value[i], { parent: node, key: i, index: i }))
      }

    } else if (typeof value === "object" && value) {

      // check value type
      const type = this.schema.findType(value) || MAP_NODE

      // create schema node
      node = node || this.schema.createNode(this.schema.nextId, parent, type, key, index)

      data.push(type !== MAP_NODE ? type.index : MAP_NODE, node.id)

      if (type !== MAP_NODE) {
        // set encoded props
        Object.keys(value).forEach((k) => {
          data.push(this.encodeNode(value[k], { parent: node, key: k, index: type.props.indexOf(k) }))
        })
      } else {
        // set map items
        Object.keys(value).forEach((k, i) => {
          data.push(k, this.encodeNode(value[k], { parent: node, key: k, index: i }))
        })
      }
    } else {
      // check type
      check (typeof value === "function" || typeof value === "symbol",
        `Cannot build schema - wrong value on path ${ this.schema.getNodePath(parent, key) }`)

      return value
    }

    return data
  }

  private decodeNode (encoded: any, meta: IBuildMeta): any {
    // check if encoded primitive value
    if (!encoded || !Array.isArray(encoded)) { return encoded }

    const { parent, key, index } = meta
    const [ type, id, ...data ] = encoded

    const schemaType = this.schema.getType(type)!
    check(!schemaType, `Cannot decode state - unknown type: ${type}`)

    // create schema node
    const node = this.schema.createNode(id, parent, schemaType, key, index)

    const result = {} as any

    if (schemaType === ARRAY_NODE) {
      return data.map((item: any, i: number) => {
        return this.decodeNode(item, { parent: node, index: i, key: i })
      })
    } else if (schemaType === MAP_NODE) {
      // decode map items
      for (let i = 0; i < data.length; i += 2) {
        const childIndex = node.keys!.push(data[i]) - 1

        const value = this.decodeNode(data[i+1], { parent: node, key: data[i], index: childIndex })

        if (value !== undefined) {
          result[data[i]] = value
        }
      }
    } else {
      // decode type props
      for (let i = 0; i < schemaType.props.length; i++) {
        const prop = schemaType.props[i]

        const value = this.decodeNode(data[i], { parent: node, key: prop, index: i })

        if (value !== undefined) {
          result[prop] = value
        }
      }
    }
    return result
  }

  public encodePatch(patch: IReversibleJsonPatch): Buffer {
    const path = patch.path[0] === "/" ? patch.path.slice(1) : patch.path
    const pathArr = path.split("/").reverse()
    const key = pathArr.splice(0,1)[0]

    let parent: ISchemaNode = this.schema.root!
    check (!parent,`Cannot encode patch, you need to build schema first!`)

    while (pathArr.length) {
      parent = this.schema.getChildNode(parent, pathArr.pop()!)!
      check(!parent, `Cannot add new node - wrong path: ${patch.path}`)
    }

    const op = ["add", "replace", "remove"].indexOf(patch.op) as any
    const index = this.schema.getChildIndex(parent, key)
    const data: TSchemaPatch = [ op, parent.id, index ]

    const node = this.schema.getChildNode(parent, key)
    if (patch.op !== "remove") {
      if (node) {
        this.schema.deleteNode(node)
      }
      if (parent.type === MAP_NODE && patch.op === "add") {
        data.push([key, this.encodeNode(patch.value, { parent, key, index })])
      } else {
        data.push(this.encodeNode(patch.value, { parent, key, index }))
      }
    }

    if (patch.op !== "add" && "oldValue" in patch) {
      data.push(this.encodeNode(patch.oldValue, { parent, key, index }))
    }

    // delete node if remove operation
    if (patch.op === "remove" && node) {
      this.schema.deleteNode(node)
    }

    return notepack.encode(data)
  }

  public decodePatch (buffer: Buffer): IReversibleJsonPatch {

    // encode patch
    const encodedPatch = notepack.decode<TSchemaPatch>(buffer)

    const [opIndex, nodeId, propIndex, ...values] = encodedPatch

    const parent = this.schema.getNode(nodeId)!
    check (!parent, `Cannot decode patch - schema for node with id ${nodeId} not found`)

    const patch: any = { op: ["add", "replace", "remove"][opIndex], path: '' }

    let key = this.schema.getChildName(parent, propIndex)
    const node = this.schema.getChildNode(parent, key)

    if (values.length && patch.op !== "remove") {

      // revome old node
      if (node) {
        this.schema.deleteNode(node)
      }

      // decode value
      const value = values.reverse().pop()
      if (parent.type === MAP_NODE && patch.op === "add") {
        key = value[0]
        patch.value = this.decodeNode(value[1], { parent, key, index: propIndex })
      } else {
        patch.value = this.decodeNode(value, { parent, key, index: propIndex })
      }
    }

    if (values.length && patch.op !== "add") {
      patch.oldValue = this.decodeNode(values.pop(), { parent, key, index: propIndex })
    }

    if (node && patch.op === "remove") {
      this.schema.deleteNode(node)
    }

    patch.path = this.schema.getNodePath(parent, key)

    if (values.length) {
      throw new Error(`Unhandled params: ${values.toString()}`)
    }

    return patch
  }
}
