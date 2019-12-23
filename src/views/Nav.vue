<template>
	<div>
		<div class="zh-nav">
			<div class="zh-nav-bar zh-fx-between">
				<ul>
					<button class="dropbtn"><router-link to="/index">主	页</router-link></button>
					<button class="dropbtn"><router-link to="/article">成长记录</router-link></button>
					<button class="dropbtn"><router-link to="/lear">学习工具</router-link></button>
					<div class="dropdown">
						<button class="dropbtn"><router-link to="/spa">个人空间</router-link></button>
						<div class="dropdown-content">
							<button class="dropbtn-tuying"><router-link to="/pic">图库</router-link></button>
							<button class="dropbtn-tuying"><router-link to="/mus">音乐</router-link></button>
							<button class="dropbtn-tuying"><router-link to="/ccta">影视</router-link></button>
						</div>
					</div>
					<!-- <button class="dropbtn"><router-link to="/tim">时间轴</router-link></button> -->
					<button class="dropbtn"><router-link to="/user">留言板</router-link></button>
					<!-- <li><router-link to="/index">主	页</router-link></li>
					<li><router-link to="/article">成长记录</router-link></li>
					<li><router-link to="/">学习工具</router-link></li>
					<li><router-link to="/collection">个人空间</router-link></li>
					<li><router-link to="/">个人作品</router-link></li>
					<li><router-link to="/">时间轴</router-link></li>
					<li><router-link to="/user">留言板</router-link></li> -->
				</ul>
				<div class="changeBox">
					<router-link to="/sign" v-if="this.user === null" class="sgin">去登录</router-link>
					<img :src="this.user.avatar" class="zh-avatar" v-if="this.user !== null" @click="details()"/>
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
		};
	},
	created: function() {
	},
	changeTab: function() {
	},
	methods: {
		details: function() {
			// 路由跳转
			this.$router.push('/uedt');
		},
		
		logout() {
			this.user = null;
			this.$router.push('/');
			alert('退出');
			localStorage.clear();
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
	.dropdown {
	  position: relative;
	  display: inline-block;			/*--行内，块级元素--*/
	}
	.dropbtn {							/*--按钮样式--*/
		background-color: rgb(23,31,35);
	    color: white;
	    padding: 20px;
		font-family: '楷体';
		font-size: 18px;
	    border: none;
	    cursor: pointer;
	}
	a{
		color: white;
	}
	.dropbtn-tuying {
		background-color: rgb(23,31,35);
		color: white;
 		padding: 20px;
		font-family: '楷体';
		width: 120px;
		font-size: 18px;
		border: none;
		cursor: pointer;
	}
	.dropdown-content {
	  display: none;			/*--隐藏元素（且元素不占用空间）--*/
	  position: absolute;
	  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);				/*--阴影效果--*/
	}
	.dropdown:hover .dropdown-content {
	  display: block;			/*--显示元素--*/
	}
	.sgin {
		font-family: '楷体';
		font-size: 18px;
		color: #FFFFFF;
	}
.changeBox {
	display: flex;
}
.tui {
	cursor: pointer;
	margin-left: 30px;
	padding-top: 10%;
	font-family: '楷体';
	font-size: 18px;
	color: #FFFFFF;
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
