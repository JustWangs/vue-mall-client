import axios from 'axios'
import { Toast } from "vant"

const service = axios.create({
  baseURL:"http://localhost:9999/h5",
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
    const res = response.data
    return res
  },
  error => {
    if (error.response.status === 401) {
      Toast(error.response.data.data.msg)
    }
    return Promise.reject(error)
  }
)

export default service
