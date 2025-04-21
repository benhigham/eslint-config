export const JS_EXTENSIONS = ['.js', '.jsx', '.mjs', '.cjs'];
export const TS_EXTENSIONS = ['.ts', '.tsx', '.mts', '.cts'];
export const ALL_EXTENSIONS = [...JS_EXTENSIONS, ...TS_EXTENSIONS];

export const JS_FILES = ['**/*.{js,jsx,mjs,cjs}'];
export const CONFIG_FILES = ['*.config.?(c|m)[jt]s'];
export const TEST_FILES = [
  '**/__tests__/**/*.?(c|m)[jt]s?(x)',
  '**/*.{test,spec}.?(c|m)[jt]s?(x)',
];
