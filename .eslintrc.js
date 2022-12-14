module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@funboxteam',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: '.',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      }
    ]
  },
  settings: {
    'import/extensions': ['.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions:['.ts', '.js'],
      }
    }
  },
};
