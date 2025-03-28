## 内容简介
把萌萌哒的看板娘抱回家 (ノ≧∇≦)ノ | Live2D widget for web platform


## 添加内容
如果你是小白，或者只需要最基础的功能，那么只用将这下面代码加入 html 页面的 head 或 body 中，即可加载看板娘：
```
<script src='https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/jquery-ui@1.14.1/dist/jquery-ui.min.js'></script>
<script src='https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/autoload.js'></script>
```
autoload.js 会自动加载：`live2d.min.js` `waifu.min.css` `waifu-tips.min.js` `ModelDefine.js` 
详细参考：https://github.com/hst1189/live2d-widgetc

---

太可爱了就折腾了一下。。。。。。。

## 一. live2d-widget

### 1. 复制项目文件

[live2d-widget](https://github.com/stevenjoezhang/live2d-widget/tree/master)

> 虽然作者说可以一条代码一键部署
> ```
> <script src="https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
> ```
> 但是试了一下发现这cdn国内访问慢成~~shit~~，而且也不能自己配置文件

所以还是放到自己目录吧

比如我把[live2d-widget](https://github.com/stevenjoezhang/live2d-widget/tree/master)的文件上传到了`https://linji.org/live2d/`目录

### 2. 修改文件配置

只需要修改`autoload.js`即可

> [!IMPORTANT]
> 路径最后需要加上`/`

- `waifuPath`的值改为项目路径，我的就是`https://linji.org/live2d/`

- `tools`是看板娘右侧的小工具栏，按需修改

- `cdnPath`设置为`waifuPath的值+live2d_api/`，我的就是`https://linji.org/live2d/live2d_api/`
> 因为默认的cdn真的载不出来，`live2d_api`也得放在自己目录

> [!NOTE]
> 看板娘位置默认在左下角，通过修改`waifu.css`中的`#waifu`可修改位置
> 修改`waifu-tips.json`可以自定义气泡内的文字

## 二、live2d_api

[live2d_api](https://github.com/fghrsh/live2d_api)

### 1. 复制项目到`live2d`目录

我的在`https://linji.org/live2d/live2d_api/`

> 里面包含了几个开源的模型

### 2. 配置model_list.json来选择自己想要的模型（可选）
删除models内不需要的模型以及材质，同时删除message中的消息。比如变成这样：

```json
{
    "models": [
        [
            "HyperdimensionNeptunia/neptune_classic",
            "HyperdimensionNeptunia/nepnep",
            "HyperdimensionNeptunia/neptune_santa",
            "HyperdimensionNeptunia/nepmaid",
            "HyperdimensionNeptunia/nepswim",
            "HyperdimensionNeptunia/noir_classic",
            "HyperdimensionNeptunia/noir",
            "HyperdimensionNeptunia/noir_santa",
            "HyperdimensionNeptunia/noireswim",
            "HyperdimensionNeptunia/blanc_classic",
            "HyperdimensionNeptunia/blanc_normal",
            "HyperdimensionNeptunia/blanc_swimwear",
            "HyperdimensionNeptunia/vert_classic",
            "HyperdimensionNeptunia/vert_normal",
            "HyperdimensionNeptunia/vert_swimwear",
            "HyperdimensionNeptunia/nepgear",
            "HyperdimensionNeptunia/nepgear_extra",
            "HyperdimensionNeptunia/nepgearswim",
            "HyperdimensionNeptunia/histoire",
            "HyperdimensionNeptunia/histoirenohover"
        ]
    ],
    "messages": [
        "Nep! Nep! 超次元游戏：海王星 系列"
    ]
}
```

`models`的顺序就是切换的顺序，默认展示第一个元素中随机选择的一个模型，然后按顺序切换

> [!CAUTION]
> 原项目中的`waifu-tips.js`有个小bug，[默认modelId为1会导致在模型只有一个的情况下无法正确加载模型 #135](https://github.com/stevenjoezhang/live2d-widget/issues/135)，会导致只有一个模型时无法正确加载，替换为[waifu-tips.js](https://linji.org/live2d/waifu-tips.js)即可解决


## 三、加入`js`脚本

```js
if (window.innerWidth >= 1250) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://linji.org/live2d/autoload.js';
    document.body.appendChild(script);
}
```
> 小屏显示效果不好，限制在1250以上
> 把脚本加入`body`

## 效果图

![效果图](/assets1/file/2025/02/d2ac4a18283a91258ebc2.webp)

文章来源：https://blog.liyifan.xyz/post/wang-zhan-tian-jia-live2d-kan-ban-niang.html