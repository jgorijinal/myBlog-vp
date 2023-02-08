<template><h1 id="小程序核心语法" tabindex="-1"><a class="header-anchor" href="#小程序核心语法" aria-hidden="true">#</a> 小程序核心语法</h1>
<h2 id="绑定数据" tabindex="-1"><a class="header-anchor" href="#绑定数据" aria-hidden="true">#</a> 绑定数据</h2>
<p><code>index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token comment">// 获取应用实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol>
<li>什么是<strong>数据驱动</strong>？
<ol>
<li>当数据发生变化时，视图理应发生变化</li>
</ol>
</li>
<li>在小程序中如何完成数据绑定？
<ol>
<li>在 <code>data</code> 中定义数据 (对象)</li>
<li>在 <code>wxml</code> 中通过 <code>{{}}</code> 使用数据</li>
</ol>
</li>
</ol>
<h2 id="常用事件与属性列表" tabindex="-1"><a class="header-anchor" href="#常用事件与属性列表" aria-hidden="true">#</a> 常用事件与属性列表</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>如何为按钮添加点击事件 ?</li>
<li>如何修改 <code>data</code> 中的数据的值 ?</li>
</ol>
</div>
<h4 id="处理点击事件" tabindex="-1"><a class="header-anchor" href="#处理点击事件" aria-hidden="true">#</a> 处理点击事件</h4>
<p>那么现在处理一下<strong>点击事件</strong></p>
<blockquote>
<ol>
<li>创建一个按钮</li>
<li>当用户点击按钮时</li>
<li>让 <code>product</code> 的 <code>num + 1</code></li>
</ol>
</blockquote>
<p>先创建按钮</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在【小程序】中，那么如果想要给 <code>button</code> 添加点击事件则不可以使用 <code>click</code> 而是 <strong><code>bind:tap / bindtap</code></strong></p>
<p>其中 <code>bind: / bind</code> 表示【绑定事件】，<code>tap</code> 为绑定的具体事件。小程序具体事件列表，可以点击 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html#%E4%BA%8B%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a> 查看</p>
<p><code>index.wxml</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addNum1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'点击了按钮'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="修改-data-的数据" tabindex="-1"><a class="header-anchor" href="#修改-data-的数据" aria-hidden="true">#</a> 修改 data 的数据</h4>
<p>想要修改 <code>data</code> 中的数据，那么我们需要借助一个函数 <code>setData</code>。</p>
<p><code>setData</code> 接收一个 对象作为参数，这个对象就是最新的 <code>data</code> 数据。</p>
<p>其中 <code>key</code> 为要修改的数据， <code>value</code> 为最新的值</p>
<h4 id="访问-data-的数据" tabindex="-1"><a class="header-anchor" href="#访问-data-的数据" aria-hidden="true">#</a> 访问 data 的数据</h4>
<p>因为想要让 <code>num + 1</code> ，所以我们还需要拿到 <code>num</code> 的当前值，想要访问 <code>num</code> 的值，可以通过 <code>this.data.product.num</code> 的形式访问</p>
<p>所以最终的修改 <code>num</code> 的代码为：</p>
<p><code>index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">'product.num'</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>product<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>答案:</strong></p>
<ol>
<li>如何为按钮添加点击事件？
<ol>
<li><code>bindtap</code> ||  <code>bind:tap</code></li>
</ol>
</li>
<li>如何修改 <code>data</code> 中数据的值？
<ol>
<li>通过 <code>this.setData({})</code> 定义新的值</li>
<li>通过 <code>this.data</code> 访问具体的值</li>
</ol>
</li>
</ol>
<h2 id="事件传参" tabindex="-1"><a class="header-anchor" href="#事件传参" aria-hidden="true">#</a> 事件传参</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果想要在 <strong>点击事件中</strong> 传递参数，那么需要怎么做？</p>
</div>
<p>现在 <code>addNum</code> 方法可以接受一个参数, 每次点击按钮增加的 <code>num</code> 数量为传入的参数</p>
<hr>
<p>在小程序中，如果想要给 **点击事件传递参数的话，**那么需要借助 <strong>event 对象</strong> 和 <strong>data- 属性</strong> ！</p>
<h4 id="形参" tabindex="-1"><a class="header-anchor" href="#形参" aria-hidden="true">#</a> 形参</h4>
<p>首先先来看 <strong>形参</strong>，对于 <strong>点击事件的回调方法</strong> 而言，默认会接收一个参数 <strong>event （事件对象）</strong>。这个 <code>event</code> 对象为：<strong>回调方法的唯一参数</strong></p>
<h4 id="实参" tabindex="-1"><a class="header-anchor" href="#实参" aria-hidden="true">#</a> 实参</h4>
<p>对于 <strong>小程序</strong> 中，我们不能直接为 <strong>回调方法传递实参</strong>。</p>
<p>而是需要通过：<strong>属性绑定的形式，把需要传递的参数绑定到 当前 <code>DOM</code> 元素中</strong>，绑定数据的属性需要以 <code>data-</code> 开头。该属性可以通过 <code>e.target.dataset</code> 进行访问</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">data-step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.target.dataset.step 获取值</span>
    <span class="token keyword">const</span> step <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>step<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">'product.num'</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>product<span class="token punctuation">.</span>num <span class="token operator">+</span> step
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>总结:</strong></p>
<p>如果想要在【点击事件中】传递参数，那么需要怎么做？</p>
<ol>
<li>通过属性绑定<code>（data-xxx）</code>的形式，把需要传递的参数绑定到 当前 <code>DOM</code> 元素中</li>
<li>在对应的回调函数中，通过 <code>e.target.dataset</code> 进行访问</li>
</ol>
<h2 id="实现【双向数据绑定】" tabindex="-1"><a class="header-anchor" href="#实现【双向数据绑定】" aria-hidden="true">#</a> 实现【双向数据绑定】</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>什么叫做<strong>双向数据绑定</strong>？</li>
<li>小程序中如何实现双向数据绑定？</li>
</ol>
</div>
<p>接下来希望实现一个新的功能：</p>
<blockquote>
<p>创建一个数字输入框，输入框 与【商品数量】完成 【双向数据绑定】。</p>
<p>即：</p>
<ol>
<li>输入框内容发生变化时，商品数量同步跟随变化</li>
<li>商品数量发生变化时，输入框内容同步跟随变化</li>
</ol>
</blockquote>
<hr>
<blockquote>
<ol>
<li>创建一个【数字输入框】</li>
<li>设置 【商品数量】 为输入框的初始值</li>
<li>监听用户的输入行为</li>
<li>获取用户输入的值</li>
<li>赋值给【商品数量】</li>
</ol>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{product.num}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onInput<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">onInput</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">'product.num'</span><span class="token operator">:</span> val
    <span class="token punctuation">}</span><span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>总结:</strong></p>
