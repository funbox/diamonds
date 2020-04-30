const DAY = 60 * 60 * 24 * 1000;
const COOKIE_EXPIRES = DAY * 30;

export function areMocksEnabled(): boolean {
  return /(^|;\s*)ci-mode=dev/.test(document.cookie);
}

export function enableMocks(): void {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() + COOKIE_EXPIRES));
}

export function disableMocks(): void {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() - DAY));
}

function setCiModeCookie(expiresAt: Date): void {
  document.cookie = `ci-mode=dev; domain=removed-for-privacy.com; path=/; expires=${expiresAt.toUTCString()}`;
}
