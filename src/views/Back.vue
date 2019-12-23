<template>
	<div class="full">
		<div class="logi-box zh-shadow">
			<div class="zhmmk">
				<p>昵称：</p>
				<input type="text" placeholder="请输入虚拟名称" />
				<p>账号：</p>
				<input type="password" placeholder="请输设定密码" />
				<p>手机号/邮箱：</p>
				<input type="password" placeholder="请输确认密码" />
				<p>验证码：</p>
				<div class="cx">
					<input type="text" class="yzm" placeholder="请输入验证码" />
					<img src="../assets/img/没牙仔.jpeg" class="yzmimg"/>
				</div>
				<button class="tjbut">提交</button>
			</div>
		</div>
		<router-link to="/" class="back zh-shadow"></router-link>
	</div>
</template>

<script>
</script>

<style>
	p {
		margin-top: 3%;
		margin-left: 5%;
		font-size: 20px;
		font-weight: 600;
		font-family: '楷体';
	}
	.zhmmk {
		width: 100%;
		/* background-color: rgb(224,237,211); */
		/* border: 1px solid #000000; */			/*--设置边框线--*/
	}
	/* 文本框 */
	input {
		margin-top: 2%;
		margin-left: 5%;
		width: 87%;
		height: 40px;
		border-radius: 10px;
		font-size: 25px;
		font-weight: 600;
		font-family: '楷体';
		outline: none;
		border: none;
		background-color: #eeeeee;
		border: 1px solid #000000;
	}
	.logi-box {
		position: absolute;				/*--绝对定位（默认元素居中）--*/
		top: 20%;
		background-color: #ffffff;
		width: 400px;
		height: 490px;
		border-radius: 10px;				/*--设置圆弧型边框--*/
		display: flex;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		margin: 0 auto; /*--自动适应-- */
		/* flex-direction: column; */
		border: 1px solid #000000;
		/* padding: 10px; */
		/* opacity: 0.5; */
	}
	.full {
		position: absolute;				/*--绝对定位（默认元素居中）--*/
		top: 0;							/*--上边--*/
		left: 0;						/*--左边--*/
		height: 100%;
		width: 100%;
		display: flex;										/*--flex布局--*/
		justify-content: center;
		align-items: center;
		background-image: url(../assets/img/beijing.png);	/*--设置背景图片--*/
		/* 图片全屏 */
		/* background-size: calc(110%); */
	}
	.back {
		position: absolute;				/*--绝对定位（默认元素居中）--*/
		top: 1%;
		right: 1%;
		width: 60px;
		height: 40px;
		font-family: '楷体';
		text-align: center;
		border-radius: 20px; /*--设置圆弧型边框--*/
		background-image: url(../assets/img/fanhui.jpg);	/*--设置背景图片--*/
		background-size: calc(100%);
		border: 1px solid rgb(94,94,94);
	}
</style>
