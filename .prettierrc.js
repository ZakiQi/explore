module.exports = {
  // 一行最多 100 字符
  printWidth: 150,
  trailingComma: 'all',
  // 缩进
  tabWidth: 2,
  // 末尾分号
  semi: false,
  // 单引号
  singleQuote: true,
  jsxBracketSameLine: false,
  trailingComma: 'none',
  arrowParens: 'always',
  extends: [
    //继承 vue 的标准特性
    'plugin:vue/essential',
    'eslint:recommended',
    //避免与 prettier 冲突
    'plugin:prettier/recommended'
  ]
}
