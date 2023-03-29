const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // 'vue/custom-event-name-casing': 'off',
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    // 'space-before-function-paren': 'off',
    // 'vue/attributes-order': 'off',
    // 'vue/one-component-per-file': 'off',
    // 'vue/html-closing-bracket-newline': 'off',
    // 'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/attribute-hyphenation': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/require-explicit-emits': 'off',
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'always',
    //       normal: 'never',
    //       component: 'always'
    //     },
    //     svg: 'always',
    //     math: 'always'
    //   }
    // ],
    'no-var': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 8,
        multiline: {
          max: 1
        }
      }
    ],
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'always'],
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-caller': 2,
    'no-eval': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-return-assign': [2, 'except-parens'],
    'no-sequences': 2,
    'no-trailing-spaces': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-whitespace-before-property': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'always'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    'template-curly-spacing': [2, 'never'],
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'object-curly-spacing': [2, 'always'],
    'no-alert': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-array-constructor': 2,
    'no-bitwise': 1,
    'no-div-regex': 1,
    'no-else-return': 2,
    'no-empty': 1,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-multi-assign': 1,
    'no-negated-condition': 2,
    'no-extra-bind': 2,
    'no-tabs': 2,
    'no-extra-parens': [2, 'functions'],
    'no-floating-decimal': 2,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 1,
    'linebreak-style': [0, 'windows'],
    'no-multi-str': 2,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
    'no-proto': 2,
    'no-self-compare': 2,
    'func-call-spacing': 2,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [1, 'always'],
    'computed-property-spacing': [1, 'never'],
    'consistent-return': 0,
    'default-case': 1,
    'func-names': 1,
    'func-style': 0,
    'guard-for-in': 0,
    'id-length': 0,
    'lines-around-comment': 0,
    'max-depth': [1, 4],
    'max-len': [1, { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'max-nested-callbacks': 1,
    'max-params': [1, 6],
    'max-statements': [1, 40],
    'new-parens': 2,
    'object-shorthand': 1,
    'operator-assignment': 1,
    'prefer-spread': 1,
    'quote-props': [1, 'as-needed'],
    radix: [1, 'as-needed'],
    'id-match': 0,
    'sort-vars': [1, { ignoreCase: true }],
    strict: 2,
    'vars-on-top': 2,
    'wrap-regex': 0,
    yoda: [2, 'never']
  }
});
