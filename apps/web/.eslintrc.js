/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  ...require('eslintconfig/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.next', '.turbo', '.vercel'],
};
