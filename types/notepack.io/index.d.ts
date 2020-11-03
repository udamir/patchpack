declare module 'notepack.io' {
  export function encode<T>(value: T): Buffer
  export function decode<T>(buffer: Buffer): T
}
