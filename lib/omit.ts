/* eslint-disable @typescript-eslint/no-explicit-any */

export default (obj: Record<string, any>, ...keysToOmit: string[]): any => Object.keys(obj)
  .reduce((acc, key) => {
    if (keysToOmit.indexOf(key) >= 0) return acc;

    return {
      ...acc,
      [key]: obj[key],
    };
  }, {});
