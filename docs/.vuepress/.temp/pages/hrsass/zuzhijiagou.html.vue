<template><h1 id="组织架构" tabindex="-1"><a class="header-anchor" href="#组织架构" aria-hidden="true">#</a> 组织架构</h1>
<h2 id="组织架构树形结构布局" tabindex="-1"><a class="header-anchor" href="#组织架构树形结构布局" aria-hidden="true">#</a> 组织架构树形结构布局</h2>
<p>使用 element-UI 组件布局组织架构的基本布局</p>
<h3 id="实现组织架构的头部内容" tabindex="-1"><a class="header-anchor" href="#实现组织架构的头部内容" aria-hidden="true">#</a> 实现组织架构的头部内容</h3>
<p><img src="@source/.vuepress/public/images/zztoubu.png" alt="图片">
首先实现头部的结构，采用element 的 <strong>行列布局</strong>
<img src="@source/.vuepress/public/images/toubu1.png" alt="图片">
样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style lang="scss" scoped>
.tree-card</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 30px  140px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.companyName</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span>bolder<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="树形组件" tabindex="-1"><a class="header-anchor" href="#树形组件" aria-hidden="true">#</a> 树形组件</h3>
<p>接下来，实现树形的结构，采用element的<a href="https://element.eleme.cn/#/zh-CN/component/tree" target="_blank" rel="noopener noreferrer">el-tree组件<ExternalLinkIcon/></a></p>
<blockquote>
<p>树形组件属性</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">default-expand-all</td>
<td style="text-align:left">是否默认展开所有节点</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">展示数据</td>
<td style="text-align:left">array</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">node-key</td>
<td style="text-align:left">每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td>
<td style="text-align:left">String</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">props</td>
<td style="text-align:left">配置选项，具体看下表</td>
<td style="text-align:left">object</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
</tbody>
</table>
<p><strong>props属性</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">指定节点标签为节点对象的某个属性值</td>
<td style="text-align:left">string, function(data, node)</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">children</td>
<td style="text-align:left">指定子树为节点对象的某个属性值</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">disabled</td>
<td style="text-align:left">指定节点选择框是否禁用为节点对象的某个属性值</td>
<td style="text-align:left">boolean, function(data, node)</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">isLeaf</td>
<td style="text-align:left">指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效</td>
<td style="text-align:left">boolean, function(data, node)</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
</tbody>
</table>
<p><strong>data</strong>是组成树形数据的关键，如下的数据便能构建树形数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          label<span class="token operator">:</span> '一级 <span class="token number">1</span>'<span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            label<span class="token operator">:</span> '二级 <span class="token number">1</span><span class="token number">-1</span>'<span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              label<span class="token operator">:</span> '三级 <span class="token number">1</span><span class="token number">-1</span><span class="token number">-1</span>'
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          label<span class="token operator">:</span> '一级 <span class="token number">2</span>'<span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            label<span class="token operator">:</span> '二级 <span class="token number">2</span><span class="token number">-1</span>'<span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              label<span class="token operator">:</span> '三级 <span class="token number">2</span><span class="token number">-1</span><span class="token number">-1</span>'
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            label<span class="token operator">:</span> '二级 <span class="token number">2</span><span class="token number">-2</span>'<span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              label<span class="token operator">:</span> '三级 <span class="token number">2</span><span class="token number">-2</span><span class="token number">-1</span>'
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          label<span class="token operator">:</span> '一级 <span class="token number">3</span>'<span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            label<span class="token operator">:</span> '二级 <span class="token number">3</span><span class="token number">-1</span>'<span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              label<span class="token operator">:</span> '三级 <span class="token number">3</span><span class="token number">-1</span><span class="token number">-1</span>'
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            label<span class="token operator">:</span> '二级 <span class="token number">3</span><span class="token number">-2</span>'<span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              label<span class="token operator">:</span> '三级 <span class="token number">3</span><span class="token number">-2</span><span class="token number">-1</span>'
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="实现树形的静态组织架构" tabindex="-1"><a class="header-anchor" href="#实现树形的静态组织架构" aria-hidden="true">#</a> 实现树形的静态组织架构</h3>
<p>接下来，对每个层级节点增加显示内容，此时需要用到 tree 的<strong>作用域插槽</strong>
<img src="@source/.vuepress/public/images/shuxing1.png" alt="图片">
<img src="@source/.vuepress/public/images/shuxing2.png" alt="图片"></p>
<p>静态结构的效果:
<img src="@source/.vuepress/public/images/xiaoguo55.png" alt="图片"></p>
<h2 id="将树形的操作内容-单独抽提成组件" tabindex="-1"><a class="header-anchor" href="#将树形的操作内容-单独抽提成组件" aria-hidden="true">#</a> 将树形的操作内容 单独抽提成组件</h2>
<p>将树形的操作内容单独抽提成组件</p>
<h3 id="封装单独的树操作栏组件" tabindex="-1"><a class="header-anchor" href="#封装单独的树操作栏组件" aria-hidden="true">#</a> 封装单独的树操作栏组件</h3>
<blockquote>
<p>现在发现，树形的顶级内容实际和子节点的内容是一致的，此时可以将相同的该部分抽提成一个组件，节省代码</p>
</blockquote>
<p>组件 <strong>src/views/departments/components/tree-tools.vue</strong>
<img src="@source/.vuepress/public/images/treetool.png" alt="图片"></p>
<h3 id="在组织架构中应用操作栏组件" tabindex="-1"><a class="header-anchor" href="#在组织架构中应用操作栏组件" aria-hidden="true">#</a> 在组织架构中应用操作栏组件</h3>
<p>接下来，在 <strong><code>src/views/departments/index.vue</code></strong> 进行代码的简化
<img src="@source/.vuepress/public/images/tool1.png" alt="图片">
上面代码中，company 变量需要在 data 中定义</p>
<p>同时，由于在两个位置都使用了该组件，但是放置在最上层的组件是不需要显示 <strong><code>删除部门</code></strong> 和 <strong><code>编辑部门</code></strong> 的</p>
<p>所以，增加一个新的属性 <strong><code>isRoot（是否根节点）</code></strong> 进行控制
<img src="@source/.vuepress/public/images/isRoot1.png" alt="图片"></p>
<p>组件中， 根据isRoot判断显示</p>
<p><img src="@source/.vuepress/public/images/isRoot2.png" alt="图片"></p>
<blockquote>
<p>通过封装，代码看上去更加紧凑，简洁，这就是封装的魅力</p>
</blockquote>
<h2 id="获取组织架构数据-并进行树形处理" tabindex="-1"><a class="header-anchor" href="#获取组织架构数据-并进行树形处理" aria-hidden="true">#</a> 获取组织架构数据，并进行树形处理</h2>
<p>获取真实的组织架构数据，并将其转化成树形数据显示在页面上</p>
<h3 id="封装-api-接口-获取组织架构数据" tabindex="-1"><a class="header-anchor" href="#封装-api-接口-获取组织架构数据" aria-hidden="true">#</a> 封装 API 接口，获取组织架构数据</h3>
<blockquote>
<p>现在基本的静态结构已经形成，接下来需要获取真实的数据</p>
</blockquote>
<p>首先，<strong>封装获取组织架构的请 求</strong> <strong><code>src/api/departments.js</code></strong>
<img src="@source/.vuepress/public/images/gede1.png" alt="图片">
在钩子函数中调用接口
<img src="@source/.vuepress/public/images/gede2.png" alt="图片"></p>
<h3 id="将数组数据转化成树形结构" tabindex="-1"><a class="header-anchor" href="#将数组数据转化成树形结构" aria-hidden="true">#</a> 将数组数据转化成树形结构</h3>
<p>然后，需要将列表型的数据，转化成树形数据，这里需要用到 <strong>递归算法</strong>
<img src="@source/.vuepress/public/images/idpid.png" alt="图片"></p>
<p>封装一个工具方法，<strong><code>src/utils/index.js</code></strong>
<img src="@source/.vuepress/public/images/shuxingdigui.png" alt="图片">
调用转化方法，转化树形结构
<img src="@source/.vuepress/public/images/shuxingdigui2.png" alt="图片">
这样一来，树形数据就有了</p>
<h2 id="删除部门功能实现" tabindex="-1"><a class="header-anchor" href="#删除部门功能实现" aria-hidden="true">#</a> 删除部门功能实现</h2>
<p>实现操作功能的删除功能</p>
<h3 id="封装删除接口-注册下拉菜单事件" tabindex="-1"><a class="header-anchor" href="#封装删除接口-注册下拉菜单事件" aria-hidden="true">#</a> 封装删除接口，注册下拉菜单事件</h3>
<p>首先，封装删除功能模块 <strong>src/api/departments.js</strong>
<img src="@source/.vuepress/public/images/shanchubumen.png" alt="图片"></p>
<p>然后，在 tree-tools 组件中，监听下拉菜单的点击事件  <strong><code>src/views/departments/index.vue</code></strong></p>
<p><a href="https://element.eleme.io/#/zh-CN/component/dropdown#zhi-ling-shi-jian" target="_blank" rel="noopener noreferrer">下拉菜单点击事件文档<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/xialacaidan1.png" alt="图片"></p>
<blockquote>
<p>dropdown 下拉菜单的监听事件 command
<img src="@source/.vuepress/public/images/command.png" alt="图片"></p>
</blockquote>
<h3 id="调用删除接口-通知父组件更新数据" tabindex="-1"><a class="header-anchor" href="#调用删除接口-通知父组件更新数据" aria-hidden="true">#</a> 调用删除接口，通知父组件更新数据</h3>
<blockquote>
<p>删除之前，提示用户是否删除，然后调用删除接口</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/deljiekoui.png" alt="图片"></p>
<blockquote>
<p>上面代码中，我们成功删除了员工数据，但是怎么通知父组件进行更新呢(只是调了接口, 后端数据变 , 但前端没变)</p>
</blockquote>
<p>通过自定义事件 <strong><code>this.$emit</code></strong> 的方式来进行
<img src="@source/.vuepress/public/images/emitdel.png" alt="图片"></p>
<p>父组件监听事件 <strong><code>src/views/department/index.vue</code></strong>
<img src="@source/.vuepress/public/images/fuzujianjianting.png" alt="图片"></p>
<h2 id="新增部门功能-建立组件" tabindex="-1"><a class="header-anchor" href="#新增部门功能-建立组件" aria-hidden="true">#</a> 新增部门功能-建立组件</h2>
<p><img src="@source/.vuepress/public/images/tianjiabumen.png" alt="图片"></p>
<h3 id="封装新增接口-新建组件中的弹层结构" tabindex="-1"><a class="header-anchor" href="#封装新增接口-新建组件中的弹层结构" aria-hidden="true">#</a> 封装新增接口，新建组件中的弹层结构</h3>
<p>首先， 封装新增部门的 api 模块  <strong><code>src/api/departments.js</code></strong>
<img src="@source/.vuepress/public/images/adddepartment.png" alt="图片"></p>
<p>然后，需要构建一个新增部门的窗体组件 <strong><code>src/views/department/components/add-dept.vue</code></strong>
<img src="@source/.vuepress/public/images/dialog1.png" alt="图片"></p>
<h3 id="点击新增子部门显示弹层组件" tabindex="-1"><a class="header-anchor" href="#点击新增子部门显示弹层组件" aria-hidden="true">#</a> 点击新增子部门显示弹层组件</h3>
<p><img src="@source/.vuepress/public/images/zuzhitu.png" alt="图片"></p>
<p>然后，需要用属性控制组件的显示或者隐藏 , <strong>add-dept.vue</strong>
<img src="@source/.vuepress/public/images/xinzeng1.png" alt="图片"></p>
<p>在 <strong><code>departments/index.vue</code></strong> 中引入该组件
<img src="@source/.vuepress/public/images/xinzeng2.png" alt="图片"></p>
<p>定义控制窗体显示的变量 <strong><code>showDialog</code></strong>
<img src="@source/.vuepress/public/images/xinzeng3.png" alt="图片"></p>
<p>当点击新增部门时，弹出组件</p>
<blockquote>
<p>注意，点击新增时 tree-tools 组件，所以这里，依然需要子组件调用父组件</p>
</blockquote>
<h4 id="子组件触发新增事件-src-views-departments-tree-tools-vue" tabindex="-1"><a class="header-anchor" href="#子组件触发新增事件-src-views-departments-tree-tools-vue" aria-hidden="true">#</a> 子组件触发新增事件 <strong><code>src/views/departments/tree-tools.vue</code></strong></h4>
<p><img src="@source/.vuepress/public/images/xinzeng.png" alt="图片"></p>
<h4 id="父组件监听事件" tabindex="-1"><a class="header-anchor" href="#父组件监听事件" aria-hidden="true">#</a> 父组件监听事件</h4>
<p><img src="@source/.vuepress/public/images/xinzeng5.png" alt="图片"></p>
<h4 id="方法中弹出层-记录在哪个节点下添加子部门" tabindex="-1"><a class="header-anchor" href="#方法中弹出层-记录在哪个节点下添加子部门" aria-hidden="true">#</a> 方法中弹出层,记录在哪个节点下添加子部门</h4>
<p><img src="@source/.vuepress/public/images/xinzeng6.png" alt="图片"></p>
<h2 id="完成新增部门的规则校验" tabindex="-1"><a class="header-anchor" href="#完成新增部门的规则校验" aria-hidden="true">#</a> 完成新增部门的规则校验</h2>
<p>成新增部门功能的规则校验和数据提交部分</p>
<h3 id="完成新增表单的基本校验条件" tabindex="-1"><a class="header-anchor" href="#完成新增表单的基本校验条件" aria-hidden="true">#</a> 完成新增表单的基本校验条件</h3>
<p>部门名称（name）：必填 1-50个字符  / 同级部门中禁止出现重复部门</p>
<p>部门编码（code）：必填 1-50个字符  / 部门编码在整个模块中都不允许重复</p>
<p>部门负责人（manager）：必填</p>
<p>部门介绍 ( introduce)：必填 1-300个字符</p>
<blockquote>
<p>定义数据结构</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 部门名称</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 部门编码</span>
        <span class="token literal-property property">manager</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 部门管理者</span>
        <span class="token literal-property property">introduce</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment">// 部门介绍</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>完成表单校验需要的前置条件</p>
