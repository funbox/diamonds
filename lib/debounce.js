export default (fn, ms = 0) => {
  let timeoutId;
  return function (...args) { // eslint-disable-line func-names
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
