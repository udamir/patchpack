import { IJsonPatch, PatchPack, Schema } from ".."

const state: any = {
  clients: {
    "1": { name: "Foo" },
    "2": { name: "Baz" }
  },
  objects: [
    { id: 1, name: "obj1" },
    { id: 2, name: "obj2", foo: "Baz" },
  ]
}

const serverSchema = new Schema()

serverSchema.addTypes({
  "State": ["clients", "objects"],
  "Client": ["name", "info"],
  "Object": ["id", "name", "foo"],
})

serverSchema.buildFrom(state)

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
    const encoded = server.encodeSnapshot(state)
    expect(client.decodeSnapshot(encoded, 0)).toEqual(state)
  })

  test(`should be equal node snapshot on server and client`, () => {
    const encoded = server.encodeSnapshot(state.objects, 4)
    expect(client.decodeSnapshot(encoded, 4)).toEqual(state.objects)
  })

  const t1 = () => server.encodeSnapshot(state, 12)
  test('should throw error encoding snapshot with not existing id', () => {
    expect(t1).toThrow("Cannot encode snapshot - node with id 12 not found!")
  })

  const t2 = () => server.encodeSnapshot(state, 4)
  test('should throw error encoding snapshot with not existing id', () => {
    expect(t2).toThrow("Cannot encode snapshot - array expected on path: /objects")
  })
})

describe("Add new client to state", () => {
  const id = "3"
  const name = "Abc"
  test("should be equal encoder/decoder schema patches and encoder/decoder schema", () => {

    const patch = serverSchema.nodesAddObject (serverSchema.nodes.length, "Client", 1, id)
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
    const patch = serverSchema.nodesDelete(nodeId)!
    const encoded = server.encodeSchemaPatch(patch)
    expect(client.decodePatch(encoded, true)).toEqual(patch)

    expect(client.schema).toEqual(server.schema)
  })
})
