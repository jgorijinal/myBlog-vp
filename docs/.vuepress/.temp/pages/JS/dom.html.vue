<template><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1>
<p>浏览器是用来展示网页的，而网页中最重要的就是里面各种的标签元素，JavaScrip t很多时候是需要操作这些元素的</p>
<ul>
<li>JavaScript 如何操作元素呢？通过Document Object Model（DOM，文档对象模型）</li>
<li>DOM 给我们提供了一系列的模型和对象，可以方便的来操作 Web 页面</li>
</ul>
<p><img src="@source/.vuepress/public/images/dom1.png" alt="图片"></p>
<h2 id="事件基础" tabindex="-1"><a class="header-anchor" href="#事件基础" aria-hidden="true">#</a> 事件基础</h2>
<p>事件有三部分组成 : <strong>1. 事件源, 2. 事件类型, 3. 处理程序</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件源</span>
<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>'btn<span class="token punctuation">)</span>
<span class="token comment">// 事件类型, 处理程序</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'你好'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="操作-dom" tabindex="-1"><a class="header-anchor" href="#操作-dom" aria-hidden="true">#</a> 操作 DOM</h2>
<h3 id="改变元素内容" tabindex="-1"><a class="header-anchor" href="#改变元素内容" aria-hidden="true">#</a> 改变元素内容</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>element.innerText
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>从起始位置到终止位置的内容, 但去除 HTML 标签, 同时空格和换行也会去掉 (不识别 HTML)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>element.innerHTML
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>从起始位置到终止位置的内容, 包括 HTML 标签, 同时保留空格和换行</p>
<h3 id="innerhtml-和-innertext-区别" tabindex="-1"><a class="header-anchor" href="#innerhtml-和-innertext-区别" aria-hidden="true">#</a> innerHTML 和 innerText 区别</h3>
<ul>
<li><code>innerText</code> <em>不识别</em> HTML,  还会<em>去除</em>空格和换行</li>
<li><code>innerHTML</code> 识别 html 标签 , 能识别空格和换行(所以 innerHTML 使用得最多)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'&lt;strong>不能加粗&lt;/strong>'</span>
div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'&lt;strong>不能加粗&lt;/strong>'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这两个属性都<strong>可读可写</strong>的</p>
<h3 id="常见元素的属性操作" tabindex="-1"><a class="header-anchor" href="#常见元素的属性操作" aria-hidden="true">#</a> 常见元素的属性操作</h3>
<ul>
<li><strong>innerText, innerText</strong> 改变元素的内容</li>
<li><strong>src, href</strong></li>
<li><strong>id, alt, title</strong></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>图片1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>图片2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 获取元素</span>
<span class="token keyword">let</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p1'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> btn2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p2'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>

btn1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'images/1.jpg'</span>
  img<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'图片1'</span>
<span class="token punctuation">}</span>
btn2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'images/2.jpg'</span>
  img<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'图片2'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="表单元素的属性操作" tabindex="-1"><a class="header-anchor" href="#表单元素的属性操作" aria-hidden="true">#</a> 表单元素的属性操作</h3>
<p>利用 dom 可以操作如下表单元素的属性</p>
<p><strong>type , value, checked, selected, disabled</strong>
<img src="@source/.vuepress/public/images/bd1.png" alt="图片"></p>
<h3 id="样式属性操作" tabindex="-1"><a class="header-anchor" href="#样式属性操作" aria-hidden="true">#</a> 样式属性操作</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>element.style  // 行内样式操作

