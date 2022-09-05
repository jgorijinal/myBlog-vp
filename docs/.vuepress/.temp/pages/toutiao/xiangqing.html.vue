<template><h1 id="文章详情" tabindex="-1"><a class="header-anchor" href="#文章详情" aria-hidden="true">#</a> 文章详情</h1>
<h2 id="_1-创建组件并配置路由" tabindex="-1"><a class="header-anchor" href="#_1-创建组件并配置路由" aria-hidden="true">#</a> 1. 创建组件并配置路由</h2>
<p><img src="@source/.vuepress/public/images/axiangqing0.png" alt="图片"></p>
<p>1、创建 <code>views/article/index.vue</code> 组件
<img src="@source/.vuepress/public/images/axiangqing1.png" alt="图片"></p>
<p>2、然后将该页面配置到根级路由
<img src="@source/.vuepress/public/images/axiangqing2.png" alt="图片"></p>
<ol start="3">
<li>点击某一项是进入详情页面</li>
</ol>
<p><img src="@source/.vuepress/public/images/axiangqing3.png" alt="图片"></p>
<h3 id="使用组件-props-解耦路由参数" tabindex="-1"><a class="header-anchor" href="#使用组件-props-解耦路由参数" aria-hidden="true">#</a> 使用组件 props 解耦路由参数</h3>
<p><img src="@source/.vuepress/public/images/ptrue1.png" alt="图片">
<img src="@source/.vuepress/public/images/ptrue2.png" alt="图片">
注意类型 : 可能是数字, 也可能是字符串</p>
<blockquote>
<p>官方文档：<a href="https://router.vuejs.org/zh/guide/essentials/passing-props.html" target="_blank" rel="noopener noreferrer">路由 props 传参<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_2-页面布局" tabindex="-1"><a class="header-anchor" href="#_2-页面布局" aria-hidden="true">#</a> 2. 页面布局</h2>
<p>使用到的 Vant 中的组件：</p>
<ul>
<li><a href="https://youzan.github.io/vant/#/zh-CN/nav-bar" target="_blank" rel="noopener noreferrer">NavBar 导航栏<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/loading" target="_blank" rel="noopener noreferrer">Loading 加载<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/cell" target="_blank" rel="noopener noreferrer">Cell 单元格<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/button" target="_blank" rel="noopener noreferrer">Button 按钮<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/image" target="_blank" rel="noopener noreferrer">Image 图片<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/divider" target="_blank" rel="noopener noreferrer">Divider 分割线<ExternalLinkIcon/></a></li>
<li><a href="https://youzan.github.io/vant/#/zh-CN/icon" target="_blank" rel="noopener noreferrer">Icon 图标<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_3-关于后端返回数据中的大数据问题" tabindex="-1"><a class="header-anchor" href="#_3-关于后端返回数据中的大数据问题" aria-hidden="true">#</a> 3. 关于后端返回数据中的大数据问题</h2>
<p>之所以请求文章详情返回 404 是因为我们请求发送的文章 ID （article.art_id）不正确。</p>
<p>JavaScript 能够准确表示的整数范围在<code>-2^53</code>到<code>2^53</code>之间（不含两个端点），超过这个范围，无法精确表示这个值，这使得 JavaScript 不适合进行科学和金融方面的精确计算。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token comment">// 9007199254740992</span>

