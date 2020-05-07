type QueryStringValue = string | number | boolean;

const join = (obj: Record<string, QueryStringValue>): string => Object.keys(obj)
  .map(key => `${key}=${encodeURIComponent(obj[key])}`)
  .join('&');

export default (params: Record<string, QueryStringValue>): string => `?${join(params)}`;
