在数字化时代，图片已成为我们日常沟通和表达的重要方式。无论是社交媒体、博客还是论坛，图片都是不可或缺的元素。然而，随着图片数量的不断增加，如何高效地存储和分享图片成为了一个难题。这时候，图床应运而生，成为解决这一问题的利器。

### 🌍一. 图床

#### ❄️1.什么是图床

图床，顾名思义，就是存储图片的“床”。它是一种在线服务，允许用户上传、存储和分享图片。通过图床，用户可以将图片上传到云端，然后获得一个链接，可以在任何地方分享这个链接，而不需要担心图片的存储和带宽问题。

#### ❄️2.图床能解决什么问题？ 

 - 存储问题：个人用户或者小型网站往往没有足够的服务器空间和带宽来存储和传输大量图片。图床提供了廉价甚至免费的图片存储解决方案，让用户可以无忧地存储大量图片。

 - 分享问题：图床使得图片分享变得更加简便。用户可以轻松地获得图片的链接，然后在任何地方分享这个链接，而不需要复杂的操作。这对于社交媒体、博客和论坛来说尤为重要。

 - 管理问题：图床通常提供图片管理的功能，用户可以组织和管理自己的图片，方便查找和使用。一些高级的图床还提供标签、分类等功能，让用户可以更高效地管理自己的图片。

 - 性能问题：图床往往拥有强大的服务器和CDN（内容分发网络），可以快速地向全球用户传输图片，提高图片的加载速度。这对于提升用户体验至关重要。

 - 安全性问题：一些图床提供图片防盗链功能，保护用户的图片不被未经授权的网站盗用。这对于保护用户的知识产权非常重要。

>
>   下面跟随着我的脚步，在gitHub上面搭建自己的图床，并且使用 PicGo 的可视化界面配置 GitHub 图床后，你可以在 Typora 中直接粘贴截图，Typora 会自动通过 PicGo 将图片上传到你的 GitHub 仓库。这样，你和他人就可以通过访问这些链接来共享图片，确保在发送文件时图片不会丢失。

### 🌍二. 在github上面创建图床

