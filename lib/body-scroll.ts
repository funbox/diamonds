export function enableBodyScroll(): void {
  if (document.readyState === 'complete') {
    document.body.style.position = '';
    document.body.style.overflowY = '';
    document.body.style.width = '';

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = '';
      window.scrollTo(window.pageXOffset, scrollTop);
    }
  } else {
    window.addEventListener('load', enableBodyScroll);
  }
}

export function disableBodyScroll({ savePosition = false } = {}): void {
  if (document.readyState === 'complete') {
    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    }
  } else {
    window.addEventListener('load', () => disableBodyScroll({ savePosition }));
  }
}
