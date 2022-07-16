import axios from 'axios'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
})
request.interceptors.request.use((config) => {
  config.headers.authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MzE2LCJpYXQiOjE2NTc4ODYwOTYsImV4cCI6MTY1NzkwMDQ5Nn0.nJ8LHYwNgbGp-ylvPHvvOTQbxl8JOADnvDJyYg8jRBU'
  return config
})
request.interceptors.response.use((res) => {
  console.log(res)
  return res
})
export default request
