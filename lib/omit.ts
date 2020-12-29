export default <T extends object, K extends PropertyKey[]>(obj: T, ...keysToOmit: K): { [P in Exclude<keyof T, K[number]>]: T[P] } => Object.keys(obj)
  .reduce((acc, key) => {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key as keyof T] = obj[key as keyof T];
    }

    return acc;
  }, {} as { [K in keyof T]: T[K] });
