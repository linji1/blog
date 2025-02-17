# 先决条件

假设你已经:

- [x] 拥有了一个域名.
- [x] 域名备案已解决.

# Cloudflare 添加域

我们进入 https://dash.cloudflare.com

![](https://github.com/linji1/file/raw/main/file/2025/02/401824633-65746e4c-33ac-42e5-8261-80b231cae4f2.webp)

输入自己的域名点击继续, 然后选择底部的 Free 计划.

![](https://github.com/linji1/file/raw/main/file/2025/02/401824864-7ac12093-dee3-4a9c-bd55-c124d0ac6453.webp)

复制 dns 名称服务器.

![](https://github.com/linji1/file/raw/main/file/2025/02/401824735-3fa17e93-d8ef-4271-b2f0-e2387a489601.webp)

然后转到你的域名提供服务商, 添加 dns 记录.

![](https://github.com/linji1/file/raw/main/file/2025/02/401824786-73aad798-1830-4bbf-b281-cda074f40485.webp)

# 填写 DNS 记录.

回到 Cloudflare 面板, 进入 dns 记录, 按照下图添加 `CNAME` 和 `A` 记录.

![](https://github.com/linji1/file/raw/main/file/2025/02/401824842-57ed2272-5e7e-4807-b3de-bde1b95d7040.webp)

```
185.199.108.153

185.199.109.153

185.199.110.153

185.199.111.153
```

# Github Page 设置自定义域名

![](https://github.com/linji1/file/raw/main/file/2025/02/401824864-7ac12093-dee3-4a9c-bd55-c124d0ac6453.webp)

填写并点击 Save 之后会提示你等待一会.

![](https://github.com/linji1/file/raw/main/file/2025/02/401824887-8087186c-2b32-4064-8b03-92308b063b75.webp)

提示`DNS check successful`代表完成, 之后就可以通过www+你的域名进行访问了.

![](https://github.com/linji1/file/raw/main/file/2025/02/401826725-d7e62e5d-32b5-4acd-86dc-432a971c2218.webp)

文章来源：https://gjkblog.us.kg/post/4.html