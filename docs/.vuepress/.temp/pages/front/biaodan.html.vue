<template><h1 id="人类行为验证处理方案-脱离ui组件库实现登录、注册-表单校验" tabindex="-1"><a class="header-anchor" href="#人类行为验证处理方案-脱离ui组件库实现登录、注册-表单校验" aria-hidden="true">#</a> 人类行为验证处理方案 - 脱离UI组件库实现登录、注册+表单校验</h1>
<ol>
<li>在 <code>src/views/layout/components/header/header-my.vue</code> 中新增一个 <strong>登录按钮</strong></li>
</ol>
<p><img src="@source/.vuepress/public/images/dengluanniu1.png" alt="图片"></p>
<ol start="2">
<li>分别构建 <code>PC 端</code> 下和 <code>移动端</code> 下对应的路由：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/login-register/login/index.vue'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3">
<li>创建 <code>src/views/login-register/login/index.vue</code> 组件，为登录组件</li>
<li>构建对应基础样式：</li>
</ol>
<p><img src="@source/.vuepress/public/images/dengluyemian1.png" alt="图片"></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative h-screen bg-white dark:bg-zinc-700 text-center xl:bg-zinc-200<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 头部图标：PC端 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden pt-5 h-8 xl:block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/assets/vue.svg<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-auto w-7 h-7<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 头部图标：移动端 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-[111px] xl:hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
        <span class="token attr-name">v-lazy</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:hidden<span class="token punctuation">"</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://res.lgdsunday.club/login-bg.png<span class="token punctuation">"</span></span>
        <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
        <span class="token attr-name">v-lazy</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-5 absolute top-[5%] left-[50%] translate-x-[-50%]<span class="token punctuation">"</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/assets/vue.svg<span class="token punctuation">"</span></span>
        <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
        <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 表单区 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        账号登录
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 表单 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span>
          <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pt-1 pb-3 leading-[0px] text-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            去注册
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full dark:bg-zinc-900 xl:dark:bg-zinc-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          登录
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-around mt-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- QQ --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-4 cursor-pointer<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>qq<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 微信 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-4 cursor-pointer<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wexin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="表单校验实现原理与方案分析" tabindex="-1"><a class="header-anchor" href="#表单校验实现原理与方案分析" aria-hidden="true">#</a> 表单校验实现原理与方案分析</h2>
<p>    在绝大多数情况下, 进行登录的时, 都会通过 <code>UI组件库</code> 实现表单校验功能, 但是在没有这种UI组件库的情况下, 应该如何实现表单校验呢?</p>
<p>首先就需要搞明白表单校验的 <strong>实现原理</strong></p>
<h4 id="表单校验的实现原理" tabindex="-1"><a class="header-anchor" href="#表单校验的实现原理" aria-hidden="true">#</a> 表单校验的实现原理</h4>
<p>    所谓表单校验，指的是：</p>
<ul>
<li>在某个特定的时机(输入框失去焦点, 或者 内容变化)</li>
<li>检查表单元素中的内容是否满足某个条件 (校验规则)</li>
<li>如果不符合, 则展示对应的提示</li>
</ul>
<p>    根据以上描述，所需要关注的，其实就是三点内容：</p>
<ol>
<li>监听表单元素的对应时机</li>
<li>检查内容是否匹配校验条件</li>
<li>根据检查结果，展示对应提示</li>
</ol>
<h4 id="自定义表单校验方案分析" tabindex="-1"><a class="header-anchor" href="#自定义表单校验方案分析" aria-hidden="true">#</a> 自定义表单校验方案分析</h4>
<ol>
<li>创建对应的 <code>field</code> 输入框组件</li>
<li>该组件中，包含两个元素：
<ol>
<li><code>input</code> 输入框</li>
<li><code>span</code> 表示错误提示</li>
</ol>
</li>
<li>监听 <code>input</code> 输入框的 <code>blur 失去焦点</code> 事件</li>
<li>根据 <code>input</code> 的 <code>value</code> 判断是否满足一个或多个指定的条件（比如：是否为空）</li>
<li>如果不满足，则展示 <code>span</code> 标签，表示错误提示消息</li>
</ol>
<p>    确实可以实现一个基础的表单校验，但是这样的表单校验组件，很难具有 <strong>普适</strong> 性，因为实际开发中，表单校验的场景多种多样，比如：国际化处理。</p>
<p>所以说，把它抽离成一个 <strong>通用组件</strong> 意义并不大</p>
<p>这里采用一种更加普适的方式...</p>
<p>这个方式就是：<a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noopener noreferrer">vee-validata<ExternalLinkIcon/></a></p>
<p>    <code>vee-validata </code>是一个 <code>vue</code> 中专门做表单校验的库，该库更加具有 <strong>普适</strong> 性，也更加适合大家在实际开发中的使用。</p>
<h2 id="基于-vee-validata-实现普适的表单校验" tabindex="-1"><a class="header-anchor" href="#基于-vee-validata-实现普适的表单校验" aria-hidden="true">#</a> 基于 vee-validata 实现普适的表单校验</h2>
<p>现在用 <code>vee-validate</code>来实现登录的表单校验逻辑</p>
<ol>
<li>安装 <code>vee-validate</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vee-validate@4.5.10 --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>
<p><code>vee-validata</code> 中提供了非常详细的基础<a href="https://vee-validate.logaretm.com/v4/tutorials/basics" target="_blank" rel="noopener noreferrer">使用流程<ExternalLinkIcon/></a></p>
</li>
<li>
<p>在这一套流程中，涉及到了三个组件，分别为：</p>
</li>
</ol>
<ul>
<li><code>Form</code> 表单</li>
<li><code>Field</code> 输入框</li>
<li><code>ErrorMessage</code> 错误提示</li>
</ul>
<ol start="4">
<li>就需要使用这三个组件, 代替之前写好的表单结构, 其中每一个单独的表单都具备一个 <code>name</code>, 该 <code>name</code>对应表单域和错误提示</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
      <span class="token comment">&lt;!-- 表单 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-form</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span> <span class="token attr-name">...</span>  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-red-600 block mt-0.5 text-left<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>  <span class="token attr-name">...</span>  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-red-600 block mt-0.5 text-left<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>
        ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-form</span><span class="token punctuation">></span></span>
      ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> headerVue <span class="token keyword">from</span> <span class="token string">'../components/header.vue'</span>
