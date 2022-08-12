<template><h1 id="登录模块" tabindex="-1"><a class="header-anchor" href="#登录模块" aria-hidden="true">#</a> 登录模块</h1>
<h2 id="设置固定的本地访问端口" tabindex="-1"><a class="header-anchor" href="#设置固定的本地访问端口" aria-hidden="true">#</a> 设置固定的本地访问端口</h2>
<p>先将项目的<strong>本地端口</strong>和<strong>网站名称</strong>进行一下调整</p>
<p><strong>本地服务端口</strong>:  在 <strong><code>vue.config.js</code></strong> 中进行设置</p>
<p><strong>vue.config.js</strong> 就是vue项目相关的编译，配置，打包，启动服务相关的配置文件，它的核心在于<strong>webpack</strong>，但是又不同于webpack，相当于改良版的webpack， <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">文档地址<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/port.png" alt="图片"></p>
<p><strong><code>.env.development</code></strong> 和 <strong><code>.env.production</code></strong> 两个文件</p>
<ul>
<li>当我们运行<strong>npm run dev</strong>进行开发调试的时候,此时会加载执行 <strong><code>.env.development</code></strong> 文件内容</li>
<li>当我们运行<strong>npm run build:prod</strong>进行生产环境打包的时候,会加载执行 <strong><code>.env.production</code></strong> 文件内容</li>
</ul>
<p>所以,如果想要设置开发环境的接口,直接在 <strong><code>.env.development</code></strong> 中写入对于 port 变量的赋值即可</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 设置端口号
port = 8888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/8888.png" alt="图片"></p>
<p><strong>网站名称</strong></p>
<h2 id="登录表单校验" tabindex="-1"><a class="header-anchor" href="#登录表单校验" aria-hidden="true">#</a> 登录表单校验</h2>
<h3 id="el-form-的表单先决条件" tabindex="-1"><a class="header-anchor" href="#el-form-的表单先决条件" aria-hidden="true">#</a> el-form 的表单先决条件</h3>
<p><img src="@source/.vuepress/public/images/jiaoyantiaojian.png" alt="图片"></p>
<h3 id="手机号和密码的检验" tabindex="-1"><a class="header-anchor" href="#手机号和密码的检验" aria-hidden="true">#</a> 手机号和密码的检验</h3>
<p>view/login/index.js
<img src="@source/.vuepress/public/images/denglu1.png" alt="图片">
<strong>utils/validate.js</strong> 中, 增加了一个校验手机号的方法
<img src="@source/.vuepress/public/images/utilshouji.png" alt="图片"></p>
<h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3>
<p>事件的几个修饰符 <strong><code>@keyup.enter.native</code></strong> 和 <strong><code>@click.native.prevent</code></strong></p>
<p>@keyup.enter 属于按键修饰符，如果我们想监听在按回车键的时候触发，可以如下编写</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;input v-on:keyup.enter="submit">
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>@keyup.enter.native 表示监听组件的原生事件，比如 keyup 就是于input的原生事件，这里写 native 表示 keyup 是一个原生事件</p>
<h2 id="vue-cli配置跨域代理" tabindex="-1"><a class="header-anchor" href="#vue-cli配置跨域代理" aria-hidden="true">#</a> Vue-Cli配置跨域代理</h2>
<h3 id="为什么会出现跨域" tabindex="-1"><a class="header-anchor" href="#为什么会出现跨域" aria-hidden="true">#</a> 为什么会出现跨域？</h3>
<p>当下,最流行的就是<strong>前后分离</strong>项目,前端项目和后端接口并不在一个域名之下，那么前端项目访问后端接口必然存在<strong>跨域</strong>的行为
<img src="@source/.vuepress/public/images/kuayu1.png" alt="图片"></p>
<blockquote>
<p>怎么解决这种跨域 ？</p>
</blockquote>
<p><em>开发时所遇到的这种跨域是位于<strong>开发环境</strong>的，真正部署上线时的跨域是<strong>生产环境</strong>的</em></p>
<h3 id="解决开发环境的跨域问题" tabindex="-1"><a class="header-anchor" href="#解决开发环境的跨域问题" aria-hidden="true">#</a> 解决开发环境的跨域问题</h3>
<p>vue-cli为我们在本地 <strong>开启了一个服务</strong>,可以通过这个服务帮我们 <strong>代理请求</strong> ,解决跨域问题</p>
<p>这就是 vue-cli 配置<strong>webpack 的反向代理</strong>
<img src="@source/.vuepress/public/images/kuayu2.png" alt="图片"></p>
<ul>
<li><strong>采用 vue-cli 的代理配置</strong></li>
</ul>
<p>vue-cli 的配置文件即<strong>vue.config.js</strong>,这里有我们需要的 <a href="https://cli.vuejs.org/zh/config/#devserver-proxy" target="_blank" rel="noopener noreferrer">代理选项<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// 代理配置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制</span>
        <span class="token comment">// localhost:8888/api/abc  => 代理给另一个服务器</span>
        <span class="token comment">// 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）</span>
        <span class="token comment">// 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）</span>
        <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'www.baidu.com'</span><span class="token punctuation">,</span> <span class="token comment">// 我们要代理的地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求</span>
         <span class="token comment">// 路径重写</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 重新路由  localhost:8888/api/login  => www.baidu.com/api/login</span>
            <span class="token string-property property">'^/api'</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment">// 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做 </span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>在这个项目里面 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// 代理跨域的配置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">// 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://ihrm-java.itheima.net/'</span><span class="token punctuation">,</span> <span class="token comment">// 跨域请求的地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 只有这个值为 true 的情况下 才表示开启跨域</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>注意</strong>: 并没有进行<strong>pathRewrite</strong>,因为后端接口就是<code>ihrm-java.itheima.net/api</code>这种格式,所以不需要重写</p>
