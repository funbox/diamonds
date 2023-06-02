export default function findLast<T>(
  items: T[],
  callback: (element: T, index?: number, arr?: T[]) => boolean,
): T | undefined {
  for (let index = items.length - 1; index >= 0; index--) {
    if (callback(items[index], index, items)) {
      return items[index];
    }
  }

  return undefined;
}
