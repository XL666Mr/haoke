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

export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}
export const userLogout = () => {
  return request({
    method: 'POST',
    url: '/user/logout'
  })
}
export const getCityList = () => {
  return request({
    url: '/area/city',
    method: 'GET',
    params: {
      level: 1
    }
  })
}
