<template><h1 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h1>
<h2 id="border-style-样式" tabindex="-1"><a class="header-anchor" href="#border-style-样式" aria-hidden="true">#</a> border-style 样式</h2>
<p><img src="@source/.vuepress/public/images/bos1.png" alt="图片"></p>
<h2 id="上下-margin-的传递-很少遇到" tabindex="-1"><a class="header-anchor" href="#上下-margin-的传递-很少遇到" aria-hidden="true">#</a> 上下 margin 的传递 (很少遇到)</h2>
<p><strong>margin-top 传递</strong></p>
<ul>
<li><em>如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的 margin-top 值会传递给父元素</em></li>
</ul>
<p><strong>margin-bottom传递</strong></p>
<ul>
<li><em>如果块级元素的底部线和父元素的底部线重叠，并且父元素的高度是auto，那么这个块级元素的 margin-bottom 值会传递给父元素</em></li>
</ul>
<p>如何防止出现传递问题？</p>
<ul>
<li>给父元素设置 padding-top\padding-bottom, 也就是用父元素的 padding 实现效果</li>
<li>给父元素设置 border</li>
<li>触发BFC: 设置 overflow为auto</li>
</ul>
<p>! 建议 !</p>
<ul>
<li>margin 一般是用来设置<strong>兄弟元素之间的间距</strong></li>
<li>padding 一般是用来设置<strong>父子元素之间的间距</strong></li>
</ul>
<h2 id="上下margin-的折叠" tabindex="-1"><a class="header-anchor" href="#上下margin-的折叠" aria-hidden="true">#</a> 上下margin 的折叠</h2>
<p><strong>垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做collapse（折叠）</strong></p>
<p><strong>水平方向上的margin（margin-left、margin-right）永远不会collapse</strong></p>
<p><strong>折叠后最终值的计算规则</strong></p>
<ul>
<li>两个值进行比较，取较大的值</li>
</ul>
<p>如何防止 margin collapse？</p>
<ul>
<li>就只设置其中一个元素的margin</li>
</ul>
<h2 id="上下-margin-折叠的情况" tabindex="-1"><a class="header-anchor" href="#上下-margin-折叠的情况" aria-hidden="true">#</a> 上下 margin 折叠的情况</h2>
<ul>
<li>两个兄弟块级元素之间上下margin的折叠</li>
<li>父子块级元素之间margin的折叠</li>
</ul>
<p><img src="@source/.vuepress/public/images/mar1.png" alt="图片"></p>
<h2 id="outline-外轮廓" tabindex="-1"><a class="header-anchor" href="#outline-外轮廓" aria-hidden="true">#</a> outline - 外轮廓</h2>
<p>outline 表示元素的外轮廓</p>
<ul>
<li><strong>不占用空间</strong></li>
<li><strong>默认显示在 border 的外面</strong></li>
</ul>
<p>outline相关属性有</p>
<ul>
<li>outline-width: 外轮廓的宽度</li>
<li>outline-style：取值跟 border 的样式一样，比如solid、dotted...等</li>
<li>outline-color: 外轮廓的颜色</li>
<li>outline：outline-width、outline-style、outline-color的简写属性，跟 border 用法类似</li>
</ul>
<p>应用实例:</p>
<ul>
<li><strong>去除a元素、input元素的focus轮廓效果</strong></li>
</ul>
<h2 id="盒子阴影-–-box-shadow" tabindex="-1"><a class="header-anchor" href="#盒子阴影-–-box-shadow" aria-hidden="true">#</a> 盒子阴影 – box-shadow</h2>
<p>box-shadow属性可以设置一个或者多个阴影</p>
<ul>
<li>每个阴影用<code>&lt;shadow&gt;</code>表示 可以设置多个 , 阴影会叠加颜色</li>
<li>多个阴影之间用逗号,隔开，从前到后叠加</li>
</ul>
<p><img src="@source/.vuepress/public/images/shadow1.png" alt="图片"></p>
<ul>
<li>第1个<code>&lt;length&gt;</code>：<strong>offset-x</strong>, 水平方向的偏移，正数往右偏移</li>
<li>第2个<code>&lt;length&gt;</code>：<strong>offset-y</strong>, 垂直方向的偏移，正数往下偏移</li>
<li>第3个<code>&lt;length&gt;</code>：<strong>blur-radius</strong>, 模糊半径</li>
<li>第4个<code>&lt;length&gt;</code>：<strong>spread-radius</strong>, 延伸半径</li>
<li><code>&lt;color&gt;</code>：<strong>阴影的颜色</strong>，如果没有设置，就跟随color属性的颜色</li>
<li><code>inset</code>：<strong>外框阴影变成内框阴影</strong> (几乎不用)</li>
</ul>
<p>以通过一个网站测试盒子的阴影: <a href="https://html-css-js.com/css/generator/box-shadow/" target="_blank" rel="noopener noreferrer">https://html-css-js.com/css/generator/box-shadow/<ExternalLinkIcon/></a></p>
<h2 id="文字阴影-text-shadow" tabindex="-1"><a class="header-anchor" href="#文字阴影-text-shadow" aria-hidden="true">#</a> 文字阴影 - text-shadow</h2>
<p>text-shadow用法类似于box-shadow，用于给文字添加阴影效果</p>
<p><code>&lt;shadow&gt;</code>的常见格式如下</p>
<ul>
<li>相当于box-shadow, 它没有spread-radius的值;</li>
</ul>
<p>可以通过一个网站测试文字的阴影:
*<a href="https://html-css-js.com/css/generator/box-shadow/" target="_blank" rel="noopener noreferrer">https://html-css-js.com/css/generator/box-shadow/<ExternalLinkIcon/></a></p>
<h2 id="行内非替换元素的注意事项" tabindex="-1"><a class="header-anchor" href="#行内非替换元素的注意事项" aria-hidden="true">#</a> 行内非替换元素的注意事项</h2>
<p>以下属性对行内级非替换元素不起作用</p>
<ul>
<li><strong>width、height、margin-top、margin-bottom 都不生效</strong></li>
</ul>
<p>以下属性对行内级非替换元素的效果比较特殊</p>
<ul>
<li>
<p><strong>padding-top和padding-bottom (上下会被撑起来, 但不占据空间) 、上下方向的border(上下会被撑起来, 也是不会占据空间)</strong></p>
</li>
<li>
<p>为什么被这么设计 ???
因为行内级一般会一块块排列的, 但如果被padding, margin 影响, 那么会被破坏当前的效果</p>
</li>
</ul>
<h2 id="css属性-box-sizing" tabindex="-1"><a class="header-anchor" href="#css属性-box-sizing" aria-hidden="true">#</a> CSS属性 - box-sizing</h2>
<p>box-sizing用来设置盒子模型中宽高的行为</p>
<p><strong>content-box</strong></p>
<ul>
<li>padding、border都布置在width、height外边</li>
</ul>
<p><strong>border-box</strong></p>
<ul>
<li>padding、border都布置在width、height里边</li>
</ul>
<p><img src="@source/.vuepress/public/images/bs01.png" alt="图片"></p>
<h2 id="元素的水平居中方案" tabindex="-1"><a class="header-anchor" href="#元素的水平居中方案" aria-hidden="true">#</a> 元素的水平居中方案</h2>
<p>在一些需求中，需要元素在父元素中水平居中显示（父元素一般都是块级元素、inline-block）</p>
<p><strong>行内级元素(包括inline-block元素)</strong></p>
<ul>
<li>水平居中：在父元素中设置text-align: center</li>
</ul>
<p><strong>块级元素</strong></p>
<ul>
<li>水平居中：margin: 0 auto</li>
<li>解释 : 块级元素默认独占一行, 但如果给他覆一个宽度后, 它的宽度会变成 设置的宽度 + margin-right = 独占一行</li>
</ul>
</template>
