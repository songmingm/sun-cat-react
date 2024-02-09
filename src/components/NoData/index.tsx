/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-01 18:14:13
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 20:12:09
 * @Description: 没有此数据
 */
import styles from './index.module.less'
export default function NoData(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.cercle} />
        <div className={styles.cercle} />
        <div className={styles.cercle} />
        <div className={styles.cercle} />
      </div>
      <div className={styles.tip}>这条数据飞往火星了...</div>
    </div>
  )
}
