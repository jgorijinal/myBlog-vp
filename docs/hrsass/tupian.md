# 图片上传预览及打印
## 1. 封装上传图片组件 - 上传组件需求分析
梳理整个的上传过程 

**初始化cos对象参数**

| 名称      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| SecretId  | 开发者拥有的项目身份识别 ID，用以身份认证，可在 [API 密钥管理](https://console.cloud.tencent.com/capi) 页面获取 |
| SecretKey | 开发者拥有的项目身份密钥，可在 [API 密钥管理](https://console.cloud.tencent.com/capi) 页面获取 |

> 注意，上述的参数我们在本次开发过程中，直接将参数放置在前端代码中存储，但是腾讯云本身是不建议这么做的，因为**`敏感信息`**放在前端很容易被捕获，由于我们本次是测试研发，所以这个过程可以忽略
>
> 正确的做法应该是，通过网站调用接口换取敏感信息

[相关文档](https://cloud.tencent.com/document/product/436/11459)

实例化 上传sdk

```js
var cos = new COS({
    SecretId: 'COS_SECRETID', // 身份识别 ID
    SecretKey: 'COS_SECRETKEY', // 身份密钥
});
```

> 到目前为止，我们上传图片准备的内容就已经OK，接下来，我们在**`src/componets`** 新建一个**`ImageUpload`** 组件

该组件需要满足什么要求呢？

1. 可以显示传入的图片地址
2. 可以删除传入的图片地址
3. 可以上传图片到云服务器
4. 上传到腾讯云之后，可以返回图片地址，显示  
5. 上传成功之后，可以回调成功函数

看似需求很明确，但是它真正的实现很复杂，通过一个图来看一下
![图片](../.vuepress/public/images/tupianliucheng.png)
从上图中，可以看到，实际上是有两种场景的，本地场景和已经上传的场景

## 2. 封装上传组件 - 代码实现
实现上传组件的代码部分
> JavaScript SDK 需浏览器支持基本的 HTML5 特性（支持 IE10 以上浏览器），以便支持 ajax 上传文件和计算文件 MD5 值。

### 2.1 新建文件上传组件
**安装JavaScript SDK**

```bash
$ npm i cos-js-sdk-v5 --save
```

**新建上传图片组件** **src/components/ImageUpload/index.vue**
> 上传组件，可以沿用 element的 el-upload 组件,并且采用照片墙的模式 **`list-type="picture-card"`** [el-upload](https://element.eleme.io/#/zh-CN/component/upload#zhao-pian-qiang)



**放置el-upload组件**

![图片](../.vuepress/public/images/upload01.png)

**全局注册组件**

![图片](../.vuepress/public/images/quanju55.png)
### 2.2 点击图片进行预览
#### **限定上传的图片数量 和 action**
[el-upload](https://element.eleme.io/#/zh-CN/component/upload#attribute)

![图片](../.vuepress/public/images/upload02.png)
> action 为什么给 #， 因为前面我们讲过了，要上传到腾讯云，需要自定义的上传方式, action 给个#防止报错

**预览图片实现思路:**

![图片](../.vuepress/public/images/preview1.png)
![图片](../.vuepress/public/images/onpreview.png)
![图片](../.vuepress/public/images/filelist.png)
![图片](../.vuepress/public/images/yulan1.png)
### 2.3 根据上传数量控制上传按钮
![图片](../.vuepress/public/images/shangchuan1.png)
**基本思路**: 计算属性 得到 this.fileList长度是否为 1 , 并用 :class 控制 display:none
![图片](../.vuepress/public/images/yige1.png)
![图片](../.vuepress/public/images/yige2.png)
![图片](../.vuepress/public/images/yige.png)
**注意**:这里 `<style>`不加 scoped
### 2.4 删除图片 和 添加图片
#### 删除图片

![图片](../.vuepress/public/images/onremove.png)

![图片](../.vuepress/public/images/onremove2.png)

![图片](../.vuepress/public/images/shanchutupian1.png)
#### 添加图片
![图片](../.vuepress/public/images/onchange1.png)
![图片](../.vuepress/public/images/tianjiatupian.png)

![图片](../.vuepress/public/images/shanchutianjia.png)
### 2.5 上传之前检查
> 控制上传图片的类型和上传大小， 如果不满足条件 返回false上传就会停止

![图片](../.vuepress/public/images/bu1.png)

![图片](../.vuepress/public/images/bu2.png)
![图片](../.vuepress/public/images/bu3.png)
### 2.6 上传动作调用上传腾讯云
**上传动作为el-upload的http-request属性**

```js
 :http-request="upload"

    // 自定义上传动作 有个参数 有个file对象，是我们需要上传到腾讯云服务器的内容
    upload(params) {
      console.log(params.file)
    }

```
![图片](../.vuepress/public/images/uploadfile1.png)

> 需要在该方法中，调用腾讯云的上传方法

[腾讯云文档地址](https://cloud.tencent.com/document/product/436/35649#.E7.AE.80.E5.8D.95.E4.B8.8A.E4.BC.A0.E5.AF.B9.E8.B1.A1)

身份 ID 和 密钥 可以通过腾讯云平台获取

登录 [访问管理控制台](https://console.cloud.tencent.com/capi) ，获取我的项目 SecretId 和 SecretKey

![图片](../.vuepress/public/images/jiandanshangchuan.png)

**实现代码** : 

![图片](../.vuepress/public/images/secret.png)
![图片](../.vuepress/public/images/upload555.png)

### 2.7 上传成功之后处理返回数据
> 如何处理返回成功的返回数据

确定要上传记录id
![图片](../.vuepress/public/images/shangchuanupload1.png)
> 处理返回数据

![图片](../.vuepress/public/images/shanchuupload2.png)
###  2.8 上传的进度条显示
![图片](../.vuepress/public/images/jindutiao1.png)
> 为了再上传图片过程中显示进度条，我们可以使用element-ui的进度条显示当前的上传进度

**放置进度条**
![图片](../.vuepress/public/images/progress1.png)
![图片](../.vuepress/public/images/progress12.png)
![图片](../.vuepress/public/images/progress2.png)
**通过腾讯云sdk监听上传进度**
![图片](../.vuepress/public/images/progress3.png)

通过上面的代码，会发现，把上传之后的图片信息都给了  **`fileList数据`** ，那么在应用时，就可以直接获取该实例的 **`fileList数据即可`**

## 3. 在员工详情中应用上传组件
###  3.1  将员工的头像和证件照赋值给上传组件
在 **`user-info.vue`** 中放置上传组件

**员工头像**

![图片](../.vuepress/public/images/sphoto1.png)

**读取时赋值头像**

![图片](../.vuepress/public/images/sphoto2.png)

**员工证件照**

![图片](../.vuepress/public/images/sphoto3.png)

**读取时赋值照片**

![图片](../.vuepress/public/images/sphoto4.png)
### 3.2 保存时处理头像照片和证件照的保存
**当点击保存更新时，获取图片的内容**
![图片](../.vuepress/public/images/save01.png)
**下同**
![图片](../.vuepress/public/images/save555.png)
## 4. 员工列表显示图片
![图片](../.vuepress/public/images/yuangongliebiao1.png)
> 这是因为有的员工的头像的地址为空，给img赋值空的src不能触发错误事件，针对这一特点，我们需要对指令进行升级

```js
export const imageerror = {
  inserted(el, bindings) {
    //   图片异常的逻辑
    //  监听img标签的错误事件  因为图片加载失败 会触发  onerror事件
    el.src = el.src || bindings.value

    el.onerror = function() {
      // 图片失败  赋值一个默认的图片
      el.src = bindings.value
    }
  },
  componentUpdated(el, bindings) {
    el.src = el.src || bindings.value
  }
}
```
## 5. 图片地址生成二维码
> 想完成这样一个功能，当我们拥有头像地址时，将头像地址生成一个二维码，用手机扫码来访问

```
npm i qrcode
``` 
> qrcode 的用法是

```js
QrCode.toCanvas(dom, info)
```

> dom为一个canvas的dom对象， info为转化二维码的信息

我们尝试将canvas标签放到dialog的弹层中

![图片](../.vuepress/public/images/erweima1.png)

在点击员工的图片时，显示弹层，并将图片地址转化成二维码
![图片](../.vuepress/public/images/erweima3.png)

![图片](../.vuepress/public/images/erweima2.png)
![图片](../.vuepress/public/images/erweima.png)
## 6. 打印员工信息
### 6.1 新建打印页面及路由
![图片](../.vuepress/public/images/dayin1.png)
![图片](../.vuepress/public/images/dayin2.png)

> 该页面内容实际上就是读取个人和详情的接口数据，根据传入的type类型决定显示个人还是岗位

type为 **`personal`**时显示个人，为 **`job`** 时显示岗位

#### 新建打印页面路由
![图片](../.vuepress/public/images/dayin3.png)

完成详情到打印的跳转
#### 个人
![图片](../.vuepress/public/images/dayin4.png)
#### 岗位
![图片](../.vuepress/public/images/dayin5.png)
### 6.2 用 vue-print-nb 进行打印
首先，打印功能我们借助一个比较流行的插件

```bash
$ npm i vue-print-nb
```

> 它的用法是 

首先注册该插件

```js
import Print from 'vue-print-nb'
Vue.use(Print);
```
![图片](../.vuepress/public/images/vprint0.png)
使用 **v-print** 指令的方式进行打印

print.vue 组件 :

![图片](../.vuepress/public/images/vprint1.png)
![图片](../.vuepress/public/images/vprint2.png)

![图片](../.vuepress/public/images/vprint4.png)
