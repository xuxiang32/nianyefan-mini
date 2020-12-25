<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 隐藏右上角分享
			   // wx.hideShareMenu();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			loginUrl: "https://www.dalajiaopm.com/member-system-api/auth/getJwtTokenByMiniprogram", // 登录链接,前面加上host
			loginUrlAct: "https://www.dalajiaopm.com/links-software-web-activity/wechatApp/privateLogin", // 登录链接,前面加上host
			httpPrefix: 'https://www.dalajiaopm.com/integral-mall-api/',
			couponHttp:'https://www.dalajiaopm.com/ahxh-coupon-api/',
			activityUrl: 'https://www.dalajiaopm.com/links-software-web-activity/',
			memberUrl: 'https://www.dalajiaopm.com/'
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './static/uni.scss';
	@import './static/style.scss';
</style>
