<template>
	<div class="main">
		<div class="left"></div>
		<!-- 左侧 -->
		<div class="content">
			<!-- 中间 -->
			<div class="wzk zh-shadow">
				<div class="wenzhke">
					<div class="grxq"><img src="http://1t.click/by2h" class="tox zh-shadow" /></div>
					<div class="grxkp">
						<p class="kpnr-t">昵称：末世の刀魂</p>
						<p class="kpnr-t">职业：学生</p>
					</div>
					<div class="kojian">
						<button class="kojibut-tp zh-shadow"><router-link to="/pic">图片</router-link></button>
						<button class="kojibut-mp3 zh-shadow"><router-link to="/mus">音乐</router-link></button>
						<button class="kojibut zh-shadow"><router-link to="/ccta">影视</router-link></button>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="box">
					<div class="btzy zh-shadow">
						<p>数据统计</p>
						<hr />
						<div>
							<p class="tjb">末世の刀魂：19-12-10 更新了空间</p>
							<p class="tjb">文 章 数： {{this.space.length}}</p>
							<p class="tjb">音乐单曲数： {{this.musics.length}}</p>
							<p class="tjb">图 片 数： {{this.gollery.length}}</p>
							<p class="tjb">影 视 数：{{this.cctav.length}}</p>
							<br />
						</div>
					</div>
					<div class="btzy zh-shadow">
						<p>类别标签</p>
						<hr />
						<div class="kapbuj">
							<button class="biaoq-3">古风音乐</button>
							<button class="biaoq-2">图片</button>
							<button class="biaoq-3">流行音乐</button>
						</div>
						<div class="kapbuj">
							<button class="biaoq-2">电影</button>
							<button class="biaoq-1">钢琴曲</button>
							<button class="biaoq-3">英雄联盟</button>
						</div>
						<div class="kapbuj">
							<button class="biaoq-1">皮卡丘</button>
							<button class="biaoq-2">电音</button>
							<button class="biaoq-3">驯龙高手</button>
						</div>
						<br />
					</div>
					<div class="btzy zh-shadow">
						<p>影视链接</p>
						<hr />
						<div class="lianjie"><a href="https://v.qq.com/" class="lianjieys" target="_blank">腾讯资源</a></div>
						<div class="lianjie"><a href="https://www.iqiyi.com/" class="lianjieys" target="_blank">爱奇艺资源</a></div>
						<div class="lianjie"><a href="https://www.youku.com/" class="lianjieys" target="_blank">优酷资源</a></div>
						<br />
					</div>
				</div>
				<div class="box-1">
					<input class="kdj" type="submit" value="查看更多" @click="limitbut()" />
					<div class="btzy-1 zh-shadow">
						<div class="yy" v-for="(cctavs, index) in cctav.slice(limit)" :key="index" >
							<a target="_blank" :href="cctavs.addres">
								<img :src="cctavs.cover" class="yyimg"/>
							</a>
							
							<p class="yyp">{{cctavs.name}}</p>
							<button class="yybut" @click="init(cctavs.id, index)">电影详情</button>
							<div class="yysq" v-show="flags[index]">
								<p class="yysqnr">{{cctavs.content}}</p>
							</div>
						</div>
					</div>
					<!-- <input type="submit" value="查看更多" @click="limitbut()" /> -->
				</div>
				<div class="box-2">
					<div class="btzy-2 zh-shadow">
						<p>推荐歌曲</p>
						<hr />
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[1].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[1].musictitle }}</p>
									<p class="wzys-1">{{ musics[1].author }}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[2].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[2].musictitle }}</p>
									<p class="wzys-1">{{ musics[2].author }}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[3].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[3].musictitle }}</p>
									<p class="wzys-1">{{ musics[3].author }}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[5].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[5].musictitle }}</p>
									<p class="wzys-1">{{ musics[5].author }}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[7].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[7].musictitle }}</p>
									<p class="wzys-1">{{ musics[7].author }}</p>
								</div>
							</div>
						</div>
						<br />
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
			gollery: null,
			musics: null,
			cctav: null,
			limit: null,
			space: null,
			flags: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/space').then(res => {
			console.log(res.data.data);
			this.space = res.data.data;
		});
		this.axios.get('http://localhost:8080/music').then(res => {
			console.log(res.data.data);
			this.musics = res.data.data;
			// alert(this.musics[1].id)
		});
		this.axios.get('http://localhost:8080/gallery').then(res => {
			console.log(res.data.data);
			this.gollery = res.data.data;
			// alert(this.gollery.length)
		});
		this.axios.get('http://localhost:8080/cctav').then(res => {
			console.log(res.data.data);
			this.cctav = res.data.data;
			this.limit = parseInt(this.cctav.length * 0.8);
			for (var i = 0; i < this.cctav.length; i++) {
				this.flags[i] = false;
			}
		});
	},
	methods: {
		limitbut: function() {
			this.limit -= 2;
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
	.kdj {
		cursor: pointer; /*--可点击--*/
	}
	.yysqnr {
		margin-top: 0px;
		margin-left: 0px;
		font-size: 15px;
		text-indent:2em;
		letter-spacing: 0px;/*--字体间隔--*/
	}
	.yysq {
		width: 90%;
		margin-top: 15px;
		margin-left: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.yybut {
		width: 40%;
		height: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer; /*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.yyp {
		margin-top: 15px;
		margin-left: 0px;
		font-size: 30px;
		letter-spacing: 0px;/*--字体间隔--*/
	}
	.yyimg {
		width: 90%;
		height: 320px;
		margin-top: 10px;
		cursor: pointer; /*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.yy {
		width: 45%;
		/* height: 350px; */
		margin-top: 15px;
		margin-left: 20px;
		text-align: center;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
.kpnr-t {
	margin-top: 15px;
	margin-left: 5px;
	color: #e0e0e0;
}
.lianjie {
	width: 90%;
	text-align: center;
	font-size: 20px;
	margin-top: 10px;
	margin-left: 15px;
	letter-spacing: 10px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.lianjieys {
	color: rgb(14, 9, 11);
}
.biaoq-1 {
	width: 80px;
	height: 35px;
	letter-spacing: 5px;
	margin-top: 10px;
	margin-left: 10px;
	cursor: pointer; /*--可点击--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.biaoq-2 {
	width: 60px;
	height: 35px;
	letter-spacing: 5px;
	margin-top: 10px;
	margin-left: 10px;
	cursor: pointer; /*--可点击--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.biaoq-3 {
	width: 100px;
	height: 35px;
	letter-spacing: 5px;
	margin-top: 10px;
	margin-left: 10px;
	cursor: pointer; /*--可点击--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.tjb {
	font-family: '';
	font-weight: 500;
	font-size: 15px;
	letter-spacing: 0px;
	margin-left: 15px;
}
.xcimg {
	width: 300px;
	height: 200px;
	margin-top: 10px;
	margin-left: 10px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.wbjz {
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	text-align: center;
	flex-wrap: wrap; /*--如果一行放不下，可以换行--*/
}
.wzys {
	letter-spacing: 0px;
	font-weight: 600;
	margin-top: 10px;
	margin-left: 20px;
}
.wzys-1 {
	letter-spacing: 0px;
	font-weight: 500;
	font-size: 18px;
	margin-top: 15px;
}
.kapbuj {
	/* 设置容器为flex（横向布局） */
	display: flex;
}
.tximg {
	width: 100px;
	height: 100px;
	margin-top: 8px;
	margin-left: 15px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.mp3ys {
	width: 95%;
	height: 120px;
	margin-top: 10px;
	margin-left: 8px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1.5px solid #000000; /*--设置边框线--*/
	background: #ffffff;
}
.btzy {
	width: 97%;
	margin-top: 10px;
	letter-spacing: 10px;
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(245, 245, 245); /*--背景色--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.btzy-1 {
	width: 100%;
	/* 设置容器为flex（横向布局） */
	display: flex;
	flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
	margin-top: 10px;
	letter-spacing: 10px;
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(245, 245, 245); /*--背景色--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.btzy-2 {
	width: 97%;
	margin-top: 10px;
	margin-left: 10px;
	letter-spacing: 10px;
	border: 2px solid #000000; /*--设置边框线--*/
	background: rgb(245, 245, 245); /*--背景色--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.container {
	width: 100%;
	margin: 0 auto; /*--自动适应-- */
	/* margin-top: 15px; */
	display: grid; /*--设置布局为：grid--*/
	grid-template-columns: 25% 25% 25% 25%; /*--设置网格为：4列，大小--*/
	grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(129,131,136); */ /*--背景色--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
}
.box {
	width: 100%;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	grid-column-start: 1; /*--从第1条边框线开始--*/
	grid-column-end: 2; /*--到第2条边框线结束--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: #FFFFFF; */
}
.box-1 {
	width: 100%;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	grid-column-start: 2; /*--从第2条边框线开始--*/
	grid-column-end: 4; /*--到第4条边框线结束--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: #FFFFFF; */
}
.box-2 {
	width: 100%;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	grid-column-start: 4; /*--从第4条边框线开始--*/
	grid-column-end: 5; /*--到第5条边框线结束--*/
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: #FFFFFF; */
}
.wzk {
	width: 100%; /*--设备宽度的百分百--*/
	height: 550px;
	margin: 0 auto; /*--自动适应-- */
	margin-top: 80px;
	border: 1px solid #000000; /*--设置边框线--*/
	background: rgb(129, 131, 136); /*--背景色--*/
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.kojibut-mp3 {
		width: 80px;
		height: 80px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 30px; /*--设置圆弧型边框--*/
		background: rgb(195,195,195); /*--背景色--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9cu);
		background-size: calc(95%);
	}
	.kojibut-tp {
		width: 80px;
		height: 80px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 30px; /*--设置圆弧型边框--*/
		background: rgb(195,195,195); /*--背景色--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9c7);
		background-size: calc(95%);
	}
	.kojibut {
		width: 80px;
		height: 80px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 30px; /*--设置圆弧型边框--*/
		background: rgb(195,195,195); /*--背景色--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9cJ);
		background-size: calc(110%);
	}
.kojian {
	width: 300px;
	height: 80px;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	margin-top: -80px;
	margin-left: 140px;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(245,245,245); */ /*--背景色--*/
}
.grxq {
	width: 100%;
	height: 100%;
	text-align: right;
	/* 设置容器为flex（横向布局） */
	display: flex;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(245,245,245); */ /*--背景色--*/
}
.grxkp {
	width: 180px;
	height: 90px;
	/* 将容器设置为纵向布局 */
	flex-direction: column;
	margin-top: -80px;
	margin-left: 860px;
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	/* border: 1px solid #000000; */ /*--设置边框线--*/
	/* background: rgb(245,245,245); */ /*--背景色--*/
}
.tox {
	margin-top: 420px;
	margin-left: 1050px;
	width: 120px;
	height: 120px;
	border-radius: 10px; /*--设置圆弧型边框--*/
	border: 1px solid #000000; /*--设置边框线--*/
}
.wenzhke {
	width: 100%; /*--设备宽度的百分百--*/
	height: 500px;
	margin: 0 auto; /*--自动适应-- */
	background-image: url(http://1t.click/by8c);
	background-size: calc(100%);
	/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}
.main {
	width: 100%;
	margin: 0 auto; /*--自动适应-- */
	/*表示中部区域可以自由伸缩 可以简写成flex：1*/
	display: flex;
	flex: 1 1 auto;
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
	/* height: 1000px; */
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
</style>
