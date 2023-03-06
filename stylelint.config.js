module.exports = {
  root: true,
  defaultSeverity: 'warning',
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'selector-class-pattern': null,
    'order/properties-alphabetical-order': null,
    'selector-max-id': 1,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'at-root'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 样式块中不允许重复的属性
    'declaration-block-no-duplicate-properties': true,
    // 函数 url 链接不允许 shceme relative
    'function-url-no-scheme-relative': true,
    // 可组合成一个属性的写法，不允许拆开书写
    'declaration-block-no-redundant-longhand-properties': true,
    // 选择器最大深度
    'selector-max-compound-selectors': 10,
    // 最多2个类型选择器
    'selector-max-type': 2,
    // 不允许未知的动画
    'no-unknown-animations': true,
    // 在字体名称必须使用引号的地方使用引号，其他地方不能使用
    'font-family-name-quotes': 'always-unless-keyword',
    // url 函数内部必须有引号
    'function-url-quotes': 'always',
    // 指定字符串引号为单引号
    'string-quotes': 'single',
    'max-nesting-depth': [10, { ignore: ['blockless-at-rules', 'pseudo-classes'] }],
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
    'declaration-colon-newline-after': null
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
        'stylelint-config-recommended-vue'
      ],
      rules: {
        'keyframes-name-pattern': null,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ]
      }
    }
  ]
};
