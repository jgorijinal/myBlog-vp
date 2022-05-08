<template><h1 id="axios结合typescript" tabindex="-1"><a class="header-anchor" href="#axios结合typescript" aria-hidden="true">#</a> Axios结合Typescript</h1>
<p><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios文档<ExternalLinkIcon/></a>
<a href="https://axios-http.com/zh/docs/instance" target="_blank" rel="noopener noreferrer">中文文档<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="封装axios请求" tabindex="-1"><a class="header-anchor" href="#封装axios请求" aria-hidden="true">#</a> 封装axios请求</h2>
<p>mock/user.ts  模拟的后台数据</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>MockMethod<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-mock'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'/api/info'</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> query <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>       <span class="token comment">// axios的response.data返回的格式</span>
        code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span><span class="token string">'请求成功'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span><span class="token string">'success'</span><span class="token punctuation">,</span>
        result<span class="token operator">:</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
          age<span class="token operator">:</span><span class="token number">18</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span>'<span class="token operator">/</span>api<span class="token operator">/</span>login<span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">'post'</span><span class="token punctuation">,</span>
    response<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">{</span>query<span class="token punctuation">}</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        code<span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span><span class="token string">'登录成功'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span><span class="token string">'success'</span><span class="token punctuation">,</span>
        result<span class="token operator">:</span><span class="token punctuation">{</span>
          token<span class="token operator">:</span>Random<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> MockMethod<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>types/ResponseResult.ts   response.data 的类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ResponseResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>   <span class="token comment">// 请求返回的数据</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span><span class="token string">'success'</span> <span class="token operator">|</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
  result<span class="token operator">:</span> <span class="token constant">T</span>     <span class="token comment">// 返回的类型要定制</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>src/plugins/axios/Axios.ts  axios配置</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span>AxiosRequestConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Axios</span> <span class="token punctuation">{</span>   <span class="token comment">//导出</span>
  <span class="token keyword">private</span> instance<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>config<span class="token operator">:</span>AxiosRequestConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 类型 config : AxiosRequestConfig</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">interceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">D</span><span class="token operator">=</span>ResponseResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span>AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">{</span>   <span class="token comment">// 类型 router/types/ResponseResult.ts</span>
    <span class="token comment">//return  await this.instance.request&lt;D>(config)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>       <span class="token comment">//用Promise优化处理 直接返回 response.data</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">interceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//  下面都是拦截器</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">interceptorRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">interceptorResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">interceptorRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>config <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 在发送请求之前做些什么</span>
      <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>error<span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 对请求错误做些什么</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">interceptorResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>response<span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应数据做点什么</span>
      <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> error <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应错误做点什么</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>瞅一下 , <code>axios实例.request&lt;&gt;(config)</code>的泛型 , 注意看第一个参数<code>T</code>是<code>response.data</code>的类型, 第二个参数是返回的response的类型
<img src="@source/../docs/.vuepress/public/images/request.png" alt="图片">
<code>T</code>是<code>response.data</code>的类型
<img src="@source/../docs/.vuepress/public/images/response.png" alt="图片">
src/plugins/axios/index.ts  创建axios实例, 把实例导出</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Axios <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Axios'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token comment">// 创建axios实例, 下面把实例导出</span>
  baseURL<span class="token operator">:</span><span class="token string">'/api'</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span>  <span class="token punctuation">{</span> http <span class="token punctuation">}</span>  <span class="token comment">//把实例导出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>apis/userApi.ts     关于user的请求api</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../src/plugins/axios/index'</span>

<span class="token keyword">interface</span>  <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
  avatar<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
 <span class="token keyword">async</span> <span class="token keyword">function</span>  <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//获取用户信息</span>
   <span class="token keyword">return</span>  <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'info'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//用户登录操作</span>
  <span class="token comment">// await http.request({</span>
  <span class="token comment">//   url:'login'</span>
  <span class="token comment">// })</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>info <span class="token punctuation">,</span> login<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>举个例子, 在组件里使用api时</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> userApi <span class="token keyword">from</span> <span class="token string">'../apis/userApi'</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> userApi<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
