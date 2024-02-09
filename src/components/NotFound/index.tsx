/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-30 21:25:40
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 12:46:37
 * @Description: 404页面
 */

import styles from './index.module.less'
export default function NotFound(): JSX.Element {
  // 生成方块数量
  const loaderSquares = Array.from({ length: 7 }, (_, index) => (
    <div
      key={index}
      className={styles.loaderSquare}
    />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.loader}>{loaderSquares}</div>
      <div className={styles.tip}>这里什么都没有...</div>
    </div>
  )
}
