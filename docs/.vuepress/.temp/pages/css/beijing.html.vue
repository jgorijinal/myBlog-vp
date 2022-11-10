<template><h1 id="css设置背景" tabindex="-1"><a class="header-anchor" href="#css设置背景" aria-hidden="true">#</a> CSS设置背景</h1>
<h2 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> background-image</h2>
<p>background-image用于设置元素的背景图片</p>
<ul>
<li><em>会 <strong>盖在(不是覆盖)</strong> background-color的上面</em></li>
</ul>
<p>如果设置了多张图片</p>
<ul>
<li><em>设置的第一张图片将显示在最上面，其他图片按顺序层叠在下面</em></li>
</ul>
<p><strong>注意：如果设置了背景图片后，元素没有具体的宽高，背景图片是不会显示出来的</strong></p>
<p>所以 , 一般给 行内元素 加上 display:inline-block; 转换成 行内块元素后, 给他们一些具体的宽高 (使用精灵图)</p>
<p><img src="@source/.vuepress/public/images/back1.png" alt="图片"></p>
<h2 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat" aria-hidden="true">#</a> background-repeat</h2>
<p>background-repeat用于设置背景图片是否要平铺</p>
<p>常见的设值有</p>
<ul>
<li>repeat：平铺(默认值)</li>
<li>no-repeat：不平铺</li>
<li>repeat-x：只在水平方向平铺</li>
<li>repeat-y：只在垂直平方向平铺</li>
</ul>
<p><img src="@source/.vuepress/public/images/repeat1.png" alt="图片"></p>
<h2 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size" aria-hidden="true">#</a> background-size</h2>
<p>background-size用于设置背景图片的大小</p>
<ul>
<li>auto：默认值, 以背景图本身大小显示</li>
<li>cover：缩放背景图，以完全覆盖铺满元素,可能背景图片部分看不见</li>
<li>contain：缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比</li>
<li><code>&lt;percentage&gt;</code>：百分比，相对于背景区（background positioning area）</li>
<li>length：具体的大小，比如100px</li>
</ul>
<p><img src="@source/.vuepress/public/images/back2.png" alt="图片"></p>
<h2 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h2>
<p>background-position用于设置背景图片在水平、垂直方向上的具体位置</p>
<ul>
<li>可以设置具体的数值 比如 20px 30px;</li>
<li>水平方向还可以设值：left、center、right</li>
<li>垂直方向还可以设值：top、center、bottom</li>
<li>如果<strong>只设置了1个方向，另一个方向默认是center</strong></li>
</ul>
<p><img src="@source/.vuepress/public/images/back3.png" alt="图片"></p>
<h2 id="background-attachment" tabindex="-1"><a class="header-anchor" href="#background-attachment" aria-hidden="true">#</a> background-attachment</h2>
<p>background-attachment决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p>
<p>可以设置以下3个值</p>
<ul>
<li>scroll：此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动</li>
<li>local：此关键属性值表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动.</li>
<li>fixed：此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</li>
</ul>
<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h2>
<p><img src="@source/.vuepress/public/images/back4.png" alt="图片"></p>
<p>background-size可以省略，如果不省略，/background-size必须紧跟在background-position的后面</p>
<p>其他属性也都可以省略，而且顺序任意</p>
<p>比较常见的用法 :</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.xxx</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./img/logo-sprite.png<span class="token punctuation">)</span></span> no-repeat center center<span class="token punctuation">;</span>
  // 或
  <span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./img/logo-sprite.png<span class="token punctuation">)</span></span> no-repeat -30px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="background-image-和-img对比" tabindex="-1"><a class="header-anchor" href="#background-image-和-img对比" aria-hidden="true">#</a> background-image 和 img对比</h2>
<p><img src="@source/.vuepress/public/images/back5.png" alt="图片"></p>
<p>总结</p>
<ul>
<li>img，作为网页内容的重要组成部分，比如广告图片、LOGO图片、文章配图、产品图片</li>
<li>background-image，可有可无。有，能让网页更加美观。无，也不影响用户获取完整的网页内容信息</li>
</ul>
</template>
