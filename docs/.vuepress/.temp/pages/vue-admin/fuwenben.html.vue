<template><h1 id="富文本和-markdown-之-创建文章" tabindex="-1"><a class="header-anchor" href="#富文本和-markdown-之-创建文章" aria-hidden="true">#</a> 富文本和 markdown 之 创建文章</h1>
<h2 id="创建文章基本结构实现" tabindex="-1"><a class="header-anchor" href="#创建文章基本结构实现" aria-hidden="true">#</a> 创建文章基本结构实现</h2>
<p>完成 <strong>创建文章</strong> 的基本结构，主要分成三部分：</p>
<ol>
<li><code>article-create</code> 页面：基本结构</li>
<li><code>Editor</code> 组件：富文本编辑器</li>
<li><code>Markdown</code> 组件：<code>markdown</code> 编辑器</li>
</ol>
<p>那么明确好了之后，我们就去进行对应的实现：</p>
<ol>
<li>创建 <code>views/article-create/components/Editor</code></li>
<li>创建 <code>views/article-create/components/Markdown</code></li>
<li>在 <code>views/article-create</code> 完成基本结构
<img src="@source/.vuepress/public/images/fuwenben1.png" alt="图片"></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article-create<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title-input<span class="token punctuation">"</span></span>
        <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.titlePlaceholder<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
        <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span>
        <span class="token attr-name">clearable</span>
      <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.markdown<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>markdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>markdown</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>markdown</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.richText<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>editor</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>editor</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> markdown <span class="token keyword">from</span> <span class="token string">"./components/markdown.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> editor <span class="token keyword">from</span> <span class="token string">"./components/editor.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标题</span>
<span class="token keyword">const</span> activeName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"markdown"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.title-input</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="新建文章" tabindex="-1"><a class="header-anchor" href="#新建文章" aria-hidden="true">#</a> 新建文章</h2>
<p>选择了以下的编辑器库：</p>
<ol>
<li><code>markdown</code> 编辑器：<a href="https://github.com/nhn/tui.editor" target="_blank" rel="noopener noreferrer">tui.editor<ExternalLinkIcon/></a></li>
<li>富文本编辑器：<a href="https://github.com/wangeditor-team/wangEditor" target="_blank" rel="noopener noreferrer">wangEditor<ExternalLinkIcon/></a></li>
</ol>
<h3 id="markdown-实现" tabindex="-1"><a class="header-anchor" href="#markdown-实现" aria-hidden="true">#</a> markdown 实现</h3>
<p>我们通过 <a href="https://github.com/nhn/tui.editor" target="_blank" rel="noopener noreferrer">tui.editor<ExternalLinkIcon/></a> 实现 <code>markdown</code> 的编辑功能：</p>
<ol>
<li>
<p>下载 <a href="https://github.com/nhn/tui.editor" target="_blank" rel="noopener noreferrer">tui.editor<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i @toast-ui/editor@3.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>渲染基本结构</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>markdown-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 渲染区 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>markdown-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmitClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
        $t("msg.article.commit")
      }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.markdown-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.bottom</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="3">
<li>初始化 <code>editor</code> ，处理国际化内容</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MkEditor <span class="token keyword">from</span> <span class="token string">"@toast-ui/editor"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@toast-ui/editor/dist/toastui-editor.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@toast-ui/editor/dist/i18n/zh-cn"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>

<span class="token comment">// Editor实例</span>
<span class="token keyword">let</span> mkEditor<span class="token punctuation">;</span>
<span class="token comment">// 处理离开页面切换语言导致 dom 无法被获取</span>
<span class="token keyword">let</span> el<span class="token punctuation">;</span>

<span class="token comment">// 要在 dom 挂载够获取 el 元素 , 并且把编辑器挂载到 指定dom 中 </span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#markdown-box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">initEditor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 初始化编辑器实例的函数</span>
  mkEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MkEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
    <span class="token comment">// el</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> el<span class="token punctuation">,</span>
    <span class="token comment">// 高度</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"500px"</span><span class="token punctuation">,</span>
    <span class="token comment">// 样式</span>
    <span class="token literal-property property">previewStyle</span><span class="token operator">:</span> <span class="token string">"vertical"</span><span class="token punctuation">,</span>
    <span class="token comment">// 国际化</span>
    <span class="token literal-property property">language</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">"zh"</span> <span class="token operator">?</span> <span class="token string">"zh-CN"</span> <span class="token operator">:</span> <span class="token string">"en"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mkEditor<span class="token punctuation">.</span><span class="token function">getMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ol start="4">
