<template><h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1>
<h2 id="前后端分离的优势" tabindex="-1"><a class="header-anchor" href="#前后端分离的优势" aria-hidden="true">#</a> 前后端分离的优势</h2>
<p>早期的网页都是通过后端渲染来完成的：服务器端渲染（<code>SSR</code>，server side render）：</p>
<ul>
<li>客户端发出请求 -&gt; 服务端接收请求并返回相应HTML文档 -&gt; 页面刷新，客户端加载新的HTML文档；</li>
</ul>
<p>服务器端渲染的缺点：</p>
<ul>
<li>当用户点击页面中的某个按钮向服务器发送请求时，页面本质上只是一些数据发生了变化，而此时服务器却要将重绘的整个页面再返</li>
</ul>
<p>回给浏览器加载，这显然有悖于程序员的<code>“ DRY（ Don‘t repeat yourself ）”</code>原则；</p>
<ul>
<li>而且明明只是一些数据的变化却迫使服务器要返回整个HTML文档，这本身也会给网络带宽带来不必要的开销。</li>
</ul>
<p>有没有办法在页面数据变动时，只向服务器请求新的数据，并且在阻止页面刷新的情况下，动态的替换页面中展示的数据呢？</p>
<ul>
<li>答案正是 “<code>AJAX</code>”。</li>
</ul>
<p><code>AJAX</code>是“Asynchronous JavaScript And XML”的缩写(异步的JavaScript 和 XML)，是一种实现 无页面刷新 获取服务器数据的技术。</p>
<ul>
<li><code>AJAX</code>最吸引人的就是它的“异步”特性，也就是说它可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面。</li>
</ul>
<p>你可以使用 AJAX 最主要的两个特性做下列事：</p>
<ul>
<li>在不重新加载页面的情况下发送请求给服务器</li>
<li>接受并使用从服务器发来的数据</li>
</ul>
<h2 id="http-的组成" tabindex="-1"><a class="header-anchor" href="#http-的组成" aria-hidden="true">#</a> HTTP 的组成</h2>
<p><img src="@source/.vuepress/public/images/http01.png" alt="图片"></p>
<h2 id="http-版本" tabindex="-1"><a class="header-anchor" href="#http-版本" aria-hidden="true">#</a> HTTP 版本</h2>
<p>HTTP/0.9</p>
<ul>
<li>发布于1991年；</li>
<li>只支持GET请求方法获取文本数据，当时主要是为了获取HTML页面内容；
HTTP/1.0</li>
<li>发布于1996年；</li>
<li>支持POST、HEAD等请求方法，支持请求头、响应头等，支持更多种数据类型(不再局限于文本数据) ；</li>
<li>但是浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗；
HTTP/1.1(目前使用最广泛的版本)</li>
<li>发布于1997年；</li>
<li>增加了PUT、DELETE等请求方法；</li>
<li>采用持久连接(Connection: keep-alive)，多个请求可以共用同一个TCP连接；</li>
</ul>
<p>2015年，HTTP/2.0</p>
<p>2018年，HTTP/3.0</p>
<h2 id="http-的请求方式" tabindex="-1"><a class="header-anchor" href="#http-的请求方式" aria-hidden="true">#</a> HTTP 的请求方式</h2>
<ul>
<li><code>GET</code>：GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。</li>
<li><code>HEAD</code>：HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。
<ul>
<li>比如在准备下载一个文件前，先获取文件的大小，再决定是否进行下载；</li>
</ul>
</li>
<li><code>POST</code>：POST 方法用于将实体提交到指定的资源。</li>
<li><code>PUT</code>：PUT 方法用请求有效载荷（payload）替换目标资源的所有当前表示；</li>
<li><code>DELETE</code>：DELETE 方法删除指定的资源；</li>
<li><code>PATCH</code>：PATCH 方法用于对资源应部分修改；</li>
<li><code>CONNECT</code>：CONNECT 方法建立一个到目标资源标识的服务器的隧道，通常用在代理服务器，网页开发很少用到。</li>
<li><code>TRACE</code>：TRACE 方法沿着到目标资源的路径执行一个消息环回测试。</li>
</ul>
<p>在开发中使用最多的是 <code>GET、POST</code>请求</p>
<h2 id="http-请求头" tabindex="-1"><a class="header-anchor" href="#http-请求头" aria-hidden="true">#</a> HTTP 请求头</h2>
<p>在 <code>request</code> 对象的 <code>header</code> 中也包含很多有用的信息，客户端会默认传递过来一些信息
<img src="@source/.vuepress/public/images/rh1.png" alt="图片"></p>
<p><code>content-type</code> 这次请求携带的数据的类型</p>
<ul>
<li><code>application/x-www-form-urlencoded</code>：表示数据被编码成以 '&amp;' 分隔的键 - 值对，同时以 '=' 分隔键和值</li>
<li><code>application/json</code>：表示是一个json类型</li>
<li><code>text/plain</code>：表示是文本类型</li>
<li><code>application/xml</code>：表示是xml类型</li>
<li><code>multipart/form-data</code>：表示是上传文件</li>
</ul>
<p><code>content-length</code>：文件的大小长度</p>
<p><code>keep-alive</code>：</p>
<ul>
<li>http是基于TCP协议的，但是通常在进行一次请求和响应结束后会立刻中断；</li>
<li>在http1.0中，如果想要继续保持连接：
<ul>
<li>浏览器需要在请求头中添加 connection: keep-alive；</li>
<li>服务器需要在响应头中添加 connection:keep-alive；</li>
<li>当客户端再次放请求时，就会使用同一个连接，直接一方中断连接；</li>
</ul>
</li>
<li>在http1.1中，所有连接默认是 connection: keep-alive的；
<ul>
<li>不同的Web服务器会有不同的保持 keep-alive的时间；</li>
<li>Node中默认是5s中；</li>
</ul>
</li>
</ul>
<p><code>accept-encoding</code>：告知服务器，客户端支持的文件压缩格式，比如js文件可以使用 gzip 编码，对应 .gz文件；</p>
<p><code>accept</code>：告知服务器，客户端可接受文件的格式类型；</p>
<p><code>user-agent</code>：客户端相关的信息</p>
<h2 id="http-response-响应状态码" tabindex="-1"><a class="header-anchor" href="#http-response-响应状态码" aria-hidden="true">#</a> HTTP Response 响应状态码</h2>
<p>MDN响应码解析地址：<a href="https://developer.mozilla.org/zh-CN/docs/web/http/status" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/web/http/status<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/zhuangtaima1.png" alt="图片"></p>
<h2 id="http-响应头" tabindex="-1"><a class="header-anchor" href="#http-响应头" aria-hidden="true">#</a> HTTP 响应头</h2>
<p><img src="@source/.vuepress/public/images/xiangyingtou1.png" alt="图片"></p>
<h2 id="ajax-发送请求" tabindex="-1"><a class="header-anchor" href="#ajax-发送请求" aria-hidden="true">#</a> Ajax 发送请求</h2>
<p>测接口地址: <code>http://123.207.32.32:8000/home/multidata</code></p>
<p><code>AJAX</code> 是异步的 <code>JavaScript</code> 和 <code>XML</code>（Asynchronous JavaScript And XML）</p>
<ul>
<li>它可以使用 <code>JSON，XML，HTML 和 text 文本</code>等格式发送和接收数据</li>
</ul>
<p>如何来完成 <code>AJAX</code> 请求呢？</p>
<ol>
<li>创建网络请求的 <code>AJAX 对象</code>（使用 XMLHttpRequest）</li>
<li>监听 <code>XMLHttpRequest</code> 对象状态的变化，或者监听 <code>onload</code> 事件（请求完成时触发）；</li>
<li>配置网络请求（通过 <code>open</code> 方法）；</li>
<li>发送 <code>send</code> 网络请求</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 创建 xhrHttpRequest 对象</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 监听状态的改变</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// XMLHttpRequest.DONE 是 4</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> XMLHttpRequest<span class="token punctuation">.</span><span class="token constant">DONE</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// 字符串转成 JSON 对象</span>
  <span class="token keyword">const</span> resJSON <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resJSON<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3. 配置请求 open</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span>
