import storage from './storage'
const key = 'TOKENs'
export const setToken = (val) => {
  storage.set(key, val)
}
export const getToken = () => storage.get(key)
export const removeToken = () => storage.remove(key)
