---
'@benhigham/eslint-config': major
---

- Replace `eslint-plugin-tailwindcss` with `eslint-plugin-better-tailwindcss` for Tailwind CSS v4 support (rule prefix changes from `tailwindcss/` to `better-tailwindcss/`)
- Drop Node.js 18 support (minimum is now 20.19.0)
- Remove named `config` export from `playwright` and `turbo` plugin entry points (use default import instead)
