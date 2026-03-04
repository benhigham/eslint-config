import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES],
  ...eslintPluginNoUnsanitized.configs.recommended,
};

export default config;