<span class="token comment">// 组件都改一改名字</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Form <span class="token keyword">as</span> VeeForm<span class="token punctuation">,</span>
  Field <span class="token keyword">as</span> VeeField<span class="token punctuation">,</span>
  ErrorMessage <span class="token keyword">as</span> VeeErrorMessage
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vee-validate'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ol start="5">
<li>
<p>接下来需要创建出对应的 <strong>校验规则</strong> ，对于 <code>VeeField</code> 而言，可以通过 <code>rules</code> 属性，绑定对应的校验规则，该规则为一个 <strong>方法</strong></p>
</li>
<li>
<p>创建 <code>src/views/login-register/validate.js</code> ，对外导出两个函数</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 用户明德表单校验
 * 返回 true 表示表单校验通过 , 返回 字符串 表示表单校验不通过
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">validateUsername</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'用户名必须要填写!'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">||</span> value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'用户名的长度应该在3 ~ 12位之间'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 
 * 密码的比导弹校验
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">validatePassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'密码必须要填写!'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span> <span class="token operator">||</span> value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'密码的长度应该在6 ~ 12位之间'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="7">
<li>在 <code>src/views/login-register/login/index.vue</code> 中导入校验函数，并绑定到对应的<code>vee-filed</code>组件的 <code>:rules</code> 中</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>vee<span class="token operator">-</span>field
  <span class="token operator">...</span>
  <span class="token operator">:</span>rules<span class="token operator">=</span><span class="token string">"validateUsername"</span>
  <span class="token operator">...</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>vee<span class="token operator">-</span>field
  <span class="token operator">...</span>
  <span class="token operator">:</span>rules<span class="token operator">=</span><span class="token string">"validatePassword"</span>
  <span class="token operator">...</span>
