module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ["import", "prettier"],
  settings: {
    "import/external-module-folders": [
      "node_modules",
      "node_modules/@types",
      ".yarn",
    ],
  },
  parserOptions: { ecmaVersion: "latest" },
  rules: {
    "accessor-pairs": "warn",
    "array-callback-return": "error",
    camelcase: "error",
    "constructor-super": "error",
    curly: ["error", "multi"],
    "default-case": "warn",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "for-direction": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "getter-return": "error",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "except-parens"],
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",
    "no-control-regex": "warn",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "warn",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", { boolean: false }],
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": ["error", { allowLoop: true, allowSwitch: true }],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-sync": "warn",
    "no-tabs": "error",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": "error",
    "no-use-before-define": ["error", { functions: false, variables: false }],
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-warning-comments": "warn",
    "no-with": "error",
    "object-shorthand": [
      "error",
      "always",
      { avoidExplicitReturnArrows: true, avoidQuotes: true },
    ],
    "operator-assignment": "error",
    // TODO: padding-line-between-statements
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "warn",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    radix: ["error", "as-needed"],
    "require-atomic-updates": "error",
    "require-await": "warn",
    "require-yield": "error",
    "spaced-comment": "error",
    "symbol-description": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    yoda: "error",

    // Plugins
    "prettier/prettier": "error",

    "import/default": "error",
    "import/first": "error",
    "import/export": "error",
    "import/exports-last": "warn",
    "import/extensions": [
      "error",
      "never",
      Object.fromEntries(
        [
          "json",
          "yaml",
          "yml",
          "webp",
          "png",
          "jpg",
          "jpeg",
          "gif",
          "svg",
          "css",
          "scss",
          "sass",
          "stylus",
          "less",
          "vue",
        ].map((ext) => [ext, "always"])
      ),
    ],
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "warn",
    "import/no-named-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": [
      "error",
      {
        // By default allow unassigned import for various style files for Webpack.
        allow: [
          "**/*.css",
          "**/*.sass",
          "**/*.scss",
          "**/*.less",
          "**/*.styl",
          "**/*.stylus",
        ],
      },
    ],
    "import/no-unused-modules": ["error", { unusedExports: true }],
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/no-webpack-loader-syntax": "warn",
    // TODO: when possible, try putting scoped packages at the top.
    // Not current possible as this rule isn't the same as tslint's `ordered-imports`.
    // See: https://github.com/benmosher/eslint-plugin-import/issues/1311
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "parent",
          ["sibling", "index"],
          "internal",
          "type",
          "unknown",
        ],
        pathGroups: [
          { pattern: "#/**", group: "internal" },
          { pattern: "~/**", group: "internal" },
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
