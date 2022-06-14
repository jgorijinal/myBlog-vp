<template><h1 id="grid-栅格" tabindex="-1"><a class="header-anchor" href="#grid-栅格" aria-hidden="true">#</a> Grid 栅格</h1>
<p>最强大的布局系统 , <strong>Grid</strong>是一个二维系统，这意味着它可以同时处理<strong>列</strong>和<strong>行</strong></p>
<p>有三个重要概念: 容器 , 栅格线 , 单元格</p>
<p>先定义容器 , 然后要把格子画好</p>
<h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2>
<h3 id="行级容器" tabindex="-1"><a class="header-anchor" href="#行级容器" aria-hidden="true">#</a> 行级容器</h3>
<p><img src="@source/.vuepress/public/images/grid1.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span>100px 100px <span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px 100px 100px <span class="token punctuation">;</span>
    //也可以用百分比 
    //<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 20% 20% 20% 20% 20%  <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid  red<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    //没有定义元素的宽高<span class="token punctuation">,</span> 就会撑满
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="块级容器" tabindex="-1"><a class="header-anchor" href="#块级容器" aria-hidden="true">#</a> 块级容器</h3>
<p><img src="@source/.vuepress/public/images/grid2.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>display:inline-grid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="划分行列" tabindex="-1"><a class="header-anchor" href="#划分行列" aria-hidden="true">#</a> 划分行列</h2>
<p>grid有<strong>行</strong>有<strong>列</strong> , 使用 <code>grid-template-columns</code> 规则可划分列数，使用 <code>grid-template-rows</code> 划分行数</p>
<h3 id="固定宽度" tabindex="-1"><a class="header-anchor" href="#固定宽度" aria-hidden="true">#</a> 固定宽度</h3>
<p>2行5列 , 当容器宽度过大时将漏白</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>display:grid;
width:1000px;
height:200px;
grid-template-rows:100px 100px;
grid-template-columns:200px 200px 200px 200px 200px;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="百分比" tabindex="-1"><a class="header-anchor" href="#百分比" aria-hidden="true">#</a> 百分比</h3>
<p>使用百分比 , 自动适应容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>display: grid;
grid-template-rows: 50% 50%;
grid-template-columns: 25% 25% 25% 25%;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="重复设置" tabindex="-1"><a class="header-anchor" href="#重复设置" aria-hidden="true">#</a> 重复设置</h3>
<p>使用 <code>repeat</code> 设置，第一个参数为重复数量，第二个参数是重复值
<img src="@source/.vuepress/public/images/grid3.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>也可以使用多个值来定义重复 , 例如
<img src="@source/.vuepress/public/images/grid4.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>    
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span>100px 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>    // 重复多个值
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="自动填充" tabindex="-1"><a class="header-anchor" href="#自动填充" aria-hidden="true">#</a> 自动填充</h3>
<p>可使用<code>repeat(auto-fill, ...)</code> , 第一栅格的尺寸 , 自动分配元素的布局
<img src="@source/.vuepress/public/images/grid5.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="比例划分" tabindex="-1"><a class="header-anchor" href="#比例划分" aria-hidden="true">#</a> 比例划分</h3>
<h4 id="fr" tabindex="-1"><a class="header-anchor" href="#fr" aria-hidden="true">#</a> fr</h4>
<p>宽按<code>1份 2份 1份</code>等比例分布 , 高按<code>1份 1份</code>等比分布</p>
<p><img src="@source/.vuepress/public/images/grid6.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span>1fr 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span>1fr 2fr 1fr <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="重复-fr" tabindex="-1"><a class="header-anchor" href="#重复-fr" aria-hidden="true">#</a> 重复 fr</h4>
<p>可使用例如<code>repeat(2 , 1fr)</code>, 重复设置
<img src="@source/.vuepress/public/images/grid7.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  width: 300px;
  height: 100px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr 2fr);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax()</h3>
