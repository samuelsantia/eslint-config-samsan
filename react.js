module.exports = {
  extends: [
    './babel',
    'eslint-standard-react'
  ].map(require.resolve)
}
