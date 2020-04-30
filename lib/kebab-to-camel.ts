export default (str: string): string => str.replace(/-([a-z])/g, g => g[1].toUpperCase());
