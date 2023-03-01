/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "babel-jest"
  },
};