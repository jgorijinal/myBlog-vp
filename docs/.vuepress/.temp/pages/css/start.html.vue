<template><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1>
<h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2>
<p>CSS官方文档地址</p>
<ul>
<li><a href="https://www.w3.org/TR/?tag=css" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/?tag=css<ExternalLinkIcon/></a></li>
</ul>
<p>CSS推荐文档地址：</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95<ExternalLinkIcon/></a></li>
</ul>
<p>由于浏览器版本、CSS版本等问题，查询某些CSS是否可用：</p>
<ul>
<li>可以到<a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">https://caniuse.com/<ExternalLinkIcon/></a>查询CSS属性的可用性；</li>
</ul>
<h2 id="import-引入" tabindex="-1"><a class="header-anchor" href="#import-引入" aria-hidden="true">#</a> @import 引入</h2>
<p>可以在style元素或者CSS文件中使用 <strong><code>@import</code></strong> 导入其他的CSS文件</p>
<p><img src="@source/.vuepress/public/images/ipip1.png" alt="图片"></p>
<h2 id="link-元素" tabindex="-1"><a class="header-anchor" href="#link-元素" aria-hidden="true">#</a> link 元素</h2>
<p>link元素是<strong>外部资源链接</strong>元素，规范了<strong>文档与外部资源</strong>的关系</p>
<ul>
<li>link元素通常是在head元素中</li>
</ul>
<p>最常用的链接是<strong>样式表（CSS）</strong>；</p>
<ul>
<li>此外也可以被用来创建站点图标（比如 “favicon” 图标）；</li>
</ul>
<p>link元素常见的属性：</p>
<ul>
<li><strong>href</strong>：此属性指定被链接资源的URL。 URL 可以是绝对的，也可以是相对的。</li>
<li><strong>rel</strong>：指定链接类型，常见的链接类型：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types<ExternalLinkIcon/></a>
<ul>
<li>icon：站点图标；</li>
<li>stylesheet：CSS样式；</li>
</ul>
</li>
</ul>
<h2 id="css-颜色的表示方法" tabindex="-1"><a class="header-anchor" href="#css-颜色的表示方法" aria-hidden="true">#</a> CSS 颜色的表示方法</h2>
<p>在CSS中，颜色，有以下几种表示方法：</p>
<p>颜色关键字（color keywords）：</p>
<ul>
<li>是不区分大小写的标识符，它表示一个具体的颜色；</li>
<li>可以表示哪些颜色呢？</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E8%AF%AD%E6%B3%95<ExternalLinkIcon/></a></li>
</ul>
<p>RGB颜色：</p>
<ul>
<li>RGB是一种色彩空间，通过**R（red，红色）、G（green，绿色）、B（blue，蓝色）**三原色来组成了不同的颜色；
<ul>
<li>也就是通过调整这三个颜色不同的比例，可以组合成其他的颜色；</li>
</ul>
</li>
<li>RGB各个原色的取值范围是 <code>0~255</code>；</li>
</ul>
<h3 id="rgb的表示方法" tabindex="-1"><a class="header-anchor" href="#rgb的表示方法" aria-hidden="true">#</a> RGB的表示方法</h3>
<p>RGB颜色可以通过以#为前缀的十六进制字符和函数（rgb()、rgba()）标记表示。</p>
<p><strong>方式一：十六进制符号：#RRGGBB[AA]</strong></p>
<ul>
<li>R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）；A是可选的。
<ul>
<li>比如，#ff0000等价于#ff0000ff；</li>
</ul>
</li>
</ul>
<p><strong>方式二：十六进制符号：#RGB[A]</strong></p>
<ul>
<li>R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）</li>
<li>三位数符号（#RGB）是六位数形式（#RRGGBB）的减缩版
<ul>
<li>比如，#f09和#ff0099表示同一颜色</li>
</ul>
</li>
<li>四位数符号（#RGBA）是八位数形式（#RRGGBBAA）的减缩版
<ul>
<li>比如，#0f38和#00ff3388表示相同颜色</li>
</ul>
</li>
</ul>
<p><strong>方式三：函数符： rgb[a](R, G, B[, A])</strong></p>
<ul>
<li>R（红）、G（绿）、B （蓝）可以是<code>&lt;number&gt;（数字）</code>，或者<code>&lt;percentage&gt;（百分比）</code>，255相当于100%。</li>
<li>A（alpha）可以是0到1之间的数字，或者百分比，数字1相当于100%（完全不透明）</li>
</ul>
<h2 id="浏览器渲染的流程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染的流程" aria-hidden="true">#</a> 浏览器渲染的流程</h2>
<p><img src="@source/.vuepress/public/images/liu1.png" alt="图片"></p>
<ol>
<li><strong>浏览器先加载 HTML</strong></li>
<li><strong>开始解析 HTML(从上到下一次解析)</strong></li>
<li><strong>遇到 link 标签, 去独立下载 CSS (不会等你, 继续往下解析)</strong></li>
<li>解析完 HTML , 会形成 DOM tree , 但并不会立即展示。因为需要加载完css, 解析完 css, 要把样式加到 DOM 节点(nodes) 中</li>
<li>加完 css 会<strong>形成渲染树</strong>(render tree), 最后 display 展示</li>
</ol>
</template>