<span class="token comment">// 4. 发送请求 (浏览器帮助发送对应请求)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="xmlhttprequest-的-state-状态" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-的-state-状态" aria-hidden="true">#</a> XMLHttpRequest 的 state（状态）</h3>
<p><img src="@source/.vuepress/public/images/rs1.png" alt="图片">
注意：这个状态并非是HTTP的相应状态，而是记录的 <code>XMLHttpRequest</code> 对象的状态变化</p>
<p>发送同步请求：</p>
<ul>
<li>将 <code>open</code> 的第三个参数设置为 <code>false</code>
<img src="@source/.vuepress/public/images/open1.png" alt="图片"></li>
</ul>
<h3 id="xmlhttprequest-其他事件监听" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-其他事件监听" aria-hidden="true">#</a> XMLHttpRequest 其他事件监听</h3>
<p>除了 <code>onreadystatechange</code> 还有其他的事件可以监听</p>
<ul>
<li><code>loadstart</code>：请求开始。</li>
<li><code>progress</code>： 一个响应数据包到达，此时整个 response body 都在 response 中。</li>
<li><code>abort</code>：调用 xhr.abort() 取消了请求。</li>
<li><code>error</code>：发生连接错误，例如，域错误。不会发生诸如 404 这类的 HTTP 错误。</li>
<li><code>load</code>：请求成功完成。</li>
<li><code>timeout</code>：由于请求超时而取消了该请求（仅发生在设置了 timeout 的情况下）。</li>
<li><code>loadend</code>：在 load，error，timeout 或 abort 之后触发。</li>
</ul>
<p>也可以使用 <code>load</code> 来获取数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="响应数据和响应类型" tabindex="-1"><a class="header-anchor" href="#响应数据和响应类型" aria-hidden="true">#</a> 响应数据和响应类型</h3>
<p>发送了请求之后我们需要获取到对应的姐结果, <code>response</code>属性</p>
<ul>
<li>XMLHttpRequest <code>response</code> 属性返回响应的正文内容</li>
<li>返回的类型取决于 <code>responseType</code> 的属性设置</li>
</ul>
<p>通过 <code>responseType</code> 可以设置获取数据的类型</p>
<ul>
<li>如果将 <code>responseType</code> 的值设置为<code>空字符串</code>，则会使用 <code>text</code> 作为<strong>默认</strong>值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 下面把 responseType 设置成了 `json`, 所以不需要 JSON.parse(xhr.response)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 告知 xhr 获取到的数据的类型 , 默认是 'text'</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span> 

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>和 <code>responseText、responseXML</code> 的区别：</p>
<ul>
<li>早期通常服务器返回的数据是<code>普通的文本和XML</code>，所以我们通常会通过<code>responseText、 responseXML</code>来获取响应结果</li>
<li>之后将它们转化成 JavaScript 对象形式</li>
<li>目前服务器基本返回的都是 <code>json</code> 数据，<code>responseType</code> 直接设置为 <code>json</code> 即可</li>
</ul>
<h3 id="http-响应的状态-status" tabindex="-1"><a class="header-anchor" href="#http-响应的状态-status" aria-hidden="true">#</a> HTTP 响应的状态 status</h3>
<p>XMLHttpRequest 的 <code>state</code> 是用于记录 xhr 以通过 XMLHttpRequest 对象本身的状态变化，并非针对于 HTTP 的网络请求状态。</p>
<ul>
<li>如果我们<strong>希望获取 HTTP 响应的网络状态(状态码, 状态信息)</strong>，可 <strong><code>status</code></strong> 和 <code>statusText</code> 来获取</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token comment">// 200</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/zhuangtaima1.png" alt="图片"></p>
<p>一般要做判断</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span><span class="token string">'http://xxx.com.xxx/xxx'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="get-post-请求传递参数" tabindex="-1"><a class="header-anchor" href="#get-post-请求传递参数" aria-hidden="true">#</a> GET/POST 请求传递参数</h3>
<p>常见的<strong>传递给服务器数据</strong>的方式有如下几种：</p>
<ol>
<li>GET 请求的 <code>query</code> 参数</li>
<li>POST 请求 <code>x-www-form-urlencoded</code> 格式</li>
<li>POST 请求 <code>FormData</code> 格式</li>
<li>POST 请求 <code>JSON</code> 格式</li>
</ol>
<hr>
<ol>
<li><code>GET</code> 请求的 <code>query</code> 参数传递</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span>responseText <span class="token operator">=</span> <span class="token string">'json'</span>

