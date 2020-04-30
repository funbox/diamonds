export default (cb: () => void, timeout: number) => {
  let time = Date.now();
  return () => {
    if ((time + timeout - Date.now()) < 0) {
      cb();
      time = Date.now();
    }
  };
};
