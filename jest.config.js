module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    /**
     * A workaround for 'Next.js' to enable `"jsx": "react"`
     * @see https://github.com/vercel/next.js/issues/8663
     */
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
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
