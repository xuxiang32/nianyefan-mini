<template>
	<view class="main-container">
		<NavBar :backBtn="true" title="酒瓶排行榜" background="rgba(0,0,0,0)" color="#FFF"></NavBar>
		<view class="rank-main-body">
			<view class="rankTop">
				<view class="rankTopBg">
					<image :src="rankTop" mode="widthFix"></image>
				</view>
				<view class="rankrules">
					<image :src="rankRule" mode="heightFix"></image>
				</view>
				<view class="rankMine">
					<image :src="rankMine" mode="heightFix"></image>
				</view>
				<view class="rankLastTime" v-if="!isEnd && isFormed">
					<span>2月26日12：00开奖</span>
				</view>
				<view class="rankNoFormed" v-if="!isEnd && !isFormed">
					<image :src="rankNoFormed" mode="widthFix"></image>
				</view>
				<view class="rankHasEnd" v-if="isEnd">
					<image :src="rankEnd" mode="heightFix" v-if="!isOpenPrize"></image>
					<image :src="rankPrize" mode="heightFix"  v-if="isOpenPrize"></image>
				</view>
				<view class="rankPmPrize" v-if="isEnd && isOpenPrize">
					<image :src="viewPrizes" mode="widthFix"></image>
					<image :src="openPrizes" mode="widthFix"></image>
				</view>
				<view class="rankBack">
					<view class="backWrap">
						<span>{{number}}</span>
						<image :src="rankBack" mode="heightFix"></image>
					</view>
				</view>
			</view>
			<view class="ranktCon">
			<view class="rankTWrap">
				<view class="rankTIcon title">{{userPm.name}}</view>
				<view class="rankTPm title">
					<span v-if="isFormed">{{'第'+userPm.pm+'名'}}</span>
					<span v-else>
						<span class="bold">尚未入榜</span>
						<span class="sm">饭桌满2人即可进入排行</span>
					</span>
				</view>
				<view class="rankTjpNum">
					<view>
						<image :src="jiupIcon" mode="heightFix"></image>
						<span v-if="isFormed">{{userPm.jpNum}}</span>
						<span v-else>--</span>
				    </view>
				</view>
			</view>
			<view class="rankBorder">
				<image :src="rankBor" mode="widthFix"></image>
			</view>
			<view class="rankTWrap">
				<view class="rankTPm small">
					<image :src="pm" mode="heightFix"></image>
				</view>
				<view class="rankTIcon small">
					<image :src="fz" mode="heightFix"></image>
				</view>
				<view class="rankTjpNum small">
					<image :src="jp" mode="heightFix"></image>
				</view>
			</view>
			<view class="rankTable" v-for="(item, index) in pmList" :key="index">
				<view class="rankTWrap">
					<view class="rankTPm">
						<image :src="showIcon(index+1)" mode="heightFix"></image>
						<span v-if="index > 2">{{index+1}}</span>
					</view>
					<view class="rankTIcon">{{item.name}}</view>
					<view class="rankTjpNum">
						<image :src="jiupIcon" mode="heightFix"></image>
					{{item.jpNum}}
					</view>
				</view>
			</view>
			</view>
			<view class="rankPrizes">
				<view class="rankPone">
					<image :src="prize1" mode="widthFix"></image>
				</view>
				<view class="rankPone">
					<image :src="prize2" mode="widthFix"></image>
				</view>
				<view class="rankPone">
					<image :src="prize3" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
