import { IJsonPatch, PatchPack, Schema } from ".."

interface IClient {
  name: string
}

interface IClientEx extends IClient {
  info: string
}

interface IObject {
  id: number,
  name: string
}

interface IObjectEx extends IObject {
  foo: string
}

interface IState {
  clients: { [key: string]: IClient | IClientEx }
  objects: (IObject | IObjectEx)[]
}

const state: IState = {
  clients: {
    "1": { name: "Foo" },
    "2": { name: "Baz", info: "BazBaz" }
  },
  objects: [
    { id: 1, name: "obj1" },
    { id: 2, name: "obj2", foo: "Baz" },
  ]
}

const serverSchema = new Schema()

serverSchema.addType("State",  ["clients", "objects"])
serverSchema.addType("Client", ["name"])
serverSchema.addType("ClientEx", ["name", "info"])
serverSchema.addType("Object", ["id", "name"])
serverSchema.addType("ObjectEx", ["id", "name", "foo"])

serverSchema.addObjectNode (0, "State", -1, -1)
serverSchema.addMapNode    (1,           0, "clients")
serverSchema.addObjectNode (2, "Client", 1, "1")
serverSchema.addObjectNode (3, "ClientEx", 1, "2")
serverSchema.addArrayNode  (4,           0, "objects")
serverSchema.addObjectNode (5, "Object", 4, 0)
serverSchema.addObjectNode (6, "ObjectEx", 4, 1)

const server = new PatchPack(serverSchema)

const clientSchema = new Schema(JSON.parse(JSON.stringify(serverSchema)))
const client = new PatchPack(clientSchema)

describe("Copy schema from server to client ", () => {
  test("should be equal schemas", () => {
    expect(server.schema).toMatchObject(client.schema)
  })
})

describe("Encode / decode snapshot", () => {
  test(`should be equal full state snapshot on server and client`, () => {
    const encoded = server.encodeSnapshot(state, 0)
    expect(client.decodeSnapshot(encoded, 0)).toEqual(state)
  })

  test(`should be equal node snapshot on server and client`, () => {
    const encoded = server.encodeSnapshot(state.objects, 4)
    expect(client.decodeSnapshot(encoded, 4)).toEqual(state.objects)
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
    state.clients[id] = { name }
    const patch: IJsonPatch = { op: "add", path: `/clients/${id}`, value: { name } }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })
})

describe("Delete client from state", () => {
  const id = "2"
  const nodeId = 3

  test("should be equal patch and decoded patch", () => {
    delete state.clients[id]
    const patch: IJsonPatch = { op: "remove", path: `/clients/${nodeId}` }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })

  test("should be equal encoder/decoder schema patches and encoder/decoder schema be equal schema", () => {
    const patch = serverSchema.deleteNode(nodeId)!
    const encoded = server.encodeSchemaPatch(patch)
    expect(client.decodePatch(encoded, true)).toEqual(patch)

    expect(client.schema).toEqual(server.schema)
  })
})
