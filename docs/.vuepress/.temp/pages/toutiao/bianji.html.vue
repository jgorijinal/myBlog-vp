<template><h1 id="编辑资料" tabindex="-1"><a class="header-anchor" href="#编辑资料" aria-hidden="true">#</a> 编辑资料</h1>
<h2 id="_1-创建页面并配置路由" tabindex="-1"><a class="header-anchor" href="#_1-创建页面并配置路由" aria-hidden="true">#</a> 1. 创建页面并配置路由</h2>
<p><img src="@source/.vuepress/public/images/userprofile1.png" alt="图片"></p>
<p>1、创建 `views/user-profile/index.vue
<img src="@source/.vuepress/public/images/userprofile2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/zl02.png" alt="图片">
2. 配置路由</p>
<p><img src="@source/.vuepress/public/images/zl01.png" alt="图片"></p>
<h2 id="_2-展示用户信息" tabindex="-1"><a class="header-anchor" href="#_2-展示用户信息" aria-hidden="true">#</a> 2. 展示用户信息</h2>
<p>思路：</p>
<ul>
<li>找到数据接口</li>
<li>封装请求方法</li>
<li>请求获取数据</li>
<li>模板绑定</li>
</ul>
<ol>
<li>封装请求
<img src="@source/.vuepress/public/images/gggg1.png" alt="图片">
<img src="@source/.vuepress/public/images/gggg2.png" alt="图片"></li>
</ol>
<p>模板绑定
<img src="@source/.vuepress/public/images/gggg3.png" alt="图片"></p>
<h2 id="_3-修改昵称" tabindex="-1"><a class="header-anchor" href="#_3-修改昵称" aria-hidden="true">#</a> 3. 修改昵称</h2>
<p><img src="@source/.vuepress/public/images/unun.png" alt="图片">
一、准备弹出层</p>
<p>二、封装组件</p>
<p>三、页面布局</p>
<p>四、基本功能处理</p>
<p>五、更新完成</p>
<p>封装修改个人资料请求
<img src="@source/.vuepress/public/images/un0.png" alt="图片"></p>
<p>主页:
<img src="@source/.vuepress/public/images/un1.png" alt="图片">
<img src="@source/.vuepress/public/images/un2.png" alt="图片"></p>
<p>封装修改昵称组件 src/user-profile/components/update-name.vue
<img src="@source/.vuepress/public/images/un3.png" alt="图片">
<img src="@source/.vuepress/public/images/un4.png" alt="图片"></p>
<h2 id="_4-修改性别" tabindex="-1"><a class="header-anchor" href="#_4-修改性别" aria-hidden="true">#</a> 4. 修改性别</h2>
<p><img src="@source/.vuepress/public/images/ugug.png" alt="图片"></p>
<p><a href="https://vant-ui.github.io/vant/v2/#/zh-CN/picker" target="_blank" rel="noopener noreferrer">Picker 选择器组件<ExternalLinkIcon/></a></p>
<p>主页 :
<img src="@source/.vuepress/public/images/ug1.png" alt="图片">
<img src="@source/.vuepress/public/images/ug2.png" alt="图片"></p>
<p>封装修改性别组件 components/update-gender.vue
<img src="@source/.vuepress/public/images/ug3.png" alt="图片">
<img src="@source/.vuepress/public/images/ug4.png" alt="图片"></p>
<h2 id="_5-修改生日" tabindex="-1"><a class="header-anchor" href="#_5-修改生日" aria-hidden="true">#</a> 5. 修改生日</h2>
<p>主页
<img src="@source/.vuepress/public/images/ub1.png" alt="图片">
<img src="@source/.vuepress/public/images/ub2.png" alt="图片">
封装修改生日组件 components/update-birthday.vue
<img src="@source/.vuepress/public/images/ub3.png" alt="图片">
<img src="@source/.vuepress/public/images/ub4.png" alt="图片">
<img src="@source/.vuepress/public/images/ub5.png" alt="图片"></p>
<h2 id="_6-修改头像" tabindex="-1"><a class="header-anchor" href="#_6-修改头像" aria-hidden="true">#</a> 6. 修改头像</h2>
<h3 id="_6-1-图片上传预览" tabindex="-1"><a class="header-anchor" href="#_6-1-图片上传预览" aria-hidden="true">#</a> 6.1 图片上传预览</h3>
<h4 id="_1-用原生-input-选择图片" tabindex="-1"><a class="header-anchor" href="#_1-用原生-input-选择图片" aria-hidden="true">#</a> 1. 用原生 input 选择图片</h4>
<p><img src="@source/.vuepress/public/images/up1.png" alt="图片">
<img src="@source/.vuepress/public/images/up2.png" alt="图片"></p>
<h4 id="_2-选择完图片就显示出弹层" tabindex="-1"><a class="header-anchor" href="#_2-选择完图片就显示出弹层" aria-hidden="true">#</a> 2. 选择完图片就显示出弹层</h4>
<p><img src="@source/.vuepress/public/images/up3.png" alt="图片">
<img src="@source/.vuepress/public/images/up4.png" alt="图片">
<img src="@source/.vuepress/public/images/up5.png" alt="图片"></p>
<h4 id="_3-弹层里的内容封装成组件-update-photo-vue" tabindex="-1"><a class="header-anchor" href="#_3-弹层里的内容封装成组件-update-photo-vue" aria-hidden="true">#</a> 3. 弹层里的内容封装成组件 <strong>update-photo.vue</strong></h4>
<p><img src="@source/.vuepress/public/images/up6.png" alt="图片"></p>
<p>主页中使用此组件:</p>
<p><img src="@source/.vuepress/public/images/up7.png" alt="图片">
<img src="@source/.vuepress/public/images/up8.png" alt="图片">
<img src="@source/.vuepress/public/images/up9.png" alt="图片"></p>
<h4 id="_4-样式处理" tabindex="-1"><a class="header-anchor" href="#_4-样式处理" aria-hidden="true">#</a> 4. 样式处理</h4>
<p><img src="@source/.vuepress/public/images/up00.png" alt="图片">
<img src="@source/.vuepress/public/images/up11.png" alt="图片">
<img src="@source/.vuepress/public/images/up12.png" alt="图片"></p>
<h3 id="_6-2-裁剪" tabindex="-1"><a class="header-anchor" href="#_6-2-裁剪" aria-hidden="true">#</a> 6.2 裁剪</h3>
<p>方案一：结合服务端的图片裁切上传流程
<img src="@source/.vuepress/public/images/up001.png" alt="图片"></p>
<p>方案二：纯客户端的图片裁切上传流程</p>
<h4 id="_1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-初始化" aria-hidden="true">#</a> 1. 初始化</h4>
<p><a href="https://github.com/fengyuanchen/cropperjs" target="_blank" rel="noopener noreferrer">cropper.js 库<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/cro1.png" alt="图片">
<img src="@source/.vuepress/public/images/cro2.png" alt="图片">
<img src="@source/.vuepress/public/images/cro3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/cro6.png" alt="图片">
<img src="@source/.vuepress/public/images/cro5.png" alt="图片"></p>
<h4 id="_2-cropperjs-基本配置" tabindex="-1"><a class="header-anchor" href="#_2-cropperjs-基本配置" aria-hidden="true">#</a> 2. cropperjs 基本配置</h4>
<p><a href="https://github.com/fengyuanchen/cropperjs#options" target="_blank" rel="noopener noreferrer">cropperjs 配置文档<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viewMode: 1,
dragMode: 'move',
aspectRatio: 1,
autoCropArea: 1,
cropBoxMovable: false,
cropBoxResizable: false,
background: false,
movable: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="@source/.vuepress/public/images/cro.png" alt="图片"></p>
<h3 id="_6-3-保存更新" tabindex="-1"><a class="header-anchor" href="#_6-3-保存更新" aria-hidden="true">#</a> 6.3 保存更新</h3>
<h4 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h4>
<p>如果是基于<strong>服务端的裁切</strong>，则使用：<a href="https://github.com/fengyuanchen/cropperjs#getdatarounded" target="_blank" rel="noopener noreferrer">getData<ExternalLinkIcon/></a> 方法，该方法得到裁切的区域参数
<img src="@source/.vuepress/public/images/getData0.png" alt="图片">
<img src="@source/.vuepress/public/images/getData.png" alt="图片">
把这些这些参数传给服务端, 服务端在进行处理</p>
<h4 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h4>
<p>如果是<strong>纯客户端的图片裁切</strong>，则使用：<a href="https://github.com/fengyuanchen/cropperjs#getcroppedcanvasoptions" target="_blank" rel="noopener noreferrer">getCroppedCanvas<ExternalLinkIcon/></a> 方法，该方法得到裁切之后的图片对象（类似于URL.createObjectURL 方法得到的文件对象）</p>
<p>先封装请求 user.js
<img src="@source/.vuepress/public/images/ccc1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/ccc2.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如果 Content-Type 要求是	application/json	，则 data 传普通对象 {}
如果 Content-Type 要求是	multipart/form-data	，则 data 传 FormData 对象
纵观所有数据接口，你会发现大多数的接口都要求 Content-Type 要求是	application/json
一般只有涉及到文件上传的数据接口才要求Content-Type 要求是	multipart/form-data
这个时候传递一个 FormData 对象
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/.vuepress/public/images/ccc3.png" alt="图片"></p>
</template>
