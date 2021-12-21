type colors = 'reset' | 'bold' | 'dim' | 'black' | 'red' | 'green' | 'yellow' | 'blue' |
  'magenta' | 'cyan' | 'white' | 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' |
  'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite';


// example: console.log(colorize('foo', 'bar').red);
export default (...args: string[]): Record<colors, string> => {
  const str = args.join(' ');

  return {
    reset: `\x1b[0m${str}\x1b[0m`,
    bold: `\x1b[1m${str}\x1b[22m`,
    dim: `\x1b[2m${str}\x1b[22m`,
    black: `\x1b[30m${str}\x1b[39m`,
    red: `\x1b[31m${str}\x1b[39m`,
    green: `\x1b[32m${str}\x1b[39m`,
    yellow: `\x1b[33m${str}\x1b[39m`,
    blue: `\x1b[34m${str}\x1b[39m`,
    magenta: `\x1b[35m${str}\x1b[39m`,
    cyan: `\x1b[36m${str}\x1b[39m`,
    white: `\x1b[37m${str}\x1b[39m`,
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
