<template>
	<div class="main">
		<div class="left"></div>			<!-- 左侧 -->
		<div class="content">				<!-- 中间 -->
			<div class="wenzhke zh-shadow">
				<div class="biaot">
					<br><h2 class="btzy">文章作者</h2><hr />
				</div>
				<div class="media" v-for="(user, index) in users" :key="index">
					<div class="media-left">
						<img :src="user.avatar" class="media-left-img zh-shadow" />
						<h2>{{ user.nickname }}</h2>
					</div>
					<div class="media-left">
						<button class="guan">+ 关注</button>
						<div class="">
							<span class="di">{{ user.articles }}篇文章</span>
							<span class="jian">{{ user.follows }}人关注</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="right"></div>			<!-- 右侧 -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/hot').then(res => {
			console.log(res.data.data);
			this.users = res.data.data;
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
	.btzy {
		font-family: '楷体';
		font-size: 30px;
	}
	.guan {
		width: 90px;
		height: 50px;
		background-color: #33FF33;
		font-family: '微软雅黑';
		border: 2px solid #33FF33;
		cursor: pointer;
		font-size: 18px;
		margin-top: 5px;
		border-radius: 50px; /*--设置圆弧型边框--*/
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
	.biaot {
		width: 97%;
		height: 60px;
		margin-left: 20px;
		border-radius: 10px; /*--设置圆弧型边框--*/
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
	.media{
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		text-align: center;
		width: 300px;
		height: 400px;
		margin-top: 25px;
		margin-left: 20px;
		border-radius: 8px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245);
	}
		
	.media-wraaper{
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
		margin: 0 auto; /*--自动适应-- */
		/*表示中部区域可以自由伸缩 可以简写成flex：1*/
		display: flex;
		flex: 1 1 auto;
		margin: 0 auto; /*--自动适应-- */
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
		flex: 1 1 auto;
	}
	.right {/*--右侧--*/
		/* height: 100%; */ /*--高度--*/
		flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
		/* background: #55d4eb; */ /*--设置背景颜色-- */
		display: flex;
		flex-direction: column;
	}
	.wenzhke {
		width: 100%; /*--设备宽度的百分百--*/
		margin: 0 auto; /*--自动适应-- */
		margin-top: 80px;
		/* 设置容器为flex（横向布局） */
		display: flex;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		background: rgb(255,255,255); /*--设置背景颜色-- */
		border-radius: 8px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
</style>
