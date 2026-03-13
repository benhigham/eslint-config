---
'@benhigham/eslint-config': minor
---

- Bump `eslint-config-xo` from v0.49 to v0.50
  - Requires ESLint 10 (already satisfied)
  - Adds new rules: `preserve-caught-error`, `require-unicode-regexp`, `css/no-unmatchable-selectors`, `css/no-duplicate-keyframe-selectors`, `css/font-family-fallbacks`
  - Tightens `no-sequences` with `allowInParentheses: false`
- Bump `eslint-config-xo-react` from v0.28 to v0.29
  - Adds missing React Hooks rules
- Bump `eslint-plugin-jsdoc` from v61 to v62
  - Requires Node ≥20.19.0 (already satisfied — Node 18 was dropped in this release)
  - Adds `skipInvokedExpressionsForCommentFinding` setting
