import eslintPluginCompat from 'eslint-plugin-compat';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    compat: eslintPluginCompat,
  },
  settings: {
    lintAllEsApis: true,
  },
  rules: {
    'compat/compat': 'error',
  },
};

export default config;
