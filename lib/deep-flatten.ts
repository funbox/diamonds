export default function deepFlatten(arr: any[]): any[] {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}
