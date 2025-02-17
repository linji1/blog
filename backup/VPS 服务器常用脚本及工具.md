## 本文记录了一些 VPS 服务器常用的脚本和工具。欢迎评论区补充。不定时更新。

学会使用浏览器的查找功能！Ctrl+F

## DD 系统重装脚本：系统默认为 Debian 12
注意⚠在使用这些 DD 脚本后，请及时修改密码和端口！⚠

### moeclub 大佬的脚本
```shell
wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -d 12 -v 64 -p 密码 -port 端口 -a -firmware
```

### [leitbogioro](https://www.nodeseek.com/post-9383-1) 大佬的脚本（推荐）
```shell
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh && bash InstallNET.sh -debian 12 -pwd '密码'
```

### [beta.gs](https://git.beta.gs) 大佬的脚本
```shell
wget --no-check-certificate -O NewReinstall.sh https://raw.githubusercontent.com/fcurrk/reinstall/master/NewReinstall.sh && chmod a+x NewReinstall.sh && bash NewReinstall.sh
```

### [5k哥的脚本](https://soclearn.org/1keydd/) 风险警告：此人在 LOC 等论坛口碑不良，多次骂人。

### DD 成 Linux 系统（推荐、首选）
强烈建议使用 leitbogioro 大佬的  
512M 内存以上的成功率高达 100%。且可以自动配置 IPv6
```shell
curl -sSL https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh) -debian 12 -timezone "Asia/Shanghai" -swap "1024"
```
密码：`LeitboGi0ro`

### DD 成 Linux 系统 256M 内存可用
萌咖大佬的  
注意⚠️该脚本不支持 IPv6，只能自动配置 IPv4⚠️
```shell
wget --no-check-certificate -qO- 'https://moeclub.org/attachment/LinuxShell/InstallNET.sh') -d 9 -v 64 -a
```
系统：`Debian 9`  
密码：`MoeClub.org`

### DD 成 Windows（推荐、首选）
推荐使用 leitbogioro 大佬的  
前提：有 VNC，内存别太低。支持自动配置 v4v6
```shell
curl -sSL https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh) -windows 2019  -lang "cn"
```
想要别的版本，直接改就行 -windows 10/11/2012/2016/2019/2022  
密码：`Teddysun.com`

### DD 成 Windows，无 VNC 可用
如果没有 VNC，那你可以使用5k的脚本。  
具体可以查看这位大佬写的，非常详细 https://blog.tanglu.me/dd

## 服务器综合测试

### [融合怪](https://github.com/spiritLHLS/ecs)（推荐）
```shell
 curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh
```

## 性能测试

### [YABS](https://github.com/masonr/yet-another-bench-script)（推荐）
```shell
wget -qO- yabs.sh | bash
```

### 流量稀缺的服务器（不测试 iperf 网络）
```shell
curl -sL yabs.sh | bash -s -- -i
```

### Geekbench 5（不测试 Geekbench 6）
```shell
curl -sL yabs.sh | bash -s -- -5
```

### Geekbench 5，服务器流量稀缺（不测试 Geekbench 6、不测试 iperf 网络）
```shell
curl -sL yabs.sh | bash -s -- -5 -i
```

### [Geekbench 5](https://github.com/i-abc/GB5) 专测脚本，论坛大佬[@Google](https://www.nodeseek.com/post-17042-1) 开发
```shell
bash <(wget -qO- https://raw.githubusercontent.com/i-abc/GB5/main/gb5-test.sh)
```

### [LemonBench](https://github.com/LemonBench/LemonBench)
```shell
wget -qO- https://raw.githubusercontent.com/LemonBench/LemonBench/main/LemonBench.sh | bash -s -- --fast
```

### UnixBench.sh
```shell
wget --no-check-certificate https://github.com/teddysun/across/raw/master/unixbench.sh
```
```shell
chmod +x unixbench.sh
```
```shell
./unixbench.sh
```

## 网络线路测试

### hyperspeed 三网测速（推荐）（未开源）
```shell
bash <(curl -Lso- https://bench.im/hyperspeed)
```

### AutoTrace 三网回程线路显示（推荐）
```shell
wget -N --no-check-certificate https://raw.githubusercontent.com/Chennhaoo/Shell_Bash/master/AutoTrace.sh && chmod +x AutoTrace.sh && bash AutoTrace.sh
```

### backtrace 三网回程线路直接显示（小白用这个）
```shell
curl https://raw.githubusercontent.com/zhanghanyun/backtrace/main/install.sh -sSf | sh
```

### Bench 网络带宽及硬盘读写速率（国外部分+国内部分节点）
```shell
wget -qO- bench.sh | bash
```

### SuperBench.sh 网络带宽及硬盘读写速率（国内三网+Speedtest+Fast）
```shell
wget -qO- --no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superbench.sh | bash
```

### 网络专测 论坛大佬[@Google](https://www.nodeseek.com/space/591#/general) 开发
```shell
bash <(curl -sL https://raw.githubusercontent.com/i-abc/Speedtest/main/speedtest.sh)
```

## 超售测试

### 一键检测超售 [LOC 帖](https://hostloc.com/thread-1187330-1-1.html)
```shell
wget --no-check-certificate -O memoryCheck.sh https://raw.githubusercontent.com/uselibrary/memoryCheck/main/memoryCheck.sh && chmod +x memoryCheck.sh && bash memoryCheck.sh
```

