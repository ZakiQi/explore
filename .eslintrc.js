module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  plugins: ['vue'],
  rules: {
    // ! 可以这样配置eslint-plugin-vue里面的规则
    'vue/no-unused-components': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 要求使用 === 和 !==
    'no-redeclare': 'error', // 禁止多次声明同一变量
    'no-label-var': 'error', // 禁用与变量同名的标签
    'no-unused-vars': 'error', // 禁止出现未使用过的变量
    'no-use-before-define': 'error', // 禁止在变量定义之前使用它们

    semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI ["always" (默认) 要求在语句末尾使用分号, "never" 不允许分号作为语句的末尾（不包括那些为了消除歧义以 [，(，/，+，或 - 开头的语句）],
    'semi-spacing': ['error', { before: false, after: true }], // 强制分号之前和之后使用一致的空格
    'array-bracket-spacing': ['error', 'never'], // 强制数组方括号中使用一致的空格
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号 [never,禁止]
    indent: ['error', 2] // 缩进
  }
}
