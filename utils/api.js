import http from './commonRequest.js' // 获取基础数据信息
const api = {
	  login: '/vender_tvt/login', // 登陆
  baseImgUri: 'https://event.1shang.com/links-software-web-file/integralMall/jiangxin/'
  }

export default api

// 登陆
export function login (parameter) {
  return http.commonRequest({
    url: api.login,
    method: 'post',
    data: parameter
  })
}

// 图片相对路径
export function baseImgUri (parameter) {
  return api.baseImgUri
}

