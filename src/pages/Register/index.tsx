/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 20:15:08
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 22:05:14
 * @Description: 注册页面
 */

import { type Rule } from 'antd-mobile/es/components/form'
import styles from './index.module.less'
import { Form, Input, Button } from 'antd-mobile'
import Logo from '@/pages/Logo'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'
import { localStorageUtil } from '@/utils/storage'
export default function Register(): JSX.Element {
  // 邮箱验证规则
  const emailRules: Rule[] = [
    { required: true, message: '邮箱是必填项！' },
    { type: 'email', warningOnly: true }
  ]
  // 密码验证规则
  const vcodeRule: Rule[] = [
    { required: true, message: '验证码是必填项!' },
    {len: 6, message: '验证码长度为6位！'}
  ]

  const emailLabel = (
    <span>
      <Icon icon="gertan-email-d" size={1.2} isBg={false} />
      <span style={{ marginLeft: '5px', fontSize: '1rem' }}>邮箱</span>
    </span>
  )
  const vcodeLabel = (
    <span>
      <Icon icon="gertan-yanzhengma" size={1.2} isBg={false} />
      <span style={{ marginLeft: '5px', fontSize: '1rem' }}>验证码</span>
    </span>
  )
  const [timer, setTimer] = useState<number>(60)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  // 发送验证码按钮
  const handSendCode = (): void => {
    setIsDisabled(true)
    localStorageUtil.set('vcode_time', String(Date.now() + timer * 1000))

    // 倒计时开始，60s，时间<0时，倒计时结束，重置倒计时状态
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) {
          return prevTimer - 1
        } else {
          clearInterval(interval)
          setIsDisabled(false)
          localStorageUtil.remove('vcode_time')
          return 60
        }
      })
    }, 1000)
  }

  useEffect(() => {
    const expirationTime = localStorage.getItem('vcode_time')
    if (expirationTime != null) {
      const remainingTime = Math.ceil((parseInt(expirationTime) - Date.now()) / 1000)
      if (remainingTime > 0) {
        setTimer(remainingTime)
        setIsDisabled(true)
        // 倒计时开始
        const interval = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer > 1) {
              return prevTimer - 1
            } else {
              clearInterval(interval)
              setIsDisabled(false)
              localStorage.removeItem('vcode_time')
              return 60
            }
          })
        }, 1000)
        // 卸载组件时，清除计时器，否侧刷新会有两个或者多个计时器同时进行
        return () => {
          clearInterval(interval)
        }
      }
    }
  }, [])

  // 验证码输入框，当倒计时不为60时或者按钮禁用时，显示倒计时
  const vCodeExtra = (
    <Button disabled={isDisabled} color="primary" fill="none" size="small" onClick={handSendCode}>
      {isDisabled || timer !== 60 ? `${timer}s` : '验证码'}
    </Button>
  )

  const navigate = useNavigate()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.formArea}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p className={styles.title}>REGISTER</p>
            <div className={styles.forms}>
              <Form
                name="registerForm"
                mode="card"
                requiredMarkStyle="none"
                layout="vertical"
                footer={
                  <Button block type="submit" color="primary" size="large">
                    Resiter
                  </Button>
                }>
                <Form.Item name="email" label={emailLabel} rules={emailRules}>
                  <Input clearable />
                </Form.Item>
                <Form.Item name="vcode" label={vcodeLabel} rules={vcodeRule} extra={vCodeExtra}>
                  <Input clearable />
                </Form.Item>
              </Form>
            </div>
            <div className={styles.links}>
              <a
                onClick={() => {
                  navigate('/login')
                }}>
                已有账号？登录
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
