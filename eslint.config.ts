import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import cypress from 'eslint-plugin-cypress';

export default [
  // Ignore files
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'prisma/generated/**',
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommended,

  // Next.js
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },

  // Jest
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },

  // Cypress
  {
    files: ['cypress/**/*.{ts,tsx}'],
    plugins: { cypress },
    rules: {
      ...cypress.configs.recommended.rules,
    },
  },

  // Project rules
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Next / React
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'off',

      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
    },
  },
];
