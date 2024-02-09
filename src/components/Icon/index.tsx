/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-04 20:32:40
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 02:31:12
 * @Description: Icon 组件
 */

import { type CSSProperties } from 'react'

interface IconProps {
  icon: string
  size: number
  fill?: string
  isBg: boolean
  backgroundColor?: string
}
export default function Icon(props: IconProps): JSX.Element {
  // icon 图标样式
  const iconStyle: CSSProperties = {
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    verticalAlign: '-0.15em',
    fill: props.fill ?? 'currentColor',
    overflow: 'hidden'
  }
  // 是否需要背景
  const backgroundStyle: CSSProperties = {
    display: 'flex',
    width: `${props.size + 1}rem`,
    height: `${props.size + 1}rem`,
    backgroundColor: props.backgroundColor ?? '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'0.5rem'
  }

  const icon = '#' + props.icon

  return (
    <>
      <span style={props.isBg ? backgroundStyle : {}}>
        <svg style={iconStyle} aria-hidden="true">
          <use xlinkHref={icon} />
        </svg>
      </span>
    </>
  )
}
