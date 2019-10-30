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

// 编辑地址
export function updateAddress(data) {
    return request({
        url: '/updateAddress',
        method: 'post',
        data
    })
}

// 删除地址
export function delAddress(data) {
    return request({
        url: '/delAddress',
        method: 'post',
        data
    })
}