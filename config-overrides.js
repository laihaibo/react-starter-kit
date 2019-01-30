const {
  override,
  addDecoratorsLegacy
  // enableEslintTypescript
  // disableEsLint,
} = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy()
  // enableEslintTypescript()
  // disableEsLint(),
);