<span class="token operator">/</span><span class="token operator">></span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> validateUsername<span class="token punctuation">,</span> validatePassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../validate'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="8">
<li>
<p>此时，在<strong>表单域失去焦点时</strong>，表单校验会生效</p>
</li>
<li>
<p>为 <code>vee-form</code> 添加 <code>submit</code> 事件，可以发现，当表单校验不通过时，不会触发该事件</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>vee<span class="token operator">-</span>form @submit<span class="token operator">=</span><span class="token string">"onLoginHandler"</span><span class="token operator">></span>

<span class="token doc-comment comment">/**
 * 点击登录触发
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onLoginHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'触发登录'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>表单校验完成</p>
<h2 id="人类行为验证" tabindex="-1"><a class="header-anchor" href="#人类行为验证" aria-hidden="true">#</a> 人类行为验证</h2>
<p>目前人类行为验证的实现方案，主要分为两种：</p>
<ol>
<li>收费平台，年费在几万到几十万不等，有专门的技术人员帮助对接：</li>
</ol>
<ul>
<li><a href="https://www.geetest.com/" target="_blank" rel="noopener noreferrer">极验<ExternalLinkIcon/></a></li>
<li><a href="https://dun.163.com/trial/sense" target="_blank" rel="noopener noreferrer">网易易盾<ExternalLinkIcon/></a></li>
<li>…</li>
</ul>
<ol start="2">
<li>免费开源，验证的精准度，需要看服务端的能力：</li>
</ol>
<ul>
<li>gitee 开源的： <a href="https://gitee.com/LongbowEnterprise/SliderCaptcha?_from=gitee_search" target="_blank" rel="noopener noreferrer">SliderCaptcha<ExternalLinkIcon/></a></li>
</ul>
<p>项目中主要就是用这个开源的 <code>SliderCaptcha</code> 实现</p>
<h3 id="构建人类行为验证模块" tabindex="-1"><a class="header-anchor" href="#构建人类行为验证模块" aria-hidden="true">#</a> 构建人类行为验证模块</h3>
<ol>
<li>
<p>创建 <code>vendor</code> 文件夹，复制 <code>SliderCaptcha</code> 源代码至该文件夹中</p>
</li>
<li>
<p>创建 <code>src/views/login-register/login/slider-captcha.vue</code> ，作为人类行为验证组件</p>
</li>
<li>
<p>在该组件中，完成对应 <code>UI</code> 样式：</p>
</li>
</ol>
<p><img src="@source/.vuepress/public/images/xingwei1.png" alt="图片"></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fixed top-[20%] left-[50%] translate-x-[-50%] w-[340px] h-[270px] text-sm bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-900 shadow-3xl<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center h-5 text-left px-1 mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-grow dark:text-zinc-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>请完成安全验证<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span>
        <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onReset<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span>
        <span class="token attr-name">fillClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-zinc-900 dark:fill-zinc-200<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ml-2 w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClose<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>captcha<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token doc-comment comment">/**
 * 重置
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 关闭
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ol start="4">
<li>在 <code>src/views/login-register/login/index.vue</code> 中导入该组件：</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>import sliderCaptchaVue from './slider-captcha.vue'

<span class="token comment">&lt;!-- 人类行为验证模块 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slider-captcha-vue</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slider-captcha-vue</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5">
<li>接下来就需要生成 <code>sliderCaptcha</code> 实例，并且在 <strong>前端用户拼图成功之后，把用户的拼图操作路径（用户行为）数据传递给服务端，由服务端进行人类行为判定</strong></li>
<li>在 <code>src/views/login-register/login/slider-captcha.vue</code> 中：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@/vendor/SliderCaptcha/slidercaptcha.min.css'</span>
<span class="token keyword">import</span> <span class="token string">'@/vendor/SliderCaptcha/longbow.slidercaptcha.min.js'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCaptcha <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/sys'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">let</span> captcha <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  captcha <span class="token operator">=</span> <span class="token function">sliderCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 渲染位置</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'captcha'</span><span class="token punctuation">,</span>
    <span class="token comment">// 用户拼图成功之后的回调</span>
    <span class="token keyword">async</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">behavior</span><span class="token operator">:</span> arr
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 用户拼图失败之后的回调</span>
    <span class="token function">onFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onFail'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认的验证方法，咱们不在此处进行验证，而是选择在用户拼图成功之后进行验证，所以此处永远返回为 true</span>
    <span class="token function">verify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="7">
<li>创建 <code>src/api/sys.js</code> 模块，构建请求接口：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token doc-comment comment">/**
 * 人类行为验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCaptcha</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/captcha'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="8">
<li>当用户服务端返回成功之后，传递事件到 <code>login</code> 组件，同时处理 <code>close</code> 和 <code>reset</code> 事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token constant">EMITS_CLOSE</span> <span class="token operator">=</span> <span class="token string">'close'</span>
<span class="token keyword">const</span> <span class="token constant">EMITS_SUCCESS</span> <span class="token operator">=</span> <span class="token string">'success'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">EMITS_CLOSE</span><span class="token punctuation">,</span> <span class="token constant">EMITS_SUCCESS</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 用户拼图成功之后的回调</span>
<span class="token keyword">async</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emits</span><span class="token punctuation">(</span><span class="token constant">EMITS_SUCCESS</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 重置
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  captcha<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 关闭
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token constant">EMITS_CLOSE</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ol start="9">
<li>在 <code>src/views/login-register/login/index.vue</code> 中，监听对应事件处理</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 人类行为验证模块 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>slider<span class="token operator">-</span>captcha<span class="token operator">-</span>vue v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"isCaptchaVisible"</span> @success<span class="token operator">=</span><span class="token string">"onSuccess"</span> @close<span class="token operator">=</span><span class="token string">"onClose"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slider<span class="token operator">-</span>captcha<span class="token operator">-</span>vue<span class="token operator">></span>

<span class="token operator">...</span>
<span class="token keyword">import</span> sliderCaptchaVue <span class="token keyword">from</span> <span class="token string">'./slider-captcha.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span> 

<span class="token comment">// // 控制 sliderCaptcha 显示/隐藏</span>
<span class="token keyword">const</span> isCaptchaVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// 点击登录按钮</span>
<span class="token keyword">const</span> <span class="token function-variable function">onLoginHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isCaptchaVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 行为验证成功</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isCaptchaVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// TODO: 真正的登录请求</span>
<span class="token punctuation">}</span>
<span class="token comment">// //  sliderCaptcha 关闭</span>
<span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  isCaptchaVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>注意：</strong> <code>SliderCaptcha</code> 中所有图标均被放入该路径下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- iconfont 在线图标，主要用于 sliderCaptcha --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://at.alicdn.com/t/font_3042963_nv614canpao.css?spm=a313x.7781069.1998910419.47&amp;file=font_3042963_nv614canpao.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="用户登录行为处理" tabindex="-1"><a class="header-anchor" href="#用户登录行为处理" aria-hidden="true">#</a> 用户登录行为处理</h2>
<ol>
<li>在 <code>src/api/sys.js</code> 定义用户登录接口</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 登录
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loginUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/login'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2">
<li>在 <code>src/views/login-register/login/index.vue</code> 中，当用户进行登录时，处理 <code>loading</code> 展示</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>m<span class="token operator">-</span>button
  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"w-full dark:bg-zinc-900 xl:dark:bg-zinc-800"</span>
  <span class="token operator">:</span>loading<span class="token operator">=</span><span class="token string">"loading"</span>
  <span class="token operator">:</span>isActiveAnim<span class="token operator">=</span><span class="token string">"false"</span>
<span class="token operator">></span>
  登录
<span class="token operator">&lt;</span><span class="token operator">/</span>m<span class="token operator">-</span>button<span class="token operator">></span>

<span class="token comment">// 登录时的 loading</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3">
<li>定义用户登录方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 人类行为验证通过
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onCaptchaSuccess</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// 登录操作</span>
  <span class="token function">onLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 用户登录行为
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token comment">// TODO: 登陆请求</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="4">
<li>
<p><strong>所有用户登录行为将被放入到 <code>vuex</code> 中</strong></p>
</li>
<li>
<p>创建 <code>src/store/modules/user.js</code> 模块（需要安装 <code>md5</code> 加密模块）</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> loginUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/sys'</span>
<span class="token keyword">import</span> md5 <span class="token keyword">from</span> <span class="token string">'md5'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setToken</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>token <span class="token operator">=</span> newToken
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 登录</span>
    <span class="token keyword">async</span> <span class="token function">loginAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> data 
      
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loginUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>data<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> password <span class="token operator">?</span> <span class="token function">md5</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> token <span class="token operator">=</span> res<span class="token punctuation">.</span>token
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setToken'</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>染好不能忘记<strong>注册 和 持久化</strong>
6. 注册该模块，并提供 <code>token</code> 的 <code>getters</code></p>
<ol start="7">
<li>在 <code>src/views/login-register/login/index.vue</code> 中触发该模块，此时需要处理两个变量：</li>
</ol>
<ul>
<li><code>loginForm</code>：记录用户输入的用户名和密码</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 用户输入的用户名和密码</span>
<span class="token keyword">const</span> loginForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>loginType</code>：标记当前的登录模式为 <strong>用户名密码登录，区分后面的 QQ、微信扫码登录</strong></li>
</ul>
<p><code>src/constants/index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 登录方式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOGIN_TYPE_USERNAME</span> <span class="token operator">=</span> <span class="token string">'username'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="8">
<li>最后触发模块：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用户登录行为
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// 执行登录操作</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>loginForm<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">loginType</span><span class="token operator">:</span> <span class="token constant">LOGIN_TYPE_USERNAME</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="用户信息获取行为" tabindex="-1"><a class="header-anchor" href="#用户信息获取行为" aria-hidden="true">#</a> 用户信息获取行为</h2>
<p>用户登录成功之后，接下来就需要处理登录后行为，登录后行为分为三部分：</p>
<ol>
<li>登录成功之后，获取用户信息，并进行展示</li>
<li>退出登录的操作</li>
<li><code>token</code> 超时处理的操作</li>
</ol>
<p>现在处理第一个 <strong>获取用户信息操作</strong></p>
<ol>
<li>在 <code>src/api/sys.js</code> 中，定义获取用户信息接口</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取用户信息
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user/profile'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2">
<li>在 <code>src/utils/request.js</code> 定义请求拦截器，设置 <code>token：</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 请求拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果token存在 注入token</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config <span class="token comment">// 必须返回配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="3">
<li>在 <code>src/store/modules/user.js</code> 中定义获取用户信息的 <code>action</code> ，并在用户登录成功之后获取用户信息：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> loginUser<span class="token punctuation">,</span> getProfile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/sys'</span>
<span class="token keyword">import</span> md5 <span class="token keyword">from</span> <span class="token string">'md5'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/libs'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">userInfo</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">setProfile</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newUserInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> newUserInfo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 登录 action</span>
    <span class="token keyword">async</span> <span class="token function">loginAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      
      <span class="token comment">// 调登录请求之后 , 直接调了下面的获取用户信息 action</span>
      context<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'getProfileAction'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 获取用户信息 action</span>
    <span class="token keyword">async</span> <span class="token function">getProfileAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setProfile'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token comment">// 登录提示</span>
      <span class="token function">message</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">欢迎你, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> res<span class="token punctuation">.</span>username <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ol start="4">
<li>指定对应 <code>userInfo</code> 的 <code>getters</code>:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
 * 获取用户信息
 */</span>
