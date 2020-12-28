<template>
	<view class="main-container">
		<NavBar :backBtn="true" title="匠心年夜饭" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="jx-main-fixedBtn jx-main-hdgz">
			<image :src="hdgzBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-wdjp" @click="handleTo('rank')">
			<image :src="wdjpBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-gdhd">
			<image :src="gdhdBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-body">
			<view class="button-container">
				<button open-type="share" v-if="isAuthUser">
					<view class='wechatImg'>
						 <image :src="familyBtn"  mode="widthFix"></image>
					 </view>
				</button>
				<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" v-if="!isAuthUser">
					<view class='wechatImg'>
						 <image :src="familyBtn"  mode="widthFix"></image>
					 </view>
				</button>
				<button @click="startOrder()">
					<view class='wechatImg'>
						 <image :src="startOrderBtn"  mode="widthFix"></image>
					 </view>
				</button>
			</view>
			<view class="step-container">
				<view class="step-list">
					<image :src="step1" mode="widthFix" ></image>
				</view>
				<view class="step-list">
					<image :src="step2" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const baseImgUrl = getApp().globalData.baseImgUri;
	const isAuthUser = getApp().globalData.baseImgUri;
	const isAuthPhone = getApp().globalData.baseImgUri;
	let rawData, that;
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				gdhdBtn: baseImgUrl	+ 'gdhd-btn.png',
				familyBtn: baseImgUrl	+ 'yqjiaren.png',
				startOrderBtn: baseImgUrl	+ 'kaishidiancai-index.png',
				step1: baseImgUrl	+ 'step1.png',
				step2: baseImgUrl	+ 'step2.png',
				backTo: baseImgUrl + '/arrowRight.png'
			}
		},
		onLoad() {
			that = this;
		},
		methods:{
			onShareAppMessage (res) {
				let that = this;
				console.log(that);
				if (that.isAuthUser && !utils.isEmpty(wx.getStorageSync('token'))) { //如果用户信息已授权而且有token了
					if (res.from === "button") {
					  console.log(res)
					  
					  let v = 'test';
					  return {
					    title: '匠心年夜饭',
					    path: 'pages/index/index?t=' + 50 + '&v=' + v,
					    success: function(res) {
					      console.log(res, "转发成功")
					
					    },
					    fail: function(res) {
					      console.log(res, "转发失败")
					    }
					  }
					} else {
					  console.log(res)
					}
				} else { //如果用户信息没授权且或者没有token
			      if (that.isAuthUser) { //如果有授权直接获取用户信息传给后台获取token
			        that.userLogin()
			      } else {
			        // that.loading.getLoading(1);
					return false
			      }
			    }
			    
			  },
			  handleTo(val){
				  switch(val){
					  case 'index':
						  uni.navigateTo({
							url: '../index/index',
						  })
						  break;
					  case 'rank':
						  uni.navigateTo({
							url: '../ranking/ranking',
						  })
						  break;
					  default:
						  uni.navigateTo({
							url: '../index/index',
						  })
						  break;
					}
			  },
			  startOrder () {
				uni.navigateTo({
				  url: '../table/table'
				});
			  },
			  onGotUserInfo(e) {
				  console.log('aaaaa', e);
				  let rawData = e.detail.rawData;
				  

			  },
			  isAuthored () {
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
			  checkLogin () {
			    let that = this;
			    let { isAuthUser } = that.data;
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
			  getUserInfo () {
			    let that = this
				console.log(that);
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
		}
	}
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.main-container{
	background:~"url(@{baseImgUrl}indexBg.png) no-repeat center -30upx" ;
	background-size:cover ;
	height: auto;
	.jx-main-fixedBtn{
		position: absolute;
		& image{
			width: 138upx;
		}
		&.jx-main-hdgz{
			top: 300upx;
			left: 0upx;
		}
		&.jx-main-wdjp{
			top: 330upx;
			left: 110upx;
		}
		&.jx-main-gdhd{
			top: 400upx;
			right: 10upx;
		}
	}
	.jx-main-body{
		padding: 1050upx 40upx 0;
		.button-container{
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			& image{
				width: 250upx;
			}
			& button{
				background: rgba(0,0,0,0);
			}
			& button::after{
				width: fit-content;
				height: fit-content;
			}
		}
		.step-container{
			width: 100%;
			height: auto;
			.step-list{
				width: 100%;
				height: auto;
				margin-bottom: 15upx;
				& image{
					width: 100%;
				}
				.step-list-container{
					border: solid 1upx #B6312F;
					padding: 10upx 40upx;
					display: flex;
					border-radius: 15px;
					flex-wrap: nowrap;
					justify-content: center;
					align-items: center;
					.step-list-l{
						width: 100upx;
						height: 100upx;
					}
					.step-list-r{
						margin-left: 40rpx;
						flex: 1;
						.step-list-r-header{

						}
						.step-list-r-des{
							font-size: 18upx;
							color: #FF3E3C;
						}
					}
				}
			}
		}
	}


}

</style>
