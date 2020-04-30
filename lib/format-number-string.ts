export default (num: number, {
  space = ' ', // just space, but nbsp; may also be passed here
  delimiter = ',',
  minus = '−',
} = {}) => {
  /* string→number coercion after toFixed is for removing trailing zeros when they're existed: 17.00 → 17 */
  const numStr = (+num.toFixed(2)).toString();
  const uIntPart = numStr.split('.')[0].replace('-', '');

  let result = numStr;

  if (uIntPart.length > 4) {
    const formattedUIntPart = uIntPart
      .split('')
      .reverse()
      .reduce((acc, x, i) => [x, acc].join(i > 0 && i % 3 === 0 ? space : ''), '');

    result = result.replace(uIntPart, formattedUIntPart);
  }

  result = result
    .replace('.', delimiter)
    .replace('-', minus);

  return result;
};
