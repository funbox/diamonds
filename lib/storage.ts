/* eslint-disable @typescript-eslint/no-explicit-any */

class MemoryStorage {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map();
  }

  get length(): number {
    return this.storage.size;
  }

  getItem(key: string): string | null {
    const item = this.storage.get(key.toString());

    return item === undefined ? null : item;
  }

  setItem(key: string, value: any): void {
    this.storage.set(key.toString(), value.toString());
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

function storageService(): Storage | MemoryStorage {
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
