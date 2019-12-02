<template>
	<div class="main">
		<div class="left"></div><!-- 左侧 -->
		<div class="content"><!-- 中间 -->
			<div class="wenzhke">
				<div class="wenzhke-fq1 zh-shadow">
					<div class="wenzhke-fq1-0">
						<h1 class="btzy">最新文章</h1><hr />
					</div>
					<div class="qukuaifq" v-for="(topic, index) in topics" :key="index">
						<div class="qukuaifq-1"><img :src="topic.logo" class="qukuaifq-img zh-shadow" /></div>
						<div class="qukuaifq-2">
							<div>
								<h1>{{ topic.name }}</h1>
							</div>
							<div class="wenz">
								<p>{{ topic.description }}</p>
							</div>
							<p class="kk">
								<span class="">查看详情>>></span>
								<span class="jian">{{ topic.articles }}篇文章</span>
							</p>
						</div>
						<div class="qukuaifq-3">
							<button class="guan">+ 关注</button>
							<p class="">
								<br />
								<span class="guanshu">{{ topic.follows }}人关注</span>
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
						<h2 class="btzy">榜单作者</h2><hr />
						<div class="qukuai-1-a" v-for="(zuozhes, index) in zuozhe" :key="index">
							<div class="qukuaifq-1"><img :src="zuozhes.avatar" class="qukuai-img zh-shadow" /></div>
							<div class="qukuaifq-2">
								<div class="qukuai-zhok">
									<h3>{{ zuozhes.nickname }}</h3><br />
									<div>
										<span>粉丝:{{zuozhes.follows}}</span>
									</div>
									<span>写了{{ zuozhes.articles }}篇文章</span>
								</div>
								<div class="wenz">
									<p>{{ zuozhes.description }}</p>
								</div>
							</div>
							<div class="qukuaifq-3">
								<button class="qukuai-but">+ 关注</button>
							</div>
						</div>
					</div>
					<br />
					<div class="fq2-qukuai-2">
						<h2 class="btzy">推荐文章</h2><hr />
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
			topics: null,
			zuozhe: null,
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/topic/hot').then(res => {
			console.log(res.data.data);
			this.topics = res.data.data;
			// alert(this.topics[1].id)
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
		margin-top: 15px;
		margin-left: 30px;
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
		width: 65%;
		height: 98%;
		font-family: '楷体';
		font-size: 20px;
		border: 2px solid #000000; /*--设置边框线--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.sosuo {
		width: 25%;
		height: 100%;
		margin-left: 25px;
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
	margin: 0 auto; /*--自动适应-- */
	margin-right: 10px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
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
	margin-left: 20px;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
	/* background: #ffa500; */
}
.fq2-qukuai {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	width: 100%;
	height: 10%;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
	background: rgb(255,255,255);
}
.fq2-qukuai-1 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	width: 100%;
	background: rgb(255,255,255);
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.fq2-qukuai-2 {
	padding: 5px 5px 0px 5px; /*--内边距--*/
	width: 100%;
	background: rgb(255, 252, 243);
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	border-radius: 8px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
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
	border: 1px solid #000000; /*--设置边框线--*/
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
