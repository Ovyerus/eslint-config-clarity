module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: ['import', 'prettier'],
  rules: {
    // Syntax
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-constant-condition': 'error',
    'no-control-regex': 'warn',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best practices
    'accessor-pairs': 'warn',
    'array-callback-return': 'error',
    curly: ['error', 'multi'],
    'default-case': 'warn',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'warn',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { boolean: false }],
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: true,
        allowSwitch: true
      }
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: ['error', 'as-needed'],
    'require-await': 'warn',
    yoda: 'error',

    // Variables
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',

    // Node
    'global-require': 'warn',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-path-concat': 'error',
    'no-sync': 'warn',

    // Style
    camelcase: 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'operator-assignment': 'error',
    // TODO: padding-line-between-statements
    'prefer-object-spread': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'spaced-comment': 'error',

    // ES6
    'arrow-body-style': 'error',
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',

    // Plugins
    'prettier/prettier': ['error', { singleQuote: true }],

    'import/first': 'error',
    'import/default': 'error',
    'import/export': 'error',
    // bruh
    'import/extensions': ['error', 'never'],
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      { allowArrowFunction: true }
    ],
    'import/no-cycle': 'error', // May need to change this in the future.
    'import/no-deprecated': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-namespace': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        // By default allow unassigned import for various style files for Webpack.
        allow: [
          '**/*.css',
          '**/*.sass',
          '**/*.scss',
          '**/*.less',
          '**/*.styl',
          '**/*.stylus'
        ]
      }
    ],
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-webpack-loader-syntax': 'warn',
    // TODO: when possible, try putting scoped packages at the top.
    // Not current possible as this rule isn't the same as tslint's `ordered-imports`.
    // See: https://github.com/benmosher/eslint-plugin-import/issues/1311
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'parent',
          ['sibling', 'index'],
          'internal'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'warn'
  }
};
