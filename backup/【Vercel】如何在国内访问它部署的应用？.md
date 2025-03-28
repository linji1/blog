### 一、前言

在今年暑假的字节青训营的最终大项目的答辩当中，当我还在为我的前端项目如何部署到服务器而焦头烂额之时，许多牛人在描述自己的项目部署经历的时候只是随口的提了一句——使用  ` Vercel `  进行前端项目的一键部署。我寻思还有这么牛逼的玩意儿？吓得我赶紧去查了一下——有一说一这是我第一次对部署项目感到这么的简单和轻松，这玩意能够自动检测你在git上面的提交（需要指定分支），然后自动的进行重新构建并且重新部署，最最最重要的就是它还会自动生成一个免费的域名并且自带SSL证书也就是可以直接通过https进行访问。**这玩意不知道能省多少钱。

 
当天晚上我用这玩意一次性把我写的乱七八糟的一堆项目全都扔上去了，也是美滋滋的享受到了自动部署的安逸。我买的服务器就纯纯作为一个后端服务的提供者就好了；前端的应用一律用 ` vercel ` 一股脑扔上去就好了。

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022022.webp"`

 
但是，** ` vercel ` 在目前貌似已经禁止国内进行访问了。**别问，问就是一些相关的政策出台。。。那我那些扔上去的项目咋办啊？？？

 
我在找了一些资料之后，发现 ` vercel ` 实际上是允许用户自定义域名的，也就是说你如果有自己的域名你可以同时绑定在一起。

 
并且还有一个域名解析神器Cloudflare。引用我在找资料的时候知乎大神的介绍：

 

>  
 Cloudflare的主流服务是域名解析，简单来说就是当你输入 ` baidu.com ` 的时候告诉计算机它所指向的ip地址是什么。这也是一个可以白嫖的网站，因为基础版的域名解析也是免费的。虽然免费，功能却一样不少，甚至更安全更丰富。Cloudflare对域名解析的同时提供代理服务，隐藏真实的ip，保护站点免受不法攻击。

 
 你的应用在 ` vercel ` 部署之后会自动生成一个以 ` vercel.app ` 为后缀的域名，也支持自定义域名。自定义域名可以通过Cloudflare进行域名解析并利用代理服务达到访问 ` vercel ` 的目的。

 

 
因此，我们可以配合Cloudflare的域名解析，和在国内服务商购买好的域名，我们就可以将 ` vercel ` 部署的应用的自带域名代理到我们自己的域名，这样就可以**在国内访问我们的 ` vercel ` 应用**了。

 

### 二、将腾讯云域名DNS解析转移到Cloudflare进行

 

#### 一、准备一个自己的域名

 
既然是要代理到原来的域名，所以得准备一个自己在国内服务商购买的域名。具体的流程应该都清楚的吧也就不多说了，在腾讯云里面你只用登录控制台然后搜“域名注册”四个字就会提示你怎么操作了。唯一的要求就是你要付钱，我建议便宜点就行。

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022023.webp"`
 

#### 二、登录Cloudflare控制台并添加站点

 
前往[https://www.cloudflare.com/zh-cn](https://www.cloudflare.com/zh-cn )进行注册，有账号的直接登录。

 
进来之后看到如下页面，我之前加过一个站点所以会弹出来，没有的就可以不用管：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022024.webp"`

 
然后点击右侧的这个添加站点就好了，进入下一步，输入你要加的域名（就是你之前在腾讯云上面买好的）然后点击继续：

`Gmeek-imgbox="/assets1/file/2025/02/2025022025.webp"`
 
然后选择计划，一般无特殊需求直接白嫖然后点击继续：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022026.webp"`

 
接下来 Cloudflare 会自动扫描你的部分dns记录。我这个域名是刚刚买的还没有进行一些解析的操作，所以是没有记录的。点击继续：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022027.webp"`

 
**然后最关键的点来了，Cloudflare会自动生成两条dns地址，就是下面两个云右边的字符串，你得拿着这两个地址去换掉腾讯云原本的解析**：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022028.webp"`

 
至此，Cloudflare部分的工作告一段落。

 

#### 三、在腾讯云域名管理控制台更改[DNS服务器解析

 
接下来启动腾讯云域名管理后台[https://console.cloud.tencent.com/domain](https://console.cloud.tencent.com/domain )。我这边有一个是已经解析到cloudflare所以DNS状态变成了其他，我现在要改的这个 ` nullvideo.cn ` 待会儿也会变成其他。

`Gmeek-imgbox="/assets1/file/2025/02/2025022029.webp"`

 
点击“解析”按钮右边的“管理”按钮，进入域名管理页，找到DNS解析部分：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022030.webp"`

 
然后点击“修改DNS服务器”，把刚刚Cloudflare给我们的两个DNS地址黏贴到原本的DNS地址处：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022031.webp"`

 
保存然后等待dns缓存刷新即可，这可能需要1-24小时因为每个域名体质不一样。

 
然后回到 Cloudflare 控制台就好了。至此，更换完成了。

 

### 三、在Vercel上为自己部署好的前端应用添加新的域名解析

 

#### 一、将自己的应用通过vercel进行部署

 
这个就不在这里展开说了，你只要登录 ` vercel ` 的官网[https://vercel.com](https://vercel.com )注册或者登录账号，然后自己跟着它的指示一步步来，最不济可以去查一查资料。。。反正这里不展开说了，默认大家都已经有一个部署好了的 ` vercel ` 应用了。

 

#### 二、去Cloudflare添加域名解析记录

 
在 Cloudflare 添加 ` CNAME ` 类型的解析，比如这个项目就是把 ` nullvideo.cn ` 重定向到 ` null-video.vercel.app ` ，并打开 proxy 服务。我在这边为了对应根路径访问和www访问，两个都加上了。

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022032.webp"`

 

#### 三、对部署好的vercel应用添加除了自带域名的新域名解析

 
进入到部署好了的项目的主页，可以看到一个“Domain”的按钮，点击进入：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022033.webp"`

 
然后进入之后，输入你买好的域名然后点击Add：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022034.webp"`

 
选择默认的方案，也就是把根域名和 ` www ` 解析一起加上。

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022035.webp"`

 
添加之后会进行校验，校验完成了之后就可以进行访问了。。。**看起来是这样，实际上还是有问题的！！！**

 

#### 四、Vercel + Cloudflare = 重定向次数过多解决方案

 
你把域名解析添加好了，校验也通过了，然后你会直接点击访问：

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022036.webp"`

 
没错，你会遇到**重定向次数过多**的问题。

 
这其实是Cloudflare为添加的站点加密模式设置错误导致的。

 
进入 Cloudflare Dashboard，点击有问题的域名，打开左侧的 SSL/TLS 设置，在 Overview 中设置加密模式为完全或完全（严格）即可。

 
`Gmeek-imgbox="/assets1/file/2025/02/2025022037.webp"`

 
这样子之后你的 ` vercel ` 应用应该是可以正常的在国内进行访问了。