import axios from 'axios'
import db from '@/utils/localstorage'

const service = axios.create({
  baseURL: 'https://localhost:9999',
  withCredentials: true,
  timeout: 60 * 10 * 1000
})
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response拦截器
service.interceptors.response.use(
  response => {
    if (response.data.heads && response.data.heads.code !== 200) {
        alert('出错了。。。')
      if (response.data.heads.code === 401) {
        alert('身份已经过期，请重新登录')
        location.href = '#/login' // 为了重新实例化vue-router对象，跳转登录页 避免bug
      }
      return Promise.reject(response.data.heads.message)
    }
    const res = response.data
    return res
  },
  error => {
    if (error.response.status === 401) {
        alert('身份已经过期，请重新登录')
        location.href = '#/login' // 为了重新实例化vue-router对象，跳转登录页 避免bug
    } else {

    }
    return Promise.reject(error)

  }
)

export default service
