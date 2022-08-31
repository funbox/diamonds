export default (cookiesStr: string): Record<string, string> => cookiesStr
  .split(';')
  .map(v => v.split('='))
  .reduce((acc: Record<string, string>, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
