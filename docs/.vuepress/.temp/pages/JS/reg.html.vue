<template><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<p>正则表达式是用于匹配字符串中字符组合的模式，在 JavaScript中，正则表达式也是对象。</p>
<h3 id="对比分析" tabindex="-1"><a class="header-anchor" href="#对比分析" aria-hidden="true">#</a> 对比分析</h3>
<p>举个例子 , <code>let a = &quot;cuizhixian2200hello9988&quot;;</code>在变量a中获取全部数字 , 下面比较函数与正则的差异</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'cuizhixian2200hello9988'</span>
<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>用正则表达式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'cuizhixian2200hello9988'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="创建正则" tabindex="-1"><a class="header-anchor" href="#创建正则" aria-hidden="true">#</a> 创建正则</h3>
<h4 id="字面量创建" tabindex="-1"><a class="header-anchor" href="#字面量创建" aria-hidden="true">#</a> 字面量创建</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'cuizhixian2200hello9988'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">c</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="对象创建" tabindex="-1"><a class="header-anchor" href="#对象创建" aria-hidden="true">#</a> 对象创建</h4>
<p>最基本使用:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'cuizhixian2200hello9988'</span>

<span class="token keyword">let</span>  a <span class="token operator">=</span> <span class="token string">'c'</span>
<span class="token keyword">let</span>  reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> reg<span class="token punctuation">)</span>  <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="选择符" tabindex="-1"><a class="header-anchor" href="#选择符" aria-hidden="true">#</a> 选择符 |</h3>
<p><code>| </code>这个符号带表选择修释符，也就是<code>|</code>左右两侧有一个匹配到就可以。
注意: 检测的是<code>|</code>的两侧的整体, 而不是一个字符。比如 <code>12|34 </code>, 不是<code>2或3</code> , 而是<code>12或者34</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">'010-55665565'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">010\-\d{7,8}|020\-\d{7,8}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//true</span>
<span class="token comment">//或更简洁点 用()放在原子组里面使用, 如下</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(010|020)\-\d{7,8}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>   <span class="token comment">//true </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="字符转义" tabindex="-1"><a class="header-anchor" href="#字符转义" aria-hidden="true">#</a> 字符转义 \</h3>
<p>转义用于改变字符的含义，用来对某个字符有多种语义时的处理,使用<code>\</code>转义。</p>
<p>想通过正则查找/符号，但是 <code>/</code>在正则中有特殊的意义。如果写成<code>///</code>这会造成解析错误，所以要使用转义语法<code> /\//</code>来匹配。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'https://www.baidu.com'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https:\/\/\w+\.\w+\.+\w+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="字符边界约束" tabindex="-1"><a class="header-anchor" href="#字符边界约束" aria-hidden="true">#</a> 字符边界约束 ^ $</h3>
<table>
<thead>
<tr>
<th>边界符</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>^</td>
<td style="text-align:center">匹配字符串的开始</td>
</tr>
<tr>
<td>$</td>
<td style="text-align:center">匹配字符串的结束，忽略换行符</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'abc'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>简单的表单验证</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"[name='user']"</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>  e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z|\d]{3,6}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'成功'</span> <span class="token operator">:</span><span class="token string">'失败'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="元子字符-d-w-s" tabindex="-1"><a class="header-anchor" href="#元子字符-d-w-s" aria-hidden="true">#</a> 元子字符 \d \w \s .</h2>
<p>元字符是正则表达式中的最小元素，只代表单一（一个）字符</p>
<h3 id="字符列表" tabindex="-1"><a class="header-anchor" href="#字符列表" aria-hidden="true">#</a> 字符列表</h3>
<table>
<thead>
<tr>
<th>元字符</th>
<th style="text-align:center">解释</th>
<th style="text-align:right">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td>\d</td>
<td style="text-align:center">一个数字</td>
<td style="text-align:right">[0-9]</td>
</tr>
<tr>
<td>\D</td>
<td style="text-align:center">除了数字</td>
<td style="text-align:right"></td>
</tr>
<tr>
<td>\w</td>
<td style="text-align:center">一个英文字母,数字或下划线</td>
<td style="text-align:right"></td>
</tr>
<tr>
<td>\W</td>
<td style="text-align:center">除了英文字母,数字或下划线</td>
<td style="text-align:right"></td>
</tr>
<tr>
<td>\s</td>
<td style="text-align:center">任意一个空白字符匹配，如空格，制表符<code>\t</code>，换行符<code>\n</code></td>
<td style="text-align:right"></td>
</tr>
<tr>
<td>\S</td>
<td style="text-align:center">除了空白符外任意一个字符匹配</td>
<td style="text-align:right"></td>
</tr>
<tr>
<td>.</td>
<td style="text-align:center">匹配除换行符以外的任意字符</td>
<td style="text-align:right"></td>
</tr>
</tbody>
</table>
<p>(1)//匹配数字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'cuizhixian 1999'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// ['1', index: 11, input: 'cuizhixian 1999', groups: undefined]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">//['1999']</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">//['1','9','9','9']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>(2)匹配所有电话号码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    张三:010-88888888,
    李四:020-99999999
