module.exports = {
    env: {
        es6: true,
        node: true
    },
    plugins: [ 'import', 'sift' ],
    rules: {
        // Syntax
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'warn',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': [ 'error', 'except-parens' ],
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
        'no-extra-parens': 'warn',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'warn',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',

        // Best practices
        'accessor-pairs': 'warn',
        'array-callback-return': 'error',
        curly: [ 'error', 'multi' ],
        'default-case': 'warn',
        'dot-location': [ 'error', 'property' ],
        'dot-notation': 'error',
        eqeqeq: [ 'error', 'always', { null: 'ignore' } ],
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-else-return': 'warn',
        'no-empty-pattern': 'error',
        'no-eval': 'warn',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [ 'error', { boolean: false } ],
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': [
            'error', {
                allowLoop: true,
                allowSwitch: true
            }
        ],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
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
        radix: [ 'error', 'as-needed' ],
        'require-await': 'error',
        'wrap-iife': [ 'error', 'inside' ],
        yoda: 'error',

        // Variables
        'init-declarations': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',

        // Node
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'error',
        'no-path-concat': 'error',
        'no-sync': 'warn',

        // Style
        'array-bracket-newline': [
            'error', {
                multiline: true,
                minItems: 4
            }
        ],
        'array-bracket-spacing': [ 'error', 'always' ],
        // 'array-element-newline': ['error', {multiline: true, minItems: 4}],
        'block-spacing': [ 'error', 'never' ],
        'brace-style': 'error',
        camelcase: 'error',
        'comma-dangle': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-names': [ 'error', 'as-needed' ],
        'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],
        // 'function-paren-newline': 'error',
        'implicit-arrow-linebreak': 'error',
        indent: [ 'error', 4, { SwitchCase: 1 } ],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-between-class-members': 'error',
        'max-len': [ 'error', { code: 120 } ],
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [ 'error', { max: 1 } ],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [ 'error', 'any' ],
        'object-curly-newline': [
            'error', {
                minProperties: 3,
                multiline: true
            }
        ],
        'object-curly-spacing': [ 'error', 'always' ],
        'object-property-newline': 'error', // come back to this
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': [ 'error', 'never' ],
        // TODO: padding-line-between-statements
        'prefer-object-spread': 'error',
        'quote-props': [ 'error', 'as-needed' ],
        quotes: [ 'error', 'single' ],
        semi: 'error',
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': 'error',
        // 'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',

        // ES6
        'arrow-body-style': 'error',
        'arrow-parens': [ 'error', 'as-needed' ],
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': 'error',
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
            'error', 'always', {
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
        'rest-spread-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': [ 'error', 'always' ],
        'yield-star-spacing': 'error',

        // Plugins
        'import/first': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/extensions': [
            'error', 'always', {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'import/named': 'error',
        'import/newline-after-import': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': [ 'error', { allowArrowFunction: true } ],
        'import/no-cycle': 'error', // May need to change this in the future.
        'import/no-deprecated': 'error',
        'import/no-dynamic-require': 'warn',
        'import/no-extraneous-dependencies': [ 'error', { devDependencies: false } ],
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-namespace': 'error',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': [
            'error', {
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
        'import/no-useless-path-segments': [ 'error', { noUselessIndex: true } ],
        'import/no-webpack-loader-syntax': 'warn',
        // TODO: when possible, try putting scoped packages at the top.
        // Not current possible as this rule isn't the same as tslint's `ordered-imports`.
        // See: https://github.com/benmosher/eslint-plugin-import/issues/1311
        'import/order': [
            'error', {
                groups: [
                    'external',
                    'builtin',
                    'parent',
                    [ 'sibling', 'index' ],
                    'internal'
                ],
                'newlines-between': 'always'
            }
        ],
        'import/prefer-default-export': 'error',
        'import/unambiguous': 'error',

        // Slightly different spacing handlind in arrays, functions, and default parameters.
        'sift/array-element-newline': [
            'error', {
                multiline: true,
                minItems: 4
            }
        ],
        'sift/function-paren-newline': [ 'error', 'multiline' ],
        'sift/space-infix-ops': 'error'
    }
};
