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
  projects: [
    /**
     * Configuring different test environments.
     * For React components: 'jsdom'
     * For hooks, theme: node
     * @see https://stackoverflow.com/questions/41318115/testing-two-environments-with-jest
     */
    "<rootDir>/src/pages",
    "<rootDir>/src/components",
    "<rootDir>/src/hooks",
    "<rootDir>/src/theme",
  ],
};
