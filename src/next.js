import eslintPluginNext from '@next/eslint-plugin-next';

import reactConfig from './react.js';

/** @import { Linter } from 'eslint' */

/**
 * A shared ESLint configuration for libraries that use Next.js.
 *
 * @type {Linter.Config[]}
 * */
const config = [
  {
    ignores: ['.next', '.vercel']
  },
  ...reactConfig,
  {
    plugins: {
      '@next/next': eslintPluginNext,
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
    },
  },
];

export default config;
