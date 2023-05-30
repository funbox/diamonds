// The passed fn may have any type args, so allow them here ↓
/* eslint-disable @typescript-eslint/no-explicit-any */

export default <T extends (...args: any[]) => void>(fn: T, ms = 0): T => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function debounced(this: any, ...args: any[]): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  } as T;
};
