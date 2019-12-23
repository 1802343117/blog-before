<template>
	<div class="full">
		<div class="login-box zh-shadow">
			<div class="zhmmk">
				<p>昵称：</p>
				<input type="text" placeholder="请输入虚拟名称" v-model="userDto.nickname"/>
				<p>密码：</p>
				<input type="password" placeholder="请输设定密码" minlength="6" maxlength="16" v-model="userDto.password" />
				<p>确认密码：</p>
				<input type="password" placeholder="请输确认密码" minlength="6" maxlength="16" v-model="userDto.pas2" />
				<p>账号绑定：</p>
				<input type="text" placeholder="请输入手机号/邮箱" v-model="userDto.mobile"/>
				<!-- <input type="submit" class="regist-btn" value="注册" @click="register(userDto)" /> -->
				<button class="tjbut" @click="register(userDto)">提交</button>
			</div>
		</div>
		<router-link to="/" class="back zh-shadow"></router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user')),
				userDto: {
					nickname: '',
					password: '',
					pas2: '',
					gender: '男',
					address: '江苏南京',
					introduction: '无',
					follows: 0,
					status: 0,
					mobile: ''
				},
				codeDisabled: true,
				info: '',
				show: true,
				status: '',
				users: null,
				token: ''
			};
			// user: {}
		},
		// created: function() {
		// 	var _this = this;
		// 	axios.get(_this.baseURL)
		// 		.then(function(response) {
		// 			//在控制台输出响应数据
		// 			console.log(response.data.data)
		// 			//将数据赋值给Vue对象的books数组
		// 			_this.books = response.data.data;
		// 		})
		// },
		methods: {
			// addUser: function(user) {
			// 	let data = {
			// 		"password": user.password,
			// 		"nickname": user.nickname,
			// 		"mobile": user.mobile,
			// 	};
			// 					
			// 	alert(JSON.stringify(data));
			// 	var _this = this;
			// 	axios.post(_this.baseURL, JSON.stringify(data))
			// 		.then(function(response) {
			// 		     _this.closeBox();
			// 			_this.books.splice(0, 0, response.data.data);
			// 		});
			// },
			
			
			register(userDto) {
				if (this.userDto.nickname == '') {
					// this.info = '昵称不能为空';
					// this.showMsg();
					alert("昵称不能为空");
					return;
				}
				if (this.userDto.password == '') {
					// this.info = '密码不能为空';
					// this.showMsg();
					alert("密码不能为空");
					return;
				}
				if (this.userDto.pas2 == '') {
					alert("请确认密码");
					return;
				}
				if (this.userDto.password != this.userDto.pas2) {
					alert("请重新确认密码");
					return;
				}
				if (this.userDto.mobile == '') {
					// this.info = '手机号不能为空';
					// this.showMsg();
					alert("手机号不能为空");
					return;
				}
				if (!/^1[34578]\d{9}$/.test(this.userDto.mobile)) {
					// this.info = '手机号码格式错误';
					// this.userDto.mobile = '';
					alert("手机号码格式错误")
					return;
				}
				// 注册信息完全符合要求则进行下面注册操作
				this.axios.post('http://localhost:8080/user', JSON.stringify(this.userDto)).then(response => {
					if (response.data.msg == '成功') {
						alert('注册成功');
						// 将后台的用户信息存入本地存储
						localStorage.users = JSON.stringify(response.data.data);
						// 路由跳转
						this.$router.push('/');
					}
				});
				
			}
		}
	};
</script>

<style>
	.bxs {
		display: none;			/*--隐藏元素（且元素不占用空间）--*/
	}
	.biaoti {
		width: 100%;
		height: 60px;
		border-top-left-radius: 10px;				/*--设置圆弧型边框--*/
		border-top-right-radius: 10px;				/*--设置圆弧型边框--*/
		background-color: rgb(236, 239, 241);
		border-bottom: 1px solid #000000;			/*--设置下边框线--*/
	}
	.cx {
		width: 92%;
		height: 20%;
		/* 设置容器为flex（横向布局） */
		display: flex;
	/* 	background-color: #eeeeee;
		border: 1px solid #000000; */
	}
	.yzm {
		margin-top: 5%;
	}
	.yzmimg {
		margin-top: 10px;
		margin-left: 10px;
		width: 160px;
		height: 60px;
		background-color: #eeeeee;
		border: 1px solid #000000;
	}
	.tjbut {
		background-color: rgb(23,31,35);
		color: white;
		/* padding: 20px; */
		margin-top: 10%;
		margin-left: 28%;
		width: 40%;
		height: 10%;
		font-family: '楷体';
		font-size: 18px;
		border-radius: 5px;
		border: none;							/*--去除边框--*/
		cursor: pointer;					/*-- 光标呈现为指示链接的指针（一只手） --*/
	}
	p {
		margin-top: 3%;
		margin-left: 5%;
		font-size: 20px;
		font-weight: 600;
		font-family: '楷体';
	}
	.zhmmk {
		margin-top: 6%;
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
	.login-box {
		position: absolute;				/*--绝对定位（默认元素居中）--*/
		top: 20%;
		background-color: #ffffff;
		width: 400px;
		height: 450px;
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
