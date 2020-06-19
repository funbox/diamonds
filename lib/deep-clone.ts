// This function is too multipurpose so we allow `any` here.
// Also there are some constructions that are allowed by linter, but the code will be much more complex w/o them.
/* eslint-disable no-restricted-syntax, no-prototype-builtins, @typescript-eslint/no-explicit-any */

function deepClone<T>(obj: T): T;
function deepClone(obj: any): any {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    const copy: Record<any, any> = {};
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepClone(obj[attr]);
      }
    }
    return copy;
  }

  return obj;
}

export default deepClone;
