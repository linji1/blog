### 配置 Worker

进入[CloudFlare控制台](https://dash.cloudflare.com/)。

`Gmeek-imgbox="/assets1/file/2025/02/2025021901.webp"`

`Gmeek-imgbox="/assets1/file/2025/02/2025021902.webp"`

`Gmeek-imgbox="/assets1/file/2025/02/2025021903.webp"`

`Gmeek-imgbox="/assets1/file/2025/02/2025021904.webp"`

`Gmeek-imgbox="/assets1/file/2025/02/2025021905.webp"`

在编辑页面填写下方js代码，保存并部署即可

（ps:该代码为通用的反向代理代码，修改域名可以改为其他的镜像站（注：OpenAI无法使用此方法，请理性使用该功能，合法利用）

```
const TELEGRAPH_URL = 'https://github.com';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');

  const modifiedRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);

  // 添加允许跨域访问的响应头
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');

  return modifiedResponse;
}
```

`Gmeek-imgbox="/assets1/file/2025/02/2025021906.webp"`

接下来等待10min左右DNS更新。然后就可以访问你的域名来打开镜像站了

### 注意事项
1.保护好你的网站信息。免费版 Workers 每天有10w次调用额度，对于个人使用/4-5人使用绰绰有余。不建议公开网址，避免造成财产损失

2.反向代理不要用于 IP 检测较为严格的网站，容易封号。例如不能用于 OpenAI。

3.禁止用于非法用途。此脚本仅用为 Github 开源镜像加速