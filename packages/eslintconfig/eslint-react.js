module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/default-props-match-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '_',
        argsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
