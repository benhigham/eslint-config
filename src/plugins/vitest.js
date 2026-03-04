import eslintPluginVitest from '@vitest/eslint-plugin';

import { TEST_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...TEST_FILES],
  plugins: {
    vitest: eslintPluginVitest,
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  languageOptions: {
    globals: {
      ...eslintPluginVitest.environments.env.globals,
    },
  },
  rules: {
    // Start with recommended, then layer on all remaining rules.
    ...eslintPluginVitest.configs.recommended.rules,
    ...eslintPluginVitest.configs.all.rules,
  },
};

export default config;
