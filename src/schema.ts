import {
  NODE_MAP_TYPE, NODE_ARRAY_TYPE, TSchemaNode, SchemaNode,
  TSchemaType, IJsonPatch, check
} from "./common"

export class Schema {
  public types: TSchemaType[]
  public nodes: TSchemaNode[]
  private _nextId: number = 0

  constructor (types?: TSchemaType[], nodes?: TSchemaNode[]) {
    this.types = types || []
    this.nodes = nodes || []
  }

  get nextId() {
    return this._nextId++
  }

  public applyPatch(patch: IJsonPatch): IJsonPatch {
    const pathArr = patch.path.split("/")
    const type = pathArr[1] as any
    const index = +pathArr[2]
    switch (patch.op) {
      case "add":
        return pathArr.length === 4
          ? this.nodesAddMapKey(index, patch.value)
          : this.add(type, patch.value, index)
      case "remove":
        return this.remove(type, index)
      case "replace":
        return this.replace(type, index, patch.value)
    }
  }

  public buildFrom(value: any): IJsonPatch[] {
    this.nodes.length = 0
    this._nextId = 0
    return this.createNode(value, { key: -1 })
  }

  public updateFrom(patch: IJsonPatch): IJsonPatch[] {
    return patch.op === "remove"
     ? [this.deleteNode(patch.path)]
     : this.addNodeFrom(patch.value, patch.path)
  }

  public addNodeFrom(value: any, path: string): IJsonPatch[] {
    path = path[0] === "/" ? path.slice(1) : path
    const pathArr = path.split("/").reverse()
    let node = this.findNode({ parent: -1 })!

    while (pathArr.length > 1) {
      node = this.getChildNode(node, pathArr.pop()!)!
      check (!node,`Cannot add new node - wrong path: ${path}`)
    }
    return this.createNode(value, { parent: node, key: pathArr[0] })
  }

  public deleteNode(path: string): IJsonPatch {
    path = path[0] === "/" ? path.slice(1) : path
    const pathArr = path.split("/").reverse()

    let node = this.findNode({ parent: -1 })!
    check(!node, `Cannot delet node - no nodes in schema!`)

    while (pathArr.length) {
      node = this.getChildNode(node, pathArr.pop()!)!
      check(!node, `Cannot delete node - wrong path: ${path}`)
    }
    return this.nodesDelete(node.id)
  }

  public addType(name: string, props: string[]): IJsonPatch {
    check(this.types.find((n) => n[0] === name), `Cannot add type to schema - type ${name} already exists!`)

    return this.add("types", [name, ...props])
  }

  public addTypes(types: { [type: string]: string[] }): IJsonPatch[] {
    return Object.keys(types).map((key) => this.addType(key, types[key]))
  }

  public nodesAddArray(nodeId: number, parentId: number, name: number | string): IJsonPatch {
    return this.nodesAdd(nodeId, NODE_ARRAY_TYPE, parentId, name)
  }

  public nodesAddMap(nodeId: number, parentId: number, name: number | string, keys: string[] = []) {
    return this.nodesAdd(nodeId, NODE_MAP_TYPE, parentId, name, keys)
  }

  public nodesAddObject(nodeId: number, type: string, parentId: number, name: number | string) {
    const typeIndex = this.types.findIndex((n) => n[0] === type)
    check(typeIndex < 0, `Cannot add node to schema - node type ${type} is not found!`)

    return this.nodesAdd(nodeId, typeIndex, parentId, name)
  }

  public nodesAdd(nodeId: number, type: number, parentId: number, name: number | string, keys: string[] = []) {
    check(this.getNode(nodeId), `Cannot add node to schema - node with id ${nodeId} already exists!`)
    check(parentId === -1 && this.nodes.length, `Cannot add second root node to schema - only root node can have parentId -1!`)

    const parent = this.getNode(parentId)!
    check(!parent && parentId >= 0, `Cannot add node to schema - parent with id ${parentId} not found!`)

    const index = typeof name === "string" && (!parent || parent.type !== NODE_MAP_TYPE)
      ? this.getNodeIndex(parent, name) : name
    check(index === -1 && this.nodes.length, `Cannot add node to schema - key/index "${name}" not exist!`)

    return this.add("nodes", [ nodeId, type, parentId, index, ...keys ])
  }

  public nodesAddMapKey(nodeId: number, key: string): IJsonPatch {
    const index = this.nodes.findIndex((n) => n[0] === nodeId)
    const node = this.nodes[index]
    check(!node, `Cannot add key to schema - node with id ${nodeId} not found`)
    check(node[1] !== NODE_MAP_TYPE, `Cannot add key to schema - node with id ${nodeId} must be map type`)
    check(node.slice(4).indexOf(key) >= 0, `Cannot add key to schema - key ${key} already exists!`)

    node.push(key)
    return { op: "add", path: `/nodes/${index}/${node.length - 1}`, value: key }
  }

  public nodesDelete(nodeId: number, deleteChildren = true): IJsonPatch {
    const index = this.nodes.findIndex((n) => n[0] === nodeId)
    check(index < 0, `Cannot delete node to schema - node with id ${nodeId} not exists!`)

    // delete child nodes
    if (deleteChildren) {
      this.nodes.filter((n) => n[2] === nodeId).forEach((n) => this.nodesDelete(n[0]))
    }

    // update nodes array index
    const node = new SchemaNode(this.nodes[index], index)
    const parent = this.getNode(node.parent)
    if (parent && parent.type === NODE_ARRAY_TYPE) {
      this.nodes.filter((n) => n[2] === parent.id && n[3] > node.index).forEach((n: TSchemaNode) => n[3] = +n[3] - 1)
    }

    return this.remove("nodes", index)
  }

