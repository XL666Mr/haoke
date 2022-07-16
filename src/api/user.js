import request from '@/utils/request'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

export const getList = () => {
  return request({
    method: 'GET',
    url: '/user/favorites'
  })
}
