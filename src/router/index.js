import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'									//导航栏
import Index from '@/views/Index.vue'								//首页
import Collections from '@/views/Collections.vue'					//个人空间
import Space from '@/views/Space.vue'								//个人空间（主题）
import Picture from '@/views/Picture.vue'							//个人空间-图片
import Music from '@/views/Music.vue'								//个人空间-音乐
import Cctav from '@/views/Cctav.vue'								//个人空间-影视
import Articles from '@/views/Articles.vue'							//成长记录
import Users from '@/views/Users.vue'								//留言墙
import Learning from '@/views/Learning.vue'							//学习工具
import UserDetail from '@/views/UserDetail.vue'
import Sign from '@/views/Sign.vue'									//登入界面
import Back from '@/views/Back.vue'									//密码找回
import Gen from '@/views/Gen.vue'									//注册界面


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
				path: 'spa',
				component: Space,
				children: [
					{
						path: '/spa',
						redirect: 'coll'
					},
					{
						path: 'coll',
						component: Collections
					}
				]
			},
			{
				path: 'article',
				component: Articles,
			},
			{
				path: 'user',
				component: Users,
			},
			{
				path: 'lear',
				component: Learning,
			},
			{
				path: 'pic',
				component: Picture,
			},
			{
				path: 'ccta',
				component: Cctav,
			},
			{
				path: 'mus',
				component: Music,
			}
		]
	},
	{
		path: '/sign',
		component: Sign
	},
	{
		path: '/back',
		component: Back
	},
	{
		path: '/gen',
		component: Gen
	},
	{
		path: '/uedt',
		component: UserDetail
	}
]

const router = new VueRouter({
	routes
})

export default router