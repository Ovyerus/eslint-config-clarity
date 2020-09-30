# EOL

This project is now End-of-Life. We will no longer actively support this project as there are more better defaults right now that fits our cases than a seperate rule.

# eslint-config-clarity
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FClarityCafe%2Feslint-config-clarity.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FClarityCafe%2Feslint-config-clarity?ref=badge_shield)


[badges]

This repository contains various opinionated ESLint configs that are used to enforce consistent coding standards
across all of ClarityMoe's JavaScript and TypeScript projects, although it may expand to include configurations for
other languages in the future.

All projects handled under ClarityMoe are expected to use these configurations in some form - with provided rules
mostly unmodified - in order to ensure consistency across the organisation.

## Installation

To install this into your project, you'll need to install the main package, along with all of its peer dependencies.

If you have **npm** version 5 or above, you can simply run the following command:

```
npx install-peerdeps --dev eslint-config-clarity
```

This will also work with Yarn if you have it installed, which is highly recommended for Clarity projects.

Otherwise if your npm version is less than 5, you will need to run

```
npm info "eslint-config-clarity@latest" peerDependencies
```

and then either `yarn add -D <dependency>@<version>` or `npm install -D <dependency>@<verison>` for each of the
dependencies listed.

After installing the config and required packages, simply add `"extends": "clarity"` to your .eslintrc, or
specify the name of one of the following presets depending on the project.

## Integrations

It is recommended to copy the [`.vscode`](./.vscode) (if using [VSCode](https://code.visualstudio.com/)),
[`.editorconfig`](./.editorconfig), and [`.prettierrc`](./.prettierrc) to your project's directory, and also install
the extensions recommended in [`.vscode/extensions.json`](./.vscode/extensions.json).

The VSCode settings will enable ESLint for JavaScript and TypeScript files, and sets Prettier as the default formatter
for several filetypes, as well as enabling auto-fix and auto-formatting on save.

If you're not using VSCode as your code editor, it is recommended that you find equivalent plugins and settings for your
editor of choice.

## Presets

These are the recommended configurations to use as they combine the [base presets](#base-presets) together
with themselves and other ESLint settings to provide reasonable defaults.

- [clarity](./index.js) The default configuration provided by this package, intended for use with
  any regular JavaScript project, such as [Clara](https://github.com/ClarityMoe/Clara).
- [clarity/react](./react.js) Configuration intended for use with any JavaScript + React project.
- [clarity/vue](./vue.js) Configuration intended for use with any JavaScript + Vue project.
- [clarity/typescript](./typescript.js) Configuration intended for use with any regular TypeScript project.
- [clarity/react-typescript](./react-typescript.js) Configuration intended for use with any TypeScript + React
  project.
- [clarity/vue-typescript](./vue-typescript.js) Configuration intended for use with any TypeScript + Vue project.

## Base Presets

These are ESLint configurations which contain only the rules intended for that particular use case, plus any
bare needs for it to function on its own (for example, a parser neded for it to work). It is recommended to use
the regular [presets](#presets), however there may be cases in which you need to customise special functionality
for the rules, in which case you'd use these.

- [clarity/base](./base.js) The default base configuration. Provides rules for general JavaScript projects.
- [clarity/react-base](./react-base.js) Base configuration that provides rules for React and React Hooks.
- [clarity/vue-base](./vue-base.js) Base configuration that provides rules for Vue files & components.
- [clarity/typescript-base](./typescript-base.js) Base configuration that provides rules for TypeScript files.
  Intended to also be used in conjunction with the default base configuration.

## License

This repository is licensed under the [MIT License](./LICENSE).


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FClarityCafe%2Feslint-config-clarity.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FClarityCafe%2Feslint-config-clarity?ref=badge_large)
