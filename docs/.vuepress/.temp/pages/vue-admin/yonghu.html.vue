<template><h1 id="excel-、zip-与前端结合解决方案-用户管理页面实现" tabindex="-1"><a class="header-anchor" href="#excel-、zip-与前端结合解决方案-用户管理页面实现" aria-hidden="true">#</a> excel 、zip 与前端结合解决方案 - 用户管理页面实现</h1>
<p>整个用户相关的模块分为三部分：</p>
<ol>
<li>员工管理</li>
<li>角色列表</li>
<li>权限列表</li>
</ol>
<p>现在要来处理的就是 <strong>员工管理</strong> 模块的内容，整个 <strong>员工管理</strong> 模块可以分为以下功能：</p>
<ol>
<li>用户列表分页展示</li>
<li><code>excel</code> 导入用户</li>
<li>用户列表导出为 <code>excel</code></li>
<li>用户详情的表格展示</li>
<li>用户详情表格打印</li>
<li>用户删除</li>
<li>用户角色分配（需要在完成角色列表之后处理）</li>
</ol>
<h2 id="用户列表分页展示" tabindex="-1"><a class="header-anchor" href="#用户列表分页展示" aria-hidden="true">#</a> 用户列表分页展示</h2>
<p>首先我们先来处理最基础的 <strong>用户列表分页展示</strong> 功能，整个功能大体可以分为两步：</p>
<ol>
<li>
<p>获取分页数据</p>
</li>
<li>
<p>利用 <a href="https://element-plus.org/zh-CN/component/table.html" target="_blank" rel="noopener noreferrer">el-table<ExternalLinkIcon/></a> 和 <a href="https://element-plus.org/zh-CN/component/pagination.html" target="_blank" rel="noopener noreferrer">el-pagination<ExternalLinkIcon/></a> 渲染数据</p>
</li>
<li>
<p>创建 <code>api/user-manage</code> 文件，用于定义接口</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token doc-comment comment">/**
 * 获取用户列表数据
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserManageList</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user-manage/list'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>在 <code>user-manage</code> 中获取对应数据, 渲染 UI 机构</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-manage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userManageList<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.name<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>140<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mobile<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.mobile<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.avatar<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>140<span class="token punctuation">"</span></span>
        <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-avatar</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope.row.avatar<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-avatar</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>role<span class="token punctuation">"</span></span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.role<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in scope.row.role<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
            item.title
          }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openTIme<span class="token punctuation">"</span></span>
        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.openTime<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>140<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ scope.row.openTime }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.action<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>角色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delete scope.row.id<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
          <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">v-model:</span>page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size<span class="token punctuation">"</span></span>
      <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[2, 5, 10, 20]<span class="token punctuation">"</span></span>
      <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">"</span></span>
      <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span>
      <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSizeChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCurrentChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserManageList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 页码</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 每页条数</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 总数</span>
<span class="token keyword">const</span> userManageList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 员工列表</span>
<span class="token keyword">const</span> <span class="token function-variable function">getUserManageListData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserManageList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> page<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> size<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  total<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>total
  userManageList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>list
<span class="token punctuation">}</span>
<span class="token function">getUserManageListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 监听语言变化</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span>getUserManageListData<span class="token punctuation">)</span>

<span class="token comment">// size 改变触发</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pageSize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  size<span class="token punctuation">.</span>value <span class="token operator">=</span> pageSize
  <span class="token function">getUserManageListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 页码 改变触发</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleCurrentChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentPage</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  page<span class="token punctuation">.</span>value <span class="token operator">=</span> currentPage
  <span class="token function">getUserManageListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="全局属性处理-时间展示问题" tabindex="-1"><a class="header-anchor" href="#全局属性处理-时间展示问题" aria-hidden="true">#</a> 全局属性处理 - 时间展示问题</h2>
<p>在 <code>Vue3</code>中取消了 <a href="https://v3.cn.vuejs.org/guide/migration/filters.html" target="_blank" rel="noopener noreferrer">过滤器的概念<ExternalLinkIcon/></a>，其中：</p>
<ol>
<li>
<p>局部过滤器被完全删除</p>
</li>
<li>
<p>全局过滤器虽然被移除，但是可以使用 app.config.globalProperties <a href="https://cn.vuejs.org/api/application.html#app-config-globalproperties" target="_blank" rel="noopener noreferrer">全局属性<ExternalLinkIcon/></a> 进行替代</p>
</li>
<li>
<p>时间处理部分我们通过 <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">Day.js<ExternalLinkIcon/></a> 进行处理</p>
</li>
<li>
<p>下载 <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">Day.js<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i dayjs@1.10.6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li>创建 <code>src/filter</code> 文件夹，用于定义 <a href="https://v3.cn.vuejs.org/api/application-config.html#globalproperties" target="_blank" rel="noopener noreferrer">全局属性<ExternalLinkIcon/></a></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span>

<span class="token keyword">const</span> dateFilter <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">,</span> format <span class="token operator">=</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$filters <span class="token operator">=</span> <span class="token punctuation">{</span>
    dateFilter
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
<li>
<p>在 <code>main.js</code> 中导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// filter</span>
<span class="token keyword">import</span> installFilter <span class="token keyword">from</span> <span class="token string">'@/filters'</span>

