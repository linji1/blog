# jsDelivr 官网

> https://www.jsdelivr.com

# 先决条件

必须要创建一个 GitHub 仓库, 并且存放你需要加速的文件.

# 创建版本号(Releases)

进入仓库并创建 Releases:

![1](../assets/file/2025/02/401797022-d035adc5-9486-4288-9f9c-caf9163d90ba.webp)

名称建议规范一点.

![2](../assets/file/2025/02/401797087-6ca6a2e3-edf4-49b9-afe8-6d8b0d54a34b.webp)

# 创建标签(Tags)

创建 Tags 和 Releases 步骤一样.

# 使用方法

例如:

`https://cdn.jsdelivr.net/gh/[GitHub用户名]/[仓库名]@[版本号或者标签]/[文件路径]`

https://cdn.jsdelivr.net/gh/gjken/gjken.github.io/static/primer.min.css

| Key | Value
| - | -
| [GitHub 用户名] | 写你的 GitHub 用户名.
| [仓库名]  | 写你的 GitHub 仓库名称.
| [标签或分支] | 例如 `https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js`<br>都不写默认访问最新版本.</br>
| [文件路径] | 写你的 GitHub 仓库文件路径.

> [!Important]
> 省略版本号, 直接访问最新的资源, 不推荐在生产环境中使用.
> 如果源文件更新, cdn 加速后的文件内容不会更新那么快, 一般有12小时的延迟, ~~大概?~~

# 其它替代地址

Jsdelivr 国内的 CDN 服务被 DNS 污染了, 被指向了Google, Twitter 和 Facebook 的 IP 地址, 导致使用 CDN 服务加速的链接访问失败.

```css
fastly.jsdelivr.net
gcore.jsdelivr.net
testingcf.jsdelivr.net
test1.jsdelivr.net
```
文章来源：https://gjkblog.us.kg/post/3.html

------

## 关于jsdelivr 
> https://www.jsdelivr.com/

### jsdelivr CDN 和 GitHub 的关系
jsdelivr 是一个免费且可靠的内容分发网络（CDN）服务，允许开发者将静态资源存储在 GitHub 仓库中，并通过 jsdelivr 进行全球加速访问。
jsdelivr 能够通过提供一个 CDN 地址，将存储在 GitHub 仓库中的资源进行加速，从而使这些资源在全球范围内快速加载。

### 如何将 GitHub 项目与 jsdelivr 对应起来
将静态资源（如图片、JavaScript 文件、CSS 文件等）上传到 公开的 GitHub 仓库中。
例如，你可能有一个名为 my-project 的 GitHub 仓库，里面有一个 images 文件夹，存储了一些图片。

### 使用 jsdelivr CDN 进行访问
一旦资源上传到 GitHub 仓库中，你可以通过 jsdelivr 提供的 URL 访问这些资源。jsdelivr 提供了一个与 GitHub 项目相关联的 CDN 地址，该地址遵循以下格式：

```
e.g. https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/autoload.js

https://cdn.jsdelivr.net/gh/[GitHub用户名]/[仓库名]@[标签或分支]/[文件路径]
- [GitHub用户名]：GitHub用户名
- [仓库名]           ：GitHub仓库名称
- [标签或分支]   ：GitHub标签或分支（例如 main 或 v1.0）
- [文件路径]       ：文件路径
```

## 关于Github RAW 加速服务
### github的加速服务（raw.githubusercontent.com）
```
e.g. https://raw.githubusercontent.com/hst1189/live2d-widget/master/autoload.js

https://raw.githubusercontent.com/[GitHub用户名]/[仓库名]/[标签或分支]/[文件路径]
- [GitHub用户名]：GitHub用户名
- [仓库名]           ：GitHub仓库名称
- [标签或分支]   ：GitHub标签或分支（例如 main 或 v1.0）
- [文件路径]       ：文件路径
```
文章来源：https://blog.grapehut.us.kg/post/18.html