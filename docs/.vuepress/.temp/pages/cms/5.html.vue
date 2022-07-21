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
<img src="@source/.vuepress/public/images/huhu.png" alt="图片">
use-page-modal.ts
<img src="@source/.vuepress/public/images/mima2.png" alt="图片"></p>
<p>page-modal.vue</p>
<p><strong>el-dialog组件必须加上  <code>destroy-on-close</code> 这个属性, 关闭时彻底消除!!</strong>
<img src="@source/.vuepress/public/images/doc.png" alt="图片"></p>
<h2 id="部门和角色数据的分析和请求" tabindex="-1"><a class="header-anchor" href="#部门和角色数据的分析和请求" aria-hidden="true">#</a> 部门和角色数据的分析和请求</h2>
<p>把部门(department)和角色(role)的数据放在 Vuex 的<strong>根模块</strong>中</p>
<p>store/index.ts  根 Vuex
<img src="@source/.vuepress/public/images/dr1.png" alt="图片">
<img src="@source/.vuepress/public/images/dr2.png" alt="图片"></p>
<p><strong>但上面的 dispatch请求放在这里并不合适 , 因为发请求之前要确保自己拿到token , 所以改一下请求位置</strong></p>
<p><img src="@source/.vuepress/public/images/chushihua1.png" alt="图片">
<img src="@source/.vuepress/public/images/csh2.png" alt="图片"></p>
<h2 id="刷新页面-部门和角色-动态数据展示" tabindex="-1"><a class="header-anchor" href="#刷新页面-部门和角色-动态数据展示" aria-hidden="true">#</a> 刷新页面 部门和角色 动态数据展示</h2>
<p>刷新页面使 , Vuex的数据无法即使在页面上显示
<img src="@source/.vuepress/public/images/dt.png" alt="图片"></p>
<p><strong>使用 <code>computed(()=&gt; return xxx)</code> 形成副作用</strong></p>
<p>modal.config.ts 配置文件
<img src="@source/.vuepress/public/images/rd1.png" alt="图片">
user.vue
<img src="@source/.vuepress/public/images/rd22.png" alt="图片"></p>
<h2 id="新建-和-编辑-的逻辑处理" tabindex="-1"><a class="header-anchor" href="#新建-和-编辑-的逻辑处理" aria-hidden="true">#</a> 新建 和 编辑 的逻辑处理</h2>
<p><img src="@source/.vuepress/public/images/xb.png" alt="图片">
page-modal.vue
<img src="@source/.vuepress/public/images/xb1.png" alt="图片">
service/main/*system/system.ts  <strong>新建 post , 编辑 patch</strong>
<img src="@source/.vuepress/public/images/xb2.png" alt="图片">
store/main/system/system.ts
<img src="@source/.vuepress/public/images/xb3.png" alt="图片">
注意一下 : 编辑的话, url是比如/users/4 , 需要id</p>
<h2 id="新建角色-菜单树展示和选择菜单-新建角色" tabindex="-1"><a class="header-anchor" href="#新建角色-菜单树展示和选择菜单-新建角色" aria-hidden="true">#</a> 新建角色 - 菜单树展示和选择菜单 新建角色</h2>
<p><img src="@source/.vuepress/public/images/role1.png" alt="图片">
<strong>store/main/index.ts</strong>  <strong>根模块</strong>保存 <strong>菜单</strong> 的数据
<img src="@source/.vuepress/public/images/role2.png" alt="图片">
<img src="@source/.vuepress/public/images/role3.png" alt="图片">
<strong>role.vue</strong>
<img src="@source/.vuepress/public/images/role4.png" alt="图片">
<img src="@source/.vuepress/public/images/role5.png" alt="图片"></p>
<p>新建角色 请求体需要 menuList 数组
<img src="@source/.vuepress/public/images/xinjianjs.png" alt="图片"></p>
<p>组件在不同页面里, 所以要通信
<img src="@source/.vuepress/public/images/role6.png" alt="图片">
<strong>role.vue</strong>
<img src="@source/.vuepress/public/images/role7.png" alt="图片">
<img src="@source/.vuepress/public/images/role8.png" alt="图片">
<strong>page-modal.vue</strong>
<img src="@source/.vuepress/public/images/role9.png" alt="图片"></p>
<h2 id="编辑角色-角色菜单树的回显" tabindex="-1"><a class="header-anchor" href="#编辑角色-角色菜单树的回显" aria-hidden="true">#</a> 编辑角色 - 角色菜单树的回显</h2>
<p><img src="@source/.vuepress/public/images/huixian0.png" alt="图片"></p>
<p>use-page-model.ts  之前封装的 hook 中 编辑函数 可以拿到 el-table row 的完整数据 , 所以往hook参数传回调可以在 role.vue 拿到数据
<img src="@source/.vuepress/public/images/huixian1.png" alt="图片">
role.vue
<img src="@source/.vuepress/public/images/huixian2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/huixian3.png" alt="图片"></p>
<p>utils/map-menus.ts  生命一个辅助函数 , 遍历菜单得到叶子元素的 id
<img src="@source/.vuepress/public/images/hello1.png" alt="图片">
<img src="@source/.vuepress/public/images/hello2.png" alt="图片"></p>
</template>
