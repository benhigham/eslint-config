---
'@benhigham/eslint-config': minor
---

- Bump `eslint-plugin-unicorn` from v60 to v61

- Adds four new rules to the `unicorn` recommended preset (all enabled by default):
  - `unicorn/prefer-bigint-literals` — prefer BigInt literals over `BigInt()` calls
  - `unicorn/prefer-classlist-toggle` — prefer `classList.toggle()` over conditional add/remove
  - `unicorn/require-module-attributes` — require attributes on module imports (e.g. `with { type: 'json' }`)
  - `unicorn/no-array-sort` — disallow `Array#sort()` without a compare function
