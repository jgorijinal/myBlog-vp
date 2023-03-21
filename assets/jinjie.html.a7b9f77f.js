import{_ as p,r as t,o as e,c as o,a as n,e as l,F as c,d as s,b as i}from"./app.fcb85f29.js";var r="/myBlog-vp/assets/wx03.c3670f32.png",u="/myBlog-vp/assets/wx04.7d1a5802.png",k="/myBlog-vp/assets/wxtabs1.b5315407.png";const b={},d=s('<h1 id="\u5C0F\u7A0B\u5E8F\u8FDB\u9636\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u8FDB\u9636\u6982\u5FF5" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u8FDB\u9636\u6982\u5FF5</h1><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u7EC4\u4EF6\u5E94\u8BE5\u88AB\u653E\u5165\u5230\u54EA\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF1F</li><li>\u5982\u4F55\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u3010\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3011\uFF1F</li></ol></div><ol><li>\u521B\u5EFA\u7EC4\u4EF6 <ol><li>\u521B\u5EFA <code>components</code> \u6587\u4EF6\u5939</li><li>\u521B\u5EFA <code>tabs</code> \u548C <code>list</code> \u6587\u4EF6\u5939</li><li>\u53F3\u952E <strong>\u65B0\u5EFA <code>Component</code></strong><img src="'+r+'" alt="\u56FE\u7247"></li></ol></li><li>\u4F7F\u7528\u7EC4\u4EF6 <ol><li>\u627E\u5230\u9875\u9762\u7684 <code>.json</code> \u6587\u4EF6</li><li>\u5728 <code>usingComponents</code> \u9009\u9879\u4E0B <strong>\u6CE8\u518C\u7EC4\u4EF6</strong><ol><li><code>key</code> \u4E3A\u5F53\u524D\u7EC4\u4EF6\u5728\u8BE5\u9875\u9762\u4E2D\u7684\u6807\u7B7E\u540D</li><li><code>value</code> \u4E3A\u7EC4\u4EF6\u7684\u4EE3\u7801\u8DEF\u5F84 <img src="'+u+`" alt="\u56FE\u7247"></li></ol></li><li>\u5728\u9875\u9762\u7684 <code>wxml</code> \u6587\u4EF6\u4E2D\uFF0C\u4EE5 <strong>\u6CE8\u518C\u7684 <code>key</code></strong> \u4E3A\u6807\u7B7E\u540D\uFF0C\u4F7F\u7528\u7EC4\u4EF6</li></ol></li></ol><p>\u603B\u7ED3:</p><ol><li>\u7EC4\u4EF6\u5E94\u8BE5\u88AB\u653E\u5165\u5230\u54EA\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF1F <ol><li><code>components</code></li></ol></li><li>\u5982\u4F55\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u3010\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3011\uFF1F <ol><li>\u5728<strong>\u9875\u9762</strong>\u7684 <code>.json</code> \u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <code>usingComponents</code> \u8FDB\u884C\u6CE8\u518C</li><li>\u5728 <code>wxml</code> \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u6CE8\u518C\u7684 <code>key</code> \u4E3A <strong>\u6807\u7B7E\u540D</strong> \u8FDB\u884C\u4F7F\u7528</li></ol></li></ol><h2 id="\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u7EC4\u4EF6\u7684 \u751F\u547D\u5468\u671F \u548C \u65B9\u6CD5 \u5206\u522B\u5E94\u8BE5\u88AB\u653E\u5165\u5230\u54EA\u4E2A\u8282\u70B9\u4E0B\uFF1F</li><li><code>created</code> \u51FD\u6570\u4E2D\u53EF\u4EE5\u8C03\u7528 <code>setData</code> \u5417\uFF1F</li><li>\u83B7\u53D6\u6570\u636E\u7684\u64CD\u4F5C\u5E94\u8BE5\u5728\u54EA\u4E2A\u51FD\u6570\u4E2D\u8FDB\u884C\uFF1F</li></ol></div><p>\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u5FC5\u987B\u8981\u653E\u5165\u5230 <strong><code>lifetimes</code></strong> \u4E2D, \u800C\u65B9\u6CD5\u5FC5\u987B\u8981\u653E\u5165\u5230 <code>methods</code> \u4E2D</p><p>\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u4E00\u5171\u6709\u4E09\u4E2A\uFF1A</p><ol><li><code>created</code> \uFF1A \u7EC4\u4EF6\u5B9E\u4F8B\u521A\u521A\u88AB\u521B\u5EFA\u597D\u3002<strong>\u6B64\u65F6\u8FD8\u4E0D\u80FD\u8C03\u7528 <code>setData</code></strong></li><li><code>attached</code>\uFF1A\u7EC4\u4EF6\u5B8C\u5168\u521D\u59CB\u5316\u5B8C\u6BD5\u3001\u8FDB\u5165\u9875\u9762\u8282\u70B9\u6811\u540E\u3002<strong>\u7EDD\u5927\u591A\u6570\u521D\u59CB\u5316\u5DE5\u4F5C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u65F6\u673A\u8FDB\u884C</strong></li><li><code>detached</code>\uFF1A\u5728\u7EC4\u4EF6\u79BB\u5F00\u9875\u9762\u8282\u70B9\u6811\u540E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// components/tabs/tabs.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">listData</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// tabs \u6570\u636E</span>
    <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// \u9009\u4E2D\u9879</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u7EC4\u4EF6\u7684\u65B9\u6CD5\u5217\u8868
   */</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;https://api.imooc-blog.lgdsunday.club/api/hot/tabs&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">listData</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
            <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabs-box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scroll-x</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{listData}}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab {{active === index ? <span class="token punctuation">&#39;</span>active<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    {{item.label}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.tabs-box</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6307\u5B9A\u5BBD\u5EA6 + \u4E0D\u6362\u884C */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 750rpx<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #cccccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6307\u5B9A display */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 12px 22px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f94d2a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="`+k+'" alt="\u56FE\u7247"></p><p><strong>\u603B\u7ED3</strong> :</p><ol><li>\u7EC4\u4EF6\u7684 \u751F\u547D\u5468\u671F \u548C \u65B9\u6CD5 \u5206\u522B\u5E94\u8BE5\u88AB\u653E\u5165\u5230\u54EA\u4E2A\u8282\u70B9\u4E0B\uFF1F <ol><li>\u751F\u547D\u5468\u671F\u5E94\u8BE5\u88AB\u5B9A\u4E49\u5728 <code>lifetimes</code> \u4E2D</li><li>\u65B9\u6CD5\u5FC5\u987B\u8981\u653E\u5165\u5230 <code>methods</code> \u4E2D</li></ol></li><li><code>created</code> \u51FD\u6570\u4E2D\u53EF\u4EE5\u8C03\u7528 <code>setData</code> \u5417\uFF1F <ol><li>\u4E0D\u53EF\u4EE5</li></ol></li><li>\u83B7\u53D6\u6570\u636E\u7684\u64CD\u4F5C\u5E94\u8BE5\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u8FDB\u884C\uFF1F <ol><li><code>attached</code></li></ol></li></ol><h2 id="\u6570\u636E\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u76D1\u542C\u5668" aria-hidden="true">#</a> \u6570\u636E\u76D1\u542C\u5668</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u5C0F\u7A0B\u5E8F\u4E2D\u901A\u8FC7\u54EA\u4E2A\u9009\u9879\u6765\u58F0\u660E\u6570\u636E\u76D1\u542C\u5668</li><li>\u6570\u636E\u76D1\u542C\u5668\u7684\u4F7F\u7528\u573A\u666F\u662F\u4EC0\u4E48\uFF1F</li></ol></div><p>\u901A\u8FC7 <strong>\u63A5\u53E3\u6587\u6863</strong> \u53EF\u4EE5\u770B\u51FA\uFF0C\u5982\u679C\u60F3\u8981\u83B7\u53D6 <code>list</code> \u90A3\u4E48\u9700\u8981\u4F20\u9012\u4E00\u4E2A <code>type</code> \u7684\u53C2\u6570\uFF0C\u800C\u8FD9\u4E2A <code>type</code> \u5C31\u662F\u7528\u6237\u9009\u4E2D\u7684 <code>tab \u9879</code> \u7684 <code>id</code></p><p>\u6240\u4EE5\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u6765\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF1A<strong>\u76D1\u542C\u7528\u6237\u9009\u4E2D\u7684 <code>tab</code>\uFF0C\u6839\u636E\u7528\u6237\u9009\u4E2D\u7684 <code>tab</code> \u6765\u5207\u6362\u5E95\u90E8 <code>list</code> \u7684\u6570\u636E</strong></p>',21),m={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html",target:"_blank",rel:"noopener noreferrer"},g=i("\u6570\u636E\u76D1\u542C\u5668\u5B98\u65B9\u6587\u6863"),v=s(`<p>\u76EE\u6807\uFF1A<strong>\u76D1\u542C\u7528\u6237\u9009\u4E2D\u7684 <code>tab</code>\uFF0C\u6839\u636E\u7528\u6237\u9009\u4E2D\u7684 <code>tab</code> \u6765\u5207\u6362\u5E95\u90E8 <code>list</code> \u7684\u6570\u636E</strong></p><p>\u6B65\u9AA4\u62C6\u89E3\u5982\u4E0B\uFF1A</p><blockquote><ol><li>\u76D1\u542C\u7528\u6237\u9009\u4E2D\u9879\u7684\u53D8\u5316</li><li>\u83B7\u53D6\u7528\u6237\u9009\u4E2D\u7684\u6570\u636E\u7684 <code>id</code></li><li>\u628A <code>id</code> \u4F20\u9012\u7ED9 <code>list</code> \u7EC4\u4EF6</li><li><code>list</code> \u7EC4\u4EF6\u6839\u636E\u63A5\u6536\u5230\u7684 <code>id</code> \u83B7\u53D6\u5BF9\u5E94\u7684\u6570\u636E</li></ol></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabs-box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scroll-x</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{listData}}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab {{active === index ? <span class="token punctuation">&#39;</span>active<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onItemClick<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{index}}<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    {{item.label}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">onItemClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u901A\u8FC7 dataset \u83B7\u53D6\u4F20\u9012\u7684\u53C2\u6570</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> index <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset
      <span class="token comment">// \u70B9\u51FB tab \u65F6, \u5207\u6362\u5F53\u524D\u6FC0\u6D3B\u9879</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> index
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">// \u76D1\u542C\u5668</span>
    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">active</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76D1\u542C active \u6570\u636E\u7684\u53D8\u5316, \u5148\u83B7\u53D6\u90A3\u4E00\u4E2A item \u9879</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>listData<span class="token punctuation">[</span>active<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u76EE\u524D\uFF0C\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u9700\u6C42\u7684\u524D\u4E24\u6B65</p><p>\u540E\u9762\u4E24\u6B65\u9700\u8981\u4E86\u89E3 <strong>\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u548C\u901A\u8BAF</strong></p><p><strong>\u603B\u7ED3:</strong></p><ol><li>\u5C0F\u7A0B\u5E8F\u4E2D\u901A\u8FC7\u54EA\u4E2A\u9009\u9879\u6765\u58F0\u660E\u6570\u636E\u76D1\u542C\u5668 <ol><li><code>observers</code></li></ol></li><li>\u6570\u636E\u76D1\u542C\u5668\u7684\u4F7F\u7528\u573A\u666F\u662F\u4EC0\u4E48\uFF1F <ol><li>\u9700\u8981\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316</li><li>\u5728\u6570\u636E\u53D8\u5316\u4E4B\u540E\uFF0C\u8FDB\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C</li></ol></li></ol><h2 id="\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u4E0E\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u4E0E\u901A\u8BAF" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u4E0E\u901A\u8BAF</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u7EC4\u4EF6\u4E4B\u95F4\u6570\u636E\u4F20\u9012\u7684\u5173\u7CFB\u53EF\u4EE5\u5206\u4E3A\u54EA\u51E0\u79CD\uFF1F</li><li>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\u662F\u4EC0\u4E48\uFF1F</li></ol></div><p>\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u5E38\u7528\u7684\u53EF\u4EE5\u5206\u4E3A<strong>\u7236\u5B50\u7EC4\u4EF6</strong>\u548C<strong>\u5144\u5F1F\u7EC4\u4EF6</strong></p><p><strong>\u4E0D\u540C\u5173\u7CFB\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F</strong> \u7236\u5B50\u5173\u7CFB</p><ol><li><p>\u7236\u5411\u5B50\u4F20\u53C2\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B50\u7EC4\u4EF6\uFF1A\u901A\u8FC7 properties \u58F0\u660E\u8981\u4ECE\u7236\u7EC4\u4EF6\u4E2D\u63A5\u6536\u7684\u6570\u636E</span>
    <span class="token doc-comment comment">/**
     * \u7EC4\u4EF6\u7684\u5C5E\u6027\u5217\u8868
     */</span>
    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tabId</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u7236\u7EC4\u4EF6\uFF1A\u901A\u8FC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u5F62\u5F0F\u4F20\u9012\u6570\u636E\uFF0C\u4EE5\u5B50\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684 key \u4E3A\u5C5E\u6027\u540D\uFF0C\u4EE5\u8981\u4F20\u9012\u7684\u6570\u636E\u4E3A\u5C5E\u6027\u503C</span>
   <span class="token operator">&lt;</span>list tabId<span class="token operator">=</span><span class="token string">&quot;{{tabSelectId}}&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>\u5B50\u5411\u7236\u4F20\u53C2\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B50\u7EC4\u4EF6\uFF1A\u901A\u8FC7 triggerEvent \u65B9\u6CD5\u53D1\u9001\u4E00\u4E2A\u901A\u77E5\uFF0C\u901A\u77E5\u7236\u7EC4\u4EF6\u63A5\u6536\u6570\u636E\u3002</span>
<span class="token comment">// \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\uFF1A\u901A\u77E5\u540D</span>
<span class="token comment">// \u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\uFF1A\u8981\u4F20\u9012\u7684\u6570\u636E</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    id
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7236\u7EC4\u4EF6\uFF1A\u901A\u8FC7 bind \u76D1\u542C\u5B50\u7EC4\u4EF6\u4E2D\u53D1\u9001\u7684\u901A\u77E5</span>
<span class="token comment">// bind \u540E\u7684\u5185\u5BB9\u4E3A \u5B50\u7EC4\u4EF6\u53D1\u9001\u7684\u901A\u77E5\u540D\uFF0C\u8868\u8FBE\u5F0F\u4E3A\u63A5\u6536\u5230\u8BE5\u901A\u77E5\u65F6\u6240\u89E6\u53D1\u7684\u65B9\u6CD5</span>
<span class="token operator">&lt;</span>tabs bind<span class="token operator">:</span>change<span class="token operator">=</span><span class="token string">&quot;onTabChange&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>tabs<span class="token operator">&gt;</span>
<span class="token comment">// \u65B9\u6CD5\u88AB\u89E6\u53D1\u540E\u53EF\u4EE5\u901A\u8FC7 e.detail \u7684\u5F62\u5F0F\u83B7\u53D6\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\u5BF9\u8C61</span>
<span class="token function">onTabChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">tabSelectId</span><span class="token operator">:</span> id
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ol><p>\u5144\u5F1F\u5173\u7CFB</p><ol><li><p>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u53C2\uFF1A<strong>\u5144\u5F1F\u5173\u7CFB === \u6CA1\u6709\u5173\u7CFB</strong>\u3002 \u5144\u5F1F\u7EC4\u4EF6\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u79F0\u547C\u7684\u4E00\u4E2A\u53EB\u6CD5\u800C\u5DF2</p><p>\u6240\u4EE5\u60F3\u8981\u5B8C\u6210\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u53C2\uFF0C\u5C31\u9700\u8981\uFF1A<strong>\u4E3A\u5B83\u4EEC\u5EFA\u7ACB\u5173\u7CFB</strong></p><p>\u800C\u5EFA\u7ACB\u5173\u7CFB\u8BF4\u767D\u4E86\u5C31\u662F\u4E3A\u4E86\u627E\u5230\u4E00\u4E2A\uFF1A<strong>\u548C\u8FD9\u4E24\u4E2A\u7EC4\u4EF6\u90FD\u8BA4\u8BC6\u7684 \u201D\u4E2D\u95F4\u4EBA\u201C \u3002</strong></p><p>\u8FD9\u4E2A\u4E2D\u95F4\u4EBA\u4E00\u822C\u4E3A\uFF1A<strong>\u7EDF\u4E00\u7684\u7236\u7EC4\u4EF6\u3002</strong></p><p>\u800C\u6700\u540E\uFF1A\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u60F3\u8981\u4F20\u9012\u6570\u636E\uFF0C\u5C31\u9700\u8981\u5229\u7528 \u201D\u4E2D\u95F4\u4EBA\u8FDB\u884C\u4F20\u9012\u201C\uFF0C\u4E5F\u5C31\u662F\uFF1A</p><blockquote><ol><li>\u3010\u5144\u5F1F A \u7EC4\u4EF6\u3011\u4F20\u9012\u6570\u636E\u7ED9 \u7236\u7EC4\u4EF6\uFF08\u4E2D\u95F4\u4EBA\uFF09</li><li>\u7236\u7EC4\u4EF6\uFF08\u4E2D\u95F4\u4EBA\uFF09\u518D\u628A\u6570\u636E\u4F20\u9012\u7ED9 \u3010\u5144\u5F1F B \u7EC4\u4EF6\u3011</li></ol></blockquote></li></ol><p><strong>\u603B\u7ED3</strong></p><ol><li>\u7EC4\u4EF6\u4E4B\u95F4\u6570\u636E\u4F20\u9012\u7684\u5173\u7CFB\u53EF\u4EE5\u5206\u4E3A\u54EA\u51E0\u79CD\uFF1F <ol><li>\u7236\u5411\u5B50\u4F20\u9012\u6570\u636E</li><li>\u5B50\u5411\u7236\u4F20\u9012\u6570\u636E</li><li>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u6570\u636E</li></ol></li><li>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\u662F\u4EC0\u4E48\uFF1F</li></ol><h2 id="\u7EC4\u4EF6\u7684\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u63D2\u69FD" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u63D2\u69FD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u5B9A\u4E49\u591A\u4E2A\u63D2\u69FD\uFF1F</p></div><p>\u5C0F\u7A0B\u5E8F\u9ED8\u8BA4\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u63D2\u69FD\uFF0C\u5982\u679C\u8981\u5B9A\u4E49\u591A\u4E2A\u63D2\u69FD\u90A3\u4E48\u9700\u8981\uFF1A<strong>\u5728\u7EC4\u4EF6\u4E2D\u6307\u5B9A <code>options</code> \u9009\u9879\u7684 <code>multipleSlots</code> \u9009\u9879\u4E3A <code>true</code></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">multipleSlots</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u4F7F\u7528\uFF1A</strong></p><p><strong>2.1\uFF1A\u4F7F\u7528\u5355\u4E00\u63D2\u69FD\uFF1A</strong></p><p>\u5728\u7EC4\u4EF6\u4F7F\u7528\u65F6\uFF0C\u4EE5 <code>innerHTML </code> \u7684\u5F62\u5F0F\u63D2\u5165\u5185\u5BB9\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\u5355\u4E00\u63D2\u69FD\u63D2\u5165\u7684 DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2.2\uFF1A\u4F7F\u7528\u591A\u4E2A\u63D2\u69FD\uFF1A</strong></p><p>\u5728\u7EC4\u4EF6\u4F7F\u7528\u65F6\uFF0C\u4EE5 <code>innerHTML </code> \u7684\u5F62\u5F0F\u63D2\u5165\u5185\u5BB9\uFF0C\u4EE5 <code>slot</code> \u5C5E\u6027\u6807\u8BB0\u5F53\u524D <code>DOM</code> \u63D2\u5165\u5230\u54EA\u4E2A\u63D2\u69FD\u4E2D\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BE5\u5143\u7D20\u5C06\u88AB\u63D2\u5165\u5230 name=header \u7684\u63D2\u69FD\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BE5\u5143\u7D20\u5C06\u88AB\u63D2\u5165\u5230 name=footer \u7684\u63D2\u69FD\u4E2D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u603B\u7ED3:</strong> \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u5B9A\u4E49\u591A\u4E2A\u63D2\u69FD\uFF1F</p><ol><li>\u6307\u5B9A <code>options</code> \u7684 <code>multipleSlots</code> \u4E3A <code>true</code></li><li>\u4F7F\u7528\u5177\u540D\u63D2\u69FD\u4F20\u9012</li></ol>`,31);function h(y,x){const a=t("ExternalLinkIcon");return e(),o(c,null,[d,n("p",null,[n("a",m,[g,l(a)])]),v],64)}var f=p(b,[["render",h],["__file","jinjie.html.vue"]]);export{f as default};