<li>在语言改变时，重置 <code>editor</code></li>
</ol>
<p>解决办法 : 监听语言的变化, 用变量保存当前编辑器里面的内容, 销毁再重建编辑器, 把原来保存的变量赋值给新创建出的编辑器实例中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/i18n"</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token comment">// 编辑器的国际化处理</span>
<span class="token comment">// 问题: 问题在于, 切换语言功能无法同步, 刷新页面才生效</span>
<span class="token comment">// 解决办法 : 监听语言的变化, 用变量保存当前编辑器里面的内容, 销毁再重建编辑器, 把原来保存的变量赋值给新创建出的编辑器实例中</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> mkEditor<span class="token punctuation">.</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  mkEditor<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">initEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  mkEditor<span class="token punctuation">.</span><span class="token function">setHTML</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="markdown-提交" tabindex="-1"><a class="header-anchor" href="#markdown-提交" aria-hidden="true">#</a> markdown 提交</h2>
<ol>
<li>
<p>在 <code>api/article.js</code> 中，定义创建文章接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 创建文章
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createArticle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/article/create'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>因为 <code>markdown</code> 或者是 <code>富文本</code> 最终都会处理提交文章事件，所以可以把这两件事情合并到一个模块中封装</p>
</li>
<li>
<p>创建 <code>article-create/components/commit.js</code></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 封装创建文章函数</span>
<span class="token comment">// 因为在markdown 编辑器和 富文本编辑器中 都会 有创建文章 环节</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span>t

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">commitArticle</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createArticle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.createSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4">
<li>在 <code>markdown.vue</code> 中导入该方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> commitArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./commit'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>触发按钮提交文章事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> commitArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./commit'</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'onSuccess'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token operator">...</span>
<span class="token comment">// 点击提交文章</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSubmitClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">commitArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> mkEditor<span class="token punctuation">.</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  mkEditor<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 重置 编辑器</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'onSuccess'</span><span class="token punctuation">)</span> <span class="token comment">// 通知父亲把 title 置空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="6">
<li>通知父亲, 即 <code>article-create</code> 中传递 <code>title</code>的 title 置空，监听处理 <code>onSuccess</code> 事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>markdown <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"title"</span> @onSuccess<span class="token operator">=</span><span class="token string">"onSuccess"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>markdown<span class="token operator">></span>

<span class="token comment">// markdown 编辑器出来的事件 onSuccess</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  title<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">// 把 title 置空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="markdown-文章编辑" tabindex="-1"><a class="header-anchor" href="#markdown-文章编辑" aria-hidden="true">#</a> markdown 文章编辑</h3>
<ol>
<li>在 <code>article-detail</code> 中点击编辑按钮，进入创建文章页面</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onEditClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/article/editor/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>articleId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>在 <code>article-create</code> 中，处理 <strong>编辑</strong> 相关操作 (文章创建 和 文章编辑 使用的是同一个页面组件, 只是路径不同)</li>
<li>获取当前文章数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> articleDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>

<span class="token operator">...</span>
<span class="token comment">// 文章编辑相关</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> articleId <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
<span class="token keyword">const</span> detail <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 当前文章详情</span>
<span class="token keyword">const</span> <span class="token function-variable function">getArticleDetail</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">articleDetail</span><span class="token punctuation">(</span>articleId<span class="token punctuation">)</span>
  detail<span class="token punctuation">.</span>value <span class="token operator">=</span> res
  title<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>title
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>articleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getArticleDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="4">
<li>把获取到的数据传递给 <code>markdown</code> 组件</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>markdown</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">@onSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSuccess<span class="token punctuation">"</span></span> <span class="token attr-name">:detail</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>detail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>markdown</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>在 <code>markdown</code> 中接收该 detail 数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="6">
<li>并且<strong>检测数据变化</strong>，存在 <code>detail</code> 时，把 <code>detail</code> 赋值给 <code>mkEditor</code>, mkEditor.setHTML()</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>detail<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mkEditor<span class="token punctuation">.</span><span class="token function">setHTML</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>content<span class="token punctuation">)</span> <span class="token comment">// 设置编辑器的内容</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="7">
<li>创建 <strong>编辑文章</strong> 接口</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 编辑文章详情
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">articleEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/article/edit'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="8">
<li>在 <code>commit.js</code> 中生成 <strong>编辑文章</strong> 方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createArticle<span class="token punctuation">,</span> articleEdit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span>t

<span class="token operator">...</span><span class="token punctuation">.</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">editArticle</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">articleEdit</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.editorSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="9">
<li>在 <code>markdown</code> 中处理提交按钮事件, 是否 创建文章/编辑文章 判断依据是什么 ? 是<strong>存不存在</strong> props.detail._i</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> commitArticle<span class="token punctuation">,</span> editArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./commit'</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token comment">// 点击提交文章</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSubmitClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>detail <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 编辑文章</span>
    <span class="token keyword">await</span> <span class="token function">editArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>_id<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> mkEditor<span class="token punctuation">.</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建文章</span>
    <span class="token keyword">await</span> <span class="token function">commitArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> mkEditor<span class="token punctuation">.</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    mkEditor<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'onSuccess'</span><span class="token punctuation">)</span> <span class="token comment">// 通知父亲把 title 置空</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="富文本的实现" tabindex="-1"><a class="header-anchor" href="#富文本的实现" aria-hidden="true">#</a> 富文本的实现</h3>
