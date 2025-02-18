Git 命令还真不少，列一下方便回顾与查找。

------

### 创建库

```
# 当前目录初始化为git库
git init

# 新建一个目录，初始化为git库
git init [project-name]

# 下载一个git库
git clone [url]
```

### 配置

- **.gitconfig** Git 配置文件，可以在用户主目录下（全局），也可以在仓库目录下
- **.gitignore** 过滤配置文件，告诉 Git 哪些文件不需要加入到版本管理中

设置的主要命令为 `git config`，加上参数 `--global` 则表示为全局配置，不使用则是修改当前仓库配置。

```
# 显示当前git配置
git config --list

# 编辑git配置文件，使用默认编辑器打开
git config -e [--global]

# 设置用户名和邮箱
git config [--global] user.name "your name"
git config [--global] user.email "your email"
```

### 增加删除文件

```
# 添加指定文件到暂存区
git add [file1] [file2]

# 添加指定目录到暂存区
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 删除工作区文件，并将删除放入暂存区
# PS:只能删除已经在版本库中的文件
git rm [file1] [file2]
```

### 提交文件

```
# 提交暂存区到仓库, 记录提交日志
git commit -m [message]

# 提交工作区上次commit的变化到仓库
git commit -a

# 整合-a和-m，一般的常用操作
git commit -am [message]

# 使用一次新的commit，合并上一次提交（反复修改）
git commit --amend -m [message]
```

### 撤销修改

```
# 撤销工作区某些文件的修改
git checkout -- [file1] [file2]

# 撤销工作区所有文件的修改
git checkout -- .

# 丢弃已经进入暂存区的修改, 回复到 HEAD 状态
git reset HEAD [file]

# 重置暂存区与工作区，与上一次commit保持一致
git reset -hard 
```

### 查看信息

```
# 显示当前变更的文件
git status

# 显示当前版本记录, -n为显示n行
git log [-n]

# 显示commit历史，以及对应发生变化的文件
git log --stat

# 查看某个文件的版本历史
git log --follow [file]

# 查看每一次diff内容
git log -p

# 查看某个文件的每一次diff内容
git log -p [file]

# 查看当前所有的改动
git diff

# 查看当前某个文件的改动
git diff [file1]

# 查看工作区与最新commit的差异
git diff HEAD

# 查看某次提交详细内容
git show [commit]

# 查看最近的几次提交
git reflog

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn
```

### 分支

在 `git branch` 的输出内容中，有一个分支，前面带有 `*` 号，这标识我们当前所在的分支

```
# 列出所有分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支
git branch [branch-name]

# 删除分支
git branch -d [branch-name]

# 切换到指定分支
git checkout [branch-name]

# 合并指定分支到当前分支
git merge [branch-name]

# 建立现有分支与远程分支关系
git branch --set-upstream [branch] [remote-branch]
```

### 标签

```
# 列出标签
git tag

# 新建标签
git tag [tag]

# 删除本地标签
git tag -d [tag]

# 查看tag信息
git show [tag]

# 提交标签
git push [remote] [tag]

# 提交所有标签
git push [remote] --tags
```

### 远程同步

```
# 下载远程仓库所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库信息
git remote show [remote]

# 增加一个远程仓库并命名
git remote add [short-name] [url]

# 取回仓库的变化，与本地分支合并
git pull [remote] [branch]

# 上传本地分支到远程仓库
git push [remote] [branch]

# 推送所有分支到远程仓库
git push [remote] --all
```

`git fetch` 和 `git pull` 之间的区别：

- `git fetch` 是仅仅获取远程仓库的更新内容，并不会自动做合并。
- `git pull` 在获取远程仓库的内容后，会自动做合并，可以看成 `git fetch` 之后 `git merge`。

### 参考资料

- https://segmentfault.com/a/1190000039147662
- https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html
- https://gist.github.com/guweigang/9848271#file-git_toturial
- https://segmentfault.com/a/1190000011673663

原文链接：https://pangwu86.com/posts/3646253715/