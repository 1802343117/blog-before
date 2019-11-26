<template>
	<div class="zh-row">
		<div class="zh-col-8">
			<div class="media" v-for="(article, index) in articles" :key="index">
				<div class="media-left">
					<p>{{ article.title }}</p>
					<span class="zh-meta">{{ article.content }}</span>
				</div>

				<div class="media-right">
					<img :src="article.avatar" class="sub-title" />
				</div>
			</div>
		</div>
		<div class="zh-col-2"></div>
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
	methods: {},
	computed: {}
};
</script>

<style scoped>
.media {
		display: flex;
		align-items: stretch;
		justify-content: flex-start;
		border-bottom: 1px solid #ddd;
		border-radius: 5px;
		background-color: #fff;
		margin-bottom: 5px;
		padding-top: 5px;		
	}
.media-left{
		flex: 1 1 60%;
		
}
.media-right{
	
	flex: 1 1 30%;
}
</style>