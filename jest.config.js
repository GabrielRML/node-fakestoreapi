module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/tests/**",
    "!eslint.config.js",
    "!jest.config.js",
    "!server.js"
  ],
  coverageReporters: ["text", "lcov", "cobertura"]
};
