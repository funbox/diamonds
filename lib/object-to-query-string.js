const join = (obj) => Object.keys(obj).map(key => `${key}=${encodeURIComponent(obj[key])}`).join('&');

export default (params) => `?${join(params)}`;
