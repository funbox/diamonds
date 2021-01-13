// The function may be used for getting value of any type, so we allow `any` uage here.
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @deprecated since v6.4.2 - use optional chaining instead. */

export default (obj: Record<string, any>, path: string): any => path.toString()
  .split('.')
  .reduce((branch, key) => (branch ? branch[key] : undefined), obj);
