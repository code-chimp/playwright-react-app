import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: ['dist', 'node_modules', 'playwright-report', 'test-results'],
  },

  // Base JavaScript config
  js.configs.recommended,

  // TypeScript configs for all TS files
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),

  // Vite/React application config (src folder)
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off', // Using TypeScript for prop validation
    },
  },

  // Node.js/Playwright test config (tests folder)
  {
    files: ['tests/**/*.{ts,js}', 'playwright.config.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Disable React-specific rules for test files
      'react-hooks/rules-of-hooks': 'off',
      'react/react-in-jsx-scope': 'off',
      // Allow console.log in tests
      'no-console': 'off',
      // Allow any type in tests for flexibility
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },

  // Node.js/Utility scripts config (scripts folder)
  {
    files: ['scripts/**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Allow console.log in utility scripts
      'no-console': 'off',
      // Enforce consistent error handling
      'handle-callback-err': 'error',
      // Common utility script patterns
      'no-process-exit': 'warn',
      // Disable React rules for utility scripts
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },

  // Prettier config (should be last to override other formatting rules)
  prettier,
];
