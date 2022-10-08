<template><h1 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<h3 id="安装-express" tabindex="-1"><a class="header-anchor" href="#安装-express" aria-hidden="true">#</a> 安装 express</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i express@4.17.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建基本的-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建基本的-web-服务器" aria-hidden="true">#</a> 创建基本的 web 服务器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入 express 模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建 web 服务器</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 调用 app.listen(端口号, 启动成功后的回调函数), 启动服务器</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>'express listening on port <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="监听-get-post-请求" tabindex="-1"><a class="header-anchor" href="#监听-get-post-请求" aria-hidden="true">#</a> 监听 GET / POST 请求</h3>
<p><code>app.get()</code> 或 <code>app.post()</code> 方法, 可以监听客户端的 GET 请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 参数1 : 客户端请求的 url</span>
<span class="token comment">// 参数2 : 请求对应的处理函数</span>
<span class="token comment">//      req: 请求对象</span>
<span class="token comment">//      res: 响应对象</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'请求的url'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*处理函数*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   
<span class="token comment">// 或者</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'请求的url'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*处理函数*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="把内容响应给客户端" tabindex="-1"><a class="header-anchor" href="#把内容响应给客户端" aria-hidden="true">#</a> 把内容响应给客户端</h3>
<p><code>res.send()</code>方法, 把处理好的内容, 发送给服务端</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 向客户端发送 json 对象</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span> <span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 向客户端发送文本那内容</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'请求成功'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="获取-url-中携带的查询参数" tabindex="-1"><a class="header-anchor" href="#获取-url-中携带的查询参数" aria-hidden="true">#</a> 获取 URL 中携带的查询参数</h3>
<p>通过 <strong>req.query</strong> 对象, 可以访问到客户端通过查询字符串的形式, 发送到服务器的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req.query 默认是个空对象</span>
  <span class="token comment">// 客户端使用 ?name=frank&amp;age=18 的格式, 发送服务器的参数</span>
  <span class="token comment">// 可以通过 req.query.name  req.query.age 访问到</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="获取-url-中的动态参数" tabindex="-1"><a class="header-anchor" href="#获取-url-中的动态参数" aria-hidden="true">#</a> 获取 url 中的动态参数</h3>
<p><code>res.params</code> 对象, 可以访问到URL中, 通过 <code>:</code> 匹配到的动态参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req.params 默认空对象</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
  <span class="token comment">// 输出 如  { id : 1}</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="托管静态资源" tabindex="-1"><a class="header-anchor" href="#托管静态资源" aria-hidden="true">#</a> 托管静态资源</h2>