<span class="token comment">// 通过 query 传递</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_params/get?name=whuy&amp;age=18'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li><code>POST</code> 请求 <code>x-www-form-urlencoded</code> 格式</li>
</ol>
<p><strong>GET 请求传递参数的缺点: <code>GET</code> 请求以明文的形式直接放到 <code>url</code> 里面, 参数属于 url 的一部分,  所以比较不安全</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span>responseText <span class="token operator">=</span> <span class="token string">'json'</span>

<span class="token comment">// post 请求 urlencoded 的形式传递</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_params/posturl'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> urlParam <span class="token operator">=</span> <span class="token string">'name=why&amp;age=18'</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span><span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span> <span class="token comment">// 告诉服务器编码形式</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>urlParam<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="3">
<li><code>POST</code> 请求 <code>FormData</code> 格式</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span>responseText <span class="token operator">=</span> <span class="token string">'json'</span>

<span class="token comment">// post 请求 formData 的形式传递</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_params/postform'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> infoEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.info'</span><span class="token punctuation">)</span>
<span class="token comment">// formElement 转成 FormData 对象 , 并且不用设施 requestHeader</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>infoEl<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="4">
<li><code>POST</code> 请求 <code>JSON</code> 格式</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span>responseText <span class="token operator">=</span> <span class="token string">'json'</span>

