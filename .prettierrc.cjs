const prettierConfigStandard = require('prettier-config-standard')

const modifiedConfig = {
  ...prettierConfigStandard,
  ...{
    arrowParens: 'avoid'
  }
}

module.exports = modifiedConfig
