const node = require('../node')
const CLIEngine = require('eslint').CLIEngine

describe('samsan/base', () => {
  it('should extends from standard', () => {
    expect(node.extends[0]).toMatch(/eslint-config-standard\/index\.js/)
  })

  it('should override function paren space rule', () => {
    expect(node.rules['space-before-function-paren']).toBe('off')
  })

  it('should have all rules syntax correct', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'node.js'
    })

    const code = 'const foo = 1\nconst bar = function() {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).toBe(0)
  })
})