<ol>
<li>什么叫做双向数据绑定？
<ol>
<li>当视图发生变化时，数据跟随发生变化</li>
<li>当数据发生变化时，视图跟随发生变化</li>
</ol>
</li>
<li>小程序中如何实现双向数据绑定？
<ol>
<li>通过 <code>value</code> 为 <code>input</code> 视图绑定数据</li>
<li>通过监听 <code>bindinput</code> 获取视图的变化，在回调方法中修改数据</li>
</ol>
</li>
</ol>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>wx:if</code> 和 <code>hidden</code> 的区别是什么？</p>
</div>
<blockquote>
<ol>
<li>如果【总价格 &lt;= 100 】：hello 帅哥</li>
<li>如果【总价格 &gt; 100 &amp;&amp; 总价格 &lt; 1000】：哇哦 有钱人哦</li>
<li>如果【总价格 &gt;= 1000】：土豪你好</li>
</ol>
</blockquote>
<p>小程序中提供了两个 API 都可以实现【条件渲染】的功能：</p>
<ol>
<li><code>wx:if ... wx:elif ... wx:else</code></li>
<li><code>hidden</code></li>
</ol>
<p>分别实现一下</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- wx:if ... wx:elif ... wx:else：判断结果为 true 则进行渲染，否则不进行渲染 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    售货员小姐姐惊呼：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ product.price * product.num &lt;= 100 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello 帅哥<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ product.price * product.num > 100 &amp;&amp; product.price * product.num &lt; 1000 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>哇哦 有钱人哦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">></span></span>土豪你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- hidden：结果为 true 则隐藏，否则不隐藏 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    售货员小姐姐惊呼：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ !(product.price * product.num &lt;= 100) }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello 帅哥<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ !(product.price * product.num > 100 &amp;&amp; product.price * product.num &lt; 1000) }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>哇哦 有钱人哦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{product.price * product.num &lt; 1000}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>土豪你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>答案：</p>
<blockquote>
<ol>
<li>v-if 和 hidden 的区别是什么？
<ol>
<li><code>v-if</code> 用来控制 【组件是否会被渲染】</li>
<li><code>hidden</code> 用来控制【组件是否会被隐藏】</li>
<li>一般来说，<code>wx:if</code> 有更高的切换消耗而 <code>hidden</code> 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则 <code>wx:if</code> 较好。</li>
</ol>
</li>
</ol>
</blockquote>
<h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>使用 <code>wx:for</code> 时，当前项的【下标变量名】和【当前项变量名】默认分别是什么？</li>
<li><code>block</code> 组件是否会被渲染？</li>
</ol>
</div>
<p>小程序中提供了 <code>wx:for</code> 指令</p>
<p>同时也为提供了一个：<strong>包裹性质的容器 <code>block</code> 组件</strong>，当我们去循环多个元素时，可以使用 <code>block</code> 进行包裹，<code>block</code> 组件只起到包裹的其他组件的作用，本身并不会进行渲染。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{products}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>商品名: {{item.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>商品价格 : {{item.price}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">products</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'苹果'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">3.2</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'面包'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">5.0</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'可乐'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>总结:</strong></p>
<ol>
<li>使用 <code>wx:for</code> 时，当前项的【下标变量名】和【当前项变量名】默认分别是什么？
<ol>
<li>默认数组的当前项的下标变量名默认为 <strong><code>index</code></strong></li>
<li>数组当前项的变量名默认为 <strong><code>item</code></strong></li>
</ol>
</li>
<li><code>block</code> 组件是否会被渲染？
<ol>
<li><code>block</code> 只是一个包裹性质的容器，不会被渲染</li>
</ol>
</li>
</ol>
<h2 id="配置文件解读" tabindex="-1"><a class="header-anchor" href="#配置文件解读" aria-hidden="true">#</a> 配置文件解读</h2>
<ol>
<li><code>app.json</code> 配置文件：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html
<ol>
<li><code>pages</code> 数组：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages
<ol>
<li>创建 <code>list</code> 页面</li>
</ol>
</li>
<li><code>window</code> 对象：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window</li>
<li><code>tabbar</code> 对象：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar
<ol>
<li><code>index</code> 页面</li>
<li><code>list</code> 页面</li>
</ol>
</li>
</ol>
</li>
<li><code>页面.json</code> 配置文件：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'</li>
</ol>
<h2 id="数据请求" tabindex="-1"><a class="header-anchor" href="#数据请求" aria-hidden="true">#</a> 数据请求</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>小程序中的数据请求有什么限制？以及如何解决这种限制</li>
<li>小程序的数据请求会存在跨域问题吗？为什么？</li>
<li>小程序的数据请求可以叫做 <code>ajax</code> 请求吗？为什么？</li>
</ol>
</div>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html" target="_blank" rel="noopener noreferrer">wx.request<ExternalLinkIcon/></a> 发起网络请求，请求的方式主要分为两种：</p>
<ol>
<li><code>get</code> 请求</li>
<li><code>post</code> 请求</li>
</ol>
<p>这里准备了两个数据请求接口，可以用来测试 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html" target="_blank" rel="noopener noreferrer">wx.request<ExternalLinkIcon/></a> 的数据请求（详见接口文档）：</p>
<ol>
<li><code>/api/test/getList</code></li>
<li><code>/api/test/postData</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// html</span>
<span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"onGetClick"</span><span class="token operator">></span>发起 <span class="token keyword">get</span> 请求<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token comment">// js</span>
<span class="token comment">// index.js</span>
<span class="token comment">// 获取应用实例</span>
<span class="token function">onGetClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-blog.lgdsunday.club/api/test/getList'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>这样的代码看起来没有任何问题，但是却得到了一个错误（可测试的 <code>APPID：wxf01e2ce0eb588aac</code>）：
<img src="@source/.vuepress/public/images/wx01.png" alt="图片"></p>
<p>而要解决这个问题，我们就需要明确一个问题：<strong>小程序中的数据请求有什么限制？</strong></p>
<ol>
<li>只能请求 <code>HTTPS</code> 类型的接口</li>
<li>必须将接口的域名添加到信任列表中</li>
</ol>
<p><strong>解决方案：</strong></p>
<ol>
<li>生产环境：将想要请求的域名协议【更改为 HTTPS】并【添加到域名信任列表】</li>
<li>开发环境：通过勾选
<img src="@source/.vuepress/public/images/wx02.png" alt="图片"></li>
</ol>
<hr>
<p>当 <code>get</code> 请求完成，接下来来测试一下 <code>post</code> 请求：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// html </span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"onPostClick"</span><span class="token operator">></span>发起 post 请求<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token comment">// js</span>
   <span class="token function">onPostClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-blog.lgdsunday.club/api/test/postData'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'愿大家心想事成，万事如意'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>题外话</strong></p>
<ol>
<li><strong>跨域问题：</strong> 跨域问题主要针对 <strong>浏览器</strong> 而言，而小程序宿主环境为【<strong>微信小程序客户端</strong>】，所以小程序中不存在【跨域问题】</li>
<li><strong><code>ajax</code> 请求：</strong> <code>ajax</code> 依赖于 <code>XMLHttpRequest</code> 对象，而小程序宿主环境为【微信小程序客户端】，所以小程序中的【网络请求】<strong>不是</strong> <code>ajax</code> 请求</li>
</ol>
<p>总结:</p>
<ol>
<li>小程序中的数据请求有什么限制？以及如何解决这种限制
<ol>
<li>限制：
<ol>
<li>只能请求 <code>HTTPS</code> 类型的接口</li>
<li>必须将接口的域名添加到信任列表中</li>
</ol>
</li>
<li>解决方案：
<ol>
<li>生产环境：将想要请求的域名协议【更改为 HTTPS】并【添加到域名信任列表】</li>
<li>开发环境：通过勾选</li>
</ol>
</li>
</ol>
</li>
<li>小程序的数据请求会存在跨域问题吗？为什么？
<ol>
<li>不会</li>
</ol>
</li>
<li>【跨域问题】只存在于基于浏览器的 <code>Web</code> 开发中</li>
<li>由于小程序的宿主环境不是浏览器，而是微信客户端</li>
<li>所以小程序中不存在跨域问题</li>
<li>小程序的数据请求可以叫做 <code>ajax</code> 请求吗？为什么？
<ol>
<li>不可以</li>
<li><code>ajax</code> 的核心是依赖于 【浏览器端】 的 <code>XMLHttpRequest</code> 对象</li>
<li>由于小程序的宿主环境不是浏览器，而是微信客户端</li>
<li>所以小程序的数据请求不可以叫做 <code>ajax</code> 请求</li>
</ol>
</li>
</ol>
<h2 id="小程序中使用-promise-解决异步编程" tabindex="-1"><a class="header-anchor" href="#小程序中使用-promise-解决异步编程" aria-hidden="true">#</a> 小程序中使用 promise 解决异步编程</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如何使 <code>wx.request</code> 配合 <code>async</code> 和 <code>await</code> 使用？</p>
</div>
<p>目前有一个需求，需要你按照以下的逻辑去进行接口请求：</p>
<ol>
<li>先去请求接口 A</li>
<li>在接口 A 获取到数据之后，再去请求接口 B</li>
<li>在接口 B 获取到数据之后，再去请求接口 C</li>
<li>在接口 C 获取到数据之后，再去请求接口 D</li>
</ol>
<p>因为 <code>wx.request</code> 不支持 <code>promise</code> 化，所以我们需要：<strong>使用 <code>promise</code> 封装 <code>wx.request</code> 请求</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">pA</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行 A 接口的逻辑'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://xxx'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>使用 <code>async</code> 和 <code>await</code> 简化 <code>promise</code> 的操作（PS：注意不要勾选 ES6 转 ES5）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onPromiseGetClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resA <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resB <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resC <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resC<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> resD <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pD</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resD<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>总结:</strong></p>
<ul>
<li>如何使 <code>wx.request</code> 配合 <code>async</code> 和 <code>await</code> 使用？</li>
</ul>
<ol>
<li>使用 <code>promise</code> 封装 <code>wx.request</code> 请求</li>
<li>使用 <code>async</code> 和 <code>await</code> 简化 <code>promise</code> 的操作</li>
</ol>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>什么是生命周期？什么是生命周期函数？</li>
<li><code>onReady</code>  的调用时机是什么？</li>
</ol>
</div>
<p><strong>什么是生命周期：</strong></p>
<p>所谓 <strong>生命周期</strong> 就是：一件事物由 <strong>创建</strong> 到 <strong>销毁</strong> 的全过程。</p>
<p>在这个过程中会有很多 <strong>” 关键的时刻 “</strong>，这些关键的时刻就是 <strong>生命周期函数</strong></p>
<hr>
<p>在 【小程序】中，生命周期主要分为两部分：</p>
<ol>
<li><strong>页面的生命周期</strong> (现在总结)</li>
<li><strong>组件的生命周期</strong>（后面再总结一下）</li>
</ol>
<p>创建新的页面 <code>list</code>，在新创建的页面中，可以发现在 <code>js</code> 文件中已经默认生成了很多的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/list/list.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token operator">...</span>
    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面加载
     */</span>
    <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onLoad'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面初次渲染完成
     */</span>
    <span class="token function-variable function">onReady</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onReady'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面显示
     */</span>
    <span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onShow'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面隐藏
     */</span>
    <span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onHide'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面卸载
     */</span>
    <span class="token function-variable function">onUnload</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onUnload'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><strong>这些生命周期函数不需要全部掌握</strong>，先需要着重掌握其中两个就可以：</p>
<ol>
<li><code>onLoad</code>：最先被调用，可以用来【接收别的页面传递过来的数据】。在后面的【页面跳转】中会再去进行具体总结</li>
<li><code>onReady</code>：页面初次渲染完成后调用。可以 <strong>在这里从服务端获取数据</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// html</span>
<span class="token operator">&lt;</span>scroll<span class="token operator">-</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"list-box"</span> scroll<span class="token operator">-</span>y<span class="token operator">></span>
    <span class="token operator">&lt;</span>block wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ listData }}"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"list-item"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">--</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>block<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>scroll<span class="token operator">-</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
    <span class="token doc-comment comment">/**
     * 生命周期函数--监听页面初次渲染完成
     */</span>
    <span class="token function-variable function">onReady</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onReady'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">listData</span><span class="token operator">:</span> data<span class="token punctuation">.</span>list
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-blog.lgdsunday.club/api/test/getList'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token comment">// css</span>
<span class="token punctuation">.</span>list<span class="token operator">-</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 26px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
    border<span class="token operator">-</span>bottom<span class="token operator">:</span> 1px solid #cccccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><strong>总结</strong></p>
<ol>
<li>什么是生命周期？什么是生命周期函数？
<ol>
<li>所谓 <strong>生命周期</strong> 就是：一件事物由 <strong>创建</strong> 到 <strong>销毁</strong> 的全过程。</li>
<li>在这个过程中会有很多 <strong>” 关键的时刻 “</strong>，这些关键的时刻就是 <strong>生命周期函数</strong></li>
</ol>
</li>
<li><code>onReady</code>  的调用时机是什么？
<ol>
<li>页面初次渲染完成后调用。可以 <strong>在这里从服务端获取数据</strong></li>
</ol>
</li>
</ol>
<h2 id="pulltorefresh-下拉刷新与上拉加载" tabindex="-1"><a class="header-anchor" href="#pulltorefresh-下拉刷新与上拉加载" aria-hidden="true">#</a> pullToRefresh - 下拉刷新与上拉加载</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>如何开启下拉刷新</li>
<li>在 <code>onPullDownRefresh</code> 中，一般进行什么操作</li>
<li>在 <code>onReachBottom</code> 中，一般进行什么操作</li>
</ol>
</div>
<h3 id="上拉加载-onreachbottom" tabindex="-1"><a class="header-anchor" href="#上拉加载-onreachbottom" aria-hidden="true">#</a> 上拉加载 onReachBottom</h3>
<p>在 【小程序】中，默认已经实现了【上拉加载】的功能，可以直接通过监听 <code>onReachBottom</code> 函数，来监听：<strong>页面上拉触底事件</strong>。当页面滑动到底部时，会触发 <code>onReachBottom</code> 函数</p>
<p>先定义一下数据:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
     * 页面的初始数据
     */</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前页数</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 每页的数据量</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token comment">// 数据总数</span>
        <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>然后【当页面进入时】，获取第一页的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 获取数据方法</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://xxxxxx'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
                <span class="token comment">// 请求当前页的数据</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>page<span class="token punctuation">,</span>
                    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>size
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onReady</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 页面第一次加载</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">listData</span><span class="token operator">:</span> data<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
        <span class="token literal-property property">total</span><span class="token operator">:</span> data<span class="token punctuation">.</span>total
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>然后在【<strong>上拉操作</strong>】时，持续进行后续的数据请求：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token doc-comment comment">/**
     * 页面上拉触底事件的处理函数
     */</span>
    <span class="token function-variable function">onReachBottom</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'到达了底部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 修改 page</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>page <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 获取最新数据</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 将最新的数据补充到现有数据的后面</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>listData<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">total</span><span class="token operator">:</span> data<span class="token punctuation">.</span>total
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>同时希望 <strong>数据加载完成后，给用户一个提示，同时不在发起数据请求</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">onReachBottom</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onReachBottom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果当前数据量已经 === 总数据量，则表示数据已经加载完成了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>listData<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="下拉刷新-onpulldownrefresh" tabindex="-1"><a class="header-anchor" href="#下拉刷新-onpulldownrefresh" aria-hidden="true">#</a> 下拉刷新 onPullDownRefresh</h3>
<p>想要在【小程序】中实现【下拉刷新】不同于上拉加载，需要<strong>首先开启</strong>下拉刷新</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// 页面.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#cccccc"</span><span class="token punctuation">,</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当开启了【下拉刷新】之后，我们就可以去监听 <code>onPullDownRefresh</code> 函数，这个函数会在：<strong>用户下拉刷新时进行回调</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token doc-comment comment">/**
     * 页面相关事件处理函数--监听用户下拉动作
     */</span>
    <span class="token function-variable function">onPullDownRefresh</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onPullDownRefresh'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在此回调中，需要进行的操作就非常简单了，只需要：<strong>重置页数，重置数据源，关闭下拉动画</strong> 就可以了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
     * 页面相关事件处理函数--监听用户下拉动作
     */</span>
    <span class="token function-variable function">onPullDownRefresh</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onPullDownRefresh'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 重置页数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
         <span class="token comment">// 获取最新数据</span>
         <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token comment">// 将最新的数据补充到现有数据的后面</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
             <span class="token literal-property property">listData</span><span class="token operator">:</span> data<span class="token punctuation">.</span>list
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//  关闭下拉刷新的动作（在真机中，下拉刷新动作不会自动关闭）</span>
        wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>总结:</strong></p>
<ol>
<li>如何开启下拉刷新
<ol>
<li>对 <strong>页面对应的 <code>json</code> 文件</strong> 中通过 <code>&quot;enablePullDownRefresh&quot;: true</code> 开启</li>
</ol>
</li>
<li>在 <code>onPullDownRefresh</code> 中，一般进行什么操作
<ol>
<li>重置页数</li>
<li>重置数据源</li>
<li>关闭下拉动画 <code>wx.stopPullDownRefresh()</code></li>
</ol>
</li>
<li>在 <code>onReachBottom</code> 中，一般进行什么操作
<ol>
<li>判断数据是否已经加载完成</li>
<li>自增页数</li>
<li>累加数据</li>
</ol>
</li>
</ol>
<h2 id="页面跳转" tabindex="-1"><a class="header-anchor" href="#页面跳转" aria-hidden="true">#</a> 页面跳转</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>页面跳转的方式有哪几种？</li>
<li>跳转到 <code>【tabbar】</code>页面和<code>【非 tabbar】</code>页面的方式分别是什么？</li>
<li>如何进行导航传参</li>
</ol>
</div>
<p>小程序的页面跳转分为两种方式：</p>
<ol>
<li>声明式导航
<ol>
<li>跳转到 <code>tabbar</code> 页面</li>
<li>跳转到 <code>非tabbar</code> 页面</li>
<li>后退页面</li>
</ol>
</li>
<li>编程式导航
<ol>
<li>跳转到 <code>tabbar</code> 页面</li>
<li>跳转到 <code>非tabbar</code> 页面</li>
<li>后退页面</li>
</ol>
</li>
</ol>
<h3 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h3>
<p>【小程序】中提供了一个：<strong>跳转页面的组件 <code>navigator</code></strong> ，使用这个组件可以完成【声明式导航】</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 跳转到 非 tabbar 页面 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ listData }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 注意：url 的表达式必须为 / 开头的页面路径 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/detail/detail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ index }} -- {{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">></span></span>

----

<span class="token comment">&lt;!-- 跳转到 tabbar 页面 --></span>
<span class="token comment">&lt;!-- 注意：跳转到 tabbar 页面，必须要指定 open-type="switchTab"--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switchTab<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/index/index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>

-----

<span class="token comment">&lt;!-- 后退页面 --></span>
<span class="token comment">&lt;!-- 注意：后退页面必须指定 open-type="navigateBack" --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigateBack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>后退<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h3>
<p>【小程序】中提供了三个 <code>API</code> ，用来帮助我们进行 <strong>编程式导航</strong>：</p>
<ol>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html" target="_blank" rel="noopener noreferrer">wx.switchTab<ExternalLinkIcon/></a>：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 编程式导航跳转到首页 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> <span class="token literal-property property">bind</span><span class="token operator">:</span>tap<span class="token operator">=</span><span class="token string">"onSwitchToHome"</span><span class="token operator">></span>利用 switchTab 跳转到首页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token function">onSwitchToHome</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html" target="_blank" rel="noopener noreferrer">wx.navigateTo<ExternalLinkIcon/></a>：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 编程式导航跳转到详情页面 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"onNavigateToDetail"</span><span class="token operator">></span>利用 navigateTo 进入详情页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token function">onNavigateToDetail</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/detail/detail'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html" target="_blank" rel="noopener noreferrer">wx.navigateBack<ExternalLinkIcon/></a>：关闭当前页面，返回上一页面或多级页面。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 编程式导航后退页面 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"onNavigateBack"</span><span class="token operator">></span>利用 navigateBack 后退页面<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token function">onNavigateBack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="导航传参" tabindex="-1"><a class="header-anchor" href="#导航传参" aria-hidden="true">#</a> 导航传参</h3>
<p>【小程序】的导航传参遵循：<strong><code>get</code> 请求的标准</strong> 。</p>
<blockquote>
<ol>
<li>以 <code>?</code> 分割 <code>url</code> 和参数</li>
<li>以 <code>=</code> 连接参数的 <code>key</code> 和 <code>value</code></li>
<li>以 <code>&amp;</code> 来拼接参数</li>
</ol>
</blockquote>
<p><strong>点击跳转时，传递当前 <code>item</code> 的索引和标题，并且在 <code>detail</code> 页面中展示</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明式导航传递参数</span>
<span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/detail/detail?index={{index}}&amp;title={{item.title}}"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">--</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
<span class="token comment">// 编程式导航传递参数</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"onNavigateToDetail"</span> data<span class="token operator">-</span>index<span class="token operator">=</span><span class="token string">"{{index}}"</span> data<span class="token operator">-</span>title<span class="token operator">=</span><span class="token string">"{{item.title}}"</span><span class="token operator">></span>
  利用 navigateTo 进入详情页
<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token function">onNavigateToDetail</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> index<span class="token punctuation">,</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset
    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pages/detail/detail?index=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;title=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在 detail 中接收数据，并展示</span>
<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"msg"</span><span class="token operator">></span>index：<span class="token punctuation">{</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">--</span> title：<span class="token punctuation">{</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>index<span class="token punctuation">,</span> title<span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        index<span class="token punctuation">,</span>
        title
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>总结:</p>
<ol>
<li>页面跳转的方式有哪几种？
<ol>
<li>声明式导航</li>
<li>编程式导航</li>
</ol>
</li>
<li>跳转到 【tabbar】页面和【非 tabbar】页面的方式分别是什么？
<ol>
<li>声明式导航
<ol>
<li><code>&lt;navigator open-type=&quot;switchTab&quot; url=&quot;xx&quot; /&gt;</code></li>
<li><code>&lt;navigator open-type=&quot;navigate&quot;(默认可不指定) url=&quot;xx&quot; /&gt;</code></li>
</ol>
</li>
<li>编程式导航
<ol>
<li><code>wx.switchTab({ url: 'xx'})</code></li>
<li><code>wx.navigateTo({ url: 'xx'})</code></li>
</ol>
</li>
</ol>
</li>
<li>如何进行导航传参
<ol>
<li>【小程序】的导航传参遵循：<strong><code>get</code> 请求的标准</strong> 。
<ol>
<li>以 <code>?</code> 分割 <code>url</code> 和参数</li>
<li>以 <code>=</code> 连接参数的 <code>key</code> 和 <code>value</code></li>
<li>以 <code>&amp;</code> 来拼接参数</li>
</ol>
</li>
</ol>
</li>
</ol>
</template>