<h3 id="express-static" tabindex="-1"><a class="header-anchor" href="#express-static" aria-hidden="true">#</a> express.static()</h3>
<p><strong>非常方便的创建一个静态资源服务器</strong></p>
<p>例如: 如下代码, 将 public 目录下的图片 ,css 文件, JavaScript 文件对外开放访问了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>就可以访问 public 目录中的所有文件了</p>
<p><img src="@source/.vuepress/public/images/pub1.png" alt="图片"></p>
<p><strong>注意 :</strong> Express 在<strong>指定的</strong>静态目录中查找文件, 并对外提供资源的访问路径, 因此<strong>存放静态资源的目录名不会出现在 URL 中</strong> !</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 调用 express.static() 提供静态资源</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'启动'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="托管多个静态资源目录" tabindex="-1"><a class="header-anchor" href="#托管多个静态资源目录" aria-hidden="true">#</a> 托管多个静态资源目录</h3>
<p>如果要托管多个静态资源目录, 需要多次调用 express.static() 函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>访问静态资源文件时, express.static() 会<strong>根据目录的添加顺序</strong>查找所需的文件</p>
<h3 id="挂载路径前缀" tabindex="-1"><a class="header-anchor" href="#挂载路径前缀" aria-hidden="true">#</a> 挂载路径前缀</h3>
<p>前面加一下<strong>访问前缀</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/public'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过 public 前缀地址来访问 public 目录的文件了
<img src="@source/.vuepress/public/images/pub3.png" alt="图片"></p>
<h2 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon" aria-hidden="true">#</a> nodemon</h2>
<p>修改了代码每次都要重启, 非常繁琐</p>
<p>现在可以使用 nodemon , 它<strong>能够监听项目文件的变动</strong>, 当代码被修改后, nodemon 会<strong>自动帮我们重启项目</strong> , 极大方便了开发和调试</p>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 nodemon</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> app.js
<span class="token comment"># 将上面命令替换为下面命令</span>
nodemon app.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<h3 id="express-中的路由" tabindex="-1"><a class="header-anchor" href="#express-中的路由" aria-hidden="true">#</a> Express 中的路由</h3>
<p>在 Express 中, 路由指的是 <strong>客户端的请求</strong> 与 <strong>服务器处理函数</strong>之间的<em>映射关系</em></p>
<p>Express的路由有三部分组成, <strong>请求的类型</strong>, <strong>请求的 URL 地址</strong>, <strong>处理函数</strong>, 格式如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">(</span><span class="token constant">PATH</span> <span class="token punctuation">,</span> <span class="token constant">HANDLER</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>比如, app.get('/',function(req,res){...})</p>
<h3 id="路由的匹配过程" tabindex="-1"><a class="header-anchor" href="#路由的匹配过程" aria-hidden="true">#</a> 路由的匹配过程</h3>
<p>每当一个请求请求到服务器, <strong>需要先经过路由的匹配</strong>,只有匹配成功, 才会调用对应的处理函数</p>
<p>在匹配时, 会按照路由的顺序进行匹配, 如果 <strong>请求类型</strong> 和 <strong>请求的 url</strong> 同时匹配成功, 则 Express  会将这次请求转交给对应的  function 函数进行处理
<img src="@source/.vuepress/public/images/luyou1.png" alt="图片"></p>
<p>注意:</p>
<ul>
<li>按照<strong>先后顺序</strong></li>
<li><strong>请求类型, 请求的 url</strong> 同时匹配成功, 才会调用对应的处理函数</li>
</ul>
<h3 id="最简单用法" tabindex="-1"><a class="header-anchor" href="#最简单用法" aria-hidden="true">#</a> 最简单用法</h3>
<p>最简单的方式, 把路由挂载到 app 上 , 代码如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listening on port 80'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="模块化路由" tabindex="-1"><a class="header-anchor" href="#模块化路由" aria-hidden="true">#</a> 模块化路由</h3>
<p>为了方便对路由进行模块化管理, Express <strong>不建议</strong> 将路由直接挂载到 app 上, <strong>而是推荐将路由抽离为单独的模块</strong></p>
<ol>
<li>创建路由对应的 .js 文件</li>
<li>调用 <code>express.Router()</code> 函数创建路由对象</li>
<li>向路由实例挂载具体的路由</li>
<li>使用 <strong>module.exports</strong> 向外共享路由对象</li>
<li>使用 <strong>app.use</strong> 函数注册路由模块</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建路由对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 挂载具体的路由</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/list'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Get user list'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'user/list'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'add new user'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// module.exports 导出</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>然后 <code>app.use()</code> <strong>注册</strong>路由模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入路由模块</span>
<span class="token keyword">const</span> userRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./router/user.js'</span><span class="token punctuation">)</span>
<span class="token comment">// 使用 app.use() 注册路由模块</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>userRouter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>app.use()</code> 的作用 : 就是来注册全局中间件</p>
<h4 id="为路由模块添加访问前缀" tabindex="-1"><a class="header-anchor" href="#为路由模块添加访问前缀" aria-hidden="true">#</a> 为路由模块添加访问前缀</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入路由模块</span>
<span class="token keyword">const</span> userRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./router/user.js'</span><span class="token punctuation">)</span>
<span class="token comment">// 使用 app.use() 注册路由模块</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> userRouter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
