module.exports = {
  parser: 'babel-eslint',
  extends: [
    './node'
  ].map(require.resolve)
}
