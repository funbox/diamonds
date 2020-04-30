let lastId = 0;

export default (prefix = 'id') => `${prefix}-${lastId++}`;
