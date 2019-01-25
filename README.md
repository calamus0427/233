# 233次元小程序

## 项目描述
- 基于微信小程序的电商平台卖家端，采用`wepy`框架开发；
- 项目实现了基本的电商管理后台功能；
- 目前后端数据是基于`easy-mock`的随机模拟数据；
- 目前只对接了部分接口，如果接口报错404，说明该接口还尚未配置Mock数据，后续会继续完善。

## 线上体验
![小程序](https://233.calamus.xyz/233%E6%AC%A1%E5%85%83%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg)



## 部分截图
![首页](https://233.calamus.xyz/image/233/233show1.jpeg)
![索引页](https://233.calamus.xyz/image/233/233show2.jpeg)
![个人信息管理](https://233.calamus.xyz/image/233/233show3.jpeg)

## 技术栈
- wepy
- weUI
- 小程序云开发

## 部署说明

### 安装环境
```
# 安装（更新） wepy 命令行工具。
npm install wepy-cli -g
# 安装依赖包
npm install
# 开发实时编译。
wepy build --watch
```

### 小程序工具说明
- 使用微信开发者工具-->添加项目，选择dist目录；
- 请修改APPID为自己的ID；
- 关闭ES6转ES5；
- 关闭代码压缩上传；

> [WePY开发文档参考](https://tencent.github.io/wepy/)
> [小程序云开发文档参考](https://tencent.github.io/wepy/)

## 功能清单

### 新番推荐
- [x] 首页轮播图
- [x] 广告
- [x] 新番推荐
- [x] 跳转详情

### 番剧索引
- [x] 分类；
- [x] 分类查询；
- [x] 查看详情；
- [ ] 搜索；

### 我的信息
- [ ] 登录；
- [ ] 追番信息存储；
- [ ] 动态心情；

## 组件说明
- [x] 星级评分；
- [x] 侧边栏滚动；
- [x] 番剧列表；
- [x] 滚动广告；

## 更新日志


## License
MIT

## 支持我
- 公众号
![公众号：世界第一帅蒲](https://cdn.calamus.xyz/wechat.jpg)
- 打赏
![支付宝](https://cdn.calamus.xyz/mayun.bmp)
![微信](https://cdn.calamus.xyz/mahuateng.bmp)
