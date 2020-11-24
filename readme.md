# PatchPack  
<img alt="npm" src="https://img.shields.io/npm/v/patchpack"> <img alt="npm type definitions" src="https://img.shields.io/npm/types/patchpack"> <img alt="GitHub" src="https://img.shields.io/npm/l/patchpack">


A binary JsonPatch serializer based on schema. Efficiently encode state object and JsonPatch in to compact byte buffers and then decode them back in to objects on the receiver. Integrates very well with observable state and with WebSockets.

Originally it was part of [mosx](https://github.com/udamir/mosx) framework, but then it moved to separate package.

## Installation

```
npm install --save patchpack
```

## Browser
A browser version of patchpack is also available:
```
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.3.2/browser/patchpack.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.3.2/browser/patchpack.js"></script>
```

## Example

```ts
/** Server side */

import { PatchPack } from "patchpack"

// initial state 
const state = {
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

// create patchpack instance
const ppServer = new PatchPack({
  "State": ["clients", "objects", "foo"],
  "Client": ["name", "info"],
  "Object": ["id", "name", "foo"],
  "Foo": ["baz"]
})

// encode state with types schema
const encodedStateWithTypes = ppServer.encodeState(state)
console.log(encodedStateWithTypes.length)
// 134

// encode state without types schema
const encodedState = ppServer.encodeState(state, false)
console.log(encodedState.length)
// 59

console.log(JSON.stringify(state).length)
// 155

// lets add client to state.clients
state.clients["3"] = { name: "FooBaz", info: "test" }

// generate patch1
const patch1 = { op: "add", path: "/clients/3", value: { name: "FooBaz", info: "test" } }

// encode patch with patchpack
const encodedPatch1 = ppServer.encodePatch(patch1)
console.log(encodedPatch1.length)
// 22

console.log(JSON.stringify(patch1).length)
// 72

// lets update property baz
state.foo.baz = true

// generate patch2
const patch2 = { op: "replace", path: "/foo/baz", value: true }
const encodedPatch2 = ppServer.encodePatch(patch2)
console.log(encodedPatch2.length)
// 5

console.log(JSON.stringify(patch2).length)
// 47

// send encodedState, encodedPatch1 and encodedPatch2 to Clinet -->>
```

```ts
/** Client side */

// create patchpack instance on client side
const ppClient = new PatchPack()

// decode initial state
const decodedState = ppClient.decodeState(encodedStateWithTypes)

// {
//   clients: { '1': { name: 'Foo' }, '2': { name: 'Baz', info: 'FooBaz' } },
//   objects: [ { id: 1, name: 'Foo' }, { id: 2, name: 'Foo', foo: 'Baz' } ],
//   foo: { baz: false }
// }

// decode patch
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
