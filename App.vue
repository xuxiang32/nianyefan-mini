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
			userInfo : {},
			memberId: '',
			userId: '',
			userPhone: '',
			applicationId: '',
			isAuthUser: false,
			isAuthPhone: false,
			applicationId:'609',
			membeApplicationId:'496',
			publishPlatformId:'157',
			getTokening: false
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import './static/less/global.less';
	@import './static/less/styles.less';
</style>
