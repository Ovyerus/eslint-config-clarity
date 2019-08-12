module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: { sourceType: 'module' },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        // Disable ESLint rules that are covered by TypeScript.
        'getter-return': 'off',
        'no-dupe-args': 'off',
        'no-dupe-keys': 'off',
        'no-unreachable': 'off',
        'valid-typeof': 'off',
        'no-const-assign': 'off',
        'no-new-symbol': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        camelcase: 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',

        // Enable some preferences
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
        overrides: { parameterProperties: 'explicit' }
      }
    ],
    // '@typescript-eslint/member-ordering': ''
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    // '@typescript-eslint/prefer-regexp-exec': ''
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error'
  }
};
