const patchpack = require('../browser/patchpack')

const schema = new patchpack.Schema()

describe("Add types to schema", () => {
  test(`should add type to schema types array`, () => {
    const index = schema.types.length
    const type = "State"
    const props = ["clients", "objects"]
    const patch = schema.addType(type, props)
    expect(schema.types[index]).toEqual([ type, ...props ])

    expect(patch).toEqual({ op: "add", path: `/types/${index}`, value: [ type, ...props ] })

    schema.addType("Client", ["name"])
    schema.addType("ClientEx", ["name", "info"])
    schema.addType("Object", ["id", "name"])
    schema.addType("ObjectEx", ["id", "name", "foo"])
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
    const patch = schema.addObjectNode(0, type, -1, "")

    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    const value = [ 0, typeIndex, -1, -1 ]

    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })

  const t1 = () => schema.addObjectNode(0, "asd", -1, -1)
  test('should throw error on adding node with existing id', () => {
    expect(t1).toThrow(Error)
  })

  const t2 = () => schema.addObjectNode(100, "asd", -1, -1)
  test('should throw error on adding node with not existing type', () => {
    expect(t2).toThrow(Error)
  })

  const t3 = () => schema.addObjectNode(100, "State", -1, -1)
  test('should throw error on adding second root node', () => {
    expect(t3).toThrow(`Cannot add second root node to schema - only root node can have parentId -1!`)
  })

  const t4 = () => schema.addObjectNode(100, "State", 0, -1)
  test('should throw error on adding second root node', () => {
    expect(t4).toThrow(`Cannot add node to schema - key/index "-1" not exist!`)
  })
})

describe("Add map node to schema", () => {
  test(`should add map node to schema`, () => {
    const index = schema.nodes.length
    const name = "clients"
    const patch = schema.addMapNode (1, 0, name, [])
    const propIndex = schema.getTypeProps(0).indexOf(name)
    const value = [ 1, patchpack.NODE_MAP_TYPE, 0, propIndex]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })
})

describe("Add map child node to schema", () => {
  test(`should add map child node to schema types array`, () => {
    const index = schema.nodes.length
    const id = "1"
    const type = "Client"
    const patch = schema.addObjectNode (2, type, 1, id)
    const propIndex = schema.getNode(1).items.indexOf(id)
    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    expect(schema.nodes[index]).toEqual([ 2, typeIndex, 1, propIndex ])

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value: [ 2, typeIndex, 1, id ] })

    expect(schema.getNode(1).items.includes(id)).toEqual(true)

    schema.addObjectNode (3, "ClientEx", 1, "2")
  })
})

describe("Add array child node to schema", () => {
  test(`should add node to schema types array`, () => {
    const index = schema.nodes.length
    const name = "objects"
    const patch = schema.addArrayNode (4, 0, name)
    const propIndex = schema.getTypeProps(0).indexOf(name)
    const value = [ 4, patchpack.NODE_ARRAY_TYPE, 0, propIndex ]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })
  })

  const t1 = () => schema.addArrayNode (100, 0, "objects1")
  test('should throw error on adding node with not existing key', () => {
    expect(t1).toThrow("Cannot add node to schema - key/index \"objects1\" not exist!")
  })
})

describe("Add array child node to schema", () => {
  test(`should add map child node to schema types array`, () => {
    const index = schema.nodes.length
    const type = "Object"
    const patch = schema.addObjectNode (5, type, 4, 0)
    const typeIndex = schema.types.findIndex((n) => n[0] === type)
    const value = [ 5, typeIndex, 4, 0 ]
    expect(schema.nodes[index]).toEqual(value)

    expect(patch).toEqual({ op: "add", path: `/nodes/${index}`, value })

    schema.addObjectNode (6, "ObjectEx", 4, 1)
  })
})

describe("Delete array child node from schema", () => {
  test(`should remove array child node from schema`, () => {
    const id = 5
    const index = schema.nodes.findIndex((n) => n[0] === id)
    const patch = schema.deleteNode(id)
    expect(!!schema.nodes.find((n) => n[0] === id)).toEqual(false)
    expect(patch).toEqual({ op: "remove", path: `/nodes/${index}` })
  })
})

