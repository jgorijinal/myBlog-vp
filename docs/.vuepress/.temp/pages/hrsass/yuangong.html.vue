<template><h1 id="员工管理" tabindex="-1"><a class="header-anchor" href="#员工管理" aria-hidden="true">#</a> 员工管理</h1>
<h2 id="_1-封装一个通用的工具栏" tabindex="-1"><a class="header-anchor" href="#_1-封装一个通用的工具栏" aria-hidden="true">#</a> 1. 封装一个通用的工具栏</h2>
<p>目标：封装一个通用的工具栏供使用</p>
<h3 id="_1-1通用工具栏的组件结构" tabindex="-1"><a class="header-anchor" href="#_1-1通用工具栏的组件结构" aria-hidden="true">#</a> 1.1通用工具栏的组件结构</h3>
<blockquote>
<p>在后续的业务开发中，经常会用到一个类似下图的工具栏，作为公共组件，进行一下封装</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/gongjulan.png" alt="图片"></p>
<p>组件 <strong><code>src/components/PageTools/index.vue</code></strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-tools<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>space-between<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showBefore<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-info<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token comment">&lt;!-- 定义前面得插槽 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
           <span class="token comment">&lt;!-- 定义后面的插槽 --></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">showBefore</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>scss<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 <span class="token selector">.page-tools</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token selector">.before</span> <span class="token punctuation">{</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
    <span class="token selector">i</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>145<span class="token punctuation">,</span> 213<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>230<span class="token punctuation">,</span> 247<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="_1-2-组件-统一注册" tabindex="-1"><a class="header-anchor" href="#_1-2-组件-统一注册" aria-hidden="true">#</a> 1.2 组件 统一注册</h3>
<blockquote>
<p>为了方便所有的页面都可以不用引用该组件，可以进行全局注册</p>
</blockquote>
<p>提供注册入口 <strong><code>src/componets/index.js</code></strong>
<img src="@source/.vuepress/public/images/usecom.png" alt="图片"></p>
<blockquote>
<p>在入口处进行注册 <strong><code>src/main.js</code></strong></p>
</blockquote>
<p><img src="@source/.vuepress/public/images/usecom2.png" alt="图片"></p>
<h2 id="_2-员工列表页面的基本布局和结构" tabindex="-1"><a class="header-anchor" href="#_2-员工列表页面的基本布局和结构" aria-hidden="true">#</a> 2. 员工列表页面的基本布局和结构</h2>
<p>实现 员工列表 页面的基本布局和结构
<img src="@source/.vuepress/public/images/yuangongyemian.png" alt="图片">
<strong>结构代码</strong> <strong><code>src/employees/index.vue</code></strong>
<img src="@source/.vuepress/public/images/yuangongyemian2.png" alt="图片"></p>
<h2 id="_3-员工列表数据请求和分页加载" tabindex="-1"><a class="header-anchor" href="#_3-员工列表数据请求和分页加载" aria-hidden="true">#</a> 3. 员工列表数据请求和分页加载</h2>
<p>实现员工数据的加载和分页请求</p>
<p>首先，封装员工的加载请求 <strong><code>src/api/employees.js</code></strong>
<img src="@source/.vuepress/public/images/jk1.png" alt="图片"></p>
<p>然后，实现加载数据和分页的逻辑
<img src="@source/.vuepress/public/images/jk2.png" alt="图片">
绑定表格
<img src="@source/.vuepress/public/images/jk3.png" alt="图片"></p>
<h2 id="_4-员工列表中的数据进行-格式化" tabindex="-1"><a class="header-anchor" href="#_4-员工列表中的数据进行-格式化" aria-hidden="true">#</a> 4. 员工列表中的数据进行 格式化</h2>
<p>将列表中的内容进行格式化</p>
<h3 id="_4-1-利用列格式化属性处理聘用形式" tabindex="-1"><a class="header-anchor" href="#_4-1-利用列格式化属性处理聘用形式" aria-hidden="true">#</a> 4.1 利用列格式化属性处理聘用形式</h3>
<p><img src="@source/.vuepress/public/images/jkyiemian.png" alt="图片"></p>
<blockquote>
<p>上面中，列表中的<strong>聘用形式</strong>/<strong>入职时间</strong>和<strong>状态</strong>等需要进行显示内容的处理</p>
</blockquote>
<p>那么聘用形式中<strong>1</strong>代表什么含义，这实际上是我们需要的枚举数据，可以将枚举下的文件夹放于 <strong><code>src/api</code></strong> 文件夹下</p>
<p>针对<strong>聘用形式</strong>，可以使用 <strong>el-table-column</strong> 的 <strong>formatter</strong> 属性进行设置
<img src="@source/.vuepress/public/images/formatter.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/meiju01.png" alt="图片">
<img src="@source/.vuepress/public/images/formatter2.png" alt="图片"></p>
<h3 id="_4-2-过滤器解决时间格式的处理" tabindex="-1"><a class="header-anchor" href="#_4-2-过滤器解决时间格式的处理" aria-hidden="true">#</a> 4.2 过滤器解决时间格式的处理</h3>
<p>针对入职时间，可以采用 el-table-column 的 <strong>作用域插槽</strong> 进行处理</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>入职时间<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>timeOfEntry<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{
                obj.row.timeOfEntry | 过滤器
              }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>问题来了，过滤器从哪里呢？</p>
</blockquote>
<p>在 <strong><code>资源/过滤器</code></strong> 中，提供了若干工具方法，可以将其转化成过滤器，首先将其拷贝到 <strong><code>src</code></strong></p>
<p>在 <strong><code>main.js</code></strong> 中将工具方法转化成过滤器</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> filters <span class="token keyword">from</span> <span class="token string">'@/filters'</span> <span class="token comment">// 引入工具类</span>
<span class="token comment">// 注册全局的过滤器</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>filters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 注册过滤器</span>
  Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> filters<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>可以愉快的用过滤器的方式使用工具类的方法了</p>
</blockquote>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>入职时间<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 作用域插槽 --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ row }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ row.timeOfEntry | formatDate }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后一项，账户状态，可以用开关组件 <strong>switch</strong> 进行显示</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>账户状态<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enableState<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ row }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token comment">&lt;!-- 根据当前状态来确定 是否打开开关 --></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row.enableState === 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_5-删除员工功能" tabindex="-1"><a class="header-anchor" href="#_5-删除员工功能" aria-hidden="true">#</a> 5. 删除员工功能</h2>
<p>实现删除员工的功能</p>
<p>首先封装 删除员工 的请求接口  <strong>src/api/employees.js</strong>
<img src="@source/.vuepress/public/images/shanchuyuangong.png" alt="图片"></p>
<h4 id="删除功能" tabindex="-1"><a class="header-anchor" href="#删除功能" aria-hidden="true">#</a> 删除功能</h4>
<p><img src="@source/.vuepress/public/images/shanchuyuangong2.png" alt="图片">
<img src="@source/.vuepress/public/images/shanchuyuangong3.png" alt="图片"></p>
<h2 id="_6-新增员工功能-弹层-校验-部门" tabindex="-1"><a class="header-anchor" href="#_6-新增员工功能-弹层-校验-部门" aria-hidden="true">#</a> 6. 新增员工功能-弹层-校验-部门</h2>
<p>实现 新增员工 的功能</p>
<h3 id="_6-1-新建员工弹层组件" tabindex="-1"><a class="header-anchor" href="#_6-1-新建员工弹层组件" aria-hidden="true">#</a> 6.1 新建员工弹层组件</h3>
<blockquote>
<p>当点击新增员工时，需要一个下图的弹层'</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/xinzengyuangong01.png" alt="图片">
类似 <strong><code>组织架构</code></strong> 的组件，同样新建一个弹层组件 <strong><code>src/views/employees/components/add-employee.vue</code></strong>
<img src="@source/.vuepress/public/images/xzyg1.png" alt="图片"></p>
<h3 id="_6-2-引用弹出层-点击弹出" tabindex="-1"><a class="header-anchor" href="#_6-2-引用弹出层-点击弹出" aria-hidden="true">#</a> 6.2 引用弹出层，点击弹出</h3>
<p>父组件中引用，弹出层
<img src="@source/.vuepress/public/images/xzyg3.png" alt="图片">
<img src="@source/.vuepress/public/images/xzyg4.png" alt="图片"></p>
<h3 id="_6-3-新增员工的表单校验" tabindex="-1"><a class="header-anchor" href="#_6-3-新增员工的表单校验" aria-hidden="true">#</a> 6.3 新增员工的表单校验</h3>
<p>封装新增员工接口 **api <strong><code>src/api/employees.js</code></strong>
<img src="@source/.vuepress/public/images/xzyg01.png" alt="图片">
针对员工属性，添加校验规则
<img src="@source/.vuepress/public/images/jiaoyan111.png" alt="图片">
绑定数据和规则校验
<img src="@source/.vuepress/public/images/jiaoyanyuangong.png" alt="图片"></p>
<h3 id="_6-4-加载部门数据转化树形" tabindex="-1"><a class="header-anchor" href="#_6-4-加载部门数据转化树形" aria-hidden="true">#</a> 6.4 加载部门数据转化树形</h3>
<p><strong>聘用形式</strong>和<strong>选择部门</strong>的处理</p>
<blockquote>
<p>员工的部门是从树形部门中选择一个部门 (如图)
<img src="@source/.vuepress/public/images/bumenxuqiu.png" alt="图片"></p>
</blockquote>
<h4 id="获取部门数据-转化树形" tabindex="-1"><a class="header-anchor" href="#获取部门数据-转化树形" aria-hidden="true">#</a> 获取部门数据，转化树形</h4>
<p><img src="@source/.vuepress/public/images/huoqu.png" alt="图片">
<img src="@source/.vuepress/public/images/huoqu02.png" alt="图片">
<img src="@source/.vuepress/public/images/huoqu03.png" alt="图片">
<img src="@source/.vuepress/public/images/huoqu04.png" alt="图片"></p>
<h3 id="_6-5-点击部门节点时赋值表单数据" tabindex="-1"><a class="header-anchor" href="#_6-5-点击部门节点时赋值表单数据" aria-hidden="true">#</a> 6.5 点击部门节点时赋值表单数据</h3>
<p><img src="@source/.vuepress/public/images/huoqu06.png" alt="图片"></p>
<h4 id="点击部门时触发" tabindex="-1"><a class="header-anchor" href="#点击部门时触发" aria-hidden="true">#</a> 点击部门时触发</h4>
<p><img src="@source/.vuepress/public/images/huoqu05.png" alt="图片"></p>
<h4 id="聘用形式" tabindex="-1"><a class="header-anchor" href="#聘用形式" aria-hidden="true">#</a> 聘用形式</h4>
<p><img src="@source/.vuepress/public/images/pinyongxingshi.png" alt="图片"></p>
<h2 id="_7-新增员工功能-确定-取消-掌握" tabindex="-1"><a class="header-anchor" href="#_7-新增员工功能-确定-取消-掌握" aria-hidden="true">#</a> 7. 新增员工功能-确定-取消 (掌握)</h2>
<p>调用新增接口
<img src="@source/.vuepress/public/images/xinzeng666.png" alt="图片"></p>
<p>绑定方法
<img src="@source/.vuepress/public/images/bangding1.png" alt="图片">
<img src="@source/.vuepress/public/images/bangding2.png" alt="图片"></p>
<h2 id="_8-员工-导入组件-封装" tabindex="-1"><a class="header-anchor" href="#_8-员工-导入组件-封装" aria-hidden="true">#</a> 8. 员工 导入组件 封装</h2>
<p>封装一个导入 excel 数据的文件
<img src="@source/.vuepress/public/images/daoru01.png" alt="图片">
首先封装一个类似的组件，首先需要注意的是，类似功能，vue-element-admin已经提供了，我们只需要改造即可
<a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/UploadExcel/index.vue" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></p>
<blockquote>
<p>类似功能性的组件，只需要会使用和封装即可</p>
</blockquote>
<p>excel导入功能需要使用 npm 包 <strong><code>xlsx</code></strong> ，所以需要安装 **<code>xlsx</code>**插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i xlsx@0.14.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>将vue-element-admin提供的导入功能新建一个组件，位置： <strong><code>src/components/UploadExcel</code></strong></p>
</blockquote>
<h4 id="注册全局的导入excel组件" tabindex="-1"><a class="header-anchor" href="#注册全局的导入excel组件" aria-hidden="true">#</a> 注册全局的导入excel组件</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PageTools <span class="token keyword">from</span> <span class="token string">'./PageTools'</span>
<span class="token keyword">import</span> UploadExcel <span class="token keyword">from</span> <span class="token string">'./UploadExcel'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'PageTools'</span><span class="token punctuation">,</span> PageTools<span class="token punctuation">)</span> <span class="token comment">// 注册工具栏组件</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'UploadExcel'</span><span class="token punctuation">,</span> UploadExcel<span class="token punctuation">)</span> <span class="token comment">// 注册导入excel组件</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="修改样式和布局" tabindex="-1"><a class="header-anchor" href="#修改样式和布局" aria-hidden="true">#</a> 修改样式和布局</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upload-excel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleUpload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        点击上传
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excel-upload-input<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>excel-upload-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.xlsx, .xls<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>drop<span class="token punctuation">"</span></span> <span class="token attr-name">@drop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDrop<span class="token punctuation">"</span></span> <span class="token attr-name">@dragover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDragover<span class="token punctuation">"</span></span> <span class="token attr-name">@dragenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDragover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-upload<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>将文件拖到此处<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.upload-excel</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
   <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
   <span class="token selector">.excel-upload-input</span><span class="token punctuation">{</span>
       <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> -9999<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token selector">.btn-upload , .drop</span><span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed #bbb<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token selector">.drop</span><span class="token punctuation">{</span>
       <span class="token property">line-height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
       <span class="token property">color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
      <span class="token selector">i</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_9-员工的导入" tabindex="-1"><a class="header-anchor" href="#_9-员工的导入" aria-hidden="true">#</a> 9. 员工的导入</h2>
<p>实现员工的导入</p>
<h3 id="_9-1-建立公共导入的页面路由" tabindex="-1"><a class="header-anchor" href="#_9-1-建立公共导入的页面路由" aria-hidden="true">#</a> 9.1 建立公共导入的页面路由</h3>
<p>新建一个公共的导入页面，挂载路由 <strong><code>src/router/index.js</code></strong>
<img src="@source/.vuepress/public/images/import555.png" alt="图片">
<strong>创建import路由组件</strong> <strong><code>src/views/import/index.vue</code></strong></p>
<h3 id="_9-2-分析excel导入代码-封装接口" tabindex="-1"><a class="header-anchor" href="#_9-2-分析excel导入代码-封装接口" aria-hidden="true">#</a> 9.2 分析excel导入代码，封装接口</h3>
<p>组件源代码中 :
<img src="@source/.vuepress/public/images/xlsx.png" alt="图片">
把 excel文件打开 或 拖进去 , success函数会得到对象 , 包含两个数组 header 和 results
<img src="@source/.vuepress/public/images/xlsx1.png" alt="图片"></p>
<blockquote>
<p>封装导入员工的 api 接口</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/piliang1.png" alt="图片"></p>
<h3 id="_9-3-实现-excel-导入" tabindex="-1"><a class="header-anchor" href="#_9-3-实现-excel-导入" aria-hidden="true">#</a> 9.3 实现 excel 导入</h3>
<p><strong>获取导入的excel数据, 导入excel接口</strong>
<img src="@source/.vuepress/public/images/excel1.png" alt="图片"></p>
<blockquote>
<p>为了让这个页面可以服务更多的导入功能，我们可以在页面中用参数来判断，是否是导入员工</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/excel2.png" alt="图片"></p>
<p>当 excel 中有日期格式的时候，实际转化的值为一个数字，我们需要一个方法进行转化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">formatDate</span><span class="token punctuation">(</span>numb<span class="token punctuation">,</span> format <span class="token operator">=</span> <span class="token string">"/"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">(</span>numb <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600000</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      time<span class="token punctuation">.</span><span class="token function">setYear</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">70</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> year <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">''</span>
      <span class="token keyword">const</span> month <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">''</span>
      <span class="token keyword">const</span> date <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">''</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>format <span class="token operator">&amp;&amp;</span> format<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> year <span class="token operator">+</span> format <span class="token operator">+</span> month <span class="token operator">+</span> format <span class="token operator">+</span> date
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> year <span class="token operator">+</span> <span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> month <span class="token operator">:</span> month<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>date <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date <span class="token operator">:</span> date<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote>
<p>需要注意，**`导入的手机号不能和之前的存在的手机号重复</p>
</blockquote>
<h4 id="逻辑判断" tabindex="-1"><a class="header-anchor" href="#逻辑判断" aria-hidden="true">#</a> <strong>逻辑判断</strong></h4>
<p><img src="@source/.vuepress/public/images/excel5.png" alt="图片">
<img src="@source/.vuepress/public/images/excel8.png" alt="图片"></p>
<h4 id="员工页面跳转" tabindex="-1"><a class="header-anchor" href="#员工页面跳转" aria-hidden="true">#</a> 员工页面跳转</h4>
<p><img src="@source/.vuepress/public/images/excel6.png" alt="图片"></p>
<h2 id="_10-员工导出-excel-功能" tabindex="-1"><a class="header-anchor" href="#_10-员工导出-excel-功能" aria-hidden="true">#</a> 10. 员工导出 excel 功能</h2>
<p>实现将员工数据导出功能</p>
<blockquote>
<p>日常业务中，经常遇到excel导出功能， 怎么使用呢</p>
</blockquote>
<p>Excel 的导入导出都是依赖于<a href="https://github.com/SheetJS/js-xlsx" target="_blank" rel="noopener noreferrer">js-xlsx<ExternalLinkIcon/></a>来实现的。</p>
<p>在 <code>js-xlsx</code>的基础上又封装了<a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/src/vendor/Export2Excel.js" target="_blank" rel="noopener noreferrer">Export2Excel.js<ExternalLinkIcon/></a>来方便导出数据。</p>
<h3 id="_10-1-安装-excel-所需依赖和按需加载" tabindex="-1"><a class="header-anchor" href="#_10-1-安装-excel-所需依赖和按需加载" aria-hidden="true">#</a> 10.1 安装 excel 所需依赖和按需加载</h3>
<p>由于 <code>Export2Excel</code>不仅依赖<code>js-xlsx</code>还依赖<code>file-saver</code>和<code>script-loader</code>。</p>
<p>所以需要安装如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> xlsx@0.14.1
<span class="token function">npm</span> <span class="token function">install</span>  file-saver@2.0.1 -S
<span class="token function">npm</span> <span class="token function">install</span> script-loader@0.7.2 -S -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由于 <code>js-xlsx</code> 体积还是很大的，导出功能也不是一个非常常用的功能，所以使用的时候建议使用懒加载。使用方法如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/vendor/Export2Excel'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">excel</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  excel<span class="token punctuation">.</span><span class="token function">export_json_to_excel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> tHeader<span class="token punctuation">,</span> <span class="token comment">//表头 必填</span>
    data<span class="token punctuation">,</span> <span class="token comment">//具体数据 必填</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'excel-list'</span><span class="token punctuation">,</span> <span class="token comment">//非必填</span>
    <span class="token literal-property property">autoWidth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//非必填</span>
    <span class="token literal-property property">bookType</span><span class="token operator">:</span> <span class="token string">'xlsx'</span> <span class="token comment">//非必填</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>简单例子:
<img src="@source/.vuepress/public/images/excellizi1.png" alt="图片">
<img src="@source/.vuepress/public/images/excellizi2.png" alt="图片"></p>
<h3 id="_10-2-excel-导出参数的介绍" tabindex="-1"><a class="header-anchor" href="#_10-2-excel-导出参数的介绍" aria-hidden="true">#</a> 10.2 excel 导出参数的介绍</h3>
<blockquote>
<p>vue-element-admin提供了导出的功能模块，在课程资源/excel导出目录下，放置到 src 目录下</p>
</blockquote>
<p><strong>参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>导出数据的表头</td>
<td>Array</td>
<td>/</td>
<td>[]</td>
</tr>
<tr>
<td>data</td>
<td>导出的具体数据</td>
<td>Array</td>
<td>/</td>
<td>[[]]</td>
</tr>
<tr>
<td>filename</td>
<td>导出文件名</td>
<td>String</td>
<td>/</td>
<td>excel-list</td>
</tr>
<tr>
<td>autoWidth</td>
<td>单元格是否要自适应宽度</td>
<td>Boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>bookType</td>
<td>导出文件类型</td>
<td>String</td>
<td>xlsx, csv, txt, <a href="https://github.com/SheetJS/js-xlsx#supported-output-formats" target="_blank" rel="noopener noreferrer">more<ExternalLinkIcon/></a></td>
<td>xlsx</td>
</tr>
</tbody>
</table>
<h3 id="_10-3-excel-导出基本的结构-代码-导出-时间格式处理" tabindex="-1"><a class="header-anchor" href="#_10-3-excel-导出基本的结构-代码-导出-时间格式处理" aria-hidden="true">#</a> 10.3 excel 导出基本的结构(代码) + (导出 时间格式处理)</h3>
<blockquote>
<p>最重要的一件事，就是把表头 header和数据 data 进行相应的对应</p>
</blockquote>
<p>因为数据中的 key 是英文，想要导出的表头是中文的话，需要将中文和英文做对应</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'手机号'</span><span class="token operator">:</span> <span class="token string">'mobile'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'姓名'</span><span class="token operator">:</span> <span class="token string">'username'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'入职日期'</span><span class="token operator">:</span> <span class="token string">'timeOfEntry'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'聘用形式'</span><span class="token operator">:</span> <span class="token string">'formOfEmployment'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'转正日期'</span><span class="token operator">:</span> <span class="token string">'correctionTime'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'工号'</span><span class="token operator">:</span> <span class="token string">'workNumber'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'部门'</span><span class="token operator">:</span> <span class="token string">'departmentName'</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>然后，<strong>完成导出代码</strong></p>
<p><img src="@source/.vuepress/public/images/excelzuizhong.png" alt="图片">
<img src="@source/.vuepress/public/images/excelzuizhong2.png" alt="图片"></p>
<h3 id="_10-4-扩展-复杂表头的导出" tabindex="-1"><a class="header-anchor" href="#_10-4-扩展-复杂表头的导出" aria-hidden="true">#</a> 10.4 扩展:复杂表头的导出</h3>
<blockquote>
<p>当需要导出复杂表头的时候，vue-element-admin同样支持该类操作</p>
</blockquote>
<p><strong>vue-element-admin</strong> 提供的导出方法中有 <strong>multiHeader</strong>和<strong>merges</strong> 的参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>multiHeader</td>
<td>复杂表头的部分</td>
<td>Array</td>
<td>/</td>
<td>[[]]</td>
</tr>
<tr>
<td>merges</td>
<td>需要合并的部分</td>
<td>Array</td>
<td>/</td>
<td>[]</td>
</tr>
</tbody>
</table>
<p>multiHeader里面是一个二维数组，里面的一个元素是一行表头，假设你想得到一个如图的结构</p>
<p><img src="@source/.vuepress/public/images/fuzabiaotou.png" alt="图片"></p>
<p>mutiHeader应该这样定义</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> multiHeader <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token string">'主要信息'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'部门'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>multiHeader中的一行表头中的字段的个数需要和真正的列数相等，假设想要跨列，多余的空间需要定义成空串</p>
<p>它主要对应的是标准的表头</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> header <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token string">'手机号'</span><span class="token punctuation">,</span> <span class="token string">'入职日期'</span><span class="token punctuation">,</span> <span class="token string">'聘用形式'</span><span class="token punctuation">,</span> <span class="token string">'转正日期'</span><span class="token punctuation">,</span> <span class="token string">'工号'</span><span class="token punctuation">,</span> <span class="token string">'部门'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果，我们要实现其合并的效果， 需要设定merges选项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> merges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'A1:A2'</span><span class="token punctuation">,</span> <span class="token string">'B1:F1'</span><span class="token punctuation">,</span> <span class="token string">'G1:G2'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>merges的顺序是没关系的，只要配置这两个属性，就可以导出复杂表头的excel了</p>
<p><img src="@source/.vuepress/public/images/fuzabiaotou2.png" alt="图片"></p>
<h2 id="_11-员工详情页创建和布局" tabindex="-1"><a class="header-anchor" href="#_11-员工详情页创建和布局" aria-hidden="true">#</a> 11. 员工详情页创建和布局</h2>
<h3 id="_11-1-详情页的基本布局和路由" tabindex="-1"><a class="header-anchor" href="#_11-1-详情页的基本布局和路由" aria-hidden="true">#</a> 11.1 详情页的基本布局和路由</h3>
<p><img src="@source/.vuepress/public/images/yuangongxiangqing0.png" alt="图片">
<strong>建立详情页路由</strong>
<img src="@source/.vuepress/public/images/yuangongxiangqing1.png" alt="图片">
<strong>建立基本架构</strong>
<img src="@source/.vuepress/public/images/yuangongxiangqing3.png" alt="图片">
<strong>列表跳转到详情</strong>
<img src="@source/.vuepress/public/images/yuangongxiangqing4.png" alt="图片"></p>
<h3 id="_11-2-读取和保存用户信息的接口" tabindex="-1"><a class="header-anchor" href="#_11-2-读取和保存用户信息的接口" aria-hidden="true">#</a> 11.2 读取和保存用户信息的接口</h3>
<p><strong>加载个人基本信息</strong> &gt; 该接口已经在之前写过了 <strong><code>src/api/user.js</code></strong>
<img src="@source/.vuepress/public/images/yg1.png" alt="图片">
<strong>保存个人基本信息</strong>  <strong><code>src/api/employees.js</code></strong>
<img src="@source/.vuepress/public/images/yg2.png" alt="图片"></p>
<h3 id="_11-3-实现用户名和密码的修改" tabindex="-1"><a class="header-anchor" href="#_11-3-实现用户名和密码的修改" aria-hidden="true">#</a> 11.3 实现用户名和密码的修改</h3>
<p><strong><code>注意</code></strong>：这里有个缺陷，接口中读取的是后端的密文，我们并不能解密，所以当我们没有任何修改就保存时，会校验失败，因为密文超过了规定的12位长度，为了真的修改密码，我们设定了一个临时的字段 <strong>password2</strong>，用它来存储我们的修改值，最后保存的时候，把<strong>password2</strong>传给<strong>password</strong></p>
<h4 id="用户名和密码的修改-src-views-employees-detail-vue" tabindex="-1"><a class="header-anchor" href="#用户名和密码的修改-src-views-employees-detail-vue" aria-hidden="true">#</a> <strong>用户名和密码的修改</strong>  <strong><code>src/views/employees/detail.vue</code></strong></h4>
<p><img src="@source/.vuepress/public/images/ym1.png" alt="图片">
<strong>绑定表单数据</strong>
<img src="@source/.vuepress/public/images/ym2.png" alt="图片"></p>
<h2 id="_12-个人组件和岗位组件封装" tabindex="-1"><a class="header-anchor" href="#_12-个人组件和岗位组件封装" aria-hidden="true">#</a> 12. 个人组件和岗位组件封装</h2>
<h3 id="_12-1-封装个人详情组件" tabindex="-1"><a class="header-anchor" href="#_12-1-封装个人详情组件" aria-hidden="true">#</a> 12.1 封装个人详情组件</h3>
<p><img src="@source/.vuepress/public/images/userinfo0.png" alt="图片">
封装个人组件**   <strong><code>src/views/employees/components/user-info.vue</code></strong></p>
<p>略</p>
<p>在 detail.vue 组件中，注册并使用
<img src="@source/.vuepress/public/images/userinfo1.png" alt="图片">
<img src="@source/.vuepress/public/images/userinfo2.png" alt="图片">
在以上代码中，使用了动态组件<strong>component</strong>，它通过 **<code>is</code>**属性来绑定需要显示在该位置的组件，is 属性可以直接为 <strong><code>注册组件</code></strong> 的组件名称即可</p>
<h3 id="_12-2-封装改为组件" tabindex="-1"><a class="header-anchor" href="#_12-2-封装改为组件" aria-hidden="true">#</a> 12.2 封装改为组件</h3>
<p>封装岗位组件**  <strong><code>src/views/employee/components/job-info.vue</code></strong></p>
<p>略(都是表单 , 繁琐)</p>
<p><strong>在detail.vue组件中，注册并使用</strong>
<img src="@source/.vuepress/public/images/jobinfo1.png" alt="图片">
<img src="@source/.vuepress/public/images/job.png" alt="图片"></p>
<h2 id="_13-员工个人信息和岗位信息-读取-保存" tabindex="-1"><a class="header-anchor" href="#_13-员工个人信息和岗位信息-读取-保存" aria-hidden="true">#</a> 13. 员工个人信息和岗位信息-读取-保存</h2>
<p>实现个人信息的岗位信息的读取和校验，保存</p>
<h3 id="_13-1-读取个人保存个人信息" tabindex="-1"><a class="header-anchor" href="#_13-1-读取个人保存个人信息" aria-hidden="true">#</a> 13.1 读取个人保存个人信息</h3>
<p>封装 <strong>读取个人信息</strong> <strong>保存个人信息</strong>  <strong>读取岗位信息</strong> <strong>保存岗位信息</strong><br>
<img src="@source/.vuepress/public/images/xinxi01.png" alt="图片">
读取，保存个人信息**  <strong><code>user-info</code></strong>  需要注意：这里的保存实际上分成了两个接口，这是接口的设计，只能遵守</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getPersonalDetail<span class="token punctuation">,</span> updatePersonal<span class="token punctuation">,</span> saveUserDetailById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/employees'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserDetailById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/user'</span>
 <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPersonalDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUserDetailById</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getPersonalDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>formData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPersonalDetail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token punctuation">)</span> <span class="token comment">// 获取员工数据</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">savePersonal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">updatePersonal</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'保存成功'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  调用父组件</span>
      <span class="token keyword">await</span> <span class="token function">saveUserDetailById</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'保存成功'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">getUserDetailById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserDetailById</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_13-2-读取保存岗位信息" tabindex="-1"><a class="header-anchor" href="#_13-2-读取保存岗位信息" aria-hidden="true">#</a> 13.2 读取保存岗位信息</h3>
<p><strong>读取，保存岗位信息</strong>  <strong><code>job-info</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> getEmployeeSimple<span class="token punctuation">,</span> updateJob<span class="token punctuation">,</span> getJobDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/employees'</span>

  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEmployeeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>formData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getJobDetail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 获取员工列表</span>
    <span class="token keyword">async</span> <span class="token function">getEmployeeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>depts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getEmployeeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 保存岗位信息</span>
    <span class="token keyword">async</span> <span class="token function">saveJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">updateJob</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'保存岗位信息成功'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
