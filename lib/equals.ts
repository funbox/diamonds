// It may compare any values so we allow `any` here.
/* eslint-disable @typescript-eslint/no-explicit-any */

interface IPrototype { prototype: any }

export default function equals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
    return a === b;
  }

  if ((a as IPrototype).prototype !== (b as IPrototype).prototype) {
    return false;
  }

  const keys = Object.keys(a as object);

  if (keys.length !== Object.keys(b as object).length) {
    return false;
  }

  // TS thinks that `a` and `b` may be any here
  // however we know that they are objects, because we've checked them above
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return keys.every(k => equals(a[k], b[k]));
}
