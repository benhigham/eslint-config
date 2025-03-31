import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    ...eslintPluginUnicorn.configs.recommended.rules,
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};

export default config;