</blockquote>
<ul>
<li>el-form配置model和rules属性</li>
<li>el-form-item配置prop属性</li>
<li>表单进行v-model双向绑定</li>
</ul>
<h3 id="配置新增表单的基本校验规则" tabindex="-1"><a class="header-anchor" href="#配置新增表单的基本校验规则" aria-hidden="true">#</a> 配置新增表单的基本校验规则</h3>
<blockquote>
<p>根据这些要求，校验规则</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/bumenrules.png" alt="图片"></p>
<h3 id="部门名称和部门编码的自定义校验" tabindex="-1"><a class="header-anchor" href="#部门名称和部门编码的自定义校验" aria-hidden="true">#</a> 部门名称和部门编码的自定义校验</h3>
<p>效果图:
<img src="@source/.vuepress/public/images/xiaoguotu01.png" alt="图片"></p>
<p>部门名称（name）：必填 1-50个字符  / <strong>同级部门</strong>中<strong>禁止出现重复部门</strong></p>
<p>部门编码（code）：必填 1-50个字符  / 部门编码在<strong>整个模块</strong>中都<strong>不允许重复</strong></p>
<p><strong><code>注意</code></strong>：部门名称和部门编码的规则 有两条需要通过 <strong><code>自定义校验函数validator</code></strong> 来实现</p>
<blockquote>
<p>首先，在校验名称和编码时，要获取最新的组织架构，这也是我们这里trigger采用blur的原因，因为change对于访问的频率过高，我们需要控制访问频率</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  // 首先获取最新的组织架构数据
  const { depts } = await getDepartments()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>部门名称不能和 <strong><code>同级别</code></strong> 的重复，这里注意，需要找到所有同级别的数据，进行校验，所以还需要另一个参数 pid
