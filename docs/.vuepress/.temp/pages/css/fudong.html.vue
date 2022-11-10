<template><h1 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h1>
<p>float 属性可以指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。</p>
<ul>
<li>float 属性最初只用于在一段文本内浮动图像, 实现文字环绕的效果;</li>
<li>但是早期的CSS标准中并没有提供好的左右布局方案, 因此在一段时间里面它成为网页多列布局的最常用工具;</li>
</ul>
<p>绝对定位、浮动都会让元素脱离标准流，以达到灵活布局的效果</p>
<p>可以通过float属性让元素产生浮动效果，float的常用取值</p>
<ul>
<li>none：不浮动，默认值</li>
<li>left：向左浮动</li>
<li>right：向右浮动</li>
</ul>
<h2 id="浮动的规则" tabindex="-1"><a class="header-anchor" href="#浮动的规则" aria-hidden="true">#</a> 浮动的规则</h2>
<h4 id="规则-1" tabindex="-1"><a class="header-anchor" href="#规则-1" aria-hidden="true">#</a> 规则 1</h4>
<p><strong>元素一旦浮动后, 脱离标准流</strong></p>
<ul>
<li>朝着向左或向右方向移动，直到自己的边界紧贴着包含块（一般是父元素）或者其他浮动元素的边界为止</li>
<li>定位元素会层叠在浮动元素上面</li>
</ul>
<p><img src="@source/.vuepress/public/images/float1.png" alt="图片"></p>
<h4 id="规则-2" tabindex="-1"><a class="header-anchor" href="#规则-2" aria-hidden="true">#</a> 规则 2</h4>
<p><strong>如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界</strong></p>
<p><img src="@source/.vuepress/public/images/float2.png" alt="图片"></p>
<h4 id="规则-3" tabindex="-1"><a class="header-anchor" href="#规则-3" aria-hidden="true">#</a> 规则 3</h4>
<p><strong>浮动元素之间不能层叠</strong></p>
<ul>
<li>如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）</li>
<li>如果水平方向剩余的空间不够显示浮动元素，浮动元素将<strong>向下移动</strong>，直到有充足的空间为止</li>
</ul>
<h4 id="规则-4" tabindex="-1"><a class="header-anchor" href="#规则-4" aria-hidden="true">#</a> 规则 4</h4>
<p><strong>浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出</strong></p>
<ul>
<li>比如行内级元素、inline-block元素、块级元素的文字内容</li>
</ul>
<p><img src="@source/.vuepress/public/images/float4.png" alt="图片"></p>
<h4 id="规则-5" tabindex="-1"><a class="header-anchor" href="#规则-5" aria-hidden="true">#</a> 规则 5</h4>
<p><strong>行内级元素、inline-block元素浮动后，其顶部将与所在行的顶部对齐</strong></p>
<p><img src="@source/.vuepress/public/images/float5.png" alt="图片"></p>
<h2 id="浮动练习" tabindex="-1"><a class="header-anchor" href="#浮动练习" aria-hidden="true">#</a> 浮动练习</h2>
<h3 id="练习-1-百度页码" tabindex="-1"><a class="header-anchor" href="#练习-1-百度页码" aria-hidden="true">#</a> 练习 1  - 百度页码</h3>
<p>浮动常用的场景</p>
<ul>
<li><em>解决行内级元素、inline-block元素的 <strong>水平间隙</strong> 问题</em></li>
</ul>
<p><img src="@source/.vuepress/public/images/float01.png" alt="图片"></p>
<h3 id="练习-2-京东的布局-负-margin-技巧" tabindex="-1"><a class="header-anchor" href="#练习-2-京东的布局-负-margin-技巧" aria-hidden="true">#</a> 练习 2 - 京东的布局 (负 margin 技巧)</h3>
<p>浮动布局方案:</p>
<ul>
<li>实现京东页面下面的布局</li>
</ul>
<p><img src="@source/.vuepress/public/images/fum3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/fum2.png" alt="图片">
<img src="@source/.vuepress/public/images/fum1.png" alt="图片"></p>
<h3 id="练习-3-京东多列布局-也是-负-margin-技巧" tabindex="-1"><a class="header-anchor" href="#练习-3-京东多列布局-也是-负-margin-技巧" aria-hidden="true">#</a> 练习 3 - 京东多列布局 (也是 负 margin 技巧)</h3>
<p>浮动布局方案:</p>
<ul>
<li>实现京东页面下面的布局</li>
</ul>
<p><img src="@source/.vuepress/public/images/fum4.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/fum6.png" alt="图片">
<img src="@source/.vuepress/public/images/fum7.png" alt="图片"></p>
<h3 id="练习-4" tabindex="-1"><a class="header-anchor" href="#练习-4" aria-hidden="true">#</a> 练习 4</h3>
<p>浮动布局方案:</p>
<ul>
<li>实现考拉页面下面的布局</li>
</ul>
<p><img src="@source/.vuepress/public/images/kaola1.png" alt="图片"></p>
<h2 id="浮动的问题-–-高度塌陷" tabindex="-1"><a class="header-anchor" href="#浮动的问题-–-高度塌陷" aria-hidden="true">#</a> 浮动的问题 – 高度塌陷</h2>
<p><em>由于浮动元素脱离了标准流，变成了脱标元素，所以不再向父元素汇报高度</em></p>
<ul>
<li>父元素<strong>计算总高度</strong>时，就<strong>不会计算浮动子元素的高度</strong>，导致了<strong>高度坍塌</strong>的问题</li>
</ul>
<p>解决父元素高度坍塌问题的过程，一般叫做清浮动（清理浮动、清除浮动）</p>
<p>清浮动的目的是</p>
<ul>
<li><strong>让父元素计算总高度的时候，把浮动子元素的高度算进去</strong></li>
</ul>
<p>如何清除浮动呢? 使用clear属性</p>
<h3 id="clear-属性" tabindex="-1"><a class="header-anchor" href="#clear-属性" aria-hidden="true">#</a> clear 属性</h3>
<p>clear属性是做什么的呢?</p>
<ul>
<li>clear 属性可以<strong>指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面;</strong></li>
</ul>
<p>clear的常用取值</p>
<ul>
<li>left：要求元素的顶部低于之前生成的所有<strong>左</strong>浮动元素的底部</li>
<li>right：要求元素的顶部低于之前生成的所有<strong>右</strong>浮动元素的底部</li>
<li>both：要求元素的顶部低于之前生成的<strong>所有</strong>浮动元素的底部</li>
<li>none：默认值，无特殊要求</li>
</ul>
<p>那么可以利用这个特性来清除浮动.</p>
<h3 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法" aria-hidden="true">#</a> 清除浮动的方法</h3>
<p>事实上有很多方法可以清除浮动</p>
<p><strong>方法一: 给父元素设置固定高度</strong></p>
<ul>
<li>扩展性不好（不推荐）</li>
</ul>
<p><strong>方法二: 在父元素最后增加一个空的块级子元素，并且让它设置 <code>clear: both</code></strong></p>
<ul>
<li>会<strong>增加很多无意义的空标签</strong>，维护麻烦</li>
<li>违反了结构与样式分离的原则（不推荐）</li>
</ul>
<p><strong>方法三: 给父元素添加一个伪元素</strong></p>
<ul>
<li><em>推荐;</em></li>
<li>编写好后可以轻松实现清除浮动</li>
</ul>
<h3 id="伪元素清除浮动" tabindex="-1"><a class="header-anchor" href="#伪元素清除浮动" aria-hidden="true">#</a> 伪元素清除浮动</h3>
<p>给父元素增加 <code>::after</code> 伪元素</p>
<ul>
<li>纯 CSS 样式解决，结构与样式分离（推荐）</li>
</ul>
<p><img src="@source/.vuepress/public/images/fd55.png" alt="图片"></p>
</template>
