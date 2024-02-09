/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2024-01-28 19:15:29
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-28 19:45:19
 * @Description: 性别
 */
enum Gender {
  Male = '1',
  Female = '0',
  Privite = '-1'
}
export const GenderOptions = [
  {
    label: '男',
    value: Gender.Male
  },
  {
    label: '女',
    value: Gender.Female
  },
  {
    label: '保密',
    value: Gender.Privite
  }
]
