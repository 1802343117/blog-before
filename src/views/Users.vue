<template>
	<div class="main">
		<div class="left"></div>
		<!-- 左侧 -->
		<div class="content">
			<!-- 中间 -->
			<div class="wenzhke zh-shadow">
				<div class="lybiaot">
					<div class="biaot">
						<br />
						<h1 class="btzy">留言墙</h1>
						<hr />
						<br />
						<p class="lytx">在这可以留下您的建议、意见或者是想说的话。申请添加友情链接可在此留言。</p>
						<p class="shezhiname">昵称：</p>
						<input type="text" class="shezhiname" placeholder="给自己起个名字吧~~~!" v-model="tleaveDto.username"/>
						<button class="zdhq" @click="zdhq()">自动获取昵称和头像</button>
						<p class="kpnr">选择头像：</p>
						<div class="xztx">
							<div v-for="(avatarDtos, index) in avatarDto" :key="index">
								<img :src="avatarDtos" class="xztximg" @click="obtain(avatarDtos, index)"/>
							</div>
							<!-- <button class="xztximg"></button> -->
						</div>
						<p class="kpnr">留言内容：</p>
						<textarea class="lyk" placeholder="畅所欲言吧!~~~不必拘束.但说话请不要带脏字,谢谢~!" v-model="tleaveDto.content"></textarea>
						<input type="text" class="lyjiat-img" placeholder="附加图片(请输入图片链接)" v-model="tleaveDto.additional" />
						<!-- <button class="lyjiat">附加图片</button> -->
						<button class="lytij" @click="register(tleaveDto)">提交</button>
					</div>
				</div>
				<div class="lyq">
					<div class="kojwz" v-for="(tleaves, index) in tleave" :key="index">
						<div class="kapbuj-bt">
							<img :src="tleaves.avatar" class="kapbuj-tx"/>
							<div style="width: 600px;">
								<p class="ly-kpnr">{{ tleaves.user_name }}</p>
								<p class="kpnr-rq">发表日期：{{tleaves.publish_time}}</p>
							</div>
							<div class="kapbuj-wzan">
								<button class="kjwz-but-dz" @click="updateLeave(tleaves)"></button>
								<button class="kjwz-but-sc" @click="deletLeave(tleaves.id, index)"></button>
							</div>
						</div>
						<div class="kapbuj-wznr">
							<p class="kapbuj-wzbt">{{ tleaves.content }}</p>
							<div class="lytpk"><img :src="tleaves.additional" class="nrimg-1" /></div>
						</div>
					</div>
				</div>
			</div>
			<div class="tj">
				<div class="mp">
					<div class="grmp"><p>个人名片</p></div>
					<hr />
					<div class="grxq">
						<div class="grxkp">
							<p class="kpnr">昵称：末世の刀魂</p>
							<p class="kpnr">职业：学生</p>
							<p class="kpnr">地址：江苏南京</p>
						</div>
						<img src="http://1t.click/by2h" class="tox zh-shadow" />
					</div>
					<br />
					<p>人生格言：</p>
					<p>有功夫抱怨不如多想想办法，想不出就睡觉。</p>
					<p>“车到山前必有路，船到桥头自然直”————这是运气。</p>
					<br />
				</div>
				<div class="rqtj">
					<div class="grmp"><p>人气榜</p></div>
					<hr />
					<div class="rqb" v-for="(tleaves, index) in tleave" :key="index">
						<img :src="tleaves.avatar" class="rqbimg" />
						<div class="rqbm">
							<p class="rqm">{{ tleaves.user_name }}</p>
							<p class="rqz">人气值：{{ tleaves.likes }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="right"></div>
		<!-- 右侧 -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			tleaveDto: {
				switch: false,
				username: '',
				content: null,
				likes: 0,
				avatar: '',
				additional: null
			},
			avatarDto: ['http://1t.click/b4G3','http://1t.click/b4G4',
			'http://1t.click/b4G5','http://dwz.win/tqc',
			'http://1t.click/b4G8','http://1t.click/b4GX',
			'http://1t.click/b4He','http://1t.click/b4Hj'],
			tleave: null,
		};
	},
	created() {
		this.axios.get('http://localhost:8080/leave').then(res => {
			console.log(res.data.data);
			this.tleave = res.data.data;
			// alert(this.tleave[0].id)
		});
	},
	methods: {
		zdhq: function() {
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			this.tleaveDto.username = this.user.nickname
			this.tleaveDto.avatar = this.user.avatar
			alert("以为你获取了昵称和头像，请编写你的留言")
		},
		
		obtain: function(avatarDtos){
			this.tleaveDto.avatar = avatarDtos;
			// alert(this.tleaveDto.avatar);
			alert("你以选择了头像，请编写你的留言吧~~~！")
		},

		deletLeave: function(id, index) {
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.user.status != 1) {
				alert("抱歉-_-||你没有这个权限")
				return;
			}
				alert("ID为："+ id+ "索引为："+ index);
				var param = {
					id: id
				}
				var _this = this;
				this.axios.delete("http://localhost:8080/leave", 
				{
					params: param
				}).then(function(res){
					console.log(res.data.msg);
					_this.tleave.splice(index,1);
					// 相当于界面刷新
					_this.$router.plus.push.go(0);
				});
			},
			
		//点赞
		updateLeave: function(tleaves) {
				// alert(tleaves.likes + 1)
				let data = {
					"id": tleaves.id,
					"likes": tleaves.likes++,
				};
				var _this = this;
				this.axios.put('http://localhost:8080/leave',JSON.stringify(data))
				.then(function(response){
					// alert("点击了点赞按钮");
					console.log(response.data.msg);
					_this.show = false;
					// 相当于界面刷新
					// _this.$router.plus.push.go(0);
					localStorage.tleave = JSON.stringify(data)
				});
			},

		//添加留言
		register(tleaveDto){
			if (this.tleaveDto.username == '') {
				alert("你还没给自己起名字呢~！")
				return;
			}
			if (this.tleaveDto.avatar == '') {
				alert("请你先选择一个头像")
				return;
			}
			if (this.tleaveDto.content == null) {
				alert("内容不能为空")
				return;
			}
			// 留言信息完全符合要求则进行下面添加留言操作
			this.axios.post('http://localhost:8080/leave', JSON.stringify(this.tleaveDto)).then(response => {
				if (response.data.msg == '成功') {
					alert('提交成功');
					// 将后台的用户信息存入本地存储
					localStorage.tleave = JSON.stringify(response.data.data);
					// alert(this.tleaveDto.content)
					this.tleave.push({
						avatar: this.tleaveDto.avatar,
						user_name: this.tleaveDto.username,
						content: this.tleaveDto.content,
						additional: this.tleaveDto.additional
					});
					this.tleaveDto.username = '';
					this.tleaveDto.content = '';
					this.tleaveDto.additional = '';
					this.$router.plus.push.go(0);
					// location.reload()
				}
			});
		}
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
};
</script>

