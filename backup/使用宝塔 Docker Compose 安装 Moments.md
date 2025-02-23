`Gmeek-html<center><a href="https://github.com/kingwrcy/moments" target="_blank">极简朋友圈</a> | <a href="https://discussion.mblog.club/" target="_blank" style="">极简论坛</a> | <a href="https://m.mblog.club/" target="_blank">演示网址</a> | <a href="https://markdown.com.cn/" target="_blank">Markdown 教程</a><br>另一个多用户版： <a href="https://github.com/RandallAnjie/moments" target="_blank" style="">极简朋友圈</a> | <a href="https://moments.randallanjie.com/" target="_blank" style="">演示网址</a> | <a href="https://randallanjie.notion.site/2218a0eb29f4482e92a159b3c4a3147e?v=34be316502e14e96a40b1085d4593078&pvs=4" target="_blank">开发进度</a></center><strong>极简朋友圈 Moments 介绍：</strong><br><p>1、支持设置标签</p><p>2、支持上传图片，可以上传到服务器，也可以在后台开启上传到 S3</p><p>3、支持生成缩略图，但是目前只支持直接上传到服务器时生成缩略图，将在后续版本中支持上传到 S3 时生成缩略图</p><p>4、支持 Markdown 语法，但是目前只适配了常用的几个标签，将在后续版本中支持更多的标签</p><p>5、支持点赞</p><p>6、支持评论，可以在后台打开或关闭评论功能</p><p>7、支持回到顶部按钮，PC 端和手机端都有</p><p>8、多用户模式,后台可以自由开启是否运行注册多用户</p><p>9、支持在Linux/MacOS/Windows平台双击本地启动.</p><p>10、标签的定义,以#号开头,空格/空行结尾的中间的部分会被认为是标签.</p><p>11、完善了tag标签的选择,在memo发言的输入框里点击右键可以选择标签来插入.</p><p>12、默认用户名密码<font size="3" color="#ff3300"><strong>admin/a123456</strong></font>,登陆后后台可以修改.</p><strong>简易安装说明：</strong><br>1、安装<a href="https://www.bt.cn/new/download.html" target="_blank">宝塔</a>，正式版9.3.0 通用安装脚本`

```
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```
`Gmeek-html2、运行docker-compose命令<br><p>[1] 利用 FlashFXP 软件进入服务器，在服务器根目录下建立 moments 目录，将 docker-compose.yml 上传到这里。</p><b>docker-compose.yml 内容：</b>`

```
services:
  moments:
    image: kingwrcy/moments:latest
    container_name: moments
    restart: always
    environment:
      PORT: 3000
      JWT_KEY: "$JWT_KEY"
	  ENABLE_SWAGGER: true
    ports:
      - 3000:3000
    volumes:
      - /www/wwwroot/moments:/app/data
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
```

`Gmeek-html$JWT_KEY 在线生成<br>打开 <a href="https://tool.lu/uuid" target="_blank">https://tool.lu/uuid</a> 生成不带 - 的 UUID 作为 JWT_KEY。<br><br>ENABLE_SWAGGER，是否启用swagger文档，默认false,开启填true,启用之后访问路径/swagger/index.html即可<br>可以通过请求api获取数据并展示到前端，服务端的ip+端口+/swagger/index.html，默认的服务端（Windows）端口是37892，完整的地址如下: http://localhost:37892/swagger/index.html<br><br><div class="ImgLazyLoad-circle"></div><img data-fancybox="gallery" img-src="/assets/file/2024/12/2024122201.webp"><p>[2] 利用SSH工具远程进入服务器，进入到moments目录下，一定要进入到该目录下，命令是cd /XX你的Docker映射目录/moments/，进入目录后，我们来启动docker-compose，直接输入命令 <font size="3" color="#ff6600"><strong>docker-compose up</strong></font> 即可</p><div class="ImgLazyLoad-circle"></div><img data-fancybox="gallery" img-src="/assets/file/2024/12/2024122002.webp"><p>[3] 命令输入后开始跑代码，最后提示“ All migrations have been successfully applied.”后该Docker项目即安装完成。用你<b>服务器IP+3000端口即可访问</b>。</p><p>[4]<strong>反向代理（用域名直接访问）</strong></p><div class="ImgLazyLoad-circle"></div><img data-fancybox="gallery" img-src="/assets/file/2024/12/2024122003.webp"><div class="ImgLazyLoad-circle"></div><img data-fancybox="gallery" img-src="/assets/file/2024/12/2024122004.webp"><strong>篇外：</strong><br>1、查看系统里存在哪些docker<br>docker ps<br><br>2、找到 NAMES，用下面命令进入docker<br>docker exec -it linji /bin/sh<br><br>3、查看日志，环境变量配置LOG_LEVEL=debug<br>[root@VM-8-2-centos ~]# docker restart moments<br>moments<br>[root@VM-8-2-centos ~]# docker logs moments<br><strong>使用经验：</strong><br>1、在主页定位到你想要删除的帖子，点击这个帖子中你的头像（是头像不是昵称），进入到了单条帖子展示页面。页面右上角有三个点，点一下，下方会弹出<b>置顶、编辑、删除三个选项</b><br>2、#号开头的,空格/空行结尾的会被认为是标签.<br>3、在自定义CSS中加入<br>`

```
// [1]. 如何去除底部 github star?
.footer a[rel='noopener noreferrer']{display:none;}

// [2]. 即可完成代码高亮的强制换行
pre code { 
  word-break:break-all; 
}

// [3]. 修改上传图片之间的缝隙间距
div:has(> .full-cover-image-mult) {
  gap: 0.05rem !important; 
}

div.grid.gap-2:has(> div.relative) {
  gap: 0.05rem !important; 
}

// [4]. 如何更改全站字体
*{font-family: "LXGW WenKai Screen", sans-serif !important;}
```
`Gmeek-html5.重置密码<br>目前没有别的办法重置密码,只有修改数据库.见编辑SQLITE数据库.<br>或者任何能正常打开SQLITE数据库的工具都行,数据库见前面的环境变量部分.<br>打开<a href="https://bcrypt-generator.com/" target="_blank">bcrypt-generator</a>或者其他类似的bcrypt在线加密的网站,加密你的密码.<br>复制加密后的密码,编辑数据库,更新User表pwd字段,更新完后记得关掉5555端口的映射,执行npx prisma studio命令停止5555端口.<br><strong>在宝塔里升级 Moments</strong><br>`

<div class="ImgLazyLoad-circle"></div><img data-fancybox="gallery" img-src="/assets/file/2024/12/2024122005.webp">