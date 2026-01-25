module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['.next/', 'node_modules/'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
