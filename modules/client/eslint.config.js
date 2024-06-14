import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import eslintConfigPrettier from 'eslint-config-prettier'

import react from 'eslint-plugin-react'
import globals from 'globals'

import { cloneDeep } from 'lodash-es'

// Remove this key since the plugin apparently forgot, else
//   eslint complains
let reactRecommended = cloneDeep(react.configs.recommended)
delete reactRecommended.parserOptions

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
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...reactRecommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  }
)
