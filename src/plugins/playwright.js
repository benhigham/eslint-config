import eslintPluginPlaywright from 'eslint-plugin-playwright';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
export const config = {
  plugins: {
    playwright: eslintPluginPlaywright,
  },
  rules: {
    ...eslintPluginPlaywright.configs['flat/recommended'].rules,
  },
};

export default config;
