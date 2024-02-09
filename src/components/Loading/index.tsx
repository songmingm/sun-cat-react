/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-01 17:45:46
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 21:13:59
 * @Description: Loading 加载中组件
 */
import style from './index.module.less'
export default function Loading(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.ball1}></div>
        <div className={style.ball2}></div>
        <div className={style.ball3}></div>
        <div className={style.ball4}></div>
      </div>

      <div className={style.tip}>拼命加载中...</div>
    </div>
  )
}
