<template>
	<view class="jx-main-container">
		<view class="jx-main-fixedBtn jx-main-hdgz">
			<image :src="hdgzBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-wdjp" @click="handleTo('rank')">
			<image :src="wdjpBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-gdhd">
			<image :src="gdhdBtn" mode="widthFix"></image>
		</view>
		<view class="jx-main-body">
			<view class="button-container">
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
	const baseImgUrl = getApp().globalData.baseImgUri
	export default {
		data() {
			console.log('baseImgUrl', baseImgUrl)
			return {
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				gdhdBtn: baseImgUrl	+ 'gdhd-btn.png',
				familyBtn: baseImgUrl	+ 'yqjiaren.png',
				startOrderBtn: baseImgUrl	+ 'kaishidiancai-index.png',
				step1: baseImgUrl	+ 'step1.png',
				step2: baseImgUrl	+ 'step2.png'
			}
		},
		methods:{
			onShareAppMessage: function(res) {
			    if (res.from === "button") {
			      console.log(res)
			      let that = this;
				  let v = 'test';
			      return {
			        title: '匠心年夜饭',
			        path: 'pages/index/index?t=' + 50 + '&v=' + v,
			        success: function(res) {
			          console.log(res, "转发成功")

			        },
			        fail: function(res) {
			          console.log(res, "转发失败")
			        }
			      }
			    } else {
			      console.log(res)
			    }
			  },
      handleTo(val){
        uni.navigateTo({
          url: '/pages/ranking/ranking',
        })
      },
      startOrder: () => {
        uni.navigateTo({
          url: '../table/table'
        });
      }
		}
	}
</script>

<style lang="less" scoped>
@import '../../static/less/global.less';
.jx-main-container{
	background: ~"url(@{baseImgUrl}indexBg.png) no-repeat center -30upx";
	background-size:cover ;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	.jx-main-fixedBtn{
		position: absolute;
		& image{
			width: 120upx;
		}
		&.jx-main-hdgz{
			top: 13%;
			left: 20upx;
		}
		&.jx-main-wdjp{
			top: 15%;
			left: 120upx;
		}
		&.jx-main-gdhd{
			top: 20%;
			right: 20upx;
		}
	}
	.jx-main-body{
		position: absolute;
		height: auto;
		bottom: 40px;
		left: 0;
		right: 0;
		box-sizing: border-box;
		padding: 0 40upx;
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
		.step-container{
			width: 100%;
			height: auto;
			.step-list{
				width: 100%;
				height: auto;
				// border-radius: 20px;
				// border: solid 6upx #B6312F;
				// padding: 8upx;
				// background-color: #FCDAB5;
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


}

</style>
