export default (obj, path) => path.toString()
  .split('.')
  .reduce((branch, key) => (branch ? branch[key] : undefined), obj);
