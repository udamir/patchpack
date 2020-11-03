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
  types: SchemaType[]
  nodes: SchemaNode[]
}

//   SchemaType = [ name,   props    ]
export type SchemaType = [ string, ...string[] ]

export interface ISchemaType {
  name: string
  props: string[]
}

export const schemaType = (type: SchemaType = [] as any): ISchemaType => ({
  name: type[0],
  props: type.slice(1),
})

export type SchemaNode = [ number, number, number, number | string, ...string[] ]

export interface ISchemaNode {
  id: number
  type: number
  parent: number
  index: number
  items: string[]
}

export const schemaNode = (node: SchemaNode = [] as any): ISchemaNode => ({
  id: node[0],
  type: node[1],
  parent: node[2],
  index: node[3] as number,
  items: node.slice(4) as string[],
})

//   SchemaPatch = [ op,     id,     prop,   value/oldValue ]
export type SchemaPatch = [ number, number, number, any?, any? ]

export interface ISchemaPatch {
  op: number
  id: number
  prop: number
  values: any[]
}

export const schemaPatch = (patch: SchemaPatch = [] as any): ISchemaPatch => ({
  op: patch[0],
  id: patch[1],
  prop: patch[2],
  values: patch.slice(3),
})

export const check = (condition: any, error: string) => {
  if (condition) {
    throw new Error(error)
  }
}