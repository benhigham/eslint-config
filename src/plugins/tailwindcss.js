import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';

import { DEFAULT_FILES } from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  files: [...DEFAULT_FILES, '**/*.{html,vue}'],
  plugins: {
    tailwindcss: eslintPluginTailwindcss,
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'cn', 'ctl'],
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
  },
};

export default config;
