<template>
	<div>
		<div class="zh-nav">
			<div class="zh-nav-bar zh-fx-between">
				<ul class="zh-list">
					<li class="ys"><router-link to="/index">主页</router-link></li>
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
		<router-view class="content"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			// keywords: '',
			// slideList: [
			// 	{
			// 		url: '#',
			// 		description: 'one',
			// 		image: 'https://cdn.dribbble.com/users/329207/screenshots/7824170/media/cc77353e67ca46a4da78553330209a72.jpg'
			// 	},
			// 	{
			// 		url: '#',
			// 		description: 'two',
			// 		image: 'https://cdn.dribbble.com/users/63407/screenshots/7825858/media/547d13eb0522eabcbbaa6683c82bfe40.png'
			// 	},
			// 	{
			// 		url: '#',
			// 		description: 'three',
			// 		image: 'https://cdn.dribbble.com/users/1018201/screenshots/7816965/media/2ed92a6a7ee0017e28f3bbcaf88b8138.png'
			// 	}
			// ],
			// currentIndex: 0,
			// timer: null
		};
	},
	created: function() {
	},
	changeTab: function() {
		// this.isActive = !this.isActive;
		// this.selected = this.selected == 0 ? 1 : 0;
	},
	methods: {
		logout() {
			this.user = null;
			this.$router.push('/');
			alert('退出');
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
	.sgin {
		font-family: '楷体';
		font-size: 1.25rem;
		color: #FFFFFF;
	}
li {
	margin-right: 50px;
	font-family: '楷体';
	font-size: 1.25rem;
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
	height: 100%;
	overflow: hidden;
	margin-top: 90px; /* 上边距 */
	border-radius: 10px; /*--设置圆弧型边框--*/
}
.media {
	width: 300px;
}
.content {
	margin-top: 70px;
}

</style>
