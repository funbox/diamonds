/**
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Sattolo%27s_algorithm
 */
export default function shuffle<T>(arr: T[]): T[] {
  let m: number = arr.length;
  let temp: T;
  let i: number;

  while (m) {
    i = Math.floor(Math.random() * m--);

    temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
