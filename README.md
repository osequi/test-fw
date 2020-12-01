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

```
// jest.config.js
moduleNameMapper: {
  "^@theme": "<rootDir>/src/theme/",
  "^@hooks": "<rootDir>/src/hooks/",
  "^@components/(.*)$": "<rootDir>/src/components/$1",
  "^@pages/(.*)$": "<rootDir>/src/pages/$1",
},
```

#### `Home.test.tsx`

## React testing library

- Install is easy.