element.className // 类名样式操作
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>注意 :</strong></p>
<ul>
<li>样式要采取<strong>驼峰命名法</strong></li>
<li>JS 修改 style 样式操作, 产生的是<strong>行内样式</strong>, <strong>CSS 权重比较高</strong></li>
</ul>
<h4 id="关闭二维码案例" tabindex="-1"><a class="header-anchor" href="#关闭二维码案例" aria-hidden="true">#</a> 关闭二维码案例</h4>
<p>样式的显示和隐藏完成, <code>display:none</code>隐藏元素, <code>display:block</code> 显示元素</p>
<p><img src="@source/.vuepress/public/images/hj1.png" alt="图片"></p>
<h4 id="显示隐藏文本框内容" tabindex="-1"><a class="header-anchor" href="#显示隐藏文本框内容" aria-hidden="true">#</a> 显示隐藏文本框内容</h4>
<p>表单需要两个事件,  获得焦点 onfocus , 失去焦点 onblur
<img src="@source/.vuepress/public/images/onblur1.png" alt="图片"></p>
<h4 id="通过-classname-修改样式" tabindex="-1"><a class="header-anchor" href="#通过-classname-修改样式" aria-hidden="true">#</a> 通过 className 修改样式</h4>
<p>样式较多, 功能复杂的情况
<img src="@source/.vuepress/public/images/ca22.png" alt="图片"></p>
<h2 id="注册事件-绑定事件" tabindex="-1"><a class="header-anchor" href="#注册事件-绑定事件" aria-hidden="true">#</a> 注册事件(绑定事件)</h2>
<p><img src="@source/.vuepress/public/images/bn1.png" alt="图片">
<img src="@source/.vuepress/public/images/bn2.png" alt="图片"></p>
<h3 id="删除事件-解绑事件" tabindex="-1"><a class="header-anchor" href="#删除事件-解绑事件" aria-hidden="true">#</a> 删除事件(解绑事件)</h3>
<ol>
<li>传统方式</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>eventTarget<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>removeEventListener</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>eventTarget<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用实例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>