</span><span class="token template-punctuation string">`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d{3}-\d{7,8}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//  ['010-88888888', '020-99999999']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>(3)获取所有用户名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    张三:010-88888888,
    李四:020-99999999
</span><span class="token template-punctuation string">`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">[</span><span class="token operator">^</span>\d<span class="token operator">:</span>\<span class="token operator">-</span>\s<span class="token punctuation">,</span><span class="token punctuation">]</span> <span class="token comment">// ['张三', '李四']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>(4) 匹配邮箱</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> email <span class="token operator">=</span> <span class="token string">'18844332822@163.com'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w+@\w+\.\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//注意要有 ^ 和 $</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>(5)限制用户名 5-10位,以字母开头</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户名'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]\w{4,9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//注意要有 ^ 和 $</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>(6)点元字符: 匹配<strong>换行符</strong>以外的任意字符 , 当然包含<strong>空格</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  https://www.baidu.com
  www.google.com
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//匹配不到 www.google.com , 只匹配到 https://www.baidu.com, 因为有换行符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用<code>/s</code>视为单行模式（忽略换行）时，. 可以匹配所有</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">s</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="所有字符" tabindex="-1"><a class="header-anchor" href="#所有字符" aria-hidden="true">#</a> 所有字符</h3>
<p>可以使用 <code>[\s\S]</code> 或 <code>[\d\D]</code> 来匹配所有字符</p>
<h2 id="模式修饰-igmsyu" tabindex="-1"><a class="header-anchor" href="#模式修饰-igmsyu" aria-hidden="true">#</a> 模式修饰  //igmsyu</h2>
<table>
<thead>
<tr>
<th>修饰符</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>i</td>
<td style="text-align:center">不区分大小写字母的匹配</td>
</tr>
<tr>
<td>g</td>
<td style="text-align:center">全局搜索所有匹配内容</td>
</tr>
<tr>
<td>m</td>
<td style="text-align:center">视为多行</td>
</tr>
<tr>
<td>s</td>
<td style="text-align:center">视为单行忽略换行符，使用<code>.</code> 可以匹配所有字符</td>
</tr>
<tr>
<td>y</td>
<td style="text-align:center">从 <code>regexp.lastIndex</code> 开始匹配</td>
</tr>
<tr>
<td>u</td>
<td style="text-align:center">正确处理四个字符的 UTF-16 编码</td>
</tr>
</tbody>
</table>
<h3 id="i" tabindex="-1"><a class="header-anchor" href="#i" aria-hidden="true">#</a> i</h3>
<p>匹配的时候不区分大小写</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'BaIDu.COM'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">o</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">o</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//匹配到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="g" tabindex="-1"><a class="header-anchor" href="#g" aria-hidden="true">#</a> g</h3>
<p>使用 <code>g</code>修饰符可以全局操作内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'aaaaaaa'</span>
str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>  <span class="token comment">// 'xaaaaa'</span>

