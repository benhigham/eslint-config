import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintConfigXo from 'eslint-config-xo';

import baseConfig, { rules } from './base.js';
import { jsConfig as importConfig } from './plugins/import.js';

/** @import { Linter } from 'eslint' */

/**
 * A shared ESLint configuration.
 *
 * @type {Linter.Config[]}
 * */
const config = [
  ...baseConfig,
  importConfig,
  ...eslintConfigXo,
  { rules },
  eslintConfigPrettier,
];

export default config;
