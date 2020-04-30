let lastId = 0;

export default (prefix = 'id'): string => `${prefix}-${lastId++}`;
