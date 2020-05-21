/* eslint-disable @typescript-eslint/no-explicit-any */

type DebouncedFunction = (...args: any[]) => void;

export default (fn: DebouncedFunction, ms = 0): DebouncedFunction => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]): void { // eslint-disable-line func-names
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
