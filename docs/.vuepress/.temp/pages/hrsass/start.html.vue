<template><h1 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h1>
<p>本项目的技术栈 本项目技术栈基于 ES2015+、<a href="https://cn.vuejs.org/index.html" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a>、<a href="https://vuex.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vuex<ExternalLinkIcon/></a>、<a href="https://router.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vue-router<ExternalLinkIcon/></a> 、<a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli<ExternalLinkIcon/></a> 、<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios<ExternalLinkIcon/></a> 和 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a></p>
<h4 id="vue-router-v3-x" tabindex="-1"><a class="header-anchor" href="#vue-router-v3-x" aria-hidden="true">#</a> Vue Router v3.x</h4>
<p>router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 需要筛选权限动态添加的路由 route 对象</span>
<span class="token keyword">import</span> approvalsRouter <span class="token keyword">from</span> <span class="token string">'./modules/approvals'</span>
<span class="token keyword">import</span> departmentsRouter <span class="token keyword">from</span> <span class="token string">'./modules/departments'</span>
<span class="token keyword">import</span> employeesRouter <span class="token keyword">from</span> <span class="token string">'./modules/employees'</span>
<span class="token keyword">import</span> permissionRouter <span class="token keyword">from</span> <span class="token string">'./modules/permission'</span>
<span class="token keyword">import</span> attendancesRouter <span class="token keyword">from</span> <span class="token string">'./modules/attendances'</span>
<span class="token keyword">import</span> salarysRouter <span class="token keyword">from</span> <span class="token string">'./modules/salarys'</span>
<span class="token keyword">import</span> settingRouter <span class="token keyword">from</span> <span class="token string">'./modules/setting'</span>
<span class="token keyword">import</span> socialRouter <span class="token keyword">from</span> <span class="token string">'./modules/social'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> constantRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>  <span class="token comment">// 静态路由</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"login"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/login/index"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/404"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"404"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@/views/404"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/404'</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>  <span class="token comment">// 动态路由</span>
  approvalsRouter<span class="token punctuation">,</span>
  departmentsRouter<span class="token punctuation">,</span>
  employeesRouter<span class="token punctuation">,</span>
  permissionRouter<span class="token punctuation">,</span>
  attendancesRouter<span class="token punctuation">,</span>
  salarysRouter<span class="token punctuation">,</span>
  settingRouter<span class="token punctuation">,</span>
  socialRouter
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>constantRoutes<span class="token punctuation">]</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resetRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">const</span> newRouter <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span>matcher <span class="token operator">=</span> newRouter<span class="token punctuation">.</span>matcher <span class="token comment">// reset router</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router   <span class="token comment">// 默认导出 router 实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div></template>
