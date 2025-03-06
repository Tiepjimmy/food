/* eslint-env node */
module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  "rules": {
    // Thêm các quy tắc hoặc tùy chỉnh nếu cần
  }
}
