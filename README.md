# @benhigham/eslint-config

[![npm version](https://img.shields.io/npm/v/@benhigham/eslint-config.svg)](https://www.npmjs.com/package/@benhigham/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@benhigham/eslint-config.svg)](https://www.npmjs.com/package/@benhigham/eslint-config)
[![License](https://img.shields.io/github/license/benhigham/eslint-config)](LICENSE.md)

A shareable ESLint configuration package with opinionated rules for JavaScript and TypeScript projects, built on top of [`eslint-config-xo`](https://github.com/xojs/eslint-config-xo) with additional plugins and custom configurations.

## Features

- **Comprehensive JavaScript & TypeScript Linting**: Strong base rules for both JavaScript and TypeScript projects
- **Node.js & Browser Support**: Environment-specific rules for Node.js and browser projects
- **React & Next.js Support**: Dedicated configurations for React and Next.js applications
- **Accessibility**: Linting for accessibility best practices in JSX
- **Promise & Async Code**: Enforces best practices for promises and async code
- **Security**: Prevents use of secrets, unsanitized DOM manipulation, and unsafe patterns
- **Code Quality & Consistency**: Includes rules for code quality, maintainability, and modern best practices
- **Testing Support**: Built-in support for Vitest, Testing Library, and Playwright
- **GraphQL Linting**: Schema and operation linting for GraphQL projects
- **Tailwind CSS Integration**: Linting for Tailwind CSS class usage
- **Prettier Compatibility**: Disables conflicting rules for seamless Prettier integration
- **Documentation Linting**: Enforces standards for JSDoc and ESLint directive comments

## Installation

```bash
# npm
npm install --save-dev @benhigham/eslint-config

# yarn
yarn add --dev @benhigham/eslint-config

# pnpm
pnpm add --save-dev @benhigham/eslint-config
```

## Usage

Add the configuration to your ESLint config file:

### Basic Usage (JavaScript)

```js
// eslint.config.js
import benhighamEslintConfig from '@benhigham/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
const config = [...benhighamEslintConfig];

export default config;
```

### TypeScript

```js
// eslint.config.js
import benhighamEslintConfigTypescript from '@benhigham/eslint-config/typescript';

/** @type {import('eslint').Linter.Config[]} */
const config = [...benhighamEslintConfigTypescript];

export default config;
```

### Browser

```js
// eslint.config.js
import benhighamEslintConfigBrowser from '@benhigham/eslint-config/browser';

/** @type {import('eslint').Linter.Config[]} */
const config = [...benhighamEslintConfigBrowser];

export default config;
```

### React

```js
// eslint.config.js
import benhighamEslintConfigReact from '@benhigham/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
const config = [...benhighamEslintConfigReact];

export default config;
```

### Next.js

```js
// eslint.config.js
import benhighamEslintConfigNext from '@benhigham/eslint-config/next';

/** @type {import('eslint').Linter.Config[]} */
const config = [...benhighamEslintConfigNext];

export default config;
```

### GraphQL Plugin

For schema configuration (server):

```js
// eslint.config.js
import { schemaConfig } from '@benhigham/eslint-config/plugins/graphql';

/** @type {import('eslint').Linter.Config[]} */
const config = [...schemaConfig];

export default config;
```

For operations configuration (client):

```js
// eslint.config.js
import { operationsConfig } from '@benhigham/eslint-config/plugins/graphql';

/** @type {import('eslint').Linter.Config[]} */
const config = [...operationsConfig];

export default config;
```

### Playwright Plugin

```js
// eslint.config.js
import playwrightConfig from '@benhigham/eslint-config/plugins/playwright';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/tests/**/*.?(c|m)[jt]s', '**/*.{test,spec}.?(c|m)[jt]s'],
    ...playwrightConfig,
  },
];

export default config;
```

### Tailwind CSS Plugin

```js
// eslint.config.js
import tailwindcssConfig from '@benhigham/eslint-config/plugins/tailwindcss';

/** @type {import('eslint').Linter.Config[]} */
const config = [tailwindcssConfig];

export default config;
```

## Included Plugins

This package includes rules and configurations from the following plugins:

- **eslint-plugin-unicorn**: Various powerful ESLint rules
- **eslint-plugin-import-x**: Enhanced import/export linting
- **eslint-plugin-promise**: Best practices for JavaScript promises
- **eslint-plugin-n**: Node.js-specific rules
- **eslint-plugin-compat**: Ensures browser compatibility via Browserslist
- **eslint-plugin-no-use-extend-native**: Prevents extending built-in native objects
- **eslint-plugin-no-secrets**: Prevents committing secrets to code
- **eslint-plugin-no-unsanitized**: Prevents unsanitized DOM manipulation
- **eslint-plugin-depend**: Dependency management rules
- **eslint-plugin-sonarjs**: Detects bugs and suspicious patterns
- **@eslint-community/eslint-plugin-eslint-comments**: Best practices for ESLint directive comments
- **eslint-plugin-jsdoc**: JSDoc comment linting
- **eslint-plugin-jsx-a11y**: Accessibility rules for JSX
- **@next/eslint-plugin-next**: Next.js-specific rules
- **eslint-plugin-testing-library**: Testing Library rules (DOM and React)
- **@vitest/eslint-plugin**: Vitest testing framework rules
- **eslint-plugin-playwright**: Playwright testing rules
- **@graphql-eslint/eslint-plugin**: GraphQL schema and operation linting
- **eslint-plugin-tailwindcss**: Tailwind CSS class linting
- **eslint-config-prettier**: Disables rules that conflict with Prettier

## License

This project is licensed under the [MIT License](LICENSE.md).
