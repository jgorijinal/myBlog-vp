<template><h1 id="项目-2" tabindex="-1"><a class="header-anchor" href="#项目-2" aria-hidden="true">#</a> 项目 2</h1>
<h2 id="vuex-的-ts-技巧和左侧菜单显示" tabindex="-1"><a class="header-anchor" href="#vuex-的-ts-技巧和左侧菜单显示" aria-hidden="true">#</a> Vuex 的 ts 技巧和左侧菜单显示</h2>
<p>左侧菜单的话数据已经保存在 Vuex 的 login 模块里 , 在 Vuex 的 login 模块中获取 userMenus 数据</p>
<p>但是在 setup()获取 login 模块的 state 数据的时候 store.state.login.xxxx , ts 类型支持有点问题 , 现在解决这个问题</p>
<p><img src="@source/.vuepress/public/images/jiaocha1.png" alt="图片">
<img src="@source/.vuepress/public/images/useStore88.png" alt="图片"></p>
<p>组件内拿到模块里 userMenus 数据
<img src="@source/.vuepress/public/images/opop.png" alt="图片"></p>
<p>然后展示菜单 <a href="https://element-plus.gitee.io/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">el-menu,el-sub-menu,el-menu-item<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/tttt.png" alt="图片">
<img src="@source/.vuepress/public/images/tttt2.png" alt="图片"></p>
<h2 id="菜单的折叠与展开切换" tabindex="-1"><a class="header-anchor" href="#菜单的折叠与展开切换" aria-hidden="true">#</a> 菜单的折叠与展开切换</h2>
<p>el-menu 的 collapse 属性</p>
<p><img src="@source/.vuepress/public/images/mc1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/collapse.png" alt="图片"><br>
NavHeader 组件和 NavMenu 组件的共同父组件是 main.vue , 先把对应的 NavHeader 里面的事件传给 main , main 之后改变某一个值 ,再把面里面的某一个值传给 NavMenu</p>
<p>这么做是因为 , main.vue 里面要决定菜单的宽度 , 所以要通过 main.vue 来传</p>
<ul>
<li>nav-header.vue
<img src="@source/.vuepress/public/images/k1.png" alt="图片"></li>
<li>main.vue
<img src="@source/.vuepress/public/images/k2.png" alt="图片"></li>
<li>nav-menu.vue
<img src="@source/.vuepress/public/images/k3.png" alt="图片"><br>
<img src="@source/.vuepress/public/images/k4.png" alt="图片"><br>
还有 el-menu 样式上的 bug 问题, 动画的过程中会出现白色的竖线, 所以需要加上 el-menu{ border-right :none }</li>
</ul>
<h2 id="权限管理和菜单动态路由" tabindex="-1"><a class="header-anchor" href="#权限管理和菜单动态路由" aria-hidden="true">#</a> 权限管理和菜单动态路由</h2>
<p>权限动态加载路由的<strong>常用的 3 种方法</strong> (这个项目采用最后一种方法) :</p>
<ul>
<li>写死 : 注册所有的组件
<ul>
<li>在 routes 数组中的 children 把所有的路由写死 , 不管用户需要不需要菜单 , 全部都给注册完。但写死有个弊端 , 虽然有些菜单是
不显示, 但 url 对应的组件这二中映射关系式依然存在的, 用户手动改 url 的地址访问 , 组件是依然会显示。但这种不该显示, 要直接给 404 页面</li>
</ul>
</li>
<li>前端先规定好不同的角色对应的不同的路由, 之后用户登录时拿到 role.name 判断是否对应角色规定好的角色 , 然后动态加载路由放到 routes 中。这个方法也有个弊端 , 如果想要新增角色 , 必须要修改前端代码 , 然后需要要重新部署
<img src="@source/.vuepress/public/images/dongtai1.png" alt="图片"></li>
<li>根据菜单动态生成路由映射 , 菜单理由 url , 它对应的是路由的 path , 让 path 对应某个 component , 然后生成对应的 routes , 最后 addRoute 动态添加到 children 里面
<img src="@source/.vuepress/public/images/dongtai2.png" alt="图片"></li>
</ul>
<p><img src="@source/.vuepress/public/images/q1.png" alt="图片"><img src="@source/.vuepress/public/images/q2.png" alt="图片"></p>
<p><strong>例如</strong> router/main/analysis/dashboard/dashboard.ts <strong>导出 RouterRecordRaw 对象 , 其余同理</strong>
<img src="@source/.vuepress/public/images/dongtaix.png" alt="图片">
views/main/analysis/dashboard/dashboard.vue <strong>dashboard 对应的组件</strong>
<img src="@source/.vuepress/public/images/db1.png" alt="图片"></p>
<ul>
<li>
<p>store/login/login.ts
<img src="@source/.vuepress/public/images/iii.png" alt="图片"></p>
</li>
<li>
<p>utils/map-menus.ts
<img src="@source/.vuepress/public/images/mapMenus.png" alt="图片"></p>
</li>
<li>
<p>store/login/login.ts 将得到的 routes 数组遍历, addRoute 动态添加
<img src="@source/.vuepress/public/images/ar1.png" alt="图片"></p>
</li>
</ul>
<h2 id="页面映射展示" tabindex="-1"><a class="header-anchor" href="#页面映射展示" aria-hidden="true">#</a> 页面映射展示</h2>
<p><img src="@source/.vuepress/public/images/rview.png" alt="图片"></p>
<ul>
<li>
<p>nav-menu.vue
<img src="@source/.vuepress/public/images/nm1.png" alt="图片">
<img src="@source/.vuepress/public/images/nm2.png" alt="图片"></p>
</li>
<li>
<p>view/main/ main.vue
<img src="@source/.vuepress/public/images/rw.png" alt="图片"></p>
</li>
</ul>
<h2 id="点击刷新页面-404bug" tabindex="-1"><a class="header-anchor" href="#点击刷新页面-404bug" aria-hidden="true">#</a> 点击刷新页面 404bug</h2>
<p><img src="@source/.vuepress/public/images/rbug.png" alt="图片"></p>
<p>app.use(router)放到最后面</p>
<h2 id="路径和菜单选中的映射关系" tabindex="-1"><a class="header-anchor" href="#路径和菜单选中的映射关系" aria-hidden="true">#</a> 路径和菜单选中的映射关系</h2>
<p><img src="@source/.vuepress/public/images/了.png" alt="图片">
选中状态是由 el-menu 的 default-active 属性控制
<img src="@source/.vuepress/public/images/em1.png" alt="图片"></p>
<ul>
<li>
<p>基本思路
<img src="@source/.vuepress/public/images/jbsl.png" alt="图片"></p>
</li>
<li>
<p>nav-menus.vue 左侧菜单组件
<img src="@source/.vuepress/public/images/nm6.png" alt="图片"><br>
<img src="@source/.vuepress/public/images/nm7.png" alt="图片"></p>
</li>
<li>
<p>map-menu.ts 上面使用的 mapPathToMenu 封装函数
<img src="@source/.vuepress/public/images/nm8.png" alt="图片"></p>
</li>
</ul>
<p>还有 , 挡在地址栏里以路径 /main 输入按回车会报错 , 因为 /main 没有对应的菜单 ,所以读取不到 菜单.id , 所以报错</p>
<p>所以需要从 /main 重定向到 /main/analysis/overview 第一个菜单 , 该怎么做呢 ???</p>
<p><img src="@source/.vuepress/public/images/FM.png" alt="图片"></p>
<p>然后来到路由守卫</p>
<p><img src="@source/.vuepress/public/images/rrr.png" alt="图片"></p>
<h2 id="路径和面包屑显示的匹配" tabindex="-1"><a class="header-anchor" href="#路径和面包屑显示的匹配" aria-hidden="true">#</a> 路径和面包屑显示的匹配</h2>
<p><img src="@source/.vuepress/public/images/bub.png" alt="图片"> <img src="@source/.vuepress/public/images/bc.png" alt="图片"></p>
<ul>
<li>
<p>breadcrumb.vue
<img src="@source/.vuepress/public/images/eb1.png" alt="图片"></p>
</li>
<li>
<p>types/index.ts
<img src="@source/.vuepress/public/images/dbtype.png" alt="图片"></p>
</li>
<li>
<p>nav-header.ts
<img src="@source/.vuepress/public/images/bc1.png" alt="图片">
<img src="@source/.vuepress/public/images/bc2.png" alt="图片"></p>
</li>
<li>
<p>map-menus.ts mapPathToBreadcrumb 函数 遍历菜单, 比较 url 和 curentPath
<img src="@source/.vuepress/public/images/bc5.png" alt="图片"></p>
</li>
</ul>
</template>
