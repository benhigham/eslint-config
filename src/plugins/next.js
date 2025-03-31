import eslintPluginNext from '@next/eslint-plugin-next';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    '@next/next': eslintPluginNext,
  },
  rules: {
    ...eslintPluginNext.configs.recommended.rules,
    ...eslintPluginNext.configs['core-web-vitals'].rules,
  },
};

export default config;
