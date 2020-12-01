# test-fw

Testing the Somenage framework.

Configuring all stuff to work together is not easy. At this momement there are 9 config files in 5 folders using half-a-dozen hacks to make the magic happen.

What's interesting to see is `tsconfig.json` and all `jest.config.json` files in the root and subfolders.

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

However **THAT SETTING WILL BE ARBITRARILY OVERWRITTEN BY NEXT**.
As a workaround a `tsconfig.jest.json` has to be created, and a `globals` entry added to all `jest.config.js` files.
See https://github.com/vercel/next.js/issues/8663

```js
// jest.config.js, in root + project folders
globals: {
  /**
   * A workaround for 'Next.js' to enable `"jsx": "react"`
   * @see https://github.com/vercel/next.js/issues/8663
   */
  "ts-jest": {
	tsconfig: "tsconfig.jest.json",
  },
},
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

```js
// jest.config.js in all project folders (theme, hooks, components, pages)
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "../../jest.mock.file.js",
    "\\.(css|less)$": "../../jest.mock.css.js",
  },
};
```

## React testing library

- Install is easy.
