<template><h1 id="额外知识" tabindex="-1"><a class="header-anchor" href="#额外知识" aria-hidden="true">#</a> 额外知识</h1>
<h2 id="三角" tabindex="-1"><a class="header-anchor" href="#三角" aria-hidden="true">#</a> 三角</h2>
<p><img src="@source/.vuepress/public/images/sanjiao01.png" alt="图片"></p>
<p>利用border或者CSS的特性我们可以做出很多图形:
<a href="https://css-tricks.com/the-shapes-of-css/#top-of-site" target="_blank" rel="noopener noreferrer">https://css-tricks.com/the-shapes-of-css/#top-of-site<ExternalLinkIcon/></a></p>
<!-- ## 使用 Web fonts
为了学习, 如下方式获取字体

第一步：在字体天下网站下载一个字体
* [https://www.fonts.net.cn/fonts-zh-1.html](https://www.fonts.net.cn/fonts-zh-1.html)
* 默认下载下来的是ttf文件；

第二步：使用字体；

使用过程如下：
* 1.将字体放到对应的目录中
* 2.通过`@font-face`来引入字体, 并且设置格式
* 3.使用字体

![图片](../.vuepress/public/images/fontface1.png)

**注意: @font-face 用于加载一个自定义的字体;**

## web-fonts的兼容性
刚才使用的字体文件是 .ttf, 它是TrueType字体.

* 在开发中某些浏览器可能不支持该字体, 所以为了浏览器的兼容性问题, 需要有对应其他格式的字体;

TrueType字体：拓展名是 .ttf
* OpenType/TrueType字体：拓展名是 .ttf、.otf，
建立在TrueType字体之上
* Embedded OpenType字体：拓展名是 .eot，
OpenType字体的压缩版
* SVG字体：拓展名是 .svg、 .svgz
* WOFF表示Web Open Font Format web开放字体：
拓展名是 .woff，建立在TrueType字体之上

提供一个网站来生产对应的字体文件:
* [https://font.qqe2.com/#](https://font.qqe2.com/#) 暂时可用 -->
<h2 id="css-精灵国" tabindex="-1"><a class="header-anchor" href="#css-精灵国" aria-hidden="true">#</a> CSS 精灵国</h2>
<p>什么是CSS Sprite</p>
<ul>
<li><em>是一种CSS图像合成技术，将各种小图片合并到一张图片上，然后利用CSS的背景定位来显示对应的图片部分</em></li>
<li>有人翻译为：CSS雪碧、CSS精灵</li>
</ul>
<p>使用CSS Sprite的好处</p>
<ul>
<li><strong>减少网页的http请求数量，加快网页响应速度，减轻服务器压力</strong></li>
<li><strong>减小图片总大小</strong></li>
<li><strong>解决了图片命名的困扰，只需要针对一张集合的图片命名</strong></li>
</ul>
<p>Sprite图片制作（雪碧图、精灵图）</p>
<ul>
<li>方法1：Photoshop, 设计人员提供</li>
<li>方法2：<a href="https://www.toptal.com/developers/css/sprite-generator" target="_blank" rel="noopener noreferrer">https://www.toptal.com/developers/css/sprite-generator<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/.vuepress/public/images/jingling1.png" alt="图片"></p>
<h3 id="精灵图的使用" tabindex="-1"><a class="header-anchor" href="#精灵图的使用" aria-hidden="true">#</a> 精灵图的使用</h3>
<p>精灵图如何使用呢?</p>
<ul>
<li>精灵图的原理是通过只显示图片的很小一部分来展示的;</li>
<li><strong>通常使用背景:</strong>
<ul>
<li>✓ 1.设置对应元素的宽度和高度</li>
<li>✓ 2.设置精灵图作为背景图片</li>
<li>✓ 3.调整背景图片的位置来展示</li>
</ul>
</li>
</ul>
<p>如何获取精灵图的位置</p>
<ul>
<li><a href="http://www.spritecow.com/" target="_blank" rel="noopener noreferrer">http://www.spritecow.com/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="cursor" tabindex="-1"><a class="header-anchor" href="#cursor" aria-hidden="true">#</a> cursor</h2>
<p>cursor 可以设置鼠标指针（光标）在元素上面时的显示样式</p>
<p>cursor常见的设值有</p>
<ul>
<li><strong>auto</strong>：浏览器根据上下文决定指针的显示样式，比如根据文本和非文本切换指针样式</li>
<li><strong>default</strong>：由操作系统决定，一般就是一个小箭头</li>
<li><strong>pointer</strong>：一只小手，鼠标指针挪动到链接上面默认就是这个样式</li>
<li><strong>text</strong>：一条竖线，鼠标指针挪动到文本输入框上面默认就是这个样式</li>
<li><strong>none</strong>：没有任何指针显示在元素上面</li>
</ul>
<h2 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h2>
<p>通常 <strong>行内级非替换元素(span , a ...)</strong> 不能进行形变</p>
<h3 id="位移-translate" tabindex="-1"><a class="header-anchor" href="#位移-translate" aria-hidden="true">#</a> 位移 - translate</h3>
<p>平移：translate(x, y)</p>
<p>值个数</p>
<ul>
<li>一个值时，设置x轴上的位移</li>
<li>二个值时，设置x轴和y轴上的位移</li>
</ul>
<p>值类型：</p>
<ul>
<li>数字：100px</li>
<li>百分比：<strong>参照元素本身</strong>（ refer to the size of bounding box ）</li>
</ul>
<h3 id="缩放-scale" tabindex="-1"><a class="header-anchor" href="#缩放-scale" aria-hidden="true">#</a> 缩放 - scale</h3>
<p>缩放：scale(x, y)</p>
<p>值个数</p>
<ul>
<li>一个值时，设置x轴上的缩放</li>
<li>二个值时，设置x轴和y轴上的缩放</li>
</ul>
<p>值类型：</p>
<ul>
<li>数字：
<ul>
<li>1：保持不变</li>
<li>2：放大一倍</li>
<li>0.5：缩小一半</li>
</ul>
</li>
<li>百分比：不支持百分比</li>
</ul>
<h3 id="缩放-rotate" tabindex="-1"><a class="header-anchor" href="#缩放-rotate" aria-hidden="true">#</a> 缩放 - rotate</h3>
<p>旋转：rotate(deg)</p>
<p>值个数</p>
<ul>
<li>一个值时，表示旋转的角度</li>
</ul>
<p>值类型：</p>
<ul>
<li>deg：旋转的角度</li>
<li>正数为顺时针</li>
<li>负数为逆时针</li>
</ul>
<p><strong>注意：旋转的原点受transform-origin的影响</strong></p>
<h3 id="transform-origin" tabindex="-1"><a class="header-anchor" href="#transform-origin" aria-hidden="true">#</a> transform-origin</h3>
<p>transform-origin：变形的原点</p>
<p>一个值：</p>
<ul>
<li>设置x轴的原点</li>
</ul>
<p>两个值：</p>
<ul>
<li>设置x轴和y轴的原点</li>
</ul>
<p>必须是<code>&lt;length&gt;</code>，<code>&lt;percentage&gt;</code>，或 left, center, right, top, bottom关键字中的一个</p>
<ul>
<li>left, center, right, top, bottom关键字</li>
<li>length：从左上角开始计算</li>
<li>百分比：参考元素本身大小</li>
</ul>
<p><img src="@source/.vuepress/public/images/trano1.png" alt="图片"></p>
<p><code>transform-origin: left top;</code></p>
<h3 id="倾斜-skew" tabindex="-1"><a class="header-anchor" href="#倾斜-skew" aria-hidden="true">#</a> 倾斜 - skew</h3>
<p>旋转：skew(x, y)</p>
<p>值个数</p>
<ul>
<li>一个值时，表示x轴上的倾斜</li>
<li>二个值时，表示x轴和y轴上的倾斜</li>
</ul>
<p>值类型：</p>
<ul>
<li>deg：旋转的角度</li>
<li>正数为顺时针</li>
<li>负数为逆时针</li>
</ul>
<p><strong>注意：旋转的原点受transform-origin的影响</strong></p>
<h2 id="过渡动画-transition" tabindex="-1"><a class="header-anchor" href="#过渡动画-transition" aria-hidden="true">#</a> 过渡动画 - transition</h2>
<p>transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的
一个简写属性。</p>
<p>transition-property：指定应用过渡属性的名称</p>
<ul>
<li>可以写all表示所有可动画的属性</li>
<li>属性是否支持动画查看文档</li>
</ul>
<p>transition-duration：指定过渡动画所需的时间</p>
<ul>
<li>单位可以是秒（s）或毫秒（ms）</li>
</ul>
<p>transition-timing-function：指定动画的变化曲线</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function<ExternalLinkIcon/></a></li>
</ul>
<p>transition-delay：指定过渡动画执行之前的等待时间</p>
<p><img src="@source/.vuepress/public/images/trant1.png" alt="图片"></p>
<h2 id="关键帧动画" tabindex="-1"><a class="header-anchor" href="#关键帧动画" aria-hidden="true">#</a> 关键帧动画</h2>
<p>transition来进行过渡动画，但是过渡动画只能控制首尾两个值：</p>
<ul>
<li>从关键帧动画的角度相当于只是定义了两帧的状态：第一帧和最后一帧。</li>
<li>如果我们希望可以有更多状态的变化，可以直接使用关键帧动画。</li>
</ul>
<p>关键帧动画使用@keyframes来定义多个变化状态，并且使用animation-name来声明匹配：</p>
<ul>
<li>1.使用 @keyframes创建一个规则</li>
<li>
<ol start="2">
<li>@keyframes中使用百分比定义各个阶段的样式</li>
</ol>
</li>
<li>
<ol start="3">
<li>通过animation将动画添加到属性上</li>
</ol>
</li>
</ul>
<p>另外，也可以使用from 和 to关键字：</p>
<ul>
<li>from相当于0%</li>
<li>to相当于100%</li>
</ul>
<h3 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> animation</h3>
<p><strong>CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animationiteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。</strong></p>
<ul>
<li>animation-name：指定执行哪一个关键帧动画</li>
<li>animation-duration：指定动画的持续时间</li>
<li>animation-timing-function：指定动画的变化曲线</li>
<li>animation-delay：指定延迟执行的时间</li>
<li>animation-iteration-count：指定动画执行的次数，执行infinite表示无限动画</li>
<li>animation-direction：指定方向，常用值normal和reverse</li>
<li>animation-fill-mode：执行动画最后保留哪一个值
<ul>
<li>none：回到没有执行动画的位置</li>
<li>forwards：动画最后一帧的位置</li>
<li>backwards：动画第一帧的位置</li>
</ul>
</li>
<li>animation-play-state：指定动画运行或者暂停（在JavaScript中使用，用于暂停动画）</li>
</ul>
<h2 id="vertical-align" tabindex="-1"><a class="header-anchor" href="#vertical-align" aria-hidden="true">#</a> vertical-align</h2>
<p><strong>官方文档的翻译：vertical-align会影响 <em>行内块级元素</em> 在一个 <em>行盒</em> 中垂直方向的位置</strong></p>
<p><strong>思考：一个div没有设置高度的时候，会不会有高度？</strong></p>
<ul>
<li>没有内容，没有高度</li>
<li>有内容，内容撑起来高度</li>
</ul>
<p><strong>但是内容撑起来高度的本质是什么呢？</strong></p>
<ul>
<li>内容有行高（line-height），撑起来了div的高度</li>
</ul>
<p><strong>行高为什么可以撑起div的高度？</strong></p>
<ul>
<li>这是因为line boxes的存在，并且line-boxes有一个特性，包裹每行的inline level</li>
<li>而其中的文字是有行高的，必须将整个行高包裹进去，才算包裹这个line-level</li>
</ul>
<p>那么，进一步思考：</p>
<ul>
<li>如果这个div中有图片，文字，inline-block，甚至他们设置了margin这些属性呢？</li>
</ul>
<h3 id="vertical-align-–-不同情况分析" tabindex="-1"><a class="header-anchor" href="#vertical-align-–-不同情况分析" aria-hidden="true">#</a> vertical-align – 不同情况分析</h3>
<p><img src="@source/.vuepress/public/images/va1.png" alt="图片">
<img src="@source/.vuepress/public/images/va2.png" alt="图片"></p>
<h3 id="vertical-align-的-baseline" tabindex="-1"><a class="header-anchor" href="#vertical-align-的-baseline" aria-hidden="true">#</a> vertical-align 的 baseline</h3>
<p><strong>结论：line-boxes一定会想办法包裹住当前行中所有的内容。</strong></p>
<p>但是，但是为什么对齐方式千奇百怪呢？</p>
<ul>
<li>你认为的千奇百怪，其实有它的内在规律</li>
<li>答案就是baseline对齐</li>
</ul>
<p><strong>来看官方vertical-align的默认值：没错，就是baseline</strong></p>
<p><strong>但是baseline都是谁呢？</strong></p>
<ul>
<li>文本的baseline是字母x的下方</li>
<li>Inline-block默认的baseline是margin-bottom的底部（没有，就是盒子的底部）</li>
<li>Inline-block有文本时，baseline是最后一行文本的x的下方</li>
</ul>
<p>一切都解释通了</p>
<h3 id="vertical-align的其他值" tabindex="-1"><a class="header-anchor" href="#vertical-align的其他值" aria-hidden="true">#</a> vertical-align的其他值</h3>
<ul>
<li>baseline(默认值)：基线对齐（你得先明白什么是基线）</li>
<li>top：把行内级盒子的顶部跟line boxes顶部对齐</li>
<li>middle：行内级盒子的中心点与父盒基线加上x-height一半的线对齐</li>
<li>bottom：把行内级盒子的底部跟line box底部对齐</li>
<li><code>&lt;percentage&gt;</code>：把行内级盒子提升或者下降一段距离（距离相对于line-height计算\元素高度）， 0%意味着同baseline一样</li>
<li><code>&lt;length&gt;</code>：把行内级盒子提升或者下降一段距离，0cm意味着同baseline一样</li>
</ul>
<p><strong>解决图片下边缘的间隙方法:</strong></p>
<ul>
<li>方法一: 设置成top/middle/bottom</li>
<li>方法二: 将图片设置为block元素</li>
</ul>
</template>
