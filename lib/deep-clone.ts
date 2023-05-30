// This function is too multipurpose so we allow `any` here.
// Also there are some constructions that are allowed by linter, but the code will be much more complex w/o them.

type DeepCloneSupportedType = boolean | number | bigint | string | undefined | null | Date;
type DeepCloneSupportedComplexTypes = DeepCloneSupportedType | Record<string, DeepCloneSupportedType> | Array<DeepCloneSupportedType>;

/** @deprecated since v8.9.0 - use structuredClone instead
 * @see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
 */
function deepClone<T extends DeepCloneSupportedType>(obj: T): T;
function deepClone<T extends Record<string, DeepCloneSupportedType>>(obj: T): T;
function deepClone<T extends Array<DeepCloneSupportedType>>(obj: T): T;
function deepClone(obj: DeepCloneSupportedComplexTypes): DeepCloneSupportedComplexTypes {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    const copy: Array<DeepCloneSupportedType> = [];
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
