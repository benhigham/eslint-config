import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES],
  plugins: {
    'eslint-comments': eslintPluginEslintComments,
  },
  rules: {
    ...eslintPluginEslintComments.configs.recommended.rules,
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'off', // We use `unicorn/no-abusive-eslint-disable` instead.
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },
};

export default config;
