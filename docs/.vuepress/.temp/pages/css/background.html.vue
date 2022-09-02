<template><h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<h2 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> 颜色值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>默认颜色为 transparent(透明的)</p>
<h2 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h2>
<p><strong>background-image</strong> 属性描述了元素的背景图像。 优点: 非常方便控制位置(精灵图也是一种运用场景)</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*不能落下 url()*/</span> 
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/logo.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/bgi.png" alt="图片"></p>
<h2 id="背景平铺" tabindex="-1"><a class="header-anchor" href="#背景平铺" aria-hidden="true">#</a> 背景平铺</h2>
<p>对背景图片进行平铺, 可以使用 <strong>background-repeat</strong> 属性</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat | np-repeat | repeat-x | repeat-y <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/pingpu1.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/logo.png<span class="token punctuation">)</span></span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat
  <span class="token comment">/*颜色和图片可以一起使用, 只不过是图片会压住背景颜色*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="背景图片位置-重要" tabindex="-1"><a class="header-anchor" href="#背景图片位置-重要" aria-hidden="true">#</a> 背景图片位置 (重要)</h2>
<p>利用 <strong>background-position</strong> 属性可以改变图片在背景中的位置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>background-position: x  y ;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参数: x 坐标和 y 坐标 , 可以使用 <strong>方位名词</strong> 和 <strong>精确单位</strong>
<img src="@source/.vuepress/public/images/fw1.png" alt="图片"></p>
<ol>
<li>参数是方位名词</li>
</ol>
<ul>
<li>如果指定的两个词都是方位名词, 则两个次的顺序无关 , 比如 center top 和 top center</li>
<li>如果只制定了一个方位名词, 另一个省略, 那么另一个值默认居中对其</li>
</ul>
<p><img src="@source/.vuepress/public/images/jjj1.png" alt="图片"></p>
<ol start="2">
<li>精确单位</li>
</ol>
<ul>
<li>如果参数是精确坐标, 那么 第一个肯定是 <strong>x坐标</strong>, 第二个肯定是 <strong>y坐标</strong></li>
<li>如果只指定一个数值, 那么该值一定是 x坐标,  另一个默认垂直居中</li>
</ul>
<p><img src="@source/.vuepress/public/images/jjj2.png" alt="图片"></p>
<ol start="3">
<li>混合单位
<img src="@source/.vuepress/public/images/jjj3.png" alt="图片"></li>
</ol>
<h2 id="背景固定" tabindex="-1"><a class="header-anchor" href="#背景固定" aria-hidden="true">#</a> 背景固定</h2>
<p><strong>background-attachment</strong> 属性是否固定或者随着页面的其余部分滚定</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll | fixed <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/lll1.png" alt="图片"></p>
<h2 id="背景复合写法-简写" tabindex="-1"><a class="header-anchor" href="#背景复合写法-简写" aria-hidden="true">#</a> 背景复合写法(简写)</h2>
<p><img src="@source/.vuepress/public/images/ppp1.png" alt="图片">
<img src="@source/.vuepress/public/images/ppp2.png" alt="图片"></p>
<h2 id="背景半透明" tabindex="-1"><a class="header-anchor" href="#背景半透明" aria-hidden="true">#</a> 背景半透明</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0 <span class="token punctuation">,</span> 0 <span class="token punctuation">,</span> 0 <span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>最后一个参数是 alpha 透明度, 取值范围在 0 ~ 1 之间</li>
<li>注意: 背景半透明指的是盒子的背景半透明, 盒子里面的内容不受影响</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p><img src="@source/.vuepress/public/images/bgbg1.png" alt="图片"></p>
</template>
