/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-05 21:41:25
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 16:50:57
 * @Description: 🌛 跟随系统切换颜色
 */
import { localStorageUtil } from '@/utils/storage'
import { useEffect, useState } from 'react'

export enum Theme {
  OS = 'os',
  LIGHT = 'light',
  DARK = 'dark'
}

/**
 * 本地存储中保存主题样式的key
 */
export const THEME_KEY: string = '__theme__'

export const useTheme = (): [Theme, (val: Theme) => void] => {
  const themeVal = localStorageUtil.get(THEME_KEY) as Theme
  const [theme, setTheme] = useState<Theme>(themeVal ?? Theme.OS)

  const prefers = window.matchMedia('(prefers-color-scheme: dark)')

  const followOS = (): void => {
    document.documentElement.dataset.theme = prefers.matches ? Theme.DARK : Theme.LIGHT
  }

  useEffect(() => {
    localStorageUtil.set(THEME_KEY, theme)
    if (theme === Theme.OS) {
      followOS()
      prefers.addEventListener('change', followOS)
    } else {
      document.documentElement.dataset.theme = theme
      prefers.removeEventListener('change', followOS)
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', followOS)
    }
  }, [theme])

  function toggleTheme(themeVal: Theme): void {
    setTheme(themeVal)
  }

  return [theme, toggleTheme]
}