<span class="token comment">// post 请求 urlencoded 的形式传递</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_params/postjson'</span><span class="token punctuation">)</span>
<span class="token comment">// 服务器不认识js对象, 所以转换成字符串 </span>
<span class="token keyword">const</span> jsonParams <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'why'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span><span class="token string">'application/json; charset=utf-8'</span><span class="token punctuation">)</span> <span class="token comment">// 告诉服务器编码形式 JSON 形式</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>jsonParams<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="ajax-网络请求封装" tabindex="-1"><a class="header-anchor" href="#ajax-网络请求封装" aria-hidden="true">#</a> Ajax 网络请求封装</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">=</span><span class="token string">'get'</span><span class="token punctuation">,</span>  <span class="token comment">// 请求方式 get/ post</span>
  url<span class="token punctuation">,</span>            <span class="token comment">// 地址</span>
  data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>         <span class="token comment">// 请求体 </span>
  headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 请求头</span>
  timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">,</span>    <span class="token comment">// 超时时间</span>
  success<span class="token punctuation">,</span>        <span class="token comment">// 成功回调</span>
  failure<span class="token punctuation">,</span>        <span class="token comment">// 失败回调</span>
<span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 创建 xhr 对象</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 监听数据</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> XMLHttpRequest<span class="token punctuation">.</span><span class="token constant">DONE</span><span class="token punctuation">)</span> <span class="token keyword">return</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      success <span class="token operator">&amp;&amp;</span> <span class="token function">success</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      failure <span class="token operator">&amp;&amp;</span> <span class="token function">failure</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 3. 设置类型</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>

  <span class="token comment">// 分情况 : get / post 请求</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'get'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// get 请求</span>
    <span class="token keyword">const</span> paramsArr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> 
    <span class="token keyword">const</span> paramsString <span class="token operator">=</span> paramsArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> paramsString<span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">headerKey</span><span class="token punctuation">)</span><span class="token operator">=></span> xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>headerKey <span class="token punctuation">,</span> headers<span class="token punctuation">[</span>headerKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// post 请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span><span class="token string">'application/json; charset=utf-8'</span><span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">headerKey</span><span class="token punctuation">)</span><span class="token operator">=></span> xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>headerKey <span class="token punctuation">,</span> headers<span class="token punctuation">[</span>headerKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> xhr 
<span class="token punctuation">}</span>

