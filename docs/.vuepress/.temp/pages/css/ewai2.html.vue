<template><h1 id="额外知识-2" tabindex="-1"><a class="header-anchor" href="#额外知识-2" aria-hidden="true">#</a> 额外知识 (2)</h1>
<h2 id="新增全局属性-data" tabindex="-1"><a class="header-anchor" href="#新增全局属性-data" aria-hidden="true">#</a> 新增全局属性 data-*</h2>
<p><strong>在HTML5中, 新增一种全局属性的格式 <code>data-*</code>, 用于自定义数据属性:</strong></p>
<ul>
<li>data设置的属性可以在JavaScript的DOM操作中通过<strong>dataset</strong>轻松获取到；</li>
<li>通常<strong>用于HTML和JavaScript数据之间的传递</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/dataset1.png" alt="图片"></p>
<p>在小程序中, 就是通过data-来传递数据的, 所以该全局属性必须要掌握</p>
<h2 id="white-space" tabindex="-1"><a class="header-anchor" href="#white-space" aria-hidden="true">#</a> white-space</h2>
<p>white-space用于设置空白处理和换行规则</p>
<ul>
<li>normal：合并所有连续的空白，<strong>允许</strong>单词超屏时自动换行</li>
<li>nowrap：合并所有  连续的空白，<strong>不允许</strong>单词超屏时自动换行</li>
<li>pre：<strong>阻止</strong>合并所有连续的空白，<strong>不允许</strong>单词超屏时自动换行</li>
<li>pre-wrap：<strong>阻止</strong>合并所有连续的空白，<strong>允许</strong>单词超屏时自动换行</li>
<li>pre-line：合并所有连续的空白（但保留换行），<strong>允许</strong>单词超屏时自动换行</li>
</ul>
<h2 id="text-overflow" tabindex="-1"><a class="header-anchor" href="#text-overflow" aria-hidden="true">#</a> text-overflow</h2>
<p>text-overflow 通常用来设置文字溢出时的行为</p>
<ul>
<li>clip：溢出的内容直接裁剪掉（字符可能会显示不完整）</li>
<li>ellipsis：溢出那行的结尾处用省略号表示</li>
</ul>
<p>text-overflow生效的前提是 overflow 不为 visible</p>
<p>常见的是将white-space、text-overflow、overflow一起使用：
<img src="@source/.vuepress/public/images/tf123.png" alt="图片"></p>
<h2 id="css中的函数" tabindex="-1"><a class="header-anchor" href="#css中的函数" aria-hidden="true">#</a> CSS中的函数</h2>
<ul>
<li>var: 使用CSS定义的变量;</li>
<li>calc: 计算CSS值, 通常用于计算元素的大小或位置;</li>
<li>blur: 毛玻璃(高斯模糊)效果;</li>
<li>gradient：颜色渐变函数；</li>
</ul>
<h3 id="css函数-var" tabindex="-1"><a class="header-anchor" href="#css函数-var" aria-hidden="true">#</a> CSS函数 - var</h3>
<p>CSS中可以自定义属性</p>
<ul>
<li>属性名需要以两个减号（--）开始;</li>
<li>属性值则可以是任何有效的CSS值;</li>
</ul>
<p><img src="@source/.vuepress/public/images/sibar1.png" alt="图片"></p>
<p>可以通过var函数来使用:</p>
<p><img src="@source/.vuepress/public/images/sibar2.png" alt="图片"></p>
<p>规则集定义的选择器, 是自定义属性的可见作用域(只在选择器内部有效)</p>
<ul>
<li>所以推荐将<strong>自定义属性定义在html</strong>中，也可以使用 <strong>:root 选择器;</strong></li>
</ul>
<h3 id="css函数-calc" tabindex="-1"><a class="header-anchor" href="#css函数-calc" aria-hidden="true">#</a> CSS函数 - calc</h3>
<p>calc() 函数允许在声明 CSS 属性值时执行一些计算。</p>
<ul>
<li>计算支持加减乘除的运算；</li>
<li>
<ul>
<li>和 - 运算符的两边必须要有空白字符。</li>
</ul>
</li>
<li>通常用来设置一些元素的尺寸或者位置；</li>
</ul>
<p><img src="@source/.vuepress/public/images/calc1.png" alt="图片"></p>
<h3 id="css函数-blur" tabindex="-1"><a class="header-anchor" href="#css函数-blur" aria-hidden="true">#</a> CSS函数 - blur</h3>
<p>blur() 函数将高斯模糊应用于输出图片或者元素;</p>
<ul>
<li>blur(radius)</li>
<li>radius, 模糊的半径, 用于定义高斯函数的偏差值, 偏差值越大, 图片越模糊;</li>
</ul>
<p>通常会和两个属性一起使用：</p>
<ul>
<li>filter: 将模糊或颜色偏移等图形效果应用于元素;</li>
<li>backdrop-filter: 为元素后面的区域添加模糊或者其他效果;</li>
</ul>
<p><img src="@source/.vuepress/public/images/drop1.png" alt="图片"></p>
<h3 id="css函数-–-gradient" tabindex="-1"><a class="header-anchor" href="#css函数-–-gradient" aria-hidden="true">#</a> CSS函数 – gradient</h3>
<h3 id="linear-gradient的使用" tabindex="-1"><a class="header-anchor" href="#linear-gradient的使用" aria-hidden="true">#</a> linear-gradient的使用</h3>
<p>linear-gradient：创建一个表示两种或多种颜色线性渐变的图片；
<img src="@source/.vuepress/public/images/lg.png" alt="图片"></p>
<p>radial-gradient：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成
<img src="@source/.vuepress/public/images/lg1.png" alt="图片"></p>
<h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2>
<p>块级元素的布局属于Block Formatting Context（BFC）</p>
<ul>
<li>也就是block level box都是在BFC中布局的；</li>
</ul>
<p>行内级元素的布局属于Inline Formatting Context（IFC）</p>
<ul>
<li>而inline level box都是在IFC中布局的；</li>
</ul>
<p>MDN上有整理出在哪些具体的情况下会创建BFC：</p>
<ul>
<li><strong>根元素</strong>（<code>&lt;html&gt;</code>）</li>
<li>浮动元素（元素的 float 不是 none）</li>
<li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li>
<li>行内块元素（元素的 display 为 inline-block）</li>
<li>表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值），表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）</li>
<li>匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、
row、tbody、thead、tfoot 的默认属性）或 inline-table）</li>
<li>overflow 计算值(Computed)不为 visible 的块元素</li>
<li>弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）</li>
<li>网格元素（display 为 grid 或 inline-grid 元素的直接子元素）</li>
<li>display 值为 flow-root 的元素</li>
</ul>
<hr>
<p>(背)</p>
<ul>
<li>在 BFC 中，box 会在<strong>垂直方向上一个挨着一个的排布</strong></li>
<li><strong>垂直方向的间距由 margin 属性</strong>决定；</li>
<li>在同一个BFC中，<strong>相邻两个box之间的margin会折叠（collapse）</strong>；</li>
<li>在BFC中，每个元素的<strong>左边缘是紧挨着包含块的左边缘的</strong>；</li>
</ul>
<p>普通的两个 div 元素是属于同一个 BFC 中, 因为 html根元素它会创建 BFC , 楞个 div的话是处在 html根元素创建的BFC 里面</p>
<p>所以可以在 一个 div 外面包裹另一个 div, 并且加上 overflow:auto , 那么外面包裹的 div 他会创建一个新的 BFC</p>
<p>那么这个东西有什么用呢？</p>
<ul>
<li>解决 margin 的折叠问题</li>
<li>解决浮动高度塌陷问题</li>
</ul>
<h3 id="bfc的作用一-解决折叠问题" tabindex="-1"><a class="header-anchor" href="#bfc的作用一-解决折叠问题" aria-hidden="true">#</a> BFC的作用一：解决折叠问题</h3>
<p>在同一个BFC中，相邻两个box之间的margin会折叠（collapse）</p>
<ul>
<li>官方文档明确的有说</li>
<li>The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins
between adjacent block-level boxes in a block formatting context collapse.</li>
</ul>
<p>那么如果让两个box是不同的BFC呢？那么就可以解决折叠问题</p>
<p><img src="@source/.vuepress/public/images/margin55.png" alt="图片"></p>
<h3 id="bfc的作用二-解决浮动高度塌陷" tabindex="-1"><a class="header-anchor" href="#bfc的作用二-解决浮动高度塌陷" aria-hidden="true">#</a> BFC的作用二：解决浮动高度塌陷</h3>
<h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2>
<p>媒体查询的使用方式主要有三种：</p>
<ul>
<li>方式一：<strong>通过@media和@import使用不同的CSS规则（常用）；</strong>
<img src="@source/.vuepress/public/images/media1.png" alt="图片"></li>
<li>方式二：<strong>使用media属性为<code>&lt;style&gt;, &lt;link&gt;, &lt;source&gt;</code>和其他HTML元素指定特定的媒体类型；</strong>
<img src="@source/.vuepress/public/images/media2.png" alt="图片"></li>
<li>方式三：使用Window.matchMedia() 和MediaQueryList.addListener() 方法来测试和监控媒体状态；</li>
</ul>
<p>比较常用的是通过@media来使用不同的CSS规则，目前掌握这个即可；</p>
<h3 id="媒体类型-media-types" tabindex="-1"><a class="header-anchor" href="#媒体类型-media-types" aria-hidden="true">#</a> 媒体类型（Media types)</h3>
<p>常见的媒体类型值如下：</p>
<ul>
<li>all：适用于所有设备。</li>
<li>print：适用于在打印预览模式下在屏幕上查看的分页材料和文档。</li>
<li><strong>screen（掌握）：主要用于屏幕</strong></li>
<li>speech：主要用于语音合成器</li>
</ul>
<h3 id="媒体特性-media-features" tabindex="-1"><a class="header-anchor" href="#媒体特性-media-features" aria-hidden="true">#</a> 媒体特性（Media features）</h3>
<p><img src="@source/.vuepress/public/images/mf1.png" alt="图片"></p>
<h3 id="逻辑操作符-logical-operators" tabindex="-1"><a class="header-anchor" href="#逻辑操作符-logical-operators" aria-hidden="true">#</a> 逻辑操作符（logical operators）</h3>
<p>媒体查询的表达式最终会获得一个Boolean值，也就是真（true）或者假（false）。</p>
<ul>
<li>如果结果为真（true），那么就会生效；</li>
<li>如果结果为假（false），那么就不会生效；</li>
</ul>
<p>如果有多个条件，我们可以通过逻辑操作符联合复杂的媒体查</p>
<ul>
<li><strong>and</strong>：and 操作符用于将多个媒体查询规则组合成单条媒体查询</li>
<li>not：not运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。</li>
<li>only：only运算符仅在整个查询匹配时才用于应用样式。</li>
<li>, (逗号)：逗号用于将多个媒体查询合并为一个规则。</li>
</ul>
<p>比如下面的媒体查询，表示：屏幕宽度大于500，小于700的时候，body背景颜色为红色；
<img src="@source/.vuepress/public/images/media55.png" alt="图片"></p>
<h3 id="常见的移动端设备" tabindex="-1"><a class="header-anchor" href="#常见的移动端设备" aria-hidden="true">#</a> 常见的移动端设备</h3>
<p><img src="@source/.vuepress/public/images/shouji1.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/shouji2.png" alt="图片"></p>
</template>
