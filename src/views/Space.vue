<template>
	<div class="rq">
		<div class="main">
				<div class="left"></div>			<!-- 左侧 -->
				<div class="content">				<!-- 中间 -->
					<div class="wzk zh-shadow">
						<div class="wenzhke">
							<div class="grxq">
								<img src="http://1t.click/by2h" class="tox zh-shadow"/>
							</div>
							<div class="grxkp">
								<p class="kpnr">昵称：末世の刀魂</p>
								<p class="kpnr">职业：学生</p>
							</div>
							<div class="kojian">
								<button class="kojibut-tp zh-shadow"><router-link to="/pic">图片</router-link></button>
								<button class="kojibut-mp3 zh-shadow"><router-link to="/mus">音乐</router-link></button>
								<button class="kojibut zh-shadow"><router-link to="/ccta">影视</router-link></button>
							</div>
						</div>
					</div>
				</div>
				<div class="right"></div>			<!-- 右侧 -->
		</div>
		
		<router-view />
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			gollery: null,
			musics: null,
		};
	},
	created() {
		this.axios.get('http://localhost:8080/music').then(res => {
			console.log(res.data.data);
			this.musics = res.data.data;
			// alert(this.musics[1].cover)
		});
		this.axios.get('http://localhost:8080/gallery').then(res => {
			console.log(res.data.data);
			this.gollery = res.data.data;
			// alert(this.musics[1].cover)
		});
	},
	methods: {},
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
	.rq {
		margin-top: 0px;
	}
	.xcimg {
		width: 300px;
		height: 200px;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.btzy-1 {
		width: 97%;
		margin-top: 10px;
		margin-left: 10px;
		letter-spacing: 10px;
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(129,131,136); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.wzk {
		width: 100%; /*--设备宽度的百分百--*/
		height: 550px;
		margin: 0 auto; /*--自动适应-- */
		margin-top: 80px;
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(129,131,136); /*--背景色--*/
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
	.kpnr {
		margin-top: 15px;
		margin-left: 5px;
		color: #E0E0E0;
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
