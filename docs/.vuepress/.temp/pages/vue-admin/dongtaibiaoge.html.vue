<template><h1 id="动态表格渲染方案-文章排名业务实现" tabindex="-1"><a class="header-anchor" href="#动态表格渲染方案-文章排名业务实现" aria-hidden="true">#</a> 动态表格渲染方案 - 文章排名业务实现</h1>
<p>对于 <strong>文章排名</strong> 而言，核心的内容是围绕着表格处理来进行的。对应的核心业务主要有两个：</p>
<ol>
<li>文章排名切换</li>
<li>动态表格渲染</li>
</ol>
<p>这两个核心业务配合着其他的一些辅助功能：</p>
<ol>
<li>文章排名页面展示</li>
<li>文章详情页面展示</li>
</ol>
<h2 id="文章排名页面渲染" tabindex="-1"><a class="header-anchor" href="#文章排名页面渲染" aria-hidden="true">#</a> 文章排名页面渲染</h2>
<p><img src="@source/.vuepress/public/images/wenzhang1.png" alt="图片">
整个 <strong>文章排名</strong> 的页面渲染分成三个部分：</p>
<ol>
<li>顶部的动态展示区域</li>
<li>中间的 <code>table</code> 列表展示区域</li>
<li>底部的分页展示区域</li>
</ol>
<p>先去渲染第 2、3 两部分：</p>
<ol>
<li>创建 <code>api/article</code> 文件定义数据获取接口</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token doc-comment comment">/**
 * 获取列表数据
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getArticleList</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/article/list'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>在 <code>article-ranking</code> 中获取对应数据</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article-ranking-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span>
        <span class="token attr-name">border</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span>
        <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ranking<span class="token punctuation">"</span></span>
          <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.ranking<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
          <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
          <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.title<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
          <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span>
          <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.author<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
          <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>publicDate<span class="token punctuation">"</span></span>
          <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.publicDate<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.desc<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.action<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onShowClick(scope.row)<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ $t('msg.article.show') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
            <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRemoveClick(scope.row)<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ $t('msg.article.remove') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
            <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pagination<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">v-model:</span>currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">v-model:</span>page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size<span class="token punctuation">"</span></span>
        <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[5, 10, 20, 30]<span class="token punctuation">"</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">"</span></span>
        <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span>
        <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSizeChange<span class="token punctuation">"</span></span>
        <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCurrentChange<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getArticleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token comment">// 数据相关</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 文章列表</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 当前页码</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 每页条数</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 总数</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// loading 动画</span>

<span class="token comment">// 获取文章列表</span>
<span class="token keyword">const</span> <span class="token function-variable function">getListData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getArticleList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> page<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> size<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  tableData<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>list
  total<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>total
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 接口国际化处理</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span>getListData<span class="token punctuation">)</span>

<span class="token comment">// 查看按钮</span>
<span class="token keyword">const</span> <span class="token function-variable function">onShowClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(row._id)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 删除按钮</span>
<span class="token keyword">const</span> <span class="token function-variable function">onRemoveClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(row._id)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 每页条数改变</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pageSize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  size<span class="token punctuation">.</span>value <span class="token operator">=</span> pageSize
  <span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 页码改变</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleCurrentChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentPage</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  page<span class="token punctuation">.</span>value <span class="token operator">=</span> currentPage
  <span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.article-ranking-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token selector">.dynamic-box</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token selector">.title</span> <span class="token punctuation">{</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">::v-deep .el-table__row</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.pagination</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br></div></div><h2 id="相对时间与相对时间的国际化处理" tabindex="-1"><a class="header-anchor" href="#相对时间与相对时间的国际化处理" aria-hidden="true">#</a> 相对时间与相对时间的国际化处理</h2>
<p>在 <strong>发布时间</strong> 列中，我们希望展示相对时间，并且希望相对时间<strong>具备国际化</strong>的能力。那么就去需要到 <code>filters</code> 中对 <code>dayjs</code> 进行处理</p>
<ol>
<li>
<p>定义相对时间的处理方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> rt <span class="token keyword">from</span> <span class="token string">'dayjs/plugin/relativeTime'</span>

<span class="token operator">...</span>

<span class="token comment">// 加载相对时间插件</span>
dayjs<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">relativeTime</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token function">dayjs</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$filters <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    relativeTime
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li>
<li>
<p>在 <code>article-ranking</code> 中使用相对时间</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.publicDate<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ $filters.relativeTime(scope.row.publicDate) }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>接下来来处理国际化内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token comment">// 语言包</span>
<span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store'</span>

