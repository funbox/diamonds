// The function may be used for getting value of any type, so we allow `any` uage here.
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */

/** @deprecated since v6.5.0 - use optional chaining instead
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
export default (obj: Record<string, any>, path: string): any => path.toString()
  .split('.')
  .reduce((branch, key) => (branch ? branch[key] : undefined), obj);
