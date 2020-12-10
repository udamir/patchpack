# PatchPack  
<img alt="npm" src="https://img.shields.io/npm/v/patchpack"> <img alt="npm" src="https://img.shields.io/npm/dm/patchpack?label=npm"> <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/udamir/patchpack"> <img alt="npm type definitions" src="https://img.shields.io/npm/types/patchpack"> <img alt="GitHub" src="https://img.shields.io/npm/l/patchpack">


A binary JsonPatch serializer based on schema. Efficiently encode state object and JsonPatch in to compact byte buffers and then decode them back in to objects on the receiver. Integrates very well with observable state and WebSockets.

Originally it was part of [mosx](https://github.com/udamir/mosx) State Management engine, but then it moved to separate package.

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

### Server side
```ts
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
### Benchmark

Benchmark for encoded object size (byte):
|        | PatchPack | [MessagePack](https://msgpack.org/) | JSON.stringify |
| ------ | --------- | ----------------------------------- | -------------- |
| state  | 60        | 107  (+78%)                         | 165   (+175%)  |
| patch1 | 22        | 53  (+140%)                         | 72    (+227%)  |
| patch2 | 5         | 33  (+560%)                         | 47    (+840%)  |

Send `encodedStateWithTypes`, `encodedPatch1` and `encodedPatch2` to Client and decode them:

### Client side
```ts
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

# Documentation

## Patchpack

### constructor 
Return instance of PatchPack with defined schema types
```ts
constructor (types?: { [type: string]: string[] | Type<any> })
```

Types can be defined in 2 ways:
- array of properties
- Class name

Example:
```ts
class User {
  constructor (public name: string) {}
}

class Item {
  constructor (public id: number) {}
}

const state = {
  users: [ new User("John"), new User("Santa") ]
  item: new Item(123) 
}

const pp = new PatchPack({
  State: ["users", "item"],
  User,
  Item,
})
```
### encodeState
Encode state and return in binary format
```ts
encodeState(state: any, includeTypes = true, updateSchema = true): Buffer
```

If parameter `includeTypes = false` used, decoder instance of PatchPack must be created with the same types.

First time state encoding must be with `updateSchema = true`. If you need to encode state with the same schema second time `updateSchema` can be set as `false`.

### decodeState
Decode state from binary format to object
```ts
decodeState(buffer: Buffer, updateSchema = true): any
```

First time state decoding must be with `updateSchema = true`. If you need to decode the same state second time `updateSchema` must be set as `false`.

Example:
```ts
const pp = new PatchPack()
const state = pp.decodeState(encodedStatewWithTypes)
```

### encodePatch
Encode JsonPatch and return in binary format
```ts
encodePatch(patch: IReversibleJsonPatch, updateSchema = true): Buffer
```

First time patch encoding must be with `updateSchema = true`. If you need to encode the same patch second time `updateSchema` must be set as `false`.

The following JsonPatch operation are supported:
- add
- replace
- remove

ReversibleJsonPatch with `oldValue` is supported

Example:
```ts
// JsonPatch
const p1 = pp.encodePatch({
  op: "replace",
  path: "/a/b/c",
  value: "100",
})

// ReversibleJsonPatch
const p1 = pp.encodePatch({
  op: "replace",
  path: "/a/b/c",
  value: "100",
  oldValue: "99",
})
```

### decodePatch
Decode patch from binary format to JsonPatch (or ReversibleJsonPatch).
```ts
decodePatch (buffer: Buffer, updateSchema = true): IReversibleJsonPatch
```

First time patch decoding must be with `updateSchema = true`. If you need to decode the same patch second time `updateSchema` must be set as `false`.

### PatchPack.encode
Encode object to binary with last MessagePack specification.
```ts
static encode(value: any): Buffer
```

### PatchPack.decode
Decode binary to object with last MessagePack specification.
```ts
static decode(buffer: Buffer): any
```

## Specification 

will be soon...

## License

MIT
