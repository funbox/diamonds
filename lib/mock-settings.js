const DAY = 60 * 60 * 24;
const COOKIE_EXPIRES = DAY * 30;

export function areMocksEnabled() {
  return /(^|;\s*)ci-mode=dev/.test(document.cookie);
}

export function enableMocks() {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() + COOKIE_EXPIRES * 1000));
}

export function disableMocks() {
  const now = new Date();
  setCiModeCookie(new Date(now.getTime() - DAY * 1000));
}

function setCiModeCookie(expiresAt) {
  document.cookie = `ci-mode=dev; domain=removed-for-privacy.com; expires=${expiresAt.toUTCString()}`;
}