  public getTypeProps(index: number): string[] {
    const type = this.types[index]
    return type ? type.slice(1) : []
  }

  public getNodeName(sn: SchemaNode): string | number {
    const node = sn
    const parent = this.getNode(node.parent)
    if (!parent) {
      return ""
    } else if (parent.type === NODE_ARRAY_TYPE) {
      return node.index
    } else if (parent.type === NODE_MAP_TYPE) {
      return parent.items[node.index]
    } else {
      const props = this.types[parent.type].slice(1)
      return props[node.index]
    }
  }

  public getNodeIndex(parent: SchemaNode, name: string): number {
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

  public getNode(nodeId: number): SchemaNode | undefined {
    const index = this.nodes.findIndex((n) => n[0] === nodeId)
    return index >= 0 ? new SchemaNode(this.nodes[index], index) : undefined
  }

  public getNodePath(sn: SchemaNode): string {
    let node = sn
    const pathArr = []
    while (!!node) {
      pathArr.push(this.getNodeName(node))
      node = this.getNode(node.parent)!
    }
    return pathArr.reverse().join("/")
  }

  public getChildNode(sn: SchemaNode | undefined, name: string | number): SchemaNode | undefined {
    if (!sn) { return this.findNode({ parent: -1 }) }
    const node = sn
    if (node.type === NODE_ARRAY_TYPE) {
      return this.findNode({ parent: node.id, index: +name })
    } else if (node.type === NODE_MAP_TYPE) {
      return this.findNode({ parent: node.id, index: node.items.indexOf(name as string) })
    } else {
      const props = this.types[node.type].slice(1)
      return this.findNode({ parent: node.id, index: props.indexOf(name as string) })
    }
  }

  public findNode(query: { [key: string]: any }): SchemaNode | undefined {
    const index = this.nodes.findIndex((n, i) => {
      const node = new SchemaNode(n, i) as any
      return !Object.keys(query).find((key) => node[key] !== query[key])
    })
    return index >=0 ? new SchemaNode(this.nodes[index], index) : undefined
  }


  private findType(keys: string[]): string | null {
    const type = this.types.find((t) => {
      for (const key of keys) {
        if (t.indexOf(key) < 1) { return false }
      }
      return true
    })
    return type ? type[0] : null
  }

  public createNode(value: any, meta: any): IJsonPatch[] {
    const { parent, key } = meta
    const parentId = parent ? parent.id : -1
    const oldNode = this.getChildNode(parent, key)
    const nodeIndex = this.nodes.length

    if (oldNode) {
      // delete old node with child nodes
      this.nodesDelete(oldNode.id)
    }

    const patches: IJsonPatch[] = []
    if (Array.isArray(value)) {
      const nodeId = oldNode ? oldNode.id : this.nextId

      const patch = this.nodesAddArray(nodeId, parentId, key)
      if (oldNode) { patch.op = "replace" }
      const node = new SchemaNode(this.nodes[nodeIndex], nodeIndex)

      patches.push(patch)
      value.forEach((item, i) => {
        patches.push(...this.createNode(item, { parent: node, key: i }))
      })
    } else if (typeof value === "object") {
      const nodeId = oldNode ? oldNode.id : this.nextId
      const type = this.findType(Object.keys(value))

      const patch = !type
        ? this.nodesAddMap(nodeId, parentId, key)
        : this.nodesAddObject(nodeId, type, parentId, key)
      if (oldNode) { patch.op = "replace" }
      const node = new SchemaNode(this.nodes[nodeIndex], nodeIndex)

      patches.push(patch)
      Object.keys(value).forEach((childKey) => {
        patches.push(...this.createNode(value[childKey], { parent: node, key: childKey }))
      })
    } else {
      if (typeof value === "function" || typeof value === "symbol") {
        const path = this.getNodePath(parent)
        throw new Error (`Cannot build schema - wrong value on path ${path}/${key}`)
      }
      if (oldNode) {
        patches.push(this.nodesDelete(oldNode.id, false))
      } else if (parent.type === NODE_MAP_TYPE) {
        patches.push(this.nodesAddMapKey(parentId, key)!)
      }
    }
    return patches
  }

  private add(type: "types" | "nodes", value: TSchemaType | TSchemaNode, index?: number): IJsonPatch {
    index = index === undefined ? this[type].length : index
    const patch: IJsonPatch = { op: "add", path: `/${type}/${index}`, value: [ ...value ] }
    if (type === "nodes" && typeof value[3] === "string") {
      // value[3] is map key => need to add key to parent map
      const parent = this.getNode(value[2] as number)!
      const keyIndex = parent.items.findIndex((n) => n === value[3])
      // check if key already exists
      if (keyIndex < 0) {
        // add key to map node
        this.nodesAddMapKey(parent.id, value[3])
        // put key index in value[3]
        value[3] = parent.items.length - 1
      } else {
        // put key index in value[3]
        value[3] = keyIndex
      }
    }
    // add value to schema
    this[type].splice(index, 0, value as any)
    return patch
  }

  private replace(type: "types" | "nodes", index: number, value: TSchemaType | TSchemaNode): IJsonPatch {
    this[type][index] = value
    return { op: "replace", path: `/${type}/${index}`, value, }
  }

  private remove(type: "types" | "nodes", index: number): IJsonPatch {
    this[type].splice(index, 1)
    return { op: "remove", path: `/nodes/${index}` }
  }
}
