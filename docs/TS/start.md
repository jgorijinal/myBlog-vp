# 环境配置
## 项目中安装
项目中独立安装 typescript，这可以限定项目使用的 typescript 版本
```sh
yarn init -y
```
安装 typescript
```sh
yarn add -D typescript
```
查看版本
```sh
yarn tsc -v
```
## 编译TS
使用 tsc 命令可以将 ts 文件编译为js 文件，如果在编译过程中有 ts 错误将在命令行报出
```sh
tsc 1.ts  //会编译生成 1.js 文件
```
每次执行命令会过于繁琐 , 可以自动监听ts 文件内容并自动生成 js 文件
```sh
tsc 1.ts -w
```

## 配置文件
TS 支持对编译过程使用配置项自定义，要掌握TS 配置文件的创建与使用。
### 初始化
创建ts.config.json
```sh
tsc --init
```
配置项的定义进行监测
```sh
tsc -w 
```