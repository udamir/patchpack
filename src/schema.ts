import { MAP_NODE, ARRAY_NODE, ISchemaType, ISchemaNode, NodeType, TSchemaType, Type } from "./common"

export class Schema {
  private _types!: ISchemaType[]
  private _nodes!: ISchemaNode[]
  private _deleted: ISchemaNode[]
  private _nextId: number = 0

  constructor (types: { [type: string]: string[] | Type<any>}) {
    this._nodes = []
    this._deleted = []
    this._types = Object.keys(types).map((name, i) => {
      const t = types[name]
      if (Array.isArray(t)) {
        return { name, props: t, index: i }
      } else {
        // tslint:disable-next-line: new-parens
        return { name: t.name, props: Object.getOwnPropertyNames(new t), index: i, ref: t}
      }
    })
  }

  public get types(): TSchemaType[] {
    return this._types.map(( { name, props }) => [ name, ...props ])
  }

  public get deleted(): ISchemaNode[] {
    return this._deleted
  }

  public addType(name: string, props: string[], ref?: Type<any>) {
    const index = this._types.length
    this._types.push({ name, props, index, ref })
  }

  public typeByName(name: string): ISchemaType | undefined {
    return this._types.find((t) => t.name === name)
  }

  public get root(): ISchemaNode {
    return this._nodes[0]
  }

  public get nextId() {
    return this._nextId++
  }

  public init(types: TSchemaType[]) {
    this._types = []
    this._nodes = []

    types.forEach(([name, ...props]) => this._types.push({ name, props, index: this._types.length }))
  }

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
    return pathArr.reverse().join("/") + (key === undefined ? "" : ("/" + key))
  }

  public getChildNode(sn: ISchemaNode, name: string | number): ISchemaNode | undefined {
    if (sn.type === MAP_NODE) {
      return sn.items.find(({ key }) => key === name)
    } else if (sn.type === ARRAY_NODE) {
      return sn.items.find(({ index }) => index === +name)
    } else {
      return sn.items.find(({ key }) => key === name)
    }
  }

  public findType(value: any): ISchemaType | undefined {

    const keys = Object.keys(value)
    const type = this._types.find((t) => {
      if (t.ref) {
        return value instanceof t.ref
      }
      for (const key of keys) {
        if (t.props.indexOf(key) < 0) { return false }
      }
      return true
    })
    return type
  }

  public getType(index: number): NodeType {
    return index < 0 ? index as NodeType : this._types[index]
  }

  public getChildIndex (parent: ISchemaNode, key: string | number): number {
    if (parent.type === MAP_NODE) {
      return parent.keys!.indexOf(key as string)
    } else if (parent.type === ARRAY_NODE) {
      return +key
    } else {
      return parent.type.props.indexOf(key as string)
    }
  }

  public getChildName (parent: ISchemaNode | undefined, index: number): string | number {
    if (!parent) { return "" }
    if (parent.type === MAP_NODE) {
      return parent.keys![index]
    } else if (parent.type === ARRAY_NODE) {
      return index
    } else {
      return parent.type.props[index]
    }
  }

  public createNode(id: number, parent: ISchemaNode | undefined, type: NodeType, key: string | number, index: number) {

    const node: ISchemaNode = { id, type, parent, key, index, items: [] }

    if (type === MAP_NODE) {
      node.keys = []
    }

    parent?.items.push(node)
    this._nodes.push(node)

    return node
  }

  public deleteNode(node: ISchemaNode) {
    if (node.parent) {
      const itemIndex = node.parent.items.indexOf(node)
      node.parent.items.splice(itemIndex, 1)
    }
    node.items.forEach((child) => this.deleteNode(child))
    const index = this._nodes.indexOf(node)
    this._nodes.splice(index, 1)
    this._deleted.push(node)
  }

  public getDeletedNode(sn: ISchemaNode | undefined, name: string | number): ISchemaNode | undefined {
    if (!sn) { return }
    if (sn.type === ARRAY_NODE) {
      return this._deleted.find(({ parent, index }) => index === +name && parent === sn)
    } else {
      return this._deleted.find(({ parent, key }) => key === name && parent === sn)
    }
  }

  public clearDeleted() {
    this._deleted = []
  }
}
