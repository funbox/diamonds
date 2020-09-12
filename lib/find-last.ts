export default function findLast<T>(
  arr: T[],
  callback: (element: T, index?: number, arr?: T[]) => boolean,
): T | undefined {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (callback(arr[index], index, arr)) {
      return arr[index];
    }
  }

  return undefined;
}
