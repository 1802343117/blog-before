import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collections from '@/views/Collections.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Articles from '@/views/Articles.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Users from '@/views/Users.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Sign from '@/views/Sign.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Nav,
		children: [
			{
				path: '/',
				redirect: '/index'
			},
			{
				path: 'index',
				component: Index
			},
			{
				path: 'collection',
				component: Collections,
				// children: [{
				// 	path: ':id',
				// 	component: CollectionDetail
				// }]
			},
			{
				path: 'article',
				component: Articles,
				// children: [{
				// 	path: ':id',
				// 	component: ArticleDetail
				// }]
			},
			{
				path: 'user',
				component: Users,
				// children: [{
				// 		path: 'follows',
				// 		component: UserFollows
				// 	},
				// 	{
				// 		path: 'fans',
				// 		component: UserFans
				// 	},
				// 	{
				// 		path: ':id',
				// 		component: UserDetail
				// 	}
				// ]
			}
		]
	},
	{
		path: '/sign',
		component: Sign
	},	
]

const router = new VueRouter({
	routes
})

export default router