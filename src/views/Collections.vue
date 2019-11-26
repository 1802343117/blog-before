    
<template>
	<div class="container">
		<div class="media-wraaper ">
			<div class="media" v-for="(topic, index) in topics" :key="index">
				<div class="media-left">
					<img :src="topic.logo" class="bl-avatar-normal" />
					<h2>{{ topic.name }}</h2>
				</div>
				<div class="media-middle">
					<p>{{ topic.description }}</p>
					<button class="guan">关注</button>					
					<p class="kk">
						<span class="di">{{ topic.articles }}篇文章</span>
						<span class="jian">{{ topic.follows }}人关注</span>
					</p>	
	
				</div>
				<div class="media-right"><img :src="topic.avatar" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topics: []
			}
		},
		created() {
			this.axios.get('http://localhost:8080/api/topic/hot').then(res => {
				console.log(res.data.data);
				this.topics = res.data.data;
			});
		},
	    methods:{
			
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
	.media{
		width: 300px;
	}
		
	.media-wraaper{
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 33.3%;
	}
	
	.guan{
		height: 30px;
		width: 50px;
		margin-left: 50px;
		background-color: yellow;
		border-radius: 30%;
	}
	
	.jian{
		margin-left: 30px;
	}
	
</style>