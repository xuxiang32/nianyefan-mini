<template>
	<view class="rank-main-container">
		<view class="rankheader">
			<image :src="backTo" @click="handleTo()" mode="heightFix"></image>
			<span>酒瓶排行榜</span>
		</view>
		<view class="rank-main-body">
			<div class="rankTop">
				<div class="rankTopBg">
					<image :src="rankTop" mode="widthFix"></image>
				</div>
				<div class="rankrules">
					<image :src="rankRule" mode="heightFix"></image>
				</div>
				<div class="rankMine">
					<image :src="rankMine" mode="heightFix"></image>
				</div>
				<div class="rankLastTime">
					<span>2月26日12：00开奖</span>
				</div>
				<div class="rankBack">
					<div class="backWrap">
						<span>{{number}}</span>
						<image :src="rankBack" mode="heightFix"></image>
					</div>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	
const baseImgUrl = getApp().globalData.baseImgUri
	export default {
		data() {
			console.info('baseImgUrl', baseImgUrl)
			return {
				rankTop: baseImgUrl + '/paimTop.png',
				rankRule: baseImgUrl + '/rules.png',
				rankMine: baseImgUrl + '/wdjp-btn.png',
				rankBg: baseImgUrl + '/bgRed.png',
				backTo: baseImgUrl + '/arrowRight.png',
				rankBack: baseImgUrl + '/backTable.png',
				number: 9999
			}
		},
		methods: {
			handleTo(val){
				uni.navigateTo({
				  url: '/pages/ranking/ranking',
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../static/less/global.less';
	.rank-main-container{
		width: 100%;
		height: 100vh;
		background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
		background-color: #ef1b29;
		background-size:cover ;
		.rankheader{
			height: 76upx;
			color: #fff;
			padding: 60upx 24upx 20upx 24upx;
			image{
				height: 30upx;
				transform: rotate(180deg);
			}
			span{
				padding: 0 0 0 24upx;
				font-size: 20px;
			}
		}
		.rankTop{
			width: 100%;
			position: relative;
			.rankTopBg{
				width: 100%;
				height: 170upx;
				position: absolute;
				left: 0;
				top: 0;
				z-index: 2;
				image{
					width: 100%
				}
			}
			.rankMine{
				position: absolute;
				left: 13%;
				top: 170upx;
				z-index: 3;
				height:230upx;
				width: 15%;
				image{
					height: 100%;
				}
			}
			.rankrules{
				position: absolute;
				left: 5upx;
				top: 150upx;
				z-index: 3;
				height:230upx;
				width: 15%;
				image{
					height: 100%;
				}
			}
			.rankLastTime{
				position: absolute;
				left: 50%;
				background: ~"url(@{baseImgUrl}timeLast.png) no-repeat center";
				background-size: 100%;
				width: 324upx;
				height: 84upx;
				margin-left: -162upx;
				text-align: center;
				z-index: 4;
				top: 340upx;
				span{
					color: #fff;
					font-size: 14px;
					line-height: 84upx;
				}
			}
			.rankBack{
				position: absolute;
				right: 10upx;
				top: 340upx;
				z-index: 5;
				image{
					width:132upx;
					height: 136upx;
				}
			}
		}
	}
</style>
