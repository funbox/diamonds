export default (phone: number, { prefix = '+' } = {}) => phone
  .toString()
  .replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, `${prefix}$1 $2 $3-$4-$5`);
