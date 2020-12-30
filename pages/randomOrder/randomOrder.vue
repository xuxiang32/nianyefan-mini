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
			<view class="button-order">
				<button>
					<view class='table-go-backTable'>
						 <image :src="backTableBtn"  mode="widthFix"></image>
						 <view class="table-go-yidian-number">999</view>
					 </view>
				</button>
			</view>
		</view>
		<view class="random-order-main">
			<view class="random-order-list-container">
				<view class="random-order-list-img">
					<image :src="randomOrder" mode="widthFix"></image>
				</view>
				<view class="random-order-list-body">
					<view class="points-order-list-sypoint">
						<image :src="lastTips" mode="widthFix"></image>
						<text>999</text>
					</view>
					<view class="random-order-list-order">
						<image :src="randomBtn" mode="widthFix"></image>
					</view>
					<view class="random-order-list-order-des">
						<image :src="randomOrderDes" mode="widthFix"></image>
					</view>
				</view>
				<view class="random-order-list-scan">
					<image :src="scanBtn" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="random-order-list-scan-des">
			<image :src="uncoverDes" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import api from '../../utils/api.js';
		const baseImgUrl = api.baseImgUri; 
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				jiupIcon: baseImgUrl	+ 'jiupIcon.png',
				backTableBtn: baseImgUrl + 'backTable.png',
				rightArrowBtn: baseImgUrl + 'arrowRight.png',
				pointOrder: baseImgUrl + 'pointOrder.png',
				randomOrder: baseImgUrl + 'randomOrder.png',
				lastTips: baseImgUrl + 'lastTips.png',
				randomBtn: baseImgUrl + 'randomBtn.png',
				randomOrderDes: baseImgUrl + 'randomOrderDes.png',
				scanBtn: baseImgUrl + 'scan.png',
				uncoverDes: baseImgUrl + 'uncover.png'
			};
		},
		methods: {
			getAvatars (val) {
				return baseImgUrl + val;
			}
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
	.button-order{
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		padding-left: 10upx;
		& button{
			background: rgba(0,0,0,0);
			width: 132upx;
			margin: 0;
			padding: 0;
			overflow: visible;
			height: 132upx;
		}
		& button::after{
			width: fit-content;
			height: fit-content;
		}
	
		.table-go-backTable{
			position: relative;
			& image{
				width: 132upx;
			}
		}
		
		.table-go-yidian-number{
			position: absolute;
			font-size: 18upx;
			color: #ffd8ae;
			border: solid 1upx #ffd8ae;
			background-color: #862824;
			padding: 0upx 10upx;
			border-radius: 35upx;
			height: 35upx;
			top: -10upx;
			line-height: 35upx;
			right: 0;
			z-index: 999;
		}
	}
	.random-order-main{
		width: 100%;
		.random-order-list-container{
			position: relative;
			height: auto;
			margin: 0 auto;
			width: 90%;
			.random-order-list-img{
				width: 428upx;
				height: auto;
				margin: 0 auto;
				position: absolute;
				left: 50%;
				margin-top: -100upx;
				margin-left: -214upx;
				& image{
					width: 428upx;
				}
			}
			.random-order-list-body{
				width: 576upx;
				height: 579upx;
				background: ~"url(@{baseImgUrl}orderTable.png) no-repeat center";
				background-size: cover;
				margin: -50upx auto 0;
				.points-order-list-sypoint{
					padding-top: 80upx;
					display: flex;
					flex-wrap: nowrap;
					justify-content: center;
					align-items: center;
					& image{
						width: 168upx;
					}
					& text{
						font-size: 40upx;
						line-height: 38upx;
						color: #862824;
						margin-left: 20upx;
						font-weight: bold;
					}
				}
			}
			.random-order-list-order{
				width: 230upx;
				height: 230upx;
				margin: 70upx auto 0;
				& image{
					width: 230upx;
					height: 230upx;
				}
			}
			.random-order-list-order-des{
				width: 366upx;
				height: 30upx;
				margin: 10upx auto 0;
				& image{
					width: 366upx;
					height: 30upx;
				}
			}
			.random-order-list-scan{
				width: 256upx;
				height: 116upx;
				margin: 40upx auto 0;
				& image{
					width: 256upx;
					height: 116upx;
				}
			}
		}
	}
	.random-order-list-scan-des{
		width: 690upx;
		height: auto;
		margin: 40upx auto 0;
		& image{
			width: 690upx;
		}
	}
}
</style>
