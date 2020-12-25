<template>
	<view>
		<view class="table-banner">
			<image src="" mode=""></image>
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

	</view>
</template>

<script>
	import baseImgUri from '../../utils/api.js';
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
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
	
}

</style>
