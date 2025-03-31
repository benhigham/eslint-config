import eslintPluginPromise from 'eslint-plugin-promise';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
const config = {
  plugins: {
    promise: eslintPluginPromise,
  },
  rules: {
    'promise/always-return': 'error',
    'promise/no-return-wrap': [
      'error',
      {
        allowReject: true,
      },
    ],
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'error',
  },
};

export default config;
