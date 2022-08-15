<template><h1 id="主页模块" tabindex="-1"><a class="header-anchor" href="#主页模块" aria-hidden="true">#</a> 主页模块</h1>
<h2 id="主页的-token-拦截处理" tabindex="-1"><a class="header-anchor" href="#主页的-token-拦截处理" aria-hidden="true">#</a> 主页的 token 拦截处理</h2>
<p>根据 token 处理主页的访问权限问题</p>
<h3 id="权限拦截的流程图" tabindex="-1"><a class="header-anchor" href="#权限拦截的流程图" aria-hidden="true">#</a> 权限拦截的流程图</h3>
<p>根据有无token，进行页面访问的处理, 理解下面流程图
<img src="@source/.vuepress/public/images/quanxiantu.png" alt="图片">
已经知道**<code>src/permission.js</code>**是专门处理路由权限的，所以在这里处理</p>
<h3 id="流程图转化成代码" tabindex="-1"><a class="header-anchor" href="#流程图转化成代码" aria-hidden="true">#</a> 流程图转化成代码</h3>
<p><img src="@source/.vuepress/public/images/routershouwei.png" alt="图片">
在导航守卫的位置，添加了 NProgress 的插件，可以完成跳转时的进度条效果</p>
<h2 id="获取用户资料接口和-token-注入" tabindex="-1"><a class="header-anchor" href="#获取用户资料接口和-token-注入" aria-hidden="true">#</a> 获取用户资料接口和 token 注入</h2>
<p>封装获取用户资料的资料信息 , 现在需要通过接口调用的方式获取当前用户的资料信息</p>
<h4 id="获取用户资料接口" tabindex="-1"><a class="header-anchor" href="#获取用户资料接口" aria-hidden="true">#</a> 获取用户资料接口</h4>
<p>接口文档:
<img src="@source/.vuepress/public/images/yonghuziliao.png" alt="图片"></p>
<p>在 <strong><code>src/api/user.js</code></strong> 中封装获取用户资料的方法
<img src="@source/.vuepress/public/images/getinfo.png" alt="图片"></p>
<blockquote>
<p>我们的headers参数并没有在这里传入，为什么呢 ?</p>
</blockquote>
<p>headers中的<strong>Authorization</strong>相当于我们<strong>开门</strong>（<strong>调用接口</strong>）时<strong>钥匙(token)</strong>，我们在打开任何带安全权限的门的时候都需要 <strong>钥匙(token)</strong> 如图
<img src="@source/.vuepress/public/images/tutu01.png" alt="图片"></p>
<p>每次在接口中携带 <strong><code>钥匙（token）</code></strong> 很麻烦，所以可以在 <strong>axios 请求拦截器中统一注入 token</strong>
<img src="@source/.vuepress/public/images/tutu02.png" alt="图片"></p>
<p>统一注入 token** <strong><code>src/utils/request.js</code></strong>  -&gt; 请求拦截器
<img src="@source/.vuepress/public/images/tokentoken.png" alt="图片"></p>
<h2 id="封装获取用户资料的-action-并共享用户状态" tabindex="-1"><a class="header-anchor" href="#封装获取用户资料的-action-并共享用户状态" aria-hidden="true">#</a> 封装获取用户资料的 action 并共享用户状态</h2>
<p>在用户的 vuex 模块中封装获取用户资料的 action，并设置相关状态</p>
<blockquote>
<p>用户状态会在后续的开发中，频繁用到，所以我们将用户状态同样的封装到 action 中</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/yhzl.png" alt="图片"></p>
<h4 id="封装获取用户资料action-src-store-modules-user-js" tabindex="-1"><a class="header-anchor" href="#封装获取用户资料action-src-store-modules-user-js" aria-hidden="true">#</a> 封装获取用户资料action  <strong><code>src/store/modules/user.js</code></strong></h4>
<p><img src="@source/.vuepress/public/images/useraction1.png" alt="图片"></p>
<h4 id="初始化-state" tabindex="-1"><a class="header-anchor" href="#初始化-state" aria-hidden="true">#</a> 初始化 state</h4>
<p><img src="@source/.vuepress/public/images/useraction2.png" alt="图片"></p>
<blockquote>
<p>userInfo为什么我们不设置为null，而是设置为 {}</p>
</blockquote>
<p>因为会在 <strong><code>getters</code></strong> 中引用 userInfo 的变量，如果设置为 null ，则会引起异常和报错 , null.name 当然会报错</p>
<h4 id="设置-和-删除-用户资料-mutation" tabindex="-1"><a class="header-anchor" href="#设置-和-删除-用户资料-mutation" aria-hidden="true">#</a> 设置 和 删除 用户资料 mutation</h4>
<p><img src="@source/.vuepress/public/images/useraction3.png" alt="图片"></p>
<p>同样不能为 null , 置空为 空对象 {} , 因为我们要做映射，如果初始值为 null，一旦引用了getters，就会报错</p>
<h4 id="建立用户名的映射-src-store-getters-js" tabindex="-1"><a class="header-anchor" href="#建立用户名的映射-src-store-getters-js" aria-hidden="true">#</a> 建立用户名的映射 <strong><code>src/store/getters.js</code></strong></h4>
<p><img src="@source/.vuepress/public/images/useraction5.png" alt="图片">
现在为止，将用户资料的 <strong>action =&gt;  mutation =&gt; state =&gt; getters</strong> 都设置好了 , 接下来要调用这个 action</p>
<h2 id="权限拦截处-调用获取资料action" tabindex="-1"><a class="header-anchor" href="#权限拦截处-调用获取资料action" aria-hidden="true">#</a> 权限拦截处 调用获取资料action</h2>
<p>在权限拦截处 调用aciton</p>
<h3 id="权限拦截器调用action" tabindex="-1"><a class="header-anchor" href="#权限拦截器调用action" aria-hidden="true">#</a> 权限拦截器调用action</h3>
<p>在上面已经封装了获取用户资料的 action , 那么在哪里调用这个 action ?</p>
<p>用户资料有个硬性要求，<strong>必须有token</strong> 才可以获取，那么就可以在确定有 token 的位置去获取用户资料
<img src="@source/.vuepress/public/images/yijing1.png" alt="图片">
由上图可以看出，一旦确定进行了放行，就可以获取用户资料
<img src="@source/.vuepress/public/images/yijing2.png" alt="图片"></p>
<h4 id="调用action-src-permission-js" tabindex="-1"><a class="header-anchor" href="#调用action-src-permission-js" aria-hidden="true">#</a> 调用action <strong>src/permission.js</strong></h4>
<p><img src="@source/.vuepress/public/images/ziliao01.png" alt="图片">
如果觉得获取用户 id 的方式写了太多层级，可以在 vuex 中的 getters 中设置一个映射 <strong>src/store/getters.js</strong>
<img src="@source/.vuepress/public/images/ziliao02.png" alt="图片">
此时可以通过 dev-tools 工具在控制台清楚的看到数据已经获取
<img src="@source/.vuepress/public/images/ziliao03.png" alt="图片">
然后需要将头部菜单中的名称换成真实的用户名即可 Navbar.vue
<img src="@source/.vuepress/public/images/yonghuming1.png" alt="图片"></p>
<h3 id="获取头像接口-合并数据" tabindex="-1"><a class="header-anchor" href="#获取头像接口-合并数据" aria-hidden="true">#</a> 获取头像接口 合并数据</h3>
<p><strong>头像怎么办？</strong></p>
<blockquote>
<p>我们发现头像并不在接口的返回体中（接口原因），可以通过另一个接口来获取头像，并把头像合并到当前的资料中
<img src="@source/.vuepress/public/images/yonghuxiangqing.png" alt="图片"></p>
</blockquote>
<h4 id="封装获取用户信息接口-src-api-user-js" tabindex="-1"><a class="header-anchor" href="#封装获取用户信息接口-src-api-user-js" aria-hidden="true">#</a> 封装获取用户信息接口  <strong>src/api/user.js</strong></h4>
<p><img src="@source/.vuepress/public/images/touxiang1.png" alt="图片"></p>
<blockquote>
<p>这个接口需要用户的userId，在前一个接口处，已经获取到了，所以可以直接在后面的内容去衔接
<img src="@source/.vuepress/public/images/xiangqing2.png" alt="图片">
为了更好地获取头像，同样可以把头像放于 getters 中
<img src="@source/.vuepress/public/images/touxiangyingshe.png" alt="图片">
此时，头像和名称已经获取到了，可以直接将之前的假数据换成真正的头像和名称
<img src="@source/.vuepress/public/images/staff.png" alt="图片">
用户名已经显示，头像然依没有显示，这是因为虽然有地址，但是地址来源是私有云，目前已经失效，所以需要额外处理下图片的异常</p>
</blockquote>
<p>至于处理图片的异常，在下面中，可采用自定义指令的形式来进行处理</p>
<h2 id="自定义指令-解决异常图片情况" tabindex="-1"><a class="header-anchor" href="#自定义指令-解决异常图片情况" aria-hidden="true">#</a> 自定义指令 - 解决异常图片情况</h2>
<p>通过自定义指令的形式解决异常图片的处理</p>
<h3 id="注册自定义指令" tabindex="-1"><a class="header-anchor" href="#注册自定义指令" aria-hidden="true">#</a> 注册自定义指令</h3>
<p><a href="https://v2.cn.vuejs.org/v2/guide/custom-directive.html" target="_blank" rel="noopener noreferrer">https://v2.cn.vuejs.org/v2/guide/custom-directive.html 自定义指令文档<ExternalLinkIcon/></a></p>
<blockquote>
<p>自定义指令可以采用统一的文件来管理  <strong><code>src/directives/index.js</code></strong>,这个文件负责管理所有的自定义指令
<img src="@source/.vuepress/public/images/directive.png" alt="图片">
首先定义第一个自定义指令  <strong>v-imageError</strong></p>
</blockquote>
<h3 id="在-main-js-完成自定义指令全局注册" tabindex="-1"><a class="header-anchor" href="#在-main-js-完成自定义指令全局注册" aria-hidden="true">#</a> 在 main.js 完成自定义指令全局注册</h3>
<p>然后，在 <strong><code>main.js</code></strong> 中完成对于该文件中所有指令的全局注册
<img src="@source/.vuepress/public/images/directive2.png" alt="图片">
针对上面的引入语法  <strong><code>import *  as  变量</code></strong>  得到的是一个对象**<code>{ 变量1：对象1，变量2： 对象2 ...   }</code>**, 所以可以采用对象遍历的方法进行处理</p>
<p>指令注册成功，可以在 <strong>Navbar.vue</strong>中直接使用了
<img src="@source/.vuepress/public/images/defaultimage.png" alt="图片">
实现了一个自定义指令，解决图片加载异常的问题</p>
<h2 id="实现登出功能" tabindex="-1"><a class="header-anchor" href="#实现登出功能" aria-hidden="true">#</a> 实现登出功能</h2>
<p>实现用户的登出操作</p>
<blockquote>
<p>登出仅仅是跳到登录页吗？</p>
</blockquote>
<p>不，当然不是，要处理的业务如下 :
<img src="@source/.vuepress/public/images/dengchu.png" alt="图片">
同样的，登出功能，要在 vuex 中的用户模块中实现对应的 <strong>action</strong></p>
<h4 id="登出-action-src-store-modules-user-js" tabindex="-1"><a class="header-anchor" href="#登出-action-src-store-modules-user-js" aria-hidden="true">#</a> 登出 action  <strong><code>src/store/modules/user.js</code></strong></h4>
<p><img src="@source/.vuepress/public/images/lltt1.png" alt="图片"></p>
<h4 id="头部菜单调用-action-src-layout-components-navbar-vue" tabindex="-1"><a class="header-anchor" href="#头部菜单调用-action-src-layout-components-navbar-vue" aria-hidden="true">#</a> 头部菜单调用 action  <strong>src/layout/components/Navbar.vue</strong></h4>
<p><img src="@source/.vuepress/public/images/lltt2.png" alt="图片">
注意: <strong>这里也可以采用 vuex 中的模块化	引入辅助函数</strong>
<img src="@source/.vuepress/public/images/mokuaiaction.png" alt="图片"></p>
<h2 id="token-失效的主动介入" tabindex="-1"><a class="header-anchor" href="#token-失效的主动介入" aria-hidden="true">#</a> Token 失效的主动介入</h2>
<p>理当 token 失效时业务</p>
<h3 id="token-超时处理-客户端主动介入" tabindex="-1"><a class="header-anchor" href="#token-超时处理-客户端主动介入" aria-hidden="true">#</a> token 超时处理 - 客户端主动介入</h3>
<blockquote>
<p>开门的钥匙不是一直有效的，如果一直有效，会有安全风险，所以要尝试在客户端进行一下 token 的时间检查</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/chaoshi.png" alt="图片"></p>
<h3 id="流程图转化代码" tabindex="-1"><a class="header-anchor" href="#流程图转化代码" aria-hidden="true">#</a> 流程图转化代码</h3>
<p><strong>src/utils/auth.js</strong> 缓存
<img src="@source/.vuepress/public/images/shijianchuo1.png" alt="图片">
<strong>src/utils/request.js</strong>
<img src="@source/.vuepress/public/images/hi1.png" alt="图片">
<img src="@source/.vuepress/public/images/hi2.png" alt="图片">
在调用登录接口的时候 一定是没有token的，所以 token 检查不会影响登录接口的调用</p>
<blockquote>
<p>同理，在登录的时候，如果登录成功，应该设置时间戳
store/modules/user.js
<img src="@source/.vuepress/public/images/hi3.png" alt="图片"></p>
</blockquote>
<blockquote>
<p>有主动处理就有被动处理，也就是后端告诉我们超时了，我们被迫做出反应，如果后端接口没有做处理，主动介入就是一种简单的方式</p>
</blockquote>
<h2 id="token失效的被动处理" tabindex="-1"><a class="header-anchor" href="#token失效的被动处理" aria-hidden="true">#</a> Token失效的被动处理</h2>
<p>实现 token 失效的被动处理</p>
<blockquote>
<p>除了token的主动介入之外，我们还可以对token进行被动的处理，如图</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/beidong1.png" alt="图片">
token 超时的错误码是 <strong><code>10002</code></strong>
<img src="@source/.vuepress/public/images/beidong2.png" alt="图片">
无论是主动介入还是被动处理，这些操作都是为了更好地处理 token，减少错误异常的可能性</p>
</template>
