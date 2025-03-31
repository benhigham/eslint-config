import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    'no-use-extend-native': eslintPluginNoUseExtendNative,
  },
  rules: {
    'no-use-extend-native/no-use-extend-native': 'error',
  },
};

export default config;
