export default (obj, ...keysToOmit) => Object.keys(obj)
  .reduce((acc, key) => ({ ...acc, ...(keysToOmit.indexOf(key) >= 0 ? {} : { [key]: obj[key] }) }), {});
