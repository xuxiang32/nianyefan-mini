<template>
	<view class="rank-main-container">
		<view class="rankheader"  @click="handleTo('index')">
			<image :src="backTo" mode="heightFix"></image>
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
			<div class="ranktCon">
			<div class="rankTWrap">
				<div class="rankTIcon">{{userPm.name}}</div>
				<div class="rankTPm">{{'第'+userPm.pm+'名'}}</div>
				<div class="rankTjpNum">
					<image :src="jiupIcon" mode="heightFix"></image>
				{{userPm.jpNum}}
				</div>
			</div>
			<div class="rankBorder">
				<image :src="rankBor" mode="widthFix"></image>
			</div>
			<div class="rankTWrap">
				<div class="rankTPm small">
					<image :src="pm" mode="heightFix"></image>
				</div>
				<div class="rankTIcon small">
					<image :src="fz" mode="heightFix"></image>
				</div>
				<div class="rankTjpNum small">
					<image :src="jp" mode="heightFix"></image>
				</div>
			</div>
			<div class="rankTable" v-for="(item, index) in pmList" :key="index">
				<div class="rankTWrap">
					<div class="rankTPm">
						<image :src="showIcon(index+1)" mode="heightFix"></image>
						<span v-if="index > 2">{{index}}</span>
					</div>
					<div class="rankTIcon">{{item.name}}</div>
					<div class="rankTjpNum">
						<image :src="jiupIcon" mode="heightFix"></image>
					{{item.jpNum}}
					</div>
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
				paiBg: baseImgUrl + '/paimBg.png',
				pm: baseImgUrl + '/paim.png',
				fz: baseImgUrl + '/fanzhuo.png',
				jp: baseImgUrl + '/jiup.png',
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
				}]
			}
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
	.rank-main-container{
		width: 100%;
		height: 100vh;
		background: ~"url(@{baseImgUrl}bgRed.png) no-repeat center";
		background-color: #ef1b29;
		background-size:cover ;
		.rankheader{
			height: 80upx;
			color: #fff;
			padding: 110upx 24upx 20upx 24upx;
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
			height: 460upx;
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
				height: 290upx;
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
				.backWrap{
					position: relative;
					span{
						position: absolute;
						right: 0;
						top: -10upx;
					}
				}
			}
		}
		.ranktCon{
			margin: 24upx;
			padding: 12upx;
			background-color: #F0AD4E;
			border: 1px solid #333333;
		}
		.rankTWrap{
			display: flex;
			justify-content: space-between;
			.rankTPm{
				width: 25%;
				text-align: center;
				image{
					height: 40upx;
				}
			}
			.rankTIcon{
				text-align: left;
				width: 50%
			}
			.rankTjpNum{
				width: 25%;
				text-align: left;
				line-height: 60upx;
				image{
					height: 60upx;
					float: left;
				}
			}
			.small{
			
				image{
				 height: 36upx;
				}
			}
		}
	.rankBorder{
		width: 100%;
		heigth: 6upx;
	}
	}
</style>
