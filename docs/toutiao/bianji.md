# 编辑资料
## 1. 创建页面并配置路由
![图片](../.vuepress/public/images/userprofile1.png)


1、创建 `views/user-profile/index.vue
![图片](../.vuepress/public/images/userprofile2.png)

![图片](../.vuepress/public/images/zl02.png)
2. 配置路由

![图片](../.vuepress/public/images/zl01.png)
## 2. 展示用户信息 
思路：

- 找到数据接口
- 封装请求方法
- 请求获取数据
- 模板绑定

1. 封装请求 
![图片](../.vuepress/public/images/gggg1.png)
![图片](../.vuepress/public/images/gggg2.png)

模板绑定
![图片](../.vuepress/public/images/gggg3.png)
## 3. 修改昵称
![图片](../.vuepress/public/images/unun.png)
一、准备弹出层

二、封装组件

三、页面布局

四、基本功能处理

五、更新完成

封装修改个人资料请求
![图片](../.vuepress/public/images/un0.png)

主页: 
![图片](../.vuepress/public/images/un1.png)
![图片](../.vuepress/public/images/un2.png)

封装修改昵称组件 src/user-profile/components/update-name.vue 
![图片](../.vuepress/public/images/un3.png)
![图片](../.vuepress/public/images/un4.png)
## 4. 修改性别 
![图片](../.vuepress/public/images/ugug.png)

[Picker 选择器组件](https://vant-ui.github.io/vant/v2/#/zh-CN/picker)

主页 : 
![图片](../.vuepress/public/images/ug1.png)
![图片](../.vuepress/public/images/ug2.png)

封装修改性别组件 components/update-gender.vue
![图片](../.vuepress/public/images/ug3.png)
![图片](../.vuepress/public/images/ug4.png)
## 5. 修改生日
主页 
![图片](../.vuepress/public/images/ub1.png)
![图片](../.vuepress/public/images/ub2.png)
封装修改生日组件 components/update-birthday.vue
![图片](../.vuepress/public/images/ub3.png)
![图片](../.vuepress/public/images/ub4.png)
![图片](../.vuepress/public/images/ub5.png)
## 6. 修改头像
### 6.1 图片上传预览
#### 1. 用原生 input 选择图片
![图片](../.vuepress/public/images/up1.png)
![图片](../.vuepress/public/images/up2.png)

#### 2. 选择完图片就显示出弹层

![图片](../.vuepress/public/images/up3.png)
![图片](../.vuepress/public/images/up4.png)
![图片](../.vuepress/public/images/up5.png)

#### 3. 弹层里的内容封装成组件 **update-photo.vue** 

![图片](../.vuepress/public/images/up6.png)

主页中使用此组件: 

![图片](../.vuepress/public/images/up7.png)
![图片](../.vuepress/public/images/up8.png)
![图片](../.vuepress/public/images/up9.png)
#### 4. 样式处理
![图片](../.vuepress/public/images/up00.png)
![图片](../.vuepress/public/images/up11.png)
![图片](../.vuepress/public/images/up12.png)
### 6.2 裁剪
方案一：结合服务端的图片裁切上传流程
![图片](../.vuepress/public/images/up001.png)

方案二：纯客户端的图片裁切上传流程

####  1. 初始化
[cropper.js 库](https://github.com/fengyuanchen/cropperjs)

![图片](../.vuepress/public/images/cro1.png)
![图片](../.vuepress/public/images/cro2.png)
![图片](../.vuepress/public/images/cro3.png)

![图片](../.vuepress/public/images/cro6.png)
![图片](../.vuepress/public/images/cro5.png)
#### 2. cropperjs 基本配置
[cropperjs 配置文档](https://github.com/fengyuanchen/cropperjs#options)
```
viewMode: 1,
dragMode: 'move',
aspectRatio: 1,
autoCropArea: 1,
cropBoxMovable: false,
cropBoxResizable: false,
background: false,
movable: true
```
![图片](../.vuepress/public/images/cro.png)

### 6.3 保存更新
#### 1
如果是基于**服务端的裁切**，则使用：[getData](https://github.com/fengyuanchen/cropperjs#getdatarounded) 方法，该方法得到裁切的区域参数
![图片](../.vuepress/public/images/getData0.png)
![图片](../.vuepress/public/images/getData.png)
把这些这些参数传给服务端, 服务端在进行处理

#### 2 
如果是**纯客户端的图片裁切**，则使用：[getCroppedCanvas](https://github.com/fengyuanchen/cropperjs#getcroppedcanvasoptions) 方法，该方法得到裁切之后的图片对象（类似于URL.createObjectURL 方法得到的文件对象）

先封装请求 user.js 
![图片](../.vuepress/public/images/ccc1.png)

![图片](../.vuepress/public/images/ccc2.png)
```
如果 Content-Type 要求是	application/json	，则 data 传普通对象 {}
如果 Content-Type 要求是	multipart/form-data	，则 data 传 FormData 对象
纵观所有数据接口，你会发现大多数的接口都要求 Content-Type 要求是	application/json
一般只有涉及到文件上传的数据接口才要求Content-Type 要求是	multipart/form-data
这个时候传递一个 FormData 对象
```

![图片](../.vuepress/public/images/ccc3.png)


