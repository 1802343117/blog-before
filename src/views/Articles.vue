<template>
	<div class="container">
		<div class="media-wraaper">
			<div class="media" v-for="(article, index) in articles" :key="index">
				<div class="media-left">
					<img :src="article.avatar" class="bl-avatar-normal" />
					<p class="sub-title">{{ article.nickname }}</p>
				</div>
				<div class="media-middle">
					<h2>{{ article.title }}</h2>
					<p>{{ article.summary }}</p>
					<p>
						<span>{{ article.content }}</span>
					</p>
					<p class="kk">
						<i class="iconfont" style="color: #e53935;">&#xe64a;</i>
						<span class="di">{{ article.diamond }}</span>
						<i class="iconfont">&#xe666;</i>
						<span class="jian">{{ article.likes }}</span>
						<i class="iconfont">&#xe630;</i>
						<span>{{ article.comments }}</span>
					</p>	

				</div>
				<div class="media-right"><img :src="article.avatar" /></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://27177o16l2.wicp.vip:30039/api/articles/hot').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
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
	.container{
		margin-top: 100px;
	}
	.media-wraaper {
		width: 100%;
		height: 100px;
		padding: 10px;
	}
	.media {
		display: flex;
		align-items: stretch;
		justify-content: flex-start;
		border-bottom: 1px solid #ddd;
		border-radius: 5px;
		background-color: #fff;
		margin-bottom: 5px;
		padding-top: 5px;
		/* height: 250px; */
	}
	.media-left {
		flex: 0 0 15%;
		text-align: center;
		line-height: 50px;
		border-right: 1px solid #eee;
	}
	.bl-avatar-normal{
		height: 150px;
	}
		
	.media-middle {
		flex: 1 1 60%;
		padding-left: 10px;
		padding-right: 10px;
		line-height: 24px;
	}
	.media-middle h4 {
		font-weight: 600;
	}
	.media-middle p {
		font-size: 14px;
		color: #aaa;
	}
	.media-right {
		flex: 0 0 20%;
		text-align: center;
		margin-right: 10px;
	}
	.media-right img {
		width: 120px;
		height: 100px;
		border-radius: 10px;
	}
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1434161 */
	  src: url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.eot');
	  src: url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434161_x6ye9jb8msd.svg#iconfont') format('svg');
	}
	
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		}
         .di{
			 margin-right: 15px;
		 }
		 
		.jian{
			margin-right: 15px;
			
			
		}
		.kk{
			padding-top: 125px;
		}
	
</style>