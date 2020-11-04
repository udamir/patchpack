# PatchPack  
<img alt="npm" src="https://img.shields.io/npm/v/patchpack"> <img alt="npm type definitions" src="https://img.shields.io/npm/types/patchpack"> <img alt="GitHub" src="https://img.shields.io/npm/l/patchpack">


A binary JsonPatch serializer based on schema. Efficiently encode state object and JsonPatch in to compact byte buffers and then decode them back in to objects on the receiver. Integrates very well with observable state and with WebSockets.

## Installation

```
npm install --save patchpack
```

## Browser
A browser version of patchpack is also available:
```
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.1.1/browser/patchpack.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.1.1/browser/patchpack.js"></script>
```

## Example

```ts

import { IJsonPatch, PatchPack, Schema } from "patchpack"

// initial state
const state: any = {
  clients: {
    "1": { name: "Foo" },
    "2": { name: "Baz", info: "FooBaz" }
  },
  objects: [
    { id: 1, name: "Foo" },
    { id: 2, name: "Foo", foo: "Baz" },
  ],
  foo: {
    baz: false
  }
}
```

<table>
<tr><td>

```ts
// create patchpack instance on server side
const pp1 = new PatchPack()

// add types and properties
pp1.schema.addTypes({
  "State": ["clients", "objects", "foo"],
  "Client": ["name", "info"],
  "Object": ["id", "name", "foo"],
  "Foo": ["baz"]
})

// build schema tree nodes
pp1.schema.buildFrom(state)
```
</td><td>

```ts
// create patchpack instance on client side
const pp2 = new PatchPack()











```
</td></tr>
<tr><td>

```ts
// encode schema --------- send to client ---------------->
const encodedSchema = pp1.encodeSchema()

console.log(encodedSchema.length)
// 141

console.log(JSON.stringify(pp.schema).length)
// 228
```

</td><td>

```ts
console.log(pp2.decodeSchema(encodedSchema).types)
// [
//   [ 'State', 'clients', 'objects', 'foo' ],
//   [ 'Client', 'name', 'info' ],
//   [ 'Object', 'id', 'name', 'foo' ],
//   [ 'Foo', 'baz' ]
// ]
```
</td></tr>
<tr><td>

```ts
// encode state snapshot --------- send to client ---------------->
const encodedSnaphot = pp1.encodeSnapshot(state)

console.log(encodedSnaphot.length)
// 44
console.log(JSON.stringify(state).length)
// 155

```
</td><td>

```ts
console.log(pp2.decodeSnapshot(encodedSnaphot))
// {
//   clients: { '1': { name: 'Foo' }, '2': { name: 'Baz', info: 'FooBaz' } },
//   objects: [ { id: 1, name: 'Foo' }, { id: 2, name: 'Foo', foo: 'Baz' } ],
//   foo: { baz: false }
// }
```
</td></tr>

<tr><td>

```ts
// add new client to state
const client = { name: "FooBaz", info: "test" }
state.clients["3"] = client

// add nodes to schema
const schemaPatches = pp1.schema.nodeFrom(client, "clients/3")
console.log(schemaPatches[0])
// { op: 'add', path: '/nodes/8', value: [ 8, 1, 1, '3' ] }

// encode schema patch --------- send to client ---------------->
const encodedSchemaPatch = pp.encodeSchemaPatch(schemaPatches[0])
console.log(encodedSchemaPatch.length) 
// 10
console.log(JSON.stringify(schemaPatches[0]).length)
// 50
```
</td><td>

```ts
console.log(pp2.decodePatch(encodedSchemaPatch))
// { op: 'add', path: '/nodes/8', value: [ 8, 1, 1, '3' ] }

```

</td></tr>

<tr><td>

```ts
// state change patch
const patch: IJsonPatch = { op: "add", path: "/clients/3", value: client }

// encode patch --------- send to client ---------------->
const encodedPatch = pp1.encodePatch(patch)
console.log(encodedPatch.length)
// 17
console.log(JSON.stringify(patch).length)
// 72
```
</td><td>

```ts
console.log(pp2.decodePatch(encodedPatch))
// {
//   op: 'add',
//   path: '/clients/3',
//   value: { name: 'FooBaz', info: 'test' }
// }
```
</td></tr>
</table>

## License

MIT
