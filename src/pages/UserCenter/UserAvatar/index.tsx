/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-06 18:57:13
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 19:38:42
 * @Description: 用户头像 「点击上传头像」
 */

import { Avatar } from 'antd-mobile'

interface Props {
  avatartUrl: string
  size?: string
  borderRadius?: string
}
export default function UserAvatar(props: Props): JSX.Element {
  // 头像样式
  const avatarStyle = { '--size': props.size, '--border-radius': props.borderRadius }
  return (
    <>
        <Avatar style={avatarStyle} src={props.avatartUrl} />
    </>
  )
}
