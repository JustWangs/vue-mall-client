import request from '@/utils/request'
import { _postNoWithCredentials} from './index'
// 获取上传token
export function uploadToken() {
    return request({
      url: '/uploadtoken',
      method: 'get'
    })
}


//上传
export const upload = (data) => {
  let formData = new FormData()
  for(let i in data) {
      formData.append(i,data[i])
  }
  let req = {
    data: formData,
    url: '/upload-z2.qiniup.com/'
  }
  return _postNoWithCredentials(req);
}

// 更换头像
export function updateUserAvatar(data) {
  return request({
    url:'/updateUserAvatar',
    method:'post',
    data
  })
}