/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-11-13 21:32:00
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 16:21:11
 * @Description: pretter 配置文件
 */
module.exports = {
  printWidth: 120, // 一行最多多少个字符
  tabWidth: 2, //缩进长度
  semi: false, // 在语句末尾是否需要分号
  useTabs: false, //使用空格代替tab缩进
  singleQuote: true, // 是否使用单引号
  trailingComma: 'none', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象文本中打印括号之间的空格
  singleAttributePerLine: true, // 每行单个属性
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  singleAttributePerLine: false, // 每行单个属性
}
