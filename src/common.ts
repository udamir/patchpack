export const ARRAY_NODE = -1
export const MAP_NODE = -2

export type JsonPatchOp = "replace" | "add" | "remove"

export interface IJsonPatch {
  op: JsonPatchOp
  path: string
  value?: any
}

export interface IReversibleJsonPatch extends IJsonPatch {
  oldValue?: any
}

export interface ISchema {
  types: TSchemaType[]
  nodes: TSchemaNode[]
}

//          TSchemaType = [ name,   props    ]
export type TSchemaType = [ string, ...string[] ]

//          TSchemaNode = [ id,     type,   parent, index         ]
export type TSchemaNode = [ number, number, number, number ]

//          TSchemaPatch = [ op,     id,     prop,   value/oldValue ]
export type TSchemaPatch = [ number, number, number, any?, any? ]

export const check = (condition: any, error: string) => {
  if (condition) {
    throw new Error(error)
  }
}

export const [ OP_ADD, OP_REPLACE, OP_REMOVE ] = [ 0, 1, 2 ]
export type NodeType = -1 | -2 | ISchemaType

export interface ISchemaNode {
  id: number
  parent?: ISchemaNode
  type: -1 | -2 | ISchemaType
  index: number
  key: string | number
  keys?: string[]
  items: ISchemaNode[]
}

export interface ISchemaType {
  name: string
  index: number
  props: string[]
}