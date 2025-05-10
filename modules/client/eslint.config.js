import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat'

export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: true,
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslintConfigPrettierFlat
)
