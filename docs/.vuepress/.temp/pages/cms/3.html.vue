<template><h1 id="项目-3" tabindex="-1"><a class="header-anchor" href="#项目-3" aria-hidden="true">#</a> 项目 3</h1>
<h2 id="用户页-hyform-的基本封装" tabindex="-1"><a class="header-anchor" href="#用户页-hyform-的基本封装" aria-hidden="true">#</a> 用户页 - HyForm 的基本封装</h2>
<p>使用时通过 props 传的是 配置选项数组</p>
<p><img src="@source/.vuepress/public/images/hyform.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/baseui.png" alt="图片"></p>
<ul>
<li>base-ui/types/index.ts  HyForm组件的 props 配置选项数组的 IFormItems ts类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/fts.png" alt="图片"></p>
<ul>
<li>user.vue  props 传的是 IFormItems[] 数组</li>
</ul>
<p><img src="@source/.vuepress/public/images/hf1.png" alt="图片">
<img src="@source/.vuepress/public/images/hf2.png" alt="图片"></p>
<ul>
<li>base-ui/src/form.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/form1.png" alt="图片">
<img src="@source/.vuepress/public/images/form2.png" alt="图片"></p>
<h2 id="用户页-hyform的其他-props-封装和配置文件" tabindex="-1"><a class="header-anchor" href="#用户页-hyform的其他-props-封装和配置文件" aria-hidden="true">#</a> 用户页 - HyForm的其他 props 封装和配置文件</h2>
<ul>
<li>
<p>form.vue 其他的 props
<img src="@source/.vuepress/public/images/fp1.png" alt="图片">
<img src="@source/.vuepress/public/images/fp2.png" alt="图片"></p>
</li>
<li>
<p>base-ui/types/index.ts
<img src="@source/.vuepress/public/images/peizhileixing.png" alt="图片"></p>
</li>
<li>
<p>user.vue  使用组件
<img src="@source/.vuepress/public/images/user55.png" alt="图片"></p>
</li>
</ul>
<p>当然 searchFormConfig 配置对象可以单独抽出来 , 放在一个配置文件中即可
<img src="@source/.vuepress/public/images/sc1.png" alt="图片">
<img src="@source/.vuepress/public/images/sc8.png" alt="图片"></p>
<p>直接导入配置文件即可
<img src="@source/.vuepress/public/images/sc9.png" alt="图片"></p>
<h2 id="hyform-实现双向绑定" tabindex="-1"><a class="header-anchor" href="#hyform-实现双向绑定" aria-hidden="true">#</a> HyForm 实现双向绑定</h2>
<p>要把各各输入框需绑定的初始值以对象<strong>绑定到 v-model</strong></p>
<ul>
<li>user.vue</li>
</ul>
<p><img src="@source/.vuepress/public/images/vm1.png" alt="图片"></p>
<ul>
<li>form/types/index.ts 配置文件ts类型中添加 field 类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/vm2.png" alt="图片"></p>
<ul>
<li>form/src/form.vue  注意看</li>
</ul>
<p><img src="@source/.vuepress/public/images/vm3.png" alt="图片">
<img src="@source/.vuepress/public/images/vm4.png" alt="图片">
<img src="@source/.vuepress/public/images/vm5.png" alt="图片"></p>
<h2 id="user数据的获取和-vuex-system模块中数据保存" tabindex="-1"><a class="header-anchor" href="#user数据的获取和-vuex-system模块中数据保存" aria-hidden="true">#</a> user数据的获取和 Vuex system模块中数据保存</h2>
<ul>
<li>user.vue  在组件内调 system 模块的 action 获取用户列表数据</li>
</ul>
<p><img src="@source/.vuepress/public/images/uservue.png" alt="图片">
<img src="@source/.vuepress/public/images/pm1.png" alt="图片"></p>
<ul>
<li>store 创建 system 模块</li>
</ul>
<p><img src="@source/.vuepress/public/images/wenjian1.png" alt="图片"></p>
<ul>
<li>store  system.ts   Vuex system 模块 , 定义 actions 网络请求获取用户列表数据</li>
</ul>
<p><img src="@source/.vuepress/public/images/ss1.png" alt="图片">
<img src="@source/.vuepress/public/images/ss2.png" alt="图片">
<img src="@source/.vuepress/public/images/st1.png" alt="图片"></p>
<p>封装网络请求
<img src="@source/.vuepress/public/images/sr1.png" alt="图片"></p>
<ul>
<li>service/system/system.ts  封装 getPageListData 函数
<img src="@source/.vuepress/public/images/sr2.png" alt="图片"></li>
</ul>
<p>还有要把 ISystemState 类型添加到 IStoreType 类型( 在store.state.system.xxx的时候会有提示 )
<img src="@source/.vuepress/public/images/iss.png" alt="图片"></p>
<p>setup() 中获取Vuex数据
<img src="@source/.vuepress/public/images/us1.png" alt="图片"></p>
<h2 id="hytable-的基础封装" tabindex="-1"><a class="header-anchor" href="#hytable-的基础封装" aria-hidden="true">#</a> HyTable 的基础封装</h2>
<p>最初效果
<img src="@source/.vuepress/public/images/et1.png" alt="图片"></p>
<ul>
<li>目录结构
<img src="@source/.vuepress/public/images/tbu.png" alt="图片"></li>
<li>table.vue
<img src="@source/.vuepress/public/images/et2.png" alt="图片"></li>
<li>user.vue 使用组件
<img src="@source/.vuepress/public/images/usertable1.png" alt="图片">
<img src="@source/.vuepress/public/images/yuyu1.png" alt="图片"><br>
<img src="@source/.vuepress/public/images/yuyu2.png" alt="图片"></li>
</ul>
<h2 id="hytable-的动态插槽啊和作用域插槽" tabindex="-1"><a class="header-anchor" href="#hytable-的动态插槽啊和作用域插槽" aria-hidden="true">#</a> HyTable 的动态插槽啊和作用域插槽</h2>
<p>propList 添加 slotName在使用具名插槽对应的名字
<img src="@source/.vuepress/public/images/sn1.png" alt="图片"></p>
<p>table.vue  细品
<img src="@source/.vuepress/public/images/sn2.png" alt="图片"></p>
<p>user.vue 使用组件时
<img src="@source/.vuepress/public/images/sn3.png" alt="图片"></p>
<p>展示这种效果</p>
<p><img src="@source/.vuepress/public/images/uiui1.png" alt="图片">
<img src="@source/.vuepress/public/images/uiui.png" alt="图片"></p>
<h2 id="utc-时间格式化" tabindex="-1"><a class="header-anchor" href="#utc-时间格式化" aria-hidden="true">#</a> utc 时间格式化</h2>
<p><img src="@source/.vuepress/public/images/utcimg.png" alt="图片"></p>
<p>时间格式化这个功能的函数有可能在其他组件频发使用,  所以要以 app.use(xxx) 插件的形式添加到全局
<img src="@source/.vuepress/public/images/gp1.png" alt="图片">
<img src="@source/.vuepress/public/images/au1.png" alt="图片">
<img src="@source/.vuepress/public/images/au2.png" alt="图片"></p>
<p>具体 formatUtcString 函数的实现</p>
<p><img src="@source/.vuepress/public/images/uf1.png" alt="图片">
<img src="@source/.vuepress/public/images/uf2.png" alt="图片"></p>
<p>在组件内部使用时</p>
<p><img src="@source/.vuepress/public/images/uf3.png" alt="图片"></p>
<h2 id="hytable的-序号-选中-操作列" tabindex="-1"><a class="header-anchor" href="#hytable的-序号-选中-操作列" aria-hidden="true">#</a> HyTable的 序号-选中-操作列</h2>
<ul>
<li><strong>序号</strong>  : el-table-column的 type 设置为 index , 会显示序号
<img src="@source/.vuepress/public/images/xu1.png" alt="图片">
user.vue</li>
</ul>
<p><img src="@source/.vuepress/public/images/xuhao1.png" alt="图片"></p>
<p>table.vue
<img src="@source/.vuepress/public/images/xuhao2.png" alt="图片">
<img src="@source/.vuepress/public/images/xuhao3.png" alt="图片"></p>
<ul>
<li>选中 : el-table-column的 type 设置为 selection , 则显示多选框 (跟上面同理)
<img src="@source/.vuepress/public/images/duo1.png" alt="图片">
user.vue</li>
</ul>
<p><img src="@source/.vuepress/public/images/duoxuan1.png" alt="图片">
table.vue</p>
<p><img src="@source/.vuepress/public/images/duoxuan2.png" alt="图片">
<img src="@source/.vuepress/public/images/duoxuan3.png" alt="图片"></p>
<ul>
<li>操作项
<img src="@source/.vuepress/public/images/caozuo.png" alt="图片"></li>
</ul>
<p>user.vue
<img src="@source/.vuepress/public/images/caozuo1.png" alt="图片">
<img src="@source/.vuepress/public/images/caozuo2.png" alt="图片"></p>
<h2 id="hytable的header插槽和footer插槽的封装" tabindex="-1"><a class="header-anchor" href="#hytable的header插槽和footer插槽的封装" aria-hidden="true">#</a> HyTable的header插槽和footer插槽的封装</h2>
<p>table.vue</p>
<p><img src="@source/.vuepress/public/images/tslot1.png" alt="图片">
<img src="@source/.vuepress/public/images/tslot2.png" alt="图片"></p>
<h2 id="elementplus的中文国际化处理" tabindex="-1"><a class="header-anchor" href="#elementplus的中文国际化处理" aria-hidden="true">#</a> elementPlus的中文国际化处理</h2>
<p><a href="https://element-plus.gitee.io/zh-CN/guide/i18n.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">国际化<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/eg1.png" alt="图片"></p>
<p>App.vue
<img src="@source/.vuepress/public/images/gapp.png" alt="图片"></p>
</template>
