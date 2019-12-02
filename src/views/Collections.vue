<template>
	<div class="main">
		<div class="left"></div>			<!-- 左侧 -->
		<div class="content">				<!-- 中间 -->
			<div class="wenzhke zh-shadow">
				<div class="biaot">
					<br><h2 class="btzy">图	库</h2><hr />
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL1.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL2.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL3.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL4.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL5.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL6.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL7.jpg" class="tukuai-img"/>
				</div>
				<div class="tukuai">
					<img src="../assets/img/LOL8.jpg" class="tukuai-img"/>
				</div>
			</div>
			
			<div class="yingyue zh-shadow">
				<div class="biaot">
					<br><h2 class="btzy">音	乐	盒</h2><hr />
				</div>
				<div class="tukuai">
					<img src="../assets/img/langbo.jpg" class="tukuai-img"/>
				</div>
			</div>
			
			<div class="yingyue zh-shadow">
				<div class="biaot">
					<br><h2 class="btzy">影	视</h2><hr />
				</div>
				<div class="tukuai">
					<img src="../assets/img/langbo.jpg" class="tukuai-img"/>
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
	.yingyue {
		width: 100%; /*--设备宽度的百分百--*/
		margin: 0 auto; /*--自动适应-- */
		margin-top: 30px;
		/* 设置容器为flex（横向布局） */
		display: flex;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		background: rgb(255,255,255); /*--设置背景颜色-- */
		border-radius: 8px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.tukuai {
		width: 300px;
		height: 300px;
		margin-top: 20px;
		margin-left: 20px;
		cursor: pointer;			/*--可点击--*/
		background: rgb(24,22,29); /*--设置背景颜色-- */
		border-radius: 8px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		box-shadow: 4px 8px 16px #aaa;
	}
	.tukuai-img {
		width: 100%;
		height: 100%;
		border-radius: 8px; /*--设置圆弧型边框--*/
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
	.biaot {
		width: 97%;
		height: 60px;
		margin-left: 20px;
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.btzy {
		font-family: '楷体';
		font-size: 30px;
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