const baseImgUrl = getApp().globalData.baseImgUri
	export default {
		data() {
			return {
				baseImgUrl: baseImgUrl,
				rankTop: baseImgUrl + '/paimTop.png',
				rankRule: baseImgUrl + '/rules.png',
				rankMine: baseImgUrl + '/wdjp-btn.png',
				rankBg: baseImgUrl + '/bgRed.png',
				backTo: baseImgUrl + '/arrowRight.png',
				rankBack: baseImgUrl + '/backTable.png',
				rankBor: baseImgUrl + '/paimBorder.png',
				jiupIcon: baseImgUrl + '/jiupIcon.png',
				paiFirst: baseImgUrl + '/paiFirstIcon.png',
				paiSec: baseImgUrl + '/paiSecIcon.png',
				paiThird: baseImgUrl + '/paiThirdIcon.png',
				rankEnd: baseImgUrl + '/end.png',
				rankPrize: baseImgUrl + '/prizeOpen.png',
				viewPrizes: baseImgUrl + '/viewPrizes.png',
				openPrizes: baseImgUrl + 'getPrize.png',
				rankNoFormed: baseImgUrl + 'inviteteam.png',
				paiBg: baseImgUrl + '/paimBg.png',
				pm: baseImgUrl + '/paim.png',
				fz: baseImgUrl + '/fanzhuo.png',
				jp: baseImgUrl + '/jiup.png',
				prize1: baseImgUrl + '/aword1.png',
				prize2: baseImgUrl + '/aword2.png',
				prize3: baseImgUrl + '/aword3.png',
				number: 9999,
				userPm: {
					id: 1,
					jpNum: 263,
					pm: 74646,
					name: '一碗芋头烧少',
					img: ''
				},
				pmList: [{
					id: 1,
					jpNum: 263,
					name: '一碗芋头烧少',
					img: ''
				}, {
					id: 2,
					jpNum: 3263,
					name: '三格拉斯',
					img: ''
				}, {
					id: 3,
					jpNum: 2843,
					name: '溯古古怪',
					img: ''
				}, {
					id: 4,
					jpNum: 2433,
					name: '的布谷国',
					img: ''
				}, {
					id: 5,
					jpNum: 2077,
					name: '好和hi',
					img: ''
				}],
				isEnd: false, // 活动结束
				isOpenPrize: true, // 已开奖
				isFormed: false, // 未组队
			}
		},
		onLoad(option) {
			// this.isEnd = true
			this.isFormed = false
			this.isOpenPrize = false
		},
		methods: {
			handleTo(val){
				console.info('0000', val)
				uni.navigateTo({
				  url: '../index/index',
				})
			},
			showIcon(index) {
				const _that = this
				let showPaim = this.paiFirst
				switch (index) {	
					case 1:
					showPaim = _that.paiFirst
					break
					case 2: 
					showPaim = _that.paiSec
					break
					case 3: 
					showPaim = _that.paiThird
					break
					default:
					showPaim = _that.paiBg
					break
				}
				return showPaim
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../static/less/global.less';
	.main-container{
		background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
		.rankTop{
			width: 100%;
			position: relative;
			.rankTopBg{
				width: 100%;
				height: 460upx;
				padding-top: 160upx;
				z-index: 2;
				image{
					width: 100%
				}
			}
			.rankMine{
				position: absolute;
				left: 13%;
				top: 310upx;
				z-index: 3;
				height: 290upx;
				width: 15%;
				image{
					height: 100%;
				}
			}
			.rankrules{
				position: absolute;
				left: 5upx;
				top: 290upx;
				z-index: 3;
				height: 290upx;
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
				top: 450upx;
				span{
					color: #fff;
					font-size: 14px;
					line-height: 84upx;
				}
			}
				.rankHasEnd{
					position: absolute;
					left: 50%;
					margin-left: -162upx;
					text-align: center;
					z-index: 4;
					top: 450upx;
					width: 324upx;
					height: 84upx;
					image{
						height: 100%;
					}
				}
				.rankNoFormed{
					position: absolute;
					left: 50%;
					margin-left: -130upx;
					text-align: center;
					z-index: 4;
					top: 450upx;
					width: 260upx;
					image{
						width: 100%;
					}
				}
				.rankPmPrize{
					padding: 0 24upx;
					height: 280upx;
					image{
						width: 100%;
					}
				}
			.rankBack{
				position: absolute;
				right: 10upx;
				top: 460upx;
				z-index: 5;
				image{
					width:132upx;
					height: 136upx;
				}
				.backWrap{
					position: relative;
					span{
						position: absolute;
						right: 0;
						top: -10upx;
						height: 20upx;
						background-color: #862824;
						border: 1upx solid #fed8ae;
						padding: 8upx 16upx;
						border-radius: 30upx;
						color: #fed8ae;
						font-size: 20upx;
						line-height: 16upx;
					}
				}
			}
		}
		.ranktCon{
			margin: 24upx;
			padding: 12upx;
			background-color: #ffd8ae;
			border: 1px solid #862824;
		}
		.rankTable{
			border-bottom: 1px solid #c1996b;
			padding: 20upx;
			&:last-child{
				border: none;
			}
		}
		.rankTWrap{
			display: flex;
			justify-content: space-between;
			.rankTPm{
				width: 20%;
				text-align: center;
				position: relative;
				color: #862824;
				font-size: 24upx;
				font-weight: bold;
				line-height: 60upx;
				image{
					height: 60upx;
				}
				span{
					position: absolute;
					top: 6upx;
					left: 50%;
					margin-left: -30upx;
					color: #862824;
					width: 60upx;
					text-align: center;
					font-size: 24upx; 
					font-weight: 500;
				}
				&.title{
					width: 40%;
					line-height: 40upx;
					span{
						position: relative;
						left: 0;
						width: 100%;
						display: block;
						&.sm{
							font-size: 24upx;
							font-weight: normal;
						}
						&.bold{
							font-size: 36upx;
							font-size: 500;
						}
					}
				}
			}
			.rankTIcon{
				text-align: left;
				line-height: 60upx;
				width: 55%;
				color: #862824;
				font-weight: 600;
				&.title{
					width: 40%;
					flex: 1;
				}
			}
			.rankTjpNum{
				width: 25%;
				text-align: left;
				line-height: 60upx;
				image{
					height: 60upx;
					float: left;
				}
				&.title{
					width: 20%;
					flex: 1;
				}
			}
			.small{
				.rankTjpNum{
					text-align: center;
				}
				image{
				 height: 36upx;
				}
			}
		}
	.rankBorder{
		width: 100%;
		heigth: 6upx;
		margin: 0 0 24upx 0;
	}
	.rankPrizes{
		padding: 0 24upx;
		.rankPone{
			image{
				width: 100%;
			}
		}
	}
	}
</style>
