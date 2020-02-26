module.exports = {
  env: {
    esm: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          loose: true,
        }],
      ],
    },
    node: {
      presets: [
        ['@babel/preset-env', {
          loose: true,
        }],
      ],
    },
  },
};