### 移除 virtio_balloon 模块
```shell
rmmod virtio_balloon
```

### 内存填充测试
```shell
apt-get update
```
```shell
apt-get install wget build-essential -y
```
```shell
wget https://raw.githubusercontent.com/FunctionClub/Memtester/master/memtester.cpp
```
```shell
gcc -l stdc++ memtester.cpp
```
```shell
./a.out
```

## 流媒体测试

### RegionRestrictionCheck（推荐）
```shell
bash <(curl -L -s check.unlock.media)
```

### 流媒体解锁改（加入了原生/DNS 解锁检测）
```shell
bash <(curl -L -s media.ispvps.com)
```

### OpenAI 解锁检测
```shell
bash <(curl -Ls https://github.com/ludashi2020/OpenAI-Checker/raw/main/openai.sh)
```

## BBR 加速

### 一键开启 BBR（适用于较新的 Debian、Ubuntu）
```shell
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
```
```shell
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
```
```shell
sysctl -p
```
```shell
sysctl net.ipv4.tcp_available_congestion_control
```
```shell
lsmod | grep bbr
```

### Linux-NetSpeed（锐速/BBRplus/BBR 魔改版）
```shell
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
```
```shell
chmod +x tcp.sh
```
```shell
./tcp.sh
```

### [ylx](https://blog.ylx.me/archives/783.html) 大佬的锐速/BBRPLUS/BBR 2
```shell
wget -O tcpx.sh "https://github.com/ylx2016/Linux-NetSpeed/raw/master/tcpx.sh" && chmod +x tcpx.sh && ./tcpx.sh
```

## 常用软件

### Docker
```shell
curl -sSL https://get.docker.com/ | sh
```

### 哪吒探针 [官网](https://nezha.wiki/)
```shell
curl -L https://gitee.com/naibahq/nezha/raw/master/script/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```

### Alist V3 一键安装 [官网](https://alist.nn.ci/zh)
```shell
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

### Aria 2 一键安装脚本
```shell
wget -N git.io/aria2.sh && chmod +x aria2.sh && bash aria2.sh
```

### X-UI
```shell
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)
```

### Xray
```shell
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```

### qBittorrent 4.3.9
[安装教程](https://hostloc.com/thread-1024684-1-1.html)

## 其他

[VPS 剩余价值计算器 @nanyi](https://ggss.eu.org/)  
[北上广四网 TCPing 可用地址](https://www.nodeseek.com/post-56429-1)

### moerats 大佬的添加 swap 脚本
```shell
wget https://www.moerats.com/usr/shell/swap.sh && bash swap.sh
```

### spiritlhl 大佬的 zram 内存压缩脚本
```shell
curl -L https://raw.githubusercontent.com/spiritLHLS/addzram/main/addzram.sh -o addzram.sh && chmod +x addzram.sh && bash addzram.sh
```

### CloudFlare WARP 脚本 添加 IPv4/IPv6 网络
```shell
wget -N https://raw.githubusercontent.com/fscarmen/warp/main/menu.sh && bash menu.sh
```

### fail2ban 服务器 SSH 防爆破
```shell
wget https://raw.githubusercontent.com/FunctionClub/Fail2ban/master/fail2ban.sh && bash fail2ban.sh 2>&1 | tee fail2ban.log
```

### 独立服务器硬盘时间
```shell
wget -q https://github.com/Aniverse/A/raw/i/a && bash a
```

### 宝塔一键挂载硬盘脚本
```shell
wget -O auto_disk.sh http://download.bt.cn/tools/auto_disk.sh && bash auto_disk.sh
```

### acme.sh 生成免费证书
```shell
curl https://get.acme.sh | sh
```

### 剑皇刷流量脚本
```shell
wget https://cdn.jsdelivr.net/gh/maintell/webBenchmark@releases/download/0.6/webBenchmark_linux_x64
```
```shell
chmod +x webBenchmark_linux_x64
```
```shell
./webBenchmark_linux_x64 -c 64 -s http://链接.jpg
```

### 腾讯云删除监控
```shell
sudo -i
```
```shell
systemctl stop tat_agent
```
```shell
systemctl disable tat_agent
```
```shell
/usr/local/qcloud/stargate/admin/uninstall.sh
```
```shell
/usr/local/qcloud/YunJing/uninst.sh
```
```shell
/usr/local/qcloud/monitor/barad/admin/uninstall.sh
```
```shell
rm -f /etc/systemd/system/tat_agent.service
```
```shell
rm -rf /usr/local/qcloud
```
```shell
rm -rf /usr/local/sa
```
```shell
rm -rf /usr/local/agenttools
```
```shell
rm -rf /usr/local/qcloud
```
```shell
process=(sap100 secu-tcs-agent sgagent64 barad_agent agent agentPlugInD pvdriver )
```
```shell
for i in ${process[@]}
do
  for A in $(ps aux | grep $i | grep -v grep | awk '{print $2}')
  do
    kill -9 $A
  done
done
```

### 测试 25 端口是否开放
```shell
telnet smtp.aol.com 25
```

### 测试 IPv4 优先还是 IPv6 优先
```shell
curl ip.p3terx.com
```

原文地址:
> [【脚本收集】常用脚本大全](https://archives.vip/174.html) - 档案VIP  
> [【持续更新】常用脚本大全](https://www.nodeseek.com/post-75302-1) - NodeSeek