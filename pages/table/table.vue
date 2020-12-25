<template>
	<view>
		<view class="table-container">
			<view class="table-body">
				<view class="table-person">
					<view class="table-person-container">
						1
					</view>
				</view>
				<view class="table-person">2</view>
				<view class="table-person">3</view>
				<view class="table-person">4</view>
				<view class="table-person">
					<view class="table-person-container">
						5
					</view>
				</view>
				<view class="table-person">6</view>
				<view class="table-person">7</view>
				<view class="table-person">8</view>
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
.table-container{
	width: 600px;
	height: 600px;
	background-color: #000000;
	padding: 100px;
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
	}
	.table-person:nth-of-type(3){
		transform: rotate(90deg);
		transform-origin:20px 220px;
	}
	.table-person:nth-of-type(4){
		transform: rotate(135deg);
		transform-origin:20px 220px;
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
	}
	.table-person:nth-of-type(7){
		transform: rotate(270deg);
		transform-origin:20px 220px;
	}
	.table-person:nth-of-type(8){
		transform: rotate(315deg);
		transform-origin:20px 220px;
	}
	
}

</style>
