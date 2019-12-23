<template>
	<div class="main">
		<div class="left"></div><!-- 左侧 -->
		
		<div class="content"><!-- 中间 -->
			<div class="wenzhke">
				<div class="wenzhke-fq1 zh-shadow">
					<div class="wenzhke-fq1-0">
						<h1 class="btzy">最新文章</h1><hr />
					</div>
					<div class="qukuaifq" v-for="(records, index) in record" :key="index">
						<div class="xxlwz">
							<div class="xxkp-bt">
								<img src="http://1t.click/by2h" class="xxkpimg"/>
								<div>
									<p class="xxkpm">末世の刀魂</p>
									<p class="xxkp-rq">发表日期：{{record[0].modigy_time.year}}</p>
								</div>
								<div class="xxkp-wzan">
									<button class="wzanys-bj"></button>
									<button class="wzanys-dz"></button>
									<button class="wzanys-sc" @click="deletRecord(records.id, index)"></button>
								</div>
							</div>
							<div class="xxkp-wznr">
								<p class="xxkp-wzbt">{{records.content}}</p>
								<img :src="records.additional" class="wz-fjtpys"/>
							</div>
							<div class="xxkp-pl">
								<textarea class="pinglunk" placeholder="随便说点什么~~~" v-model="commDto.content"></textarea>
								<div class="xxkp-wzan">
									<button class="wzanys" @click="register(commDto,records.id)">发表评论</button>
									<button class="wzanys" @click="init(records.id, index)">查看评论</button>
								</div>
								<br />
								<div class="plk" v-show="flags[index]">
									<div v-for="(comms, index) in comm" :key="index">
										<div class="wzplk kapbuj">
											<img :src="comms.avatar" class="wzplk-tx"/>
											<p class="xxkpm-pl">{{comms.user_name}}</p>
											<button class="wzplk-buts" @click="deletComm(comms.article_id, commDto, index)"></button>
										</div>
										<div class="wzplk-nr">
											<p class="wzplknrzt">{{comms.content}}</p>
										</div>
									</div>
									<br />
								</div>
							</div>
						</div>
						<br />
					</div>
				</div>
				<div class="wenzhke-fq2">
					<div class="fq2-qukuai zh-shadow">
						<h2 class="btzy">功能</h2><hr />
						<div class="gon">
							<input type="text" class="sosuok" placeholder="搜索文章"/>
							<button class="sosuo"></button>
						</div>
						<div class="gon-1">
							<h3 class="rssdy">RSS订阅</h3>
						</div>
					</div>
					<br />
					<div class="fq2-qukuai-1 zh-shadow">
						<h2 class="btzy">学习网站</h2><hr />
						<div class="kapbuj">
							<button onclick="location.href='https://www.csdn.net/'" class="biaoq-3">CSDN</button>
							<button onclick="location.href='https://www.runoob.com/'" class="biaoq-2">菜鸟</button>
							<button onclick="location.href='http://hao.shejidaren.com/index.html'" class="biaoq-3">设计导航</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://www.w3school.com.cn/'" class="biaoq-2">W3</button>
							<button onclick="location.href='https://www.mingrisoft.com/'" class="biaoq-3">明日科技</button>
							<button onclick="location.href='https://shimo.im/docs/vVWT3TW3qxrgqdvT/read'" class="biaoq-3">石墨文档</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://www.shiyanlou.com/'" class="biaoq-1">实验楼</button>
							<button onclick="location.href='https://www.jianshu.com/'" class="biaoq-2">简书</button>
							<button onclick="location.href='https://github.com/mqxu/web-dev-quickstart'" class="biaoq-3">GitHub</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://www.yangqq.com/link.html'" class="biaoq-3">个人博客</button>
						</div>
						<br />
					</div>
					<br />
					<div class="fq2-qukuai-2 zh-shadow">
						<h2 class="btzy">在线工具</h2><hr />
						<div class="kapbuj">
							<button onclick="location.href='https://www.csdn.net/'" class="biaoq-4">MD5在线解密工具</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://cli.im/'" class="biaoq-4">草料二维码生成器</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2'" class="biaoq-4">lconfont-阿里巴巴矢量图标库</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='http://dwz.wailian.work/'" class="biaoq-4">新浪短网址在线生成</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='http://music.xf1433.com/'" class="biaoq-4">音乐外链在线获取</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='http://www.333ttt.com/'" class="biaoq-4">音乐外链在线获取（可长期使用）</button>
						</div>
						<div class="kapbuj">
							<button onclick="location.href='https://www.tiebazhushou.com/'" class="biaoq-4">身份证号在线生成器</button>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>

		<div class="right"></div><!-- 右侧 -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			currentIndex: 0,
			timer: null,
			record: null,
			comm: null,
			flags: [],
			commDto: {
				id: null,
				userid: null,
				content: null,
				username: null,
				avatar: null
			}
		};
	},
	created() {
		this.axios.get('http://localhost:8080/record').then(res => {
			console.log(res.data.data);
			this.record = res.data.data;
			// alert(this.record.length)
			for (var i = 0; i < this.record.length; i++) {
				this.flags[i] = false;
				// alert(this.flags[i])
			}
		});
	},
	changeTab: function() {
		this.isActive = !this.isActive;
		this.selected = this.selected == 0 ? 1 : 0;
	},
	methods: {
		//发表评论（根据文章ID添加评论）
		register: function(commDto,id) {
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.commDto.content == null) {
				alert("内容不能为空")
				return;
			}
			
			this.commDto.id = id;
			// alert(this.commDto.id)
			this.commDto.userid = this.user.id;
			// alert(this.commDto.userid)
			// alert(this.commDto.content)
			this.commDto.username = this.user.nickname;
			// alert(this.commDto.username)
			this.commDto.avatar = this.user.avatar;
			// alert(this.commDto.avatar)
			
			// 评论信息完全符合要求则进行下面发表评论操作
			this.axios.post('http://localhost:8080/comm', JSON.stringify(this.commDto)).then(response => {
				if (response.data.msg == '成功') {
					alert('发表成功');
					// 将后台的用户信息存入本地存储
					localStorage.comm = JSON.stringify(response.data.data);
					this.comm.push({
						avatar: JSON.parse(localStorage.getItem('user')).avatar,
						user_name: JSON.parse(localStorage.getItem('user')).nickname,
						content: this.commDto.content
					});
					this.commDto.content = '';
				}
			});
		},
		//删除文章（根据文章ID删除文章）
		deletRecord: function(id){
			if(this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.user.status != 1) {
				alert("抱歉-_-||你没有这个权限")
				return;
			}
			//确认身份后，通过ID删除评论
			alert("ID为："+ id);
			var param = {
				id: id
			}
			var _this = this;
			this.axios.delete("http://localhost:8080/record", 
			{
				params: param
			}).then(function(res){
				console.log(res.data.msg);
				_this.record.splice(index,1);
				// 相当于界面刷新
				// _this.$router.plus.push.go(0);
			});
			//刷新页面
			// location.reload()
			this.$router.plus.push.go(0);
		},
		//删除评论（根据文章的评论ID删除评论）
		deletComm: function(article_id, commDto, index){
			if(this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.user.id != this.comm[index].user_id) {
				// alert(this.user.id)
				// alert(this.comm[index].user_id)
				alert("抱歉-_-||你没有这个权限")
				return;
			}
			//确认身份后，通过ID删除评论
			alert("ID为："+ article_id);
			var param = {
				id: article_id
			}
			var _this = this;
			this.axios.delete("http://localhost:8080/comm", 
			{
				params: param
			}).then(function(res){
				console.log(res.data.msg);
				_this.comm.splice(index,1);
				// 相当于界面刷新
				_this.$router.plus.push.go(0);
			});
		},
		//查看评论
		init: function(id, index){
			// alert(index)
			if (this.flags[index]) {
				this.flags.splice(index, 1, false);
			} else {
				this.flags.splice(index, 1, true);
			}
			this.btnStatus = !this.btnStatus;
				// var a=document.getElementById("a1");
				// // var b=document.getElementById("a2");
				// if(a.style.display=="block"){
				// 	a.style.display="none";
				// 	// b.style.display="block";
				// }else{
				// 	a.style.display="block";
				// 	// b.style.display="block";
				// }
				// alert(id)
				this.axios.get('http://localhost:8080/comm/' + id).then(res => {
					console.log(res.data.data);
					this.comm = res.data.data;
					// alert(this.comm.length)
				});
		},
		
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
	.wzplknrzt {
		letter-spacing: 2px;
	}
	.wzplk-buts {
		width: 60px;
		height: 60px;
		margin-top: 8px;
		margin-left: 85px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 50px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9bs);
		background-size: calc(100%);
	}
	.wzplk-tx {
		width: 65px;
		height: 65px;
		margin-top: 5px;
		margin-left: 5px;
		margin-bottom: 5px;
		border-radius: 50px; /*--设置圆弧型边框--*/
	}
	.wzplk {
		width: 80%;
		margin-top: 10px;
		margin-left: 15px;
		border-radius: 50px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.wzplk-nr {
		width: 90%;
		margin-left: 40px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.plk {
		width: 96%;
		margin-top: 10px;
		margin-left: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.pinglunk {
		width: 96%;
		height: 50px;
		font-size: 20px;
		margin-top: 10px;
		margin-left: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.xxkp-pl {
		width: 100%;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.wzanys-dz {
		width: 60px;
		margin-right: 20px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 15px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9by);
		background-size: calc(90%);
	}
	.wzanys-sc {
		width: 60px;
		margin-right: 20px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 15px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9bs);
		background-size: calc(90%);
	}
	.wzanys-bj {
		width: 60px;
		margin-right: 20px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 15px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9dh);
		background-size: calc(90%);
	}
	.wzanys {
		width: 60px;
		margin-right: 20px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 15px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.wz-fjtpys {
		width: 100%;
	}
	.xxkp-wzbt {
		font-family: '';
		font-size: 16px;
		/* font-weight: 500; */
		margin-top: 15px;
		margin-left: 0px;
		letter-spacing: 5px;/*--字体间隔--*/
		/* border-bottom: 2px solid #00BBDD; *//*--设置下边框线--*/
	}
	.xxkp-wznr {
		text-indent:2em;
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.xxkp-wzan {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 30%;
		height: 45px;
		margin-top: 15px;
		margin-left: 350px;
		/* border: 1.5px solid #000000; */ /*--设置边框线--*/
	}
	.xxkpm {
		margin-xxkpmtop: 10px;
		margin-left: 15px;
		letter-spacing: 5px;
	}
	.xxkpm-pl {
		width: 400px;
		margin-xxkpmtop: 10px;
		margin-left: 15px;
		letter-spacing: 5px;
		/* border: 1.5px solid #000000; */ /*--设置边框线--*/
	}
	.xxkp-rq {
		font-size: 15px;
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 0px;
	}
	.xxlwz {
		width: 96%;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		background: rgb(255,255,255); /*--背景色--*/
		border-bottom: 3px solid #000000;
	}
	.xxkp-bt {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 100%;
		height: 80px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.xxkpimg {
		width: 65px;
		height: 65px;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-1 {
		width: 80px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-2 {
		width: 60px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-3 {
		width: 100px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-4 {
		width: 300px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 15px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.kapbuj {
		/* 设置容器为flex（横向布局） */
		display: flex;
	}
	.btzy {
		font-family: '楷体';
		font-size: 30px;
		margin-top: 5px;
	}
	.qukuai-zhok {
		margin-top: 8px;
		text-align: center;				/*--水平居中--*/
	}
	.qukuai-img {
		width: 80px;
		height: 80px;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 100px; /*--设置圆弧型边框--*/
	}
	.qukuai-1-a {
		width: 100%; /*--设备宽度的百分百--*/
		height: 100px;
		margin: 0 auto; /*--自动适应-- */
		margin-top: 10px;
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 25% 50% 25%; /*--设置网格为：3列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
	}
	.rssdy {
		text-decoration: underline;			/*--下划线--*/
		margin-top: 12px;
		cursor: pointer;			/*--可点击--*/
		text-align: center;				/*--水平居中--*/
	}
	.gon {
		/* 设置容器为flex（横向布局） */
		display: flex;
		margin-top: 15px;
		margin-left: 15px;
		width: 80%;
		height: 28%;
	}
	.gon-1 {
		margin-top: 15px;
		margin-left: 30px;
		width: 80%;
		height: 28%;
		border-radius: 8px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.sosuok {
		width: 70%;
		height: 98%;
		font-family: '楷体';
		font-size: 20px;
		border: 2px solid #000000; /*--设置边框线--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.sosuo {
		width: 25%;
		height: 98%;
		margin-top: 6px;
		margin-left: 20px;
		cursor: pointer;
		background: rgb(255,255,255);
		border: 2px solid #000000; /*--设置边框线--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		background-image: url(http://1t.click/b9dp);
		background-size: calc(100%);
	}
.wenzhke {
	width: 100%; /*--设备宽度的百分百--*/
	margin: 0 auto; /*--自动适应-- */
	margin-top: 80px;
	display: grid; /*--设置布局为：grid--*/
	grid-template-columns: 70% 30%; /*--设置网格为：2列，大小--*/
	grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
	/* border-right: 1px solid #000000; */
	/* background: orangered; */ /*--设置背景颜色-- */
}
.wenzhke-fq1 {
	grid-column-start: 1; /*--从第1条边框线开始--*/
	grid-column-end: 2; /*--到第2条边框线结束--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(255,255,255);
}
.wenzhke-fq1-0 {
	width: 98%;
	height: 60px;
	margin-top: 20px;
	margin-left: 10px;
}
.wenzhke-fq2 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	grid-column-start: 2; /*--从第1条边框线开始--*/
	grid-column-end: 3; /*--到第2条边框线结束--*/
	height: 100%; /*--高度--*/
	margin-left: 15px;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
	/* background: #ffa500; */
}
.fq2-qukuai {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	width: 100%;
	height: 220px;
	margin-top: -5px;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(255,255,255);
}
.fq2-qukuai-1 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	width: 100%;
	background: rgb(255,255,255);
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.fq2-qukuai-2 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	width: 100%;
	background: rgb(255,255,255);
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 2px solid #000000; /*--设置边框线--*/
}
.qukuaifq {
	width: 95%;
	margin-left: 20px;
	margin-right: 10px;
	margin-top: 10px;
	letter-spacing: 10px;
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(245,245,245); /*--背景色--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.qukuaifq-0 {
	grid-column-start: 1; /*--从第1条边框线开始--*/
	grid-column-end: 4; /*--到第2条边框线结束--*/
	height: 25%; /*--图片大小：高度--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #eeeeee; /*--设置边框线--*/
	background: rgb(5, 156, 229);
}
.qukuaifq-1 {
	grid-column-start: 1; /*--从第1条边框线开始--*/
	grid-column-end: 2; /*--到第2条边框线结束--*/
	height: 100%; /*--图片大小：高度--*/
	padding: 5px 5px 5px 5px; /*--内边距--*/
	text-align: center;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
	/* background: rgb(5, 156, 229); */
}
.qukuaifq-img {
	width: 160px;
	height: 160px;
	border-radius: 50px; /*--设置圆弧型边框--*/
}
.qukuaifq-2 {
	grid-column-start: 2; /*--从第2条边框线开始--*/
	grid-column-end: 3; /*--到第3条边框线结束--*/
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	height: 100%; /*--图片大小：高度--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
	/* background: rgb(5, 156, 229); */
}
.qukuaifq-3 {
	grid-column-start: 3; /*--从第3条边框线开始--*/
	grid-column-end: 4; /*--到第4条边框线结束--*/
	height: 100%; /*--图片大小：高度--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
	/* background: rgb(5, 156, 229); */
}
.main {
	width: 100%;
	margin: 0 auto; /*--自动适应-- */
	/*表示中部区域可以自由伸缩 可以简写成flex：1*/
	display: flex;
	flex: 1 1 auto;
	margin: 0 auto; /*--自动适应-- */
	background-image: url(../assets/img/beijing.png);
}
.left {
	/*--左侧--*/
	/* height: 100%; */ /*--高度--*/
	/* 设置容器为flex（横向布局） */
	display: flex;	
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	/* background: #55d4eb; */
	flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
	order: -1; /*--让left居中左侧--*/
}
.content {
	/*--中间--*/
	/* background: lightsteelblue; */
	margin: 0 auto; /*--自动适应-- */
	flex: 1 1 auto;
}
.right {
	/*--右侧--*/
	/* height: 100%; */ /*--高度--*/
	flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
	/* background: #55d4eb; */ /*--设置背景颜色-- */
	display: flex;
	flex-direction: column;
}

.media {
	width: 300px;
	margin-right: 10px;
	margin-top: 10px;
	border-right: 1px solid #000000;
	background: #55d4eb; /*--设置背景颜色-- */
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

.wenz {
	margin-top: 20px;
	margin-left: 30px;
	border-radius: 30%;
}

.jian {
	margin-left: 180px;
}
.kk {
	margin-left: 20px;
	margin-top: 30px;
}
.guan {
	width: 120px;
	height: 60px;
	background-color: #33FF33;
	font-family: '微软雅黑';
	border: 2px solid #33FF33;
	cursor: pointer;
	font-size: 20px;
	margin-top: 50px;
	margin-left: 30px;
	border-radius: 50px; /*--设置圆弧型边框--*/
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
	.qukuai-but {
		width: 80px;
		height: 50px;
		background-color: #33FF33;
		font-family: '微软雅黑';
		border: 2px solid #33FF33;
		cursor: pointer;
		font-size: 15px;
		margin-top: 25px;
		border-radius: 50px; /*--设置圆弧型边框--*/
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
.guanshu {
	margin-left: 40px;
}
</style>
