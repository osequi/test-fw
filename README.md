Testing the Somenage framework

## Create Next App

- Install is easy

## Typescript

- Install is easy

### Paths

- Easy
- https://www.typescriptlang.org/tsconfig#paths
- https://nextjs.org/docs/advanced-features/module-path-aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@theme": ["theme/"],
      "@hooks": ["hooks/"],
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"]
    }
  }
}
```

### `ts-jest`

- Install is easy.
- At the first run gives two errors:
  - Cannot find module '@theme' from `src/hooks/use-breakpoint/useBreakpoint.ts`
  - Jest encountered an unexpected token in `src/components/Home/Home.test.tsx`

#### `@theme`

- https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping

```js
// jest.config.js
moduleNameMapper: {
  "^@theme": "<rootDir>/src/theme/",
  "^@hooks": "<rootDir>/src/hooks/",
  "^@components/(.*)$": "<rootDir>/src/components/$1",
  "^@pages/(.*)$": "<rootDir>/src/pages/$1",
},
```

#### `Home.test.tsx`

- https://stackoverflow.com/questions/41318115/testing-two-environments-with-jest
- https://github.com/nrwl/nx/issues/3776

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

```js
// jest.config.js
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
```

```js
// hooks/jest.config.js, theme/jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  /**
   * https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
   */
  moduleNameMapper: {
    "^@theme": "<rootDir>/../theme/",
    "^@hooks": "<rootDir>/../hooks/",
    "^@components/(.*)$": "<rootDir>/../components/$1",
    "^@pages/(.*)$": "<rootDir>/../pages/$1",
  },
};
```

```js
// components/jest.config.js, pages/jest.config.js
module.exports = {
  preset: "ts-jest",
  /**
   * Load different test environment for JSX
   * @see https://github.com/nrwl/nx/issues/3776
   */
  testEnvironment: "jest-environment-jsdom-fifteen",
  /**
   * Enable @path imports for tests.
   * https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping
   */
  moduleNameMapper: {
    "^@theme": "<rootDir>/../theme/",
    "^@hooks": "<rootDir>/../hooks/",
    "^@components/(.*)$": "<rootDir>/../components/$1",
    "^@pages/(.*)$": "<rootDir>/../pages/$1",
  },
};
```

#### `import "normalize.css";`

- https://jestjs.io/docs/en/webpack.html

## React testing library

- Install is easy.
