/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { '\\.ts$': ['ts-jest'] },
  moduleNameMapper: {
    '^config(.*)$': '<rootDir>/config$1',
    '^middleware(.*)$': '<rootDir>/middleware$1',
    '^models(.*)$': '<rootDir>/models$1',
    '^routes(.*)$': '<rootDir>/routes$1',
    '^startup(.*)$': '<rootDir>/startup$1',
    '^utils/utils(.*)$': '<rootDir>/utils/utils$1',
    '^types(.*)$': '<rootDir>/types',
  },
}
