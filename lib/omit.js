export default (obj, ...keysToOmit) => Object.keys(obj)
  .reduce((acc, key) => ({ ...acc, ...(keysToOmit.includes(key) ? {} : { [key]: obj[key] }) }), {});