<span class="token function-variable function">userInfo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>userInfo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5">
<li>在 <code>src/views/layout/components/header/header-my.vue</code> 中，根据用户信息进行展示判定：</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popover</span> <span class="token attr-name">...</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.token<span class="token punctuation">"</span></span>
      <span class="token attr-name">...</span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 头像 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.userInfo.avatar<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token comment">&lt;!-- 下箭头 --></span>
      ...
      <span class="token comment">&lt;!-- vip 标记 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-svg-icon</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.userInfo.vipLevel<span class="token punctuation">"</span></span>
        <span class="token attr-name">...</span>
      <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-svg-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$store.getters.token<span class="token punctuation">"</span></span> <span class="token attr-name">...</span><span class="token punctuation">></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popover</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>用户登录后的数据获取成功</p>
<h2 id="退出登录操作" tabindex="-1"><a class="header-anchor" href="#退出登录操作" aria-hidden="true">#</a> 退出登录操作</h2>
<p>用户退出登录只需要删除 <code>token</code> 和 <code>userInfo</code></p>
<ol>
<li>在 <code>src/store/modules/user.js</code> 中，定义对应的 <code>action</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 退出登录
 */</span>
<span class="token function">logoutAction</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setToken'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
  context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setUserInfo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 退出登录之后，重新刷新下页面，因为对于前台项目而言，用户是否登录（是否为 VIP）看到的数据可能不同</span>
  location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>在 <code>src/views/layout/components/header/header-my.vue</code> 中为退出登录设定点击事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * menu Item 点击事件，也可以根据其他的 key 作为判定，比如 name
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onItemClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 有路径则进行路径跳转</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token keyword">return</span>   <span class="token comment">// 返回了 ,下面代码不执行 </span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 无路径则为退出登录</span>
  <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'您确定要退出登录吗？'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 退出登录不存在跳转路径</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/logout'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="token-超时处理" tabindex="-1"><a class="header-anchor" href="#token-超时处理" aria-hidden="true">#</a> token 超时处理</h2>
