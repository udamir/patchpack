import {
  NODE_MAP_TYPE, NODE_ARRAY_TYPE, ISchema, SchemaNode,
  ISchemaNode, schemaType, schemaNode, SchemaType, IJsonPatch, check
} from "./common"

export class Schema {
  public types: SchemaType[]
  public nodes: SchemaNode[]

  constructor (schema?: ISchema) {
    this.types = schema && schema.types || []
    this.nodes = schema && schema.nodes || []
  }

  public add(type: "types" | "nodes", value: SchemaType | SchemaNode, index: number = this[type].length): IJsonPatch {
    const patch: IJsonPatch = { op: "add", path: `/${type}/${index}`, value: [ ...value ] }
    if (type === "nodes" && typeof value[3] === "string") {
      // value[3] is map key => need to add key to parent map
      const parentIndex = this.nodes.findIndex((n) => n[0] === value[2])
      const keyIndex = this.nodes[parentIndex].findIndex((n) => n === value[3])
      // check if key already exists
      if (keyIndex < 4) {
        // add key to map node
        this.addMapNodeKey(parentIndex, value[3])
        // put key index in value[3]
        value[3] = this.nodes[parentIndex].length - 5
      } else {
        // put key index in value[3]
        value[3] = keyIndex - 4
      }
    }
    // add value to schema
    this[type].splice(index, 0, value as any)
    return patch
  }

  public replace(type: "types" | "nodes", index: number, value: SchemaType | SchemaNode): IJsonPatch {
    this[type][index] = value
    return { op: "replace", path: `/${type}/${index}`, value, }
  }

  public remove(type: "types" | "nodes", index: number): IJsonPatch {
    this[type].splice(index, 1)
    return { op: "remove", path: `/nodes/${index}` }
  }

  public addType(name: string, props: string[]) {
    check(this.types.find((n) => n[0] === name), `Cannot add type to schema - type ${name} already exists!`)

    return this.add("types", [name, ...props])
  }

  public addArrayNode(nodeId: number, parentId: number, name: number | string): IJsonPatch {
    return this.addNode(nodeId, NODE_ARRAY_TYPE, parentId, name)
  }

  public addMapNode(nodeId: number, parentId: number, name: number | string, keys: string[] = []) {
    return this.addNode(nodeId, NODE_MAP_TYPE, parentId, name, keys)
  }

  public addObjectNode(nodeId: number, type: string, parentId: number, name: number | string) {
    const typeIndex = this.types.findIndex((n) => n[0] === type)
    check(typeIndex < 0, `Cannot add node to schema - node type ${type} is not found!`)

    return this.addNode(nodeId, typeIndex, parentId, name)
  }

  public addNode(nodeId: number, type: number, parentId: number, name: number | string, keys: string[] = []) {
    check(this.getNode(nodeId), `Cannot add node to schema - node with id ${nodeId} already exists!`)
    check(parentId === -1 && this.nodes.length, `Cannot add second root node to schema - only root node can have parentId -1!`)

    const parent = this.getNode(parentId)!
    check(!parent && parentId >= 0, `Cannot add node to schema - parent with id ${parentId} not found!`)

    const index = typeof name === "string" && (!parent || parent.type !== NODE_MAP_TYPE)
      ? this.getNodeIndex(parentId, name) : name
    check(index === -1 && this.nodes.length, `Cannot add node to schema - key/index "${name}" not exist!`)

    return this.add("nodes", [ nodeId, type, parentId, index, ...keys ])
  }

  public addMapNodeKey(index: number, key: string): IJsonPatch | undefined {
    const node = this.nodes[index]
    check(!node, `Cannot add key to schema - node with index ${index} not found`)
    check(node.slice(4).indexOf(key) >= 0, `Cannot add key to schema - key ${key} already exists!`)

    node.push(key)
    return { op: "add", path: `/nodes/${index}/${node.length - 1}`, value: key }
  }

  public deleteNode(nodeId: number, deleteChildren = false): IJsonPatch | undefined {
    const index = this.nodes.findIndex((n) => n[0] === nodeId)
    check(index < 0, `Cannot delete node to schema - node with id ${nodeId} not exists!`)

    if (deleteChildren) {
      this.nodes.filter((n) => n[2] === nodeId).forEach((n) => this.deleteNode(n[0]))
    }

    return this.remove("nodes", index)
  }

  public getTypeProps(index: number): string[] {
    const type = this.types[index]
    return type ? type.slice(1) : []
  }

  public getNodeName(sn: SchemaNode | ISchemaNode): string | number {
    const node = Array.isArray(sn) ? schemaNode(sn) : sn
    const parent = this.getNode(node.parent)
    if (!parent) {
      return ""
    } else if (parent.type === NODE_ARRAY_TYPE) {
      return node.index
    } else if (parent.type === NODE_MAP_TYPE) {
      return parent.items[node.index]
    } else {
      const { props } = schemaType(this.types[parent.type])
      return props[node.index]
    }
  }

  public getNodeIndex(parentId: number, name: string): number {
    const parent = this.getNode(parentId)
    if (!parent) {
      return -1
    } else if (parent.type === NODE_MAP_TYPE) {
      return parent.items.indexOf(name)
    } else if (parent.type === NODE_ARRAY_TYPE) {
      return +name
    } else {
      const props = this.getTypeProps(parent.type)
      return props.indexOf(name)
    }
  }

  public getNode(nodeId: number): ISchemaNode | undefined {
    const node = this.nodes.find((n) => n[0] === nodeId)
    return node && schemaNode(node)
  }

  public getNodePath(sn: SchemaNode | ISchemaNode): string {
    let node = Array.isArray(sn) ? schemaNode(sn) : sn
    const pathArr = []
    while (!!node) {
      pathArr.push(this.getNodeName(node))
      node = this.getNode(node.parent)!
    }
    return pathArr.reverse().join("/")
  }

  public getChildNode(sn: SchemaNode | ISchemaNode | undefined, name: string | number): ISchemaNode | undefined {
    if (!sn) {
      return this.findNode({ parent: -1 })
    }
    const node = Array.isArray(sn) ? schemaNode(sn) : sn
    if (node.type === NODE_ARRAY_TYPE) {
      return this.findNode({ parent: node.id, index: +name })
    } else if (node.type === NODE_MAP_TYPE) {
      return this.findNode({ parent: node.id, index: node.items.indexOf(name as string) })
    } else {
      const { props } = schemaType(this.types[node.type])
      return this.findNode({ parent: node.id, index: props.indexOf(name as string) })
    }
  }

  public findNode(query: { [key: string]: any }): ISchemaNode | undefined {
    const sn = this.nodes.find((n) => {
      const node = schemaNode(n) as any
      return !Object.keys(query).find((key) => node[key] !== query[key])
    })
    return sn && schemaNode(sn)
  }
}
