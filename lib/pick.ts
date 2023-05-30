export default <T extends object, K extends PropertyKey[]>(obj: T, ...keysToPick: K): { [P in Extract<keyof T, K[number]>]: T[P] } => Object.keys(obj)
  .reduce((acc, key) => {
    if (keysToPick.indexOf(key) !== -1) {
      acc[key as keyof T] = obj[key as keyof T];
    }

    return acc;
  }, {} as { [U in keyof T]: T[U] });
