module.exports = {
  extends: [
    './babel',
    'eslint-config-standard-react'
  ].map(require.resolve)
}
