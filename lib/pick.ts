// The function may process objects that contains values of any type. So we allow `any` here.
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (obj: Record<string, any>, ...keysToPick: string[]): Record<string, any> => Object.keys(obj)
  .reduce<Record<string, any>>((acc, key) => {
    if (keysToPick.indexOf(key) !== -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
