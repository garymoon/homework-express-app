const js = require("@eslint/js");
const globals = require('globals')

const config = [
    js.configs.recommended,

  {
    languageOptions: {
        globals: {
            ...globals.node,
        },
        ecmaVersion: 'latest',
        sourceType: 'commonjs',
    },
    rules: {},
  },
];

module.exports = config;


