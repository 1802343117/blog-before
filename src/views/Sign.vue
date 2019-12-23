 <template>
	<div class="full">
		<div class="login-box zh-shadow">
			<div class="zhmmk">
				<p class="zhiti">账号</p>
				<input type="text" placeholder="请输入手机号/邮箱" v-model="userDto.account" />
				<p class="zhiti">密码</p>
				<input type="password" placeholder="请输入6-16位密码" minlength="6" maxlength="16" v-model="userDto.password" />
				<p class="zhiti">验证码</p>
				<div class="cx">
					<input type="text" class="yzm" placeholder="请输入验证码" v-model="userDto.yanzheng" />
					<img :src="yanzhengma[this.sjs]" class="yzmimg" />
				</div>
				<input type="submit" class="login-btn" value="登录" @click="signIn(userDto)" />
			</div>
			<div class="genback">
				<span class="span-tab"><router-link to="/back">忘记密码</router-link></span>
				<span class="span-tab-1"><router-link to="/gen">游客账号注册</router-link></span>
			</div>
				
		</div>
		<router-link to="/" class="back"></router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			userDto: {
				account: '',
				password: '',
				yanzheng: ''
			},
			yanzheng: ['UYTy','5PyN','p7TC','HYFV','UVYC','EQgy','AQ7R','yBFU','gMNg','RQCH','FEXY','UYTy','FEXY'],
			yanzhengma: ['http://1t.click/b4e2','http://1t.click/b4e3','http://1t.click/b4e4','http://1t.click/b4e6','http://1t.click/b4e7',
			'http://1t.click/b4e8','http://1t.click/b4e9','http://1t.click/b4eA','http://1t.click/b4eB','http://1t.click/b4eE',
			'http://1t.click/b4eF','http://1t.click/b4e2','http://1t.click/b4eF'],
			user: null,
			sjs: null
		};
	},
	created() {
		this.sjs = Math.ceil(Math.random()*12);
		this.axios.get('http://localhost:8080/user').then(res => {
			console.log(res.data.data);
			this.user = res.data.data;
			// alert(this.tleave[0].id)
		});
	},
	methods: {
		signIn(userDto) {
			if (this.userDto.account == '') {
				alert("账号不能为空");
				return;
			}
			if (this.userDto.password == '') {
				alert("密码不能为空");
				return;
			}
			if (this.userDto.yanzheng == '') {
				alert("验证码不能为空");
				return;
			}
			if (this.userDto.yanzheng != this.yanzheng[this.sjs]) {
				alert("验证码错误，请重试");
				// 相当于界面刷新
				location.reload()
				return;
			}
			// alert("验证码正确");
			this.axios.post('http://localhost:8080/api/sign-in', JSON.stringify(this.userDto))
			.then(response => {
				if (response.data.msg == '登录成功') {
					// 将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					// 路由跳转
					this.$router.push('/');
				} else {
					alert("密码错误")
				}
				
			});
		},
		computed: {
			// 解决403图片缓存问题
			getImages(_url) {
				if (_url) {
					let _u = _url.substring(8);
					return 'https://images.weserv.nl/?url=' + _u;
				}
			}
		}
	}
}
</script>

<style scoped>
	.genback {
		margin-top: 3%;
	}
	.zhiti {
		font-family: '楷体';
		font-size: 25px;
		letter-spacing: 20px;
	}
	a {
		color: rgb(113, 156, 252);
	}
	a:hover {
		color: #00bbdd;
	}
	.cx {
		width: 360px;
		height: 80px;
		/* 设置容器为flex（横向布局） */
		display: flex;
	}
	.yzmimg {
		margin-top: 10px;
		margin-left: 10px;
		width: 160px;
		height: 60px;
		background-color: #eeeeee;
		border: 1px solid #000000;
	}
	/* 没有账号的情况 */
	.span-tab {
		margin-left: 25px;
		margin-top: 5px;
	}
	.span-tab-1 {
		margin-left: 180px;
		margin-top: 5px;
		cursor: pointer;				/*--光标呈现为指示链接的指针（一只手）--*/
	}
	.span-tab:hover {
		color: #00bbdd;
	}
	.span-tab-1:hover {
		color: #00bbdd;
	}
	/* 登录和注册按钮 */
	.login-btn {
		margin-top: 8%;
		color: #FFFFFF;
		background-color: rgb(25,30,34);
		cursor: pointer;
	}
	/* 文本框 */
	input {
		margin: 5%;
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
	.yzm {
		width: 160px;
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
	.zhmmk {
		width: 100%;
		/* background-color: rgb(224,237,211); */
		/* border: 1px solid #000000; */			/*--设置边框线--*/
	}
	.biaoti {
		width: 100%;
		height: 60px;
		border-top-left-radius: 10px;				/*--设置圆弧型边框--*/
		border-top-right-radius: 10px;				/*--设置圆弧型边框--*/
		background-color: rgb(236, 239, 241);
		border-bottom: 1px solid #000000;			/*--设置下边框线--*/
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
.login-box {
	position: absolute;				/*--绝对定位（默认元素居中）--*/
	top: 20%;
	background-color: #ffffff;
	width: 400px;
	height: 540px;
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
p {
	font-family: '楷体';
	font-weight: 100;
	text-align: center;
	letter-spacing: 10px;
	font-size: 30px;	
	/* margin-left: 20px; */
	/* color: #AAAAAA; */
}
</style>