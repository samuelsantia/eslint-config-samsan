const babel = require('../babel')
const CLIEngine = require('eslint').CLIEngine

describe('samsan/babel', () => {
  it('should extends from base', () => {
    expect(babel.extends[0]).toMatch(/node\.js/)
  })

  it('should have all rules syntax correct', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'babel.js'
    })

    const code = 'const foo = 1\nconst bar = function() {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).toBe(0)
  })
})
