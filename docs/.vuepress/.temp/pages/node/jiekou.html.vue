<template><h1 id="使用-express-写接口" tabindex="-1"><a class="header-anchor" href="#使用-express-写接口" aria-hidden="true">#</a> 使用 Express 写接口</h1>
<h2 id="写接口" tabindex="-1"><a class="header-anchor" href="#写接口" aria-hidden="true">#</a> 写接口</h2>
<h3 id="创建基本的-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建基本的-web-服务器" aria-hidden="true">#</a> 创建基本的 web 服务器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// write code ..</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listening on port 80'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="创建-api-路由模块" tabindex="-1"><a class="header-anchor" href="#创建-api-路由模块" aria-hidden="true">#</a> 创建 API 路由模块</h3>
<p>apiRouter.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//导入 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./apiRouter.js'</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listening on port 80'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="编写-get-接口" tabindex="-1"><a class="header-anchor" href="#编写-get-接口" aria-hidden="true">#</a> 编写 GET 接口</h3>
<p>apiRouter.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/get'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req.query 获取客户端的通过查询字符串发送到服务器的数据</span>
  <span class="token keyword">const</span> query <span class="token operator">=</span> req<span class="token punctuation">.</span>query
  <span class="token comment">// res.send() 方法, 向客户端返回处理的结果</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 0 成功 , 1 失败</span>
    <span class="token literal-property property">mag</span><span class="token operator">:</span><span class="token string">'GET 请求成功'</span> 
    <span class="token literal-property property">data</span><span class="token operator">:</span> query
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="编写-post-接口" tabindex="-1"><a class="header-anchor" href="#编写-post-接口" aria-hidden="true">#</a> 编写 POST 接口</h3>
<p>apiRouter.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/get'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req.body 获取客户端的通过请求体, 发送到服务器的 URL-encoded 数据</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> req<span class="token punctuation">.</span>body
  <span class="token comment">// res.send() 方法, 向客户端返回处理的结果</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 0 成功 , 1 失败</span>
    <span class="token literal-property property">mag</span><span class="token operator">:</span><span class="token string">'POSt 请求成功'</span> 
    <span class="token literal-property property">data</span><span class="token operator">:</span> body
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>注意 : 入股要获取 URL-encoded 格式的请求体数据, 必须配置中间件 app.use(express.urlencoded({extended:false}))</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//导入 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./apiRouter.js'</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listening on port 80'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-跨域资源共享" aria-hidden="true">#</a> CORS 跨域资源共享</h2>
<p>上面编写的接口, <strong>不支持跨域请求</strong></p>
<p>两种解决方案:</p>
<ul>
<li>CORS(主流, 推荐使用)</li>
<li>JSONP(有缺陷, 只支持 GET)</li>
</ul>
<h3 id="cors-中间件解决跨域" tabindex="-1"><a class="header-anchor" href="#cors-中间件解决跨域" aria-hidden="true">#</a> CORS 中间件解决跨域</h3>
<p>cors 是 Express 的中间件, 通过安装和配置 cors 中间件, 可以方便的解决跨域问题</p>
<ol>
<li>npm install cors 安装中间件</li>
<li>const cors = require('cors') 导入中间件</li>
<li>在路由器你调用 app.use(cors())  配置中间件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 路由之前配置中间件 , 配置 cors 这个中间件, 解决跨域问题</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cors'</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//导入 路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./apiRouter.js'</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listening on port 80'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="cors-概念-和-注意事项" tabindex="-1"><a class="header-anchor" href="#cors-概念-和-注意事项" aria-hidden="true">#</a> CORS 概念 和 注意事项</h3>
<p>CORS (Cross-Origin Resource Sharing, 跨域资源共享) 有<strong>一系列 HTTP 响应头组成</strong>, 这些 HTTP 响应头决定浏览器是否组织前端 JS 代码 跨域获取资源</p>
<p>浏览器的同源策略默认会阻止网页 跨域 获取资源, 但接口服务器配置了 CORS 相关的HTTP响应头, 就可以接触浏览器端的跨域访问控制
<img src="@source/.vuepress/public/images/cors111.png" alt="图片"></p>
<p>注意事项:</p>
<ul>
<li>CORS 是在 <strong>服务端</strong> 进行配置</li>
<li><strong>有兼容性</strong> 例如(IE10+ , CHrome4+, Firefox3.5+)</li>
</ul>
<h3 id="cors响应头部-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#cors响应头部-access-control-allow-origin" aria-hidden="true">#</a> CORS响应头部 - Access-Control-Allow-Origin</h3>
<p>响应头中可以携带一个 Access-Control-Allow-Origin 字段</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Access-Control-Allow-Origin: &lt;origin> | *
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中, origin 参数<strong>指定了允许访问该资源的 URL</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span><span class="token string">'http://xxxxx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>表示通配符, 允许任何网站的请求</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span><span class="token string">'*'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="cors响应头部-access-control-allow-headers" tabindex="-1"><a class="header-anchor" href="#cors响应头部-access-control-allow-headers" aria-hidden="true">#</a> CORS响应头部 - Access-Control-Allow-Headers</h3>
<p>默认情况下, CORS 仅支持客户端向服务端发送的如下 9个请求头:
<img src="@source/.vuepress/public/images/qqt1.png" alt="图片"></p>
<p>如果客户端向服务端发送了额外的请求头信息, 则需要在服务端, 通过 Access-Control-Allow-Headers 对额外的请求头进行声明, 否则这次请求会失败</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Headers'</span><span class="token punctuation">,</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="cors响应头部-access-control-allow-methods" tabindex="-1"><a class="header-anchor" href="#cors响应头部-access-control-allow-methods" aria-hidden="true">#</a> CORS响应头部 - Access-Control-Allow-Methods</h3>
<p>默认情况下, CORS 只支持客户端发起 GET, POST ,HEAD 请求</p>
<p>如果客户端希望通过 <strong>PUT , DELETE</strong> 等方式请求服务端的资源, 则需要在服务端, 通过 Access-Control-Allow-Methods 来指明实际请求所允许使用的HTTP 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 只允许 'POST','GET','DELETE','HEAD' 请求方法</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Methods'</span><span class="token punctuation">,</span><span class="token string">'POST'</span><span class="token punctuation">,</span><span class="token string">'GET'</span><span class="token punctuation">,</span><span class="token string">'DELETE'</span><span class="token punctuation">,</span><span class="token string">'HEAD'</span><span class="token punctuation">)</span>
<span class="token comment">// 允许所有的 HTTP 请求方法</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Methods'</span><span class="token punctuation">,</span><span class="token string">'*'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="cors-请求的分类" tabindex="-1"><a class="header-anchor" href="#cors-请求的分类" aria-hidden="true">#</a> CORS 请求的分类</h3>
<p>根据请求方式和请求头的不同, 可以将 CORS 的请求分为两大类:</p>
<p>分别是</p>
<ul>
<li>简单请求</li>
<li>预检请求</li>
</ul>
<h3 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求" aria-hidden="true">#</a> 简单请求</h3>
<p>满足一下条件</p>
<ul>
<li>请求方式 : GET, POST , HEAD 三者之一</li>
<li>HTTP的头部信息不超过以下几种字段
<img src="@source/.vuepress/public/images/qqt2.png" alt="图片"></li>
</ul>
<h3 id="预检请求" tabindex="-1"><a class="header-anchor" href="#预检请求" aria-hidden="true">#</a> 预检请求</h3>
<p>只要符合任何一个条件的请求, 都需要进行预检请求</p>
<ul>
<li>请求方式为  <strong>GET, POST, HEAD 之外的请求 METHOD 类型</strong></li>
<li><strong>请求头中包含自定义头部字段</strong></li>
<li>向服务端发送了 <strong>application/json 格式的数据</strong></li>
</ul>
<p>浏览器和服务器正式通信之前, 浏览器<strong>会发送 OPTION 请求进行预检, 已获知服务器是否允许该实际请求</strong>, 所以这次的 OPTION 请求称为'预检请求',
<strong>服务器成功响应预检请求后, 才会发送真正的请求, 并且携带真实数据</strong></p>
<h3 id="简单请求和预检请求的区别" tabindex="-1"><a class="header-anchor" href="#简单请求和预检请求的区别" aria-hidden="true">#</a> 简单请求和预检请求的区别</h3>
<ul>
<li>
<p>简单请求的特点: 客户端和服务端之间<strong>只会发生一次请求</strong></p>
</li>
<li>
<p>预检请求的特点: 客户端和服务端之间只会发生两次请求,<strong>OPTION 预检请求成功之后, 才会发起真正的请求</strong></p>
</li>
</ul>
<h3 id="创建-jsonp-接口的注意事项" tabindex="-1"><a class="header-anchor" href="#创建-jsonp-接口的注意事项" aria-hidden="true">#</a> 创建 JSONP 接口的注意事项</h3>
<p>如果项目中已经配置了 CORS , <strong>为了防止冲突, 必须在配置 CORS 中间件之前声明 JSONP 的接口</strong>, 否则 JSONP 接口会被处理成开启了 CORS 的接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 优先创建 jsonp 的接口 [这个接口不会被处理成 CORS 接口]</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/jsonp'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// TODO: 接口具体的实现过程</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/get'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="实现-jsonp-的接口" tabindex="-1"><a class="header-anchor" href="#实现-jsonp-的接口" aria-hidden="true">#</a> 实现 jsonp 的接口</h3>
<ol>
<li><strong>获取</strong>客户端发送过来的<strong>回调函数的没名字</strong></li>
<li>得到要通过 JSONP 的形式发送给客户端的数据</li>
<li>根据前两部得到的数据, <strong>拼接出一个函数调用的字符串</strong></li>
<li>把上一步拼接得到的字符串, 响应给客户端的 <code>&lt;script&gt;</code> 标签进行解析执行</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/jsonp'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 获取客户端发送过来的回调函数的名字</span>
  <span class="token keyword">const</span> functionName <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>callback
  <span class="token comment">// 2. 定义要通过 jsonp 形式发送给客户端的数据</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
  <span class="token comment">// 3. 根据前两部拼接字符串, 拼接处函数调用的字符串</span>
  <span class="token keyword">const</span> scriptStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>functionName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
  <span class="token comment">// 4. 把字符串响应给客户端的 &lt;script> 标签进行解析执行 </span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>scriptStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
