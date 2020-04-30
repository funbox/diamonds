export default (obj: any, ...keysToOmit: string[]) => Object.keys(obj)
  .reduce((acc, key) => ({ ...acc, ...(keysToOmit.indexOf(key) >= 0 ? {} : { [key]: obj[key] }) }), {});