<h2 id="封装单独的登录接口" tabindex="-1"><a class="header-anchor" href="#封装单独的登录接口" aria-hidden="true">#</a> 封装单独的登录接口</h2>
<p>查阅接口文档中的登录接口</p>
<p>api/user.js 登录接口
<img src="@source/.vuepress/public/images/denglujiekou.png" alt="图片"></p>
<p>不需要加 '/api' , 因为所有的接口都要跨域 表示所有的接口都带 /api</p>
<h2 id="封装vuex中的登录action并处理token" tabindex="-1"><a class="header-anchor" href="#封装vuex中的登录action并处理token" aria-hidden="true">#</a> 封装Vuex中的登录Action并处理token</h2>
<p>在vuex中封装登录的action,并处理token</p>
<h3 id="在-vuex-中对-token-进行管理" tabindex="-1"><a class="header-anchor" href="#在-vuex-中对-token-进行管理" aria-hidden="true">#</a> 在 Vuex 中对 token 进行管理</h3>
<p>在传统模式中，我们登录的逻辑很简单，如图
<img src="@source/.vuepress/public/images/dl1.png" alt="图片">
上图中，组件直接和接口打交道，这并没有什么问题，但是对于用户 token 这一高频使用的<strong>钥匙</strong>，我们需要让 Vuex 来介入，将用户的 token 状态共享，更方便的读取，如图
<img src="@source/.vuepress/public/images/dl2.png" alt="图片"></p>
<h4 id="实现store-modules-user-js基本配置" tabindex="-1"><a class="header-anchor" href="#实现store-modules-user-js基本配置" aria-hidden="true">#</a> 实现store/modules/user.js基本配置</h4>
<p><img src="@source/.vuepress/public/images/user01.png" alt="图片"></p>
<h4 id="设置-token-的共享状态" tabindex="-1"><a class="header-anchor" href="#设置-token-的共享状态" aria-hidden="true">#</a> 设置 token 的共享状态</h4>
<p><img src="@source/.vuepress/public/images/statetoken.png" alt="图片"></p>
<p>需要知道,<strong>钥匙</strong>不能每次都通过登录获取, 可以将 token 放置到本地的缓存中</p>
<p>在<strong>utils/auth.js</strong>中, 基础模板已经为我们提供了**<code>获取token</code><strong>,</strong><code>设置token</code><strong>,</strong><code>删除token</code>**的方法, 可以直接使用</p>
<p><img src="@source/.vuepress/public/images/jscookie.png" alt="图片"></p>
<h4 id="初始化-token-状态-store-modules-user-js" tabindex="-1"><a class="header-anchor" href="#初始化-token-状态-store-modules-user-js" aria-hidden="true">#</a> 初始化 token 状态 - store/modules/user.js</h4>
<p><img src="@source/.vuepress/public/images/tk1.png" alt="图片"></p>
<h4 id="提供能修改-token-的-mutations" tabindex="-1"><a class="header-anchor" href="#提供能修改-token-的-mutations" aria-hidden="true">#</a> 提供能修改 token 的 mutations</h4>
<p><img src="@source/.vuepress/public/images/muto.png" alt="图片"></p>
<h3 id="封装登录的-action" tabindex="-1"><a class="header-anchor" href="#封装登录的-action" aria-hidden="true">#</a> 封装登录的 Action</h3>
<p>登录的 action 其实就是要给组件调用的</p>
<p>登录 action 要做的事情 : <strong>调用登录接口</strong>,<strong>成功后设置 token 到 vuex</strong>, <strong>失败则返回失败</strong>
<img src="@source/.vuepress/public/images/loginaction1.png" alt="图片"></p>
<p>除此之外，为了<strong>更好的让其他模块和组件更好的获取 token 数据</strong>，我们可以在**<code>store/getters.js</code>**中将 token 值作为公共的访问属性放出
<img src="@source/.vuepress/public/images/quanjutoken.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/zongjie1.png" alt="图片"></p>
<h2 id="request-中环境变量和异常的处理" tabindex="-1"><a class="header-anchor" href="#request-中环境变量和异常的处理" aria-hidden="true">#</a> request 中环境变量和异常的处理</h2>
<h3 id="区分-axios-在不同环境中的请求基础地址" tabindex="-1"><a class="header-anchor" href="#区分-axios-在不同环境中的请求基础地址" aria-hidden="true">#</a> 区分 axios 在不同环境中的请求基础地址</h3>
<p>为什么会有环境变量之分?
<img src="@source/.vuepress/public/images/kaifa1.png" alt="图片"></p>
<p>开发环境实际上就是在自己的本地开发或者要求不那么高的环境，但是一旦进入生产，就是<strong>真实的数据</strong>。 拿银行作比喻，如果在开发环境拿生产环境的接口做测试，银行系统就会发生很大的风险</p>
<p>前端主要区分两个环境 , <strong>开发环境</strong>,<strong>生产环境</strong></p>
<h4 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>process.env.NODE_ENV // 当为 production 时为生产环境 为 development 时为开发环境
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="环境文件" tabindex="-1"><a class="header-anchor" href="#环境文件" aria-hidden="true">#</a> 环境文件</h4>
<p>可以在**<code>.env.development</code><strong>和</strong><code>.env.production</code>**定义变量，变量自动就为当前环境的值</p>
<p>基础模板在以上文件定义了变量**<code>VUE_APP_BASE_API</code><strong>，该变量可以作为 axios 请求的</strong>baseURL**</p>
<p>在基础模板中,两个值分别为**<code>/dev-api</code><strong>和</strong><code>/prod-api</code>**</p>
<p>但是我们的<strong>开发环境代理</strong>是**/api**，所以要统一下</p>
<p><img src="@source/.vuepress/public/images/dev11.png" alt="图片"></p>
<h4 id="在request中设置baseurl" tabindex="-1"><a class="header-anchor" href="#在request中设置baseurl" aria-hidden="true">#</a> 在request中设置baseURL</h4>
<p>utils/request.js
<img src="@source/.vuepress/public/images/requestaxios.png" alt="图片"></p>
<h3 id="处理-axios-的响应拦截器" tabindex="-1"><a class="header-anchor" href="#处理-axios-的响应拦截器" aria-hidden="true">#</a> 处理 axios 的响应拦截器</h3>
<p>axios 返回的数据中默认增加了一层<strong>data 的包裹</strong>, 需要在这里处理下</p>
<p>并且,人资项目的接口, 如果执行失败,只是设置了<strong>success</strong>为**<code>false</code>**，并没有 reject，所以也需要一并处理下</p>
<p><img src="@source/.vuepress/public/images/xiangying1.png" alt="图片">
<img src="@source/.vuepress/public/images/xiangying2.png" alt="图片">
既然在 request 中已经默认去除了一层 data 的外衣，所以也将上一次 login 的 action 进行一下改动</p>
<h4 id="处理登录的返回结构问题" tabindex="-1"><a class="header-anchor" href="#处理登录的返回结构问题" aria-hidden="true">#</a> 处理登录的返回结构问题</h4>
<p><img src="@source/.vuepress/public/images/actionlogin.png" alt="图片"></p>
<h2 id="登录页面调用登录-action-处理异常-细节多" tabindex="-1"><a class="header-anchor" href="#登录页面调用登录-action-处理异常-细节多" aria-hidden="true">#</a> 登录页面调用登录 action, 处理异常 (细节多)</h2>
<p>目标 : 调用 vuex 中的登录 action ,并跳转到主页</p>
<h4 id="组件内引入-actions-辅助函数" tabindex="-1"><a class="header-anchor" href="#组件内引入-actions-辅助函数" aria-hidden="true">#</a> 组件内引入 actions 辅助函数</h4>
<p><img src="@source/.vuepress/public/images/act1.png" alt="图片"></p>
<h4 id="引入action方法" tabindex="-1"><a class="header-anchor" href="#引入action方法" aria-hidden="true">#</a> 引入action方法</h4>
<p>这里采用直接引入模块 action 的方式，后面要采用分模块的引用方式
<img src="@source/.vuepress/public/images/act2.png" alt="图片"></p>
<h4 id="调用登录" tabindex="-1"><a class="header-anchor" href="#调用登录" aria-hidden="true">#</a> 调用登录</h4>
<p><img src="@source/.vuepress/public/images/act3.png" alt="图片"></p>
<p>调用的是Vuex中子模块的 action，该模块我们进行了namespaced: true，所以引用 action 时需要带上<strong>user/</strong>, 并且在使用该方法时，直接使用 <strong><code>this['user/login']</code></strong>, 使用 this.user/login 语法是错误的</p>
</template>
