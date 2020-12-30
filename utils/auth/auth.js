// pages/index/index.js
const app = getApp();
import utils from '../../utils/util.js';
import utilsMember from '../../utils/util-member.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prefix: app.globalData.picPrefix,
    isAuthUser: false,
    isAuthPhone: false,
    path: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (options && options.path) {
      this.setData({
        path: options.path
      })
    }

    this.loading = this.selectComponent('#loading');

    let that = this;

    wx.getSetting({ //获取用户授权信息
      success(res) {
        if (!res.authSetting['scope.userInfo']) { //如果没有授权
          that.setData({
            isAuthUser: false,
          })
        } else { //如果授权过
          that.setData({
            isAuthUser: true,
          })
        }
      },
      fail(res) {
        that.setData({
          isAuthUser: false,
        })
      },
      complete() {
        that.checkLogin()
      }
    })


  },

  checkLogin: function () {
    let that = this;
    let {
      isAuthUser
    } = that.data;
    //判断登录状态  
    if (isAuthUser && !utils.isEmpty(wx.getStorageSync('token'))) { //如果用户信息已授权而且有token了


      that.getUserInfo()
       
    
    } else { //如果用户信息没授权且或者没有token

      if (isAuthUser) { //如果有授权直接获取用户信息传给后台获取token
        that.userLogin()
      } else {
        that.loading.getLoading(1);
      }
    }
  },


  userLogin: function () { //获取用户信息并去后台换取token
    var that = this;
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
              };
              that.getToken(jsonData)
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
  },



  getToken: function (data) {
    var that = this
    that.loading.show();
    data.applicationId = app.globalData.applicationId
    wx.request({
      url: app.globalData.loginUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: data,
      success: res => {
        if (res.data.success) {
          wx.setStorageSync('token', res.data.data);
          that.onLoad()
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
      complete: function () {
        that.loading.getLoading(1);
      }
    })
  },





  authAndLogin: function (res) { //点击授权用户按钮后同意的回调
    if (utils.isEmpty(res.detail.iv)) {
      return
    }
    var that = this;
    wx.login({
      success: function (res_login) {
        var accountInfo = wx.getAccountInfoSync();
        if (res_login.code) {
          wx.getUserInfo({
            lang: "zh_CN",
            success: function (res) {
              var jsonData = {
                code: res_login.code,
                encryptedData: res.encryptedData,
                iv: res.iv,
                appid: accountInfo.miniProgram.appId,
              };
    
              /**
               * 拿到授权信息后将加密字符传入后台解密或得到相关的用户信息及openid
               */
              that.getToken(jsonData)
            },
            fail: function (res) {
              app.globalData.getTokening = false
              console.log(res)
            }
          })
          
        } else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      },

    })
  },


  getUserInfo: function () {
    let that = this
    that.loading.show();
    utils.requestBySessionId({
      url: 'wap/integralUserCenter/toUserCenter',
      method: 'POST',
      success: function (res) {
        if (res.data.success) {
          app.globalData.userInfo = Object.assign({}, app.globalData.userInfo, res.data.data.integralUser) ;
          app.globalData.memberId = res.data.data.integralUser.memberId
          app.globalData.userId = res.data.data.integralUser.userId
           //判断是否绑定手机号
          utilsMember.requestBySessionId({
          url: 'member-system-api/api/weixin/customer/getIfBindPhone',
          method: 'GET',
          header: {
            'Content-Type': "application/x-www-form-urlencoded",
          },
          success: function (res) {
            if (res.data.success) {
              if (res.data.data) { //已绑
                app.globalData.userInfo.phone = res.data.data;
                that.setData({ isAuthPhone: true })
                if (that.data.path) { //如果从参数里拿到path就跳回那个path  不然就返回上一页
                  wx.redirectTo({
                    url: that.data.path,
                  })
                } else {
                  wx.navigateBack({
                    delta: 1
                  })
                }
              } else { //未绑
                that.setData({
                  isAuthPhone: false,
                })
              }
            }
          },
          complete: function () {
            that.loading.getLoading(1);
          }
        })
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
      complete: function () {
        that.loading.getLoading(1);
      }
    });
  },


  getPhoneNumber: function (phone_res) {
    let that = this
    if (utils.isEmpty(phone_res.detail.iv)) {
      return
    }
   that.getPhoneAndBind(phone_res)

  },


  getPhoneAndBind: function (phone_res) {
    let that = this
    wx.login({
      success: function (res_login) {
        if (res_login.code) {
          let data = {
            jsCode: res_login.code,
            encryptedData: phone_res.detail.encryptedData,
            iv: phone_res.detail.iv,
            appid: app.globalData.appid,
            userId: app.globalData.userId
          }
          wx.request({
            url: app.globalData.activityUrl + 'wechatApp/getWeixinAppPhone',
            header: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            data: data,
            success: res => {
              //先将检查服务器返回报文头中有无sessionId，有则存到全局变量中
              let cookie = res.header["Set-Cookie"];
              if (undefined != cookie) {
                var sessionPos;
                if ((sessionPos = cookie.indexOf("JSESSIONID=")) != -1) {
                  //每次请求成功都将sessionId存入全局变量
                  wx.setStorageSync('cookie', cookie.substr(sessionPos, 43))
                }
              }
              if (res.data.success) {
                if (res.data.data != undefined && res.data.data != null) {
                  app.globalData.userInfo.phone = res.data.data;
                  //绑定手机号
                  utilsMember.requestBySessionId({
                    url: 'member-system-api/api/weixin/customer/editBindPhone',
                    method: 'GET',
                    header: {
                      'Content-Type': "application/x-www-form-urlencoded",
                    },
                    data: {
                      phone: res.data.data
                    },
                    success: function (res) {
                      if (res.data.success) {
                        that.setData({
                          isAuthPhone: true
                        })
                        if (that.data.path) { //如果从参数里拿到path就跳回那个path  不然就返回上一页
                          wx.redirectTo({
                            url: that.data.path,
                          })
                        } else {
                          wx.navigateBack({
                            delta: 1
                          })
                        }
                        // that.onLoad();
                      } else {
                        wx.showToast({
                          title: res.data.message,
                          icon: 'none'
                        })
                      }
                    },
                    complete: function () {
                    }
                  })
                }
              } else {
                wx.showToast({
                  title: res.data.message,
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
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },



  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },


})