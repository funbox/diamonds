export default (phone: number | string, { prefix = '+' } = {}): string => phone
  .toString()
  .replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, `${prefix}$1\xa0$2\xa0$3-$4-$5`);
