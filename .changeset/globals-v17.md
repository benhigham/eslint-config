---
'@benhigham/eslint-config': minor
---

- Bump `globals` from v16 to v17

- Upgrade browser config from `es2025` to `es2026` globals
- `audioWorklet` globals are no longer included in `browser` environment (split to separate `globals.audioWorklet` — consumers using AudioWorklet APIs should add this explicitly)
- New environments available: `sharedWorker`, `paintWorklet`, `bunBuiltin`, `denoBuiltin`
