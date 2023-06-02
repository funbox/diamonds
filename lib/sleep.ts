/**
 * @see {@link https://nodejs.org/dist/latest-v18.x/docs/api/timers.html#timerspromisessettimeoutdelay-value-options|Node.js API doc} for setTimeout from timers/promise module which may replace this helper
 */
export default function sleep(ms: number): Promise<void> {
  return new Promise(r => {
    setTimeout(r, ms);
  });
}
