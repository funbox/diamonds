export default (numStr: number | string, {
  space = ' ', // just space, but nbsp; may also be passed here
  delimiter = ',',
  minus = '−',
  formatThousands = false,
} = {}): string => {
  // convert to number
  // use + instead of parseFloat, because we prefer to get a NaN when it's not possible to parse a number
  const num = +numStr;

  if (Number.isNaN(num)) {
    throw new Error(`'Non valid number is passed: ${numStr}`);
  }

  // string→number coercion after toFixed is for removing trailing zeros when they're existed: 17.00 → 17
  const numStrFixedDigits = (+num.toFixed(2)).toString();

  const uIntPart = numStrFixedDigits.split('.')[0].replace('-', '');

  let result = numStrFixedDigits;

  if (formatThousands && uIntPart.length > 3 || uIntPart.length > 4) {
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
