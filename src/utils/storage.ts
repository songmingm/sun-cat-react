/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-03 22:25:07
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 13:00:17
 * @Description: 🔧storage工具类
 */

interface StorageUtil {
  get: (key: string) => string | null
  set: (key: string, value: string) => void
  remove: (key: string) => void
  clear: () => void
}
function createStorageUtil(storage: Storage): StorageUtil {
  function get(key: string): string | null {
    return storage.getItem(key)
  }

  function set(key: string, value: string): void {
    storage.setItem(key, value)
  }

  function remove(key: string): void {
    storage.removeItem(key)
  }

  function clear(): void {
    storage.clear()
  }

  return { get, set, remove, clear }
}

export const localStorageUtil = createStorageUtil(localStorage)
export const sessionStorageUtil = createStorageUtil(sessionStorage)
