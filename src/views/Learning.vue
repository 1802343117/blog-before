<template>
	<div class="main">
		<div class="left"></div><!-- 左侧 -->
		<div class="content"><!-- 中间 -->
			<div class="wenzhke">
				<div class="wenzhke-fq1 zh-shadow">
					<div class="wenzhke-fq1-0">
						<h1 class="btzy">推荐工具</h1><hr />
					</div>
					<div class="qukuaifq" v-for="(tools, index) in tool" :key="index">
						<div class="qukuaifq-1"><img :src="tools.cover" class="qukuaifq-img zh-shadow" /></div>
						<div class="qukuaifq-2">
							<div>
								<h2>{{ tools.toolname }}</h2>
							</div>
							<p class="rjxq">{{ tools.adout }}</p>
						</div>
						<div class="qukuaifq-3">
							<button class="guan" @click="jumpHref(index)">下载地址</button>
							<!-- <a href="https://v.qq.com/" class="lianjieys" target="_blank">腾讯资源</a> -->
							<p class="">
								<br />
								<span class="guanshu">推荐人数:{{ tools.likes }}</span>
							</p>
						</div>
					</div>
				</div>
				<div class="wenzhke-fq2">
					<div class="fq2-qukuai zh-shadow">
						<h2 class="btzy">功能</h2><hr />
						<div class="gon">
							<input type="text" class="sosuok" placeholder="搜索文章"/>
							<button class="sosuo">搜索</button>
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
			tool: null,
			zuozhe: null,
		};
	},
	created() {
		this.axios.get('http://localhost:8080/tool').then(res => {
			console.log(res.data.data);
			this.tool = res.data.data;
			// alert(this.tool[1].addres)
		});
		this.axios.get('http://localhost:8080/api/hot').then(res => {
			console.log(res.data.data);
			this.zuozhe = res.data.data;
			// alert(this.topics[1].id)
		});
	},
	changeTab: function() {
		this.isActive = !this.isActive;
		this.selected = this.selected == 0 ? 1 : 0;
	},
	methods: {
		logout() {
			this.user = null;
			this.$router.push('/');
			alert('退出');
		},
		go() {
			this.timer = setInterval(() => {
				this.autoPlay();
			}, 3000);
		},
		stop() {
			clearInterval(this.timer);
			this.timer = null;
		},
		change(index) {
			this.currentIndex = index;
		},
		autoPlay() {
			this.currentIndex++;
			if (this.currentIndex > this.slideList.length - 1) {
				this.currentIndex = 0;
			}
		},
		jumpHref(index) {
			location.href = this.tool[index].addres;
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
	.lianjieys {
		color: rgb(221,221,221);
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
		border: 2px solid #000000; /*--设置边框线--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
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
	margin-top: 10px;
	margin-left: 10px;
}
.wenzhke-fq2 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	grid-column-start: 2; /*--从第1条边框线开始--*/
	grid-column-end: 3; /*--到第2条边框线结束--*/
	margin-top: -5px;
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
	width: 96%; /*--设备宽度的百分百--*/
	height: 10%;
	margin: 0 auto; /*--自动适应-- */
	margin-top: 10px;
	margin-left: 18px;
	padding: 5px 5px 5px 5px; /*--内边距--*/
	display: grid; /*--设置布局为：grid--*/
	grid-template-columns: 25% 55% 20%; /*--设置网格为：3列，大小--*/
	grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
	background: rgb(245,245,245); /*--背景色--*/
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
	border-radius: 30px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
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
	text-align: center;
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
.rjxq {
	margin-top: 10px;
	margin-left: 0px;
	font-size: 15px;
}


.guan {
	width: 120px;
	height: 60px;
	background-color: #33FF33;
	font-family: '微软雅黑';
	border: 2px solid #33FF33;
	cursor: pointer;
	font-size: 20px;
	margin-top: 40px;
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
	margin-left: 10px;
}
</style>
