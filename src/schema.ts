import {
  MAP_NODE, ARRAY_NODE, TSchemaNode,
  TSchemaType, IJsonPatch, check, ISchemaType, ISchemaNode, NodeType
} from "./common"

export class Schema {
  private _types: ISchemaType[]
  private _nodes: ISchemaNode[]
  private _nextId: number = 0

  constructor () {
    this._nodes = []
    this._types = []
  }

  public get types(): TSchemaType[] {
    return this._types.map(( { name, props }) => [ name, ...props ])
  }

  public get nodes(): TSchemaNode[] {
    return this._nodes.map((n) => {
      const typeIndex = typeof n.type === "object" ? n.type.index : n.type
      const parentId = n.parent ? n.parent.id : -1
      const index = n.parent?.type === MAP_NODE ? n.key : n.index
      return [ n.id, typeIndex, parentId, index ]
    })
  }

  public get root(): ISchemaNode {
    return this._nodes[0]
  }

  public get nextId() {
    return this._nextId++
  }

  public apply(types: TSchemaType[], nodes: TSchemaNode[]) {
    this._types = []
    this._nodes = []

    const parents: ISchemaNode[] = []
    const getParent = (parentId: number) => {
      const index = parents.findIndex((n) => n.id === parentId)
      if (index > 0) {
        parents.splice(0, index)
      }
      return parents[0]
    }

    types.forEach(([name, ...props]) => this.addType(name, props))
    nodes.map((n,i) => [...n, i]).sort((a: any, b: any) => a[2] - b[2]).forEach((n: any) => {
      const index = n.pop()
      const parent = getParent(n[2])
      parents.push(this.nodesAdd(parent, n, index))
    })
  }

  public nodesAdd(parent: ISchemaNode, node: TSchemaNode, nodeIndex?: number, patches?: IJsonPatch[]) {
    const [id, typeIndex, parentId, index] = node
    parent = parent === undefined ? this.getNode(parentId)! : parent
    const type: any = typeIndex < 0 ? typeIndex : this._types[typeIndex]
    const key = this.getChildName(parent, index)
    return this.createNode(id, parent, type, key, patches, nodeIndex)
  }

  public applyPatch(patch: IJsonPatch) {
    const [, type, index, key] = patch.path.split("/")
    switch (patch.op) {
      case "add":
        if (type === "nodes") {
          return key
            ? this.nodesAddMapKey(+index, patch.value)
            : this.nodesAdd(this._nodes[+index], patch.value, +index)
        } else {
          this.addType(patch.value[0], patch.value.slice(1))
        }
      // case "remove":
      //   return this.removeNode(type, index)
      // case "replace":
      //   return this.replace(type, index, patch.value)
    }
  }

  // public deleteNode(path: string): IJsonPatch {
  //   path = path[0] === "/" ? path.slice(1) : path
  //   const pathArr = path.split("/").reverse()

  //   let node = this.findNode({ parent: -1 })!
  //   check(!node, `Cannot delet node - no nodes in schema!`)

  //   while (pathArr.length) {
  //     node = this.getChildNode(node, pathArr.pop()!)!
  //     check(!node, `Cannot delete node - wrong path: ${path}`)
  //   }
  //   return this.nodesDelete(node.id)
  // }

  public addType(name: string, props: string[]) {
    check(this.types.find((n) => n[0] === name), `Cannot add type to schema - type ${name} already exists!`)
    this._types.push({ name, props, index: this._types.length })
    // return this.add("types", [name, ...props])
  }

  public addTypes(types: { [type: string]: string[] }) {
    Object.keys(types).map((key) => this.addType(key, types[key]))
  }

  public nodesAddMapKey(index: number, key: string): IJsonPatch {
    const node = this._nodes[index]
    check(!node, `Cannot add key to schema - node not found`)
    check(node.type !== MAP_NODE, `Cannot add key to schema - node with id ${node.id} must be map type`)
    check(node.keys!.indexOf(key) >= 0, `Cannot add key to schema - key ${key} already exists!`)

    const shift = node.keys!.push(key) + 3
    return { op: "add", path: `/nodes/${index}/${shift}`, value: key }
  }

