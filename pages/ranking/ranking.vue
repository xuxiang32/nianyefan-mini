<template>
	<view class="rank-main-container">
		<view class="rank-main-body">
			<div class="rankTop">
				<div class="rankTopBg">
					<image src="rankTop" mode="widthFix"></image>
				</div>
				<div class="rankMine">
					<image src="rankRule" mode="heightFix"></image>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
 import baseImgUrl from '../../utils/util.js'
	export default {
		data() {
			console.info('baseImgUrl', baseImgUrl)
			return {
				rankTop: baseImgUrl + '/paimTop.png',
				rankRule: baseImgUrl + '/rules.png'
			}
		}
	}
</script>

<style lang="less" scoped>
	.rank-main-container{
		width: 100%;
		height: 100vh;
		background-color: #ef1b29;

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
				left: 5upx;
				top: 150upx;
				z-index: 3;
				height:230upx;
				width: 15%;
				image{
					height: 100%;
				}
			}
		}
	}
</style>
