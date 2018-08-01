const react = require('../react')
const CLIEngine = require('eslint').CLIEngine

describe('samsan/react', () => {
  it('shouold extends from babel', () => {
    expect(react.extends[0]).toMatch(/babel\.js/)
  })

  it('should extends eslint-config-standard-react', () => {
    expect(react.extends[1]).toMatch(/eslint-config-standard-react\/index\.js/)
  })

  it('should have all rules syntax correct', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'react.js'
    })

    const code = 'const foo = 1\nconst bar = function() {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).toBe(0)
  })
})
