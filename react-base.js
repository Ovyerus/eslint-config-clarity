module.exports = {
    plugins: [
        'react',
        'react-hooks'
    ],
    parserOptions: { ecmaFeatures: { jsx: true } },
    settings: { react: { version: 'react' } },
    rules: {
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': [ 'warn', 'always', { ignoreClassFields: true } ],
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'warn',
        'react/no-redundant-should-component-update': 'warn',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': [ 'error', { noTemplateLiterals: true } ],
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': [ 'error', 'always' ],
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': [ 'error', 'never' ],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        'react/jsx-boolean-value': [ 'error', 'never' ],
        'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],
        'react/jsx-closing-tag-location': 'error',
        // 'react/jsx-curly-newline': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.tsx' ] } ],
        'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': [ 'error', { maximum: 4 } ],
        'react/jsx-no-bind': [
            'error', {
                allowArrowFunctions: true,
                ignoreRefs: true
            }
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' } ],
        'react/jsx-curly-brace-presence': [ 'error', 'never' ],
        'react/jsx-fragments': [ 'error', 'syntax' ],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': [
            'error', {
                ignoreCase: true,
                callbacksLast: true,
                shorthandLast: true,
                noSortAlphabetically: true,
                reservedFirst: true
            }
        ],
        'react/jsx-tag-spacing': [
            'error', {
                beforeSelfClosing: 'never',
                beforeClosing: 'never'
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [
            'error', {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line'
            }
        ],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
