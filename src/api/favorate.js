import request from '@/utils/request'
export const getList = () => {
  request({
    url: '/user/favorites'
  })
}
