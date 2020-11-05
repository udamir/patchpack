import * as notepack from "notepack.io"

import {
  ISchema, ISchemaNode, SchemaPatch, IJsonPatch, IReversibleJsonPatch,
  NODE_ARRAY_TYPE, NODE_MAP_TYPE, schemaPatch
} from "./common"
import { Schema } from "./schema"

export class PatchPack {
  public schema: Schema
  constructor (schema?: ISchema) {
    this.schema = new Schema(schema)
  }

  public encodeSchema(): Buffer {
    return notepack.encode(this.schema)
  }

  public decodeSchema(buffer: Buffer) {
    const schema = notepack.decode<ISchema>(buffer)
    this.schema.types = schema && schema.types || []
    this.schema.nodes = schema && schema.nodes || []
    return schema
  }

  public encodeSchemaPatch(patch: IJsonPatch): Buffer {
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

  private encodeNode(snapshot: any, sn: ISchemaNode, name?: string | number): any[] {
    const node = name === undefined ? sn: this.schema.getChildNode(sn, name)
    if (!node || !snapshot) { return snapshot }

    if (node.type === NODE_MAP_TYPE) {
      if (typeof snapshot !== "object") {
        const path = this.schema.getNodePath(sn) + (name === undefined ? "" : "/" + name)
        throw new Error(`Cannot encode snapshot - object expected on path: ${path}`)
      }
      return node.items!.map((key: string, i) => this.encodeNode(snapshot[key], node, key))
    } else if (node.type === -1) {
      if (!Array.isArray(snapshot)) {
        const path = this.schema.getNodePath(sn) + (name === undefined ? "" : "/" + name)
        throw new Error(`Cannot encode snapshot - array expected on path: ${path}`)
      }
      return snapshot.map((item: any, i: number) => this.encodeNode(item, node, i))
    } else {
      const props = this.schema.getTypeProps(node.type)
      return props.map((key, i) => this.encodeNode(snapshot[key], node, key))
    }
  }

  public encodeSnapshot(snapshot: any, nodeId: number = 0): Buffer {
    const node = this.schema.getNode(nodeId)
    if (!node) {
      throw new Error(`Cannot encode snapshot - node with id ${nodeId} not found!`)
    }

    return notepack.encode(this.encodeNode(snapshot, node))
  }

  public encodePatch (patch: IReversibleJsonPatch): Buffer {

    const pathArr = patch.path === "/" ? [""] : patch.path.split("/")

    let i = -1
    let node: ISchemaNode | undefined
    while (++i < pathArr.length) {
      const child = this.schema.getChildNode(node, pathArr[i] || "")
      if (!child) { break }
      node = child
    }

    if (!node) {
      throw new Error(`Wrong patch path: ${patch.path}`)
    }

    const op = ["add", "replace", "remove"].indexOf(patch.op)
    const props = this.schema.getTypeProps(node.type)
    const propIndex = props.indexOf(pathArr[i])

    const data: SchemaPatch = [ op, node.id, propIndex ]

    if (patch.op !== "remove") {
      data.push(this.encodeNode(patch.value, node, pathArr[i]))
    }
    if (patch.op !== "add" && "oldValue" in patch) {
      data.push(this.encodeNode(patch.oldValue, node, pathArr[i]))
    }

    return notepack.encode(data)
  }

  public decodeSchemaPatch(sp: SchemaPatch): IJsonPatch {
    const patch = schemaPatch(sp)

    // set JsonPatch operation
    const op = ["add", "replace", "remove"][patch.op + (patch.op < -3 ? 6 : 3)] as any

    // set path elements
    const pathArr = [, patch.op < -3 ? "types" : "nodes", patch.id]
    if (patch.prop >= 0) { pathArr.push(patch.prop) }

    const jsonPatch: IJsonPatch = { op, path: pathArr.join("/") }

    if (patch.values[0] !== undefined) {
      jsonPatch.value = patch.values[0]
    }

    // return JsonPatch
    return jsonPatch
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

  public decodeSnapshot<T = any>(buffer: Buffer, nodeId: number = 0): T {
    return this.decodeNode(nodeId, notepack.decode(buffer))
  }

  public decodePatch (buffer: Buffer, updateSchema = true) {

    const encodedPatch = notepack.decode<SchemaPatch>(buffer)

    if (encodedPatch[0] < 0) {
      // decode schemaMap patch
      const decodedPatch = this.decodeSchemaPatch(encodedPatch)
      return updateSchema ? this.schema.applyPatch(decodedPatch) : decodedPatch
    }

    const [opIndex, entryId, propIndex, ...values] = encodedPatch

    const node = this.schema.getNode(entryId)
    if (!node) {
      throw new Error(`Cannot decode patch - schema for node with id ${entryId} not found`)
    }
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
