## 默认加载

一般的 script 写法为：

```html
<script src="app.js"></script>
```

这种写法有一个问题：它会 **阻塞 HTML 的 DOM 构建**。

假如我们在 head 元素中使用了 script 脚本，它就会阻止后面元素的渲染，包括 body 元素，此时执行`document.querySeletor('body')` 拿到的是 null。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script>
    // 拿到 null
   console.log(document.querySeletor('body'));
  </script>
</head>
<body></body>
</html>
```

此外，当脚本足够大，加载执行足够久时，会导致页面长时间没能渲染出完整页面。

**这也是我们将业务代码脚本放到 body 最下边的原因，这样能确保脚本能够访问一个完整的 DOM 树，也不会阻止页面的渲染。**

缺点是，HTML 很长的时候，解析到脚本就会花上一点时间，然后才会请求对应的脚本资源。

不过通常来说，HTML 内容都比较简单，二者感受不到太大区别，除非你网很卡。

## defer 加载

```html
<script defer src="app.js"></script>
```

defer，“延迟” 之意。这里的延迟，指的是延迟执行脚本，下载则不会被阻塞。

需要注意的是， **defer 属性对内嵌脚本无效**。毕竟脚本内容就在 HTML 里了，完全不需要请求资源了好吧。

**给 script 标签添加了 defer 属性后，脚本不会阻塞 DOM 树的构建，会先下载资源，然后等待到在 DOMContentLoaded 事件前执行。**

DOMContentLoaded 事件的触发时机为初始 HTML 被构建完成时，此时 CSS、图片等资源不需要加载完，但我们的脚本要执行完。

**如果多个 script 设置了 defer 属性，这几个 script 的执行顺序和声明顺序相同，即最前面的脚本先执行**。并不是谁先下载谁先执行。

实际开发中，我们可以将业务代码脚本加上 defer 属性，放到更上层的 head 标签下。

这也是最新版 HtmlWebpackPlugin 插件的默认引入打包脚本的方式。

## async 加载

```html
<script async src="app.js"></script>
```

async，“异步” 之意。同样对内嵌脚本无效。

设置 async  后，脚本一旦被下载好了就会执行，不管什么时机。

适合与执行顺序无关的脚本，比如广告、网站流量分析脚本。

比如插入 Google 分析脚本：

```html
<script async src="//www.google-analytics.com/analytics.js"></script>
```

## 动态加载

还有一种用脚本加载脚本的特殊情况，这里也说一说。

```html
<script>
  const script = document.createElement('script');
  script.src = 'app-a.js';
  document.body.appendChild(script);
</script>
```

脚本里创建一个 script 元素，设置好 src，然后加载到 DOM 树上，接着脚本就会下载和执行了。

创建的 script 元素默认会给 async 设置为 true，即一旦下载好就立即执行。

如果你要加载有依赖关系的多个脚本，就需要将 async 设置为 false。

```html
<script>
  const script = document.createElement('script');
  // 取消 async 加载方式
  script.async = false;
  script.src = 'app-a.js';
  document.body.appendChild(script);

  const script2 = document.createElement('script');
  script2.async = false;
  script2.src = 'app-b.js';
  document.body.appendChild(script2);
</script>
<script>console.log('我还是所有脚本中最先执行的')</script>
```

这样写，就能保证先执行 app-a.js，再执行 app-b.js

但 **它无法做到比 HTML 中其他非动态加载的 script 脚本更早执行**，这点需要注意。

## 结尾

script 有三种常见加载模式：

- 默认加载：会阻塞 DOM 构建
- defer 加载：下载照旧，但执行延后
- async：下载完就立即执行，适合没有依赖的脚本

此外还有动态加载的脚本的情况，这种脚本默认为 async 加载形式，可通过将 async 属性设置为 false 来解除，让脚本顺序执行。