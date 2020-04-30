class MemoryStorage {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map();
  }

  get length() {
    return this.storage.size;
  }

  getItem(key: string) {
    return this.storage.get(key.toString());
  }

  setItem(key: string, value: any) {
    this.storage.set(key.toString(), value.toString());
  }

  removeItem(key: string) {
    this.storage.delete(key);
  }

  clear() {
    this.storage.clear();
  }
}

function storageService() {
  const suffix = +new Date();
  let storage;

  try {
    storage = window.localStorage;
    storage.setItem(`__storage${suffix}`, '1');
    storage.removeItem(`__storage${suffix}`);
  } catch (e) {
    storage = new MemoryStorage();
  }

  return storage;
}

export default storageService();
