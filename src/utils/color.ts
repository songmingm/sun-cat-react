/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-05 21:33:34
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-05 21:35:09
 * @Description: 颜色工具
 */


/**
 * 将十六进制颜色转换为RGBA格式
 *
 * @param hexColor 十六进制颜色值
 * @param opacityPercent 透明度百分比
 * @returns 返回RGBA格式的颜色值
 */
export function hexToRgba(hexColor: string, opacityPercent: number): string {
  // 移除可能存在的#号
  hexColor = hexColor.replace('#', '')
  // 分割颜色值
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 4), 16)
  const b = parseInt(hexColor.substring(4, 6), 16)
  // 将百分比转换为小数
  const opacity = opacityPercent / 100
  // 返回RGBA格式
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
