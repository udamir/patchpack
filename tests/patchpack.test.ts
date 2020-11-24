import { PatchPack } from ".."
import { IJsonPatch } from "../src/common"

const state: any = {
  users: {
    "1": { name: "Foo" },
    "2": { name: "Baz" },
    "3": null,
    "foo": [1,3,4,5,7],
    "baz": { a: 1, b: 2, c: 3}
  },
  objects: [
    { id: 1, name: "obj1" },
    { id: 2, name: "obj2", foo: "Baz" },
    ["foo", "baz"],
    null,
    { x: 5, y: 7, z: 12},
  ]
}

const server = new PatchPack({
  "State": ["users", "objects"],
  "User": ["name", "info"],
  "Object": ["id", "name", "foo"],
})

const client = new PatchPack()

describe("Encode / decode state", () => {
  test(`should be equal full state snapshot on server and client`, () => {
    const encoded = server.encodeState(state)
    expect(client.decodeState(encoded)).toEqual(state)
  })
})

describe("Add new user to state", () => {
  const id = "3"
  const name = "Abc"

  test("should be equal patch and decoded patch", () => {
    state.users[id] = { name }
    const patch: IJsonPatch = { op: "add", path: `/users/${id}`, value: { name } }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })
})

describe("Replace value", () => {
  const value = { id: 4, name: "foo" }

  test("should be equal patch and decoded patch", () => {
    state.objects[4] = value
    const patch: IJsonPatch = { op: "replace", path: `/objects/4`, value }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })
})

describe("Delete client from state", () => {
  const id = "2"

  test("should be equal patch and decoded patch", () => {
    delete state.users[id]
    const patch: IJsonPatch = { op: "remove", path: `/users/${id}` }
    const encoded = server.encodePatch(patch)

    expect(client.decodePatch(encoded)).toEqual(patch)
  })
})
