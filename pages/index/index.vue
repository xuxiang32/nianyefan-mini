<template>
	<view class="jx-main-container">
		<view class="jx-main-fixedBtn jx-main-hdgz">
			<image src="../../static/img/hdgz-btn.png" mode="heightFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-wdjp">
			<image src="../../static/img/wdjp-btn.png" mode="heightFix"></image>
		</view>
		<view class="jx-main-fixedBtn jx-main-gdhd">
			<image src="../../static/img/gdhd-btn.png" mode="heightFix"></image>
		</view>
		<view class="jx-main-body">
			<view class="button-container">
				<image src="../../static/img/yqjiaren.png" mode="widthFix"></image>
				<image src="../../static/img/kaishidiancai-index.png" mode="widthFix"></image>
			</view>
			<view class="step-container">
				<view class="step-list">
					<!-- <view class="step-list-container">
						<view class="step-list-l">Step1</view>
						<view class="step-list-r">
							<view class="step-list-r-header">发起组队PK</view>
							<view class="step-list-r-des">发起组队PK发起组队发起组队发起组队发起组队发起组队发起组队发起组队发起组队</view>
						</view>
					</view> -->
					<image src="../../static/img/step1.png" mode="widthFix" ></image>
				</view>
				<view class="step-list">
					<!-- <view class="step-list-container">
						<view class="step-list-l">Step2</view>
						<view class="step-list-r">
							<view class="step-list-r-header">发起组队PK</view>
							<view class="step-list-r-des">发起组队PK发起组队发起组队发起组队发起组队发起组队发起组队发起组队发起组队</view>
						</view>
					</view> -->
					<image src="../../static/img/step2.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.jx-main-container{
	background: #FED893;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	.jx-main-fixedBtn{
		position: absolute;
		& image{
			height: 230upx;
		}
		&.jx-main-hdgz{
			top: 13%;
			left: 20upx;
		}
		&.jx-main-wdjp{
			top: 15%;
			left: 100upx;
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
			padding-bottom: 20upx;
			& image{
				width: 250upx;
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