str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span> <span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">)</span>   <span class="token comment">//全部替换</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>  <span class="token comment">// 'xxxxxxx'   </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="m" tabindex="-1"><a class="header-anchor" href="#m" aria-hidden="true">#</a> m</h3>
<p>用于将内容视为多行匹配，主要是对 <code>^</code> 和 <code>$</code> 的修饰</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  #1 js,200元 #
  #2 vue,300元 #
  #9 baidu.com # 后盾人
  #3 react,180元 #
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token comment">// [{name:'js',price:'200元'}]</span>
<span class="token keyword">let</span> lessons <span class="token operator">=</span> hd<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\s*#\d+\s+.+\s+#$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  v <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\s*#\d+\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\s+#</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>name<span class="token punctuation">,</span> price<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> price <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>lessons<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="u" tabindex="-1"><a class="header-anchor" href="#u" aria-hidden="true">#</a> u</h3>
<p>每个字符都有属性，如<code>L</code>属性表示是字母，<code>P</code> 表示标点符号，需要结合<code> u</code> 模式才有效。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//使用 \p{L} 属性匹配字母</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"cuizhixian2010.每天不断进步，加油"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\p{L}+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">u</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//使用 \p{P} 属性匹配标点</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\p{P}+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>字符也有<code>unicode</code>文字系统属性 <code>Script=</code>文字系统，使用 <code>\p{sc=Han}</code> 获取中文字符 <code>han</code>为中文系统，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
张三:010-99999999,李四:020-88888888</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\p{sc=Han}+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="lastindex" tabindex="-1"><a class="header-anchor" href="#lastindex" aria-hidden="true">#</a> lastIndex</h3>
<p>RegExp对象 <code>lastIndex</code> 属性可以返回或者设置正则表达式开始匹配的位置</p>
<ul>
<li>必须结合 <code>g</code> 修饰符使用</li>
<li>对 <code>exec</code> 方法有效</li>
<li>匹配完成时，<code>lastIndex</code> 会被重置为<code>0</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">智贤每天不断在进步，智贤每天都非常努力</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">智贤(.{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
reg<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>        <span class="token comment">//从索引10后开始搜索</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//智贤每天 , 每天</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 14</span>

reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\p{sc=Han}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="y" tabindex="-1"><a class="header-anchor" href="#y" aria-hidden="true">#</a> y</h3>
<h2 id="原子表" tabindex="-1"><a class="header-anchor" href="#原子表" aria-hidden="true">#</a> 原子表 [ ]</h2>
<p>一组字符中匹配某个元字符, 放到方括号<code>[]</code>中 ,
原子表中只代表一个字母</p>
<table>
<thead>
<tr>
<th>原子表</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>[]</td>
<td style="text-align:center">只匹配其中的一个原子</td>
</tr>
<tr>
<td>[0-9]</td>
<td style="text-align:center">匹配0-9任何一个数字</td>
</tr>
<tr>
<td>[a-z]</td>
<td style="text-align:center">匹配小写a-z任何一个字母</td>
</tr>
<tr>
<td>[A-Z]</td>
<td style="text-align:center">匹配大写A-Z任何一个字母</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>的是 , 在原子表[ ]中<code>.</code>就是小数点
(1)匹配2022-10-03 或 2022/10-03 这两种格式的日期</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'2022-10-03  , 2022/10/03'</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d{4}[-\/]\d{2}[-\/]\d{2}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// ['2022-10-03', '2022/10/03']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="区间匹配" tabindex="-1"><a class="header-anchor" href="#区间匹配" aria-hidden="true">#</a> 区间匹配 [ ]</h3>
<p>(1)表单验证:用户名以字母为开头 , 4到7位</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name="user"]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token keyword">let</span> flag <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]+\w{3,6}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
   <span class="token keyword">let</span>  span <span class="token operator">=</span>  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span>
   span<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> flag <span class="token operator">?</span> <span class="token string">'成功'</span> <span class="token operator">:</span> <span class="token string">'失败'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="排除匹配" tabindex="-1"><a class="header-anchor" href="#排除匹配" aria-hidden="true">#</a> 排除匹配 [^ ]</h3>
<p>(1)只匹配中文</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">张三:010-5665155 , 李四:020-1223115</span><span class="token template-punctuation string">`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^\d:\s\-,]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="匹配所有内容-s-s-d-d-w-w" tabindex="-1"><a class="header-anchor" href="#匹配所有内容-s-s-d-d-w-w" aria-hidden="true">#</a> 匹配所有内容 [\s\S] [\d\D] [\w\W]</h3>
<p>(1)匹配所有内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">张三:010-5665155 , 李四:020-1223115</span><span class="token template-punctuation string">`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\d\D]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\s\S]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\w\W]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>(2) DOM元素去掉h1~6标签</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Frank<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>baidu.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span>  body <span class="token operator">=</span> document<span class="token punctuation">.</span>body
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;h[1-6]>[\s\S]*&lt;\/h[1-6]></span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>   
<span class="token comment">//使用原子组 , 还可以写出</span>
 <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(h[1-6])>[\s\S]*&lt;\/\1></span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>   
body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg <span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="原子组" tabindex="-1"><a class="header-anchor" href="#原子组" aria-hidden="true">#</a> 原子组 ( )</h2>
<ul>
<li>如果一次要匹配多个元子，可以通过元子组完成</li>
<li>元字符组用 () 包裹</li>
</ul>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<table>
<thead>
<tr>
<th>原子组</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td style="text-align:center">匹配到的内容</td>
</tr>
<tr>
<td>1,2,3,...</td>
<td style="text-align:center">匹配到的原子组</td>
</tr>
<tr>
<td>index</td>
<td style="text-align:center">原字符串中的位置</td>
</tr>
<tr>
<td>input</td>
<td style="text-align:center">原字符串</td>
</tr>
<tr>
<td>group</td>
<td style="text-align:center">命名分组</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'frank123456'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">an</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/group.png" alt="图片"></p>
<h3 id="嵌套分组和不记录分组" tabindex="-1"><a class="header-anchor" href="#嵌套分组和不记录分组" aria-hidden="true">#</a> 嵌套分组和不记录分组 (()) (?: )</h3>
<p>(1)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'https://www.baidu.com'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https:\/\/\w+\.\w+\.(com|org|cn|cc)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/group1.png" alt="图片"></p>
<p>(2)要把 www.baidu.com 这种格式单独弄出来, 用<code>()</code>包起来 ,
注意要从左到右 , 从外到里数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'https://www.baidu.com'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https:\/\/(\w+\.\w+\.(com|org|cn|cc))</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/group2.png" alt="图片"></p>
<p>(3) 不希望.com 这种格式返回到结果 , 使用 <code>(?:)</code>处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'https://www.baidu.com'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https:\/\/(\w+\.\w+\.(?:com|org|cn|cc))</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/.vuepress/public/images/group3.png" alt="图片"></p>
<p>(4) 再优化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
   https://www.baidu.com
   http://google.com
</span><span class="token template-punctuation string">`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https?:\/\/((?:\w+\.)?\w+\.(?:com|org|cn|cc))</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 字符串 s 可有可无 , 用 ? 处理 ,  www. 可有可无 同理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="邮箱匹配" tabindex="-1"><a class="header-anchor" href="#邮箱匹配" aria-hidden="true">#</a> 邮箱匹配</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> mail <span class="token operator">=</span> <span class="token string">'sad935151551@sina.com.cn'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\w-]+@([\w-]+\.)+(com|org|cc|cn|net)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//满满都是细节</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="重复匹配" tabindex="-1"><a class="header-anchor" href="#重复匹配" aria-hidden="true">#</a> 重复匹配</h2>
<table>
<thead>
<tr>
<th>符号</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>*</td>
<td style="text-align:center">0个或更多个</td>
</tr>
<tr>
<td>+</td>
<td style="text-align:center">1个或更多个</td>
</tr>
<tr>
<td>?</td>
<td style="text-align:center">0个或一个</td>
</tr>
<tr>
<td>{n}</td>
<td style="text-align:center">重复n遍</td>
</tr>
<tr>
<td>{n,}</td>
<td style="text-align:center">重复n遍或更多次</td>
</tr>
<tr>
<td>{n,m}</td>
<td style="text-align:center">重复n到m次</td>
</tr>
</tbody>
</table>
<h3 id="电话号码" tabindex="-1"><a class="header-anchor" href="#电话号码" aria-hidden="true">#</a> 电话号码</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span>  tel <span class="token operator">=</span> <span class="token string">'010-20415122'</span>
telReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^0\d{1,2}-\d{7,8}</span><span class="token regex-delimiter">/</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>telReg<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="用户名验证" tabindex="-1"><a class="header-anchor" href="#用户名验证" aria-hidden="true">#</a> 用户名验证</h3>
<ul>
<li>(首字母必须是小写字母 , 数字字符串下划线,中划线 , 4-8位)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>userName <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z][\w-]{3-7}$</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> 密码</h3>
<ul>
<li>5-10位 , 必须要有个大写字母 , 必须要有数字</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z0-9]{5-10}$</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">,</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">,</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[0-9]</span><span class="token regex-delimiter">/</span></span>
    <span class="token punctuation">]</span>
    <span class="token keyword">let</span> state <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>   
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state <span class="token operator">?</span> <span class="token string">'正确'</span> <span class="token operator">:</span> <span class="token string">'失败'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h2>
<h3 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h3>
<h2 id="正则方法" tabindex="-1"><a class="header-anchor" href="#正则方法" aria-hidden="true">#</a> 正则方法</h2>
<h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h3>
<p>返回 <code>true</code> 或 <code>false</code></p>
<p>正则.test(变量)</p>
<h3 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> exec</h3>
<p>不使用 <code>g</code> 修饰符时与 <code>match</code> 方法使用相似，使用 <code>g</code> 修饰符后可以循环调用直到全部匹配完。</p>
<ul>
<li>使用 <code>g</code> 修饰符多次操作时使用同一个正则，即把正则定义为变量使用</li>
<li>使用 <code>g</code>修饰符最后匹配不到时返回 <code>null</code>
计算内容中后盾人出现的次数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".content"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">xxx</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">后盾人共出现</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
