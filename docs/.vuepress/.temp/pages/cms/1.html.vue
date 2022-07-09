<template><h1 id="项目-1" tabindex="-1"><a class="header-anchor" href="#项目-1" aria-hidden="true">#</a> 项目 1</h1>
<h2 id="css-初始化" tabindex="-1"><a class="header-anchor" href="#css-初始化" aria-hidden="true">#</a> CSS 初始化</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install normalize.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/assets.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/base.png" alt="图片"> <img src="@source/.vuepress/public/images/indexless.png" alt="图片"></p>
<p>main.ts 导入初始化</p>
<p><img src="@source/.vuepress/public/images/maincss.png" alt="图片"></p>
<h2 id="账号和手机登录界面搭建" tabindex="-1"><a class="header-anchor" href="#账号和手机登录界面搭建" aria-hidden="true">#</a> 账号和手机登录界面搭建</h2>
<p><a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/loginx.png" alt="图片">
<img src="@source/.vuepress/public/images/loginFile.png" alt="图片"></p>
<ul>
<li>login-panel.vue 模板</li>
</ul>
<p><img src="@source/.vuepress/public/images/panel.png" alt="图片">
<img src="@source/.vuepress/public/images/panel2.png" alt="图片"></p>
<h2 id="输入框规则的校验" tabindex="-1"><a class="header-anchor" href="#输入框规则的校验" aria-hidden="true">#</a> 输入框规则的校验</h2>
<p>表单校验
<a href="https://element-plus.gitee.io/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">el-form,el-form-item,el-input<ExternalLinkIcon/></a></p>
<ul>
<li>login-account.vue</li>
</ul>
<p><img src="@source/.vuepress/public/images/vali1.png" alt="图片">
<img src="@source/.vuepress/public/images/vali2.png" alt="图片">
<img src="@source/.vuepress/public/images/vali3.png" alt="图片"></p>
<p>但上面 rules 这样的校验规则让整体代码变多 ,所以想单独弄出来</p>
<p>要封装逻辑代码的时候如果用到了 ref / reactive /onMounted 等等可以封装到 hook 文件夹(如下图)里 ,如果是简单的代码逻辑就在 config 文件夹(如下图)中抽取</p>
<p><img src="@source/.vuepress/public/images/feng.png" alt="图片"></p>
<ul>
<li>account-config.ts
<img src="@source/.vuepress/public/images/ac.png" alt="图片"></li>
<li>login-account.vue 需要注意的是 setup()里一定要 return 导入的 rules
<img src="@source/.vuepress/public/images/ac2.png" alt="图片"></li>
</ul>
<h2 id="记住密码-登录逻辑初步实现" tabindex="-1"><a class="header-anchor" href="#记住密码-登录逻辑初步实现" aria-hidden="true">#</a> 记住密码 - 登录逻辑初步实现</h2>
<p><img src="@source/.vuepress/public/images/loginxxx.png" alt="图片"></p>
<ul>
<li>
<p>login-panel.vue
<img src="@source/.vuepress/public/images/lp1.png" alt="图片">
<img src="@source/.vuepress/public/images/lp2.png" alt="图片"></p>
</li>
<li>
<p>login-account.vue
<img src="@source/.vuepress/public/images/la1.png" alt="图片">
<img src="@source/.vuepress/public/images/la2.png" alt="图片"></p>
</li>
</ul>
<h2 id="记住密码-本地缓存" tabindex="-1"><a class="header-anchor" href="#记住密码-本地缓存" aria-hidden="true">#</a> 记住密码 - 本地缓存</h2>
<p>需要用到本地缓存相关的操作 , 所以封装关于localStorage的逻辑</p>
<ul>
<li>
<p><strong>utils/cache.ts</strong>
<img src="@source/.vuepress/public/images/utilslocal.png" alt="图片"></p>
</li>
<li>
<p>login-panel.vue
<img src="@source/.vuepress/public/images/jizhu1.png" alt="图片"></p>
</li>
<li>
<p>login-account.vue
<img src="@source/.vuepress/public/images/jizhu2.png" alt="图片"></p>
</li>
</ul>
<h2 id="vuex中login模块-module" tabindex="-1"><a class="header-anchor" href="#vuex中login模块-module" aria-hidden="true">#</a> Vuex中login模块(module)</h2>
<ul>
<li>
<ol>
<li>登录的逻辑 (网络请求 , 拿到数据后的处理)</li>
</ol>
</li>
<li>
<ol start="2">
<li>数据保存到某一位置</li>
</ol>
</li>
<li>
<ol start="3">
<li>发送其他的请求 ( 请求当前用户的信息 )</li>
</ol>
</li>
<li>
<ol start="4">
<li>拿到用户的菜单</li>
</ol>
</li>
<li>
<ol start="5">
<li>跳到首页</li>
</ol>
</li>
</ul>
<p>把上面这些逻辑都可以放在 Vuex 中 login 登录模块进行管理</p>
<ul>
<li>store的目录结构
<img src="@source/.vuepress/public/images/mfile.png" alt="图片"></li>
<li>VueX里 Module的类型 , 它的泛型没有默认值, 所以Module的泛型要<strong>必须</strong>传
<img src="@source/.vuepress/public/images/Modulets.png" alt="图片"></li>
</ul>
<p>ts类型 : 根模块和 login 模块的 state 接口</p>
<p><img src="@source/.vuepress/public/images/rootstate.png" alt="图片"><img src="@source/.vuepress/public/images/loginstate.png" alt="图片"></p>
<ul>
<li>
<p>login.ts login模块
<img src="@source/.vuepress/public/images/lm.png" alt="图片"></p>
</li>
<li>
<p>index.ts  根模块
<img src="@source/.vuepress/public/images/rm.png" alt="图片"></p>
</li>
</ul>
<p>在组件中调用一下 login模块的 action 方法
<img src="@source/.vuepress/public/images/da.png" alt="图片"></p>
<h2 id="账号登录和手机登录的区分" tabindex="-1"><a class="header-anchor" href="#账号登录和手机登录的区分" aria-hidden="true">#</a> 账号登录和手机登录的区分</h2>
<p>el-tabs的v-model属性 , 控制 tabs
<img src="@source/.vuepress/public/images/qufen1.png" alt="图片">
<img src="@source/.vuepress/public/images/qufen2.png" alt="图片"></p>
<h2 id="登陆逻辑和跨域访问" tabindex="-1"><a class="header-anchor" href="#登陆逻辑和跨域访问" aria-hidden="true">#</a> 登陆逻辑和跨域访问</h2>
<p><img src="@source/.vuepress/public/images/loginservice1.png" alt="图片"></p>
<p>封装了登录请求</p>
<ul>
<li>service/login/login.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/loginservice2.png" alt="图片"></p>
<ul>
<li>types.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/lt1.png" alt="图片"></p>
<p>点击立即登录触发Vuex中logina模块里面的accountLoginAction</p>
<p><img src="@source/.vuepress/public/images/laction.png" alt="图片"></p>
<p>devServer解决跨域</p>
<ul>
<li>vue.config.js
<img src="@source/.vuepress/public/images/vc1.png" alt="图片"></li>
<li>service/request/config.ts
<img src="@source/.vuepress/public/images/vc2.png" alt="图片"></li>
</ul>
<p>但发现login模块中触发action发起请求得到的 loginResult 的类型是 <strong>unknown</strong> , 这是因为上面在封装 login 请求时 post 的繁星里面没有传类型, 所以根据请求得到的值定义ts类性</p>
<p><img src="@source/.vuepress/public/images/loginresult.png" alt="图片"></p>
<ul>
<li>service/login/login.ts
<img src="@source/.vuepress/public/images/post.png" alt="图片"></li>
</ul>
<p>然后存放 token : 修改 state 的唯一的办法是提交 mutation</p>
<p><img src="@source/.vuepress/public/images/commit5.png" alt="图片"></p>
<h2 id="登陆成功其他获取信息-用户的信息-用户的菜单" tabindex="-1"><a class="header-anchor" href="#登陆成功其他获取信息-用户的信息-用户的菜单" aria-hidden="true">#</a> 登陆成功其他获取信息(用户的信息,用户的菜单)</h2>
<p>登录获取token , 还要得到用户信息 userInfo , 并且也要得到用户对应的菜单 userMenus</p>
<ul>
<li>
<p>service/request/index.ts  注意请求拦截里设置请求都要携带 token
<img src="@source/.vuepress/public/images/token1.png" alt="图片"></p>
</li>
<li>
<p>service/login/login.ts  登录中的请求API
<img src="@source/.vuepress/public/images/serviceapi.png" alt="图片"></p>
</li>
<li>
<p>store/login/login.ts  Vuex中 login 模块</p>
</li>
</ul>
<p>userInfo 和 userMenus 都要存了本地存储里
<img src="@source/.vuepress/public/images/ls1.png" alt="图片">
<img src="@source/.vuepress/public/images/ls2.png" alt="图片"></p>
<h2 id="登录跳转和其他页面跳转逻辑" tabindex="-1"><a class="header-anchor" href="#登录跳转和其他页面跳转逻辑" aria-hidden="true">#</a> 登录跳转和其他页面跳转逻辑</h2>
<p>前置守卫登录的跳转 : 如果localStorage有token ,就直接显示页面, 如果没有 token,就他跳转到登录页面</p>
<ul>
<li>router/index.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/router555.png" alt="图片"></p>
<p>Vuex里面的数据在用户刷新页面的时候, 会在内存中消失掉。但Vuex里面的数据我们不希望在刷新页面的时候消失掉, 所以再做一个操作</p>
<p>还有一种情况 , Vuex里面的数据只是在登录的时候发请求 , 触发action , 提交mutation ,然后依次给state赋值 ,  但如果只是用地址栏移动如果不做登陆请求 , 那么Vuex里面是没有数据的 , 数据只在localStorage里面 , 所以要解决这个问题。</p>
<p><img src="@source/.vuepress/public/images/store77.png" alt="图片"></p>
<ul>
<li>
<p>store /index.ts
<img src="@source/.vuepress/public/images/setupStore.png" alt="图片"></p>
</li>
<li>
<p>main.ts
<img src="@source/.vuepress/public/images/maints.png" alt="图片"></p>
</li>
<li>
<p>store/login/login.ts
<img src="@source/.vuepress/public/images/la8.png" alt="图片">
<img src="@source/.vuepress/public/images/la9.png" alt="图片"></p>
</li>
</ul>
</template>
