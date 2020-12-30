<template>
	<view class="table-main">
		<NavBar :backBtn="true" title="邀请家人组饭局" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="table-banner">
			<image :src="paimTop" mode="widthFix"></image>
			<view class="jx-main-fixedBtn jx-main-hdgz">
				<image :src="hdgzBtn" mode="widthFix"></image>
			</view>
			<view class="jx-main-fixedBtn jx-main-wdjp" @click="handleTo('rank')">
				<image :src="wdjpBtn" mode="widthFix"></image>
			</view>
			<view class="jx-main-fixedBtn jx-main-gdhd">
				<image :src="gdhdBtn" mode="widthFix"></image>
			</view>
		</view>
		<view class="table-container">
			<view class="table-body">
				<view class="table-person">
					<view class="table-person-container">
						<view class="table-team-leader"></view>
						<view class="table-team-ydNum">
							<view class="table-team-ydNum-icon"></view>
							<view class="table-team-ydNum-num">999</view>
						</view>
						<view class="table-team-leader-avatar">
							<image :src="getAvatars('jiupImg.png')" mode="widthFix"></image>
						</view>
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						2
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						3
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						4
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						5
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						6
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						7
					</view>
				</view>
				<view class="table-person">
					<view class="table-person-container">
						8
					</view>
				</view>
			</view>
		</view>
		<!-- 邀请 开始点菜按钮 -->
		<view class="button-container" v-if="hideInviteButton">
			<button open-type="share">
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
		<!-- 已点菜品 查看排名按钮 -->
		<view class="button-order">
			<button>
				<view class='table-go-yidian'>
					 <image :src="ydDishes"  mode="widthFix"></image>
					 <view class="table-go-yidian-number">999</view>
				 </view>
			</button>
			<button>
				<view class='table-go-rank'>
					 <image :src="rankImg"  mode="widthFix"></image>
					 <view class="table-go-yidian-number">999</view>
				 </view>
			</button>
			<view class="table-go-order">
				<view class="table-go-order-avatar">
					<image :src="getAvatars('jiupImg.png')" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="jx-main-body">
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
import api from '../../utils/api.js';
	const baseImgUrl = api.baseImgUri; 
	export default {
		data() {
			return {
				paimTop: baseImgUrl	+ 'teamTitle.png',
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				gdhdBtn: baseImgUrl	+ 'gdhd-btn.png',
				familyBtn: baseImgUrl	+ 'yqjiaren.png',
				startOrderBtn: baseImgUrl	+ 'kaishidiancai-index.png',
				step1: baseImgUrl	+ 'step1.png',
				step2: baseImgUrl	+ 'step2.png',
				ydDishes: baseImgUrl	+ 'orderLIst.png',
				rankImg: baseImgUrl	+ 'viewPaim.png',
				hideInviteButton: false
				
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
.table-main{
	width: 100%;
	background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
	background-size:cover ;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	.table-banner{
		margin-top: 180upx;
		width: 100%;
		height: 450upx;
		position: relative;
		& image{
			width: 100%;
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
			&.jx-main-gdhd{
				top: 250upx;
				right: 10upx;
			}
		}
	}
}
.table-container{
	width: 100%;
	height: 500upx;
	box-sizing: border-box;
	.table-body{
		width: 360upx;
		height: 360upx;
		position: relative;
		margin: 0 auto;
		background: ~"url(@{baseImgUrl}tables.png) no-repeat center";
		background-size: cover ;
	}
	.table-person{
		width: 102upx;
		height: 102upx;
		background-size: cover ;
		position: absolute;
		text-align: center;
		left: 50%;
		margin-left: -50upx;
		margin-top: -120upx;
		transform-origin:50upx 300upx;
		.table-person-container{
			width: 102upx;
			height: 102upx;
			background: ~"url(@{baseImgUrl}inviteIcon.png) no-repeat center";
			background-size: cover ;
			position: relative;
			.table-team-leader{
				width: 98upx;
				height: 36upx;
				background: ~"url(@{baseImgUrl}1_sponsor.png) no-repeat center";
				background-size: cover ;
				position: absolute;
				bottom: -10rpx;
				z-index: 95;
			}
			.table-team-ydNum{
				min-width: fit-content;
				height: 50upx;
				padding: 3upx 10upx 3upx 0upx;
				background-color: #fc3838;
				background-size: 50upx ;
				font-size: 20upx;
				line-height: 50upx;
				color: #ffd8ae;
				position: absolute;
				top: -30upx;
				left: 50upx;
				z-index: 99;
				border: solid 1upx #e22e32;
				border-radius: 50upx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
			}
			.table-team-ydNum-icon{
				width: 50upx;
				height: 50upx;
				background: ~"url(@{baseImgUrl}jiupIcon.png) no-repeat left 3upx";
				background-size: cover;
			}
			.table-team-leader-avatar{
				position: absolute;
				top: -3upx;
				left: -6upx;
				width: 115upx;
				height: 115upx;
				& image{
					width: 115upx;
					height: 115upx;
				}
			}
		}
	}
	.table-person:nth-of-type(2){
		transform: rotate(45deg);
		.table-person-container{
			transform: rotate(-45deg);
		}
	}
	.table-person:nth-of-type(3){
		transform: rotate(90deg);
		.table-person-container{
			transform: rotate(-90deg);
		}
	}
	.table-person:nth-of-type(4){
		transform: rotate(135deg);
		.table-person-container{
			transform: rotate(-135deg);
		}
	}
	.table-person:nth-of-type(5){
		transform: rotate(180deg);
		.table-person-container{
			transform: rotate(-180deg);
		}
	}
	.table-person:nth-of-type(6){
		transform: rotate(225deg);
		.table-person-container{
			transform: rotate(-225deg);
		}
	}
	.table-person:nth-of-type(7){
		transform: rotate(270deg);
		.table-person-container{
			transform: rotate(-270deg);
		}
	}
	.table-person:nth-of-type(8){
		transform: rotate(315deg);
		.table-person-container{
			transform: rotate(-315deg);
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
	}
	& button::after{
		width: fit-content;
		height: fit-content;
	}
	.table-go-yidian,
	.table-go-rank{
		position: relative;
		& image{
			width: 132upx;
		}
	}
	.table-go-rank{
		
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
	.table-go-order{
		width: 263upx;
		height: 116upx;
		background: ~"url(@{baseImgUrl}goOrder.png) no-repeat left center";
		background-size: cover;
		margin-left: auto;
		.table-go-order-avatar{
			width: 52upx;
			height: 52upx;
			padding-left: 35upx;
			padding-top: 27upx;
			& image{
				width: 52upx;
				height: 52upx;
			}
		}
	}
}
.jx-main-body{
		padding: 0upx 40upx 0;
		
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
</style>