<p>使用<code>minmax()</code>可以设置取值范围 , 比如<code>最小100px ~ 最大1fr</code>间取值
<img src="@source/.vuepress/public/images/grid8.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    width: 300px;
    height: 300px;
    display: grid;
    grid-template-rows: 100px minmax(100px, 1fr);   // minmax()
    grid-template-columns: 100px 1fr;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="行列间间距" tabindex="-1"><a class="header-anchor" href="#行列间间距" aria-hidden="true">#</a> 行列间间距</h2>
<h3 id="行间距" tabindex="-1"><a class="header-anchor" href="#行间距" aria-hidden="true">#</a> 行间距</h3>
<p>可使用<code>row-gap</code>设置
<img src="@source/.vuepress/public/images/grid9.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>         // <span class="token property">row-gap</span><span class="token punctuation">:</span> ???
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="列间距" tabindex="-1"><a class="header-anchor" href="#列间距" aria-hidden="true">#</a> 列间距</h3>
<p>可使用<code>column-gap</code>设置</p>
<h3 id="组合设置" tabindex="-1"><a class="header-anchor" href="#组合设置" aria-hidden="true">#</a> 组合设置</h3>
<p>例如 <code>gap:20px 10px</code> 页次定义<strong>行和列</strong>的各自间距
<img src="@source/.vuepress/public/images/grid10.png" alt="图片"></p>
<p>也可统一设置行列间距为 20px , 如 <code>gap:20px</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    width: 300px;
    height: 200px;
    display: grid;
    gap: 20px;               // gap: ???
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr ;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="@source/.vuepress/public/images/grid11.png" alt="图片"></p>
<h2 id="元素定位" tabindex="-1"><a class="header-anchor" href="#元素定位" aria-hidden="true">#</a> 元素定位</h2>
<h3 id="栅格线数字编号" tabindex="-1"><a class="header-anchor" href="#栅格线数字编号" aria-hidden="true">#</a> 栅格线数字编号</h3>
<p>通过单独设置元素的栅格线范围进行布局, 栅格线从上到下 , 从左到右 , 从<code>1</code>开始计数</p>
<p><img src="@source/.vuepress/public/images/grid12.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 1fr  1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="小练习" tabindex="-1"><a class="header-anchor" href="#小练习" aria-hidden="true">#</a> 小练习</h4>
<p><img src="@source/.vuepress/public/images/grid13.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 1fr <span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:nth-child(2)</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:nth-child(3)</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #1bbfce<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="自定义栅格命名" tabindex="-1"><a class="header-anchor" href="#自定义栅格命名" aria-hidden="true">#</a> 自定义栅格命名</h3>
<p>使用<code>[]</code><strong>行</strong>和<strong>列</strong>的前后栅格线命名 , 命名重叠栅格线可以重叠, 重叠的栅格线中可以选一个随便使用
<img src="@source/.vuepress/public/images/grid14.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span>[r1-start] 1fr [r1-end r2-start] 1fr [r2-end r3-start] <span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span>[c1-start] 1fr [c1-end c2-start] 1fr [c2-end c3-start] 1fr [c3-end c4-start]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r1-start<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c2-start<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r1-end<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c3-start<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid pink<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="自动栅格命名" tabindex="-1"><a class="header-anchor" href="#自动栅格命名" aria-hidden="true">#</a> 自动栅格命名</h3>
<p>对重复设置的栅格系统会自动命名</p>
<p>例如 ,<code>grid-template-rows:repeat(2 ,[r-start] 1fr [r-end] ) ;</code></p>
<p>比如 <code>r-start 2</code> 和 <code>r-end 1</code> 是同一条栅格线 , 可以任意使用
<img src="@source/.vuepress/public/images/grid15.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>2 <span class="token punctuation">,</span>[r-start] 1fr [r-end] <span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>3 <span class="token punctuation">,</span>[c-start] 1fr [c-end] <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r-start 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c-start 1<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r-end 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c3-end 3<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid pink<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="偏移量-span" tabindex="-1"><a class="header-anchor" href="#偏移量-span" aria-hidden="true">#</a> 偏移量 span</h3>
<p>使用 <code>span</code> 可以设置包含栅格的数量或</p>
<p>先设置起始的栅格线 , 再定义偏移量 <code>span</code>的个数</p>
<p><img src="@source/.vuepress/public/images/grid16.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>3 <span class="token punctuation">,</span>1fr <span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>3 <span class="token punctuation">,</span>1fr <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid pink<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span>span 1 <span class="token punctuation">;</span>         //偏移量
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 3<span class="token punctuation">;</span>      //偏移量
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="简写形式" tabindex="-1"><a class="header-anchor" href="#简写形式" aria-hidden="true">#</a> 简写形式</h3>
<h4 id="grid-row-和-grid-column" tabindex="-1"><a class="header-anchor" href="#grid-row-和-grid-column" aria-hidden="true">#</a> grid-row 和 grid-column</h4>
<p>语法 : <code>开始</code>/<code>结束</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grid-row:2/4           
// 也可用 span
//比如 grid-row:2 / span 1 
grid-column:2/4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h4>
<p>语法 : <code>grid-row-start/grid-column-start/grid-row-end/grid-column-end</code></p>
<p>九宫格的正中间举例:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grid-area:2/2/3/3 ;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="区域声明" tabindex="-1"><a class="header-anchor" href="#区域声明" aria-hidden="true">#</a> 区域声明</h2>
<p>区域是由多个单元格构成，使用<code>grid-template-areas</code>可以定义栅格区域，并且栅格区域必须是矩形的</p>
<h3 id="区域布局" tabindex="-1"><a class="header-anchor" href="#区域布局" aria-hidden="true">#</a> 区域布局</h3>
<p>适配移动端的常用布局
<img src="@source/.vuepress/public/images/grid17.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid gray<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span>80px 1fr 50px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span>100px 1fr<span class="token punctuation">;</span>

    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">"header header"</span>
                        <span class="token string">"aside main"</span>
                        <span class="token string">"footer footer"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">aside</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> aside<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>结果如图:
