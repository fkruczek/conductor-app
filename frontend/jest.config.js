/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
process.env.REACT_APP_API_URL = 'a'
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  //   preset: 'ts-jest',
  //   globals: {
  //     'ts-jest': {
  //       babelConfig: {
  //         plugins: ['macros'],
  //         presets: [['@babel/preset-env'], '@babel/preset-react'],
  //       },
  //     },
  //   },
}
