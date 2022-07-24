# eslint-config-clarity

> Collection of ESLint configs to ensure code consistency and clarity!

## Installation

Simply install the `eslint-config-clarity` package through your package manager,
alongside ESLint and Prettier. No need to mess around with peer dependencies or
anything.

```sh
$ yarn add -D eslint-config-clarity eslint prettier
# or
$ npm i --save-dev eslint-config-clarity eslint prettier
```

If you have a TypeScript project and plan on using a TypeScript config, make
sure that's installed. You will also need to install
`eslint-import-resolver-typescript` yourself, for path resolution to work.

After installing the config and required packages, simply add
`"extends": "clarity"` to your .eslintrc, or specify the name of one of the
[presets](#presets) depending on the project.

## Integrations

It is recommended to copy the [`.vscode`](./.vscode) (if using
[VSCode](https://code.visualstudio.com/)), [`.editorconfig`](./.editorconfig),
and [`.prettierrc`](./.prettierrc) to your project's directory, and also install
the extensions recommended in
[`.vscode/extensions.json`](./.vscode/extensions.json).

The VSCode settings will enable ESLint for JavaScript and TypeScript files, and
sets Prettier as the default formatter for several filetypes, as well as
enabling auto-fix and auto-formatting on save.

If you're not using VSCode as your code editor, it is recommended that you find
equivalent plugins and settings for your editor of choice.

## Presets

- [clarity](./index.js) The default configuration provided by this package, for
  use with any regular JavaScript project.
- [clarity/react](./react.js) Configuration for use with any JavaScript + React
  project.
- [clarity/vue](./vue.js) Configuration for use with any JavaScript + Vue 3
  project.
- [clarity/vue-2](./vue-2.js) Configuration for use with any JavaScript + Vue 2
  project.
- [clarity/typescript](./typescript.js) Configuration for use with any regular
  TypeScript project.
- [clarity/react-typescript](./react-typescript.js) Configuration for use with
  any TypeScript + React project.
- [clarity/vue-typescript](./vue-typescript.js) Configuration for use with any
  TypeScript + Vue 3 project.
- [clarity/vue-2-typescript](./vue-2-typescript.js) Configuration for use with
  any TypeScript + Vue 2 project.

## Base Presets

Presets ending with `-base` are used to reduce duplication, and contain just the
rules that strictly pertain to their name (e.g. TypeScript rules in
`typescript-base`, Vue rules in `vue-base`) which then get extended in the full
configs in various combinations depending on what's needed.

## License

This repository is licensed under the [MIT License](./LICENSE).
