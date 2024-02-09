/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 21:28:01
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 12:45:50
 * @Description: 网络错误页面
 */
import styles from './index.module.less'
export default function Error(): JSX.Element {
  const loaderLines = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={styles.loadingBar}
    />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.loadingWave}>{loaderLines}</div>
      <div className={styles.tip}>您的网络似乎有点问题...</div>
    </div>
  )
}
