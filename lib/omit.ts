/* eslint-disable @typescript-eslint/no-explicit-any */

export default (obj: any, ...keysToOmit: string[]): any => Object.keys(obj)
  .reduce((acc, key) => ({ ...acc, ...(keysToOmit.indexOf(key) >= 0 ? {} : { [key]: obj[key] }) }), {});