<img src="@source/.vuepress/public/images/jiaoyan01.png" alt="图片">
根据当前部门 id，找到所有子部门相关的数据，判断是否重复
<img src="@source/.vuepress/public/images/jiaoyan02.png" alt="图片">
检查部门编码的过程同理
<img src="@source/.vuepress/public/images/jiaoyan03.png" alt="图片">
在规则中定义
<img src="@source/.vuepress/public/images/jiaoyan04.png" alt="图片"></p>
<h3 id="处理首部内容的-pid-数据" tabindex="-1"><a class="header-anchor" href="#处理首部内容的-pid-数据" aria-hidden="true">#</a> 处理首部内容的 pid 数据</h3>
<p>需要注意<code>**：在最根级的**</code>tree-tools`**组件中，由于 treenode 属性中没有id，id便是undefined，但是通过undefined进行等值判断是寻找不到对应的根节点的， 所以在传值时，将 id 属性设置为 &quot;&quot;</p>
<p>src/views/departments/index.vue
<img src="@source/.vuepress/public/images/pid1.png" alt="图片"></p>
<h2 id="新增部门功能-部门负责人的数据" tabindex="-1"><a class="header-anchor" href="#新增部门功能-部门负责人的数据" aria-hidden="true">#</a> 新增部门功能 - 部门负责人的数据</h2>
<p><strong>目标</strong>：获取新增表单中的部门负责人下拉数据</p>
<blockquote>
<p>在上节的表单中，部门负责人是下拉数据，我们应该从 <strong><code>员工接口</code></strong> 中获取该数据</p>
</blockquote>
<p>首先，封装获取简单员工列表的模块 <strong><code>src/api/employees.js</code></strong>
<img src="@source/.vuepress/public/images/fuze1.png" alt="图片"></p>
<p>然后，在 <strong><code>add-dept.vue</code></strong> 中的 select 聚焦事件 <strong><code>focus</code></strong> 中调用该接口，因为要获取实时的最新数据
<img src="@source/.vuepress/public/images/fuze2.png" alt="图片">
获取员工列表</p>
<p><img src="@source/.vuepress/public/images/fuze3.png" alt="图片"></p>
<h2 id="新增功能-提交-取消-关闭" tabindex="-1"><a class="header-anchor" href="#新增功能-提交-取消-关闭" aria-hidden="true">#</a> 新增功能-提交-取消-关闭</h2>
<p>完成新增模块的 提交-取消-关闭 等功能</p>
<h3 id="校验通过-调用新增接口" tabindex="-1"><a class="header-anchor" href="#校验通过-调用新增接口" aria-hidden="true">#</a> 校验通过，调用新增接口</h3>
<blockquote>
<p>当点击新增页面的确定按钮时，需要完成对表单的整体校验，如果校验成功，进行提交</p>
</blockquote>
<p>首先，在点击确定时，校验表单</p>
<h4 id="给el-form定义一个-ref-属性" tabindex="-1"><a class="header-anchor" href="#给el-form定义一个-ref-属性" aria-hidden="true">#</a> 给el-form定义一个 ref 属性</h4>
<p><img src="@source/.vuepress/public/images/tijiao1.png" alt="图片"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    // 点击确定时触发
    btnOK() {
      this.$refs.deptForm.validate(isOK => {
        if (isOK) {
          // 表示可以提交了
        }
      })
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后，在校验通过时，调用新增接口</p>
<blockquote>
<p>因为是添加子部门，所以需要将新增的部门 pid 设置成当前部门的 id ，新增的部门就成了自己的子部门</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/tijiao2.png" alt="图片">
同样，在新增成功之后，调用告诉父组件，重新拉取数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> this.$emit('addDepts')
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>父组件监听事件, 再次获取最新数据</p>
<p><img src="@source/.vuepress/public/images/tijiao3.png" alt="图片"></p>
<h3 id="利用-sync-修饰符关闭新增弹层" tabindex="-1"><a class="header-anchor" href="#利用-sync-修饰符关闭新增弹层" aria-hidden="true">#</a> 利用 sync 修饰符关闭新增弹层</h3>
<p>弹窗 dialog 的显示隐藏 现在是父组件控制的</p>
<blockquote>
<p>这里运用一个新的技巧， <strong><code>sync修饰符</code></strong></p>
</blockquote>
<p>按照常规，想要让父组件更新 <strong><code>showDialog</code></strong> 的话，需要这样做
<img src="@source/.vuepress/public/images/daima01.png" alt="图片"></p>
<blockquote>
<p>但是，vuejs为提供了 <strong><code>sync修饰符</code></strong>，它提供了一种简写模式 也就是</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/daima02.png" alt="图片"></p>
<p>只要用 .sync 修饰，就可以省略父组件的监听和方法，直接将值赋值给 showDialog变量
<img src="@source/.vuepress/public/images/guanbi01.png" alt="图片">
<img src="@source/.vuepress/public/images/guanbi02.png" alt="图片"></p>
<h3 id="点击取消时-重置数据和校验" tabindex="-1"><a class="header-anchor" href="#点击取消时-重置数据和校验" aria-hidden="true">#</a> 点击取消时 重置数据和校验</h3>
<p><img src="@source/.vuepress/public/images/btncancel.png" alt="图片">
<img src="@source/.vuepress/public/images/reset.png" alt="图片"></p>
<p>还需要在 el-dialog 中监听其 <strong>close事件</strong>
<img src="@source/.vuepress/public/images/btncancel2.png" alt="图片"></p>
<h2 id="编辑部门功能-实现数据回写" tabindex="-1"><a class="header-anchor" href="#编辑部门功能-实现数据回写" aria-hidden="true">#</a> 编辑部门功能 - 实现数据回写</h2>
<p><strong>目标</strong>：实现编辑部门的功能</p>
<h3 id="点击编辑弹出层-记录当前节点" tabindex="-1"><a class="header-anchor" href="#点击编辑弹出层-记录当前节点" aria-hidden="true">#</a> 点击编辑弹出层，记录当前节点</h3>
<blockquote>
<p>编辑部门功能实际上和新增窗体采用的是一个组件，只不过我们需要将新增场景变成编辑场景</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/huixie1.png" alt="图片"></p>
<p>首先点击编辑部门时</p>
<p><img src="@source/.vuepress/public/images/bianji01.png" alt="图片"></p>
<p>父组件弹层，赋值当前编辑节点</p>
<p><img src="@source/.vuepress/public/images/bianji02.png" alt="图片"></p>
<h3 id="父组件调用子组件的获取详情方法" tabindex="-1"><a class="header-anchor" href="#父组件调用子组件的获取详情方法" aria-hidden="true">#</a> 父组件调用子组件的获取详情方法</h3>
<blockquote>
<p>编辑时，需要获取点击部门的信息</p>
</blockquote>
<p>封装获取部门信息的模块 <strong><code>src/api/departments.js</code></strong>
<img src="@source/.vuepress/public/images/bianji03.png" alt="图片"></p>
<blockquote>
<p>在什么时候获取部门详情?</p>
</blockquote>
<p>可以在调用<strong>编辑方法</strong> <strong><code>editDepartment</code></strong> 中通过 <strong><code>ref</code></strong> 调用 <strong><code>add-dept.vue</code></strong> 的实例的方法
<img src="@source/.vuepress/public/images/bianji04.png" alt="图片"></p>
<p>父组件中用 ref 获取组件实例并调用
<img src="@source/.vuepress/public/images/bianji05.png" alt="图片"></p>
<h3 id="根据计算属性显示控制标题" tabindex="-1"><a class="header-anchor" href="#根据计算属性显示控制标题" aria-hidden="true">#</a> 根据计算属性显示控制标题</h3>
<blockquote>
<p>需要根据当前的场景区分显示的标题</p>
</blockquote>
<p>计算属性</p>
<blockquote>
<p>如何判断新增还是编辑</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">showTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token string">'编辑部门'</span> <span class="token operator">:</span> <span class="token string">'新增子部门'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>同时发现，el-form中的 resetFields 不能重置非表单中的数据，所以在取消的位置需要强制加上 重置数据
<img src="@source/.vuepress/public/images/chongzhi123.png" alt="图片"></p>
<h2 id="同时支持-编辑和新增场景" tabindex="-1"><a class="header-anchor" href="#同时支持-编辑和新增场景" aria-hidden="true">#</a> 同时支持 编辑和新增场景</h2>
<h3 id="封装编辑接口-保存时区分场景-新增-编辑" tabindex="-1"><a class="header-anchor" href="#封装编辑接口-保存时区分场景-新增-编辑" aria-hidden="true">#</a> 封装编辑接口，保存时区分场景(新增/编辑)</h3>
<blockquote>
<p>接下来，需要在点击确定时，同时支持新增部门和编辑部门两个场景，我们可以根据formData是否有id进行区分</p>
</blockquote>
<h4 id="封装编辑部门接口-src-api-departments-js" tabindex="-1"><a class="header-anchor" href="#封装编辑部门接口-src-api-departments-js" aria-hidden="true">#</a> <strong>封装编辑部门接口</strong>   <strong><code>src/api/departments.js</code></strong></h4>
<p><img src="@source/.vuepress/public/images/upd1.png" alt="图片"></p>
<blockquote>
<p>点击确定时，进行场景区分</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/upd2.png" alt="图片"></p>
<h3 id="校验规则支持-编辑场景-下的校验" tabindex="-1"><a class="header-anchor" href="#校验规则支持-编辑场景-下的校验" aria-hidden="true">#</a> 校验规则支持 编辑场景 下的校验</h3>
<blockquote>
<p>除此之外，发现原来的校验规则实际和编辑部门有些冲突，所以需要进一步处理</p>
</blockquote>
<p>校验规则要留意的是 checkNameRepeat 和 checkCodeRepeat 校验函数</p>
<p><img src="@source/.vuepress/public/images/che1.png" alt="图片">
<img src="@source/.vuepress/public/images/che2.png" alt="图片"></p>
<blockquote>
<p>至此，整个组织架构， 完成了，组织架构读取 /  新增部门 / 删除部门  / 编辑部门</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/zongjie.png" alt="图片"></p>
<h2 id="给数据获取添加加载进度条" tabindex="-1"><a class="header-anchor" href="#给数据获取添加加载进度条" aria-hidden="true">#</a> 给数据获取添加加载进度条</h2>
<p><strong><code>目标</code></strong>  给当前组织架构添加加载进度条</p>
<p>由于获取数据的延迟性，为了更好的体验，可以给页面增加一个 Loading进度条，采用 element的指令 <strong>v-loading</strong> 解决方案即可<a href="https://element.eleme.io/#/zh-CN/component/loading#options" target="_blank" rel="noopener noreferrer">loading 加载官网<ExternalLinkIcon/></a></p>
<p><strong>定义loading变量</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 用来控制进度弹层的显示和隐藏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>赋值变量给指令</strong>
<img src="@source/.vuepress/public/images/vloading.png" alt="图片"></p>
<p><strong>获取方法前后设置变量</strong></p>
<p><img src="@source/.vuepress/public/images/zuihou.png" alt="图片"></p>
</template>
