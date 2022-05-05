/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  ...require('eslintconfig/eslint-react'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    '.turbo',
    'icons/*.tsx',
    'icon-index-template.js',
    'icon-template.js',
    'storybook-static',
  ],
};
