/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-17 14:58:12
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-04 20:55:36
 * @Description: main 入口函数
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App.tsx'
import '@/assets/iconfonts'
import '@/styles/global.less'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