<span class="token comment">// get 请求</span>
<span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token comment">// 传入对象 -> method, url , success 回调, failure 回调, headers对象, timeout, data 对象</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'get'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'http://192.168.0.110:1888/01_params/get'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">// 虽然是 get 请求, 但这里没有用 query 的形式传递, 而是传递了 data 对象</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">failure</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token punctuation">,</span> err<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// post 请求</span>
<span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'post'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'http://192.168.0.110:1888/01_params/postjson'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>  
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">failure</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token punctuation">,</span> err<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h3 id="再用-promise-优化封装的-ajax-函数" tabindex="-1"><a class="header-anchor" href="#再用-promise-优化封装的-ajax-函数" aria-hidden="true">#</a> 再用 promise 优化封装的 ajax 函数</h3>
<p>不需要再传入 <code>success</code> 成功的回调和 <code>failure</code> 失败的回调, 可以在内部使用 <code>promise</code> 封装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">=</span><span class="token string">'get'</span><span class="token punctuation">,</span>  <span class="token comment">// 请求方式 get/ post</span>
  url<span class="token punctuation">,</span>            <span class="token comment">// 地址</span>
  data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>         <span class="token comment">// 请求体 </span>
  headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 请求头</span>
  timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">,</span>    <span class="token comment">// 超时时间</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 创建 xhr 对象</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 这里 xhr 对象放在了外边, 因为最下面要通过 promise.xhr = xhr 把xhr 对象添加到 promise 对象里面, 让外部通过 promise.xhr.abort() 手动取消请求 </span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve <span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 2. 监听数据</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> XMLHttpRequest<span class="token punctuation">.</span><span class="token constant">DONE</span><span class="token punctuation">)</span> <span class="token keyword">return</span> 
      <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3. 设置类型</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
    xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span>
    <span class="token comment">// 分情况 : get / post 请求</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'get'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// get 请求</span>
      <span class="token keyword">const</span> paramsArr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> 
      <span class="token keyword">const</span> paramsString <span class="token operator">=</span> paramsArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> paramsString<span class="token punctuation">)</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">headerKey</span><span class="token punctuation">)</span><span class="token operator">=></span> xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>headerKey <span class="token punctuation">,</span> headers<span class="token punctuation">[</span>headerKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// post 请求</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span><span class="token string">'application/json; charset=utf-8'</span><span class="token punctuation">)</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">headerKey</span><span class="token punctuation">)</span><span class="token operator">=></span> xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>headerKey <span class="token punctuation">,</span> headers<span class="token punctuation">[</span>headerKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  promise<span class="token punctuation">.</span>xhr <span class="token operator">=</span> xhr   <span class="token comment">// 为什么这么做? 在外部为了使用 xhr 对象, 因为可以在使用时通过 promise.xhr.abort() 手动取消请求</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token comment">// get 请求</span>
<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">myAjax</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'get'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'http://192.168.0.110:1888/01_params/get'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">// 虽然是 get 请求, 但这里没有用 query 的形式传递, 而是传递了 data 对象</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token punctuation">,</span> err<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">.</span>xhr<span class="token punctuation">)</span>
<span class="token keyword">const</span> cancelBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>

cancelBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  promise<span class="token punctuation">.</span>xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 手动取消请求</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h3 id="过期时间-timeout-和取消请求" tabindex="-1"><a class="header-anchor" href="#过期时间-timeout-和取消请求" aria-hidden="true">#</a> 过期时间 timeout 和取消请求</h3>
<h4 id="过期时间" tabindex="-1"><a class="header-anchor" href="#过期时间" aria-hidden="true">#</a> 过期时间</h4>
<p>在网络请求的过程中，为了避免过长的时间服务器无法返回数据，通常会为请求设置一个超时时间：<code>timeout</code></p>
<ul>
<li>当达到<strong>超时时间后依然没有获取到数据</strong>，那么这个请求会<strong>自动被取消掉</strong></li>
<li>默认值为 <code>0</code> ，表示没有设置超时时间</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 过了过期时间会触发</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'过期时间'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 过了 timeoot 会自动取消请求</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_basic/timeout'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h4>
<p>也可以通过 <code>abort</code> 方法强制取消请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token function">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'过期时间'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 请求被取消掉了</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onabort</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'请求被取消掉'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://192.168.0.110:1888/01_basic/timeout'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 手动取消请求</span>
<span class="token keyword">const</span> cancelBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
cancelBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="认识-fetch-和-fetch-api" tabindex="-1"><a class="header-anchor" href="#认识-fetch-和-fetch-api" aria-hidden="true">#</a> 认识 Fetch 和 Fetch API</h2>
<p>返回值是 <code>Promise</code>, <strong>不像</strong> <code>XMLHttpRequest</code> 一样，所有的操作都在一个  <code>xhr</code> 对象上</p>
<p><img src="@source/.vuepress/public/images/fetch1.png" alt="图片"></p>
<p>Fetch的数据响应主要分为两个阶段：</p>
<p>阶段一：当服务器返回了响应（response）</p>
<ul>
<li>fetch 返回的 promise 就使用内建的 Response class 对象来对响应头进行解析；</li>
<li>在这个阶段，可以通过检查响应头，来检查 HTTP 状态以确定请求是否成功；</li>
<li>如果 fetch 无法建立一个 HTTP 请求，例如网络问题，亦或是请求的网址不存在，那么 promise 就会 reject；</li>
<li>异常的 HTTP 状态，例如 404 或 500，不会导致出现 error；</li>
</ul>
<p>可以在 <code>response</code> 的属性中看到 HTTP 状态：</p>
<ul>
<li><code>status``：HTTP</code> 状态码，例如 <code>200</code>；</li>
<li><code>ok</code>：布尔值，如果 <code>HTTP</code> 状态码为 <code>200-299</code>，则为 <code>true</code>；</li>
</ul>
<p>第二阶段，为了获取 response body，需要使用一个其他的方法调用。</p>
<ul>
<li><code>response.text() </code>—— 读取 response，并以文本形式返回 response；</li>
<li><strong><code>response.json()</code> —— 将 response 解析为 JSON；</strong></li>
</ul>
<h3 id="fetch-最基本演练" tabindex="-1"><a class="header-anchor" href="#fetch-最基本演练" aria-hidden="true">#</a> <code>fetch</code> 最基本演练</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// res.json() 有会返回一个 promise</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 优化 1 : then 返回 res.json()</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 优化 2 : 使用 async, await</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token comment">// true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">,</span> response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span> <span class="token comment">// 200, OK</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="fetch-post-请求" tabindex="-1"><a class="header-anchor" href="#fetch-post-请求" aria-hidden="true">#</a> Fetch POST 请求</h3>
<p>创建一个 <code>POST</code> 请求，或者其他方法的请求，需要使用 <code>fetch</code> 选项</p>
<ul>
<li><code>method</code>：HTTP 方法，例如 POST</li>
<li><strong><code>body</code></strong>：request body，其中之一
<ul>
<li>字符串（例如 JSON 编码的）</li>
<li><code>FormData</code> 对象，以 multipart/form-data 形式发送数据</li>
</ul>
</li>
</ul>
<p>比如: 发起 <code>post</code> 请求, 传递 <code>JSON</code> 格式数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://192.168.0.110:1888/01_params/postjson'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 第二个参数 : 对象</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token comment">// post 方法</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Content-type"</span><span class="token operator">:</span><span class="token string">"application/json"</span>  <span class="token comment">// 设置 json 类型</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token comment">// 字符串</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
