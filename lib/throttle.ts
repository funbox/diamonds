type ThrottledFunction = () => void;

export default (cb: ThrottledFunction, timeout: number): ThrottledFunction => {
  let time = Date.now();
  return (): void => {
    if ((time + timeout - Date.now()) < 0) {
      cb();
      time = Date.now();
    }
  };
};
