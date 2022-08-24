<template><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1>
<h2 id="两种路由模式" tabindex="-1"><a class="header-anchor" href="#两种路由模式" aria-hidden="true">#</a> 两种路由模式</h2>
<ul>
<li><strong>hash模式</strong> :  #后面是路由路径 ,特点是前端访问 , #后面的变化不会经过服务器(不会重新刷新页面), 页面的控制都是由前端来做的</li>
<li><strong>history模式</strong> :  没有# , 只是 / , 特点是后端访问 , 任意地址的变化都会访问服务器</li>
</ul>
<p>这个项目一直用的是 hash模式 , 打包尝试使用 history 模式
<img src="@source/.vuepress/public/images/mode1.png" alt="图片"></p>
<p>可以配置一个base属性，配置为hr
<img src="@source/.vuepress/public/images/hr0.png" alt="图片">
<img src="@source/.vuepress/public/images/hr1.png" alt="图片"></p>
<h2 id="性能分析和-cdn-应用" tabindex="-1"><a class="header-anchor" href="#性能分析和-cdn-应用" aria-hidden="true">#</a> 性能分析和 cdn 应用</h2>
<h3 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h3>
<blockquote>
<p>集成了 功能，写了很多组件，最终都会打包成一堆文件，那么真实运行的性能如何 ?</p>
</blockquote>
<p>可以使用vue-cli本身提供的性能分析工具，对我们开发的所有功能进行打包分析</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run preview -- --report
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会从我们的 <strong><code>入口main.js</code></strong> 进行依赖分析，分析出最大的包，方便我们进行观察和优化
<img src="@source/.vuepress/public/images/preview.png" alt="图片">
如图所以，方块越大，说明该文件占用的文件越大，文件越大，对于网络带宽和访问速度的要求就越高，这也就是优化的方向</p>
<h3 id="webpack-排除打包" tabindex="-1"><a class="header-anchor" href="#webpack-排除打包" aria-hidden="true">#</a> webpack 排除打包</h3>
<p>CDN是一个比较好的方式</p>
<blockquote>
<p>文件不是大吗？就不要把这些大的文件和那些小的文件打包到一起了，像这种xlsx,element这种功能性很全的插件，我们可以放到CDN服务器上，一来 ，减轻整体包的大小，二来CDN的加速服务可以加快我们对于插件的访问速度</p>
</blockquote>
<p>使用方式:</p>
<p>先找到 <code>vue.config.js</code>， 添加 <code>externals</code> 让 <code>webpack</code> 不打包<code>vue</code> ,  <code>xlsx</code> 和 <code>element</code></p>
<p><strong>vue.config.js</strong>
<img src="@source/.vuepress/public/images/externals.png" alt="图片">
在运行 npm run preview -- --report 看一看发现 xlsx 和 elementui, 没了
<img src="@source/.vuepress/public/images/paichu.png" alt="图片">
发现包的大小已经大幅减小</p>
<h3 id="cdn-文件配置" tabindex="-1"><a class="header-anchor" href="#cdn-文件配置" aria-hidden="true">#</a> CDN 文件配置</h3>
<blockquote>
<p>但是，没有被打包的几个模块怎么处理？</p>
</blockquote>
<p>可以采用 CDN 的方式，在页面模板中预先引入</p>
<p><strong>vue.config.js</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cdn <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// element-ui css</span>
    <span class="token string">'https://unpkg.com/element-ui/lib/theme-chalk/index.css'</span> <span class="token comment">// 样式表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// vue must at first!</span>
    <span class="token string">'https://unpkg.com/vue/dist/vue.js'</span><span class="token punctuation">,</span> <span class="token comment">// vuejs</span>
    <span class="token comment">// element-ui js</span>
    <span class="token string">'https://unpkg.com/element-ui/lib/index.js'</span><span class="token punctuation">,</span> <span class="token comment">// elementUI</span>
      <span class="token string">'https://cdn.jsdelivr.net/npm/xlsx@0.16.6/dist/jszip.min.js'</span><span class="token punctuation">,</span>
    <span class="token string">'https://cdn.jsdelivr.net/npm/xlsx@0.16.6/dist/xlsx.full.min.js'</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>但是要注意，这时的配置实际上是对开发环境和生产环境都生效的，<strong>在开发环境时，没有必要使用CDN</strong>，此时可以使用环境变量来进行区分开发环境和生产环境</p>
