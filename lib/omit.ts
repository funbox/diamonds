/* eslint-disable @typescript-eslint/no-explicit-any */

export default (obj: Record<string, any>, ...keysToOmit: string[]): Record<string, any> => Object.keys(obj)
  .reduce<Record<string, any>>((acc, key) => {
    if (keysToOmit.indexOf(key) >= 0) return acc;

    return {
      ...acc,
      [key]: obj[key],
    };
  }, {});
