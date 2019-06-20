# eslint-config-clarity
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

## Presets
These are the recommended configurations to use as they combine the [base presets](#base-presets) together
with themselves and other ESLint settings to provide reasonable defaults.

 - [eslint-config-clarity]() The default configuration provided by this package, intended for use with
 any regular JavaScript project, such as [Clara]().
 - [eslint-config-clarity/react]() Configuration intended for use with any JavaScript + React project.
 - [eslint-config-clarity/typescript]() Configuration intended for use with any regular TypeScript project.
 - [eslint-config-clarity/react-typescript]() Configuration intended for use with any TypeScript + React
 project, such as [Sayonika]().

## Base Presets
These are ESLint configurations which contain only the rules intended for that particular use case, plus any
bare needs for it to function on its own (for example, a parser neded for it to work). It is recommended to use
the regular [presets](#presets), however there may be cases in which you need to customise special functionality 
for the rules, in which case you'd use these.

 - [eslint-config-clarity/base]() The default base configuration. Provides rules for general JavaScript projects.
 - [eslint-config-clarity/react-base]() Base configuration that provides rules for React and React Hooks.
 - [eslint-config-clarity/typescript-base]() Base configuration that provides rules for TypeScript files. Intended
 to also be used in conjunction with the default base configuration.

## License
This repository is licensed under the [MIT License](./LICENSE).