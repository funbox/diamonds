const DAY = 60 * 60 * 24 * 1000;
const COOKIE_EXPIRES = DAY * 30;

export function areMocksEnabled() {
  return /(^|;\s*)ci-mode=dev/.test(document.cookie);
}

export function enableMocks() {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() + COOKIE_EXPIRES));
}

export function disableMocks() {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() - DAY));
}

function setCiModeCookie(expiresAt) {
  document.cookie = `ci-mode=dev; domain=removed-for-privacy.com; path=/; expires=${expiresAt.toUTCString()}`;
}
