
//post and no withCredentials
import axios from 'axios'
export const _postNoWithCredentials = (req) => {
  return axios({method: 'post', url: `/${req.url}`, data: req.data,withCredentials:false,'Content-Type':'image/png'})
}