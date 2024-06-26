import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config({
  files: ['src/**/*.ts'],
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
})