<img src="@source/.vuepress/public/images/grid18.png" alt="图片"></p>
<h3 id="区域命名" tabindex="-1"><a class="header-anchor" href="#区域命名" aria-hidden="true">#</a> 区域命名</h3>
<p>会根据<code>grid-template-areas</code> , 系统会自动命名栅格线</p>
<p>比如:
<img src="@source/.vuepress/public/images/grid19.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 80px 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">"header header"</span>
                        <span class="token string">"aside  main"</span>
                        <span class="token string">"footer footer"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> header-start/  aside-start/ main-end/ main-end<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:nth-child(2)</span><span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> main-end/  aside-start/ footer-end/ footer-end<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> darkseagreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>效果为:
<img src="@source/.vuepress/public/images/grid20.png" alt="图片"></p>
<h3 id="区域站位符" tabindex="-1"><a class="header-anchor" href="#区域站位符" aria-hidden="true">#</a> 区域站位符</h3>
<p>可以用<code>.</code>给不许逃做处理的区域站位</p>
<p><img src="@source/.vuepress/public/images/grid21.png" alt="图片"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>左上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>右上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>中左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>中右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 80px 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">". ."</span>
                        <span class="token string">".  ."</span>
                        <span class="token string">"footer footer"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="流动方向" tabindex="-1"><a class="header-anchor" href="#流动方向" aria-hidden="true">#</a> 流动方向</h2>
<p><code>grid-auto-flow</code> 属性可以改变单元格排列方式</p>
<ul>
<li><code>grid-auto-flow:column</code>  纵向</li>
<li><code>grid-auto-flow:row</code>  横向</li>
<li><code>grid-auto-flow:dense</code>  元素使用前面空余的单元格</li>
</ul>
<p><img src="@source/.vuepress/public/images/grid22.png" alt="图片"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span>1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span>1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> bisque<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>10px solid pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