  // public nodesDelete(nodeId: number, deleteChildren = true): IJsonPatch {
  //   const index = this.nodes.findIndex((n) => n[0] === nodeId)
  //   check(index < 0, `Cannot delete node to schema - node with id ${nodeId} not exists!`)

  //   // delete child nodes
  //   if (deleteChildren) {
  //     this.nodes.filter((n) => n[2] === nodeId).forEach((n) => this.nodesDelete(n[0]))
  //   }

  //   // update nodes array index
  //   const node = new SchemaNode(this.nodes[index], index)
  //   const parent = this.getNode(node.parent)
  //   if (parent && parent.type === ARRAY_NODE) {
  //     this.nodes.filter((n) => n[2] === parent.id && n[3] > node.index).forEach((n: TSchemaNode) => n[3] = +n[3] - 1)
  //   }

  //   return this.remove("nodes", index)
  // }

  public getNode(nodeId: number): ISchemaNode | undefined {
    return this._nodes.find((n) => n.id === nodeId)
  }

  public getNodePath(sn?: ISchemaNode, key?: string | number): string {
    let node = sn
    const pathArr = []
    while (!!node) {
      pathArr.push(node.key)
      node = node.parent!
    }
    return pathArr.reverse().join("/") + (!key ? "" : ("/" + key))
  }

  public getChildNode(sn: ISchemaNode, name: string | number): ISchemaNode | undefined {
    let index = -1
    if (sn.type === ARRAY_NODE) {
      index = +name
    } else {
      const keys = sn.type === MAP_NODE ? sn.keys! : sn.type.props
      index = keys.indexOf(name as string)
    }
    return sn.items[index]
  }

  public findType(value: any): ISchemaType | undefined {
    const keys = Object.keys(value)
    const type = this._types.find((t) => {
      for (const key of keys) {
        if (t.props.indexOf(key) < 0) { return false }
      }
      return true
    })
    return type
  }

  public getChildIndex (parent: ISchemaNode, key: string | number): number {
    if (parent.type === ARRAY_NODE) {
      return +key
    } else {
      const keys = parent.type === MAP_NODE ? parent.keys! : parent.type.props
      return keys.indexOf(key as string)
    }
  }

  public getChildName (parent: ISchemaNode | undefined, index: number | string): string | number {
    if (!parent) { return "" }
    if (typeof index === "string") {
      return index
    } else if (parent.type === ARRAY_NODE) {
      return index
    } else {
      const keys = parent.type === MAP_NODE ? parent.keys! : parent.type.props
      return keys[index]
    }
  }

  public createNode(id: number, parent: ISchemaNode | undefined, type: NodeType, key: string | number,
    patches: IJsonPatch[] | null = null, nodeIndex?: number): ISchemaNode {

    nodeIndex = nodeIndex === undefined ? this._nodes.length : nodeIndex
    const index = parent ? (parent.keys ? parent.keys.length : this.getChildIndex(parent, key)) : -1
    const node: ISchemaNode = { id, type, parent, key, index, items: [] }

    if (type === MAP_NODE) {
      node.keys = []
    }

    patches && patches.push({
      op: "add", path: `/nodes/${nodeIndex}`, value: [
        id,
        typeof type === "object" ? type.index : type,
        parent ? parent.id : -1,
        parent?.type === MAP_NODE ? key : index
      ]
    })

    parent?.items.push(node)
    parent?.keys?.length === index && parent.keys.push(key as string)
    this._nodes[nodeIndex] = node

    return node
  }

  // private replace(type: "types" | "nodes", index: number, value: TSchemaType | TSchemaNode): IJsonPatch {
  //   this[type][index] = value
  //   return { op: "replace", path: `/${type}/${index}`, value, }
  // }

  // private remove(type: "types" | "nodes", index: number): IJsonPatch {
  //   this[type].splice(index, 1)
  //   return { op: "remove", path: `/nodes/${index}` }
  // }
}
