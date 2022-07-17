import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
})
request.interceptors.request.use((config) => {
  config.headers.authorization = store.state.token.token
  return config
})
request.interceptors.response.use((res) => {
  return res
})
export default request
