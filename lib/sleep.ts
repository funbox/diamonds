// TODO: deprecate in favor of timers/promise.setTimeout?
export default function sleep(ms: number): Promise<void> {
  return new Promise(r => {
    setTimeout(r, ms);
  });
}
