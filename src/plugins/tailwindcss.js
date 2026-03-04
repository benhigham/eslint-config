import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

import { DEFAULT_FILES, TEMPLATE_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES, ...TEMPLATE_FILES],
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindcss,
  },
  rules: {
    ...eslintPluginBetterTailwindcss.configs.recommended.rules,
  },
};

export default config;
