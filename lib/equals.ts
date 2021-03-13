// It may compare any values so we allow `any` here.
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function equals(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a.prototype !== b.prototype) return false;

  const keys = Reflect.ownKeys(a);
  if (keys.length !== Reflect.ownKeys(b).length) return false;

  return keys.every(k => equals(a[k], b[k]));
}
