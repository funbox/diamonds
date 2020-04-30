const join = (obj: Record<string, string>): string => Object.keys(obj)
  .map(key => `${key}=${encodeURIComponent(obj[key])}`)
  .join('&');

export default (params: Record<string, string>): string => `?${join(params)}`;
