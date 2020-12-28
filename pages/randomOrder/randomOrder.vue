<template>
	<view class="random-order">
		<NavBar :backBtn="true" title="随机点菜" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="random-order-header">
			<view class="jx-main-fixedBtn jx-main-hdgz">
				<image :src="hdgzBtn" mode="widthFix"></image>
			</view>
			<view class="jx-main-fixedBtn jx-main-wdjp" @click="handleTo('rank')">
				<image :src="wdjpBtn" mode="widthFix"></image>
			</view>
			<view class="points-order-avatar">
				<view class="points-order-avatar-img">
					<image :src="getAvatars('jiupImg.png')" mode="widthFix"></image>
					
				</view>
				<view class="points-order-avatar-name">
					<text >这里要放一个名字</text>
				</view>
				<view class="points-order-avatar-dish-number">
					<image :src="jiupIcon" mode="widthFix"></image>
					<text>999</text>
				</view>
				<view class="points-order-avatar-dish-link">
					<text>查看我的菜品</text>
					<image :src="rightArrowBtn" mode="widthFix"></image>
				</view>
				<view class="points-order-avatar-dish-random">
					<image :src="pointOrder" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				jiupIcon: baseImgUrl	+ 'jiupIcon.png',
				backTableBtn: baseImgUrl + 'backTable.png',
				rightArrowBtn: baseImgUrl + 'arrowRight.png',
				pointOrder: baseImgUrl + 'pointOrder.png'
			};
		}
	}
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.random-order{
	width: 100%;
	height: 100vh;
	padding-top: 190upx;
	background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
	background-size:cover ;
	.random-order-header{
		width: 100%;
		height: 450upx;
		position: relative;
		
		.jx-main-fixedBtn{
			position: absolute;
			& image{
				width: 92upx;
			}
			&.jx-main-hdgz{
				top: 0upx;
				left: 0;
			}
			&.jx-main-wdjp{
				top: 30upx;
				left: 80upx;
			}
		}
		.points-order-avatar{
			width: fit-content;
			margin: 0 auto;
			height: auto;
			text-align: center;
			.points-order-avatar-img{
				width: 108upx;
				margin: 0 auto;
				& image{
					width: 108upx;
				}
			}
			.points-order-avatar-name{
				font-size: 24upx;
				color: #862824;
			}
			.points-order-avatar-dish-number{
				width:fit-content ;
				padding: 0 10upx;
				height: 58upx;
				margin: 10upx auto 0;
				font-size: 24upx;
				display: flex;
				align-items: center;
				border: solid 1upx #e22e32;
				border-radius: 58upx;
				background: #ff3a3a;
				& image{
					width: 50upx;
					margin-top: 6upx;
				}
				& text{
					margin-left: 5upx;
					color: #ffd8ae;
				}
			}
			.points-order-avatar-dish-link{
				font-size: 24upx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 10upx;
				& image{
					width: 15upx;
					margin-left: 10upx;
				}
				& text{
					margin-left: 5upx;
					color: #ffd8ae;
				}
			}
			.points-order-avatar-dish-random{
				width: 184upx;
				height: auto;
				position: absolute;
				bottom: 0;
				right: 0;
				& image{
					width: 184upx;
				}
			}
		}
	}
}
</style>