describe("Delete map node with children from schema", () => {
  test(`should add map child node to schema types array`, () => {
    const id = 1
    const node = schema.getNode(id)
    const index = schema.nodes.findIndex((n) => n[0] === id)
    const patch = schema.deleteNode(id, true)
    expect(!!schema.nodes.find((n) => n[0] === id)).toEqual(false)
    expect(!!schema.getChildNode(node, node.items[0])).toEqual(false)
    expect(!!schema.getChildNode(node, node.items[1])).toEqual(false)

    expect(patch).toEqual({ op: "remove", path: `/nodes/${index}` })
  })

  const t1 = () => schema.deleteNode(1)
  test('should throw error on deleting not existing node', () => {
    expect(t1).toThrow("Cannot delete node to schema - node with id 1 not exists!")
  })
})

const state2 = {
  clients: {
    "1": { name: "Foo" },
    "2": { name: "Baz" }
  },
  objects: [
    { id: 1, name: "obj1" },
    { id: 2, name: "obj2", foo: "Baz" },
  ]
}

const serverSchema = new patchpack.Schema()

serverSchema.addType("State",  ["clients", "objects"])
serverSchema.addType("Client", ["name"])
serverSchema.addType("ClientEx", ["name", "info"])
serverSchema.addType("Object", ["id", "name"])
serverSchema.addType("ObjectEx", ["id", "name", "foo"])

serverSchema.addObjectNode (0, "State", -1, -1)
serverSchema.addMapNode    (1,           0, "clients")
serverSchema.addObjectNode (2, "Client", 1, "1")
serverSchema.addObjectNode (3, "Client", 1, "2")
serverSchema.addArrayNode  (4,           0, "objects")
serverSchema.addObjectNode (5, "Object", 4, 0)
serverSchema.addObjectNode (6, "ObjectEx", 4, 1)

const server = new patchpack.PatchPack(serverSchema)

const clientSchema = new patchpack.Schema(JSON.parse(JSON.stringify(serverSchema)))
const client = new patchpack.PatchPack(clientSchema)

describe("Copy schema from server to client ", () => {
  test("should be equal schemas", () => {
    expect(server.schema).toMatchObject(client.schema)
  })
})

describe("Encode / decode snapshot", () => {
  test(`should be equal full state snapshot on server and client`, () => {
    const encoded = server.encodeSnapshot(state2, 0)
    expect(client.decodeSnapshot(encoded, 0)).toEqual(state2)
  })

  test(`should be equal node snapshot on server and client`, () => {
    const encoded = server.encodeSnapshot(state2.objects, 4)
    expect(client.decodeSnapshot(encoded, 4)).toEqual(state2.objects)
  })
})

describe("Add new client to state", () => {
  const id = "3"
  const name = "Abc"
  test("should be equal encoder/decoder schema patches and encoder/decoder schema", () => {

    const patch = serverSchema.addObjectNode (serverSchema.nodes.length, "Client", 1, id)
    const encoded = server.encodeSchemaPatch(patch)
    expect(client.decodePatch(encoded, true)).toEqual(patch)

    expect(client.schema).toEqual(server.schema)
  })

  test("should be equal patch and decoded patch", () => {
    state2.clients[id] = { name }
    const patch = { op: "add", path: `/clients/${id}`, value: { name } }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })
})

describe("Delete client from state", () => {
  const id = "2"
  const nodeId = 3

  test("should be equal patch and decoded patch", () => {
    delete state2.clients[id]
    const patch = { op: "remove", path: `/clients/${nodeId}` }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })

  test("should be equal encoder/decoder schema patches and encoder/decoder schema be equal schema", () => {
    const patch = serverSchema.deleteNode(nodeId)
    const encoded = server.encodeSchemaPatch(patch)
    expect(client.decodePatch(encoded, true)).toEqual(patch)

    expect(client.schema).toEqual(server.schema)
  })
})
