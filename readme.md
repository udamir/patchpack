# PatchPack  
<img alt="npm" src="https://img.shields.io/npm/v/patchpack"> <img alt="npm type definitions" src="https://img.shields.io/npm/types/patchpack"> <img alt="GitHub" src="https://img.shields.io/npm/l/patchpack">


A binary JsonPatch serializer based on schema. Efficiently encode state object and JsonPatch in to compact byte buffers and then decode them back in to objects on the receiver. Integrates very well with observable state and WebSockets.

Originally it was part of [mosx](https://github.com/udamir/mosx) framework, but then it moved to separate package.

## Installation

```
npm install --save patchpack
```

## Browser
A browser version of patchpack is also available:
```
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.3.6/browser/patchpack.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.3.6/browser/patchpack.js"></script>
```

## Example

```ts
/** Server side */

import { PatchPack } from "patchpack"

class Client {
  constructor(public name: string, public info = "") {}
}

// initial state
const state: any = {
  clients: {
    "1": new Client("Foo"),
    "2": new Client("Baz", "FooBaz"),
  },
  objects: [
    { id: 1, name: "Foo" },
    { id: 2, name: "Foo", foo: "Baz" },
  ],
  foo: {
    baz: false
  }
}

// create patchpack instance and define schema types
const ppServer = new PatchPack({
  State: ["clients", "objects", "foo"],
  Client, // it is recommended to use class in schema
  Object: ["id", "name", "foo"],
  Foo: ["baz"]
})

const encodedStateWithTypes = ppServer.encodeState(state)
console.log(encodedStateWithTypes.length)
// 135

const encodedState = ppServer.encodeState(state, false)
console.log(encodedState.length)
// 60

console.log(JSON.stringify(state).length)
// 165

const client = new Client("FooBaz", "test" )
state.clients["3"] = client

const patch1 = { op: "add", path: "/clients/3", value: client }
const encodedPatch1 = ppServer.encodePatch(patch1)
console.log(encodedPatch1.length)
// 22

console.log(JSON.stringify(patch1).length)
// 72

// generate patch
const patch2 = { op: "replace", path: "/foo/baz", value: true }
const encodedPatch2 = ppServer.encodePatch(patch2)

console.log(encodedPatch2.length)
// 5

console.log(JSON.stringify(patch2).length)
// 47
```

Send `encodedStateWithTypes`, `encodedPatch1` and `encodedPatch2` to Client and decode them:

```ts
/** Client side */
const ppClient = new PatchPack()

const decodedState = ppClient.decodeState(encodedStateWithTypes)
console.log(decodedState)

// {
//   clients: {
//     '1': { name: 'Foo', info: '' },
//     '2': { name: 'Baz', info: 'FooBaz' }
//   },
//   objects: [
//      { id: 1, name: 'Foo' },
//      { id: 2, name: 'Foo', foo: 'Baz' } ],
//   foo: { baz: false }
// }

const decodedPatch1 = ppClient.decodePatch(encodedPatch1)
console.log(decodedPatch1)

// {
//   op: 'add',
//   path: '/clients/3',
//   value: { name: 'FooBaz', info: 'test' }
// }

const decodedPatch2 = ppClient.decodePatch(encodedPatch2)
console.log(decodedPatch2)

// { op: 'replace', path: '/foo/baz', value: true }
```

## License

MIT