<p>通常情况下 <code>token</code> 均具备时效性，在本课程中，<code>token</code> 失效后，服务端会返回 401。</p>
<p>当服务端返回 <code>401</code> 时，表示 <code>token</code> 超时，则需要重新登录。</p>
<p>那么对应的操作可以在 <strong><code>axios</code> 的响应拦截器</strong>中进行</p>
<p>在 <code>src/utils/request.js</code> 中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理 token 超时问题</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      error<span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span>
      error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span>
      error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">401</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/logout'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// TODO: 提示错误消息</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="注册-确认密码-校验" tabindex="-1"><a class="header-anchor" href="#注册-确认密码-校验" aria-hidden="true">#</a> 注册 : '确认密码' 校验</h2>
<p>登录操作就已经处理完成了，接下来就处理<strong>注册模块</strong></p>
<ol>
<li>
<p>创建 <code>src/views/login-register/register/index.vue</code></p>
</li>
<li>
<p>它的基本视图与 <code>login</code> 页面相差无几：</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative h-screen bg-white dark:bg-zinc-700 text-center xl:bg-zinc-200<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header-vue</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header-vue</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--表单区--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        注册账号
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 表单 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-form</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 用户名 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span>
          <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span>
          <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateUsername<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-red-600 block mt-0.5 text-left<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 密码 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span>
          <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validatePassword<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-red-600 block mt-0.5 text-left<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 确认密码 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmPassword<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>确认密码<span class="token punctuation">"</span></span>
          <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span>
          <span class="token attr-name">rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateConfirmPassword:@password<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm text-red-600 block mt-0.5 text-left<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmPassword<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pt-1 pb-3 leading-[0px] text-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer<span class="token punctuation">"</span></span>
              <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
              去登录
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- &lt;div class="text-center">
            &lt;a
              class="text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400"
              href="https://m.imooc.com/newfaq?id=89"
              target="__black"
            >
              注册即同意《慕课网注册协议》
            &lt;/a>
          &lt;/div> --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full dark:bg-zinc-900 xl:dark:bg-zinc-800<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          立即注册
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><ol start="3">
<li>
<p>处理对应的表单验证</p>
</li>
<li>
<p>在 <code>src/views/login-register/validate.js</code> 中，新增 <strong>确认密码表单验证</strong></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 确认密码的表单校验
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">validateConfirmPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'两次密码输入必须一致'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="5">
<li>在 <code>src/views/login-register/register.vue</code> 中指定表单验证</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-form</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 用户名 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateUsername<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-error-message</span>
    <span class="token attr-name">...</span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 密码 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validatePassword<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-error-message</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 确认密码 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateConfirmPassword:@password<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  ...
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-form</span><span class="token punctuation">></span></span>

