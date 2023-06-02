// TS does not allow for circular types, but there is a trick with interfaces:
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
// eslint-disable-next-line no-use-before-define
type DeepCloneSupportedType = boolean | number | bigint | string | undefined | null | Date | IDeepCloneSupportedTypeObject | IDeepCloneSupportedTypeArray;

interface IDeepCloneSupportedTypeObject {
  [x: string]: DeepCloneSupportedType;
}

// the part of the trick above
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDeepCloneSupportedTypeArray extends Array<DeepCloneSupportedType> { }

/** @deprecated since v8.9.0 - use structuredClone instead
 * @see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
 */
function deepClone<T extends DeepCloneSupportedType>(obj: T): T;
function deepClone(obj: DeepCloneSupportedType): DeepCloneSupportedType {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    const copy: IDeepCloneSupportedTypeArray = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  const copy: typeof obj = {};

  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key]);
  });

  return copy;
}

export default deepClone;
