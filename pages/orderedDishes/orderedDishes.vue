<template>
	<view class="ordered-dishes">
		<NavBar :backBtn="true" title="已点菜品" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="ordered-dishes-banner">
			<view class="ordered-dishes-banner-images">
				<image :src="teamTitleImg" mode="widthFix"></image>
			</view>
			<view class="jx-main-fixedBtn jx-main-hdgz">
				<image :src="hdgzBtn" mode="widthFix"></image>
			</view>
			<view class="jx-main-fixedBtn jx-main-wdjp" @click="handleTo('rank')">
				<image :src="wdjpBtn" mode="widthFix"></image>
			</view>
		</view>
		<view class="button-order ordered-dishes-btns">
			<button>
				<view class='table-go-backTable'>
					 <image :src="backTableBtn"  mode="widthFix"></image>
					 <view class="table-go-yidian-number">999</view>
				 </view>
			</button>
			<button>
				<view class='table-go-backTable'>
					 <image :src="viewPaimBtn"  mode="widthFix"></image>
					 <view class="table-go-yidian-number">999</view>
				 </view>
			</button>
		</view>
		<view class="ordered-dishes-main">
			<!-- 组局者 -->
			<view class="ordered-dishes-list">
				<view class="ordered-dishes-list-header">
					<view class="ordered-dishes-list-header-avatar">
						<image :src="jiupImg" mode="widthFix"></image>
					</view>
					<view class="ordered-dishes-list-header-details">
						<view class="ordered-dishes-list-header-name">
							左边的头像是假的
						</view>
						<view class="ordered-dishes-list-header-gx">
							<text class="gongxiang">贡献了</text>
							<image :src="foodIcon" mode="widthFix"></image>
							<text class="number">9999</text>
							<image :src="jiupIcon" mode="widthFix"></image>
							<text  class="number">9999</text>
						</view>
					</view>
				</view>
				<view class="ordered-dishes-list-dishes">
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
					</view>
				</view>
				<view class="ordered-dishes-list-allBtn">
					<image :src="allFood" mode="widthFix"></image>
				</view>
			</view>
			<view class="ordered-dishes-list ordered-dishes-list-member">
				<!-- 同桌人 -->
				<view class="ordered-dishes-list-loop">
					<view class="ordered-dishes-list-header">
						<view class="ordered-dishes-list-header-avatar">
							<image :src="jiupImg" mode="widthFix"></image>
						</view>
						<view class="ordered-dishes-list-header-details">
							<view class="ordered-dishes-list-header-name">
								左边的头像是假的
							</view>
							<view class="ordered-dishes-list-header-gx">
								<text class="gongxiang">贡献了</text>
								<image :src="foodIcon" mode="widthFix"></image>
								<text class="number">9999</text>
								<image :src="jiupIcon" mode="widthFix"></image>
								<text  class="number">9999</text>
							</view>
						</view>
					</view>
					<view class="ordered-dishes-list-dishes">
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
					</view>
					<view class="ordered-dishes-list-allBtn">
						<image :src="allFood" mode="widthFix"></image>
					</view>
				</view>
				<view class="ordered-dishes-list-loop">
					<view class="ordered-dishes-list-header">
						<view class="ordered-dishes-list-header-avatar">
							<image :src="jiupImg" mode="widthFix"></image>
						</view>
						<view class="ordered-dishes-list-header-details">
							<view class="ordered-dishes-list-header-name">
								左边的头像是假的
							</view>
							<view class="ordered-dishes-list-header-gx">
								<text class="gongxiang">贡献了</text>
								<image :src="foodIcon" mode="widthFix"></image>
								<text class="number">9999</text>
								<image :src="jiupIcon" mode="widthFix"></image>
								<text  class="number">9999</text>
							</view>
						</view>
					</view>
					<view class="ordered-dishes-list-dishes">
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
						<view class="points-order-tenOrder-dish">
							<view class="points-order-tenOrder-dish-bg">
								<view class="points-order-tenOrder-dish-text">
									北京烤鸭
								</view>
							</view>
						</view>
					</view>
					<view class="ordered-dishes-list-allBtn">
						<image :src="allFood" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const baseImgUrl = getApp().globalData.baseImgUri;
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				jiupIcon: baseImgUrl	+ 'jiupIcon.png',
				backTableBtn: baseImgUrl + 'backTable.png',
				viewPaimBtn: baseImgUrl + 'viewPaim.png',
				teamTitleImg: baseImgUrl + 'teamTitle.png',
				foodIcon: baseImgUrl + 'foodIcon.png',
				jiupImg: baseImgUrl + 'jiupImg.png',
				allFood: baseImgUrl + 'allFood.png'
			};
		}
	}
