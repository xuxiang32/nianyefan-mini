<template>
	<view class="main-container">
		<NavBar :backBtn="true" title="匠心年夜饭" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="jx-main-fixedBtn jx-main-hdgz">
			<button open-type="getUserInfo" id="hdgzBtn" @getuserinfo="onGotUserInfo">
				<image :src="hdgzBtn" mode="widthFix"></image>
			</button>
		</view>
		<view class="jx-main-fixedBtn jx-main-wdjp" >
			<button open-type="getUserInfo" id="wdjpBtn" @getuserinfo="onGotUserInfo">
				<image :src="wdjpBtn" mode="widthFix"></image>
			</button>
		</view>
		<view class="jx-main-fixedBtn jx-main-gdhd">
			<button open-type="getUserInfo" id="gdhdBtn" @getuserinfo="onGotUserInfo">
				<image :src="gdhdBtn" mode="widthFix"></image>
			</button>
		</view>
		<view class="jx-main-body">
			<view class="button-container">
				<button open-type="share" v-if="isAuthUser">
					<view class='wechatImg'>
						<image :src="familyBtn" mode="widthFix"></image>
					</view>
				</button>
				<button open-type="getUserInfo" id="shareBtn" v-if="!isAuthUser" @getuserinfo="onGotUserInfo" >
					<view class='wechatImg'>
						<image :src="familyBtn" mode="widthFix"></image>
					</view>
				</button>
				<button open-type="getUserInfo" id="startOrderBtn" @getuserinfo="onGotUserInfo" >
					<view class='wechatImg'>
						<image :src="startOrderBtn" mode="widthFix"></image>
					</view>
				</button>
			</view>
			<view class="step-container">
				<view class="step-list">
					<image :src="step1" mode="widthFix"></image>
				</view>
				<view class="step-list">
					<image :src="step2" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import utils from '../../utils/util.js';
	import api from '../../utils/api.js';
	const app = getApp();
	const baseImgUrl = api.baseImgUri;
	let rawData, that;
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl + 'hdgz-btn.png',
				wdjpBtn: baseImgUrl + 'wdjp-btn.png',
				gdhdBtn: baseImgUrl + 'gdhd-btn.png',
				familyBtn: baseImgUrl + 'yqjiaren.png',
				startOrderBtn: baseImgUrl + 'kaishidiancai-index.png',
				step1: baseImgUrl + 'step1.png',
				step2: baseImgUrl + 'step2.png',
				backTo: baseImgUrl + '/arrowRight.png',
				isAuthUser: false,
				isAuthPhone: false
			}
		},
		onLoad() {
			that = this;
			if (wx.getStorageSync('token')){
				app.globalData.isAuthUser = true;
				app.globalData.getTokening = true;
				this.getUserInfo ()
			}
			this.isAuthUser = app.globalData.isAuthUser;
			this.isAuthPhone = app.globalData.isAuthPhone;
		},
		methods: {
			onShareAppMessage(res) {
				console.log(res);
				if (that.isAuthUser && !utils.isEmpty(wx.getStorageSync('token'))) { //如果用户信息已授权而且有token了
					if (res.from === "button") {
						console.log(res)
						// 创建群组

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
			handleTo(val) {
				switch (val) {
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
			startOrder() {
				uni.navigateTo({
					url: '../table/table'
				});
			},
			onGotUserInfo(res) {
				console.log('aaaaa', res);
				if (!utils.isEmpty(wx.getStorageSync('token'))) {
					return
				}

				let that = this;
				wx.login({
					success: function(res_login) {
						let accountInfo = wx.getAccountInfoSync();
						if (res_login.code) {
							wx.getUserInfo({
								lang: "zh_CN",
								success: function(res) {
									let jsonData = {
										code: res_login.code,
										encryptedData: res.encryptedData,
										iv: res.iv,
										appid: accountInfo.miniProgram.appId,
										applicationId: app.globalData.applicationId,
										publishPlatformId: app.globalData.publishPlatformId
									};
									console.log('jsonData---', jsonData);

									/**
									 * 拿到授权信息后将加密字符传入后台解密或得到相关的用户信息及openid
									 */
									that.getToken(jsonData);
								},
								fail: function(res) {
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
			getUserInfo() {
				wx.showLoading({
				  title: '加载中',
				})
				utils.requestBySessionId({
					url: '/integral-mall-api/wap/integralUserCenter/toUserCenter',
					method: 'POST',
					success: function(res) {
						//先将检查服务器返回报文头中有无sessionId，有则存到全局变量中
						var cookie = res.header["Set-Cookie"];
						if (undefined != cookie) {
						  var sessionPos;
						  if ((sessionPos = cookie.indexOf("JSESSIONID=")) != -1) {
						    //每次请求成功都将sessionId存入全局变量
						    wx.setStorageSync('cookie', cookie.substr(sessionPos, 43))
						  }
						}
						if (res.data.success) {
							app.globalData.userInfo = Object.assign({}, app.globalData.userInfo, res.data.data.integralUser);
							app.globalData.memberId = res.data.data.integralUser.memberId
							app.globalData.userId = res.data.data.integralUser.userId
							//判断是否绑定手机号
							utils.requestBySessionId({
								url: 'member-system-api/api/weixin/customer/getIfBindPhone',
								method: 'GET',
								header: {
									'Content-Type': "application/x-www-form-urlencoded",
								},
								success: function(res) {
									if (res.data.success) {
										if (res.data.data) { //已绑
											app.globalData.userInfo.phone = res.data.data;
											app.globalData.isAuthPhone = true;
											that.isAuthPhone = true;

										} else { //未绑
											app.globalData.isAuthPhone = false;
										}
									}
								},
								complete: function() {
									wx.hideLoading()
								}
							})
						} else {
							wx.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}
					},
					fail: function(res) {
						wx.showToast({
							title: '系统错误',
							icon: 'none'
						})
					},
					complete: function() {
						wx.hideLoading()
					}
				});
			},
			getToken(data) {
				console.log('getToken---', data);
				let that = this
				wx.showLoading({
				  title: '加载中',
				})
				data.applicationId = app.globalData.applicationId;
				console.log(api.loginUrl);
				wx.request({
					url: api.loginUrl,
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					data: data,
					success: res => {
						if (res.data.success) {
							wx.setStorageSync('token', res.data.data);
							that.isAuthUser = true;
							app.globalData.getTokening = true;
							app.globalData.isAuthUser = true;
							// that.onLoad()
						} else {
							wx.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}

					},
					fail: function(res) {
						console.log(res);
						wx.showToast({
							title: '系统错误',
							icon: 'none'
						})
					},
					complete: function() {
						wx.hideLoading()
					}
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	@import '../../static/less/global.less';

	.main-container {
		background:~"url(@{baseImgUrl}indexBg.png) no-repeat center -30upx";
		background-size: cover;
		height: auto;

		.jx-main-fixedBtn {
			position: absolute;
			& button {
					background: rgba(0, 0, 0, 0);
					padding: 0;
					margin: 0;
				}

				& button::after {
					width: fit-content;
					height: fit-content;
				}
			& image {
				width: 138upx;
			}

			&.jx-main-hdgz {
				top: 300upx;
				left: 0upx;
			}

			&.jx-main-wdjp {
				top: 330upx;
				left: 110upx;
			}

			&.jx-main-gdhd {
				top: 400upx;
				right: 10upx;
			}
		}

		.jx-main-body {
			padding: 1050upx 40upx 0;

			.button-container {
				display: flex;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;

				& image {
					width: 250upx;
				}

				& button {
					background: rgba(0, 0, 0, 0);
				}

				& button::after {
					width: fit-content;
					height: fit-content;
				}
			}

			.step-container {
				width: 100%;
				height: auto;

				.step-list {
					width: 100%;
					height: auto;
					margin-bottom: 15upx;

					& image {
						width: 100%;
					}

					.step-list-container {
						border: solid 1upx #B6312F;
						padding: 10upx 40upx;
						display: flex;
						border-radius: 15px;
						flex-wrap: nowrap;
						justify-content: center;
						align-items: center;

						.step-list-l {
							width: 100upx;
							height: 100upx;
						}

						.step-list-r {
							margin-left: 40rpx;
							flex: 1;

							.step-list-r-header {}

							.step-list-r-des {
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
