<template><h1 id="项目-5" tabindex="-1"><a class="header-anchor" href="#项目-5" aria-hidden="true">#</a> 项目 5</h1>
<h2 id="页面数据中的删除操作逻辑" tabindex="-1"><a class="header-anchor" href="#页面数据中的删除操作逻辑" aria-hidden="true">#</a> 页面数据中的删除操作逻辑</h2>
<p>涉及网络请求的都放在 Vuex 里, 比如删除数据... 我只需要调 dispatch 即可</p>
<p>page-content.vue
<img src="@source/.vuepress/public/images/delete1.png" alt="图片">
service/main/system.ts
<img src="@source/.vuepress/public/images/delete2.png" alt="图片">
store/main/system/system.ts
<img src="@source/.vuepress/public/images/delete3.png" alt="图片"></p>
<h2 id="页面弹窗的-pagemodal-的封装" tabindex="-1"><a class="header-anchor" href="#页面弹窗的-pagemodal-的封装" aria-hidden="true">#</a> 页面弹窗的 PageModal 的封装</h2>
<p><img src="@source/.vuepress/public/images/pam1.png" alt="图片">
page-modal.vue  PageModal 弹窗的初步封装
<img src="@source/.vuepress/public/images/pam2.png" alt="图片">
hy-form的配置文件
<img src="@source/.vuepress/public/images/pam3.png" alt="图片">
<img src="@source/.vuepress/public/images/pam4.png" alt="图片"></p>
<h2 id="新建-编辑-按钮逻辑和-hook-的封装" tabindex="-1"><a class="header-anchor" href="#新建-编辑-按钮逻辑和-hook-的封装" aria-hidden="true">#</a> 新建 / 编辑 按钮逻辑和 hook 的封装</h2>
<p>新建用户按钮和编辑按钮在 page-content 组件 , PageModel在父组件 user.vue , 使用常见的触发emit -&gt; 监听 , 在user.vue 用 ref 访问PageModel的数据和方法</p>
<p><strong>page-content.vue</strong>
<img src="@source/.vuepress/public/images/bs.png" alt="图片">
<strong>user.vue</strong>
<img src="@source/.vuepress/public/images/pm2.png" alt="图片">
<img src="@source/.vuepress/public/images/pm3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/yuyu.png" alt="图片">
<strong>page-model.vue</strong>
<img src="@source/.vuepress/public/images/pm4.png" alt="图片">
<img src="@source/.vuepress/public/images/pm5.png" alt="图片"></p>
<p>封装成 hook
<img src="@source/.vuepress/public/images/hook33.png" alt="图片">
<img src="@source/.vuepress/public/images/hook3.png" alt="图片"></p>
<h2 id="密码-item的显示和隐藏" tabindex="-1"><a class="header-anchor" href="#密码-item的显示和隐藏" aria-hidden="true">#</a> 密码 Item的显示和隐藏</h2>
<p>公共的逻辑可放在hook里 , 如果是单个页面的逻辑的话应该要放在那个单独的页面里</p>
<p><img src="@source/.vuepress/public/images/ishidden.png" alt="图片">
然后在form 组件里  v-if 控制</p>
<p><strong>单独的逻辑放对应的页面上 , 把回调传到hook中 , hook 里也要通过参数接受回调并调用</strong></p>
<p>user.vue
<img src="@source/.vuepress/public/images/mima1.png" alt="图片">
use-page-modal.ts
<img src="@source/.vuepress/public/images/mima2.png" alt="图片"></p>
</template>
