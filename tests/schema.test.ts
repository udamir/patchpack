import { NODE_ARRAY_TYPE, NODE_MAP_TYPE, Schema } from ".."
import { IJsonPatch } from "../src/common"

const schema = new Schema()

describe("Add types to schema", () => {
  const types = {
    "State": ["clients", "objects"],
    "Client": ["name"],
    "ClientEx": ["name", "info"],
    "Object": ["id", "name"]
  }
  test(`should add types to schema`, () => {
    const patches = schema.addTypes(types)
    expect(schema.types.length).toEqual(Object.keys(types).length)

    Object.keys(types).forEach((type, i) => {
      const props = (types as any)[type]
      expect(schema.types[i]).toEqual([ type, ...props ])
      expect(patches[i]).toEqual({ op: "add", path: `/types/${i}`, value: [ type, ...props ] })
    })
  })


  test(`should add type to schema types array`, () => {
    const index = schema.types.length
    const type = "ObjectEx"
    const props = ["id", "name", "foo"]
    const patch = schema.addType(type, props)
    expect(schema.types[index]).toEqual([ type, ...props ])

    expect(patch).toEqual({ op: "add", path: `/types/${index}`, value: [ type, ...props ] })
  })

  const t = () => schema.addType("State", [])
  test('should throw error on adding type twice', () => {
    expect(t).toThrow(Error)
  })
})

describe("Add object node to schema", () => {
  test(`should add node to schema types array and get patch`, () => {
    const index = schema.nodes.length
    const type = "State"
    const patch = schema.nodesAddObject(0, type, -1, "")

    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    const value = [ 0, typeIndex, -1, -1 ]

    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })

  const t1 = () => schema.nodesAddObject(0, "asd", -1, -1)
  test('should throw error on adding node with existing id', () => {
    expect(t1).toThrow(Error)
  })

  const t2 = () => schema.nodesAddObject(100, "asd", -1, -1)
  test('should throw error on adding node with not existing type', () => {
    expect(t2).toThrow(Error)
  })

  const t3 = () => schema.nodesAddObject(100, "State", -1, -1)
  test('should throw error on adding second root node', () => {
    expect(t3).toThrow(`Cannot add second root node to schema - only root node can have parentId -1!`)
  })

  const t4 = () => schema.nodesAddObject(100, "State", 0, -1)
  test('should throw error on adding second root node', () => {
    expect(t4).toThrow(`Cannot add node to schema - key/index "-1" not exist!`)
  })
})

describe("Add map node to schema", () => {
  test(`should add map node to schema`, () => {
    const index = schema.nodes.length
    const name = "clients"
    const patch = schema.nodesAddMap (1, 0, name, [])
    const propIndex = schema.getTypeProps(0).indexOf(name)
    const value = [ 1, NODE_MAP_TYPE, 0, propIndex]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })
})

describe("Add map child node to schema", () => {
  test(`should add map child node to schema types array`, () => {
    const index = schema.nodes.length
    const id = "1"
    const type = "Client"
    const patch = schema.nodesAddObject (2, type, 1, id)
    const propIndex = schema.getNode(1)!.items.indexOf(id)
    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    expect(schema.nodes[index]).toEqual([ 2, typeIndex, 1, propIndex ])

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value: [ 2, typeIndex, 1, id ] })

    expect(schema.getNode(1)!.items.includes(id)).toEqual(true)

    schema.nodesAddObject (3, "ClientEx", 1, "2")
  })
})

describe("Add key to map node", () => {
  const id = 1
  const key = "test"
  test(`should add key to map `, () => {
    const nodeIndex = schema.nodes.findIndex((n) => n[0] === id)
    const itemIndex = schema.nodes[nodeIndex].length
    const patch = schema.nodesAddMapKey(id, key)

    expect(schema.nodes[nodeIndex].length).toEqual(itemIndex + 1)
    expect(schema.nodes[nodeIndex][itemIndex]).toEqual(key)

    expect(patch).toEqual({ op: "add", path: `/nodes/${nodeIndex}/${itemIndex}`, value: key })
  })

  const t1 = () => schema.nodesAddMapKey(id, key)
  test('should throw error on adding existing key', () => {
    expect(t1).toThrow("Cannot add key to schema - key test already exists!")
  })
})

describe("Add array child node to schema", () => {
  test(`should add node to schema types array`, () => {
    const index = schema.nodes.length
    const name = "objects"
    const patch = schema.nodesAddArray (4, 0, name)
    const propIndex = schema.getTypeProps(0).indexOf(name)
    const value = [ 4, NODE_ARRAY_TYPE, 0, propIndex ]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })

  const t1 = () => schema.nodesAddArray (100, 0, "objects1")
  test('should throw error on adding node with not existing key', () => {
    expect(t1).toThrow("Cannot add node to schema - key/index \"objects1\" not exist!")
  })
})

describe("Add array child node to schema", () => {
  test(`should add map child node to schema types array`, () => {
    const index = schema.nodes.length
    const type = "Object"
    const patch = schema.nodesAddObject (5, type, 4, 0)
    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    const value = [ 5, typeIndex, 4, 0 ]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })

    schema.nodesAddObject (6, "ObjectEx", 4, 1)
  })
})

describe("Update schema via patch", () => {
  test('should add node to schema', () => {
    const len = schema.nodes.length
    const value = [ len, 1, 4, 1 ]
    const patch: IJsonPatch = { op: "add", path: `/nodes/${len}`, value }
    schema.applyPatch(patch)
    expect(schema.nodes.length).toEqual(len+1)
    expect(schema.nodes[len]).toEqual(value)
  })

  test('should delete node from schema', () => {
    const len = schema.nodes.length - 1
    const patch: IJsonPatch = { op: "remove", path: `/nodes/${len}` }
    schema.applyPatch(patch)
    expect(schema.nodes.length).toEqual(len)
  })
})

describe("Delete array child node from schema", () => {
  test(`should remove array child node from schema by id`, () => {
    const id = 5
    const index = schema.nodes.findIndex((n) => n[0] === id)
    const patch = schema.nodesDelete(id)
    expect(!!schema.nodes.find((n) => n[0] === id)).toEqual(false)
    expect(patch).toEqual({ op: "remove", path: `/nodes/${index}` })
    expect(schema.nodes[index][0]).toEqual(6)
    expect(schema.nodes[index][3]).toEqual(0)
  })

  test(`should remove array child node from schema by path`, () => {
    const len = schema.nodes.length
    const path = `objects/0`
    const patch = schema.deleteNode(path)
    expect(schema.nodes.length).toEqual(len - 1)
    expect(patch).toEqual({ op: "remove", path: `/nodes/5` })
  })
})

describe("Delete map node with children from schema", () => {
  test(`should add map child node to schema types array`, () => {
    const id = 1
    const node = schema.getNode(id)!
    const index = schema.nodes.findIndex((n) => n[0] === id)
    const patch = schema.nodesDelete(id, true)
    expect(!!schema.nodes.find((n) => n[0] === id)).toEqual(false)
    expect(!!schema.getChildNode(node, node.items[0])).toEqual(false)
    expect(!!schema.getChildNode(node, node.items[1])).toEqual(false)

    expect(patch).toEqual({ op: "remove", path: `/nodes/${index}` })
  })

  const t1 = () => schema.nodesDelete(1)
  test('should throw error on deleting not existing node', () => {
    expect(t1).toThrow("Cannot delete node to schema - node with id 1 not exists!")
  })
})