<span class="token operator">...</span>
<span class="token keyword">function</span> <span class="token function">relativeTime</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">'zh'</span> <span class="token operator">?</span> <span class="token string">'zh-cn'</span> <span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token function">dayjs</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
</ol>
<h2 id="动态表格原理与实现分析" tabindex="-1"><a class="header-anchor" href="#动态表格原理与实现分析" aria-hidden="true">#</a> 动态表格原理与实现分析</h2>
<p>所谓动态表格指的是：<strong>根据列的勾选，动态展示表格中的列</strong></p>
<p>那么同样把这一句话拆开来去看：</p>
<ol>
<li>展示可勾选的列</li>
<li>动态展示表格的列</li>
</ol>
<p>那么我们先来看第一部分 <strong>展示可勾选的列：</strong></p>
<p>可勾选的列通过 <code>el-checkbox</code> 来进行渲染。</p>
<p>所以只要我们有对应的数据，那么渲染自然也没有对应的难度。</p>
<p>然后看 <strong>动态展示表格的列：</strong></p>
<p>所谓 <strong>动态展示表格的列</strong> 指的就是 <strong>动态的渲染 <code>el-table-column</code></strong> ，那么怎么进行动态渲染<code>el-table-column</code>呢？</p>
<p>我们来看现在的 <code>el-table-column</code> 的渲染，在页面中我们写入了大量的 <code>el-table-column</code> 组件，那么对于这样的组件，我们想一下可不可以通过 <code>v-for</code> 进行渲染？</p>
<p>依赖于数据，通过 <code>v-for</code> 渲染  <code>el-table-column</code> ，当数据改变时 <code>el-table-column</code> 的渲染自然也就发生了变化，这样我们是不是就完成了 <strong>动态的渲染 <code>el-table-column</code></strong> 功能了？</p>
<p>所以以上两个功能，最核心的部分就是 <strong>列数据的指定</strong>，只要有了对应的数据，那么对应的渲染也就非常简单了</p>
<p>总结一下对应的实现步骤：</p>
<ol>
<li>构建列数据（核心）</li>
<li>根据数据，通过 <code>el-checkbox</code> 渲染可勾选的列</li>
<li>根据数据，通过 <code>v-for</code> 动态渲染  <code>el-table-column</code></li>
</ol>
<h3 id="动态列数据构建" tabindex="-1"><a class="header-anchor" href="#动态列数据构建" aria-hidden="true">#</a> 动态列数据构建</h3>
<p>因为我们要在 <code>article-ranking</code> 中处理多个业务，如果我们把所有的业务处理都写到 <code>article-ranking</code> 中，那么对应的组件就过于复杂了，所以说我们把所有的 <strong>动态列表</strong> 相关的业务放入到 <code>article-ranking/dynamic</code> 文件夹中</p>
<ol>
<li>创建 <code>article-ranking/dynamic/DynamicData</code> 文件，用来指定初始的 <strong>列数据</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span>t <span class="token comment">// 简化函数</span>

<span class="token comment">// 动态列的数据源</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
  <span class="token comment">// 必须导出一个函数, 不能直接return 数组</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'ranking'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.ranking'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.title'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'author'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.author'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'publicDate'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.publicDate'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.desc'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2">
<li>
<p>创建 <code>article-ranking/dynamic/index</code> 文件，对外暴露出</p>
</li>
<li>
<p>动态列数据</p>
</li>
<li>
<p>被勾选的动态列数据</p>
</li>
<li>
<p>table 的列数据</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 1. 动态的列数据 : 被 v-for 循环的列数据
 * 2. 被勾选的动态列数据
 * 3. table 的列数据
 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> DynamicData <span class="token keyword">from</span> <span class="token string">'./DynamicData'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>