关于访问github速度慢的问题,在创建图床之前,先给大家分享一个工具Watt Toolkit [下载地址](https://steampp.net/ ) 安装之后直接启动就OK,这里就不过多演示.

2.1 创建仓库

 - 登录 GitHub。

 - 点击右上角的 “+” 号，选择 “New repository”。

![](/assets/file/2025/02/2025021701.webp)

 - 填写仓库名称，仓库描述写不写无所谓，选择仓库可见性（公开或私有）建议公开，然后点击 “Create repository”。

![](/assets/file/2025/02/2025021702.webp)

2.2 生成token令牌

 - 点击右上角的头像或照片。

 - 从下拉菜单中选择 “Settings”。

![](/assets/file/2025/02/2025021703.webp)

 - 在左侧菜单中，点击 “Developer settings”。

 - 在 “Developer settings” 页面中，点击 “Personal access tokens”。

![](/assets/file/2025/02/2025021704.webp)

 - 点击 “Generate new token” 按钮。

![](/assets/file/2025/02/2025021705.webp)

 - 在 “Note” 字段中，输入一个描述性名称，以便你记住这个令牌的用途。

 - 选择令牌的 “Expiration” 日期。你可以选择让令牌永不过期，或者设置一个过期日期。

 - 选择令牌的 “Scopes” 或权限。根据你使用令牌的目的，选择合适的权限。例如，如果你只需要访问仓库内容，可以选择 “repo” 权限。

 - 下划，点击 “Generate token” 按钮。

![](/assets/file/2025/02/2025021706.webp)

 - 一旦生成令牌，你将看到令牌的明文。请立即复制并保存这个令牌到一个安全的地方。这是你唯一一次看到这个令牌的机会。

 - 之后，你将无法查看这个令牌的明文，只能看到它是否仍然有效。
 ![](/assets/file/2025/02/2025021707.webp)

>
> 注意:
>
>  - 个人访问令牌非常敏感，应像密码一样保护。不要将其泄露给他人，也不要将其硬编码在代码中。
>
>  - 如果你怀疑令牌的安全性受到了威胁，应立即在 GitHub 设置中撤销该令牌。
>
>  - GitHub 令牌可以用于执行与你的 GitHub 账户相关的各种操作，因此请谨慎选择令牌的权限。
>

### 🌍三. PicGo

#### ❄️1. PicGo介绍

**一、什么是PicGo？**

PicGo 是一个开源的图片上传工具，支持多种图床服务，如七牛云、又拍云、SM.MS等。它可以帮助用户将本地图片上传到图床，并生成图片链接，方便在社交媒体、博客或论坛中分享。

**二、PicGo能解决什么问题？**

1. **图片上传**：PicGo可以快速上传本地图片到图床，节省用户手动上传的时间。
2. **图片管理**：PicGo支持图片的批量上传和管理，用户可以方便地查找和使用已上传的图片。
3. **图片链接生成**：PicGo在上传图片后，会自动生成图片链接，方便用户在各种平台上分享。
4. **图床切换**：PicGo支持多种图床服务，用户可以根据需要随时切换图床，灵活应对不同的需求。

#### ❄️ 2. 下载与安装

这里推荐山东大学的镜像网站：

[下载地址](https://mirrors.sdu.edu.cn/github-release/Molunerfinn_PicGo/v2.3.1/ ) | [PicGo GitHub地址](https://github.com/Molunerfinn/PicGo/releases )
 笔者是选择如图所示的下载资源
 ![](/assets/file/2025/02/2025021708.webp)

安装之后打开，我们进行配置图床。如果出现错误，往下先看常见的错误解决方法。

#### ❄️3. 配置图床 

 - 打开图床设置

 - 打开Github

![](/assets/file/2025/02/2025021709.webp)

 -  设定仓库名，实际上就是用户名+仓库名。这个仓库就是你刚刚在2.1中新建的仓库。

 -  设定分支名：就是你的仓库在哪个分支里，就填哪个分支。一般有main分支，master分支等。我这里是自己新创建的一个img分支。

 -  设定Token：就是刚刚在2.2中我们复制的Token字符串。将其填进去即可。

 -  设定存储路径，一般来说，它可以是你项目仓库中的一个文件夹。我们这里就统一设置成了img/

 -  设置自定义域名。这个是比较关键的。我们可以用一个免费的加速域名作为我们自定义域名。

![](/assets/file/2025/02/2025021710.webp)

> 那么你所设置的就应当为 ` https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名
>
> 这样从PicGo获取得到的链接就是经过jsDelivr代理得到的了，可以加快访问速度
>
>  需要注意的是，这里一定要设置成@，而不要设置成 / 我也是花了很长很长时间才搞明白。。。
>
>  设置成 / 以后，你会惊奇地发现，它在你的typora里面显示不了。。。
>
> 如果分支名是 main ,可以不用写 @分支名
>
> https://cdn.jsdelivr.net/gh/linji1/linji1.github.io/static/icon/一师一课转码工具.ico

配置完以后，就可以点击确定，然后也可以将其设置为默认图床。

![](/assets/file/2025/02/2025021709.webp)

这样我们就可以通过PicGo来上传我们的图片,在上传的时候，一定要注意，把steam++给关了,也就是我们上面推荐的工具.

然后，我们也可以对PicGo进行一系列的设置。

比如启用时间戳，这样在多次上传同一张图片的时候就不会有问题了。

![](/assets/file/2025/02/2025021711.webp)

#### ❄️3.错误解决

##### 问题1

1.打开Picgo，显示报错

![](/assets/file/2025/02/2025021712.webp)

2.解决方法：在文件管理系统]直接输入：%APPDATA%picgo,直接删除data.json文件（如果觉得不安全，可以备份)

3.重启即可

##### 问题2

1.picgo报错打不开，卸载重装后发现打不开软件界面，后台进程却有进程显示和发现存在某些版本安装不成功的现象

2.解决方案：发现c盘的C:\Program Files中存在一个picgo文件目录并没有被删除，删除picgo可以正常打开界面。

##### 问题3

2.picgo安装最新版本以后，按原来的配置无法正常上传图片，进入picgo设置->设置日志文件

```
------Error Stack Begin------
 RequestError: Error: getaddrinfo ENOTFOUND mynote123.oss-cn-guangzhou.aliyuncs.com.aliyuncs.com
     at new RequestError (G:\Typora\PicGo\resources\app.asar\node_modules\request-promise-core\lib\errors.js:14:15)
     at Request.plumbing.callback (G:\Typora\PicGo\resources\app.asar\node_modules\request-promise-core\lib\plumbing.js:87:29)
     at Request.RP$callback [as _callback] (G:\Typora\PicGo\resources\app.asar\node_modules\request-promise-core\lib\plumbing.js:46:31)
     at self.callback (G:\Typora\PicGo\resources\app.asar\node_modules\request\request.js:185:22)
     at Request.emit (node:events:394:28)
     at Request.onRequestError (G:\Typora\PicGo\resources\app.asar\node_modules\request\request.js:877:8)
     at ClientRequest.emit (node:events:394:28)
     at TLSSocket.socketErrorListener (node:_http_client:447:9)
     at TLSSocket.emit (node:events:394:28)
     at emitErrorNT (node:internal/streams/destroy:157:8)
 -------Error Stack End------- 
```
看错误是地址无法成功访问，复制地址去ping发现也无法打开，仔细观察发现多了.aliyuncs.com

于是删除存储区域的后缀，总结是旧版本和新版本的配置有差异性造成的（之前一直使用的是2.3.0版本）。

##### 问题4

1.鼠标双击图标后根本没反应

2.解决方法，找到下面的小图标，就可以打开了

![](/assets/file/2025/02/2025021713.webp)

### 🌍 四. Typora

Typora 是一款跨平台的Markdown编辑器，支持Windows、macOS和Linux操作系统。它以其简洁的界面和强大的功能，为用户提供了流畅的写作体验。Typora的最大特色是其实时预览功能，用户在编辑文本的同时，可以实时看到渲染后的效果。

#### ❄️一. 破解版安装

1.首先我们到官网下载Typora

>   https://www.typoraio.cn/

![](/assets/file/2025/02/2025021714.webp)

下划找到立即下载,下载之后按照流程安装完毕.

![](/assets/file/2025/02/2025021715.webp)

2.在刚刚安装的路径下找到js文件

>   D:\韩顺平循序渐进学java\Typora\resources\page-dist\static\js

![](/assets/file/2025/02/2025021716.webp)

如图所示,使用记事本打开.
将下面内容

>   e.hasActivated=“true”==e.hasActivated，

替换为:

>  e.hasActivated="true"=="true",

![](/assets/file/2025/02/2025021717.webp)

![](/assets/file/2025/02/2025021718.webp)

一定要保存,如果保存成功，那么修改时间会改变。

![](/assets/file/2025/02/2025021719.webp)

现在我们就可以打开Typora,显示已激活

![](/assets/file/2025/02/2025021720.webp)

~~3.但是有的用户会提示弹窗提示需要输入许可证激活，接下来我们继续操作。~~

~~根据下面的路径中进行操作：~~

>   ~~D:\韩顺平循序渐进学java\Typora\resources\page-dist~~

~~找到下图的html文件，用记事本打开~~

![](/assets/file/2025/02/2025021721.webp)

~~查找：~~

>  `  /body></html> ` 

~~替换为:这里建议直接复制~~ **（不要替换，替换后会直接将软件关闭）**

>  ` </body><script>window.onload=function(){setTimeout(()=>{window.close();},5);}</script></html> ` 

![](/assets/file/2025/02/2025021722.webp)

一定一定要保存,保持成功之后修改日期会发生变化

![](/assets/file/2025/02/2025021723.webp)

然后去这个路径下面找到对应的代码:

>   D:\韩顺平循序渐进学java\Typora\resources\locales\zh-Hans.lproj

![](/assets/file/2025/02/2025021724.webp)

查找:

>   “UNREGISTERED”:“未激活”,

修改为:

>   “UNREGISTERED”:" ",

在这里插入图片描述

现在我们的typora,就可以直接使用,不需要激活了.

#### ❄️二. 设置Typora实现自动上传

1、首先，点击【文件】->【偏好设置】

![](/assets/file/2025/02/2025021725.webp)

2、再次，选择【图像】。

然后按照下图所示，插入图片时选择上传图片。然后在上传服务内选择PicGo，并选择PicGo.exe的路径。

![](/assets/file/2025/02/2025021726.webp)

使用 PicGo 的可视化界面配置 GitHub 图床后，你可以在 Typora 中直接粘贴截图，Typora 会自动通过 PicGo 将图片上传到你的 GitHub 仓库。这样，你和他人就可以通过访问这些链接来共享图片，确保在发送文件时图片不会丢失。

### 🌍 五. 部署Vercel仓库

在Vercel官网登入/注册账户后，再链接Github，点击右侧的Add New选择Project，找到你刚刚创建的Github图片仓库，点击Import导入Project Name随便填写Framework Preset默认other，Root Directory默认./

在这里创建一个新项目

![](/assets/file/2025/02/2025021727.webp)

然后直接点击Deploy（部署）就好，进入Vercel仓库，点击Setting再点击Domain即可绑定自己的域名，默认的域名被DNS污染无法打开，然后点击Advanced，把Directory Listing打勾，等待域名解析完成就可以直接访问了，进入链接后就可以直接看到你仓库内的所有文件，同时访问速度也很快，算是Vercel送的CDN代理服务

隐私
如果你不想让其他人看到你图床下的所有图片，可以进行下面的设置

> 1、Vercel-仓库-Setting-Advanced-关闭Directory Listing
> 2、Github-仓库-Setting-将Public改成Private