<p><img src="@source/.vuepress/public/images/cdn1.png" alt="图片">
<img src="@source/.vuepress/public/images/cdn2.png" alt="图片"></p>
<h3 id="注入-cdn-文件到模板" tabindex="-1"><a class="header-anchor" href="#注入-cdn-文件到模板" aria-hidden="true">#</a> 注入 CDN 文件到模板</h3>
<p>之后通过 <code>html-webpack-plugin</code> 注入到 <code>index.html</code>之中:
<img src="@source/.vuepress/public/images/cdn3.png" alt="图片">
找到 <code>public/index.html</code>。通过你配置的<code>CDN Config</code> 依次注入 css 和 js
<img src="@source/.vuepress/public/images/cdn5.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="在-nodejs-环境中应用并代理跨域" tabindex="-1"><a class="header-anchor" href="#在-nodejs-环境中应用并代理跨域" aria-hidden="true">#</a> 在 nodejs 环境中应用并代理跨域</h2>
<h3 id="使用-koa-框架部署项目" tabindex="-1"><a class="header-anchor" href="#使用-koa-框架部署项目" aria-hidden="true">#</a> 使用 koa 框架部署项目</h3>
<p>已经完成了一个前端工程师的开发流程，按照常规的做法，此时，运维会将代码部署到阿里云的ngix服务上，但对于我而言,我可以将其部署到本机的 nodejs 环境中</p>
<p>第一步，建立web服务文件夹  <strong><code>hrServer</code></strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> hrServer <span class="token comment">#建立hrServer文件夹 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步，在该文件夹下，初始化npm</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第三步，安装服务端框架koa(也可以采用express或者egg)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i koa koa-static
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第四步，拷贝打包的 dist 目录到 **<code>hrServer/public</code>**下</p>
<p>第五步，在根目录下创建app.js，代码如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const Koa  = require('koa')
const serve = require('koa-static');

const app = new Koa();
app.use(serve(__dirname + "/public")); //将public下的代码静态化
app.listen(3333, () => {
     console.log('人资项目启动')
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>运行 node app 访问 http://localhost:3333</p>
<h3 id="解决history页面访问问题" tabindex="-1"><a class="header-anchor" href="#解决history页面访问问题" aria-hidden="true">#</a> 解决history页面访问问题</h3>
<p>但是，此时存在两个问题，</p>
<ol>
<li><strong>当我们刷新页面，发现404</strong></li>
</ol>
<blockquote>
<p>这是因为采用了history的模式，地址的变化会引起服务器的刷新，只需要在 app.js 对所有的地址进行一下处理即可</p>
</blockquote>
<p>安装 koa中间件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i koa2-connect-history-api-fallback <span class="token comment">#专门处理history模式的中间件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注册中间件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Koa  <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> serve <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa-static'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span>  <span class="token punctuation">{</span> historyApiFallback <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa2-connect-history-api-fallback'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 这句话 的意思是除接口之外所有的请求都发送给了 index.html</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">historyApiFallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
     <span class="token literal-property property">whiteList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/prod-api'</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 这里的whiteList是 白名单的意思</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">"/public"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将public下的代码静态化</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3333</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'人资项目启动'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="解决生产环境跨域问题" tabindex="-1"><a class="header-anchor" href="#解决生产环境跨域问题" aria-hidden="true">#</a> 解决生产环境跨域问题</h3>
<ol>
<li>当点击登录时，发现接口 404</li>
</ol>
<blockquote>
<p>前vue-cli的代理只存在于开发期，当我们上线到node环境或者ngix环境时，需要再次在环境中代理</p>
</blockquote>
<p>在nodejs中代理</p>
<p>安装跨域代理中间件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i koa2-proxy-middleware
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置跨越代理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Koa  <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> serve <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa-static'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span>  <span class="token punctuation">{</span> historyApiFallback <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa2-connect-history-api-fallback'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa2-proxy-middleware'</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// (.*) means anything</span>
    <span class="token comment">// 代理那个地址 , 代理以/prod-api 为开头的地址</span>
    <span class="token string-property property">'/prod-api/(.*)'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://ihrm-java.itheima.net/api'</span><span class="token punctuation">,</span> <span class="token comment">//将 /prod-api 为开头的内容代理到改地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> 	
            <span class="token string-property property">'/prod-api'</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 这句话 的意思是除接口之外所有的请求都发送给了 index.html</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">historyApiFallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    <span class="token literal-property property">whiteList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/prod-api'</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 这里的whiteList是 白名单的意思</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">"/public"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将public下的代码静态化</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3333</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'人资项目启动'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>注意：这里之所以用了<strong>pathRewrite</strong>，是因为生产环境的请求基础地址是 <strong>/prod-api</strong>，需要将该地址去掉</p>
</template>
