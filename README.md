# @benhigham/eslint-config

[![npm version](https://img.shields.io/npm/v/@benhigham/eslint-config.svg)](https://www.npmjs.com/package/@benhigham/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@benhigham/eslint-config.svg)](https://www.npmjs.com/package/@benhigham/eslint-config)
[![License](https://img.shields.io/github/license/benhigham/eslint-config)](LICENSE.md)

A shareable ESLint configuration package with opinionated rules for JavaScript and TypeScript projects, built on top of [`eslint-config-xo`](https://github.com/xojs/eslint-config-xo) with additional plugins and custom configurations.

## Features

- **Base Configuration**: Core JavaScript linting with sensible defaults
- **TypeScript Support**: Built-in TypeScript linting using [`eslint-config-xo-typescript`](https://github.com/xojs/eslint-config-xo-typescript)
- **Environment Support**: Browser and Node.js specific configurations
- **Framework Support**: Dedicated configurations for React and Next.js
- **Testing**: Built-in support for Vitest and Testing Library
- **Prettier Integration**: Compatible with Prettier for consistent code formatting

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

## Included Plugins

This package includes rules and configurations from the following plugins:

- **eslint-plugin-import**: Manages import/export syntax and prevents issues
- **eslint-plugin-unicorn**: Various awesome ESLint rules
- **eslint-plugin-promise**: Enforces best practices for JavaScript promises
- **eslint-plugin-eslint-comments**: Enforces best practices for ESLint directive comments
- **eslint-plugin-jsx-a11y**: Accessibility rules for JSX
- **eslint-plugin-no-use-extend-native**: Prevents extending built-in native objects
- **eslint-plugin-n**: Rules for Node.js development (formerly `eslint-plugin-node`)
- **eslint-plugin-compat**: Rules for ensuring compatibility with [Browserslist](https://github.com/browserslist/browserslist) configuration
- **@next/eslint-plugin-next**: Rules specific to Next.js development
- **@vitest/eslint-plugin**: Rules for Vitest testing framework
- **eslint-plugin-testing-library**: Rules for Testing Library (DOM and React)
- **eslint-config-prettier**: Turns off ESLint rules that conflict with Prettier

## Key Features

### Import Rules

The package provides comprehensive import ordering and validation rules to ensure consistent imports with proper separation between different groups:

```js
// Example of sorted imports following the rules
// Built-in modules
import fs from 'node:fs';

// External dependencies
import React from 'react';
import axios from 'axios';

// Internal modules
import Button from '@workspace/ui/button';

// Parent/sibling/index imports
import utils from '../utils';
import Header from './header';
import { constants } from '.';
```

### TypeScript Support

The TypeScript configuration extends the base with:

- Type-aware linting rules
- Disabling of type-related rules for JavaScript files
- Support for proper import resolution between JS and TS files

### Testing Support

Integrated support for:

- Vitest testing framework
- DOM Testing Library
- React Testing Library

## License

This project is licensed under the [MIT License](LICENSE.md).
