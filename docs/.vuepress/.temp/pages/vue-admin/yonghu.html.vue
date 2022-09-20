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
</template>
