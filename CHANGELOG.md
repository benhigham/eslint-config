# @benhigham/eslint-config

## 2.0.0

### Major Changes

- [#102](https://github.com/benhigham/eslint-config/pull/102) [`d404d5a`](https://github.com/benhigham/eslint-config/commit/d404d5aa5126279f1c7e04f72dd26fb6218365a1) Thanks [@benhigham](https://github.com/benhigham)! - - Replace `eslint-plugin-tailwindcss` with `eslint-plugin-better-tailwindcss` for Tailwind CSS v4 support (rule prefix changes from `tailwindcss/` to `better-tailwindcss/`)
  - Drop Node.js 18 support (minimum is now 20.19.0)
  - Remove named `config` export from `playwright` and `turbo` plugin entry points (use default import instead)

### Minor Changes

- [#102](https://github.com/benhigham/eslint-config/pull/102) [`d404d5a`](https://github.com/benhigham/eslint-config/commit/d404d5aa5126279f1c7e04f72dd26fb6218365a1) Thanks [@benhigham](https://github.com/benhigham)! - - Use recommended presets for `promise`, `n`, and `no-unsanitized` plugins
  - Update browser globals from ES2022 to ES2025
  - Remove deprecated `import-x/parsers` setting
  - Inline `confusing-browser-globals` list, remove abandoned dependency
  - Clean up redundant rule re-assertions, export inconsistencies, and dead code
  - Bump `eslint-config-xo` from v0.47 to v0.49
  - Bump `eslint-config-xo-typescript` from v8 to v9
  - Bump `eslint-plugin-unicorn` from v59 to v60
  - Bump `eslint-plugin-jsdoc` from v50 to v61 (adds new recommended rules)
  - Bump `@next/eslint-plugin-next` from v15 to v16 (flat config is now the default)
  - Bump `@vitest/eslint-plugin` from v1.2 to v1.3
  - Bump `eslint-plugin-import-x`, `eslint-plugin-n`, `eslint-plugin-sonarjs`, `eslint-plugin-testing-library`, `eslint-plugin-no-unsanitized`, and other plugin dependencies

## 1.1.0

### Minor Changes

- [`6bc4821`](https://github.com/benhigham/eslint-config/commit/6bc48212298cb126b5fe7e43c6b3c168b1ca3d58) Thanks [@benhigham](https://github.com/benhigham)! - Add `eslint-plugin-turbo` to plugins

## 1.0.1

### Patch Changes

- [`0f625f3`](https://github.com/benhigham/eslint-config/commit/0f625f30341802eb642449a0a435a092517cb3e7) Thanks [@benhigham](https://github.com/benhigham)! - Fix `eslint-plugin-import-x` rules

## 1.0.0

### Major Changes

- [`5b599f6`](https://github.com/benhigham/eslint-config/commit/5b599f6f0472b9904180e0c6e89983d487a1c087) Thanks [@benhigham](https://github.com/benhigham)! - Add several new plugins. Replace `eslint-plugin-eslint-comments` with `@eslint-community/eslint-plugin-eslint-comments`, replace `eslint-plugin-import` with `eslint-plugin-import-x`. Add new exports for GraphQL, Playwright, and TailwindCSS plugin configurations.

## 0.3.1

### Patch Changes

- [`4eb878a`](https://github.com/benhigham/eslint-config/commit/4eb878abdc77c6c16587fefc80fed349e3fe442b) Thanks [@benhigham](https://github.com/benhigham)! - Bump dependencies

## 0.3.0

### Minor Changes

- [`87c6eb6`](https://github.com/benhigham/eslint-config/commit/87c6eb693958c9e93ba0a0407dcdc9db1e365cf1) Thanks [@benhigham](https://github.com/benhigham)! - Update dependencies

### Patch Changes

- [`87c6eb6`](https://github.com/benhigham/eslint-config/commit/87c6eb693958c9e93ba0a0407dcdc9db1e365cf1) Thanks [@benhigham](https://github.com/benhigham)! - Add files definitions to JS/TS-specific plugin configurations

## 0.2.0

### Minor Changes

- [`1774ae0`](https://github.com/benhigham/eslint-config/commit/1774ae06c7824142700474a0deb9cfbd352b05db) Thanks [@benhigham](https://github.com/benhigham)! - Add eslint-plugin-compat to base configuration

## 0.1.0

### Minor Changes

- [`3364916`](https://github.com/benhigham/eslint-config/commit/3364916514c1718d222d6a5ed9bce179ec3cff9c) Thanks [@benhigham](https://github.com/benhigham)! - Setup project files and workflows.
