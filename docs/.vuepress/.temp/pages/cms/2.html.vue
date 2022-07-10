<template><h1 id="项目-2" tabindex="-1"><a class="header-anchor" href="#项目-2" aria-hidden="true">#</a> 项目 2</h1>
<h2 id="vuex的ts技巧和左侧菜单显示" tabindex="-1"><a class="header-anchor" href="#vuex的ts技巧和左侧菜单显示" aria-hidden="true">#</a> Vuex的ts技巧和左侧菜单显示</h2>
<p>左侧菜单的话数据已经保存在 Vuex 的login模块里 , 在Vuex的 login 模块中获取 userMenus 数据</p>
<p>但是在 setup()获取 login 模块的state数据的时候 store.state.login.xxxx , ts类型支持有点问题 , 现在解决这个问题</p>
<p><img src="@source/.vuepress/public/images/jiaocha1.png" alt="图片">
<img src="@source/.vuepress/public/images/useStore88.png" alt="图片"></p>
<p>组件内拿到模块里 userMenus 数据
<img src="@source/.vuepress/public/images/opop.png" alt="图片"></p>
<p>然后展示菜单 <a href="https://element-plus.gitee.io/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">el-menu,el-sub-menu,el-menu-item<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/tttt.png" alt="图片">
<img src="@source/.vuepress/public/images/tttt2.png" alt="图片"></p>
<h2 id="菜单的折叠与展开切换" tabindex="-1"><a class="header-anchor" href="#菜单的折叠与展开切换" aria-hidden="true">#</a> 菜单的折叠与展开切换</h2>
<p>el-menu的 collapse 属性</p>
<p><img src="@source/.vuepress/public/images/mc1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/collapse.png" alt="图片"><br>
NavHeader组件和 NavMenu组件的共同父组件是 main.vue , 先把对应的NavHeader里面的事件传给 main , main之后改变某一个值 ,再把面里面的某一个值传给 NavMenu</p>
<p>这么做是因为 , main.vue 里面要决定菜单的宽度 , 所以要通过 main.vue 来传</p>
<ul>
<li>nav-header.vue
<img src="@source/.vuepress/public/images/k1.png" alt="图片"></li>
<li>main.vue
<img src="@source/.vuepress/public/images/k2.png" alt="图片"></li>
<li>nav-menu.vue
<img src="@source/.vuepress/public/images/k3.png" alt="图片"><br>
<img src="@source/.vuepress/public/images/k4.png" alt="图片"><br>
还有 el-menu 样式上的 bug 问题, 动画的过程中会出现白色的竖线, 所以需要加上el-menu{ border-right :none }</li>
</ul>
<h2 id="权限管理和菜单动态路由" tabindex="-1"><a class="header-anchor" href="#权限管理和菜单动态路由" aria-hidden="true">#</a> 权限管理和菜单动态路由</h2>
<p><img src="@source/.vuepress/public/images/dongtai1.png" alt="图片"><br>
<img src="@source/.vuepress/public/images/dongtai2.png" alt="图片"></p>
</template>
