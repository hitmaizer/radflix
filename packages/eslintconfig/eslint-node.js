/* eslint-disable global-require */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
      impliedStrict: true,
    },
    sourceType: "module",
  },
  globals: {
    strapi: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/default-props-match-prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "comma-dangle": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": ["error", { props: false }],
    "consistent-return": "off",
    "no-unused-vars": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
