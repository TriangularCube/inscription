import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import eslintConfigPrettier from 'eslint-config-prettier'

import react from 'eslint-plugin-react'
import globals from 'globals'

import { cloneDeep } from 'lodash-es'

// Remove these keys since the plugin apparently forgot, else
//   eslint complains
const reactRecommended = cloneDeep(react.configs.recommended)
delete reactRecommended.parserOptions
delete reactRecommended.plugins

const reactJSX = cloneDeep(react.configs['jsx-runtime'])
delete reactJSX.parserOptions
delete reactJSX.plugins

export default tseslint.config(
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
    ],
    languageOptions: {
      parserOptions: {
        project: true,
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
    extends: [reactRecommended, reactJSX],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ...react.configs.recommended.parserOptions,
      },
      globals: {
        ...globals.browser,
      },
    },
  }
)
