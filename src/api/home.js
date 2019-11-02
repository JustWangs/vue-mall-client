import request from '@/utils/request'

// 获取banner
export function getBanner() {
  return request({
    url: '/getBannerNotice',
    method: 'get',
  })
}

// 获取商品
export function getGoodsByTags(data) {
    return request({
      url: '/getGoodsByTags',
      method: 'post',
      data
    })
  }
