import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'plugin:@next/next/recommended'],
    rules: {
      "@next/next/no-img-element": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
    },
  }),
]
 
export default eslintConfig
