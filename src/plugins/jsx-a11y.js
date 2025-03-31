import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
  },
  rules: {
    ...eslintPluginJsxA11y.flatConfigs.strict.rules,
  },
};

export default config;
