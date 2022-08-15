<template><h1 id="路由和页面" tabindex="-1"><a class="header-anchor" href="#路由和页面" aria-hidden="true">#</a> 路由和页面</h1>
<p>首先，需要知道类似大型中台项目的页面路由是如何设置的</p>
<h4 id="简单项目" tabindex="-1"><a class="header-anchor" href="#简单项目" aria-hidden="true">#</a> 简单项目</h4>
<p><img src="@source/.vuepress/public/images/jiandanxiangmu.png" alt="图片"></p>
<h4 id="当前项目结构" tabindex="-1"><a class="header-anchor" href="#当前项目结构" aria-hidden="true">#</a> 当前项目结构</h4>
<p><img src="@source/.vuepress/public/images/zhongtaixiangmu.png" alt="图片"></p>
<blockquote>
<p>为什么要拆成若干个路由模块呢？</p>
</blockquote>
<p>因为复杂中台项目的页面众多，不可能把所有的业务都集中在一个文件上进行管理和维护，并且还有最重要的，前端的页面中主要分为两部分，一部分是所有人都可以访问的， 一部分是只有有权限的人才可以访问的，拆分多个模块便于更好的控制</p>
<h4 id="静态路由和动态路由" tabindex="-1"><a class="header-anchor" href="#静态路由和动态路由" aria-hidden="true">#</a> 静态路由和动态路由</h4>
<p><img src="@source/.vuepress/public/images/jd.png" alt="图片"></p>
<h4 id="静态路由表" tabindex="-1"><a class="header-anchor" href="#静态路由表" aria-hidden="true">#</a> 静态路由表</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> constantRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/login/index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/404'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/404'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Dashboard'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/dashboard/index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Dashboard'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'dashboard'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 404 page must be placed at the end !!!</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/404'</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="业务模块页面的快速搭建" tabindex="-1"><a class="header-anchor" href="#业务模块页面的快速搭建" aria-hidden="true">#</a> 业务模块页面的快速搭建</h2>
<p>快速搭建人资项目的常规业务模块</p>
<h3 id="新建模块的页面和路由文件" tabindex="-1"><a class="header-anchor" href="#新建模块的页面和路由文件" aria-hidden="true">#</a> 新建模块的页面和路由文件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── dashboard           # 首页
├── login               # 登录
├── 404                 # 404
├── departments         # 组织架构
├── employees           # 员工
├── setting             # 公司设置
├── salarys             # 工资
├── social              # 社保
├── attendances         # 考勤
├── approvals           # 审批
├── permission          # 权限管理
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在 views 目录下，建立对应的目录，给每个模块新建一个**<code>index.vue</code>**，作为每个模块的主页</p>
<h4 id="快速新建文件夹" tabindex="-1"><a class="header-anchor" href="#快速新建文件夹" aria-hidden="true">#</a> 快速新建文件夹</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> departments employees setting salarys social attendances approvals permission
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>每个模块的内容，可以先按照标准的模板建立</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashboard-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
        员工
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>根据以上的标准建立好对应页面之后，接下来建立每个模块的路由规则</p>
<p>路由模块目录结构</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── router               # 路由目录
 ├── index.js            # 路由主文件
 ├── modules             # 模块目录
  ├── departments.js     # 组织架构
  ├── employees.js       # 员工 
  ├── setting.js         # 公司设置
  ├── salarys.js         # 工资
  ├── social.js          # 社保
  ├── attendances.js     # 考勤
  ├── approvals.js       # 审批
  ├── permission.js      # 权限管理
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>快速创建命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">touch</span> departments.js employees.js setting.js salarys.js salarys.js social.js attendances.js approvals.js permission.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="设置每个模块的路由规则" tabindex="-1"><a class="header-anchor" href="#设置每个模块的路由规则" aria-hidden="true">#</a> 设置每个模块的路由规则</h3>
<blockquote>
<p>每个模块导出的内容表示该模块下的路由规则</p>
</blockquote>
<p>如员工 <strong>employees.js</strong>
<img src="@source/.vuepress/public/images/employees.png" alt="图片">
上述代码中，我们用到了meta属性，该属性为一个对象，里面可放置自定义属性，主要用于读取一些配置和参数，并且值得 <strong>注意</strong> 的是：meta写了二级默认路由上面，而不是一级路由，因为当存在二级路由的时候，访问当前路由信息访问的就是 <strong><code>二级默认路由</code></strong></p>
<h2 id="静态路由和动态路由临时合并-形成左侧菜单" tabindex="-1"><a class="header-anchor" href="#静态路由和动态路由临时合并-形成左侧菜单" aria-hidden="true">#</a> 静态路由和动态路由临时合并，形成左侧菜单</h2>
<p>将静态路由和动态路由的路由表进行临时合并</p>
<blockquote>
<p>为啥先临时合并 ?
态路由是需要权限进行访问的，但是权限的动态路由访问是很复杂的，稍后在进行总结，所以为了更好地看到效果，可以先将 静态路由和动态路由进行合并</p>
</blockquote>
<h4 id="路由主文件-src-router-index-js" tabindex="-1"><a class="header-anchor" href="#路由主文件-src-router-index-js" aria-hidden="true">#</a> 路由主文件 <strong>src/router/index.js</strong></h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入多个模块的规则</span>
<span class="token keyword">import</span> approvalsRouter <span class="token keyword">from</span> <span class="token string">'./modules/approvals'</span>
<span class="token keyword">import</span> departmentsRouter <span class="token keyword">from</span> <span class="token string">'./modules/departments'</span>
<span class="token keyword">import</span> employeesRouter <span class="token keyword">from</span> <span class="token string">'./modules/employees'</span>
<span class="token keyword">import</span> permissionRouter <span class="token keyword">from</span> <span class="token string">'./modules/permission'</span>
<span class="token keyword">import</span> attendancesRouter <span class="token keyword">from</span> <span class="token string">'./modules/attendances'</span>
<span class="token keyword">import</span> salarysRouter <span class="token keyword">from</span> <span class="token string">'./modules/salarys'</span>
<span class="token keyword">import</span> settingRouter <span class="token keyword">from</span> <span class="token string">'./modules/setting'</span>
<span class="token keyword">import</span> socialRouter <span class="token keyword">from</span> <span class="token string">'./modules/social'</span>

