<template>
	<view class="points-order">
		<NavBar :backBtn="true" title="邀请家人组饭局" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.table-main{
	width: 100%;
	height: 100vh;
	background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
	background-size:cover ;
	
}
</style>
