export default (cookiesStr: string): Record<string, string> => {
  const cookiesStrTrimmed = cookiesStr.trim();

  if (cookiesStrTrimmed.length === 0) return {};

  return cookiesStrTrimmed
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: Record<string, string>, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
};