<span class="token function">installFilter</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>在 <code>user-manage</code> 中使用全局属性处理时间解析</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.openTime<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ row }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ $filters.dateFilter(row.openTime) }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ol>
<h2 id="excel-导入-导出" tabindex="-1"><a class="header-anchor" href="#excel-导入-导出" aria-hidden="true">#</a> excel 导入 / 导出</h2>
<h3 id="_1-excel-导入原理与实现分析" tabindex="-1"><a class="header-anchor" href="#_1-excel-导入原理与实现分析" aria-hidden="true">#</a> 1) excel 导入原理与实现分析</h3>
<p>对于 <strong>excel 导入</strong> 首先我们先来明确一下它的业务流程：</p>
<ol>
<li>点击  <strong>excel 导入</strong> 按钮进入  <strong>excel 导入页面</strong></li>
<li>页面提供了两种导入形式
<ol>
<li>点击按钮上传 <code>excel</code></li>
<li>把 <code>excel</code> 拖入指定区域</li>
</ol>
</li>
<li>选中文件，进行两步操作
<ol>
<li>解析 <code>excel</code> 数据</li>
<li>上传解析之后的数据</li>
</ol>
</li>
<li>上传成功之后，返回 <strong>员工管理（用户列表）</strong> 页面，进行数据展示</li>
</ol>
<p>所以根据这个业务可以看出，整个 <code>excel</code> 导入核心的原理部分在于 <strong>选中文件之后，上传成功之前</strong> 的操作，即：</p>
<ol>
<li>解析 <code>excel</code> 数据（<strong>最重要</strong>）</li>
<li>上传解析之后的数据</li>
</ol>
<p>根据上面所说，整个的实现流程也可以很轻松得出：</p>
<ol>
<li>创建 <code>excel</code> 导入页面</li>
<li>点击 <code>excel</code> 导入按钮，进入该页面</li>
<li>该页面提供两种文件导入形式</li>
<li>选中文件之后，解析 <code>excel</code> 数据（核心）</li>
<li>上传解析之后的数据</li>
<li>返回 员工管理（用户列表） 页面</li>
</ol>
<h3 id="_2-提供两种文件导入形式" tabindex="-1"><a class="header-anchor" href="#_2-提供两种文件导入形式" aria-hidden="true">#</a> 2) 提供两种文件导入形式</h3>
<p><code>excel</code> 页面在之前已经创建过了，就是 <code>views/import/index</code></p>
<p>所以此处，只需要在按钮处完成页面跳转即可，在 <code>user-manage</code> 中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> @click<span class="token operator">=</span><span class="token string">"onImportExcelClick"</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">$t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.importExcel'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button
        <span class="token operator">></span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * excel 导入点击事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onImportExcelClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/user/import'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这样就已经完成了前面两步，接下来实现 <strong>提供两种文件导入形式</strong></p>
<ol>
<li>创建 <code>components/UploadExcel</code> <strong>组件</strong>，用于处理上传 <code>excel</code> 相关的问题</li>
<li>在 <code>user/import.js</code> 中导入该组件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>upload</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>upload</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Upload <span class="token keyword">from</span> <span class="token string">'@/components/Upload/index.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3">
<li>整个 <code>UploadExcel</code> 组件的内容可以分成两部分：
<ol>
<li>样式</li>
<li>逻辑</li>
</ol>
</li>
<li>那么首先先处理样式内容</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upload-excel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleUpload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{ $t('msg.uploadExcel.upload') }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excelUploadInput<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excel-upload-input<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span>
      <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.xlsx, .xls<span class="token punctuation">"</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>drop<span class="token punctuation">"</span></span>
      <span class="token attr-name">@drop.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDrop<span class="token punctuation">"</span></span>
      <span class="token attr-name">@dragover.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDragover<span class="token punctuation">"</span></span>
      <span class="token attr-name">@dragenter.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDragover<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ $t('msg.uploadExcel.drop') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> excelUploadInput <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleUpload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.upload-excel</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token selector">.excel-upload-input</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -9999<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.btn-upload,
  .drop</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed #bbb<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.drop</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
    <span class="token selector">::v-deep .el-icon</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p><img src="@source/.vuepress/public/images/exl1.png" alt="图片"></p>
