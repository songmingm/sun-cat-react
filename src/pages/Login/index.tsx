/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 20:03:58
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-06 16:58:06
 * @Description: Login 页面
 */
import { type Rule } from 'antd-mobile/es/components/form'
import styles from './index.module.less'
import { Form, Input, Button } from 'antd-mobile'
import Logo from '../Logo'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/Icon'
export default function Login(): JSX.Element {
  // 邮箱验证规则
  const emailRules: Rule[] = [
    { required: true, message: '邮箱是必填项!' },
    { type: 'email', warningOnly: true }
  ]
  // 密码验证规则
  const passwordRules: Rule[] = [{ required: true, message: '密码是必填项！' }]

  const emailLabel = (
    <span>
      <Icon icon="gertan-email-d" size={1.2} isBg={false} />
      <span style={{ marginLeft: '5px', fontSize: '1rem' }}>邮箱</span>
    </span>
  )
  const passwordLabel = (
    <span>
      <Icon icon="gertan-password-d" size={1.2} isBg={false} />
      <span style={{ marginLeft: '5px', fontSize: '1rem' }}>密码</span>
    </span>
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
            <p className={styles.title}>SIGN UP</p>
            <div className={styles.forms}>
              <Form
                name="loginForm"
                mode="card"
                requiredMarkStyle="none"
                layout="vertical"
                footer={
                  <Button block type="submit" color="primary" size="large">
                    LOGIN
                  </Button>
                }>
                <Form.Item name="email" label={emailLabel} rules={emailRules}>
                  <Input clearable />
                </Form.Item>
                <Form.Item name="password" label={passwordLabel} rules={passwordRules}>
                  <Input type="password" autoComplete='off' clearable />
                </Form.Item>
              </Form>
            </div>
            <div className={styles.links}>
              <a
                onClick={() => {
                  navigate('/forget')
                }}>
                忘记密码？
              </a>
              <a
                onClick={() => {
                  navigate('/register')
                }}>
                注册
              </a>
            </div>
            <div className={styles.loginType}>
              <Icon icon="gertan-wx" size={1.2} isBg={true} />
              <Icon icon="gertan-qq" size={1.2} isBg={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
