export default (fn: () => void, ms = 0) => {
  let timeoutId: number;
  return function (this: any, ...args: any[]) { // eslint-disable-line func-names
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn.apply(this, args), ms);
  };
};
