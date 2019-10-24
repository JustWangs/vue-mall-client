import request from '@/utils/request'

// 获取验证码
export function getCode(data) {
  return request({
    url: '/getCode',
    method: 'get',
    data
  })
}