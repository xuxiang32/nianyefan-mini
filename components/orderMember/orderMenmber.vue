<template>
	<view class="ordered-dishes-main">
		<view class="ordered-dishes-list ordered-dishes-list-member">
			<view class="ordered-dishes-list-loop">
				<view class="ordered-dishes-list-header">
					<view class="ordered-dishes-list-header-avatar"><image :src="jiupImg" mode="widthFix"></image></view>
					<view class="ordered-dishes-list-header-details">
						<view class="ordered-dishes-list-header-name">
							<text>左边的头像已为年夜饭贡献了</text>
							<text class="gongxiang">{{ member.jiupNum }}</text>
							<text>道菜， 获得</text>
							<text class="gongxiang">{{ member.jiupNum }}</text>
							<text>瓶匠心营造</text>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper orderSwiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							    <swiper-item v-for="(orders, index) in orderWrap" :key="index">
									<view class="ordered-dishes-list-dishes" >
										<view class="points-order-tenOrder-dish" v-for="(item, obj) in orderList.slice(12*index, 12*(index+1))" :key="obj">
											<view class="points-order-tenOrder-dish-bg">
												<view class="points-order-tenOrder-dish-text">{{item.orderName}}</view>
											</view>
										</view>
									</view>
								</swiper-item>
								
							</swiper>
						</view>
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
			jiupImg: baseImgUrl + 'jiupImg.png',
			foodIcon: baseImgUrl + 'foodIcon.png',
			jiupIcon: baseImgUrl + 'jiupIcon.png',
			member: {
				jiupNum: 9999
			},
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: false,
			interval: 2000,
			duration: 500,
			orderList: [
				{
					orderId: 1,
					orderName: '北京烤鸭'
				},
				{
					orderId: 2,
					orderName: '北京烤鸭2'
				},
				{
					orderId: 3,
					orderName: '北京烤鸭3'
				},
				{
					orderId: 1,
					orderName: '北京烤鸭'
				},
				{
					orderId: 2,
					orderName: '北京烤鸭2'
				},
				{
					orderId: 3,
					orderName: '北京烤鸭3'
				},
				{
					orderId: 1,
					orderName: '北京烤鸭'
				},
				{
					orderId: 2,
					orderName: '北京烤鸭2'
				},
				{
					orderId: 3,
					orderName: '北京烤鸭3'
				},
				{
					orderId: 1,
					orderName: '北京烤鸭'
				},
				{
					orderId: 2,
					orderName: '北京烤鸭2'
				},
				{
					orderId: 3,
					orderName: '北京烤鸭3'
				},
				{
					orderId: 1,
					orderName: '北京烤鸭'
				},
				{
					orderId: 2,
					orderName: '北京烤鸭2'
				},
				{
					orderId: 3,
					orderName: '北京烤鸭3'
				}
			],
			orderWrap: []
		};
	},
	mounted() {
		for(let i = 0; i < this.orderList.length/12 ; i ++){
			this.orderWrap.push(i+1)
		}
		console.info('this.orderWrap---', this.orderWrap)
	},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.ordered-dishes-main {
	// margin-top: 20upx;
	// padding: 0 20upx;
	.ordered-dishes-list {
		padding: 20upx;
		// background: #ffd8ae;
		// border: solid 1upx #862824;
		.ordered-dishes-list-header {
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-start;
			height: 110upx;
			width: 100%;
			.ordered-dishes-list-header-avatar {
				width: 108upx;
				height: 108upx;
				& image {
					width: 108upx;
					height: 108upx;
				}
			}
			.ordered-dishes-list-header-details {
				margin-left: 20upx;
				.ordered-dishes-list-header-name {
					font-size: 27upx;
					color: #862824;
					font-weight: bold;
					padding-top: 10upx;
					.gongxiang,
					.number {
						font-size: 26upx;
						color: #f22929;
						font-weight: 600;
					}
				}
				.ordered-dishes-list-header-gx {
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-items: center;
					line-height: 40upx;
					.gongxiang,
					.number {
						font-size: 26upx;
						color: #f22929;
						font-weight: 600;
					}
					.number {
						color: #f22929;
					}
					& image {
						width: 56upx;
					}
				}
			}
		}
		&.ordered-dishes-list-member {
			margin-top: 20upx;
			.ordered-dishes-list-loop {
				padding-bottom: 20upx;
				border-bottom: dashed 3upx #862824;
			}
			.ordered-dishes-list-loop:not(:first-child) {
				padding-top: 20upx;
			}
			.ordered-dishes-list-loop:last-child {
				border: none;
			}
		}
	}
	.ordered-dishes-list-dishes {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 30upx 0 0;
		.points-order-tenOrder-dish {
			width: 25%;
			height: auto;
			margin-bottom: 30upx;
			.points-order-tenOrder-dish-bg {
				padding-top: 50upx;
				display: flex;
				align-items: center;
				margin: auto;
				width: 90upx;
				background: ~'url(@{baseImgUrl}food-bg.png) no-repeat left top';
				background-size: 100%;
				height: 262upx;
				box-sizing: border-box;
			}
			.points-order-tenOrder-dish-text {
				text-align: center;
				width: 40upx;
				margin: 0 auto;
				word-wrap: break-word;
				word-break: break-all;
				font-size: 32upx;
				font-weight: bold;
				color: #6e211d;
			}
		}
	}
	.ordered-dishes-list-allBtn {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-end;
		align-items: center;
		& image {
			width: 196upx;
		}
	}
}
.uni-padding-wrap{
	.orderSwiper{
		height: 1000upx;
	}
}

</style>
