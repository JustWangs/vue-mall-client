import request from '@/utils/request'

// 获取所有地址
export function getAllAddress(data) {
  return request({
    url: '/userAddress',
    method: 'post',
    data
  })
}

// 新增地址
export function createAddress(data) {
    return request({
      url: '/createAddress',
      method: 'post',
      data
    })
  }
