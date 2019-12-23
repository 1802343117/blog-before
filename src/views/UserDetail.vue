<template>
	<div class="main">
		<div class="left"></div>			<!-- 左侧 -->
		<div class="content">				<!-- 中间 -->
			<div class="details zh-shadow">
				<div class="details-tx">
					<img :src="this.user.avatar" class="xqtximg"/>
				</div>
				<div class="details-xx">
					<p class="xx-ztys">昵称：{{this.user.nickname}}</p>
					<p class="xx-ztys">账号：{{this.user.account}}</p>
					<p class="xx-ztys">密码：*************</p>
					<p class="xx-ztys">性别：{{this.user.gender}}</p>
				</div>
				<div class="details-xx">
					<p class="xx-ztys">生日：{{this.user.birthday.year}}-{{this.user.birthday.month}}-{{this.user.birthday.day}}</p>
					<p class="xx-ztys">常住地：{{this.user.address}}</p>
					<p class="xx-ztys">联系方式：{{this.user.mobile}}</p>
				</div>
				<div class="details-xx">
					<h2 class="jjbt">功能</h2><hr />
					<button class="gonen" @click="inita()">修改头像</button>
					<button class="gonen" @click="initb()">修改个人信息</button>
					<button class="gonen" @click="initc()">修改密码</button>
				</div>
				<div class="details-jj">
					<h2 class="jjbt">简介</h2><hr /><br />
					<p class="jjnr">{{this.user.introduction}}</p>
				</div>
				
				<div class="xgtx" style="display: none;" id="a1">
					<h2 class="jjbt-1">头像库</h2><hr />
					<img :src="avatarDtos" class="xztximg" @click="obtain(avatarDtos, index)" v-for="(avatarDtos, index) in avatarDto" :key="index">
				</div>
				
				<div class="ggrxx" style="display: none;" id="b2">
					<h2 class="jjbt-1">更改个人信息</h2><hr />
					
					<div style="display: none; display: flex; margin-left: 35px;">
						<div class="wbk">
							<p class="tishi">昵称：</p>
							<input type="text" placeholder="请输入新名称" v-model="user.nickname"/>
						</div>
						<div class="wbk">
							<p class="tishi">生日：</p>
							<input type="date" placeholder="请输入你的生日" v-model="user.birthday"/>
						</div>
						<div class="wbk">
							<p class="tishi">性别：</p>
							<p>男</p><input style="width: 30px; margin-left: 10px;" type="radio" value="男" name="xb" v-model="user.gender"/>
							<p>女</p><input style="width: 30px; margin-left: 10px;" type="radio" value="女" name="xb" v-model="user.gender"/>
						</div>
					</div>
					
					<div style="display: none; display: flex; margin-top: 20px;">
						<div class="wbk">
							<p class="tishi-1">常住地：</p>
							<input type="text" placeholder="常住地" v-model="user.address"/>
						</div>
						<div class="wbk">
							<p class="tishi-1">联系方式：</p>
							<input type="text" placeholder="联系方式" maxlength="11" v-model="user.mobile"/>
						</div>
					</div>
					
					<div style="display: none; display: flex; margin-top: 20px;">
						<p class="tishi-1">修改简介：</p>
						<textarea class="jjwbk" placeholder="写点东西吧~~~!" v-model="user.introduction"></textarea>
					</div>
					<button class="tjxg" @click="modify()">提交修改</button>
				</div>
				
				<div class="xgjj" style="display: none;" id="c3">
					<h2 class="jjbt-1">修改密码</h2><hr />
					<div style="display: none; display: flex; margin-top: 20px;">
						<div class="wbk">
							<p class="tishi-1">新密码：</p>
							<input type="password" placeholder="请输入新密码" maxlength="16" v-model="user.password"/>
						</div>
						<div class="wbk">
							<p class="tishi-1">确认密码：</p>
							<input type="password" placeholder="请确认密码" maxlength="16" v-model="user.pas"/>
						</div>
					</div>
					<button class="tjxg" @click="pasmodify()">提交修改</button>
				</div>
			</div>
		</div>
		<div class="right"></div>			<!-- 右侧 -->
		
		<router-link to="/" class="back zh-shadow"></router-link>
	</div>
</template>

