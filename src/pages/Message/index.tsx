/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-06 14:24:38
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-02-03 21:22:47
 * @Description: 消息页
 */
import { List, SearchBar, Image, SwipeAction } from 'antd-mobile'
import { type Action } from 'antd-mobile/es/components/swipe-action'
import styles from './index.module.less'
/**
 * 消息组件
 *
 * @returns JSX.Element 消息组件
 */
export default function Messsage(): JSX.Element {
  const itemPrefix = (avatarUrl: string): JSX.Element => {
    return <Image src={avatarUrl} fit="cover" width={50} height={50} style={{ borderRadius: '50%' }} lazy />
  }
  const item = {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos'
  }

  const rightActions: Action[] = [
    {
      key: 'unread',
      text: '标记未读',
      color: 'light',
      onClick: () => {alert(11)}
    },
    {
      key: 'mute',
      text: '免打扰',
      color: 'warning'
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger'
    }
  ]
  return (
    <>
      <div className={styles.container}>
        <SearchBar placeholder="搜索" />
        <List mode="card" header="已在手机登录">
          <SwipeAction rightActions={rightActions}>
            <List.Item prefix={itemPrefix(item.avatar)}>
              <div className={styles.messageTitle}>
                <div className={styles.name}>张三</div>
                <div className={styles.time}>16.54</div>
              </div>
              <div className={styles.messageDetail}>
                <div className={styles.content}>今天吃饭了吗??????????????????????????</div>
                <div className={styles.count}>99+</div>
              </div>
            </List.Item>
          </SwipeAction>
        </List>
      </div>
    </>
  )
}
