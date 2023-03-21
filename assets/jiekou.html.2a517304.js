import{_ as n,d as s}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/cors111.e612a230.png",p="/myBlog-vp/assets/qqt1.eaac1cdd.png",t="/myBlog-vp/assets/qqt2.34304c69.png";const e={},o=s(`<h1 id="\u4F7F\u7528-express-\u5199\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-express-\u5199\u63A5\u53E3" aria-hidden="true">#</a> \u4F7F\u7528 Express \u5199\u63A5\u53E3</h1><h2 id="\u5199\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5199\u63A5\u53E3" aria-hidden="true">#</a> \u5199\u63A5\u53E3</h2><h3 id="\u521B\u5EFA\u57FA\u672C\u7684-web-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u57FA\u672C\u7684-web-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u57FA\u672C\u7684 web \u670D\u52A1\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// write code ..</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on port 80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u521B\u5EFA-api-\u8DEF\u7531\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-api-\u8DEF\u7531\u6A21\u5757" aria-hidden="true">#</a> \u521B\u5EFA API \u8DEF\u7531\u6A21\u5757</h3><p>apiRouter.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//\u5BFC\u5165 \u8DEF\u7531\u6A21\u5757</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./apiRouter.js&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on port 80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u7F16\u5199-get-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-get-\u63A5\u53E3" aria-hidden="true">#</a> \u7F16\u5199 GET \u63A5\u53E3</h3><p>apiRouter.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// req.query \u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\u901A\u8FC7\u67E5\u8BE2\u5B57\u7B26\u4E32\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u6570\u636E</span>
  <span class="token keyword">const</span> query <span class="token operator">=</span> req<span class="token punctuation">.</span>query
  <span class="token comment">// res.send() \u65B9\u6CD5, \u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u5904\u7406\u7684\u7ED3\u679C</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 0 \u6210\u529F , 1 \u5931\u8D25</span>
    <span class="token literal-property property">mag</span><span class="token operator">:</span><span class="token string">&#39;GET \u8BF7\u6C42\u6210\u529F&#39;</span> 
    <span class="token literal-property property">data</span><span class="token operator">:</span> query
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u7F16\u5199-post-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-post-\u63A5\u53E3" aria-hidden="true">#</a> \u7F16\u5199 POST \u63A5\u53E3</h3><p>apiRouter.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// req.body \u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\u901A\u8FC7\u8BF7\u6C42\u4F53, \u53D1\u9001\u5230\u670D\u52A1\u5668\u7684 URL-encoded \u6570\u636E</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> req<span class="token punctuation">.</span>body
  <span class="token comment">// res.send() \u65B9\u6CD5, \u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u5904\u7406\u7684\u7ED3\u679C</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 0 \u6210\u529F , 1 \u5931\u8D25</span>
    <span class="token literal-property property">mag</span><span class="token operator">:</span><span class="token string">&#39;POSt \u8BF7\u6C42\u6210\u529F&#39;</span> 
    <span class="token literal-property property">data</span><span class="token operator">:</span> body
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>\u6CE8\u610F : \u5165\u80A1\u8981\u83B7\u53D6 URL-encoded \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53\u6570\u636E, \u5FC5\u987B\u914D\u7F6E\u4E2D\u95F4\u4EF6 app.use(express.urlencoded({extended:false}))</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u5BFC\u5165 \u8DEF\u7531\u6A21\u5757</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./apiRouter.js&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on port 80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB" aria-hidden="true">#</a> CORS \u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB</h2><p>\u4E0A\u9762\u7F16\u5199\u7684\u63A5\u53E3, <strong>\u4E0D\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42</strong></p><p>\u4E24\u79CD\u89E3\u51B3\u65B9\u6848:</p><ul><li>CORS(\u4E3B\u6D41, \u63A8\u8350\u4F7F\u7528)</li><li>JSONP(\u6709\u7F3A\u9677, \u53EA\u652F\u6301 GET)</li></ul><h3 id="cors-\u4E2D\u95F4\u4EF6\u89E3\u51B3\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#cors-\u4E2D\u95F4\u4EF6\u89E3\u51B3\u8DE8\u57DF" aria-hidden="true">#</a> CORS \u4E2D\u95F4\u4EF6\u89E3\u51B3\u8DE8\u57DF</h3><p>cors \u662F Express \u7684\u4E2D\u95F4\u4EF6, \u901A\u8FC7\u5B89\u88C5\u548C\u914D\u7F6E cors \u4E2D\u95F4\u4EF6, \u53EF\u4EE5\u65B9\u4FBF\u7684\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</p><ol><li>npm install cors \u5B89\u88C5\u4E2D\u95F4\u4EF6</li><li>const cors = require(&#39;cors&#39;) \u5BFC\u5165\u4E2D\u95F4\u4EF6</li><li>\u5728\u8DEF\u7531\u5668\u4F60\u8C03\u7528 app.use(cors()) \u914D\u7F6E\u4E2D\u95F4\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8DEF\u7531\u4E4B\u524D\u914D\u7F6E\u4E2D\u95F4\u4EF6 , \u914D\u7F6E cors \u8FD9\u4E2A\u4E2D\u95F4\u4EF6, \u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//\u5BFC\u5165 \u8DEF\u7531\u6A21\u5757</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./apiRouter.js&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on port 80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="cors-\u6982\u5FF5-\u548C-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#cors-\u6982\u5FF5-\u548C-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> CORS \u6982\u5FF5 \u548C \u6CE8\u610F\u4E8B\u9879</h3><p>CORS (Cross-Origin Resource Sharing, \u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB) \u6709<strong>\u4E00\u7CFB\u5217 HTTP \u54CD\u5E94\u5934\u7EC4\u6210</strong>, \u8FD9\u4E9B HTTP \u54CD\u5E94\u5934\u51B3\u5B9A\u6D4F\u89C8\u5668\u662F\u5426\u7EC4\u7EC7\u524D\u7AEF JS \u4EE3\u7801 \u8DE8\u57DF\u83B7\u53D6\u8D44\u6E90</p><p>\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9ED8\u8BA4\u4F1A\u963B\u6B62\u7F51\u9875 \u8DE8\u57DF \u83B7\u53D6\u8D44\u6E90, \u4F46\u63A5\u53E3\u670D\u52A1\u5668\u914D\u7F6E\u4E86 CORS \u76F8\u5173\u7684HTTP\u54CD\u5E94\u5934, \u5C31\u53EF\u4EE5\u63A5\u89E6\u6D4F\u89C8\u5668\u7AEF\u7684\u8DE8\u57DF\u8BBF\u95EE\u63A7\u5236 <img src="`+a+`" alt="\u56FE\u7247"></p><p>\u6CE8\u610F\u4E8B\u9879:</p><ul><li>CORS \u662F\u5728 <strong>\u670D\u52A1\u7AEF</strong> \u8FDB\u884C\u914D\u7F6E</li><li><strong>\u6709\u517C\u5BB9\u6027</strong> \u4F8B\u5982(IE10+ , CHrome4+, Firefox3.5+)</li></ul><h3 id="cors\u54CD\u5E94\u5934\u90E8-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#cors\u54CD\u5E94\u5934\u90E8-access-control-allow-origin" aria-hidden="true">#</a> CORS\u54CD\u5E94\u5934\u90E8 - Access-Control-Allow-Origin</h3><p>\u54CD\u5E94\u5934\u4E2D\u53EF\u4EE5\u643A\u5E26\u4E00\u4E2A Access-Control-Allow-Origin \u5B57\u6BB5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Origin: &lt;origin&gt; | *
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D, origin \u53C2\u6570<strong>\u6307\u5B9A\u4E86\u5141\u8BB8\u8BBF\u95EE\u8BE5\u8D44\u6E90\u7684 URL</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;http://xxxxx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u8868\u793A\u901A\u914D\u7B26, \u5141\u8BB8\u4EFB\u4F55\u7F51\u7AD9\u7684\u8BF7\u6C42</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="cors\u54CD\u5E94\u5934\u90E8-access-control-allow-headers" tabindex="-1"><a class="header-anchor" href="#cors\u54CD\u5E94\u5934\u90E8-access-control-allow-headers" aria-hidden="true">#</a> CORS\u54CD\u5E94\u5934\u90E8 - Access-Control-Allow-Headers</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B, CORS \u4EC5\u652F\u6301\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u7684\u5982\u4E0B 9\u4E2A\u8BF7\u6C42\u5934: <img src="`+p+`" alt="\u56FE\u7247"></p><p>\u5982\u679C\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E86\u989D\u5916\u7684\u8BF7\u6C42\u5934\u4FE1\u606F, \u5219\u9700\u8981\u5728\u670D\u52A1\u7AEF, \u901A\u8FC7 Access-Control-Allow-Headers \u5BF9\u989D\u5916\u7684\u8BF7\u6C42\u5934\u8FDB\u884C\u58F0\u660E, \u5426\u5219\u8FD9\u6B21\u8BF7\u6C42\u4F1A\u5931\u8D25</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;X-Custom-Header&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="cors\u54CD\u5E94\u5934\u90E8-access-control-allow-methods" tabindex="-1"><a class="header-anchor" href="#cors\u54CD\u5E94\u5934\u90E8-access-control-allow-methods" aria-hidden="true">#</a> CORS\u54CD\u5E94\u5934\u90E8 - Access-Control-Allow-Methods</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B, CORS \u53EA\u652F\u6301\u5BA2\u6237\u7AEF\u53D1\u8D77 GET, POST ,HEAD \u8BF7\u6C42</p><p>\u5982\u679C\u5BA2\u6237\u7AEF\u5E0C\u671B\u901A\u8FC7 <strong>PUT , DELETE</strong> \u7B49\u65B9\u5F0F\u8BF7\u6C42\u670D\u52A1\u7AEF\u7684\u8D44\u6E90, \u5219\u9700\u8981\u5728\u670D\u52A1\u7AEF, \u901A\u8FC7 Access-Control-Allow-Methods \u6765\u6307\u660E\u5B9E\u9645\u8BF7\u6C42\u6240\u5141\u8BB8\u4F7F\u7528\u7684HTTP \u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53EA\u5141\u8BB8 &#39;POST&#39;,&#39;GET&#39;,&#39;DELETE&#39;,&#39;HEAD&#39; \u8BF7\u6C42\u65B9\u6CD5</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;HEAD&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5141\u8BB8\u6240\u6709\u7684 HTTP \u8BF7\u6C42\u65B9\u6CD5</span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="cors-\u8BF7\u6C42\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#cors-\u8BF7\u6C42\u7684\u5206\u7C7B" aria-hidden="true">#</a> CORS \u8BF7\u6C42\u7684\u5206\u7C7B</h3><p>\u6839\u636E\u8BF7\u6C42\u65B9\u5F0F\u548C\u8BF7\u6C42\u5934\u7684\u4E0D\u540C, \u53EF\u4EE5\u5C06 CORS \u7684\u8BF7\u6C42\u5206\u4E3A\u4E24\u5927\u7C7B:</p><p>\u5206\u522B\u662F</p><ul><li>\u7B80\u5355\u8BF7\u6C42</li><li>\u9884\u68C0\u8BF7\u6C42</li></ul><h3 id="\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u7B80\u5355\u8BF7\u6C42</h3><p>\u6EE1\u8DB3\u4E00\u4E0B\u6761\u4EF6</p><ul><li>\u8BF7\u6C42\u65B9\u5F0F : GET, POST , HEAD \u4E09\u8005\u4E4B\u4E00</li><li>HTTP\u7684\u5934\u90E8\u4FE1\u606F\u4E0D\u8D85\u8FC7\u4EE5\u4E0B\u51E0\u79CD\u5B57\u6BB5 <img src="`+t+`" alt="\u56FE\u7247"></li></ul><h3 id="\u9884\u68C0\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9884\u68C0\u8BF7\u6C42" aria-hidden="true">#</a> \u9884\u68C0\u8BF7\u6C42</h3><p>\u53EA\u8981\u7B26\u5408\u4EFB\u4F55\u4E00\u4E2A\u6761\u4EF6\u7684\u8BF7\u6C42, \u90FD\u9700\u8981\u8FDB\u884C\u9884\u68C0\u8BF7\u6C42</p><ul><li>\u8BF7\u6C42\u65B9\u5F0F\u4E3A <strong>GET, POST, HEAD \u4E4B\u5916\u7684\u8BF7\u6C42 METHOD \u7C7B\u578B</strong></li><li><strong>\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u81EA\u5B9A\u4E49\u5934\u90E8\u5B57\u6BB5</strong></li><li>\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E86 <strong>application/json \u683C\u5F0F\u7684\u6570\u636E</strong></li></ul><p>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u6B63\u5F0F\u901A\u4FE1\u4E4B\u524D, \u6D4F\u89C8\u5668<strong>\u4F1A\u53D1\u9001 OPTION \u8BF7\u6C42\u8FDB\u884C\u9884\u68C0, \u5DF2\u83B7\u77E5\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8BE5\u5B9E\u9645\u8BF7\u6C42</strong>, \u6240\u4EE5\u8FD9\u6B21\u7684 OPTION \u8BF7\u6C42\u79F0\u4E3A&#39;\u9884\u68C0\u8BF7\u6C42&#39;, <strong>\u670D\u52A1\u5668\u6210\u529F\u54CD\u5E94\u9884\u68C0\u8BF7\u6C42\u540E, \u624D\u4F1A\u53D1\u9001\u771F\u6B63\u7684\u8BF7\u6C42, \u5E76\u4E14\u643A\u5E26\u771F\u5B9E\u6570\u636E</strong></p><h3 id="\u7B80\u5355\u8BF7\u6C42\u548C\u9884\u68C0\u8BF7\u6C42\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42\u548C\u9884\u68C0\u8BF7\u6C42\u7684\u533A\u522B" aria-hidden="true">#</a> \u7B80\u5355\u8BF7\u6C42\u548C\u9884\u68C0\u8BF7\u6C42\u7684\u533A\u522B</h3><ul><li><p>\u7B80\u5355\u8BF7\u6C42\u7684\u7279\u70B9: \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4<strong>\u53EA\u4F1A\u53D1\u751F\u4E00\u6B21\u8BF7\u6C42</strong></p></li><li><p>\u9884\u68C0\u8BF7\u6C42\u7684\u7279\u70B9: \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u53EA\u4F1A\u53D1\u751F\u4E24\u6B21\u8BF7\u6C42,<strong>OPTION \u9884\u68C0\u8BF7\u6C42\u6210\u529F\u4E4B\u540E, \u624D\u4F1A\u53D1\u8D77\u771F\u6B63\u7684\u8BF7\u6C42</strong></p></li></ul><h3 id="\u521B\u5EFA-jsonp-\u63A5\u53E3\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-jsonp-\u63A5\u53E3\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u521B\u5EFA JSONP \u63A5\u53E3\u7684\u6CE8\u610F\u4E8B\u9879</h3><p>\u5982\u679C\u9879\u76EE\u4E2D\u5DF2\u7ECF\u914D\u7F6E\u4E86 CORS , <strong>\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81, \u5FC5\u987B\u5728\u914D\u7F6E CORS \u4E2D\u95F4\u4EF6\u4E4B\u524D\u58F0\u660E JSONP \u7684\u63A5\u53E3</strong>, \u5426\u5219 JSONP \u63A5\u53E3\u4F1A\u88AB\u5904\u7406\u6210\u5F00\u542F\u4E86 CORS \u7684\u63A5\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F18\u5148\u521B\u5EFA jsonp \u7684\u63A5\u53E3 [\u8FD9\u4E2A\u63A5\u53E3\u4E0D\u4F1A\u88AB\u5904\u7406\u6210 CORS \u63A5\u53E3]</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/jsonp&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// TODO: \u63A5\u53E3\u5177\u4F53\u7684\u5B9E\u73B0\u8FC7\u7A0B</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/get&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5B9E\u73B0-jsonp-\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-jsonp-\u7684\u63A5\u53E3" aria-hidden="true">#</a> \u5B9E\u73B0 jsonp \u7684\u63A5\u53E3</h3><ol><li><strong>\u83B7\u53D6</strong>\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684<strong>\u56DE\u8C03\u51FD\u6570\u7684\u6CA1\u540D\u5B57</strong></li><li>\u5F97\u5230\u8981\u901A\u8FC7 JSONP \u7684\u5F62\u5F0F\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E</li><li>\u6839\u636E\u524D\u4E24\u90E8\u5F97\u5230\u7684\u6570\u636E, <strong>\u62FC\u63A5\u51FA\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u7684\u5B57\u7B26\u4E32</strong></li><li>\u628A\u4E0A\u4E00\u6B65\u62FC\u63A5\u5F97\u5230\u7684\u5B57\u7B26\u4E32, \u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u7684 <code>&lt;script&gt;</code> \u6807\u7B7E\u8FDB\u884C\u89E3\u6790\u6267\u884C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/jsonp&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. \u83B7\u53D6\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684\u56DE\u8C03\u51FD\u6570\u7684\u540D\u5B57</span>
  <span class="token keyword">const</span> functionName <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>callback
  <span class="token comment">// 2. \u5B9A\u4E49\u8981\u901A\u8FC7 jsonp \u5F62\u5F0F\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
  <span class="token comment">// 3. \u6839\u636E\u524D\u4E24\u90E8\u62FC\u63A5\u5B57\u7B26\u4E32, \u62FC\u63A5\u5904\u51FD\u6570\u8C03\u7528\u7684\u5B57\u7B26\u4E32</span>
  <span class="token keyword">const</span> scriptStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>functionName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
  <span class="token comment">// 4. \u628A\u5B57\u7B26\u4E32\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u7684 &lt;script&gt; \u6807\u7B7E\u8FDB\u884C\u89E3\u6790\u6267\u884C </span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>scriptStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,63);function c(l,r){return o}var u=n(e,[["render",c],["__file","jiekou.html.vue"]]);export{u as default};