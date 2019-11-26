<template>
	<div class="container">
		<div class="media-wraaper">
			<div class="media" v-for="(user, index) in users" :key="index">
				<div class="media-left">
					<img :src="user.avatar" />
					<p class="sub-title">{{ user.nickname }}</p>
					<button>关注</button>
					<br>
					<span>{{user.introduction}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				users :[]
			}
		},
		created(){
			this.axios.get('http://localhost:8080/api/hot').then(res => {
				console.log(res.data.data);
				this.users = res.data.data;
			});
			
		},
		methods:{
			
		},
		computed:{
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
		height: 250px;
	}
	
	.media-wraaper{
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 33.3%;
	}
	.sub-title{
		display: flex;
	}
</style>