<span class="token comment">// 暴露出动态的列数据</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> dynamicData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">DynamicData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  dynamicData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">DynamicData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">initSelectDynamicLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 被勾选的动态列数据</span>
<span class="token comment">// checkbox 而言它的 label值 就是值</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> selectDynamicLabel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 默认全部勾选</span>
<span class="token keyword">const</span> <span class="token function-variable function">initSelectDynamicLabel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  selectDynamicLabel<span class="token punctuation">.</span>value <span class="token operator">=</span> dynamicData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">initSelectDynamicLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// table 的列数据</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> tableColumns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token comment">// 监听勾选label数组的变化, 筛选出被选中中的对象</span>
  selectDynamicLabel<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">labels</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tableColumns<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 先置空</span>
    <span class="token keyword">const</span> selectData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    dynamicData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>labels<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        selectData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    tableColumns<span class="token punctuation">.</span>value <span class="token operator">=</span> selectData
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 注意: watch 可以直接接受一个 ref , 并且 newValue 和 oldValue 是.value 本身, 不需要解构</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="实现动态表格能力" tabindex="-1"><a class="header-anchor" href="#实现动态表格能力" aria-hidden="true">#</a> 实现动态表格能力</h3>
<p>那么现在有了数据之后，就可以实现对应的动态表格功能了</p>
<ol>
<li>
<p>在 <code>article-ranking</code> 中渲染 <strong>动态表格的 <code>check</code></strong></p>
</li>
<li>
<p>导入动态表格的 <code>check</code> 数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> dynamicData<span class="token punctuation">,</span> selectDynamicLabel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./dynamic'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>完成动态表格的 <code>check</code> 渲染
<img src="@source/.vuepress/public/images/dongtaizhanshi1.png" alt="图片"></p>
</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamic-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.article.dynamicTitle') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectDynamicLabel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in dynamicData<span class="token punctuation">"</span></span>
            <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.label<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox-group</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>勾选的时候 v-model 绑定的 selectDynamicLabel 会自动变化 , 然后会执行之前封装的 watch, 会自动过滤, 然后下面 v-for 渲染</p>
<ol start="4">
<li>
<p>导入动态列数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">,</span>  tableColumns <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./dynamic'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>完成动态列渲染</p>
</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span>
        <span class="token attr-name">border</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span>
        <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in tableColumns<span class="token punctuation">"</span></span>
          <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.prop<span class="token punctuation">"</span></span>
          <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.label<span class="token punctuation">"</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.prop === <span class="token punctuation">'</span>publicDate<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{$filters.relativeTime(scope.row.publicDate)}}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.article.action<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onShowClick(scope.row)<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ $t('msg.article.show') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
            <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRemoveClick(scope.row)<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ $t('msg.article.remove') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
            <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>对于动态表格而言，没有涉及到新的技术点，主要是对现有技术的一个灵活使用</p>
