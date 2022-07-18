import storage from './storage'
<<<<<<< HEAD
const key = 'TOKEN'
export const setToken = (val) => storage.set(key, val)
export const getToken = () => storage.set(key)
export const removeToken = () => storage.set(key)
=======
const key = 'TOKENs'
export const setToken = (val) => {
  storage.set(key, val)
}
export const getToken = () => storage.get(key)
export const removeToken = () => storage.remove(key)
>>>>>>> favorate
