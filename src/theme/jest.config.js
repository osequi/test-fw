module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    /**
     * Enable @path imports for tests.
     * https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
     */
    "^@theme": "<rootDir>/../theme/",
    "^@hooks": "<rootDir>/../hooks/",
    "^@components/(.*)$": "<rootDir>/../components/$1",
    "^@pages/(.*)$": "<rootDir>/../pages/$1",
    /**
     * Settings for excluding assets
     * @see https://jestjs.io/docs/en/webpack.html
     */
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "../../jest.mock.file.js",
    "\\.(css|less)$": "../../jest.mock.css.js",
  },
};
