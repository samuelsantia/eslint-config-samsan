module.exports = {
  extends: [
    'eslint-config-standard'
  ].map(require.resolve),
  env: {
    commonjs: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': 'off'
  }
}
