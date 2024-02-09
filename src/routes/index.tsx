/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 20:23:38
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 18:47:24
 * @Description: 路由文件
 */
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { LazyLoad } from '@/routes/LazyLoad'
import { lazy } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function helmetFn(title: string): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {titlePrefix}
          {title}
        </title>
      </Helmet>
    </HelmetProvider>
  )
}

const titlePrefix = 'Gertan - '
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: (
      <>
        {helmetFn('首页')}
        {LazyLoad(lazy(async () => await import('@/pages/Home')))}
      </>
    ),
    children: [
      {
        path: '',
        element: <Navigate to='message' replace />
      },
      {
        path: 'message',
        element: (
          <>
            {helmetFn('消息')}
            {LazyLoad(lazy(async () => await import('@/pages/Message')))}
          </>
        )
      },
      {
        path: 'user_center',
        element: (
          <>
            {helmetFn('个性设置')}
            {LazyLoad(lazy(async () => await import('@/pages/UserCenter')))}
          </>
        )
      },
      {
        path: '*',
        element: (
          <>
            {helmetFn('页面不存在')}
            {LazyLoad(lazy(async () => await import('@/components/NotFound')))}
          </>
        )
      }
    ]
  },

  {
    path: '/login',
    element: (
      <>
        {helmetFn('登录')}
        {LazyLoad(lazy(async () => await import('@/pages/Login')))}
      </>
    )
  },
  {
    path: '/register',
    element: (
      <>
        {helmetFn('注册')}
        {LazyLoad(lazy(async () => await import('@/pages/Register')))}
      </>
    )
  },
  {
    path: '/error',
    element: (
      <>
        {helmetFn('网络错误')}
        {LazyLoad(lazy(async () => await import('@/components/Error')))}
      </>
    )
  },
  {
    path: '*',
    element: (
      <>
        {helmetFn('页面不存在')}
        {LazyLoad(lazy(async () => await import('@/components/NotFound')))}
      </>
    )
  }
]

export default createBrowserRouter(routes, {
  basename: '/'
})
