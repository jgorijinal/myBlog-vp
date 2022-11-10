<template><h1 id="继承-层叠-元素类型" tabindex="-1"><a class="header-anchor" href="#继承-层叠-元素类型" aria-hidden="true">#</a> 继承 - 层叠 - 元素类型</h1>
<h2 id="css的属性继承" tabindex="-1"><a class="header-anchor" href="#css的属性继承" aria-hidden="true">#</a> CSS的属性继承</h2>
<p>CSS的某些属性具有继承性(Inherited):</p>
<ul>
<li>如果一个属性具备继承性, 那么在该元素上设置后, 它的后代元素都可以继承这个属性;</li>
<li>当然, 如果后代元素自己有设置该属性, 那么优先使用后代元素自己的属性(不管继承过来的属性权重多高);</li>
</ul>
<p>如何知道一个属性是否具有继承性呢?</p>
<ul>
<li>常见的 font-size/font-family/font-weight/line-height/color/text-align都具有继承性;</li>
<li>这些<strong>不用刻意去记</strong>, 用的多自然就记住了</li>
</ul>
<p>要看文档
<img src="@source/.vuepress/public/images/jcjc1.png" alt="图片"></p>
<p><strong>注意(了解): 继承过来的是计算值, 而不是设置值</strong></p>
<p>常见的继承属性(不用背), 想了解就查看文档就行
<img src="@source/.vuepress/public/images/jcjc2.png" alt="图片"></p>
<h2 id="css属性的层叠" tabindex="-1"><a class="header-anchor" href="#css属性的层叠" aria-hidden="true">#</a> CSS属性的层叠</h2>
<p><em>CSS的翻译是层叠样式表, 什么是层叠呢?</em></p>
<ul>
<li>对于一个元素来说, <strong>相同一个属性</strong>我们可以<strong>通过不同的选择器给它进行多次设置</strong></li>
<li>那么属性会<strong>被一层层覆盖上去</strong></li>
<li>但是最终<strong>只有一个会生效</strong></li>
</ul>
<p>那么多个样式属性覆盖上去, 哪一个会生效呢?</p>
<ul>
<li><strong>判断一</strong>: <strong>选择器的权重, 权重大的生效, 根据权重可以判断出优先级</strong></li>
<li><strong>判断二</strong>: <strong>先后顺序, 权重相同时, 后面设置的生效</strong></li>
</ul>
<p>那么如何知道元素的权重呢?</p>
<h3 id="选择器的权重" tabindex="-1"><a class="header-anchor" href="#选择器的权重" aria-hidden="true">#</a> 选择器的权重</h3>
<ul>
<li><strong>!important</strong>：10000</li>
<li><strong>内联样式</strong>：1000</li>
<li><strong>id选择器</strong>：100</li>
<li><strong>类选择器、属性选择器、伪类</strong>：10</li>
<li><strong>元素选择器、伪元素</strong>：1</li>
<li><strong>通配符</strong>：0
小练习 :
<img src="@source/.vuepress/public/images/qx01.png" alt="图片"></li>
</ul>
<h2 id="元素类型" tabindex="-1"><a class="header-anchor" href="#元素类型" aria-hidden="true">#</a> 元素类型</h2>
<h3 id="display-值" tabindex="-1"><a class="header-anchor" href="#display-值" aria-hidden="true">#</a> display 值</h3>
<p>CSS中有个display属性，能修改元素的显示类型，有4个常用值</p>
<ul>
<li><strong>block</strong>：让元素显示为块级元素</li>
<li><strong>inline</strong>：让元素显示为行内级元素</li>
<li><strong>inline-block</strong>：让元素同时具备行内级、块级元素的特征</li>
<li><strong>none</strong>：隐藏元素</li>
</ul>
<h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h4>
<p>block元素:</p>
<ol>
<li>独占父元素的一行</li>
<li>可以随意设置宽高</li>
<li>高度默认由内容决定</li>
</ol>
<p>inline-block元素:</p>
<ol>
<li>跟其他行内级元素在同一行显示</li>
<li>可以随意设置宽高</li>
</ol>
<p>inline:</p>
<ol>
<li>跟其他行内级元素在同一行显示;</li>
<li>不可以随意设置宽高;</li>
<li>宽高都由内容决定;</li>
</ol>
<h3 id="元素隐藏方法" tabindex="-1"><a class="header-anchor" href="#元素隐藏方法" aria-hidden="true">#</a> 元素隐藏方法</h3>
<p><strong>方法一: display设置为none</strong></p>
<ul>
<li>元素不显示出来, 并且也不占据位置, 不占据任何空间(和不存在一样);</li>
</ul>
<p><strong>方法二: visibility设置为hidden</strong></p>
<ul>
<li>设置为 hidden, 虽然元素不可见, 但是会占据元素应该占据的空间;</li>
<li>默认为 visible, 元素是可见的;</li>
</ul>
<p><strong>方法三: rgba设置颜色, 将a的值设置为0</strong></p>
<ul>
<li>rgba 的 A 设置的是alpha值, 可以设置透明度, 不影响子元素;</li>
</ul>
<p><strong>方法四: opacity设置透明度, 设置为0</strong></p>
<ul>
<li>设置整个元素的透明度, 会影响所有的子元素;</li>
</ul>
<h3 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> overflow</h3>
<p>overflow 用于控制内容溢出时的行为</p>
<ul>
<li><strong>visible</strong>：溢出的内容照样可见</li>
<li><strong>hidden</strong>：溢出的内容直接裁剪</li>
<li><strong>scroll</strong>：溢出的内容被裁剪，但可以通过滚动机制查看
<ul>
<li>会一直显示滚动条区域，滚动条区域占用的空间属于width、height</li>
</ul>
</li>
<li><strong>auto</strong>：自动根据内容是否溢出来决定是否提供滚动机制</li>
</ul>
</template>
