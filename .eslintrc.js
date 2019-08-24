module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "getter-return": 2,
    "no-console": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-inner-declarations": 2,
    "no-irregular-whitespace": 2,
    "curly": 2,
    "dot-location": 2,
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }]
  },
  parser: "babel-eslint",
};
