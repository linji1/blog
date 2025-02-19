网站首次访问或在移动端浏览器访问时，如果不输入`https://`，则会使用http访问，可配置重定向跳转到https。

### 1. 在[cloudflare仪表盘](https://dash.cloudflare.com/)点击`网站`➡`自己的域名`➡`规则`➡`重定向规则`

### 2. 点击`创建规则`，填入`规则名称`

### 3. 填入配置

![填入配置](/assets/file/2025/02/a2acd9c35c8003387c6ae.webp)

> [!NOTE]
> `concat()`  方法用于连接两个或多个数组。
`http.request.uri.path`  代表链接的路径

### 4. 点击`部署`

## 完成！

文章来源：https://blog.liyifan.xyz/post/http-zhong-ding-xiang-dao-https%E3%80%90cloudflare%E3%80%91.html