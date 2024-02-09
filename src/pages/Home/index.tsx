/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 20:30:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 14:55:14
 * @Description: Home 页面
 */
import FooterTabBar from '@/components/FooterTabBar'
import styles from './index.module.less'
import { Outlet } from 'react-router-dom'
/**
 * 主页组件
 *
 * @returns JSX.Element - 主页组件
 */
export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.body}>
        <Outlet />
      </div>
      <FooterTabBar />
    </>
  )
}
