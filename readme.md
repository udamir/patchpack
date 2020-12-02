# PatchPack  
<img alt="npm" src="https://img.shields.io/npm/v/patchpack"> <img alt="npm" src="https://img.shields.io/npm/dm/patchpack?label=npm"> <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/udamir/patchpack"> <img alt="npm type definitions" src="https://img.shields.io/npm/types/patchpack"> <img alt="GitHub" src="https://img.shields.io/npm/l/patchpack">


A binary JsonPatch serializer based on schema. Efficiently encode state object and JsonPatch in to compact byte buffers and then decode them back in to objects on the receiver. Integrates very well with observable state and WebSockets.

Originally it was part of [mosx](https://github.com/udamir/mosx) framework, but then it moved to separate package.

## Motivation

I was working on an [magx](https://github.com/udamir/magx) game server framework that used WebSockets to syncronize state between server and clients. Syncronization principle is simple: first server sends full state to clients then on every change sends patches in JsonPatch format. I have found the problem that sending a lot of patches without serialization is a waste of bandwidth.

As state's schema is known on server side it can be sent to the clients, then state and each patch can be encoded based on that schema on server side and decoded back on client side. State schema is not static that means it must be also syncronized with clients. This sophisticated approach can significantly reduce patch size and bandwidth usage.

## Concept

![](https://github.com/udamir/patchpack/blob/master/.docs/patchpack.png?raw=true)

## Installation

```
npm install --save patchpack
```

## Browser
A browser version of patchpack is also available:
```
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.4.2/browser/patchpack.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/patchpack@0.4.2/browser/patchpack.js"></script>
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
  foo: { baz: false }
}

// create patchpack instance and define schema types
const ppServer = new PatchPack({
  State: ["clients", "objects", "foo"],
  Client, // it is recommended to use class in schema
  Object: ["id", "name", "foo"],
  Foo: ["baz"]
})

// encoded state can include types definition
const encodedStateWithTypes = ppServer.encodeState(state)

const encodedState = ppServer.encodeState(state, false)

// add item

const client = new Client("FooBaz", "test" )
state.clients["3"] = client

const patch1 = { op: "add", path: "/clients/3", value: client }
const encodedPatch1 = ppServer.encodePatch(patch1)

// update value

state.foo.baz = true

const patch2 = { op: "replace", path: "/foo/baz", value: true }
const encodedPatch2 = ppServer.encodePatch(patch2)

```

Benchmark for encoded object size (byte):
|        | patchpack | [messagePack](https://msgpack.org/) |JSON.stringify |
| ------ | --------- | ----------- | ------------- |
| state  | 60        | 107  (+78%) | 165   (+175%) |
| patch1 | 22        | 53  (+140%) | 72    (+227%) |
| patch2 | 5         | 33  (+560%) | 47    (+840%) |

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

## Documentation

Documentation and specification will be soon...

## License

MIT