<p>把动态表格拆开来去看，主要就是分成了两部分：</p>
<ol>
<li>展示可勾选的列</li>
<li>动态展示表格的列</li>
</ol>
<p>对于这两部分而言，核心的就是 <strong>数据</strong>。只要可以实现对应的数据，那么想要实现这两个功能就非常简单</p>
<h2 id="拖拽排序原理与实现分析" tabindex="-1"><a class="header-anchor" href="#拖拽排序原理与实现分析" aria-hidden="true">#</a> 拖拽排序原理与实现分析</h2>
<p>接下来实现 <strong>表格拖动排序</strong> 的功能</p>
<p>对于这个功能，需要先来分析一下它的具体业务：</p>
<ol>
<li>鼠标在某一行中按下</li>
<li>移动鼠标位置</li>
<li>产生对应的替换样式</li>
<li>鼠标抬起，表格行顺序发生变化</li>
</ol>
<p>依据以上的业务，那么实现该功能的核心就在于：<strong>监听鼠标事件，完成对应的 UI 视图处理</strong></p>
<p>具体来说：</p>
<ol>
<li>监听鼠标的按下事件</li>
<li>监听鼠标的移动事件</li>
<li>生成对应的 <code>UI</code> 样式</li>
<li>监听鼠标的抬起事件</li>
</ol>
<p>那么对于以上的原理而言，想要落实到具体的代码中，其实还是比较复杂的。</p>
<p>但是在现在的前端开发中，只要有对应的需求，那么在大多数的情况下都会存在对应的轮子（并且不止一个）。所以这里依然会借助对应的轮子来去实现</p>
<p>这个轮子就是 <a href="https://www.npmjs.com/package/sortablejs" target="_blank" rel="noopener noreferrer">sortablejs<ExternalLinkIcon/></a>：用于在列表中实现拖动排序</p>
<p>整个 <strong>拖动排序</strong> 的核心实现，就是围绕着 <a href="https://www.npmjs.com/package/sortablejs" target="_blank" rel="noopener noreferrer">sortablejs<ExternalLinkIcon/></a> 来进行的</p>
<ol>
<li>利用 <a href="https://www.npmjs.com/package/sortablejs" target="_blank" rel="noopener noreferrer">sortablejs<ExternalLinkIcon/></a> 实现表格拖拽功能</li>
<li>在拖拽完成后，调用接口完成排序</li>
</ol>
<h3 id="实现表格拖拽功能" tabindex="-1"><a class="header-anchor" href="#实现表格拖拽功能" aria-hidden="true">#</a> 实现表格拖拽功能</h3>
<ol>
<li>
<p>下载 <strong>sortablejs</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i sortablejs@1.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>创建 <code>article-ranking/sortable/index</code> 文件，完成 <code>sortable</code> 初始化</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Sortable <span class="token keyword">from</span> <span class="token string">'sortablejs'</span>

<span class="token comment">// 排序相关</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> tableRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
* 初始化排序
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">initSortable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tableData<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token comment">// 设置拖拽效果</span>
 <span class="token keyword">const</span> el <span class="token operator">=</span> tableRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>
   <span class="token string">'.el-table__inner-wrapper > .el-table__body-wrapper > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > table > tbody'</span>
 <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token comment">// 1. 要拖拽的元素</span>
 <span class="token comment">// 2. 配置对象</span>
 Sortable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token comment">// 拖拽时类名</span>
   <span class="token literal-property property">ghostClass</span><span class="token operator">:</span> <span class="token string">'sortable-ghost'</span><span class="token punctuation">,</span>
   <span class="token comment">// 拖拽结束的回调方法</span>
   <span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="3">
<li>
<p>在 <code>article-ranking</code> 中导入 <code>tableRef, initSortable</code>，并完成初始化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tableRef<span class="token punctuation">,</span> initSortable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./sortable'</span>

  <span class="token operator">&lt;</span>el<span class="token operator">-</span>table
     <span class="token operator">...</span>
     ref<span class="token operator">=</span><span class="token string">"tableRef"</span>
   <span class="token operator">></span>
