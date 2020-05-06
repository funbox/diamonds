type colors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' |
  'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite';


// example: console.log(colorize('foo', 'bar').red);
export default (...args: string[]): Record<colors, string> => {
  const str = args.join(' ');

  return {
    black: `\x1b[30m${str}`,
    red: `\x1b[31m${str}`,
    green: `\x1b[32m${str}`,
    yellow: `\x1b[33m${str}`,
    blue: `\x1b[34m${str}`,
    magenta: `\x1b[35m${str}`,
    cyan: `\x1b[36m${str}`,
    white: `\x1b[37m${str}`,
    bgBlack: `\x1b[40m${str}\x1b[0m`,
    bgRed: `\x1b[41m${str}\x1b[0m`,
    bgGreen: `\x1b[42m${str}\x1b[0m`,
    bgYellow: `\x1b[43m${str}\x1b[0m`,
    bgBlue: `\x1b[44m${str}\x1b[0m`,
    bgMagenta: `\x1b[45m${str}\x1b[0m`,
    bgCyan: `\x1b[46m${str}\x1b[0m`,
    bgWhite: `\x1b[47m${str}\x1b[0m`,
  };
};
