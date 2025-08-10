// common.js
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';

// ⬇️ FlatCompat, um legacy "extends" wie plugin:prettier/recommended zu nutzen

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const compat = new FlatCompat({ baseDirectory: __dirname });

// === Common ESLint Config ===
// Standard JavaScript rules + language/parser/resolver settings shared across the project
export default [
  // Get recommended base rules for plain JS:
  js.configs.recommended,

  {
    // TS/TSX parser + modern syntax support
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser, // parserOptions: { project: './tsconfig.json' }, // enable only if you need type-aware rules
    },
    settings: {
      // Import resolver for TypeScript path aliases
      'import/resolver': {
        typescript: {},
      },
    },
  },

  {
    // JS/JSX parser + modern syntax support
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // ---- Import Order (applies to JS & TS) ----
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      'import/internal-regex': '^(@/|src/)', // treat @/… and src/… as "internal"
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node core modules (fs, path, ...)
            'external', // npm dependencies
            'internal', // project aliases (e.g., @/..., src/...)
            'parent', // ../
            'sibling', // ./
            'index', // ./index
            'object', // special import forms
          ], // no blank lines between groups (optional): 'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          }, // alphabetical within each group
        },
      ], // exactly one blank line after the entire import block
      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],
    },
  },
];
