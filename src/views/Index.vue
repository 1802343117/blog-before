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
						<li v-for="(changetable,index) in changetableList" :key="index" @mouseover="changeTab(index)" :class="{dtys:index===cur}">
							<p class="">{{changetable.description}}</p>
						</li>
					</ul>
					<div class="conters" v-show="show&&selected===0" :key="index">
						<div class="sjtj">
							<img :src="article[0].cover" class="wzjs zh-shadow"/>
							<div class="wzjs-wz">
								<p style="text-indent:2em;">{{article[0].content}}</p>
							</div>
						</div>
					</div>
					<div class="conters" v-show="show&&selected===1" :key="index">
						<div class="sjtj">
							<img :src="article[3].cover" class="csml zh-shadow"/>
							<div class="csml-wz">
								<p style="text-indent:2em;">{{article[3].content}}</p>
							</div>
						</div><hr />
						<div class="sjtj">
							<div class="csml-wz">
								<p style="text-indent:2em;">{{article[2].content}}</p>
							</div>
							<img :src="article[2].cover" class="csml zh-shadow"/>
						</div>
					</div>
					<div class="conters" v-show="show&&selected===2" :key="index">
						<div class="sjtj">
							<img :src="article[1].cover" class="wzjs zh-shadow"/>
							<div class="wzjs-wz">
								<p style="text-indent:2em;">{{article[1].content}}</p>
							</div>
						</div>
					</div>
					<div class="conters" v-show="show&&selected===3" :key="index">
						<div class="sjtj">
							<div class="gjkp zh-shadow">
								<img :src="tool[10].cover" class="gjimg"/>
								<p class="gjname">{{tool[10].toolname}}</p>
							</div>
							<div class="gjkp zh-shadow">
								<img :src="tool[9].cover" class="gjimg"/>
								<p class="gjname">{{tool[9].toolname}}</p>
							</div>
							<div class="gjkp zh-shadow">
								<img :src="tool[8].cover" class="gjimg"/>
								<p class="gjname">{{tool[8].toolname}}</p>
							</div>
							<div class="gjkp zh-shadow">
								<img :src="tool[7].cover" class="gjimg"/>
								<p class="gjname">{{tool[7].toolname}}</p>
							</div>
							<div class="gjkp zh-shadow">
								<img :src="tool[6].cover" class="gjimg"/>
								<p class="gjname">{{tool[6].toolname}}</p>
							</div>
						</div>
						
					</div>
					<div class="conters" v-show="show&&selected===4" :key="index">
						<div class="sjtj">
							<img src="http://1t.click/b9hJ" class="wzjs zh-shadow"/>
							<div class="wzjs-wz">
								<p style="text-indent:2em;">这是一次创作，一副作品需要更多的心血，我对完美的杰作，情有独钟。在作品完美之前，我需要......等待。</p>
								<p style="text-indent:2em;">每一次创作我都必将竭尽全力，每一个细节，都应到位。</p>
								<p style="text-indent:2em;">我服务于一个挑剔的客户，她对没的追求远高于我。</p>
								<p style="text-indent:2em;">一串代码，几点样式，一个界面，一种独一的美~！</p>
								<p style="text-indent:2em;">此等丑陋，我无法忍受。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="box-2 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>个人名片</p><hr />
					</div>
					<div class="grxq">
						<img src="http://1t.click/by2h" class="tox zh-shadow"/>
						<div class="grxkp">
							<p class="kpnr">昵称：<br>末世の刀魂</p>
							<p class="kpnr">职业：学生</p>
						</div>
					</div>
						<div class="sjtj">
							<p class="kpnr-1">文章数量：12</p>
							<p class="kpnr-1">评论数量：34</p>
						</div>
						<div class="sjtj">
							<p class="kpnr-1">点赞数量：56</p>
							<p class="kpnr-1">访问数量：78</p>
						</div>	
				</div>
			</div>
					
			<div class="container-1"><!--父级元素（container-1）-->
				<div class="box-3 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>工具榜</p><hr />
					</div>
					<div class="media" v-for="(tools, index) in tool.slice(3)" :key="index">
						<div class="media-left">
							<img :src="tools.cover" class="media-img zh-shadow" />
						</div>
						<div class="media-wz">
							<p class="media-gjm">{{tools.toolname}}</p>
							<p class="media-xhrs">喜欢人数:{{ tools.likes }}</p>
						</div>
					</div>
				</div>
				<div class="box-4 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>我的文章</p><hr />
					</div>
					
					<div class="kojwz" v-for="(spaces, index) in space" :key="index">
						<div class="kapbuj-bt">
							<img src="http://1t.click/by2h" class="kapbuj-tx"/>
							<div>
								<p class="sykpnr">末世の刀魂</p>
								<p class="sykpnr-rq">发表日期：</p>
							</div>
							<div class="kapbuj-wzan">
								<button class="kjwz-but"></button>
								<button class="kjwz-butsc" @click="deletUser(spaces.id, index)"></button>
							</div>
						</div>
						<div class="kapbuj-wznr">
							<p class="kapbuj-wzbt">{{spaces.content}}</p>
							<img :src="spaces.additional" class="nrimg-1"/>
						</div>
					</div>
					
				</div>
				<div class="box-5 zh-shadow"><!--子级元素（box）-->
					<div class="btzy">
						<p>推荐歌曲</p><hr />
					</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[1].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[1].musictitle }}</p>
									<p class="wzys-1">{{musics[1].author}}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[2].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[2].musictitle }}</p>
									<p class="wzys-1">{{musics[2].author}}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[3].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[3].musictitle }}</p>
									<p class="wzys-1">{{musics[3].author}}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[5].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[5].musictitle }}</p>
									<p class="wzys-1">{{musics[5].author}}</p>
								</div>
							</div>
						</div>
						<div class="mp3ys">
							<div class="kapbuj">
								<img :src="musics[7].cover" class="tximg" />
								<div class="wbjz">
									<p class="wzys">{{ musics[7].musictitle }}</p>
									<p class="wzys-1">{{musics[7].author}}</p>
								</div>
							</div>
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
			article: null,
			tool: null,
			musics: null,
			grmp: null,
			space: null,
			show: true,
			// 选项卡
			cur: 0,
			selected: 0,
			changetableList:[
				{"description":"个人博客",},
				{"description":"CSS3|Html5",},
				{"description":"网站建设",},
				{"description":"推荐工具",},
				{"description":"设计心得",}
			]
		};
	},
	created: function() {
		// alert("恭喜注册成功,你的账号为:"+this.user.account)
		this.axios.get('http://localhost:8080/space').then(res => {
			console.log(res.data.data);
			this.space = res.data.data;
			// alert(this.musics[1].cover)
		});
		this.axios.get('http://localhost:8080/article').then(res => {
			console.log(res.data.data);
			this.article = res.data.data;
			// alert(this.article[0].id);
		}),
		this.axios.get('http://localhost:8080/tool').then(res => {
			console.log(res.data.data);
			this.tool = res.data.data;
			// alert(this.article[0].id);
		}),
		this.axios.get('http://localhost:8080/music').then(res => {
			console.log(res.data.data);
			this.musics = res.data.data;
			// alert(this.article[0].id);
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
		//删除空间文章
		deletUser: function(id, index) {
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.user.status != 1) {
				alert("抱歉-_-||你没有这个权限")
				return;
			}
				alert("ID为："+ id+ "索引为："+ index);
				var param = {
					id: id
				}
				var _this = this;
				this.axios.delete("http://localhost:8080/space", 
				{
					params: param
				}).then(function(res){
					console.log(res.data.msg);
					_this.tleave.splice(index,1);
					// 相当于界面刷新
					// this.$router.plus.push.go(0);
				});
				// location.reload()
			},
		
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
		},
		changeTab(index) {
			this.cur = index
			this.selected = this.cur
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
	.nrimg-1 {
		width: 100%;
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.kapbuj-wzbt {
		font-family: '';
		font-size: 16px;
		/* font-weight: 500; */
		margin-top: 15px;
		/* margin-left: 15px; */
		letter-spacing: 5px;/*--字体间隔--*/
		/* border-bottom: 2px solid #00BBDD; *//*--设置下边框线--*/
	}
	.kapbuj-wznr {
		/* text-indent:2em; */
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.kjwz-but {
		width: 40px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9by);
		background-size: calc(100%);
	}
	.kjwz-butsc {
		width: 40px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
		background-image: url(http://1t.click/b9bs);
		background-size: calc(90%);
	}
	.kapbuj-wzan {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 25%;
		height: 35px;
		margin-top: 30px;
		margin-left: 250px;
		/* border: 1.5px solid #000000; */ /*--设置边框线--*/
	}
	.sykpnr {
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 0px;
	}
	.sykpnr-rq {
		font-size: 15px;
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 0px;
	}
	.kapbuj-tx {
		width: 65px;
		height: 65px;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.kapbuj-bt {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 100%;
		height: 80px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.kojwz {
		width: 96%;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		background: rgb(255,255,255); /*--背景色--*/
		border-bottom: 3px solid #000000;
	}
	.wzys {
		letter-spacing: 0px;
		font-weight: 600;
		margin-top: 10px;
		margin-left: 20px;
	}
	.wzys-1 {
		letter-spacing: 0px;
		font-weight: 500;
		font-size: 18px;
		margin-top: 15px;
	}
	.wbjz {
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		text-align: center;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
	}
	.tximg {
		width: 100px;
		height: 100px;
		margin-top: 8px;
		margin-left: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.kapbuj {
		/* 设置容器为flex（横向布局） */
		display: flex;
	}
	.mp3ys {
		width: 95%;
		height: 120px;
		margin-top: 10px;
		margin-left: 8px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
	}
	.gjkp {
		width: 150px;
		height: 200px;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		text-align: center;
		margin-top: 20px;
		margin-left: 30px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		background: rgb(245,245,245); /*--背景色--*/	
		background-image: url(../assets/img/无标题.png);
		background-size: 150px 200px;
	}
	.gjname {
		width: 60px;
		margin-top: 10px;
		margin-left: 35px;
	}
	.gjimg {
		width: 100px;
		height: 100px;
		margin-top: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.wzjs {
		width: 300px;
		height: 220px;
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.wzjs-wz {
		width: 65%;
		height: 200px;
		/* 设置容器为flex（横向布局） */
		display: flex;                   /*--flex布局--*/
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		margin-top: 10px;
		margin-left: 10px;
	}
	.csml {
		width: 100px;
		height: 100px;
		margin-top: 10px;
		margin-left: 15px;
		margin-right: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.csml-wz {
		width: 85%;
		height: 100px;
		/* 设置容器为flex（横向布局） */
		display: flex;                   /*--flex布局--*/
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		margin-top: 10px;
		margin-left: 10px;
	}
	.sjtj {
		/* 设置容器为flex（横向布局） */
		display: flex;                   /*--flex布局--*/
	}
	p {
		margin-top: 0;
		margin-left: 0;
		font-size: 20px;
		font-weight: 400;
		font-family: '楷体';
	}
	.grxq {
		/* 设置容器为flex（横向布局） */
		display: flex;
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(245,245,245); */ /*--背景色--*/	
	}
	.tox {
		margin-top: 15px;
		margin-left: 10px;
		width: 120px;
		height: 120px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.grxkp {
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		width: 160px;
		height: 120px;
		margin-top: 15px;
		margin-left: 15px;
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(245,245,245); */ /*--背景色--*/	
	}
	.kpnr {
		margin-top: 15px;
		margin-left: 5px;
	}
	.kpnr-1 {
		font-size: 18px;
		font-weight: 380;
		margin-top: 25px;
		margin-left: 15px;
	}
	.btzy {
		font-family: '楷体';
		font-size: 20px;
		margin-top: 5px;
		letter-spacing: 10px;
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
		height: 88%;
		margin-top: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/	
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
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/	
	}
	.media-left {
		width: 120px;
		height: 120px;
	}
	.media-wz {
		text-align: center;
	}
	.media-gjm {
		width: 100px;
		font-weight: 600;
		font-size: 20px;
		margin-top: 25px;
		margin-left: 50px;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
	}
	.media-xhrs {
		font-size: 12px;
		margin-top: 25px;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
		text-align: center;
	}
	.media-img {
		width: 90%;
		height: 90%;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
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
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 25% 25% 25% 25%; /*--设置网格为：4列，大小--*/
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
		border: 2px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
	}
	.box-2 {
		grid-column-start: 4; /*--从第4条边框线开始--*/
		grid-column-end: 5; /*--到第5条边框线结束--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-left: 10px; /*--外边距（左边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
	}
	.box-3 {
		height: 1200px;
		grid-column-start: 1; /*--从第1条边框线开始--*/
		grid-column-end: 2; /*--到第2条边框线结束--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-right: 20px; /*--外边距（右边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
		background: #FFFFFF; /*--背景色--*/	
	}
	.box-4 {
		grid-column-start: 2; /*--从第2条边框线开始--*/
		grid-column-end: 4; /*--到第4条边框线结束--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-right: 10px;
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
		background: #FFFFFF; /*--背景色--*/
	}
	.box-5 {
		height: 720px;
		grid-column-start: 4; /*--从第4条边框线开始--*/
		grid-column-end: 5; /*--到第5条边框线结束--*/
		margin-top: 20px; /*--外边距（上边缘）--*/
		margin-left: 10px; /*--外边距（左边缘）--*/
		padding: 10px 10px 10px 10px; /*--内边距--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 2px solid #000000; /*--设置边框线--*/
		background: #FFFFFF;
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
	.dtys {
		 
		 display: flex;
		 justify-content: center;
		 color: #00BBDD;  
			  font-weight: 600;   
	
		 border-bottom: 2px solid #00BBDD;
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
