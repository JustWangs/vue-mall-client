import request from '@/utils/request'

// 获取banner
export function goodsDetail(data) {
  return request({
    url: '/goodsDetail',
    method: 'post',
    data
  })
}

// 添加进购物车
export function addToCar(data) {
    return request({
        url: '/addToCollection',
        method: 'post',
        data
    })
}

// 删除购物车
export function delCarGoods(data) {
    return request({
        url: '/delCollection',
        method: 'post',
        data
    })
}
