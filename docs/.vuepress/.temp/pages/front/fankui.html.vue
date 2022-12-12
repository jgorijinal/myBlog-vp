<template><h1 id="用户反馈解决方案-兔小巢构建反馈功能" tabindex="-1"><a class="header-anchor" href="#用户反馈解决方案-兔小巢构建反馈功能" aria-hidden="true">#</a> 用户反馈解决方案 -- 兔小巢构建反馈功能</h1>
<p>进入 <a href="https://txc.qq.com/?from=powerbypc" target="_blank" rel="noopener noreferrer">腾讯兔小巢<ExternalLinkIcon/></a> 平台</p>
<p>兔小巢接入的方式非常的简单，在注册完成之后，官方其实已经给出了对应的接入方案：</p>
<p>简单来说整体流程共分为两步：</p>
<ol>
<li>获取当前产品反馈地址 ，<code>URL：https://support.qq.com/product/${productId}</code>
<ul>
<li>在产品管理后台中，可以直接获取反馈地址
<img src="@source/.vuepress/public/images/fankui1.png" alt="图片"></li>
</ul>
</li>
<li>通过 <code>window.open('https://support.qq.com/product/${productId}','_blank')</code> 进行跳转</li>
</ol>
<p>具体代码为：</p>
<ol>
<li>在 <code>src/constants/index.js</code> 中定义反馈的 <code>URL</code>：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 兔小巢反馈地址</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">FEEDBACK_URL</span> <span class="token operator">=</span> <span class="token string">'https://support.qq.com/product/479103'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>在 <code>src/views/layout/components/floating/index.vue</code> 中增加点击事件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 反馈处理
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToFeedback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">FEEDBACK_URL</span><span class="token punctuation">,</span> <span class="token string">'_blank'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
