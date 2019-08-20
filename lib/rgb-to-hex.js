/* eslint-disable no-bitwise */

export default (r, g, b) => {
  let result = ((r << 16) + (g << 8) + b).toString(16);

  while (result.length < 6) {
    result = `0${result}`;
  }

  return result;
};