import {
  validateUsername,
  validatePassword,
  validateConfirmPassword
} from '../validate'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ol start="6">
<li>
<p>此时查看项目，会得到该错误：
<img src="@source/.vuepress/public/images/vor1.png" alt="图片"></p>
</li>
<li>
<p>该错误的原因是因为 <code>validateConfirmPassword</code> 这个接收 <code>password</code> 为参数的表单校验，需要进行注册</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  defineRule
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vee-validate'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  validateUsername<span class="token punctuation">,</span>
  validatePassword<span class="token punctuation">,</span>
  validateConfirmPassword
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../validate'</span>
<span class="token doc-comment comment">/**
 * defineRule 注册新的规则
 */</span>
<span class="token function">defineRule</span><span class="token punctuation">(</span><span class="token string">'validateConfirmPassword'</span><span class="token punctuation">,</span> validateConfirmPassword<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="处理真正注册操作" tabindex="-1"><a class="header-anchor" href="#处理真正注册操作" aria-hidden="true">#</a> 处理真正注册操作</h2>
<p>用户的所有注册行为也同样在 <code>vuex</code> 中进行处理</p>
<ol>
<li>在 <code>src/api/sys.js</code> 中定义注册接口</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 注册
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">registerUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/register'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2">
<li>在 <code>src/store/modules/user.js</code> 中，新增注册的 <code>action</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 注册
 */</span>
<span class="token keyword">async</span> <span class="token function">registerAction</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> payload
  <span class="token comment">// 注册 , 这里就直接返回结果</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">registerUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>payload<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> password <span class="token operator">?</span> <span class="token function">md5</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3">
<li>在 <code>src/views/login-register/register/index.vue</code> 中处理对应数据源和方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 注册表单</span>
<span class="token keyword">const</span> registerForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">confirmPassword</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 点击注册</span>
<span class="token keyword">const</span> <span class="token function-variable function">onRegister</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> registerForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册 action</span>
    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/registerAction'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

    <span class="token comment">// 注册成功 , 那么就直接登录</span>
    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'user/loginAction'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>payload<span class="token punctuation">,</span>
      <span class="token literal-property property">loginType</span><span class="token operator">:</span> <span class="token constant">LOGIN_TYPE_USERNAME</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ol start="4">
<li>不要忘记 , 数据源 <code>v-model</code> 双向绑定  , <code>vee-form</code>绑定 <code>@submit</code> 注册事件</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
      <span class="token comment">&lt;!-- 表单 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRegister<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 用户名 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">...</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>regForm.username<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
       ...
        <span class="token comment">&lt;!-- 密码 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">...</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>regForm.password<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
       
        <span class="token comment">&lt;!-- 确认密码 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vee-field</span>
          <span class="token attr-name">...</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>regForm.confirmPassword<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-button</span>
          <span class="token attr-name">...</span>
          <span class="token attr-name">:isActiveAnim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
          <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          立即注册
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vee-form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
