<template><h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1>
<p>递归函数 : 函数内部自己调用自己</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 递归函数</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">return</span>  <span class="token comment">// 递归里面必须加退出调价</span>
  num<span class="token operator">++</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>利用递归函数求 1~n的阶乘 1 * 2 * 3 * ... n</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>利用递归函数求斐波那契数列(兔子数列) 1,1,2,3,5,8,13,21 ...</li>
<li>用户输入一个数字就可以求出这个数字对应的兔子数列值 , 比如 3 -&gt; 2</li>
<li>只需要知道用户输入的n前面两个 (n-1,n-2) 就可以计算出 n 对应的数列值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fb</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> n<span class="token operator">===</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token function">fb</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token function">fb</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fb</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>1 ~ n 的数字之和 利用递归</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token function">fn</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="利用递归遍历数据" tabindex="-1"><a class="header-anchor" href="#利用递归遍历数据" aria-hidden="true">#</a> 利用递归遍历数据</h3>
<ol>
<li></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"家电"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">"冰箱"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gname</span><span class="token operator">:</span> <span class="token string">"空调"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"服饰"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输入 id , 返回的对应的数据对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 利用forEach去遍历里面的对象</span>
<span class="token keyword">function</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token parameter">json<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 想要得到里层的数据 11 12 可以利用递归函数</span>
      <span class="token comment">// 里面应该有 goods这个数组并且数组长度不为 0</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>goods<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getById</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods<span class="token punctuation">,</span> id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="@source/.vuepress/public/images/dg1.png" alt="图片"></p>
<ol start="2">
<li>在上面, 只打印元素是没用的, 要返回</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token parameter">json<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  json<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj <span class="token operator">=</span> item
      <span class="token keyword">return</span> item  <span class="token comment">// 这里要 return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>goods<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      obj <span class="token operator">=</span> <span class="token function">getById</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>goods<span class="token punctuation">,</span>id<span class="token punctuation">)</span>  <span class="token comment">// 用上面 return 的值覆盖掉obj</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getById</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝和深拷贝" aria-hidden="true">#</a> 浅拷贝和深拷贝</h2>
<ol>
<li>浅拷贝只是拷贝了 一层, 更深层次对象级别的只开被引用</li>
<li>深拷贝拷贝多层, 每一级别的数据都会拷贝</li>
</ol>
<ul>
<li><strong>浅拷贝</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span>
<span class="token punctuation">}</span> 

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// k  属性名  data[k] 属性值</span>
  obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>或者 使用 ES6 的 <code>Object.assign(target , ...sources</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'frank'</span>
<span class="token punctuation">}</span> 

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// for (let k in data) {值</span>
<span class="token comment">//   obj[k] = data[k]</span>
<span class="token comment">//   // k  属性名  data[k] 属性</span>
<span class="token comment">// }</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li><strong>深拷贝</strong></li>
</ul>
</template>
