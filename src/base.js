import eslintCommentsConfig from './plugins/eslint-comments.js';
import nConfig from './plugins/n.js';
import noUseExtendNativeConfig from './plugins/no-use-extend-native.js';
import promiseConfig from './plugins/promise.js';
import unicornConfig from './plugins/unicorn.js';
import vitestConfig from './plugins/vitest.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.RulesRecord} */
export const rules = {
  'capitalized-comments': 'off',
};

/** @type {Linter.Config[]} */
const config = [
  {
    ignores: [
      'build',
      'coverage',
      'dist',
      'dist-ssr',
      'logs',
      'public',
      '.cache',
      'pnpm-lock.yaml',
    ],
  },
  eslintCommentsConfig,
  nConfig,
  noUseExtendNativeConfig,
  promiseConfig,
  unicornConfig,
  vitestConfig,
];

export default config;
