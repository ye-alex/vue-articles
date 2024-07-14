# Prerequisite

This project uses LTS Node.js v20.15.1 specified in the .nvmrc file. You can run nvm use (the version will be read from .nvmrc) or nvm use 20.15.1 If you need to install nvm, check out [Install NVM](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The page will reload if you make edits.
You will also see any lint errors in the console.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

Builds the app for production to the dist folder.
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

Launches the test runner.
See the section about [running](https://vuejs.org/guide/scaling-up/testing) tests for more information.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Launches the linter. See the section about [running linter](https://eslint.vuejs.org/user-guide) for more information.
