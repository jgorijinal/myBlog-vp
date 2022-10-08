<template><h1 id="http-模块" tabindex="-1"><a class="header-anchor" href="#http-模块" aria-hidden="true">#</a> http 模块</h1>
<p>创建 web 服务器</p>
<p>先导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建最基本的-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建最基本的-web-服务器" aria-hidden="true">#</a> 创建最基本的 web 服务器</h2>
<h3 id="基本步骤" tabindex="-1"><a class="header-anchor" href="#基本步骤" aria-hidden="true">#</a> 基本步骤</h3>
<ol>
<li>导入 http 模块</li>
<li>创建 web 服务器实例</li>
<li>为服务器实例绑定 <code>request</code> 事件, 监听客户端的请求</li>
<li>启动服务器</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 导入 http 模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 创建 web 服务器实例</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 服务器实例绑定 request 事件</span>
<span class="token comment">// 使用服务器实例的 .on 方法 ,  为服务器绑定一个 request 事件</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 只要有客户端请求自己的服务器, 就会触发 request 事件, 从而调用这个事件函数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'someone visit our web server'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. 启动服务器</span>
<span class="token comment">// 调用 server.listen(端口号, cb回调) 方法, 即可启动 web 服务器</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'http server running on port 80 '</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="req-请求对象" tabindex="-1"><a class="header-anchor" href="#req-请求对象" aria-hidden="true">#</a> req 请求对象</h3>
<p>只要服务器接收到了客户端的请求, 就会调用 server.on() 为服务器绑定的 <strong>request 事件处理函数</strong></p>
<p>如果想在事件处理函数中, 访问客户端相关的<strong>数据</strong>或<strong>属性</strong> , 使用如下方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req 是请求对象, 它包含了客户端相关的数据和属性</span>
  <span class="token comment">// req.url 是客户端请求的 URL 地址</span>
  <span class="token comment">// req.method 是客户端的 method 请求类型</span>
  
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="res-响应对象" tabindex="-1"><a class="header-anchor" href="#res-响应对象" aria-hidden="true">#</a> res 响应对象</h3>
<p>访问与服务器相关的<strong>数据</strong>或<strong>属性</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// req 是请求对象, 它包含了客户端相关的数据和属性</span>
  <span class="token comment">// req.url 是客户端请求的 URL 地址</span>
  <span class="token comment">// req.method 是客户端的 method 请求类型</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
  <span class="token keyword">const</span> resStr <span class="token operator">=</span> `request url is $<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> request method is $<span class="token punctuation">{</span>req<span class="token punctuation">.</span>method<span class="token punctuation">}</span>`

  <span class="token comment">// res.end() 方法的作用</span>
  <span class="token comment">// 想客户端发送指定的内容, 并结束这次请求的处理过程</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>reqStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="解决中文乱码问题" tabindex="-1"><a class="header-anchor" href="#解决中文乱码问题" aria-hidden="true">#</a> 解决中文乱码问题</h3>
<p>当调用 res.end() 方法, 向客户端发送中文内容, 会出现乱码问题, 此时需要<strong>手动设置内容的编码格式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span> <span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你请求的 url 地址是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 请求的 method 类型是 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>

<span class="token comment">// 为了防止中文乱码问题, 需要设置响应头 Content-Type 的值为 text/html; charset=utf-8</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> 'text<span class="token operator">/</span>html<span class="token punctuation">;</span> charset<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span>

<span class="token comment">// 把包含中文的内容, 响应给客户端</span>
res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="根据不同的-url-响应不同的-html-内容" tabindex="-1"><a class="header-anchor" href="#根据不同的-url-响应不同的-html-内容" aria-hidden="true">#</a> 根据不同的 url 响应不同的 html 内容</h2>
<ol>
<li>获取<strong>请求的 url 地址</strong></li>
<li>设置<strong>默认的响应内容</strong>为 404 Not Found</li>
<li>判断用户请求的是否为 <strong>/</strong> 或 <strong>index.html</strong></li>
<li>判断用户请求的是否为 /about.html 关于页面</li>
<li>设置 <strong>Content-Type 响应头</strong>, 防止中文乱码</li>
<li>使用 <strong>res.end()</strong> 把内容响应给客户端</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url                       <span class="token comment">// 1. 获取 请求的 url 地址</span>
  <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">'&lt;h1>404 not found&lt;/h1>'</span>    <span class="token comment">// 2. 设置默认的内容为 404 </span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">'/'</span> <span class="token operator">||</span> url <span class="token operator">===</span> <span class="token string">'/index.html'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 3. 用户请求的是首页</span>
    content <span class="token operator">=</span> <span class="token string">'&lt;h1>首页&lt;/h1>'</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">'/about.html'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>           <span class="token comment">// 用户请求的是关于页面</span>
    content <span class="token operator">=</span> <span class="token string">'&lt;h1>关于页面&lt;/h1>'</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'text/html; charset=utf-8'</span><span class="token punctuation">)</span>  <span class="token comment">// 设置 Content-Type , 防止中文乱码</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>   <span class="token comment">// 把内容个发送给客户端 </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<p>把文件的<strong>实际存放路径</strong>, 作为每个资源的请求 url 地址
<img src="@source/.vuepress/public/images/fwq1.png" alt="图片"></p>
<ol>
<li>导入模块</li>
<li>创建基本的 web 服务器</li>
<li>将资源的请求 url 地址映射为文件的存放路径</li>
<li>读取文件内容并响应给客户端</li>
<li>优化请求的请求路径</li>
</ol>
<h3 id="_1-导入需要的模块" tabindex="-1"><a class="header-anchor" href="#_1-导入需要的模块" aria-hidden="true">#</a> 1. 导入需要的模块</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-创建基本的-web-服务器" tabindex="-1"><a class="header-anchor" href="#_2-创建基本的-web-服务器" aria-hidden="true">#</a> 2. 创建基本的 web 服务器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建 web 服务器</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 监听 web 服务器 , request 事件</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span> <span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 启动 web 服务器</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server listen on http://127.0.0.1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-将资源的请求-url-地址映射为文件的存放路径" tabindex="-1"><a class="header-anchor" href="#_3-将资源的请求-url-地址映射为文件的存放路径" aria-hidden="true">#</a> 3. 将资源的请求 url 地址映射为文件的存放路径</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 获取到客户端请求的 url 地址</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url
<span class="token comment">// 2. 把请求的 url 地址, 映射为本地文件的存放路径</span>
<span class="token keyword">const</span> fpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span> url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-读取文件的内容响应给客户端" tabindex="-1"><a class="header-anchor" href="#_4-读取文件的内容响应给客户端" aria-hidden="true">#</a> 4. 读取文件的内容响应给客户端</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 根据映射过来的文件路径读取文件</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>fpath <span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 读取文件失败, 相关客户端响应固定的 '错误消息'</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'404 not found'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 读取文件成功后, 内容响应给客户端</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_5-优化资源的请求路径" tabindex="-1"><a class="header-anchor" href="#_5-优化资源的请求路径" aria-hidden="true">#</a> 5. 优化资源的请求路径</h3>
<ul>
<li>/ 根路径跳转到 /clock/index.html</li>
<li>直接输入 index.html 也可以跳转</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 改下第三个步骤的代码</span>

<span class="token keyword">let</span> fpath <span class="token operator">=</span> <span class="token string">''</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果请求路径为 '/' , 手动指定文件路径</span>
  fpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span><span class="token string">'./clock/index.html'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入股请求丼不为 '/', 动态拼接请求路径</span>
  fpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span> <span class="token string">'./clock'</span><span class="token punctuation">,</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
