/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-01 11:20:02
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 13:11:55
 * @Description: eslint 配置文件
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'eslint-config-prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true // 启用jsx
        }
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single'], // 使用单引号
    'comma-dangle': ['error', 'never'], // 禁止使用拖尾逗号
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-console': 'warn', // 警告 console 打印语句
  }
}