<script>
	// export default {};
	!
	function() {
		function n(n, e, t) {
			return n.getAttribute(e) || t
		}
	
		function e(n) {
			return document.getElementsByTagName(n)
		}
	
		function t() {
			var t = e("script"),
				o = t.length,
				i = t[o - 1];
			return {
				l: o,
				z: n(i, "zIndex", -1),
				o: n(i, "opacity", 1),
				c: n(i, "color", "0, 0, 0"),
				n: n(i, "count", 99)
			}
		}
	
		function o() {
			a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
				c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		}
	
		function i() {
			r.clearRect(0, 0, a, c);
			var n, e, t, o, m, l;
			s.forEach(function(i, x) {
					for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(
							i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
						null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >=
							n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r
							.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
				}),
				x(i)
		}
		var a, c, u, m = document.createElement("canvas"),
			d = t(),
			l = "c_n" + d.l,
			r = m.getContext("2d"),
			x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window
			.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(n) {
				window.setTimeout(n, 1e3 / 45)
			},
			w = Math.random,
			y = {
				x: null,
				y: null,
				max: 2e4
			};
		m.id = l,
			m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
			e("body")[0].appendChild(m),
			o(),
			window.onresize = o,
			window.onmousemove = function(n) {
				n = n || window.event,
					y.x = n.clientX,
					y.y = n.clientY
			},
			window.onmouseout = function() {
				y.x = null,
					y.y = null
			};
		for (var s = [], f = 0; d.n > f; f++) {
			var h = w() * a,
				g = w() * c,
				v = 2 * w() - 1,
				p = 2 * w() - 1;
			s.push({
				x: h,
				y: g,
				xa: v,
				ya: p,
				max: 6e3
			})
		}
		u = s.concat([y]),
			setTimeout(function() {
					i()
				},
				100)
	}();
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user')),
				avatarDto: ['http://1t.click/b4G3','http://1t.click/b4G4',
				'http://1t.click/b4G5','http://dwz.win/tqc',
				'http://1t.click/b4G8','http://1t.click/b4GX',
				'http://1t.click/b4He','http://1t.click/b4Hj']
				// mdfyuser: {},
			};
		},
		
		created() {},
		
		methods: {
			//修改密码
			pasmodify: function () {
				//密码设置
				if (this.mdfyuser.password == null) {
					if(this.mdfyuser.pas == null) {
						alert("无修改")
						return;
					}
				} else {
					if (this.mdfyuser.pas == null) {
						alert("请重新确认密码")
						return;
					}
					if (this.mdfyuser.password == this.mdfyuser.pas) {
						alert("你的新密码是："+this.mdfyuser.password)
					} else {
						alert("请重新确认密码")
						return;
					}
				}
				alert(this.user.id)
				let data = {
					"id": this.user.id,
					"avatar": this.user.avatar,
					"nickname": this.user.nickname,
					"birthday": this.user.birthday,
					"gender": this.user.gender,
					"password": this.mdfyuser.password,
					"address": this.user.address,
					"mobile": this.user.mobile,
					"introduction": this.user.introduction
				};
				var _this = this;
				this.axios.put('http://localhost:8080/user',JSON.stringify(data))
				.then(function(response){
					alert("修改成功");
					console.log(response.data.msg);
					_this.show = false;
					// 相当于界面刷新
					// _this.$router.plus.push.go(0);
					location.reload()
				});
			},
			
			//修改信息
			modify: function () {
				alert(this.user.id)
				let data = {
					"id": this.user.id,
					"avatar": this.user.avatar,
					"nickname": this.user.nickname,
					"birthday": this.user.birthday,
					"gender": this.user.gender,
					"password": this.user.password,
					"address": this.user.address,
					"mobile": this.user.mobile,
					"introduction": this.user.introduction
				};
				var _this = this;
				this.axios.put('http://localhost:8080/user',JSON.stringify(data))
				.then(function(response){
					alert("修改成功");
					console.log(response.data.msg);
					_this.show = false;
					localStorage.user = JSON.stringify(data)
				});
			},
			
			//修改头像
			obtain: function(avatarDtos) {
				alert(this.user.id)
				let data = {
					"id": this.user.id,
					"avatar": avatarDtos,
					"nickname": this.user.nickname,
					"password": this.user.password,
					"gender": this.user.gender,
					"birthday": this.user.birthday,
					"address": this.user.address,
					"mobile": this.user.mobile
				};
				var _this = this;
				this.axios.put('http://localhost:8080/user',JSON.stringify(data))
				.then(function(response){
					alert("修改成功");
					console.log(response.data.msg);
					_this.show = false;
					localStorage.user = JSON.stringify(data)
				});
				this.user.avatar = avatarDtos
				
			},
			
			inita: function() {
				alert("1")
				var a=document.getElementById("a1");
				if(a.style.display=="block"){
					a.style.display="none";
				}else{
					a.style.display="block";
				}
			},
			initb: function() {
				alert("2")
				var a=document.getElementById("b2");
				if(a.style.display=="block"){
					a.style.display="none";
				}else{
					a.style.display="block";
				}
			},
			initc: function() {
				alert("3")
				var a=document.getElementById("c3");
				if(a.style.display=="block"){
					a.style.display="none";
				}else{
					a.style.display="block";
				}
			}
		}
		
	};