<h3 id="_3-文件选择之后的数据解析处理" tabindex="-1"><a class="header-anchor" href="#_3-文件选择之后的数据解析处理" aria-hidden="true">#</a> 3) 文件选择之后的数据解析处理</h3>
<p>接下来处理整个业务中最核心的一块内容 <strong>选中文件之后，解析 <code>excel</code> 数据</strong></p>
<p>解析的方式根据 <em>导入形式的不同</em> 也可以分为两种：</p>
<ol>
<li>文件选择（选择隐藏域）导入</li>
<li>文件拖拽导入</li>
</ol>
<p>那么现在，先来处理第一种。</p>
<p>处理之前需要先来做一件事情：</p>
<ol>
<li>
<p>解析 <code>excel</code> 数据需要使用 <a href="https://www.npmjs.com/package/xlsx" target="_blank" rel="noopener noreferrer">xlsx<ExternalLinkIcon/></a> ，所以需要先安装它</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i xlsx@0.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ol>
<p><a href="https://www.npmjs.com/package/xlsx" target="_blank" rel="noopener noreferrer">xlsx<ExternalLinkIcon/></a> 安装完成之后，接下来就可以来去实现对应代码了：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">'xlsx'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHeaderRow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 上传前回调</span>
  <span class="token literal-property property">beforeUpload</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token comment">// 成功是回调</span>
  <span class="token literal-property property">onSuccess</span><span class="token operator">:</span> Function
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> excelUploadInput <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleUpload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  excelUploadInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 点击按钮, 打开 input 选择文件入口</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 选择了文件, 出发了 input 的 change 事件</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files
  <span class="token keyword">const</span> rawFile <span class="token operator">=</span> files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// only use files[0]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rawFile<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token function">upload</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span> <span class="token comment">// 上传</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">upload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rawFile</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  excelUploadInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 如果没有指定上传前回调</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>beforeUpload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">readerData</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果指定了上传前回调，那么只有返回 true 才会执行后续操作</span>
  <span class="token keyword">const</span> before <span class="token operator">=</span> props<span class="token punctuation">.</span><span class="token function">beforeUpload</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">readerData</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 读取数据（异步）
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">readerData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rawFile</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 该事件在读取操作完成时触发</span>
    <span class="token comment">// https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. 获取解析到的数据</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result
      <span class="token comment">// 2. 利用 XLSX 对数据进行解析</span>
      <span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 3. 获取第一张表格(工作簿)名称</span>
      <span class="token keyword">const</span> firstSheetName <span class="token operator">=</span> workbook<span class="token punctuation">.</span>SheetNames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token comment">// 4. 只读取 Sheet1（第一张表格）的数据</span>
      <span class="token keyword">const</span> worksheet <span class="token operator">=</span> workbook<span class="token punctuation">.</span>Sheets<span class="token punctuation">[</span>firstSheetName<span class="token punctuation">]</span>
      <span class="token comment">// 5. 解析数据表头</span>
      <span class="token keyword">const</span> header <span class="token operator">=</span> <span class="token function">getHeaderRow</span><span class="token punctuation">(</span>worksheet<span class="token punctuation">)</span>
      <span class="token comment">// 6. 解析数据体</span>
      <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">sheet_to_json</span><span class="token punctuation">(</span>worksheet<span class="token punctuation">)</span>
      <span class="token comment">// 7. 传入解析之后的数据</span>
      <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> header<span class="token punctuation">,</span> results <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 8. loading 处理</span>
      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token comment">// 9. 异步完成</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 启动读取指定的 Blob 或 File 内容</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 根据导入内容，生成数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">excelData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  props<span class="token punctuation">.</span>onSuccess <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span><span class="token function">onSuccess</span><span class="token punctuation">(</span>excelData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><p>getHeaderRow<code>为</code>xlsx` 解析表头数据的<strong>通用方法</strong>，直接使用即可</p>
<p>Uplaod/utils.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">'xlsx'</span>
<span class="token doc-comment comment">/**
 * 获取表头（通用方式）
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHeaderRow</span> <span class="token operator">=</span> <span class="token parameter">sheet</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> range <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">decode_range</span><span class="token punctuation">(</span>sheet<span class="token punctuation">[</span><span class="token string">'!ref'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> <span class="token constant">C</span>
  <span class="token keyword">const</span> <span class="token constant">R</span> <span class="token operator">=</span> range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>r
  <span class="token comment">/* start in the first row */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token constant">C</span> <span class="token operator">=</span> range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>c<span class="token punctuation">;</span> <span class="token constant">C</span> <span class="token operator">&lt;=</span> range<span class="token punctuation">.</span>e<span class="token punctuation">.</span>c<span class="token punctuation">;</span> <span class="token operator">++</span><span class="token constant">C</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* walk every column in the range */</span>
    <span class="token keyword">const</span> cell <span class="token operator">=</span> sheet<span class="token punctuation">[</span><span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">encode_cell</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token constant">C</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token constant">R</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token comment">/* find the cell in the first row */</span>
    <span class="token keyword">let</span> hdr <span class="token operator">=</span> <span class="token string">'UNKNOWN '</span> <span class="token operator">+</span> <span class="token constant">C</span> <span class="token comment">// &lt;-- replace with your desired default</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cell <span class="token operator">&amp;&amp;</span> cell<span class="token punctuation">.</span>t<span class="token punctuation">)</span> hdr <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">format_cell</span><span class="token punctuation">(</span>cell<span class="token punctuation">)</span>
    headers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hdr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> headers
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>在 <code>import</code> 组件中传入 <code>onSuccess</code> 事件，获取解析成功之后的 <code>excel</code> 数据</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>upload-excel</span> <span class="token attr-name">:onSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSuccess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>upload-excel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> UploadExcel <span class="token keyword">from</span> <span class="token string">'@/components/UploadExcel'</span>

<span class="token doc-comment comment">/**
 * 数据解析成功之后的回调
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSuccess</span> <span class="token operator">=</span> <span class="token parameter">excelData</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>excelData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>、
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="@source/.vuepress/public/images/excel22.png" alt="图片"></p>
<h3 id="_4-文件拖入之后的数据解析处理" tabindex="-1"><a class="header-anchor" href="#_4-文件拖入之后的数据解析处理" aria-hidden="true">#</a> 4) 文件拖入之后的数据解析处理</h3>
<p>想要了解 <strong>文件拖入</strong>，就必须要先能够了解 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank" rel="noopener noreferrer">HTML_Drag_and_Drop（HTML 拖放 API）<ExternalLinkIcon/></a> 事件，这里主要使用到其中三个事件：</p>
<ol>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event" target="_blank" rel="noopener noreferrer">drop (en-US)<ExternalLinkIcon/></a>：当元素或选中的文本在可释放目标上被释放时触发</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event" target="_blank" rel="noopener noreferrer">dragover (en-US)<ExternalLinkIcon/></a>：当元素或选中的文本被拖到一个可释放目标上时触发</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event" target="_blank" rel="noopener noreferrer">dragenter (en-US)<ExternalLinkIcon/></a>：当拖拽元素或选中的文本到一个可释放目标时触发</li>
</ol>
<p>那么明确好了这三个事件之后，就可以实现对应的拖入代码逻辑</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHeaderRow<span class="token punctuation">,</span> isExcel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>

<span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * 拖拽文本释放时触发
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleDrop</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 上传中跳过</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files
  <span class="token keyword">if</span> <span class="token punctuation">(</span>files<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'必须要有一个文件'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> rawFile <span class="token operator">=</span> files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isExcel</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'文件必须是 .xlsx, .xls, .csv 格式'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 触发上传事件</span>
  <span class="token function">upload</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 拖拽悬停时触发
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleDragover</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect</span>
  <span class="token comment">// 在新位置生成源项的副本</span>
  e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">'copy'</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>在 <code>utils</code> 中生成 <code>isExcel</code> 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isExcel</span> <span class="token operator">=</span> <span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(xlsx|xls|csv)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_5-文件拖入之后的数据解析处理" tabindex="-1"><a class="header-anchor" href="#_5-文件拖入之后的数据解析处理" aria-hidden="true">#</a> 5) 文件拖入之后的数据解析处理</h3>
<p>那么到现在已经处理好了 <code>excel</code> 的数据解析操作。</p>
<p>接下来可以实现对应的数据上传，完成 <code>excel</code> 导入功能</p>
<ol>
<li>
<p>定义 <code>api/user-manage</code> 上传接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 批量导入
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">userBatchImport</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user-manage/batch/import'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>在 <code>onSuccess</code> 中调用接口上传数据，但是此处大家要注意两点内容：</p>
<ol>
<li><code>header</code> 头不需要上传</li>
<li><code>results</code> 中 <code>key</code> 为中文，我们必须要按照接口要求进行上传</li>
</ol>
</li>
<li>
<p>所以我们需要处理 <code>results</code> 中的数据结构</p>
</li>
<li>
<p>创建 <code>import/utils</code> 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 导入数据对应表
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">USER_RELATIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">姓名</span><span class="token operator">:</span> <span class="token string">'username'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">联系方式</span><span class="token operator">:</span> <span class="token string">'mobile'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">角色</span><span class="token operator">:</span> <span class="token string">'role'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">开通时间</span><span class="token operator">:</span> <span class="token string">'openTime'</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>创建数据解析方法，生成新数组 views/import/index.vue</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> userBatchImport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
<span class="token keyword">import</span> Upload <span class="token keyword">from</span> <span class="token string">'@/components/Upload/index.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">USER_RELATIONS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'@/router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token operator">...</span>

<span class="token comment">// 筛选数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ol start="6">
<li>完成数据上传即可</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> userBatchImport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
    <span class="token keyword">import</span> Upload <span class="token keyword">from</span> <span class="token string">'@/components/Upload/index.vue'</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">USER_RELATIONS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
    <span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'@/router'</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
   <span class="token doc-comment comment">/**
    * 数据解析成功之后的回调
    */</span>
   <span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">const</span> <span class="token function-variable function">onSuccess</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> header<span class="token punctuation">,</span> results <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> updateData <span class="token operator">=</span> <span class="token function">generateData</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
     <span class="token keyword">await</span> <span class="token function">userBatchImport</span><span class="token punctuation">(</span>updateData<span class="token punctuation">)</span>
     ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">message</span><span class="token operator">:</span> results<span class="token punctuation">.</span>length <span class="token operator">+</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.importSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
     router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/user/manage'</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">...</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_6-处理剩余-bug" tabindex="-1"><a class="header-anchor" href="#_6-处理剩余-bug" aria-hidden="true">#</a> 6) 处理剩余 bug</h3>
<p>截止到目前整个 <code>excel</code> 上传就已经处理完成了，只不过目前还存在两个小 bug 需要处理：</p>
<ol>
<li>上传之后的时间解析错误</li>
<li>返回用户列表之后，数据不会自动刷新</li>
</ol>
<p><strong>上传之后的时间解析错误：</strong></p>
<p>导致该问题出现的原因是因为 <strong>excel 导入解析时间会出现错误，</strong> 处理的方案也很简单，是一个固定方案，只需要进行固定的时间解析处理即可：</p>
<ol>
<li>
<p>在 <code>import/utils</code> 中新增事件处理方法（固定方式直接使用即可）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 解析 excel 导入的时间格式
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">formatDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">numb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">(</span>numb <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600000</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span><span class="token function">setYear</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">70</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> year <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">''</span>
  <span class="token keyword">const</span> month <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">''</span>
  <span class="token keyword">const</span> date <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">''</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    year <span class="token operator">+</span>
    <span class="token string">'-'</span> <span class="token operator">+</span>
    <span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> month <span class="token operator">:</span> month<span class="token punctuation">)</span> <span class="token operator">+</span>
    <span class="token string">'-'</span> <span class="token operator">+</span>
    <span class="token punctuation">(</span>date <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date <span class="token operator">:</span> date<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
<li>
<p>在 <code>generateData</code> 中针对 <code>openTime</code> 进行单独处理</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 筛选数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token comment">// 处理 excel 的事件显示格斯</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'openTime'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>返回用户列表之后，数据不会自动刷新：</strong></p>
<p>出现该问题的原因是因为：<strong><code>appmain</code> 中使用 <code>keepAlive</code> 进行了组件缓存</strong>。</p>
<p>解决的方案也很简单，只需要：<strong>监听 <a href="https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated" target="_blank" rel="noopener noreferrer">onActivated<ExternalLinkIcon/></a> 事件，重新获取数据即可</strong></p>
<p>在 <code>user-manage</code> 中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onActivated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 处理导入用户后数据不重新加载的问题</span>
<span class="token function">onActivated</span><span class="token punctuation">(</span>getListData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_7-excel-导入功能总结" tabindex="-1"><a class="header-anchor" href="#_7-excel-导入功能总结" aria-hidden="true">#</a> 7) excel 导入功能总结</h3>
<p>到这里 <code>excel</code> 导入功能就已经实现完成，回顾一下整体的流程：</p>
<ol>
<li>创建 <code>excel</code> 导入页面</li>
<li>点击 <code>excel</code> 导入按钮，进入该页面</li>
<li>该页面提供两种文件导入形式</li>
<li>选中文件之后，解析 <code>excel</code> 数据（核心）</li>
<li>上传解析之后的数据</li>
<li>返回 员工管理（用户列表） 页面</li>
</ol>
<p>游离于这些流程之外的，还包括额外的两个小 bug 的处理，特别是 <strong><code>excel</code> 的时间格式问题，</strong> 要格外注意，因为这是一个必然会出现的错误，当然处理方案也是固定的</p>
<h2 id="辅助业务之用户删除" tabindex="-1"><a class="header-anchor" href="#辅助业务之用户删除" aria-hidden="true">#</a> 辅助业务之用户删除</h2>
<p>完成了 <code>excel</code> 的用户导入之后，那么我们肯定会产生很多的无用数据，所以说接下来我们来完成一个辅助功能：<strong>删除用户（希望大家都可以在完成 <code>excel</code> 导入功能之后，删除掉无用数据，以方便其他的同学进行功能测试）</strong></p>
<p>删除用户的功能比较简单，我们只需要 <strong>调用对应的接口即可</strong></p>
<ol>
<li>
<p>在 <code>api/user-manage</code> 中指定删除接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 删除指定数据
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deleteUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/user-manage/detele/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>在 <code>views/user-manage</code> 中调用删除接口接口</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRemoveClick(row)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              $t('msg.excel.remove')
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessageBox<span class="token punctuation">,</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
 <span class="token operator">...</span>

<span class="token doc-comment comment">/**
 * 删除按钮点击事件
 */</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onRemoveClick</span> <span class="token operator">=</span> <span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>
    i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.dialogTitle1'</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      row<span class="token punctuation">.</span>username <span class="token operator">+</span>
      i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.dialogTitle2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'warning'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.removeSuccess'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 重新渲染数据</span>
    <span class="token function">getListData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li>
</ol>
<h2 id="excel-导出" tabindex="-1"><a class="header-anchor" href="#excel-导出" aria-hidden="true">#</a> excel 导出</h2>
<h3 id="_1-excel-导出原理与实现分析" tabindex="-1"><a class="header-anchor" href="#_1-excel-导出原理与实现分析" aria-hidden="true">#</a> 1) excel 导出原理与实现分析</h3>
<p>对于 <code>excel</code> 导出而言还是先来分析一下它的业务逻辑：</p>
<ol>
<li>点击 <code>excel</code> 导出按钮</li>
<li>展示 <code>dialog</code> 弹出层</li>
<li>确定导出的 <code>excel</code> 文件名称</li>
<li>点击导出按钮</li>
<li>获取 <strong>所有用户列表数据</strong></li>
<li>将 <code>json</code> 结构数据转化为 <code>excel</code> 数据，并下载</li>
</ol>
<p>有了 <code>excel</code> 导入的经验之后，再来看这样的一套业务逻辑，相信大家应该可以直接根据这样的一套业务逻辑得出 <code>excel</code> 导出的核心原理了：<strong>将 <code>json</code> 结构数据转化为 <code>excel</code> 数据，并下载</strong></p>
<p>那么对应的实现方案也可以直接得出了：</p>
<ol>
<li>创建 <code>excel</code> 导出弹出层</li>
<li>处理弹出层相关的业务</li>
<li>点击导出按钮，将 <code>json</code> 结构数据转化为 <code>excel</code> 数据，并下载（核心）</li>
</ol>
<h3 id="_2-export2excel-组件" tabindex="-1"><a class="header-anchor" href="#_2-export2excel-组件" aria-hidden="true">#</a> 2) Export2Excel 组件</h3>
<p>首先先去创建 <code>excel</code> 弹出层组件 <code>Export2Excel </code>  <a href="https://element-plus.gitee.io/zh-CN/component/dialog.html" target="_blank" rel="noopener noreferrer">el-dialog 弹出框<ExternalLinkIcon/></a></p>
<ol>
<li>创建 <code>views/user-manage/components/Export2Excel </code></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.title<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
    <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span>
    <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closed<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30%<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.placeholder<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excelName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.excel.close') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onConfirm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
          $t('msg.excel.confirm')
        }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> defineEmits<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> excelName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO: 业务</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭</span>
<span class="token keyword">const</span> <span class="token function-variable function">closed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.dialog-footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>在 <code>user-manage</code> 中进行导入 <code>dialog</code> 组件</p>
<ol>
<li>指定 <code>excel</code>按钮 点击事件</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onToExcelClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{$t('msg.excel.exportExcel')}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>
<p>导入 <code>ExportToExcel</code> 组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>export-to-excel</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>export2ExcelVisible<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

import ExportToExcel from './components/Export2Excel.vue'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>点击事件处理函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * excel 导出点击事件
 */</span>
<span class="token keyword">const</span> export2ExcelVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToExcelClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  export2ExcelVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ol>
<h3 id="_3-导出前置业务处理" tabindex="-1"><a class="header-anchor" href="#_3-导出前置业务处理" aria-hidden="true">#</a> 3) 导出前置业务处理</h3>
<p>现在来处理一些实现 <code>excel</code> 导出时的前置任务，具体有：</p>
<ol>
<li>指定 <code>input</code> 输入框 默认导出文件名称</li>
<li>定义 <strong>获取全部用户</strong> 列表接口，并调用</li>
</ol>
<p>先处理第一步：<strong>指定 <code>input</code> 默认导出文件名称</strong></p>
<ol>
<li>指定 <code>input</code> 的双向绑定</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excelName<span class="token punctuation">"</span></span>
      <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.excel.placeholder<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>指定默认文件名 (需要监听语言的变化)</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token operator">...</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> exportDefaultName <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> excelName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>exportDefaultName<span class="token punctuation">)</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  exportDefaultName <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
  excelName<span class="token punctuation">.</span>value <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>定义获取全部用户列表接口，并调用：</strong></p>
<ol>
<li>
<p>在 <code>user-manage</code> 中定义获取全部数据接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取所有用户列表数据
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserManageAllList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user-manage/all-list'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>调用接口数据，并指定 <code>loading</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onConfirm<span class="token punctuation">"</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
	$t('msg.excel.confirm')
}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserManageAllList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>

<span class="token operator">...</span> 
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  <span class="token comment">// 确定按钮</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserManageAllList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

  <span class="token comment">// TODO: 业务</span>

  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">closed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭</span>
<span class="token keyword">const</span> <span class="token function-variable function">closed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_4-实现-excel-导出逻辑" tabindex="-1"><a class="header-anchor" href="#_4-实现-excel-导出逻辑" aria-hidden="true">#</a> 4) 实现 excel 导出逻辑</h3>
<p>那么万事俱备，到此时就可以来实现整个业务逻辑的最后步骤：</p>
<ol>
<li>将 <code>json</code> 结构数据转化为 <code>excel</code> 数据</li>
<li>下载对应的 <code>excel</code> 数据</li>
</ol>
<p>对于这两步的逻辑而言，最复杂的莫过于 <strong>将 <code>json</code> 结构数据转化为 <code>excel</code> 数据</strong> 这一步的功能，不过万幸的是对于该操作的逻辑是 <strong>通用处理逻辑</strong>，搜索 <strong>Export2Excel</strong> 可以得到巨多的解决方案，所以此处 <strong>没有必要</strong> 手写对应的转换逻辑</p>
<p>直接把该代码复制到 <code>src/utils</code> 文件夹下 Export2Excel.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'file-saver'</span>
<span class="token keyword">import</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">'xlsx'</span>

<span class="token keyword">function</span> <span class="token function">datenum</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> date1904</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>date1904<span class="token punctuation">)</span> v <span class="token operator">+=</span> <span class="token number">1462</span>
  <span class="token keyword">var</span> epoch <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>epoch <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token constant">UTC</span><span class="token punctuation">(</span><span class="token number">1899</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sheet_from_array_of_arrays</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">var</span> range <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">10000000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">10000000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token constant">R</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token constant">R</span> <span class="token operator">!=</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span><span class="token constant">R</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token constant">C</span> <span class="token operator">!=</span> data<span class="token punctuation">[</span><span class="token constant">R</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span><span class="token constant">C</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>r <span class="token operator">></span> <span class="token constant">R</span><span class="token punctuation">)</span> range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>r <span class="token operator">=</span> <span class="token constant">R</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>c <span class="token operator">></span> <span class="token constant">C</span><span class="token punctuation">)</span> range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token constant">C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">.</span>e<span class="token punctuation">.</span>r <span class="token operator">&lt;</span> <span class="token constant">R</span><span class="token punctuation">)</span> range<span class="token punctuation">.</span>e<span class="token punctuation">.</span>r <span class="token operator">=</span> <span class="token constant">R</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">.</span>e<span class="token punctuation">.</span>c <span class="token operator">&lt;</span> <span class="token constant">C</span><span class="token punctuation">)</span> range<span class="token punctuation">.</span>e<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token constant">C</span>
      <span class="token keyword">var</span> cell <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">v</span><span class="token operator">:</span> data<span class="token punctuation">[</span><span class="token constant">R</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token constant">C</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cell<span class="token punctuation">.</span>v <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
      <span class="token keyword">var</span> cell_ref <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">encode_cell</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token constant">C</span><span class="token punctuation">,</span>
        <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token constant">R</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> cell<span class="token punctuation">.</span>v <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> cell<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token string">'n'</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> cell<span class="token punctuation">.</span>v <span class="token operator">===</span> <span class="token string">'boolean'</span><span class="token punctuation">)</span> cell<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token string">'b'</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cell<span class="token punctuation">.</span>v <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cell<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token string">'n'</span>
        cell<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token constant">SSF</span><span class="token punctuation">.</span>_table<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span>
        cell<span class="token punctuation">.</span>v <span class="token operator">=</span> <span class="token function">datenum</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>v<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> cell<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token string">'s'</span>

      ws<span class="token punctuation">[</span>cell_ref<span class="token punctuation">]</span> <span class="token operator">=</span> cell
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">.</span>s<span class="token punctuation">.</span>c <span class="token operator">&lt;</span> <span class="token number">10000000</span><span class="token punctuation">)</span> ws<span class="token punctuation">[</span><span class="token string">'!ref'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">encode_range</span><span class="token punctuation">(</span>range<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ws
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Workbook</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>SheetNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>Sheets <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">s2ab</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">var</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> view<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span>
  <span class="token keyword">return</span> buf
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> export_json_to_excel <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  multiHeader <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  header<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  filename<span class="token punctuation">,</span>
  merges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  autoWidth <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  bookType <span class="token operator">=</span> <span class="token string">'xlsx'</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 设置文件名称</span>
  filename <span class="token operator">=</span> filename <span class="token operator">||</span> <span class="token string">'excel-list'</span>
  <span class="token comment">// 2. 把数据解析为数组，并把表头添加到数组的头部</span>
  data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">]</span>
  data<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span>
  <span class="token comment">// 3. 解析多表头，把多表头的数据添加到数组头部（二维数组）</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> multiHeader<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>multiHeader<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 4. 设置 Excel 表工作簿（第一张表格）名称</span>
  <span class="token keyword">var</span> ws_name <span class="token operator">=</span> <span class="token string">'SheetJS'</span>
  <span class="token comment">// 5. 生成工作簿对象</span>
  <span class="token keyword">var</span> wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Workbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 6. 将 data 数组（json格式）转化为 Excel 数据格式</span>
  <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token function">sheet_from_array_of_arrays</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token comment">// 7. 合并单元格相关（['A1:A2', 'B1:D1', 'E1:E2']）</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>merges<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ws<span class="token punctuation">[</span><span class="token string">'!merges'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> ws<span class="token punctuation">[</span><span class="token string">'!merges'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    merges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      ws<span class="token punctuation">[</span><span class="token string">'!merges'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">decode_range</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 8. 单元格宽度相关</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>autoWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*设置 worksheet 每列的最大宽度*/</span>
    <span class="token keyword">const</span> colWidth <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">/*先判断是否为null/undefined*/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">wch</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">/*再判断是否为中文*/</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">wch</span><span class="token operator">:</span> val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">wch</span><span class="token operator">:</span> val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token comment">/*以第一行为初始值*/</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> colWidth<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> colWidth<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> colWidth<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'wch'</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> colWidth<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'wch'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'wch'</span><span class="token punctuation">]</span> <span class="token operator">=</span> colWidth<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'wch'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    ws<span class="token punctuation">[</span><span class="token string">'!cols'</span><span class="token punctuation">]</span> <span class="token operator">=</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// 9. 添加工作表（解析后的 excel 数据）到工作簿</span>
  wb<span class="token punctuation">.</span>SheetNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ws_name<span class="token punctuation">)</span>
  wb<span class="token punctuation">.</span>Sheets<span class="token punctuation">[</span>ws_name<span class="token punctuation">]</span> <span class="token operator">=</span> ws
  <span class="token comment">// 10. 写入数据</span>
  <span class="token keyword">var</span> wbout <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>wb<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bookType</span><span class="token operator">:</span> bookType<span class="token punctuation">,</span>
    <span class="token literal-property property">bookSST</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'binary'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 11. 下载数据</span>
  <span class="token function">saveAs</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">s2ab</span><span class="token punctuation">(</span>wbout<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/octet-stream'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>bookType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br></div></div><p>那么有了 <code>Export2Excel.js</code> 的代码之后 ，接下来还需要导入两个依赖库：</p>
<ol>
<li><a href="https://www.npmjs.com/package/xlsx" target="_blank" rel="noopener noreferrer">xlsx<ExternalLinkIcon/></a> （已下载）：<code>excel</code> 解析器和编译器</li>
<li><a href="https://www.npmjs.com/package/file-saver" target="_blank" rel="noopener noreferrer">file-saver<ExternalLinkIcon/></a>：文件下载工具，通过 <code>npm i file-saver@2.0.5</code> 下载</li>
</ol>
<p>那么一切准备就绪，实现 <code>excel</code> 导出功能：</p>
<ol>
<li>动态导入 <code>Export2Excel.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入工具包</span>
<span class="token keyword">const</span> excel <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/utils/Export2Excel'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>
<p>因为从服务端获取到的为 <code>json 数组对象</code> 结构，但是导出时的数据需要为 <strong>二维数组</strong>，所以需要有一个方法来把 <strong><code>json</code> 结构转化为 二维数组</strong></p>
</li>
<li>
<p>创建转化方法</p>
<p>1.创建 <code>views/user-manage/components/Export2ExcelConstants.js</code> 中英文对照表</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 导入数据对应表
 */</span>
 <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">USER_RELATIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">姓名</span><span class="token operator">:</span> <span class="token string">'username'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">联系方式</span><span class="token operator">:</span> <span class="token string">'mobile'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">角色</span><span class="token operator">:</span> <span class="token string">'role'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">开通时间</span><span class="token operator">:</span> <span class="token string">'openTime'</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>创建数据解析方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法负责将数组转化成二维数组, `json` 结构转化为 二维数组</span>
<span class="token comment">// [{ username: '张三', mobile:1234567489...},{},{}]  =>  [[’张三'],[],[]]</span>
 <span class="token keyword">const</span> <span class="token function-variable function">formatJson</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
 rows<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> arrItem <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token comment">// role 角色特使处理</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'role'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrItem<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
<li>
<p>调用该方法，获取导出的二维数组数据</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">USER_RELATIONS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Export2ExcelConstants'</span>
<span class="token operator">...</span>

<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserManageAllList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> allUser <span class="token operator">=</span> res<span class="token punctuation">.</span>list
  <span class="token function">formatJson</span><span class="token punctuation">(</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">,</span> allUser<span class="token punctuation">)</span>
  <span class="token comment">// TODO: 业务</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">closed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>

<span class="token comment">// 该方法负责将数组转化成二维数组, `json` 结构转化为 二维数组</span>
<span class="token comment">// [{ username: '张三', mobile:1234567489...},{},{}]  =>  [[’张三'],[],[]]</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatJson</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  rows<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arrItem <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// role 角色特使处理</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'role'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrItem<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ol start="5">
<li>调用 <code>export_json_to_excel</code> 方法，完成 <code>excel</code> 导出</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> defineEmits<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserManageAllList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">USER_RELATIONS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Export2ExcelConstants'</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> exportDefaultName <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> excelName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>exportDefaultName<span class="token punctuation">)</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  exportDefaultName <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
  excelName<span class="token punctuation">.</span>value <span class="token operator">=</span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'msg.excel.defaultName'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserManageAllList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> allUser <span class="token operator">=</span> res<span class="token punctuation">.</span>list
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">formatJson</span><span class="token punctuation">(</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">,</span> allUser<span class="token punctuation">)</span>
  <span class="token keyword">const</span> excel <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/utils/Export2Excel'</span><span class="token punctuation">)</span>
  excel<span class="token punctuation">.</span><span class="token function">export_json_to_excel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// excel 表头</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token constant">USER_RELATIONS</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// excel 数据（二维数组结构）</span>
    data<span class="token punctuation">,</span>
    <span class="token comment">// 文件名称</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> excelName<span class="token punctuation">.</span>value <span class="token operator">||</span> exportDefaultName<span class="token punctuation">,</span>
    <span class="token comment">// 是否自动列宽</span>
    <span class="token literal-property property">autoWidth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 文件类型</span>
    <span class="token literal-property property">bookType</span><span class="token operator">:</span> <span class="token string">'xlsx'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">closed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭</span>
<span class="token keyword">const</span> <span class="token function-variable function">closed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 该方法负责将数组转化成二维数组, `json` 结构转化为 二维数组</span>
<span class="token comment">// [{ username: '张三', mobile:1234567489...},{},{}]  =>  [[’张三'],[],[]]</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatJson</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  rows<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arrItem <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// role 角色特使处理</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'role'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrItem<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h3 id="_5-excel-导出时的时间逻辑处理" tabindex="-1"><a class="header-anchor" href="#_5-excel-导出时的时间逻辑处理" aria-hidden="true">#</a> 5) excel 导出时的时间逻辑处理</h3>
<p>因为服务端返回的 <code>openTime</code> 格式问题，所以我们需要在 <code>excel</code> 导出时对时间格式进行单独处理</p>
<ol start="2">
<li>
<p>导入时间格式处理工具</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> dateFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/filters'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>对时间格式进行单独处理</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法负责将数组转化成二维数组, `json` 结构转化为 二维数组</span>
<span class="token comment">// [{ username: '张三', mobile:1234567489...},{},{}]  =>  [[’张三'],[],[]]</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatJson</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  rows<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arrItem <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// role 角色特使处理</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'role'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'openTime'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">dateFilter</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrItem<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6) 总结</h3>
<p>那么到这里我们的整个 <code>excel</code> 导出就算是实现完成了。</p>
<p>整个 <code>excel</code> 导出遵循以下业务逻辑：</p>
<ol>
<li>创建 <code>excel</code> 导出弹出层</li>
<li>处理弹出层相关的业务</li>
<li>点击导出按钮，将 <code>json</code> 结构数据转化为 <code>excel</code> 数据
<ol>
<li><code>json</code> 数据转化为 <strong>二维数组</strong></li>
<li>时间处理</li>
<li>角色数组处理</li>
</ol>
</li>
<li>下载 <code>excel</code> 数据</li>
</ol>
<p>其中 <strong>将 <code>json</code> 结构数据转化为 <code>excel</code> 数据</strong> 部分因为有通用的实现方式，所以没有必要进行手动的代码书写，毕竟 <strong>程序猿是最懒的群体嘛</strong></p>
<h2 id="局部打印" tabindex="-1"><a class="header-anchor" href="#局部打印" aria-hidden="true">#</a> 局部打印</h2>
<h3 id="_1-局部打印详情原理与实现分析" tabindex="-1"><a class="header-anchor" href="#_1-局部打印详情原理与实现分析" aria-hidden="true">#</a> 1) 局部打印详情原理与实现分析</h3>
<p>最后一个功能 <strong>员工详情打印</strong></p>
<p>整个员工详情的打印逻辑分为两部分：</p>
<ol>
<li>以表格的形式展示员工详情</li>
<li>打印详情表格</li>
</ol>
<p>其中 <strong>以表格的形式展示员工详情</strong> 部分需要使用到 <a href="https://element-plus.org/zh-CN/component/descriptions.html" target="_blank" rel="noopener noreferrer">el-descriptions<ExternalLinkIcon/></a> 组件，并且想要利用该组件实现详情的表格效果还需要一些小的技巧</p>
<p>而 <strong>打印详情表格</strong> 的功能就是建立在展示详情页面之上的</p>
<p>当我们在浏览器右键时，其实可以直接看到对应的 <strong>打印</strong> 选项，但是这个打印选项是直接打印整个页面，不能指定打印页面中的某一部分</p>
<p>所以说 <strong>打印是浏览器本身的功能</strong>，但是这个功能存在一定的小缺陷，那就是 <strong>只能打印整个页面</strong></p>
<p>而想要实现 <strong>详情打印</strong>，那么就需要在这个功能的基础之上做到指定打印具体的某一块视图，而这个功能已经有一个第三方的包 <a href="https://github.com/Power-kxLee/vue-print-nb#vue3-version" target="_blank" rel="noopener noreferrer">vue-print-nb<ExternalLinkIcon/></a> 帮助进行了实现，所以只需要使用这个包即可完成打印功能</p>
<p>那么明确好了原理之后，接下来步骤就呼之欲出</p>
<ol>
<li>获取员工详情数据</li>
<li>在员工详情页面，渲染详情数据</li>
<li>利用  <a href="https://github.com/Power-kxLee/vue-print-nb#vue3-version" target="_blank" rel="noopener noreferrer">vue-print-nb<ExternalLinkIcon/></a> 进行局部打印</li>
</ol>
<h3 id="_2-获取员工详情数据" tabindex="-1"><a class="header-anchor" href="#_2-获取员工详情数据" aria-hidden="true">#</a> 2) 获取员工详情数据</h3>
<p>首先来获取对应的员工数据</p>
<ol>
<li>
<p>在 <code>api/user-manage</code> 中定义获取用户详情接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取用户详情
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">userDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/user-manage/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>在 <code>views/user-info</code> 中根据 <code>id</code> 获取接口详情数据，并进行国际化处理</p>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> userDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getUserDetail</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">userDetail</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getUserDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 接口国际化处理</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span>getUserDetail<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="3">
<li>因为用户详情可以会以组件的形式进行呈现，所以对于此处需要得到的 <code>id</code> ，可以通过 <a href="https://next.router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">vue-router Props 传参<ExternalLinkIcon/></a> 的形式进行</li>
<li>指定的路由表</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/info/:id'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'userInfo'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user-info/index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'userInfo'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>在 <code>views/user-manage</code> 中传递用户 `id</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onShowClick(row._id)<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
	{{ $t('msg.excel.show') }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>

/**
 * 查看按钮点击事件
 */
const onShowClick = id => {
  router.push(`/user/info/${id}`)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-渲染详情结构" tabindex="-1"><a class="header-anchor" href="#_3-渲染详情结构" aria-hidden="true">#</a> 3) 渲染详情结构</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-info-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>print-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.userInfo.print') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-info-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 标题 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.userInfo.title') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 头部渲染表格 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.name<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              detailData.username
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.sex<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              detailData.gender
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.nation<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              detailData.nationality
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.mobile<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              detailData.mobile
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.province<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              detailData.province
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.date<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
              $filters.dateFilter(detailData.openTime)
            }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.remark<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span>
                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remark<span class="token punctuation">"</span></span>
                <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
                <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in detailData.remark<span class="token punctuation">"</span></span>
                <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
                <span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span>
              <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span>
              <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.address<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
              <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
              <span class="token punctuation">></span></span>{{ detailData.address }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span>
            <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 头像渲染 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-image</span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span>
            <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>detailData.avatar<span class="token punctuation">"</span></span>
            <span class="token attr-name">:preview-src-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[detailData.avatar]<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-image</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 内容渲染表格 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.experience<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in detailData.experience<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
                    {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                    ----
                    {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
                  <span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.desc }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.major<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{ detailData.major }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-descriptions-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>msg.userInfo.glory<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{ detailData.glory }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions-item</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-descriptions</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 尾部签名 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ $t('msg.userInfo.foot') }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> userDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user-manage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchSwitchLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/i18n'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> detailData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getUserDetail</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">userDetail</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  detailData<span class="token punctuation">.</span>value <span class="token operator">=</span> res
<span class="token punctuation">}</span>
<span class="token function">getUserDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 接口国际化处理</span>
<span class="token function">watchSwitchLang</span><span class="token punctuation">(</span>getUserDetail<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.print-box</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.user-info-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token selector">::v-deep .el-descriptions</span> <span class="token punctuation">{</span>
      <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.avatar</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 187px<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 30px 20px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ebeef5<span class="token punctuation">;</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.remark</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.body</span> <span class="token punctuation">{</span>
    <span class="token selector">ul</span> <span class="token punctuation">{</span>
      <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token selector">li</span> <span class="token punctuation">{</span>
        <span class="token selector">span</span> <span class="token punctuation">{</span>
          <span class="token property">margin-right</span><span class="token punctuation">:</span> 62px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.foot</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br></div></div><h3 id="_4-局部功能打印的实现" tabindex="-1"><a class="header-anchor" href="#_4-局部功能打印的实现" aria-hidden="true">#</a> 4) 局部功能打印的实现</h3>
<p>局部详情打印功能我们需要借助 <a href="https://github.com/Power-kxLee/vue-print-nb#vue3-version" target="_blank" rel="noopener noreferrer">vue-print-nb<ExternalLinkIcon/></a>，所以首先需要下载该插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue3-print-nb@0.1.4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后利用该工具完成下载功能：</p>
<ol>
<li>
<p>指定 <code>printLoading</code> 按钮动画</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-button type="primary" :loading="printLoading">{{
        $t('msg.userInfo.print')
      }}&lt;/el-button>

// 打印相关
const printLoading = ref(false)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>创建打印对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> printObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 打印区域</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'userInfoBox'</span><span class="token punctuation">,</span>
  <span class="token comment">// 打印标题</span>
  <span class="token literal-property property">popTitle</span><span class="token operator">:</span> <span class="token string">'imooc-vue-element-admin'</span><span class="token punctuation">,</span>
  <span class="token comment">// 打印前</span>
  <span class="token function">beforeOpenCallback</span><span class="token punctuation">(</span><span class="token parameter">vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    printLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 执行打印</span>
  <span class="token function">openCallback</span><span class="token punctuation">(</span><span class="token parameter">vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    printLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
<li>
<p>指定打印区域 <code>id</code> 匹配</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfoBox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-info-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p><a href="https://github.com/Power-kxLee/vue-print-nb#vue3-version" target="_blank" rel="noopener noreferrer">vue-print-nb<ExternalLinkIcon/></a> 以指令的形式存在，所以我们需要创建对应指令</p>
</li>
<li>
<p>新建 <code>directives</code> 文件夹，创建 <code>index.js</code></p>
</li>
<li>
<p>写入如下代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> print <span class="token keyword">from</span> <span class="token string">'vue3-print-nb'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>在 <code>main.js</code> 中导入该指令</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> installDirective <span class="token keyword">from</span> <span class="token string">'@/directives'</span>

<span class="token function">installDirective</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>将打印指令挂载到 <code>el-button</code> 中</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">v-print</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>printObj<span class="token punctuation">"</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>printLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
        $t('msg.userInfo.print')
      }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ol>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>整个局部打印详情功能，整体的核心逻辑就是两块：</p>
<ol>
<li>以表格的形式展示员工详情</li>
<li>打印详情表格</li>
</ol>
<p>其中第一部分使用  <a href="https://element-plus.org/zh-CN/component/descriptions.html" target="_blank" rel="noopener noreferrer">el-descriptions<ExternalLinkIcon/></a> 组件配合一些小技巧即可实现</p>
<p>而局部打印功能则需要借助 <a href="https://github.com/Power-kxLee/vue-print-nb#vue3-version" target="_blank" rel="noopener noreferrer">vue-print-nb<ExternalLinkIcon/></a> 这个第三方库进行实现</p>
<p>所以整个局部打印功能应该并不算复杂，实现这两部分即可轻松做到</p>
</template>
