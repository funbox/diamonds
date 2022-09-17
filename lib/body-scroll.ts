export function enableBodyScroll(): void {
  if (document.readyState === 'complete') {
    document.body.style.position = '';
    document.body.style.overflowY = '';
    document.body.style.width = '';

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);

      document.body.style.marginTop = '';

      window.scrollTo({
        left: window.pageXOffset,
        top: scrollTop,

        // 'instant' is supported by Chrome and Firefox even so it was removed from the spec years ago
        // also it still may be back: https://github.com/w3c/csswg-drafts/issues/3497
        // it's useful here when the <html> has scroll-behavior: smooth set
        // we don't want smooth scroll, we want the actual jump
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        behavior: 'instant',
      });
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
