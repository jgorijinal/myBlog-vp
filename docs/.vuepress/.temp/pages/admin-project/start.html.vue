<template><h1 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h1>
<p>介绍: 使用<code>Vue3</code>开发的前端脚手架，使用技术包括<code>Vue3</code>、<code>typescript</code>、<code>tailwindcss</code>、<code>elementPlus</code>、<code>axios</code>、<code>mockJs</code>、<code>vite</code></p>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> 项目名
<span class="token builtin class-name">cd</span> 项目名
<span class="token function">yarn</span> create vite
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="初始的路由配置" tabindex="-1"><a class="header-anchor" href="#初始的路由配置" aria-hidden="true">#</a> 初始的路由配置</h2>
<p>即将要用<strong>布局路由的自动注册</strong>方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/layouts   布局路由(要加上&lt;router-view>)
|--admin.vue
|--member.vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/views
admin
|--user.vue
member
|--mail.vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>注意</strong>: 布局路由一定要写上<code>&lt;router-view&gt;</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/router
|--autoload.ts
|--guard.ts    //路由守卫
|--index.ts     
|--routes.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>src/router/routes.ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>RouteRecordRaw<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../layouts/Admin.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>src/router/index.ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createRouter<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>App<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">'./routes'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> layoutRoutes <span class="token keyword">from</span> <span class="token string">'./autoload'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>routes <span class="token punctuation">,</span> <span class="token operator">...</span>layoutRoutes
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>layoutRoutes<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setupRouter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>src/router/autoload.ts</p>
<p>使用<code>import.meta.globEager(pattern)</code>api , 获取vue文件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>RouteRecordRaw<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token comment">//import.meta.globEager(pattern)</span>
<span class="token keyword">const</span> routesModules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">'../layouts/*.vue'</span><span class="token punctuation">)</span>   <span class="token comment">//布局路由</span>
<span class="token keyword">const</span> viewsModules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">'../views/**/*.vue'</span><span class="token punctuation">)</span>   <span class="token comment">// 布局路由对应的子路由</span>
<span class="token comment">//https://cn.vitejs.dev/guide/features.html#glob-import 看vite文档</span>
<span class="token comment">//import.meta.globEager(pattern)</span>
<span class="token comment">//返回的格式为, 例如</span>
<span class="token comment">// {</span>
<span class="token comment">//   './dir/foo.js': () => import('./dir/foo.js'),</span>
<span class="token comment">//   './dir/bar.js': () => import('./dir/bar.js')</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span>  getRoutes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> layoutRoutes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>
  Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>routesModules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>file <span class="token punctuation">,</span> module<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">getRouteByModule</span><span class="token punctuation">(</span>file <span class="token punctuation">,</span> module<span class="token punctuation">)</span>
    route<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">getChildRouteByModules</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    layoutRoutes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> layoutRoutes
<span class="token punctuation">}</span>


<span class="token comment">// ../views/admin/validate.vue</span>
<span class="token keyword">const</span> <span class="token function-variable function">getChildRouteByModules</span> <span class="token operator">=</span> <span class="token punctuation">(</span>layoutRoute<span class="token operator">:</span>RouteRecordRaw<span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>
  Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>viewsModules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>file <span class="token punctuation">,</span> module<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">../views/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>layoutRoute<span class="token punctuation">.</span>name  <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">// 细品</span>
      <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">getRouteByModule</span><span class="token punctuation">(</span>file <span class="token punctuation">,</span> module<span class="token punctuation">)</span>
      routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> routes
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">getRouteByModule</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">,</span> module<span class="token operator">:</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+layouts\/|.+views\/|\.vue</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>      <span class="token comment">// 细品 </span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> module<span class="token punctuation">.</span>default
  <span class="token punctuation">}</span> <span class="token keyword">as</span> RouteRecordRaw
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>src/main.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'@/App.vue'</span>
<span class="token keyword">import</span> router <span class="token punctuation">,</span> <span class="token punctuation">{</span> setupRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router'</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token function">setupRouter</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>     <span class="token comment">//路由</span>
  <span class="token comment">//setupPlugins(app)  //插件</span>
  <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">isReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