</script>

<style lang="less" scoped>
	@import '../../static/less/global.less';
.ordered-dishes{
	width: 100%;
	height: 100vh;
	padding-top: 190upx;
	background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
	background-size:cover ;
	position: relative;
	.ordered-dishes-banner{
		position: relative;
		.ordered-dishes-banner-images{
			height: 342upx;
			& image{
				width: 100%;
			}
		}
	}
	.jx-main-fixedBtn{
		position: absolute;
		& image{
			width: 92upx;
		}
		&.jx-main-hdgz{
			top: 150upx;
			left: 0;
		}
		&.jx-main-wdjp{
			top: 180upx;
			left: 80upx;
		}
	}
	.button-order{
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-end;
		align-items: center;
		padding-left: 10upx;
		padding-right: 10upx;
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
	.ordered-dishes-main{
		margin-top: 20upx;
		padding: 0 20upx;
		.ordered-dishes-list{
			padding: 20upx;
			background: #ffd8ae;
			border: solid 1upx #862824;
			.ordered-dishes-list-header{
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				height: 110upx;
				width: 100%;
				.ordered-dishes-list-header-avatar{
					width: 108upx;
					height: 108upx;
					& image{
						width: 108upx;
						height: 108upx;
					}
				}
				.ordered-dishes-list-header-details{
					margin-left: 20upx;
					.ordered-dishes-list-header-name{
						font-size: 27upx;
						color: #862824;
						font-weight: bold;
						padding-top: 10upx;
					}
					.ordered-dishes-list-header-gx{
						display: flex;
						flex-wrap: nowrap;
						justify-content: flex-start;
						align-items: center;
						line-height: 40upx;
						.gongxiang,.number{
							font-size: 24upx;
							color: #862824;
						}
						.number{
							color: #f22929;
						}
						& image{
							width: 56upx;
						}
					}
				}
			}
			&.ordered-dishes-list-member{
				margin-top: 20upx;
				.ordered-dishes-list-loop{
					padding-bottom: 20upx;
					border-bottom: dashed 3upx #862824;
				}
				.ordered-dishes-list-loop:not(:first-child){
					padding-top: 20upx;
				}
				.ordered-dishes-list-loop:last-child{
					border: none;
				}
			}
		}
		.ordered-dishes-list-dishes{
			width: 100%;
			height: auto;
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			flex-wrap: wrap;
			padding: 30upx 0 0;
			.points-order-tenOrder-dish{
				width: 20%;
				height: auto;
				margin-bottom: 30upx;
				.points-order-tenOrder-dish-bg{
					padding-top: 50upx;
					display: flex;
					align-items: center;
					margin: auto;
					width: 90upx;
					background: ~"url(@{baseImgUrl}food-bg.png) no-repeat left top";
					background-size: 100%;
					height: 262upx;
					box-sizing: border-box;
				}
				.points-order-tenOrder-dish-text{
					text-align: center;
					width: 40upx;
					margin: 0 auto;
					word-wrap: break-word;
					word-break:break-all;
					font-size: 32upx;
					font-weight: bold;
					color: #6e211d;
				}
			}
		}
		.ordered-dishes-list-allBtn{
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-end;
			align-items: center;
			& image{
				width: 196upx;
			}
		}
	}
}
</style>
