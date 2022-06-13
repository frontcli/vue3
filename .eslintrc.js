module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  extends: [
    'plugin:@typescript-eslint/recommended' // 使用来自@typescript-eslint/eslint-plugin的推荐规则
  ],
  parserOptions: {
    ecmaVersion: 2022, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
    ecmaFeatures: {
      jsx: true // 允许对JSX进行解析
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    "no-unused-vars": ["error"],
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-extra-semi": "off"
  }
}