<template>
	<view class="points-order">
		<NavBar :backBtn="true" title="积分点菜" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="points-order-header">
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
					<image :src="randomOrder" mode="widthFix"></image>
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
		<view class="points-order-list">
			<view class="points-order-list-container">
				<view class="points-order-list-img">
					<image :src="jifenOrderImg" mode="widthFix"></image>
				</view>
				<view class="points-order-list-body">
					<view class="points-order-list-sypoint">
						<image :src="lastPoint" mode="widthFix"></image>
						<text>9999999</text>
					</view>
				</view>
				<view class="points-order-tenOrder">
					<image :src="tenPoint" mode="widthFix"></image>
				</view>
				<view class="points-order-tenOrder-des">
					<text>凉菜&小吃，每道菜最多可点1次</text>
				</view>
				<view class="points-order-tenOrder-list">
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn" @click="handlePontsOrder(item)">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								酱萝卜
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn orderEnd">
							<image :src="orderEnd" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								盐水鸭
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								地锅鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								红烧猪蹄
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								黄焖鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								口水鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								沙拉
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					
				</view>
				<view class="points-order-tenOrder points-order-thirtyOrder">
					<image :src="orderThirty" mode="widthFix"></image>
				</view>
				<view class="points-order-tenOrder-des">
					<text>素食&主食，每道菜最多可点3次</text>
				</view>
				<view class="points-order-tenOrder-list points-order-thirtyOrder-list">
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								北京烤鸭
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								酱萝卜
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn orderEnd">
							<image :src="orderEnd" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								盐水鸭
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								地锅鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								红烧猪蹄
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								黄焖鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								口水鸡
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
					<view class="points-order-tenOrder-dish">
						<view class="points-order-tenOrder-dish-bg">
							<view class="points-order-tenOrder-dish-text">
								沙拉
							</view>
						</view>
						<view class="points-order-tenOrder-dish-btn">
							<image :src="dcPoint" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 积分点菜 -->
		<chunLei-modal v-model="dialogDisabled" :mData="allOrders" :type="type" @onConfirm="onConfirm" @cancel="cancel" :navHeight="0">
			<div class="custom-view" @tap.stop>
				<view class="hongbao">
					<view class="pointTxt">
						<text>是否确认将消耗10积分</text>
						<text>兑换一份{{item.orderName}}</text>
					</view>
					<view class="bottom">
						<button type="default" @tap.stop="dialogDisabled=false"><image :src="cancleBtn" mode="heightFix"></image></button>
						<button type="default" @tap="handleConfirm"><image :src="successBtn" mode="heightFix"></image></button>
					</view>
				</view>
				<image class="cancel" @tap.stop="dialogDisabled=false" :src="modalClose"></image>
			</div>
		</chunLei-modal>
		<!-- 确定点菜 -->
		<chunLei-modal v-model="confirmDialog" :mData="allOrders" :type="type" @onConfirm="onConfirm" @cancel="cancel" :navHeight="0">
			<div class="custom-view" @tap.stop>
				<view class="hongbao">
					<view class="pointTxt">
						<text>恭喜您</text>
						<view class="points-order-list">
						<view class="points-order-tenOrder-list">
							<view class="points-order-tenOrder-dish">
								<view class="points-order-tenOrder-dish-bg">
									<view class="points-order-tenOrder-dish-text">
										{{item.orderName}}
									</view>
								</view>
							</view>
							<view class="points-order-tenOrder-dish">
								<view class="pointsJiup">
									<image :src="jiupIcon" mode="heightFix"></image>
								<text>X6</text>
								</view>
								
							</view>
						</view>
						
					</view>
					<text>获得一份{{item.orderName}}，积得{{item.orderNum}}瓶匠心酿造</text>
					</view>
					<view class="bottom">
						<button type="default"><image :src="continueBtn" mode="heightFix"></image></button>
					</view>
				</view>
				<image class="cancel" @tap.stop="confirmDialog=false" :src="modalClose"></image>
			</div>
		</chunLei-modal>
	</view>
</template>

<script>
import api from '@/utils/api.js';
import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue'
	const baseImgUrl = api.baseImgUri; 
	export default {
		data() {
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				jiupIcon: baseImgUrl	+ 'jiupIcon.png',
				backTableBtn: baseImgUrl + 'backTable.png',
				rightArrowBtn: baseImgUrl + 'arrowRight.png',
				randomOrder: baseImgUrl + 'randomOrder1.png',
				jifenOrderImg: baseImgUrl + 'pointTitle.png',
				lastPoint: baseImgUrl + 'lastPoint.png',
				tenPoint: baseImgUrl + 'orderTen.png',
				orderThirty: baseImgUrl + 'orderThirty.png',
				dcPoint: baseImgUrl + 'orderBtn.png',
				orderEnd: baseImgUrl + 'orderEnd.png',
				cancleBtn: baseImgUrl + 'cancle.png',
				successBtn: baseImgUrl + 'success.png',
				continueBtn: baseImgUrl + 'continue.png',
				modalClose: baseImgUrl + 'close.png',
				item: {
					orderId: '01',
					orderName: '北京烤鸭',
					orderNum: 6
				},
				dialogDisabled: false, // 弹框显示隐藏
				type: 'custom', // 弹框类型
				allOrders: {}, // 弹框数据
				confirmDialog: false, // 弹框确认
			};
		},
		methods: {
			getAvatars (val) {
				return baseImgUrl + val;
			},
			handlePontsOrder(val) {
				this.dialogDisabled = true
			},
			handleConfirm() {
				this.dialogDisabled = false
				this.confirmDialog = true
			},
		}
	}
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.points-order{
	width: 100%;
	height: 100vh;
	padding-top: 190upx;
	background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
	background-size:cover ;
	.points-order-header{
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
	.points-order-list{
		width: 100%;
		.points-order-list-container{
			position: relative;
			background: ~"url(@{baseImgUrl}foodListbg.png) no-repeat left top";
			background-size: cover;
			height: auto;
			margin: 0 auto;
			width: 90%;
			.points-order-list-img{
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
		}
		.points-order-list-body{
			width: 100%;
			padding-top: 80upx;
			.points-order-list-sypoint{
				display: flex;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;
				& image{
					width: 168upx;
				}
				& text{
					font-size: 30upx;
					line-height: 38upx;
					color: #862824;
					margin-left: 20upx;
					font-weight: bold;
				}
			}
		}
		.points-order-tenOrder{
			width: 368upx;
			margin: 40upx auto 0;
			& image{
				width: 368upx;
			}
		}
		.points-order-thirtyOrder{
			margin-top: 0;
		}
		.points-order-tenOrder-des{
			font-size: 24upx;
			line-height: 38upx;
			color: #862824;
			text-align: center;
		}
		.points-order-tenOrder-list{
			width: 100%;
			height: auto;
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			flex-wrap: wrap;
			padding: 30upx 0 0;
			.points-order-tenOrder-dish{
				width: 25%;
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
				}
				.points-order-tenOrder-dish-btn{
					width: 90upx;
					margin: 0 auto;
					& image{
						width: 90upx;
					}
					&.orderEnd{
						padding-top: 30upx;
					}
				}
			}
		}
		.points-order-thirtyOrder-list{
			padding-bottom: 80upx;
		}
	}
}
.pointsJiup{
	height: 292upx;
	align-items: center;
	text-align: center;
	image{
		height: 120upx;
		line-height: ;
	}
}
</style>
