/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 20:51:52
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 12:49:13
 * @Description: 路由懒加载函数
 */
import { Suspense } from 'react'

export function LazyLoad(Component: React.LazyExoticComponent<() => JSX.Element>): JSX.Element {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}
