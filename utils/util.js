const app = getApp()
let dommain = app.globalData.httpPrefix
let dommain2 = app.globalData.memberUrl


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const timestampToTime = now => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  return year + "年" + month + "月" + date + "日 " + hour + ":" + formatNumber(minute);
}

const isEmpty = (param) => {
  return (param === undefined || param === null || param === '' || param.length === 0)
}

const isNotEmpty = (param) => {
  return !isEmpty(param)
}

let getToken = function (suc = function () {}) {
  wx.login({
    success: function (res_login) {
      var accountInfo = wx.getAccountInfoSync();
      if (res_login.code) {
        //TODO code获取到, 给后台调用获取userinfo信息
        wx.getUserInfo({
          success: function (res) {
            // 获取用户信息成功, 拿到密文和iv , iv用来解密密文. 解密得到openid和用户信息
            var jsonData = {
              code: res_login.code,
              encryptedData: res.encryptedData,
              iv: res.iv,
              appid: accountInfo.miniProgram.appId,
              applicationId: app.globalData.applicationId
            };
            wx.request({
              url: app.globalData.loginUrl,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              data: jsonData,
              success: res => {
                if (res.data.success) {
                  wx.setStorageSync('token', res.data.data);
                  suc()
                } else {
                  wx.showToast({
                    title: res.data.msg,
                    icon: 'none'
                  })
                }
              },
              fail: function (res) {
                wx.showToast({
                  title: '系统错误',
                  icon: 'none'
                })
              },
            })
          },
          fail: function (res) {
            console.log(res)
          }
        })
      } else {
        console.log('获取用户登录态失败！' + res.errMsg);
      }
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

// let login = function(suc = function () {}) {
//     let token = wx.getStorageSync('token');
//     wx.request({
//      url: `${dommain}wap/auth/memberLogin`,
//      header: {
//        'Content-Type': 'application/x-www-form-urlencoded'
//      },
//      method: 'POST',
//      data: {
//        token,
//        memberSysAppId :2
//      },
//      success: res => {
//        console.log(res)
//        suc()
//      },
//      fail: function (res) {
//        wx.showToast({
//          title: '系统错误',
//          icon: 'none'
//        })
//      },
//    })

// }

let getUserInfo = function (obj = null, callBack = false) {
  if (obj && obj.loading && callBack) {
    obj.loading.show()
  }
  requestBySessionId({
    url: 'wap/integralUserCenter/toUserCenter',
    method: 'POST',
    success: function (res) {
      if (res.data.success) {
        // app.globalData.integral = res.data.data.integralAccount.balance;
        // app.globalData.avatarUrl = res.data.data.integralUser.headUrl;
        // app.globalData.nickName = res.data.data.integralUser.nickName;
        // app.globalData.userInfo = res.data.data.integralUser;
        app.globalData.userInfo = Object.assign({}, app.globalData.userInfo, res.data.data.integralUser) ;
        app.globalData.memberId = res.data.data.integralUser.memberId
        app.globalData.userId = res.data.data.integralUser.userId
        if (isNotEmpty(obj)) {
          obj.setData({
            integral: res.data.data.integralAccount.balance,
            avatarUrl: res.data.data.integralUser.headUrl,
            nickName: res.data.data.integralUser.nickName
          })
        }
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    },
    fail: function (res) {
      wx.showToast({
        title: '系统错误',
        icon: 'none'
      })
    },
    complete: function (res) {
      if (callBack) callBack()
    },
  });
}


var requestBySessionId = function (requestParam, needDomain = true) {
  //三个默认参数的值
  var method = "GET";
  var dataType = "json";
  var responseType = "text";
  var that = this
  //用户输入了参数就替换，没输入就使用默认的
  if ("method" in requestParam) {
    method = requestParam.method;
  }
  if ("dataType" in requestParam) {
    dataType = requestParam.dataType;
  }
  if ("responseType" in requestParam) {
    responseType = requestParam.responseType;
  }

  var url = requestParam.url;
  var data = requestParam.data;
  var success = requestParam.success;
  var fail = requestParam.fail;
  var complete = requestParam.complete;

  var cookieStr = ""; //请求报文头中cookie的字符串

  var Cookie = wx.getStorageSync('cookie'); //获取全局变量中的cookie内容
  cookieStr = Cookie;
  //debugger
  var header = {};
  var userInfos = wx.getStorageSync("userInfo")

  if ("header" in requestParam) {
    header = requestParam.header;
    header["Cookie"] = cookieStr;
    if (isNotEmpty(userInfos)) {
      header["wxOpenId"] = userInfos.openId;
    }
  } else {
    header["Cookie"] = cookieStr;
    if (isNotEmpty(userInfos)) {
      header["wxOpenId"] = userInfos.openId;
    }
  }

  if (method === "POST") {
    header["Content-Type"] = "application/x-www-form-urlencoded"
  }

  header['JWT-TOKEN'] = wx.getStorageSync('token');

  wx.request({
    url: needDomain ? dommain + url : url,
    method: method,
    responseType: responseType,
    dataType: dataType,
    data: data,
    header: header, //每次请求带上sessionId
    success: function (res) {
      //先将检查服务器返回报文头中有无sessionId，有则存到全局变量中
      var cookie = res.header["Set-Cookie"];
      if (undefined != cookie) {
        // debugger
        var sessionPos;
        if ((sessionPos = cookie.indexOf("JSESSIONID=")) != -1) {
          //每次请求成功都将sessionId存入全局变量
          wx.setStorageSync('cookie', cookie.substr(sessionPos, 43))
          //console.log(app.globalData.cookie)
        }
      }
      //执行正常的操作
      // debugger
      if (res.data.code == 'E00200001') {
        getToken(function () {
          requestBySessionId(requestParam)
        })
      } else if (res.data.success) {
        success(res);
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    },
    fail: fail || function () {
      wx.showToast({
        title: '系统错误',
        icon: 'none'
      })
    },
    complete: complete
  });
}

var requestBySessionId2 = function (requestParam, even) {
  //三个默认参数的值
  var method = "GET";
  var dataType = "json";
  var responseType = "text";
  var that = this
  //用户输入了参数就替换，没输入就使用默认的
  if ("method" in requestParam) {
    method = requestParam.method;
  }
  if ("dataType" in requestParam) {
    dataType = requestParam.dataType;
  }
  if ("responseType" in requestParam) {
    responseType = requestParam.responseType;
  }

  var url = requestParam.url;
  var data = requestParam.data;
  var success = requestParam.success;
  var fail = requestParam.fail;
  var complete = requestParam.complete;

  var cookieStr = ""; //请求报文头中cookie的字符串

  var Cookie = wx.getStorageSync('cookie'); //获取全局变量中的cookie内容
  cookieStr = Cookie;
  //debugger
  var header = {};
  var userInfos = wx.getStorageSync("userInfo")

  if ("header" in requestParam) {
    header = requestParam.header;
    header["Cookie"] = cookieStr;
    if (isNotEmpty(userInfos)) {
      header["wxOpenId"] = userInfos.openId;
    }
  } else {
    header["Cookie"] = cookieStr;
    if (isNotEmpty(userInfos)) {
      header["wxOpenId"] = userInfos.openId;
    }
  }

  if (method === "POST"&&isEmpty(header["Content-Type"])) {
    header["Content-Type"] = "application/x-www-form-urlencoded"
  }

  header['JWT-TOKEN'] = wx.getStorageSync('token');

  wx.request({
    url: dommain2 + url,
    method: method,
    responseType: responseType,
    dataType: dataType,
    data: data,
    header: header, //每次请求带上sessionId
    success: function (res) {
      //先将检查服务器返回报文头中有无sessionId，有则存到全局变量中
      var cookie = res.header["Set-Cookie"];
      if (undefined != cookie) {
        // debugger
        var sessionPos;
        if ((sessionPos = cookie.indexOf("JSESSIONID=")) != -1) {
          //每次请求成功都将sessionId存入全局变量
          wx.setStorageSync('cookie', cookie.substr(sessionPos, 43))
          //console.log(app.globalData.cookie)
        }
      }
      //执行正常的操作
      // debugger
      if (res.data.code == 'E00200001') {
        getToken(function () {
          requestBySessionId(requestParam)
        })
      } else if (res.data.success) {
        success(res);
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    },
    fail: fail || function () {
      wx.showToast({
        title: '系统错误',
        icon: 'none'
      })
    },
    complete: complete
  });
}

let onShareAppMessage = function (res) {
  // 任务触发
  requestBySessionId2({
    url: 'member-system-api/api/que/customer/mission',
    method: 'POST',
    header:{
      'Content-Type': "application/json",
    },
    data: {
      msgType: "SHARE"
    },
    success: function (res) {
      
    },
    complete: function () {
      
    }
  })
  return {
    title: '欢迎加入雪花啤酒安徽会员中心',
    path: '/pages/index/index',
    imageUrl: app.globalData.picPrefix + 'share.png',
    success: function (shareTickets) {
      // 转发成功
    },
    fail: function (res) {
      // 转发失败
    },
    complete: function (res) { }
  }
}

let missonGet = function (missonType) {
  // 任务触发
  requestBySessionId2({
    url: 'member-system-api/api/que/customer/mission',
    method: 'POST',
    header:{
      'Content-Type': "application/json",
    },
    data: {
      msgType: missonType
    },
    success: function (res) {
      console.log(res)
    },
    complete: function () {
      console.log(123)
    }
  })
}
module.exports = {
  formatTime: formatTime,
  requestBySessionId: requestBySessionId,
  requestBySessionId2: requestBySessionId2,
  timestampToTime: timestampToTime,
  isEmpty: isEmpty,
  isNotEmpty: isNotEmpty,
  formatNumber: formatNumber,
  getUserInfo: getUserInfo,
  onShareAppMessage: onShareAppMessage,
  missonGet: missonGet
}