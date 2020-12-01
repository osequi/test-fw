module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  /**
   * https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
   */
  moduleNameMapper: {
    "^@theme": "<rootDir>/src/theme/",
    "^@hooks": "<rootDir>/src/hooks/",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
  },
};
