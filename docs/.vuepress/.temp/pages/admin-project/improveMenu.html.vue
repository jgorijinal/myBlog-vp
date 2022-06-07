<template><h1 id="后台菜单优化" tabindex="-1"><a class="header-anchor" href="#后台菜单优化" aria-hidden="true">#</a> 后台菜单优化</h1>
<h2 id="用户退出登录" tabindex="-1"><a class="header-anchor" href="#用户退出登录" aria-hidden="true">#</a> 用户退出登录</h2>
<ul>
<li>localStorage中的token删掉</li>
<li>pinia 中的 info 删除</li>
</ul>
<h3 id="优化localstorage工具函数" tabindex="-1"><a class="header-anchor" href="#优化localstorage工具函数" aria-hidden="true">#</a> 优化localStorage工具函数</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/utils  工具
|-- env.ts
|-- index.ts   入口文件
|-- store.ts   localStorage工具函数
|-- user.ts    关于用户操作的函数
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>store.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 定义localStorage工具函数</span>
<span class="token comment">// set时, 可以设置过期时间 . get时判断是否到期了,如果到期了就删除,没过期返回数据 (逻辑处理要细品)</span>
<span class="token comment">// 时间上的处理, 善用 new Date().getTime()得到时间戳</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IData</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span><span class="token builtin">any</span>
  expire<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>     <span class="token comment">//过期时间 (s)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span><span class="token builtin">any</span> <span class="token punctuation">,</span> expire<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>    <span class="token comment">// 三个参数: 1.字符串名 2.data数据 3.expire过期时间</span>
    <span class="token keyword">const</span> cache<span class="token operator">:</span>IData <span class="token operator">=</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>expire<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">.</span>expire <span class="token operator">=</span> expire <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cacheStore <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheStore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>cacheStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> expire <span class="token operator">=</span> cache<span class="token operator">?.</span>expire<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>expire <span class="token operator">&amp;&amp;</span> expire <span class="token operator">&lt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span>data <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>其中由于 'token'这个字符串会被重复使用 , 直接配置成<code>enum</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/enum
|-- cacheEnum.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>cacheEnum.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> CacheEnum <span class="token punctuation">{</span>
  <span class="token constant">TOKEN_NAME</span> <span class="token operator">=</span> <span class="token string">'login_token'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>随之把所有用到'token'字符串的地方 , 全部更改成<code>CacheEnum.TOKEN_NAME</code> , 比如路由守卫<code>guard.ts</code></p>
<p><strong>登录</strong>和<strong>用户退出的登录</strong>函数封装</p>
<p>user.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/utils/store'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>CacheEnum<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/enum/cacheEnum'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userApi <span class="token punctuation">,</span> <span class="token punctuation">{</span>ILoginData<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/userApi'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'@/router'</span><span class="token punctuation">;</span>
<span class="token comment">// 这里的router 不是composition api , 所以不能使用const router = useRouter(), 必须导入具体router实例</span>

<span class="token comment">//login 登录</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span>values<span class="token operator">:</span>ILoginData<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>result<span class="token operator">:</span> <span class="token punctuation">{</span>token<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> userApi<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取 token</span>
  store<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>CacheEnum<span class="token punctuation">.</span><span class="token constant">TOKEN_NAME</span><span class="token punctuation">,</span>  token <span class="token punctuation">)</span>
  <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">'home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//logout  删除localStorage里的token</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>CacheEnum<span class="token punctuation">.</span><span class="token constant">TOKEN_NAME</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>                 <span class="token comment">// 跳转到home页</span>
  <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token keyword">null</span>             <span class="token comment">// pinia 的 info 清空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>src/api/userApi.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/plugins/axios'</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span>  <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
  avatar<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
 <span class="token keyword">async</span> <span class="token keyword">function</span>  <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span>  <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'user/info'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">LoginInterface</span> <span class="token punctuation">{</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILoginData</span> <span class="token punctuation">{</span>   <span class="token comment">// 声明类型</span>
  account<span class="token operator">:</span><span class="token builtin">string</span>
  password<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span>data<span class="token operator">:</span>ILoginData<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>LoginInterface<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'login'</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">'post'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>info <span class="token punctuation">,</span> login <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>index.ts 入口文件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>

<span class="token keyword">import</span> env <span class="token keyword">from</span> <span class="token string">'./env'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> user  <span class="token keyword">from</span> <span class="token string">'./user'</span>

<span class="token keyword">export</span>  <span class="token punctuation">{</span> store <span class="token punctuation">,</span> env  <span class="token punctuation">,</span> user<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在其他组件里使用<strong>退出登录</strong>函数</p>
<p><img src="@source/.vuepress/public/images/logout.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import * as utils from './utils'

&lt;div @click="utils.user.logout()">退出登录&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