<span class="token number">9007199254740992</span>  <span class="token comment">// 9007199254740992</span>
<span class="token number">9007199254740993</span>  <span class="token comment">// 9007199254740992</span>

Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码中，超出 2 的 53 次方之后，一个数就不精确了。
ES6 引入了<code>Number.MAX_SAFE_INTEGER</code>和<code>Number.MIN_SAFE_INTEGER</code>这两个常量，用来表示这个范围的上下限。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span> <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
<span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span> <span class="token operator">===</span> <span class="token number">9007199254740991</span>
<span class="token comment">// true</span>

Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span> <span class="token operator">===</span> <span class="token operator">-</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span>
<span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">9007199254740991</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面代码中，可以看到 JavaScript 能够精确表示的极限。</p>
<p>后端返回的数据一般都是 <strong>JSON 格式的字符串</strong>。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>'<span class="token punctuation">{</span> <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">9007199254740995</span><span class="token punctuation">,</span> <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Jack"</span><span class="token punctuation">,</span> <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果这个字符不做任何处理，你能方便的获取到字符串中的指定数据吗？非常麻烦。所以我们要把它转换为 JavaScript 对象来使用就很方便了。</p>
<p>幸运的是 axios 为了方便我们使用数据，它会在内部使用 <code>JSON.parse()</code> 把后端返回的数据转为 JavaScript 对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// { id: 9007199254740996, name: 'Jack', age: 18 }</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'{ "id": 9007199254740995, "name": "Jack", "age": 18 }'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看到，超出安全整数范围的 id 无法精确表示，这个问题并不是 axios 的错。</p>
<p>了解了什么是大整数的概念，接下来的问题是如何解决？</p>
<p><a href="https://github.com/sidorares/json-bigint" target="_blank" rel="noopener noreferrer">json-bigint<ExternalLinkIcon/></a> 是一个第三方包，它可以帮我们很好的处理这个问题。</p>
<p>使用它的第一步就是把它安装到你的项目中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i json-bigint
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面是使用它的一个简单示例。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> jsonStr <span class="token operator">=</span> <span class="token string">'{ "art_id": 1245953273786007552 }'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1245953273786007600</span>
<span class="token comment">// JSON.stringify()</span>

<span class="token comment">// JSONBig 可以处理数据中超出 JavaScript 安全整数范围的问题</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>JSONBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 把 JSON 格式的字符串转为 JavaScript 对象</span>

<span class="token comment">// 使用的时候需要把 BigNumber 类型的数据转为字符串来使用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>JSONBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">.</span>art_id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1245953273786007552</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>JSONBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>JSONBig<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>JSONBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 把 JavaScript 对象 转为 JSON 格式的字符串转</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote>
<p>json-bigint 会把超出 JS 安全整数范围的数字转为一个 BigNumber 类型的对象，对象数据是它内部的一个算法处理之后的，我们要做的就是在使用的时候转为字符串来使用。</p>
</blockquote>
<p>通过 Axios 请求得到的数据都是 Axios 处理（JSON.parse）之后的，我们应该在 Axios 执行处理之前手动使用 json-bigint 来解析处理。Axios 提供了自定义处理原始后端返回数据的 API：<code>transformResponse</code> 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">import</span> jsonBig <span class="token keyword">from</span> <span class="token string">'json-bigint'</span>

