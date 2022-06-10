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
sure that's insatlled as well.

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

These are the recommended configurations to use as they combine the
[base presets](#base-presets) together with themselves and other ESLint settings
to provide reasonable defaults.

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

These are ESLint configurations which contain only the rules intended for that
particular use case, plus any bare needs for it to function on its own (for
example, a parser neded for it to work). It is recommended to use the regular
[presets](#presets), however there may be cases in which you need to customise
special functionality for the rules, in which case you'd use these.

- [clarity/base](./base.js) The default base configuration. Provides rules for
  general JavaScript projects.
- [clarity/react-base](./react-base.js) Base configuration that provides rules
  for React and React Hooks.
- [clarity/vue-base](./vue-base.js) Base configuration that provides rules for
  Vue 3 files & components.
- [clarity/typescript-base](./typescript-base.js) Base configuration that
  provides rules for TypeScript files. Intended to also be used in conjunction
  with the default base configuration.

If using the base presets directly, you will also need to add our patch to your
config so ESLint can properly resolve the dependencies needed (this is added by
default when using the normal presets).

```js
require("eslint-config-clarity/patch");

module.exports = {
  // Your config here
};
```

## License

This repository is licensed under the [MIT License](./LICENSE).
