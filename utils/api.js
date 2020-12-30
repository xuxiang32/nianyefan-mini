const host = 'https://www.dalajiaopm.com/';
const api = {
  domain:'https://www.dalajiaopm.com/',
  baseImgUri: 'https://event.1shang.com/links-software-web-file/integralMall/jiangxin/',
  loginUrl: host + "member-system-api/auth/getJwtTokenByMiniprogram", // 登录链接,前面加上host
  loginUrlAct: host + "links-software-web-activity/wechatApp/privateLogin", // 登录链接,前面加上host
  httpPrefix: host + 'integral-mall-api/',
  couponHttp: host + 'ahxh-coupon-api/',
  activityUrl: host + 'links-software-web-activity/',
}

export default api