<span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token string">'{ "value" : 9223372036854775807, "v2": 123 }'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jsonBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://ttapi.research.itcast.cn/'</span><span class="token punctuation">,</span> <span class="token comment">// 接口基础路径</span>

  <span class="token comment">// transformResponse 允许自定义原始的响应数据（字符串）</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果转换成功则返回转换的数据结果</span>
      <span class="token keyword">return</span> jsonBig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果转换失败，则包装为统一数据格式并返回</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        data
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote>
<p>扩展：ES2020 BigInt</p>
<p>ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。</p>
<p>参考链接：</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt<ExternalLinkIcon/></a></li>
<li>[http://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B](</li>
</ul>
</blockquote>
<h2 id="_4-展示文章详情" tabindex="-1"><a class="header-anchor" href="#_4-展示文章详情" aria-hidden="true">#</a> 4. 展示文章详情</h2>
<p>思路：</p>
<ul>
<li>找到数据接口</li>
<li>封装请求方法</li>
<li>请求获取数据</li>
<li>模板绑定</li>
</ul>
<p>1、在 <code>api/article.js</code> 中新增封装接口方法
<img src="@source/.vuepress/public/images/art01.png" alt="图片"></p>
<p>2、在组件中调用获取文章详情
<img src="@source/.vuepress/public/images/art02.png" alt="图片"></p>
<ol start="3">
<li>绑定模板</li>
</ol>
<h2 id="_5-处理内容加载状态" tabindex="-1"><a class="header-anchor" href="#_5-处理内容加载状态" aria-hidden="true">#</a> 5. 处理内容加载状态</h2>
<p>需求：</p>
<ul>
<li>加载中，显示 loading</li>
<li>加载成功，显示文章详情</li>
<li>加载失败，显示错误提示
<ul>
<li>如果 404，提示资源不存在</li>
<li>其它的，提示加载失败，用户可以点击重试重新加载</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/404err1.png" alt="图片">
<img src="@source/.vuepress/public/images/404err2.png" alt="图片">
<img src="@source/.vuepress/public/images/404err3.png" alt="图片"></p>
<p>并且需要注意的是 axios 响应拦截器里面要返回 Promise.reject(err) 才能拿到 err.response 对象
<img src="@source/.vuepress/public/images/404err4.png" alt="图片"></p>
<h2 id="_6-关于正文的样式" tabindex="-1"><a class="header-anchor" href="#_6-关于正文的样式" aria-hidden="true">#</a> 6. 关于正文的样式</h2>
<p>文章正文包括各种数据：段落、标题、列表、链接、图片、视频等资源。</p>
<ul>
<li>将 <a href="https://github.com/sindresorhus/github-markdown-css" target="_blank" rel="noopener noreferrer">github-markdown-css<ExternalLinkIcon/></a> 样式文件下载到项目中</li>
<li>配置不要转换样式文件中的字号</li>
</ul>
<p><img src="@source/.vuepress/public/images/gc1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/gc2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/gc3.png" alt="图片">
<img src="@source/.vuepress/public/images/gc4.png" alt="图片">
<img src="@source/.vuepress/public/images/gc5.png" alt="图片"></p>
<h2 id="_7-点击图片预览" tabindex="-1"><a class="header-anchor" href="#_7-点击图片预览" aria-hidden="true">#</a> 7. 点击图片预览</h2>
<p>一、<a href="https://youzan.github.io/vant/#/zh-CN/image-preview" target="_blank" rel="noopener noreferrer">ImagePreview 图片预览<ExternalLinkIcon/></a> 的使用</p>
<p>二、处理图片点击预览</p>
<p>思路：</p>
<p>1、从文章内容中<strong>获取到所有的 img DOM 节点</strong></p>
<p>2、获取文章内容中<strong>所有的图片地址</strong></p>
<p>3、<strong>遍历</strong>所有 img 节点，给每个节点<strong>注册点击事件</strong></p>
<p>4、在 img 点击事件处理函数中，<strong>调用 ImagePreview 预览</strong></p>
<p><img src="@source/.vuepress/public/images/imgp1.png" alt="图片"></p>
<p>上面使用到了ref , 拿到 dom 节点, 所以要确保数据已经更新, 所以使用到了异步 setTimeout
<img src="@source/.vuepress/public/images/imgp3.png" alt="图片">
<img src="@source/.vuepress/public/images/imgp2.png" alt="图片"></p>
<h2 id="_8-关注用户" tabindex="-1"><a class="header-anchor" href="#_8-关注用户" aria-hidden="true">#</a> 8. 关注用户</h2>
<p><img src="@source/.vuepress/public/images/gzgz.png" alt="图片"></p>
<h3 id="_8-1-视图处理" tabindex="-1"><a class="header-anchor" href="#_8-1-视图处理" aria-hidden="true">#</a> 8.1 视图处理</h3>
<p><img src="@source/.vuepress/public/images/gz1.png" alt="图片"></p>
<h3 id="_8-2-功能处理" tabindex="-1"><a class="header-anchor" href="#_8-2-功能处理" aria-hidden="true">#</a> 8.2 功能处理</h3>
<ul>
<li>找到数据接口</li>
<li>封装请求方法</li>
<li>请求调用</li>
<li>视图更新</li>
</ul>
<p>1、在 <code>api/user.js</code> 中添加封装请求方法
<img src="@source/.vuepress/public/images/gz2.png" alt="图片"></p>
<p>2、在事件处理函数中
<img src="@source/.vuepress/public/images/gz3.png" alt="图片"></p>
<p>2、给关注/取消关注按钮注册点击事件
<img src="@source/.vuepress/public/images/gz4.png" alt="图片"></p>
<h3 id="_8-3-按钮-loading-效果" tabindex="-1"><a class="header-anchor" href="#_8-3-按钮-loading-效果" aria-hidden="true">#</a> 8.3 按钮 loading 效果</h3>
<p>两个作用：</p>
<ul>
<li>交互反馈</li>
<li>防止网络慢用户多次点击按钮导致重复触发点击事件</li>
</ul>
<p><img src="@source/.vuepress/public/images/fl2.png" alt="图片">
<img src="@source/.vuepress/public/images/fl1.png" alt="图片">
<img src="@source/.vuepress/public/images/fl3.png" alt="图片"></p>
<h3 id="_8-4-封装成组件" tabindex="-1"><a class="header-anchor" href="#_8-4-封装成组件" aria-hidden="true">#</a> 8.4 封装成组件</h3>
<p><img src="@source/.vuepress/public/images/zuzu1.png" alt="图片">
<img src="@source/.vuepress/public/images/zuzu2.png" alt="图片">
<img src="@source/.vuepress/public/images/zuzu3.png" alt="图片">
注意组组件中药添加 <strong>.sync</strong> 操作符
<img src="@source/.vuepress/public/images/fusync.png" alt="图片"></p>
<h2 id="_9-文章收藏" tabindex="-1"><a class="header-anchor" href="#_9-文章收藏" aria-hidden="true">#</a> 9. 文章收藏</h2>
<p><img src="@source/.vuepress/public/images/shoucang1.png" alt="图片">
点击收藏功能也封装成一个组件</p>
<h3 id="_9-1-准备组件" tabindex="-1"><a class="header-anchor" href="#_9-1-准备组件" aria-hidden="true">#</a> 9.1 准备组件</h3>
<p>创建组件 <strong>src/components/collect-article.vue</strong>
<img src="@source/.vuepress/public/images/collect1.png" alt="图片"></p>
<h3 id="_9-2-完成功能" tabindex="-1"><a class="header-anchor" href="#_9-2-完成功能" aria-hidden="true">#</a> 9.2 完成功能</h3>
<p>封装 文章收藏/取消收藏 接口 src/api/article.js
<img src="@source/.vuepress/public/images/cat0.png" alt="图片"></p>
<p>处理视口
<img src="@source/.vuepress/public/images/cat1.png" alt="图片">
props 要传进来 is_collected 状态和 articleId 文章的 id</p>
<p><img src="@source/.vuepress/public/images/cat2.png" alt="图片">
<img src="@source/.vuepress/public/images/cat3.png" alt="图片">
注意: 父组件上用 .sync 修饰符
<img src="@source/.vuepress/public/images/cat4.png" alt="图片"></p>
<h2 id="_10-文章点赞" tabindex="-1"><a class="header-anchor" href="#_10-文章点赞" aria-hidden="true">#</a> 10. 文章点赞</h2>
<blockquote>
<p>跟上面逻辑一样, 封装一个组件, 直接写完代码</p>
</blockquote>
<p>article 中的 <code>attitude</code> 表示用户对文章的态度</p>
<ul>
<li><code>-1</code> 无态度</li>
<li><code>0</code> 不喜欢</li>
<li><code>1</code> 已点赞</li>
</ul>
<p>思路：</p>
<ul>
<li>给点赞按钮注册点击事件</li>
<li>如果已经点赞，则请求取消点赞</li>
<li>如果没有点赞，则请求点赞</li>
</ul>
<ol>
<li>封装接口
<img src="@source/.vuepress/public/images/like0.png" alt="图片"></li>
<li></li>
</ol>
<p><img src="@source/.vuepress/public/images/like0.png" alt="图片">
3.
<img src="@source/.vuepress/public/images/like0.png" alt="图片">
4.
<img src="@source/.vuepress/public/images/like0.png" alt="图片"></p>
</template>
