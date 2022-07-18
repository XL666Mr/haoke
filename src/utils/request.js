import axios from 'axios'
import store from '@/store'
import { URL } from './url'
const request = axios.create({
  baseURL: URL
})
request.interceptors.request.use((config) => {
  config.headers.authorization = store.state.token.token
  return config
})
request.interceptors.response.use((res) => {
  return res
})
export default request
