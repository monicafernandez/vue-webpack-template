module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  "parser": "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
  },
  "extends": ["plugin:vue/base"],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 'off',
    'no-console': 'off',
    'vue/html-self-closing': 'off'
  }
}
