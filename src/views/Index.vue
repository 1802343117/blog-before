<template>
	<div class="beijing">
		<div class="main">
			<div class="left"></div>			<!-- 左侧 -->
		
			<div class="content">				<!-- 中间 -->
			<div class="box zh-shadow"><!--子级元素（box）-->
				<!-- <p>轮播</p> -->
				<div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
						<li v-for="(item,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
							<a :href="item.url">
								<img :src="item.image" :alt="item.description">
							</a>
						</li>
					</transition-group>
					<div class="carousel-items">
						<span v-for="(item,index) in slideList" :class="{active:index===currentIndex}" @mouseover="change(index)"></span>
					</div>
				</div>
			</div>
					
			<div class="container"><!--父级元素（container）-->
				<div class="box-1 zh-shadow"><!--子级元素（box）-->
					<ul class="xqdh">
						<li>个人博客</li>
						<li>CSS3|Html5</li>
						<li>网站建设</li>
						<li>推荐工具</li>
						<li>设计心得</li><hr size="6"/>
					</ul>
					<div class="conters">
						<div class="fq-1">
							<img src="../assets/img/1.jpg" class="fq-1-img zh-shadow"/>
						</div>
						<div class="fq-2">
							<li>
								<i></i>
								<a title="安静地做一个爱设计的女子">安静地做一个爱设计的女子</a>
								<p>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片</p>
							</li>
						</div>
					</div>
				</div>
				<div class="box-2 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>个人名片</p><hr />
					</div>
					<div class="grxq">
						<img src="../assets/img/1.jpg" class="tox zh-shadow"/>
						<p class="btzy">英雄联盟</p><hr />
						<i class="iconfont">&#xe626; 131275916</i><br /><hr />
						<i class="iconfont">&#xe6c3; 1802343117</i><br /><hr />
						<i class="iconfont">&#xe70e;131275916@qq.com</i><br /><hr />
						<i class="iconfont">&#xe605;wacasfas</i>
					</div>
				</div>
			</div>
					
			<div class="container-1"><!--父级元素（container-1）-->
				<div class="box-3 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>最新文章</p><hr />
					</div>
					<div class="media" v-for="(topic, index) in topics" :key="index">
						<div class="media-left">
							<img :src="topic.logo" class="media-img" />
						</div>
						<div>
							<h3 class="title">{{ topic.name }}</h3>
							<p class="wenz">{{ topic.description }}</p>
						</div>
					</div>
				</div>
				<div class="box-4 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>热搜文章</p><hr />
					</div>
				</div>
				<div class="box-5 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>推荐文章</p><hr />
					</div>
				</div>
			</div>
				<!-- <div class="carousel-wrap"> -->
					
				<!-- </div> -->
			</div>
			<div class="right"></div>			<!-- 右侧 -->
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			slideList: [
				{
					url: '#',
					description: 'one',
					image: 'http://pic1.win4000.com/wallpaper/2019-02-20/5c6cbc6b09ca7.jpg'
				},
				{
					url: '#',
					description: 'two',
					image: 'http://ojiastoreimage.bs2dl.huanjuyun.com/1920x1080/1525317072815_len158633.jpg'
				},
				{
					url: '#',
					description: 'three',
					image: 'http://5b0988e595225.cdn.sohucs.com/images/20181226/abc2228c63cb4b20a44fa0b8c07a6434.jpeg'
				}
			],
			currentIndex: 0,
			timer: null,
			topics: null,
			grmp: null
		};
	},
	created: function() {
		this.axios.get('http://localhost:8080/api/topic/hot').then(res => {
			console.log(res.data.data);
			this.topics = res.data.data;
		}),
		this.$nextTick(() => {						/*--轮播停顿时间--*/
			this.timer = setInterval(() => {
				this.autoPlay();
			}, 3000);
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
	.grxq {
		text-align: center;
	}
	.tox {
		margin-top: 5px;
		width: 100px;
		height: 100px;
		border-radius: 100px; /*--设置圆弧型边框--*/
	}
	.btzy {
		font-family: '楷体';
		font-size: 20px;
		margin-top: 5px;
	}
	.beijing {
		background-image: url(../assets/img/beijing.png);
	}
	.wenz {
		margin-top: 5px;
		margin-left: 10px;
	}
	.conters {
		margin: 0 auto; /*--自动适应-- */
		display: grid; /*--设置布局为：grid--*/
		width: 100%;
		height: 80%;
		margin-top: 15px;
		grid-template-columns: 35% 65%; /*--设置网格为：2列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
		/* border-right: 1px solid #000000; */
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* background: #008000; */ /*--设置背景颜色-- */
	}
	.fq-1 {
		grid-column-start: 1; /*--从第1条边框线开始--*/
		grid-column-end: 2; /*--到第2条边框线结束--*/
		padding: 5px 5px 5px 5px;     /*--内边距--*/
		margin-right: 5px;
		/* border-right: 1px solid #000000; */
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* background: #55D4EB; */ /*--设置背景颜色-- */
	}
	.fq-1-img {
		width: 90%;
		height: 100%;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #eeeeee; /*--设置边框线--*/
	}
	.fq-2 {
		grid-column-start: 2; /*--从第2条边框线开始--*/
		grid-column-end: 3; /*--到第3条边框线结束--*/
		height: 100%;
		margin-left: 5px;
		/* border-right: 1px solid #008000; */
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* background: #55D4EB; */ /*--设置背景颜色-- */
	}
	.fq-2-ol {
		margin-left: 10px;
	}
	li {
		margin-right: 50px;
		font-family: '楷体';
		font-size: 1.25rem;
	}
	.media{
		/* margin-right: 10px;*/
		margin: 0 auto; /*--自动适应-- */
		margin-top: 10px;
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 35% 65%; /*--设置网格为：2列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/	
	}
	.media-left {
		height: 100px;
			flex: 0 0 15%;
			display: flex;
			border-right: 1px solid #000000;
			border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.media-img {
		width: 90%;
		height: 90%;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.title {
		margin-left: 10px;
	}
	
	
	.main {
		width: 100%;
		margin: 0 auto; /*--自动适应-- */
		/*表示中部区域可以自由伸缩 可以简写成flex：1*/
		display: flex;
		flex: 1 1 auto;
		margin: 0 auto; /*--自动适应-- */
	}
	.container {
		width: 100%; /*--设备宽度的百分百--*/
		margin: 0 auto; /*--自动适应-- */
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 25% 25% 25% 25%; /*--设置网格为：4列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
	}
	.container-1 {
		width: 100%; /*--设备宽度的百分百--*/
		margin: 0 auto; /*--自动适应-- */
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 33.33% 33.33% 33.33%; /*--设置网格为：3列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
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
	
	.box {
		width: 100%; /*--图片大小：宽度--*/
		height: 450px; /*--图片大小：高度--*/
		margin-top: 20px;
		/* padding: 10px 10px 10px 10px; */ /*--内边距--*/
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #eeeeee; */ /*--设置边框线--*/
		/* background: #fb8c00; */
	}
	.box-1 {
		grid-column-start: 1; /*--从第1条边框线开始--*/
		grid-column-end: 4; /*--到第3条边框线结束--*/
		height: 300px; /*--图片大小：高度--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-right: 10px; /*--外边距（右边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
	}
	.box-2 {
		grid-column-start: 4; /*--从第1条边框线开始--*/
		grid-column-end: 5; /*--到第3条边框线结束--*/
		height: 300px; /*--图片大小：高度--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-left: 10px; /*--外边距（左边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
	}
	.box-3 {
		margin: 0 auto; /*--自动适应-- */
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-right: 20px; /*--外边距（右边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: #FFFFFF; /*--背景色--*/	
	}
	.box-4 {
		margin-top: 20px; /*--外边距（上边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: #FFFFFF; /*--背景色--*/
	}
	.box-5 {
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-left: 20px; /*--外边距（左边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background: #FFFFFF; /*--背景色--*/
	}
	.img-circle {
		/*--图片样式--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		width: 100px; /*--图片大小：宽度--*/
		height: 100px; /*--图片大小：高度--*/
	}
	
	/*详情导航*/
	.xqdh li {
		font-family: '楷体';
		font-size: 20px;
		margin-top: 5px;
		cursor: pointer;			/*--可点击--*/
		display: inline-block;
	}
	
	/*轮播*/
	.carousel-wrap {
		position: relative;
		width: 100%;				/*--宽度--*/
		height: 450px;			/*--高度--*/
		border-radius: 5px; /*--设置圆弧型边框--*/
		overflow: hidden;
	}
	
	.slide-ul {
		width: 100%;			/*--宽度--*/
		height: 100%;			/*--高度--*/
	}
	
	.slide-ul li {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
	}
	
	.slide-ul li img {
		width: 100%;
		height: 100%;
	}
	
	.carousel-items {
		z-index: 100;
		position: relative;
		top: -80px;
		text-align: center;
		font-size: 0;
	}
	
	.carousel-items span {
		display: inline-block;
		width: 50px;
		height: 6px;
		margin: 0 5px;
		background-color: #eee;
		cursor: pointer;
	}
	
	.carousel-items .active {
		background-color: #FFA500;
	}
	
	/* 动画 */
	.slide-enter-to {
		transition: all 1s ease;
		transform: translateX(0);
	}
	
	.slide-leave-active {
		transition: all 1s ease;
		transform: translateX(-100%)
	}
	
	.slide-enter {
		transform: translateX(100%)
	}
	
	.slide-leave {
		transform: translateX(0)
	}
	
/* 第三方图标 */
@font-face {
	font-family: 'iconfont'; /* project id 1474541 */
	src: url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.eot');
	src: url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.woff') format('woff'), url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1474541_e3yt5mn27n.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 20px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
</style>
