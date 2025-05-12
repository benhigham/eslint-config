import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES],
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
