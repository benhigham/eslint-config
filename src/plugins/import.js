import eslintPluginImport from 'eslint-plugin-import';

import {
  CONFIG_FILES,
  DEFAULT_EXTENSIONS,
  DEFAULT_FILES,
  JS_FILES,
  TEST_FILES,
  TS_EXTENSIONS,
} from '../constants.js';

/** @import { Linter } from 'eslint' */

/** @type {Linter.Config} */
export const jsConfig = {
  files: [...JS_FILES],
  plugins: {
    import: eslintPluginImport,
  },
  settings: {
    'import/core-modules': ['electron'],
    'import/internal-regex': '^@workspace/',
  },
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
      },
    ],
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'off', // Redundant with `unicorn/prefer-module`.
    'import/no-deprecated': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': [
      'error',
      {
        ignoreExternal: true,
      },
    ],
    'import/no-useless-path-segments': 'error',
    'import/newline-after-import': [
      'error',
      {
        considerComments: true,
      },
    ],
    'import/no-amd': 'error',
    'import/no-duplicates': [
      'error',
      {
        'prefer-inline': true,
      },
    ],
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        includeInternal: true,
        includeTypes: true,
        devDependencies: [...CONFIG_FILES, ...TEST_FILES],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        pathGroups: [
          {
            pattern: '@workspace/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '@babel/polyfill',
          '**/register',
          '**/register.*',
          '**/register/**',
          '**/register/**.*',
          '**/*.css',
          '**/*.scss',
          '**/*.sass',
          '**/*.less',
        ],
      },
    ],
  },
};

/** @type {Linter.Config} */
export const tsConfig = {
  ...jsConfig,
  files: [...DEFAULT_FILES],
  settings: {
    ...jsConfig.settings,
    'import/extensions': [...DEFAULT_EXTENSIONS],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': [...TS_EXTENSIONS],
    },
    'import/resolver': {
      node: {
        extensions: [...DEFAULT_EXTENSIONS],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
