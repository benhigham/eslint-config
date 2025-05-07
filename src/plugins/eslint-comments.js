import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES],
  plugins: {
    '@eslint-community/eslint-comments': eslintPluginEslintComments,
  },
  rules: {
    ...eslintPluginEslintComments.configs.recommended.rules,
    '@eslint-community/eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
    '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
    '@eslint-community/eslint-comments/no-unlimited-disable': 'off', // We use `unicorn/no-abusive-eslint-disable` instead.
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
    '@eslint-community/eslint-comments/no-unused-enable': 'error',
  },
};

export default config;
