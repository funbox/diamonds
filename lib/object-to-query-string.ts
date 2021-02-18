type QueryStringValue = string | number | boolean | (string | number | boolean)[];

const join = (obj: Record<string, QueryStringValue>): string => Object.keys(obj)
  .reduce((acc: string[], key) => {
    const value = obj[key];

    if (Array.isArray(value)) {
      return acc.concat(value.map((item) => `${key}=${encodeURIComponent(item)}`));
    }

    return acc.concat(`${key}=${encodeURIComponent(value)}`);
  }, [])
  .join('&');

export default (params: Record<string, QueryStringValue>): string => `?${join(params)}`;
