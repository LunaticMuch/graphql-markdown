const jestConfigBase = require("../../jest.config");

module.exports = {
  ...jestConfigBase,
  name: "unit",
  displayName: "Unit Tests",
  testMatch: ["**/tests/unit/**/?(*.)+(spec|test).js"],
  coverageDirectory: `${jestConfigBase.coverageDirectory}/unit`,
};
