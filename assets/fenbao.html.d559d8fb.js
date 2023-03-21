import{_ as n,d as s}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/blf1.c54b421c.png";const p={},t=s(`<h1 id="\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#\u5206\u5305" aria-hidden="true">#</a> \u5206\u5305</h1><p>\u4E8C\u7EF4\u7801\u9884\u89C8, \u771F\u673A\u8C03\u8BD5, \u53D1\u5E03\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u90FD\u6709\u4E00\u4E2A\u524D\u63D0:</p><ul><li><strong>\u6240\u6709\u5206\u5305\u5927\u5C0F\u4E0D\u8D85\u8FC7 <code>20MB</code>, \u5355\u4E2A\u5206\u5305/\u4E3B\u5305\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 <code>2MB</code></strong></li></ul><p>\u89E3\u51B3\u65B9\u6848: <strong>\u5206\u5305</strong></p><p><strong>\u9996\u9875\u548C tabBar \u9875\u9762</strong>\u662F\u4E3B\u5305, \u8FD9\u4E9B\u4E0D\u9700\u8981\u5206\u5305</p><h2 id="uni-app-\u5206\u5305\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#uni-app-\u5206\u5305\u6B65\u9AA4" aria-hidden="true">#</a> uni-app \u5206\u5305\u6B65\u9AA4</h2><ol><li>\u9996\u5148, \u5728 <code>manifest.json</code>\u6587\u4EF6\u4E2D\u7684\u6E90\u7801\u89C6\u56FE\u4E2D\u914D\u7F6E -&gt; <strong>\u5F00\u542F\u5206\u5305\u4F18\u5316</strong></li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;mp-weixin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;optimization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li><strong>\u5728 <code>pages.json</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E</strong></li></ol><p>\u76EE\u5F55\u7ED3\u6784: <img src="`+a+`" alt="\u56FE\u7247"></p><p><code>pages.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages_login&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6839\u76EE\u5F55</span>
        <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;login/login&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u8FD9\u91CC\u7684 path \u524D\u9762\u4E0D\u9700\u8981\u5199\u6839\u76EE\u5F55</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> 
              <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u5F55&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;login/mobile&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7ED1\u5B9A\u624B\u673A\u53F7&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages_search&quot;</span><span class="token punctuation">,</span>   
        <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search/search-list&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span>  
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u5E76\u5728 <code>&quot;pages&quot;</code>\u5F53\u4E2D\u7684\u4E4B\u524D\u539F\u6765\u7684\u9875\u9762\u526A\u5207\u6389</p>`,13);function o(e,r){return t}var c=n(p,[["render",o],["__file","fenbao.html.vue"]]);export{c as default};
