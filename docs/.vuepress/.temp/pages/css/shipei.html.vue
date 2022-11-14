<template><h1 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配" aria-hidden="true">#</a> 移动端适配</h1>
<p>两个概念:</p>
<ul>
<li>自适应：根据不同的设备屏幕大小来自动调整尺寸、大小；</li>
<li>响应式：会随着屏幕的实时变动而自动调整，是一种自适应</li>
</ul>
<h2 id="认识视口-viewport" tabindex="-1"><a class="header-anchor" href="#认识视口-viewport" aria-hidden="true">#</a> 认识视口 viewport</h2>
<h3 id="布局视口和视觉视口" tabindex="-1"><a class="header-anchor" href="#布局视口和视觉视口" aria-hidden="true">#</a> 布局视口和视觉视口</h3>
<p>布局视口（layout viewport）</p>
<p>默认情况下，一个在PC端的网页在移动端会如何显示呢？</p>
<ul>
<li>第一，它会<em>按照宽度为980px来布局一个页面的盒子和内容；</em></li>
<li>第二，为了<em>显示可以完整的显示在页面中，对整个页面进行缩小；</em></li>
</ul>
<p>我们相对于980px布局的这个视口，称之为<strong>布局视口</strong>（layout viewport）；</p>
<ul>
<li>布局视口的<strong>默认宽度是980px；</strong></li>
</ul>
<p><strong>视觉视口（visual viewport）</strong></p>
<ul>
<li>如果默认情况下，我们按照980px显示内容，那么右侧有一部分区域
就会无法显示，所以手机端浏览器会默认对页面进行缩放以显示到用
户的可见区域中；</li>
<li>那么显示在可见区域的这个视口，就是视觉视口（visual viewport）</li>
</ul>
<p><img src="@source/.vuepress/public/images/buju1.png" alt="图片"></p>
<h3 id="理想视口-ideal-viewport" tabindex="-1"><a class="header-anchor" href="#理想视口-ideal-viewport" aria-hidden="true">#</a> 理想视口（ideal viewport）</h3>
<p>理想视口（ideal viewport）：</p>
<ul>
<li>默认情况下的layout viewport并不适合我们进行布局；</li>
<li>我们可以对layout viewport进行宽度和缩放的设置，以满足正常在一个移动端窗口的布局；</li>
<li>这个时候可以设置meta中的viewport；</li>
</ul>
<p>默认的布局视口是 980px, 需要把<strong>视觉视口 等于 布局视口</strong> : content=&quot;width=device-width&quot; 让布局视口的宽度等于设备的宽度</p>
<p><img src="@source/.vuepress/public/images/buju3.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/buju4.png" alt="图片"></p>
<h2 id="移动端适配方案" tabindex="-1"><a class="header-anchor" href="#移动端适配方案" aria-hidden="true">#</a> 移动端适配方案</h2>
<ul>
<li>方案一：百分比设置；(不用)
<ul>
<li>因为不同属性的百分比值，相对的可能是不同参照物，所以百分比往往很难统一；</li>
<li>所以百分比在移动端适配中使用是非常少的；</li>
</ul>
</li>
<li><strong>方案二：rem单位+动态html的font-size；</strong></li>
<li><strong>方案三：vw单位；</strong></li>
<li><strong>方案四：flex的弹性布局；</strong></li>
</ul>
<h2 id="适配方案-–-rem-动态html的font-size" tabindex="-1"><a class="header-anchor" href="#适配方案-–-rem-动态html的font-size" aria-hidden="true">#</a> 适配方案 – rem + 动态html的font-size</h2>
<h3 id="修改-rem-的-font-size尺寸" tabindex="-1"><a class="header-anchor" href="#修改-rem-的-font-size尺寸" aria-hidden="true">#</a> 修改 rem 的 font-size尺寸</h3>
<p><strong>方案一：媒体查询</strong></p>
<ul>
<li>可以通过媒体查询来设置不同尺寸范围内的屏幕html的font-size尺寸</li>
<li>缺点：
<ul>
<li>1.需要针对不同的屏幕<strong>编写大量的媒体查询</strong></li>
<li>2.如果动态改变尺寸，<strong>不会实时的进行更新</strong></li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/rm2.png" alt="图片"></p>
<p><strong>方案二：编写js代码</strong> (好处: 可以实时更新html 的 font-size)</p>
<ul>
<li>如果希望实时改变屏幕尺寸时，font-size也可以实时更改，可以通过js代码；</li>
<li>方法：
<ul>
<li>1.根据 html 的宽度计算出font-size的大小，并且设置到html上；</li>
<li>2.监听页面的实时改变，并且重新设置font-size的大小到html上；</li>
</ul>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/jsrem1.png" alt="图片"></p>
<p><strong>方案三：lib-flexible库</strong></p>
<ul>
<li>事实上，lib-flexible库做的事情是相同的，也可以直接引入它</li>
</ul>
<h3 id="rem的单位换算" tabindex="-1"><a class="header-anchor" href="#rem的单位换算" aria-hidden="true">#</a> rem的单位换算</h3>
<p><strong>方案一：手动换算</strong></p>
<ul>
<li>比如有一个在375px屏幕上，100px宽度和高度的盒子</li>
<li>需要将 100px 转成对应的 rem 值</li>
<li>100/37.5 = 2.6667，其他也是相同的方法计算即可</li>
</ul>
<p><strong>方案二：less/scss函数</strong></p>
<p><img src="@source/.vuepress/public/images/less5.png" alt="图片"></p>
<p><strong>方案三：postcss-pxtorem</strong>(用的多)</p>
<ul>
<li>目前在前端的工程化开发中，可以借助于webpack的工具来完成自动的转化</li>
</ul>
<p><strong>方案四：VSCode插件</strong></p>
<ul>
<li>px to rem 的插件，在编写时自动转化</li>
</ul>
<p><img src="@source/.vuepress/public/images/pxtorem1.png" alt="图片">
<img src="@source/.vuepress/public/images/root1.png" alt="图片"></p>
<h2 id="适配方案-vw" tabindex="-1"><a class="header-anchor" href="#适配方案-vw" aria-hidden="true">#</a> 适配方案 - vw</h2>
<p>在flexible GitHub上已经有写过这样的一句话：
<img src="@source/.vuepress/public/images/vw1.png" alt="图片"></p>
<p><strong>所以它更推荐使用viewport的两个单位vw、wh</strong></p>
<p>vw的兼容性如何呢？
<img src="@source/.vuepress/public/images/vw2.png" alt="图片"></p>
<h3 id="vw-和-rem-对比" tabindex="-1"><a class="header-anchor" href="#vw-和-rem-对比" aria-hidden="true">#</a> vw 和 rem 对比</h3>
<p>rem事实上是作为一种过渡的方案，它利用的也是vw的思想。</p>
<ul>
<li>前面不管是我们自己编写的js，还是flexible的源码；</li>
<li>都是将1rem等同于设计稿的1/10，在利用1rem计算相对于整个屏幕的尺寸大小；</li>
<li>那么我们来思考，1vw不是刚好等于屏幕的1/100吗？</li>
<li>而且相对于rem还更加有优势；</li>
</ul>
<p>vw相比于rem的优势：</p>
<ul>
<li><strong>优势一</strong>：不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个font-size；</li>
<li><strong>优势二</strong>：不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个font-size，防止继承；</li>
<li><strong>优势三</strong>：因为不依赖 font-size 的尺寸，所以不用担心某些原因html的font-size尺寸被篡改，页面尺寸混乱；</li>
<li><strong>优势四</strong>：vw 相比于 rem 更加语义化，1vw刚才是1/100的viewport的大小;</li>
<li><strong>优势五</strong>：可以具备 rem 之前所有的优点；</li>
</ul>
<p>vw只面临一个问题，将尺寸换算成vw的单位即可；</p>
<h3 id="vw的单位换算" tabindex="-1"><a class="header-anchor" href="#vw的单位换算" aria-hidden="true">#</a> vw的单位换算</h3>
<p><strong>方案一：手动换算</strong></p>
<ul>
<li>比如有一个在375px屏幕上，100px宽度和高度的盒子；</li>
<li>我们需要将100px转成对应的vw值；</li>
<li>100/3.75=26.667，其他也是相同的方法计算即可；</li>
</ul>
<p><strong>方案二：less/scss函数</strong>
<img src="@source/.vuepress/public/images/vw4.png" alt="图片"></p>
<p><strong>方案三：postcss-px-to-viewport-8-plugin</strong></p>
<ul>
<li>和rem一样，在前端的工程化开发中，可以借助于webpack的工具来完成自动的转化</li>
</ul>
<p><strong>方案四：VSCode插件</strong></p>
<ul>
<li>px to vw 的插件，在编写时自动转化</li>
</ul>
</template>
