import storage from './storage'
const key = 'TOKEN'
export const setToken = (val) => storage.set(key, val)
export const getToken = () => storage.set(key)
export const removeToken = () => storage.set(key)
