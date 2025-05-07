import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES],
  plugins: {
    'no-unsanitized': eslintPluginNoUnsanitized,
  },
  rules: {
    'no-unsanitized/property': 'error',
    'no-unsanitized/method': 'error',
  },
};

export default config;
