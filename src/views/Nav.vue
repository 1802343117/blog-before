<template>
	<div>
		<div class="zh-nav">
			<div class="zh-nav-bar zh-fx-between">
				<ul class="zh-list">
					<li><router-link to="/index">主页</router-link></li>
					<li><router-link to="/collection">专题</router-link></li>
					<li><router-link to="/article">文章</router-link></li>
					<li><router-link to="/user">作者</router-link></li>
				</ul>
				<div class="changeBox">
					<router-link to="/sign" v-if="this.user === null" class="sgin">去登录</router-link>
					<img :src="this.user.avatar" class="zh-avatar" v-if="this.user !== null" />
					<p @click="logout()" v-if="this.user !== null" class="tui">退出</p>
				</div>
			</div>
		</div>

		<div class="carousel-wrap">
			<transition-group tag="ul" class="slide-ul" name="slide">
				<li v-for="(item, index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
					<a :href="item.url"><img :src="item.image" :alt="item.description" /></a>
				</li>
			</transition-group>
			<div class="carousel-items"><span v-for="(item, index) in slideList" :class="{ active: index === currentIndex }" @mouseover="change(index)"></span></div>
		</div>

		<router-view class="zh-container" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			slideList: [
				{
					"url": "#",
					"description": "one",
					"image": "https://cdn.dribbble.com/users/329207/screenshots/7824170/media/cc77353e67ca46a4da78553330209a72.jpg"
				},
				{
					"url": "#",
					"description": "two",
					"image": "https://cdn.dribbble.com/users/63407/screenshots/7825858/media/547d13eb0522eabcbbaa6683c82bfe40.png"
				},
				{
					"url": "#",
					"description": "three",
					"image": "https://cdn.dribbble.com/users/1018201/screenshots/7816965/media/2ed92a6a7ee0017e28f3bbcaf88b8138.png"
				}
			],
			currentIndex: 0,
			timer: null
		};
	},
	created() {},
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
	}
};
</script>

<style scoped>
li {
	margin-right: 100px;
}
.changeBox {
	display: flex;
}
.tui {
	cursor: pointer;
	margin-left: 30px;
	padding-top: 7px;
}
.nav {
	width: 100%;
	height: 30px;
	position: fixed;
	top: 0;
	z-index: 50;
}
.carousel-wrap {
	position: relative;
	width: 100%;
	height: 755px;
	overflow: hidden;
}
.slide-ul {
	width: 100%;
	height: 100%;
}
.slide-ul li {
	position: absolute;
	top: 0;
	left: 0;
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
	background-color: #ffa500;
}
/* 动画 */
.slide-enter-to {
	transition: all 1s ease;
	transform: translateX(0);
}
.slide-leave-active {
	transition: all 1s ease;
	transform: translateX(-100%);
}
.slide-enter {
	transform: translateX(100%);
}
.slide-leave {
	transform: translateX(0);
}
</style>