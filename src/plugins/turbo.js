import eslintPluginTurbo from 'eslint-plugin-turbo';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
export const config = {
  plugins: {
    turbo: eslintPluginTurbo,
  },
  settings: {
    ...eslintPluginTurbo.configs['flat/recommended'].settings,
  },
  rules: {
    'turbo/no-undeclared-env-vars': 'error',
  },
};

export default config;
