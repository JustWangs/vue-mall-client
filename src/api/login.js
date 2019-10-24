import request from '@/utils/request'

// 获取验证码
export function getCode() {
  return request({
    url: '/getCodeImage',
    method: 'get',
    responseType: 'arraybuffer'
  })
}

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 注册
export function regist(data) {
  return request({
    url: '/regist',
    method: 'post',
    data
  })
}