<span class="token comment">// 表格拖拽相关</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">initSortable</span><span class="token punctuation">(</span>tableData<span class="token punctuation">,</span> getListData<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>指定拖拽时的样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">::v-deep .sortable-ghost</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #304156 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ol>
<h3 id="完成拖拽后的排序" tabindex="-1"><a class="header-anchor" href="#完成拖拽后的排序" aria-hidden="true">#</a> 完成拖拽后的排序</h3>
<p>完成拖拽后的排序主要是在 <strong>拖拽结束的回调方法</strong> 中进行。</p>
<p>需要在 拖拽结束的回调方法 中调用对应的服务端接口完成持久化的排序</p>
<ol>
<li>
<p>在 <code>api/article</code> 中定义排序接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 修改排序
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">articleSort</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/article/sort'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>在拖拽结束的回调方法中调用接口</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Sortable <span class="token keyword">from</span> <span class="token string">'sortablejs'</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'@/i18n'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> articleSort <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>
<span class="token comment">// 排序相关</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> tableRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 初始化排序
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">initSortable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tableData<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置拖拽效果</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> tableRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>
    <span class="token string">'.el-table__inner-wrapper > .el-table__body-wrapper > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > table > tbody'</span>
  <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">// 1. 要拖拽的元素</span>
  <span class="token comment">// 2. 配置对象</span>
  Sortable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 拖拽时类名</span>
    <span class="token literal-property property">ghostClass</span><span class="token operator">:</span> <span class="token string">'sortable-ghost'</span><span class="token punctuation">,</span>
    <span class="token comment">// 拖拽结束的回调方法</span>
    <span class="token keyword">async</span> <span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> newIndex<span class="token punctuation">,</span> oldIndex <span class="token punctuation">}</span> <span class="token operator">=</span> event
      <span class="token comment">// 修改数据</span>
      <span class="token keyword">await</span> <span class="token function">articleSort</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">initRanking</span><span class="token operator">:</span> tableData<span class="token punctuation">.</span>value<span class="token punctuation">[</span>oldIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>ranking<span class="token punctuation">,</span>
        <span class="token literal-property property">finalRanking</span><span class="token operator">:</span> tableData<span class="token punctuation">.</span>value<span class="token punctuation">[</span>newIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>ranking
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.sortSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 直接重新获取数据无法刷新 table！！所以先置空</span>
      tableData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token comment">// 再重新获取数据</span>
      cb <span class="token operator">&amp;&amp;</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3>
<p>整个拖拽排序的功能我们围绕着 <a href="https://www.npmjs.com/package/sortablejs" target="_blank" rel="noopener noreferrer">sortablejs<ExternalLinkIcon/></a> 来去进行实现\</p>
<p><a href="https://www.npmjs.com/package/sortablejs" target="_blank" rel="noopener noreferrer">sortablejs<ExternalLinkIcon/></a> 提供了对于 <code>table</code> 的一个排序能力，只需要利用这个能力，并且在拖拽完成之后，对数据的排序进行一个持久化的存储即可</p>
<h2 id="文章删除" tabindex="-1"><a class="header-anchor" href="#文章删除" aria-hidden="true">#</a> 文章删除</h2>
<p>定义删除接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 删除文章</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deleteArticle</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/article/delete/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>为删除按钮添加点击事件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRemoveClick(scope.row)<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ $t('msg.article.remove') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
<span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>处理删除操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessageBox<span class="token punctuation">,</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>

<span class="token comment">// 删除按钮</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onRemoveClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>
    i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.dialogTitle1'</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      row<span class="token punctuation">.</span>title <span class="token operator">+</span>
      i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.dialogTitle2'</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">deleteArticle</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.article.removeSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// 重新获取数据</span>
      <span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="文章详情展示" tabindex="-1"><a class="header-anchor" href="#文章详情展示" aria-hidden="true">#</a> 文章详情展示</h2>
<p>对于文章详情的展示而言，主要是为了配合 <strong>创建文章</strong> 的功能而产生的。</p>
<p>文章详情中包含一个 <strong>编辑</strong> 按钮，用于对文章的编辑功能。与 <strong>创建文章</strong> 配合，达到相辅相成的目的</p>
<p>但是现在 <strong>创建文章</strong> 尚未实现，所以 <strong>编辑文章</strong> 也就暂时无从谈起，所以此时仅先实现 <strong>文章详情展示</strong> 的功能，后续在完成了 <strong>创建文章</strong> 之后，再去实现 <strong>文章编辑</strong></p>
<ol>
<li>
<p>在 <code>api/article</code> 中定义获取文章详情接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取文章详情
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">articleDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">articleId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/article/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>articleId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>在 <code>article-detail</code> 中获取文章详情数据</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> articleDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/article'</span>

<span class="token comment">// 获取数据</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> articleId <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
<span class="token keyword">const</span> detail <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getArticleDetail</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  detail<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">articleDetail</span><span class="token punctuation">(</span>articleId<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getArticleDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
<li>
<p>根据数据渲染视图</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article-detail-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ detail.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>{{ $t('msg.article.author') }}：{{ detail.author }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
      <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>{{ $t('msg.article.publicDate') }}：{{
          $filters.relativeTime(detail.publicDate)
        }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
      <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
        $t('msg.article.edit')
      }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>detail.content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.article-detail-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 12px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 26px 0<span class="token punctuation">;</span>
    <span class="token selector">.author</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #555666<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.time</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #999aaa<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.edit</span> <span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #d4d4d4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></li>
<li>
<p>点击进入详情页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 查看按钮点击事件
 */</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onShowClick</span> <span class="token operator">=</span> <span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/article/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>row<span class="token punctuation">.</span>_id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ol>
</template>
