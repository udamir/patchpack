export const NODE_ARRAY_TYPE = -1
export const NODE_MAP_TYPE = -2

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

//          TSchemaNode = [ id,     type,   parent, index,           map keys    ]
export type TSchemaNode = [ number, number, number, number | string, ...string[] ]

export class SchemaNode {
  constructor(public nodeRef: TSchemaNode, public nodeIndex: number) {}

  public get id() { return this.nodeRef[0] }
  public get type() { return this.nodeRef[1] }
  public get parent() { return this.nodeRef[2] }
  public get index() { return this.nodeRef[3] as number }
  public get items() { return this.nodeRef.slice(4) as string[] }
}

//          TSchemaPatch = [ op,     id,     prop,   value/oldValue ]
export type TSchemaPatch = [ number, number, number, any?, any? ]

export const check = (condition: any, error: string) => {
  if (condition) {
    throw new Error(error)
  }
}
