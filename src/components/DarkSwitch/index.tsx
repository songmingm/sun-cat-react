/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-31 00:55:50
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 18:40:43
 * @Description: 切换主题模式
 */

import { Theme, useTheme } from '@/utils/theme'
import style from './index.module.less'
import { Toast } from 'antd-mobile'
import Icon from '@/components/Icon'

/**
 * DarkSwitch 组件参数
 * 接受一个样式参数，用于自定义样式，方便在不同组件中使用该开关的位置样式等问题
 */
interface DarkSwitchProps {
  styles?: React.CSSProperties
}
export default function DarkSwitch(props: DarkSwitchProps): JSX.Element {
  const [theme, toggleTheme] = useTheme()

  const { styles } = props

  // 主题提示图标
  const lightIcon = <Icon icon="gertan-taiyang" size={3} isBg={false} />
  const darkIcon = <Icon icon="gertan-yueliang" size={3} isBg={false} />
  const osIcon = <Icon icon="gertan-toos" size={3} isBg={false} />

  /**
   * 点击切换主题
   * @param theme 切换的主题模式
   */
  function handle(theme: Theme): void {
    toggleTheme(theme)
    const tipIcon = theme === Theme.LIGHT ? lightIcon : theme === Theme.DARK ? darkIcon : osIcon
    const tipContent = theme === Theme.LIGHT ? '亮色模式' : theme === Theme.DARK ? '暗色模式' : '跟随系统'
    Toast.show({
      icon: tipIcon,
      content: tipContent,
      duration: 1000
    })
  }

  // handle
  return (
    <>
      <div style={styles}>
        <div className={style.toggle}>
          {theme === Theme.DARK && (
            <div
              className={style.icon}
              key={Theme.DARK}
              onClick={() => {
                handle(Theme.OS)
              }}>
              <svg viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          )}
          {theme === Theme.LIGHT && (
            <div
              className={style.icon}
              key={Theme.LIGHT}
              onClick={() => {
                handle(Theme.DARK)
              }}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
          )}
          {theme === Theme.OS && (
            <div
              className={style.icon}
              key={Theme.OS}
              onClick={() => {
                handle(Theme.LIGHT)
              }}>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M513 64.8c-38.2 0-75.3 4.8-110.6 13.8-2.1 0.5-4.3 1.1-6.4 1.7-8.3 2.2-16.5 4.7-24.6 7.4-1 0.3-2 0.7-3.1 1-4.7 1.6-9.5 3.3-14.1 5.1-1.7 0.6-3.4 1.3-5.1 2-11.8 4.7-23.4 9.8-34.8 15.5l-4.8 2.4c-17.7 9.1-34.7 19.2-50.9 30.5-1.5 1-2.9 2.1-4.4 3.1-14.6 10.4-28.6 21.6-41.8 33.7l-3.9 3.6c-9.2 8.5-18 17.4-26.4 26.7-1.2 1.3-2.4 2.7-3.6 4C108.5 294.1 66 398 66 511.8c0 246.9 200.1 447 447 447s447-200.1 447-447-200.1-447-447-447zM778.2 777c-34.5 34.5-74.6 61.5-119.2 80.4-45.7 19.3-94.2 29.2-144.3 29.4v-750c50.1 0.2 98.6 10.1 144.3 29.4 44.7 18.9 84.8 45.9 119.2 80.4 34.5 34.5 61.5 74.6 80.4 119.2 19.5 46.2 29.4 95.3 29.4 146s-9.9 99.8-29.4 146c-18.9 44.6-45.9 84.7-80.4 119.2z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
