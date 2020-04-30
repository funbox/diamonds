/* eslint-disable no-bitwise */

export default (r: number, g: number, b: number): string => {
  let result = ((r << 16) + (g << 8) + b).toString(16);

  while (result.length < 6) {
    result = `0${result}`;
  }

  return result;
};
