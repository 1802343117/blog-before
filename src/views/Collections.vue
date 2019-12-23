<template>
	<div class="main">
		<div class="left"></div>			<!-- 左侧 -->
		<div class="content">				<!-- 中间 -->
			<!-- <div class="wzk zh-shadow">
				<div class="wenzhke">
					<div class="grxq">
						<img src="http://1t.click/by2h" class="tox zh-shadow"/>
					</div>
					<div class="grxkp">
						<p class="kpnr">昵称：末世の刀魂</p>
						<p class="kpnr">职业：学生</p>
					</div>
					<div class="kojian">
						<button class="kojibut zh-shadow">图片</button>
						<button class="kojibut zh-shadow">音乐</button>
						<button class="kojibut zh-shadow">影视</button>
					</div>
				</div>
			</div> -->
			
			<div class="container">
				<div class="box">
					<div class="btzy zh-shadow">
						<p>数据统计</p><hr />
						<div>
							<p class="tjb">末世の刀魂：19-12-10 更新了空间</p>
							<p class="tjb">文章数： {{this.space.length}}</p>
							<p class="tjb">音乐单曲数： {{this.musics.length}}</p>
							<p class="tjb">图 片 数： {{this.gollery.length}}</p>
							<p class="tjb">影 视 数：{{this.cctav.length}}</p><br />
						</div>
					</div>
					<div class="btzy zh-shadow">
						<p>类别标签</p><hr />
						<div class="kapbuj">
							<button class="biaoq-3">古风音乐</button>
							<button class="biaoq-2">图片</button>
							<button class="biaoq-3">流行音乐</button>
						</div>
						<div class="kapbuj">
							<button class="biaoq-2">电影</button>
							<button class="biaoq-1">钢琴曲</button>
							<button class="biaoq-3">英雄联盟</button>
						</div>
						<div class="kapbuj">
							<button class="biaoq-1">皮卡丘</button>
							<button class="biaoq-2">电音</button>
							<button class="biaoq-3">驯龙高手</button>
						</div>
						<br />
					</div>
					<div class="btzy zh-shadow">
						<p>影视链接</p><hr />
						<div class="lianjie">
							<a href="https://v.qq.com/" class="lianjieys" target="_blank">腾讯资源</a>
						</div>
						<div class="lianjie">
							<a href="https://www.iqiyi.com/" class="lianjieys" target="_blank">爱奇艺资源</a>
						</div>
						<div class="lianjie">
							<a href="https://www.youku.com/" class="lianjieys" target="_blank">优酷资源</a>
						</div>
						<br />
					</div>
				</div>
				<div class="box-1">
					<div class="btzy-1-xwz">
						<p class="fbwz">发表文章</p><hr />
						<textarea class="xwzys" placeholder="写点东西吧~~~!" v-model="spaceDto.content"></textarea>
						<!-- <button class="xwz-jt">附加图片</button> -->
						<div class="kapbuj">
							<input type="text" placeholder="附加图片(请输入图片链接)" class="fujiaimg" v-model="spaceDto.additional"/>
							<button class="xwz-fb" @click="published(spaceDto)">发表</button>
						</div>
						<!-- <input type="text" placeholder="附加图片(请输入图片链接)" class="fujiaimg"/>
						<button class="xwz-fb" @click="published(spaceDto)">发表</button> -->
					</div>
					<div class="btzy-1 zh-shadow">
						<div class="kojwz" v-for="(spaces, index) in space" :key="index">
							<div class="kapbuj-bt">
								<img src="http://1t.click/by2h" class="kapbuj-tx"/>
								<div>
									<p class="kpnr">末世の刀魂</p>
									<p class="kpnr-rq">发表日期：</p>
								</div>
								<div class="kapbuj-wzan">
									<button class="kjwz-but"></button>
									<button class="kjwz-but-sc" @click="deletUser(spaces.id, index)"></button>
								</div>
							</div>
							<div class="kapbuj-wznr">
								<p class="kapbuj-wzbt">{{spaces.content}}</p>
								<img :src="spaces.additional" class="nrimg-1"/>
							</div>
							<div class="ssplk">
								<textarea class="sspl" placeholder="随便说点什么~~~" v-model="colmDto.content"></textarea>
								<button class="plfb" @click="postcolm(colmDto,spaces.id)">发表评论</button>
								<button class="plfb" @click="init(spaces.id, index)">查看评论</button>
							</div>
							<div class="plxx">
								<div v-show="flags[index]">
									<div v-for="(colms, index) in colm" :key="index">
										<div class="pluser">
											<img :src="colms.avatar" class="plusertx"/>
											<p class="username">{{colms.user_name}}</p>
											<button class="plsc" @click="deletColm(colms.article_id, index)">删除</button>
										</div>
										<div class="plnr">
											<p>{{colms.content}}</p>
										</div>
									</div>
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="box-2">
					<div class="btzy-2 zh-shadow">
						<p>推荐歌曲</p><hr />
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
						<br />
					</div>
				</div>
			</div>
		</div>
		<div class="right"></div>			<!-- 右侧 -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			space: null,
			musics: null,
			flags: [],
			colm: null,
			gollery: null,
			cctav: null,
			spaceDto: {
				content: null,
				additional: '',
				likes: 556
			},
			colmDto: {
				id: null,
				userid: null,
				content: null,
				username: null,
				avatar: null
			}
		};
	},
	created() {
		this.axios.get('http://localhost:8080/colm').then(res => {
			console.log(res.data.data);
			this.colm = res.data.data;
		});
		this.axios.get('http://localhost:8080/music').then(res => {
			console.log(res.data.data);
			this.musics = res.data.data;
			// alert(this.musics[1].cover)
		});
		this.axios.get('http://localhost:8080/space').then(res => {
			console.log(res.data.data);
			this.space = res.data.data;
			for (var i = 0; i < this.space.length; i++) {
				this.flags[i] = false;
				// alert(this.flags[i])
			}
		});
		this.axios.get('http://localhost:8080/gallery').then(res => {
			console.log(res.data.data);
			this.gollery = res.data.data;
		});
		this.axios.get('http://localhost:8080/cctav').then(res => {
			console.log(res.data.data);
			this.cctav = res.data.data;
		});
	},
	methods: {
		//查看评论
		init: function(id, index){
			// alert(index)
			if (this.flags[index]) {
				this.flags.splice(index, 1, false);
			} else {
				this.flags.splice(index, 1, true);
			}
			this.btnStatus = !this.btnStatus;
			
			this.axios.get('http://localhost:8080/colm/' + id).then(res => {
				console.log(res.data.data);
				this.colm = res.data.data;
				// alert(this.comm.length)
			});
		},
		
		//删除评论
		deletColm: function(article_id,index){
			// alert(article_id)
			// alert(index)
			if(this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			alert("a")
			if (this.user.id != this.colm[index].user_id) {
				// alert(this.user.id)
				// alert(this.comm[index].user_id)
				alert("抱歉-_-||你没有这个权限")
				return;
			}
			alert("b")
			//确认身份后，通过ID删除评论
			alert("ID为："+ article_id);
			var param = {
				id: article_id
			}
			var _this = this;
			this.axios.delete("http://localhost:8080/colm", 
			{
				params: param
			}).then(function(res){
				console.log(res.data.msg);
				_this.colm.splice(index,1);
				// 相当于界面刷新
				_this.$router.plus.push.go(0);
			});
		},
		
		//发表评论
		postcolm: function(colmDto,id){
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.colmDto.content == null) {
				alert("内容不能为空")
				return;
			}
			this.colmDto.id = id;
			// alert(this.colmDto.id)
			this.colmDto.userid = this.user.id;
			// alert(this.colmDto.userid)
			// alert(this.colmDto.content)
			this.colmDto.username = this.user.nickname;
			// alert(this.colmDto.username)
			this.colmDto.avatar = this.user.avatar;
			// alert(this.colmDto.avatar)
			
			// 评论信息完全符合要求则进行下面发表评论操作
			this.axios.post('http://localhost:8080/colm', JSON.stringify(this.colmDto)).then(response => {
				if (response.data.msg == '成功') {
					alert('提交成功');
					// 将后台的用户信息存入本地存储
					localStorage.colm = JSON.stringify(response.data.data);
					this.colm.push({
						avatar: JSON.parse(localStorage.getItem('user')).avatar,
						user_name: JSON.parse(localStorage.getItem('user')).nickname,
						content: this.colmDto.content
					});
					this.colmDto.content = '';
					// location.reload()
					// this.$router.plus.push.go(0);
				}
			});
		},
		
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
			
		
		//发表文章
		
		//发表文章
		published(spaceDto){
			if (this.user == null) {
				alert("请先去登入你的账号")
				return;
			}
			if (this.user.status != 1) {
				alert("抱歉-_-||你没有这个权限")
				return;
			}
			if (this.spaceDto.content == null) {
				alert("内容不能为空")
				return;
			}
			// 注册信息完全符合要求则进行下面注册操作
			this.axios.post('http://localhost:8080/space', JSON.stringify(this.spaceDto)).then(response => {
				if (response.data.msg == '成功') {
					// alert('提交成功');
					// 将后台的用户信息存入本地存储
					localStorage.space = JSON.stringify(response.data.data);
					// _this.$router.plus.push.go(0);
					this.space.push({
						avatar: JSON.parse(localStorage.getItem('user')).avatar,
						nickname: JSON.parse(localStorage.getItem('user')).nickname,
						content: this.spaceDto.content,
						additional: this.spaceDto.additional
					});
					this.spaceDto.content = '';
					this.spaceDto.additional = '';
				}
			});
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
	.username {
		width: 355px;
		letter-spacing: 0px;/*--字体间隔--*/
	}
	.plnr {
		width: 90%;
		margin-left: 30px;
		/* 设置容器为flex（横向布局） */
		display: flex;
		flex-wrap: wrap;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.plsc {
		width: 50px;
		height: 50px;
		margin-top: 5px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 25px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
	}
	.plusertx {
		width: 50px;
		height: 50px;
		margin-top: 5px;
		margin-left: 5px;
		margin-bottom: 5px;
		border-radius: 100px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.pluser {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 80%;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 50px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.plxx {
		width: 100%;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.plfb {
		width: 80px;
		height: 30px;
		margin-top: 10px;
		margin-right: 0px;
		margin-bottom: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 15px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
	}
	.sspl {
		width: 96%;
		height: 50px;
		font-size: 20px;
		margin-top: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.ssplk {
		width: 100%;
		text-align: center;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.fujiaimg {
		width: 40%;
		height: 40px;
		font-size: 20px;
		margin-top: 5px;
		margin-left: 10px;
	}
	.kjwz-but {
		width: 40px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
		background-image: url(http://1t.click/b9by);
		background-size: calc(100%);
	}
	.kjwz-but-sc {
		width: 40px;
		margin-right: 15px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #AAAAAA; /*--设置边框线--*/
		background-image: url(http://1t.click/b9bs);
		background-size: calc(90%);
	}
	.fbwz {
		margin-top: 10px;
		letter-spacing: 10px;/*--字体间隔--*/
	}
	.xwzys {
		width: 96%;
		height: 99px;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 20px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.xwz-fb {
		width: 80px;
		height: 40px;
		margin-top: 5px;
		margin-left: 290px;
		margin-bottom: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.xwz-jt {
		width: 80px;
		height: 40px;
		margin-left: 20px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
	}
	.kapbuj-bt {
		/* 设置容器为flex（横向布局） */
		display: flex;
		width: 100%;
		height: 80px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1.5px solid #000000; /*--设置边框线--*/
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
	.kojwz {
		width: 96%;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		background: rgb(255,255,255); /*--背景色--*/
		border-bottom: 3px solid #000000;
	}
	.kapbuj-tx {
		width: 65px;
		height: 65px;
		margin-top: 5px;
		margin-left: 5px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.kapbuj-wznr {
		/* text-indent:2em; */
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
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
	.lianjie {
		width: 90%;
		text-align: center;
		font-size: 20px;
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.lianjieys {
		color: rgb(14,9,11);
	}
	.biaoq-1 {
		width: 80px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-2 {
		width: 60px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.biaoq-3 {
		width: 100px;
		height: 35px;
		letter-spacing: 5px;
		margin-top: 10px;
		margin-left: 10px;
		cursor: pointer;			/*--可点击--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.tjb {
		font-family: '';
		font-weight: 500;
		font-size: 15px;
		letter-spacing: 0px;
		margin-left: 15px;
	}
	.xcimg {
		width: 300px;
		height: 200px;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.wbjz {
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		text-align: center;
		flex-wrap: wrap;                 /*--如果一行放不下，可以换行--*/
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
	.kapbuj {
		/* 设置容器为flex（横向布局） */
		display: flex;
	}
	.tximg {
		width: 100px;
		height: 100px;
		margin-top: 8px;
		margin-left: 15px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
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
	.btzy {
		width: 97%;
		margin-top: 10px;
		letter-spacing: 10px;
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.btzy-1 {
		width: 100%;
		margin-top: 10px;
		letter-spacing: 10px;
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.btzy-1-xwz {
		width: 100%;
		margin-top: 10px;
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.btzy-2 {
		width: 97%;
		margin-top: 10px;
		margin-left: 10px;
		letter-spacing: 10px;
		border: 2px solid #000000; /*--设置边框线--*/
		background: rgb(245,245,245); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.container {
		width: 100%;
		margin: 0 auto; /*--自动适应-- */
		/* margin-top: 15px; */
		display: grid; /*--设置布局为：grid--*/
		grid-template-columns: 25% 25% 25% 25%; /*--设置网格为：4列，大小--*/
		grid-template-rows: 100%; /*--设置网格为：1行，大小--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(129,131,136); */ /*--背景色--*/
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
	}
	.box {
		width: 100%;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		grid-column-start: 1; /*--从第1条边框线开始--*/
		grid-column-end: 2; /*--到第2条边框线结束--*/
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: #FFFFFF; */
	}
	.box-1 {
		width: 100%;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		grid-column-start: 2; /*--从第2条边框线开始--*/
		grid-column-end: 4; /*--到第4条边框线结束--*/
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: #FFFFFF; */
	}
	.box-2 {
		width: 100%;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		grid-column-start: 4; /*--从第4条边框线开始--*/
		grid-column-end: 5; /*--到第5条边框线结束--*/
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: #FFFFFF; */
	}
	.wzk {
		width: 100%; /*--设备宽度的百分百--*/
		height: 550px;
		margin: 0 auto; /*--自动适应-- */
		margin-top: 80px;
		border: 1px solid #000000; /*--设置边框线--*/
		background: rgb(129,131,136); /*--背景色--*/
		border-radius: 10px; /*--设置圆弧型边框--*/
	}
	.kojibut {
		width: 80px;
		height: 80px;
		margin-right: 15px;
		border-radius: 30px; /*--设置圆弧型边框--*/
	}
	.kojian {
		width: 300px;
		height: 80px;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		margin-top: -80px;
		margin-left: 140px;
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(245,245,245); */ /*--背景色--*/
	}
	.grxq {
		width: 100%;
		height: 100%;
		text-align: right;
		/* 设置容器为flex（横向布局） */
		display: flex;
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(245,245,245); */ /*--背景色--*/	
	}
	.kpnr {
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 5px;
	}
	.kpnr-rq {
		font-size: 15px;
		margin-top: 10px;
		margin-left: 15px;
		letter-spacing: 0px;
	}
	.grxkp {
		width: 180px;
		height: 90px;
		/* 将容器设置为纵向布局 */
		flex-direction: column;
		margin-top: -80px;
		margin-left: 860px;
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		/* border: 1px solid #000000; */ /*--设置边框线--*/
		/* background: rgb(245,245,245); */ /*--背景色--*/	
	}
	.tox {
		margin-top: 420px;
		margin-left: 1050px;
		width: 120px;
		height: 120px;
		border-radius: 10px; /*--设置圆弧型边框--*/
		border: 1px solid #000000; /*--设置边框线--*/
	}
	.wenzhke {
		width: 100%; /*--设备宽度的百分百--*/
		height: 500px;
		margin: 0 auto; /*--自动适应-- */
		background-image: url(http://1t.click/by8c);
		background-size: calc(100%);
		/* border-radius: 10px; */ /*--设置圆弧型边框--*/
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.main {
		width: 100%;
		margin: 0 auto; /*--自动适应-- */
		/*表示中部区域可以自由伸缩 可以简写成flex：1*/
		display: flex;
		flex: 1 1 auto;
		background-image: url(../assets/img/beijing.png);
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
		/* height: 1000px; */
		flex: 1 1 auto;
	}
	.right {/*--右侧--*/
		/* height: 100%; */ /*--高度--*/
		flex: 0 0 15%; /*--不放大，不缩小，固定宽400--*/
		/* background: #55d4eb; */ /*--设置背景颜色-- */
		display: flex;
		flex-direction: column;
	}
</style>