</script>



<style scoped>
	.xqtximg {
		width: 100%;
		height: 100%;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.tjxg {
		width: 20%;
		height: 40px;
		margin-top: 15px;
		margin-bottom: 15px;
		letter-spacing: 15px; /*--字体间隔--*/
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.jjwbk {
		width: 60%;
		height: 150px;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 20px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.tishi {
		width: 80px;
		font-size: 20px;
	}
	.tishi-1 {
		width: 130px;
		font-size: 20px;
	}
	/* 文本框 */
	input {
		margin-left: 0px;
	}
	.wbk {
		display: none;					/*--格式化布局（使用自定义布局）--*/
		display: flex;
		margin-top: 15px;
		margin-left: 50px;
	}
	.xztximg {
		width: 100px;
		height: 100px;
		margin: 10px;
		cursor: pointer;			/*--可点击--*/
		/* background-image: url(http://1t.click/by2h); */
		background-size: 80px 80px;
		border-radius: 100px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.xgjj {
		width: 91%;
		margin-top: 30px;
		margin-left: 50px;
		text-align: center;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.ggrxx {
		width: 91%;
		margin-top: 30px;
		margin-left: 50px;
		text-align: center;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.xgtx {
		width: 91%;
		margin-top: 30px;
		margin-left: 50px;
		text-align: center;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.gonen {
		width: 80%;
		height: 40px;
		margin-top: 14px;
		margin-left: 30px;
		letter-spacing: 15px; /*--字体间隔--*/
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.jjnr {
		text-indent:2em;
		font-size: 25px;
		letter-spacing: 10px; /*--字体间隔--*/
		margin-top: 0px;
		margin-left: 20px;
	}
	.jjbt {
		margin-top: 10px;
		margin-left: 10px;
		letter-spacing: 10px; /*--字体间隔--*/
	}
	.jjbt-1 {
		margin-top: 10px;
		letter-spacing: 10px; /*--字体间隔--*/
	}
	.details-jj {
		width: 91%;
		height: 220px;
		margin-top: 30px;
		margin-left: 50px;
		margin-bottom: 30px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.xx-ztys {
		margin-top: 25px;
		color: #000000;
	}
	.details-xx {
		width: 300px;
		height: 220px;
		margin-top: 40px;
		margin-left: 30px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.details-tx {
		width: 220px;
		height: 220px;
		margin-top: 40px;
		margin-left: 50px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
	}
	.details {
		width: 100%;
		/* 设置容器为flex（横向布局） */
		display: flex;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		margin-top: 50px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
	}
	.main {
		width: 100%;
		margin: 0 auto; /*--自动适应-- */
		/*表示中部区域可以自由伸缩 可以简写成flex：1*/
		display: flex;
		flex: 1 1 auto;
		/* background-image: url(../assets/img/beijing.png); */
	}
	.left {/*--左侧--*/
		/* height: 100%; */ /*--高度--*/
		/* background: #55d4eb; */
		flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
		order: -1; /*--让left居中左侧--*/
	}
	.content {/*--中间--*/
		flex: 0 0 70%; /*--不放大，不缩小，固定宽400--*/
		/* background: lightsteelblue; */
		/* height: 1000px; */
		flex: 1 1 auto;
	}
	.right {/*--右侧--*/
		/* height: 100%; */ /*--高度--*/
		flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
		/* background: #55d4eb; */ /*--设置背景颜色-- */
		display: flex;
		flex-direction: column;
	}
</style>
