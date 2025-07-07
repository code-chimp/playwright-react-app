import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{cts,ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    extends: ['plugin:@typescript-eslint/recommended', prettier],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
