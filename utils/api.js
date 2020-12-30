import http from './commonRequest.js' // 获取基础数据信息
const host = 'https://www.dalajiaopm.com/';
const api = {
  baseImgUri: 'https://event.1shang.com/links-software-web-file/integralMall/jiangxin/',
  loginUrl: host + "member-system-api/auth/getJwtTokenByMiniprogram", // 登录链接,前面加上host
  loginUrlAct: host + "links-software-web-activity/wechatApp/privateLogin", // 登录链接,前面加上host
  httpPrefix: host + 'integral-mall-api/',
  couponHttp: host + 'ahxh-coupon-api/',
  activityUrl: host + 'links-software-web-activity/',
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

