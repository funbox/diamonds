export default (query: string) => (query
  ? (/^[?]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params: Record<string, string> , param) => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, {})
  : {});
