import confusingBrowserGlobals from 'confusing-browser-globals';
import globals from 'globals';

import { domConfig as testingLibraryConfig } from './plugins/testing-library.js';
import typescriptConfig from './typescript.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
export const baseConfig = {
  languageOptions: {
    globals: {
      ...globals.es2022,
      ...globals.browser,
    },
  },
  rules: {
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],
  },
};

/**
 * A shared ESLint configuration for libraries that use browser APIs.
 *
 * @type {Linter.Config[]}
 * */
const config = [...typescriptConfig, testingLibraryConfig, baseConfig];

export default config;
