/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-06 13:33:55
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 19:58:51
 * @Description: 底部导航
 */
import styles from './index.module.less'
import { Badge, TabBar } from 'antd-mobile'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '@/components/Icon'
export default function FooterTabBar(): JSX.Element {
  const tabs = [
    {
      key: 'message',
      title: '消息',
      badge: '99+',
      icon: <Icon icon="gertan-xiaoxi1" size={1.4} isBg={false} />
    },
    {
      key: 'contact',
      title: '联系人',
      icon: <Icon icon="gertan-lianxiren" size={1.3} isBg={false} />
    },
    {
      key: 'user_center',
      title: '我的',
      badge: Badge.dot,
      icon: <Icon icon="gertan-wodexinxi" size={1.3} isBg={false} />
    }
  ]

  const location = useLocation()
  const currentKey = location.pathname.split('/').pop()
  const [activeKey, setActiveKey] = useState(currentKey)
  const navigate = useNavigate()

  const setRouteActive = (value: string): void => {
    setActiveKey(value)
    navigate(value)
  }

  return (
    <>
      <div className={styles.container}>
        <TabBar
          safeArea={true}
          activeKey={activeKey}
          onChange={(value) => {
            setRouteActive(value)
          }}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} title={item.title} badge={item.badge} icon={item.icon} />
          ))}
        </TabBar>
      </div>
    </>
  )
}