<p>这节跟markdown做法思路一样</p>
<p>富文本要使用 <a href="https://github.com/wangeditor-team/wangEditor" target="_blank" rel="noopener noreferrer">wangEditor<ExternalLinkIcon/></a>，所以先去下载 <a href="https://github.com/wangeditor-team/wangEditor" target="_blank" rel="noopener noreferrer">wangEditor<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i wangeditor@4.7.6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完成之后，我们就去实现对应的代码逻辑：</p>
<ol>
<li>创建基本组件结构</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editor-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--富文本--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editor-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmitClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
        $t('msg.article.commit')
      }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.editor-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.bottom</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol start="2">
<li>初始化 <code>wangEditor</code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token constant">E</span> <span class="token keyword">from</span> <span class="token string">'wangeditor'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// Editor实例</span>
<span class="token keyword">let</span> editor
<span class="token comment">// 处理离开页面切换语言导致 dom 无法被获取</span>
<span class="token keyword">let</span> el
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#editor-box'</span><span class="token punctuation">)</span>
  <span class="token function">initEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">initEditor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">E</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token comment">// 菜单栏提示</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showMenuTooltips <span class="token operator">=</span> <span class="token boolean">true</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menuTooltipPosition <span class="token operator">=</span> <span class="token string">'down'</span>
  editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ol start="3">
<li>
<p>wangEditor<code> 的 [国际化处理](https://www.wangeditor.com/doc/pages/12-%E5%A4%9A%E8%AF%AD%E8%A8%80/)，官网支持 [i18next](https://www.i18next.com/)，所以想要处理</code>wangEditor` 的国际化，那么需要安装 <a href="https://www.i18next.com/" target="_blank" rel="noopener noreferrer">i18next<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save i18next@20.4.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>对 <code>wangEditor</code> 进行国际化处理</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> i18next <span class="token keyword">from</span> <span class="token string">'i18next'</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token function-variable function">initEditor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">E</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token comment">// 菜单栏提示</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showMenuTooltips <span class="token operator">=</span> <span class="token boolean">true</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menuTooltipPosition <span class="token operator">=</span> <span class="token string">'down'</span>
  
  <span class="token comment">// 国际化相关处理</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>lang <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">'zh'</span> <span class="token operator">?</span> <span class="token string">'zh-CN'</span> <span class="token operator">:</span> <span class="token string">'en'</span>
  editor<span class="token punctuation">.</span>i18next <span class="token operator">=</span> i18next

  editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2">
<li>处理提交事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> defineProps<span class="token punctuation">,</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> commitArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./commit'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'onSuccess'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSubmitClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建文章</span>
  <span class="token keyword">await</span> <span class="token function">commitArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'onSuccess'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="6">
<li>不要忘记在 <code>article-create</code> 中处理对应事件</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>editor</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
    <span class="token attr-name">:detail</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>detail<span class="token punctuation">"</span></span>
    <span class="token attr-name">@onSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSuccess<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>editor</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="7">
<li>最后处理编辑路基</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token constant">E</span> <span class="token keyword">from</span> <span class="token string">'wangeditor'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> defineProps<span class="token punctuation">,</span> defineEmits<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> i18next <span class="token keyword">from</span> <span class="token string">'i18next'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> commitArticle<span class="token punctuation">,</span> editArticle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./commit'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'onSuccess'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>detail<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Editor实例</span>
<span class="token keyword">let</span> editor
<span class="token comment">// 处理离开页面切换语言导致 dom 无法被获取</span>
<span class="token keyword">let</span> el
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#editor-box'</span><span class="token punctuation">)</span>
  <span class="token function">initEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">initEditor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">E</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token comment">// 菜单栏提示</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showMenuTooltips <span class="token operator">=</span> <span class="token boolean">true</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menuTooltipPosition <span class="token operator">=</span> <span class="token string">'down'</span>
  <span class="token comment">// 国际化相关处理</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>lang <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">'zh'</span> <span class="token operator">?</span> <span class="token string">'zh-CN'</span> <span class="token operator">:</span> <span class="token string">'en'</span>
  editor<span class="token punctuation">.</span>i18next <span class="token operator">=</span> i18next
  editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmitClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>detail <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 编辑文章</span>
    <span class="token keyword">await</span> <span class="token function">editArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>detail_id<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前内容从编辑器直接获取</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建文章</span>
    <span class="token keyword">await</span> <span class="token function">commitArticle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'onSuccess'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div></template>