<span class="token comment">// 动态路由</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  approvalsRouter<span class="token punctuation">,</span>
  departmentsRouter<span class="token punctuation">,</span>
  employeesRouter<span class="token punctuation">,</span>
  permissionRouter<span class="token punctuation">,</span>
  attendancesRouter<span class="token punctuation">,</span>
  salarysRouter<span class="token punctuation">,</span>
  settingRouter<span class="token punctuation">,</span>
  socialRouter
<span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// mode: 'history', // require service support</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 管理滚动行为 如果出现滚动 切换就让 让页面回到顶部</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>constantRoutes<span class="token punctuation">,</span> <span class="token operator">...</span>asyncRoutes<span class="token punctuation">]</span> <span class="token comment">// 临时合并所有的路由</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>当合并权限完成，我们惊奇的发现页面效果已经左侧的导航菜单 =》 路由页面
<img src="@source/.vuepress/public/images/caidanxiaoguo.png" alt="图片"></p>
<h2 id="左侧菜单的显示逻辑-设置菜单图标" tabindex="-1"><a class="header-anchor" href="#左侧菜单的显示逻辑-设置菜单图标" aria-hidden="true">#</a> 左侧菜单的显示逻辑 ，设置菜单图标</h2>
<p>分析左侧菜单的显示逻辑，  设置左侧导航菜单的图标内容</p>
<blockquote>
<p>上面集成了路由，菜单就显示内容了，这是为什么 ？</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/zuocecaidan.png" alt="图片">
项目不需要二级菜单的显示，所以对代码进行一下处理，只保留一级菜单路由
<img src="@source/.vuepress/public/images/caidandaima.png" alt="图片">
通过代码发现，当路由中的属性 <strong>hidden</strong> 为true时，表示该路由不显示在左侧菜单中</p>
<h4 id="模块对应icon" tabindex="-1"><a class="header-anchor" href="#模块对应icon" aria-hidden="true">#</a> <strong>模块对应icon</strong></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── dashboard           # dashboard
├── departments         # tree
├── employees           # people
├── setting             # setting
├── salarys             # money
├── social              # table
├── attendances         # skill
├── approvals           # tree-table
├── permission          # lock
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="@source/.vuepress/public/images/icon2.png" alt="图片">
按照对应的 icon 设置图标</p>
</template>
