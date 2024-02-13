/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-06 18:45:47
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-02-13 12:18:23
 * @Description: 我的个人设置
 */

// import { Button, Input, Selector } from 'antd-mobile'
import UserAvatar from './UserAvatar'
import styles from './index.module.less'
// import Icon from '@/components/Icon'
// import { useState } from 'react'
export default function UserCenter(): JSX.Element {
  // const options = [
  //   {
  //     label: '男',
  //     value: '1'
  //   },
  //   {
  //     label: '女',
  //     value: '0'
  //   },
  //   {
  //     label: '保密',
  //     value: '-1'
  //   }
  // ]

  // const [email, setEmail] = useState('mmsong@yeah.net')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.myData}>
          <UserAvatar size="80px" borderRadius="10px" avatartUrl="" />
          <div>张三</div>
        </div>
        <div className={styles.list}>
          <div>个人中心</div>
        </div>
      </div>
    </>
  )
}
