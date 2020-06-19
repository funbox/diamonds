// There's to standard way to describe a type recursively in TS, so we allow `any` here.
// This function is not recommended to use, because of Array.prototype.flat() existence.
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function deepFlatten(arr: any[]): any[] {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}
