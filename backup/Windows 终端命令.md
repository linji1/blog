```
query user || qwinsta 查看当前在线用户
net user 查看本机用户
net user /domain 查看域用户
net view & net group "domain computers" /domain 查看当前域计算机列表 第二个查的更多
net view /domain 查看有几个域
net view \\\\dc 查看 dc 域内共享文件
net group /domain 查看域里面的组
net group "domain admins" /domain 查看域管
net localgroup administrators /domain /这个也是查域管，是升级为域控时，本地账户也成为域管
net group "domain controllers" /domain 域控
net time /domain
net config workstation 当前登录域 - 计算机名 - 用户名
net use \\\\域控(如 pc.xx.com) password /user:xxx.com\username 相当于这个帐号登录域内主机，可访问资源
ipconfig
systeminfo
tasklist /svc
tasklist /S ip /U domain\username /P /V 查看远程计算机 tasklist
net localgroup administrators && whoami 查看当前是不是属于管理组
netstat -ano
nltest /dclist:xx 查看域控
whoami /all 查看 Mandatory Label uac 级别和 sid 号
net sessoin 查看远程连接 session (需要管理权限)
net share 共享目录
cmdkey /l 查看保存登陆凭证
echo %logonserver% 查看登陆域
spn –l administrator spn 记录
set 环境变量
dsquery server - 查找目录中的 AD DC/LDS 实例
dsquery user - 查找目录中的用户
dsquery computer 查询所有计算机名称 windows 2003
dir /s *.exe 查找指定目录下及子目录下没隐藏文件
arp -a 查询当前环境
```