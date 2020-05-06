/* eslint-disable @typescript-eslint/no-explicit-any */

type DebouncedFunction = (...args: any[]) => void;

export default (fn: DebouncedFunction, ms = 0): DebouncedFunction => {
  let timeoutId: number;
  return function (this: any, ...args: any[]): void { // eslint-disable-line func-names
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn.apply(this, args), ms);
  };
};
