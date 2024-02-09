/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-17 14:58:12
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 15:56:43
 * @Description: App 组件
 */

import { RouterProvider } from 'react-router-dom'
import routes from '@/routes'
import DarkSwitch from '@/components/DarkSwitch'
export default function App(): JSX.Element {
  // DarkSwitch 样式
  const styles = {
    position: 'absolute',
    right: '1rem',
    bottom: '5rem'
  }
  return (
    <>
      <RouterProvider router={routes} />
      <DarkSwitch styles={styles as React.CSSProperties} />
    </>
  )
}