div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>click <span class="token punctuation">,</span> fn<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  div<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="dom-事件流" tabindex="-1"><a class="header-anchor" href="#dom-事件流" aria-hidden="true">#</a> DOM 事件流</h2>
<p>事件发生时, 会在元素节点之间按照特定的<strong>顺序</strong>传播, 这个传播过程叫做<strong>DOM 事件流</strong></p>
<p>分为3各阶段:</p>
<ol>
<li>捕获阶段</li>
<li>当前目标阶段</li>
<li>冒泡阶段</li>
</ol>
<p><img src="@source/.vuepress/public/images/mp1.png" alt="图片"></p>
<p>注意:</p>
<ul>
<li>JS 代码只能执行捕获或者冒泡其中的一个阶段</li>
<li>onclick 和 attachEvent 只能得到冒泡阶段</li>
<li><strong>addEventListener</strong> 第三个参数如果是 <code>true</code> , 表示事件<strong>捕获</strong>阶段调用事件处理程序; 如果是 <code>false</code>(不写默认 false), 表示在事件冒泡阶段处理程序</li>
<li><strong>实际开发中, 很少使用事件捕获, 更关注的是事件冒泡</strong></li>
<li><strong>有些事件没有冒泡, 比如 onblur, onfocus, onmouseenter, onmouseleave</strong></li>
</ul>
<h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h3>
<p>跟事件相关的一系列信息数据的集合就是事件对象 event
<img src="@source/.vuepress/public/images/event1.png" alt="图片"></p>
<h3 id="事件对象的常见属性" tabindex="-1"><a class="header-anchor" href="#事件对象的常见属性" aria-hidden="true">#</a> 事件对象的常见属性</h3>
<p><img src="@source/.vuepress/public/images/event2.png" alt="图片"></p>
<h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2>
<p><strong>不是每个子节点单独设置事件监听器, 而是事件监听器设置在其父节点上, 然后利用冒泡原理影响设置每个子节点</strong></p>
<p>比如 : 给 ul 注册点击事件, 然后利用事件对象的 target 来找到当前点击的 li, 因为点击 li, 事件会冒泡到 ul 上,
ul 注册事件, 就会触发事件监听器</p>
<p>作用:</p>
<ol>
<li>只操作一次 DOM, 提高了程序的性能</li>
</ol>
<h2 id="常用的鼠标事件" tabindex="-1"><a class="header-anchor" href="#常用的鼠标事件" aria-hidden="true">#</a> 常用的鼠标事件</h2>
<p><img src="@source/.vuepress/public/images/shubiao1.png" alt="图片"></p>
<h3 id="禁用鼠标右键菜单" tabindex="-1"><a class="header-anchor" href="#禁用鼠标右键菜单" aria-hidden="true">#</a> 禁用鼠标右键菜单</h3>
<p>contextmenu</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'contextmenu'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="禁用鼠标选中" tabindex="-1"><a class="header-anchor" href="#禁用鼠标选中" aria-hidden="true">#</a> 禁用鼠标选中</h3>
<p>禁止鼠标选中 (selectstart)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'selectstart'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="鼠标事件对象" tabindex="-1"><a class="header-anchor" href="#鼠标事件对象" aria-hidden="true">#</a> 鼠标事件对象</h3>
<p>鼠标事件对象  MouseEvent
<img src="@source/.vuepress/public/images/sb1.png" alt="图片"></p>
<h4 id="小天使案例" tabindex="-1"><a class="header-anchor" href="#小天使案例" aria-hidden="true">#</a> 小天使案例</h4>
<p>让一个图片始终跟着鼠标移动</p>
<p>分析:</p>
<ol>
<li>鼠标不断移动, 使用鼠标移动事件 : <strong>mousemove</strong></li>
<li>在页面中移动, 给 <code>document</code> 注册事件</li>
<li>图片要移动距离, 而且不占位置, 使用<strong>绝对定位</strong></li>
<li>核心原理: 每次鼠标移动获取最新的鼠标位置, 把这个 x 和 y 坐标作为图片的 top 和 left 就可以了</li>
</ol>
<p><img src="@source/.vuepress/public/images/tianshi1.png" alt="图片"></p>
<h2 id="eventtarget" tabindex="-1"><a class="header-anchor" href="#eventtarget" aria-hidden="true">#</a> EventTarget</h2>
<p>因为继承自 EventTarget，所以也可以使用 EventTarget 的方法
<img src="@source/.vuepress/public/images/et66.png" alt="图片"></p>
<h2 id="node-节点" tabindex="-1"><a class="header-anchor" href="#node-节点" aria-hidden="true">#</a> Node 节点</h2>
<p>所有的DOM节点类型都继承自Node接口。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Node<ExternalLinkIcon/></a></p>
<p><strong>Node 有几个非常重要的属性：</strong></p>
<ul>
<li>nodeName：node 节点的名称。</li>
<li>nodeType：可以区分节点的类型。</li>
<li>nodeValue：node 节点的值；</li>
<li>childNodes：所有的子节点</li>
</ul>
<p><strong>nodeType:</strong>
<img src="@source/.vuepress/public/images/nt11.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/domshuxing.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/dozhuyi.png" alt="图片"></p>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h2>
<p>常见的属性和方法：
<img src="@source/.vuepress/public/images/doshuxing.png" alt="图片">
<img src="@source/.vuepress/public/images/documentfangfa.png" alt="图片"></p>
<h2 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h2>
<p>平时创建的div、p、span 等元素在 DOM 中表示为 Element 元素，常见的属性和方法:
<img src="@source/.vuepress/public/images/element.png" alt="图片"></p>
<h2 id="事件冒泡和事件捕获" tabindex="-1"><a class="header-anchor" href="#事件冒泡和事件捕获" aria-hidden="true">#</a> 事件冒泡和事件捕获</h2>
<p>我们会发现默认情况下事件是从最内层的 span 向外依次传递的顺序，这个顺序我们称之为事件冒泡（Event
Bubble）。</p>
<ul>
<li>事实上，还有另外一种监听事件流的方式就是从外层到内层（body -&gt; span），这种称之为事件捕获（Event
Capture）；</li>
<li>为什么会产生两种不同的处理流呢？
<ul>
<li>这是因为早期浏览器开发时，不管是IE还是Netscape公司都发现了这个问题，但是他们采用了完全相反的事
件流来对事件进行了传递；</li>
<li>IE采用了事件冒泡的方式，Netscape采用了事件捕获的方式；</li>
</ul>
</li>
</ul>
<p>那么如何去监听事件捕获的过程呢 ?</p>
<p><img src="@source/.vuepress/public/images/buhuo.png" alt="图片"></p>
<p>同时有事件冒泡和时间捕获的监听，那么会<strong>优先监听到事件捕获</strong>的</p>
<h2 id="事件对象-event" tabindex="-1"><a class="header-anchor" href="#事件对象-event" aria-hidden="true">#</a> 事件对象 event</h2>
<p>当一个事件发生时，就会有和这个事件相关的很多信息：</p>
<ul>
<li>比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息；</li>
<li>那么这些信息会被封装到一个Event对象中；</li>
<li>该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；</li>
</ul>
<p>常见的属性：</p>
<ul>
<li>type：事件的类型；</li>
<li>target：当前事件发生的元素；</li>
<li>currentTarget：当前处理事件的元素；</li>
<li>offsetX、offsetY：点击元素的位置；</li>
</ul>
<p>常见的方法：</p>
<ul>
<li>preventDefault：取消事件的默认行为；</li>
<li>stopPropagation：阻止事件的进一步传递</li>
</ul>
<p>事件类型 : <a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Events<ExternalLinkIcon/></a></p>
</template>