<style scoped>
	.zdhq {
		width: 150px;
		height: 40px;
		margin-left: 100px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
	}
	.lyjiat-img {
		width: 40%;
		height: 40px;
		margin: 0;
	}
	.shezhiname {
		width: 50%;
		margin-left: 0px;
	}
	.kjwz-but {
		width: 40px;
		margin-right: 15px;
		outline: none;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
	}
	.kjwz-but-dz {
		width: 40px;
		margin-right: 15px;
		outline: none;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9by);
		background-size: calc(100%);
	}
	.kjwz-but-sc {
		width: 40px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9bs);
		background-size: calc(90%);
	}
.rqb {
	width: 92%;
	height: 100px;
	display: grid; /*--设置布局为：grid--*/
	grid-template-columns: 35% 65%; /*--设置网格为：2列，大小--*/
	grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
	margin-top: 10px;
	margin-left: 10px;
	border-radius: 5px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.rqbimg {
	width: 100%;
	height: 100%;
	border-radius: 6px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.rqbm {
	grid-column-start: 2; /*--从第4条边框线开始--*/
	grid-column-end: 3; /*--到第5条边框线结束--*/
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	text-align: center;
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
}
.rqm {
	margin-top: 20px;
}
.rqz {
	margin-top: 30px;
	font-size: 15px;
}
.lytpk {
	width: 92%;
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
	margin-top: 10px;
	margin-left: 10px;
	margin-bottom: 10px;
	border-radius: 5px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.nrimg-1 {
	width: 99%;
	height: 100%;
	margin-top: 5px;
	margin-left: 5px;
	border-radius: 5px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.kapbuj-wzbt {
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
	font-family: '宋体';
	font-size: 20px;
	font-weight: 550;
	margin-top: 15px;
	margin-left: 0px;
	letter-spacing: 0px; /*--字体间隔--*/
	/* border-bottom: 2px solid #00BBDD; */ /*--设置下边框线--*/
}
.kapbuj-wzan {
		/* 设置容器为flex（横向布局） */
		display: flex;
		height: 35px;
		margin-top: 30px;
		margin-left: 40px;
		/* border: 1.5px solid #000000; */ /*--设置边框线--*/
	}
.kapbuj-wznr {
	text-indent: 2em;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.kojwz {
	width: 98%;
	margin-top: 10px;
	margin-left: 10px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	background: rgb(255, 255, 255); /*--背景色--*/
	border-bottom: 3px solid #000000;
}
.kapbuj-bt {
	/* 设置容器为flex（横向布局） */
	display: flex;
	width: 100%;
	height: 80px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.kapbuj-tx {
	width: 65px;
	height: 65px;
	margin-top: 5px;
	margin-left: 5px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.ly-kpnr {
	margin-top: 10px;
	margin-left: 15px;
	letter-spacing: 5px;
}
.kpnr-rq {
	font-size: 15px;
	margin-top: 10px;
	margin-left: 15px;
	letter-spacing: 0px;
}
.lyq {
	width: 97%;
	margin-top: 10px;
	margin-left: 15px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.lybiaot {
	width: 97%;
	height: 680px;
	margin-top: 10px;
	margin-left: 15px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.lytij {
	width: 120px;
	height: 40px;
	margin-top: 10px;
	margin-left: 380px;
	cursor: pointer;			/*--可点击--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.lyjiat {
	width: 80px;
	height: 40px;
	margin-top: 10px;
	margin-left: 15px;
	cursor: pointer;			/*--可点击--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.xztx {
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
	background: rgb(255, 255, 255); /*--设置背景颜色-- */
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.xztximg {
	width: 80px;
	height: 80px;
	margin: 10px;
	cursor: pointer;			/*--可点击--*/
	/* background-image: url(http://1t.click/by2h); */
	background-size: 80px 80px;
	border-radius: 100px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.rqtj {
	width: 95%;
	margin-top: 10px;
	margin-left: 10px;
	background: rgb(255, 255, 255); /*--设置背景颜色-- */
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.mp {
	width: 95%;
	margin-top: 10px;
	margin-left: 10px;
	background: rgb(255, 255, 255); /*--设置背景颜色-- */
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.grmp {
	letter-spacing: 10px;
	margin-top: 15px;
	margin-bottom: 10px;
}
.grxq {
	/* 设置容器为flex（横向布局） */
	display: flex;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(245,245,245); */ /*--背景色--*/
}
.tox {
	margin-top: 15px;
	margin-left: 10px;
	width: 120px;
	height: 120px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
}
.grxkp {
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	width: 180px;
	height: 120px;
	margin-top: 15px;
	margin-left: 15px;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(245,245,245); */ /*--背景色--*/
}
.kpnr {
	margin-top: 15px;
	margin-left: 5px;
}
.lytx {
	font-size: 30px;
	font-weight: 300;
	margin-top: 0px;
	margin-left: 0px;
}
.lyk {
	width: 100%;
	height: 150px;
	font-size: 18px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000;
}
.btzy {
	font-family: '楷体';
	font-size: 50px;
	letter-spacing: 20px; /*--字体间隔--*/
}
.guan {
	width: 90px;
	height: 50px;
	background-color: #33ff33;
	font-family: '微软雅黑';
	border: 2px solid #33ff33;
	cursor: pointer;
	font-size: 18px;
	margin-top: 5px;
	border-radius: 50px; /*--设置圆弧型边框--*/
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.biaot {
	width: 98%;
	height: 80px;
	margin-left: 10px;
}
.di {
	margin-right: 20px;
}
.jian {
	margin-left: 20px;
}
.media-left-img {
	width: 180px;
	height: 180px;
	margin-top: 25px;
	border-radius: 25px; /*--设置圆弧型边框--*/
}
.media {
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	text-align: center;
	width: 300px;
	height: 400px;
	margin-top: 25px;
	margin-left: 20px;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
	background: rgb(245, 245, 245);
}

.media-wraaper {
	display: flex;
	flex-wrap: wrap;
	flex: 1 1 33.3%;
}
.media-left {
	flex: 0 0 15%;
	text-align: center;
	line-height: 50px;
	border-right: 1px solid #eee;
}
.main {
	width: 100%;
	/*表示中部区域可以自由伸缩 可以简写成flex：1*/
	display: flex;
	flex: 1 1 auto;
	margin: 0 auto; /*--自动适应-- */
	background-image: url(../assets/img/beijing.png);
}
.left {
	/*--左侧--*/
	/* height: 100%; */ /*--高度--*/
	/* background: #55d4eb; */
	flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
	order: -1; /*--让left居中左侧--*/
}
.content {
	/*--中间--*/
	flex: 0 0 70%; /*--不放大，不缩小，固定宽400--*/
	/* background: lightsteelblue; */
	flex: 1 1 auto;
	/* 设置容器为flex（横向布局） */
	display: flex;
}
.right {
	/*--右侧--*/
	/* height: 100%; */ /*--高度--*/
	flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
	/* background: #55d4eb; */ /*--设置背景颜色-- */
	display: flex;
	flex-direction: column;
}
.wenzhke {
	width: 70%; /*--设备宽度的百分百--*/
	margin: 0 auto; /*--自动适应-- */
	margin-top: 80px;
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
	background: rgb(255, 255, 255); /*--设置背景颜色-- */
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 3px solid #000000; /*--设置边框线--*/
}
.tj {
	width: 28%;
	margin: 0 auto; /*--自动适应-- */
	margin-top: 80px;
	margin-left: 15px;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
	background: rgb(255, 255, 255); /*--设置背景颜色-- */
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 3px solid #000000; /*--设置边框线--*/
}
</style>
