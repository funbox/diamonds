class MemoryStorage {
  constructor() {
    this.storage = new Map();
  }

  get length() {
    return this.storage.size;
  }

  getItem(key) {
    return this.storage.get(key.toString());
  }

  setItem(key, value) {
    this.storage.set(key.toString(), value.toString());
  }

  removeItem(key) {
    this.storage.delete(key);
  }

  clear() {
    this.storage.clear();
  }
}

export default function storageService() {
  const suffix = +new Date();
  let storage;

  try {
    storage = window.localStorage;
    storage.setItem(`__storage${suffix}`, 1);
    storage.removeItem(`__storage${suffix}`);
  } catch (e) {
    storage = new MemoryStorage();
  }

  return storage;
}
