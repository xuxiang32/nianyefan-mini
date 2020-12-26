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
						1
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
		<view class="step-container">
			<view class="step-list">
				<image :src="step1" mode="widthFix" ></image>
			</view>
			<view class="step-list">
				<image :src="step2" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	const baseImgUrl = getApp().globalData.baseImgUri
	export default {
		data() {
			return {
				paimTop: baseImgUrl	+ 'paimTop.png',
				hdgzBtn: baseImgUrl	+ 'hdgz-btn.png',
				wdjpBtn: baseImgUrl	+ 'wdjp-btn.png',
				gdhdBtn: baseImgUrl	+ 'gdhd-btn.png',
			};
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
		height: 513upx;
		position: relative;
		& image{
			width: 100%;
		}
		.jx-main-fixedBtn{
			position: absolute;
			& image{
				width: 138upx;
			}
			&.jx-main-hdgz{
				top: 100upx;
				left: 0;
			}
			&.jx-main-wdjp{
				bottom: -30upx;
				left: 120upx;
			}
			&.jx-main-gdhd{
				bottom: -170upx;
				right: 10upx;
			}
		}
	}
}
.table-container{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	.table-body{
		width: 400px;
		height: 400px;
		background-color:#fff;
		border-radius: 50%;
		position: relative;
	}
	.table-person{
		width: 40px;
		height: 40px;
		position: absolute;
		background-color:red;
		border-radius: 50%;
		line-height: 40px;
		text-align: center;
		left: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}
	.table-person:nth-of-type(2){
		transform: rotate(45deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-45deg);
		}
	}
	.table-person:nth-of-type(3){
		transform: rotate(90deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-90deg);
		}
	}
	.table-person:nth-of-type(4){
		transform: rotate(135deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-135deg);
		}
	}
	.table-person:nth-of-type(5){
		transform: rotate(180deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-180deg);
		}
	}
	.table-person:nth-of-type(6){
		transform: rotate(225deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-225deg);
		}
	}
	.table-person:nth-of-type(7){
		transform: rotate(270deg);
		transform-origin:20px 220px;
		.table-person-container{
			transform: rotate(-270deg);
		}
	}
	.table-person:nth-of-type(8){
		transform: rotate(315deg);
		transform-origin:20px 220px;
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

</style>
