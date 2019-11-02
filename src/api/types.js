import request from '@/utils/request'

// 获取验证码
export function getAllTags() {
  return request({
    url: '/getALlTags',
    method: 'get',
  })
}
