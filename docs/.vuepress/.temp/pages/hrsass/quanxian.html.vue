<template><h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1>
<h2 id="_1-权限设计-rbac的权限设计思想" tabindex="-1"><a class="header-anchor" href="#_1-权限设计-rbac的权限设计思想" aria-hidden="true">#</a> 1. 权限设计-RBAC的权限设计思想</h2>
<blockquote>
<p>了解下什么是传统的权限设计</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/ct01.png" alt="图片">
从上面的图中，可以发现，传统的权限设计是对每个人进行单独的权限设置，但这种方式已经不适合目前企业的高效管控权限的发展需求，因为每个人都要单独去设置权限</p>
<blockquote>
<p>基于此，RBAC的权限模型就应运而生了，RBAC(Role-Based Access control) ，也就是基于角色的权限分配解决方案，相对于传统方案，RBAC提供了中间层Role（角色），其权限模式如下</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/ebac.png" alt="图片">
RBAC 实现了用户和权限点的分离，想对某个用户设置权限，只需要对该用户设置相应的角色即可，而该角色就拥有了对应的权限，这样一来，权限的分配和设计就做到了极简，高效，当想对用户收回权限时，只需要收回角色即可，</p>
<h2 id="_2-给分配员工角色" tabindex="-1"><a class="header-anchor" href="#_2-给分配员工角色" aria-hidden="true">#</a> 2. 给分配员工角色</h2>
<p>在员工管理页面，分配角色</p>
<h3 id="_2-1-新建分配角色窗体" tabindex="-1"><a class="header-anchor" href="#_2-1-新建分配角色窗体" aria-hidden="true">#</a> 2.1 新建分配角色窗体</h3>
<blockquote>
<p>在之前, 员工管理的角色功能，并没有实现，此章节我们实现给员工分配角色</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/fenpei.png" alt="图片">
从上图中，可以看出，用户和角色是 <strong><code>1对多</code></strong> 的关系，即一个用户可以拥有多个角色，比如公司的董事长可以拥有总经理和系统管理员一样的角色</p>
<p>首先，新建分配角色弹窗组件 <strong><code>assign-role.vue</code></strong> 	
<img src="@source/.vuepress/public/images/fenpeizujian.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/assignrole.png" alt="图片"></p>
<h3 id="_2-2-获取角色列表和当前用户角色" tabindex="-1"><a class="header-anchor" href="#_2-2-获取角色列表和当前用户角色" aria-hidden="true">#</a> 2.2 获取角色列表和当前用户角色</h3>
<h4 id="获取所有角色列表" tabindex="-1"><a class="header-anchor" href="#获取所有角色列表" aria-hidden="true">#</a> 获取所有角色列表</h4>
<p><img src="@source/.vuepress/public/images/juese01.png" alt="图片">
并显示多选框
<img src="@source/.vuepress/public/images/juese02.png" alt="图片"></p>
<h4 id="获取用户的当前所属角色" tabindex="-1"><a class="header-anchor" href="#获取用户的当前所属角色" aria-hidden="true">#</a> 获取用户的当前所属角色</h4>
<p><img src="@source/.vuepress/public/images/juese03.png" alt="图片">
<img src="@source/.vuepress/public/images/juese04.png" alt="图片"></p>
<h4 id="点击角色弹出层-index-vue" tabindex="-1"><a class="header-anchor" href="#点击角色弹出层-index-vue" aria-hidden="true">#</a> 点击角色弹出层  index.vue</h4>
<p><img src="@source/.vuepress/public/images/juese05.png" alt="图片">
<img src="@source/.vuepress/public/images/juese06.png" alt="图片">
<img src="@source/.vuepress/public/images/juese07.png" alt="图片"></p>
<h3 id="_2-3-给员工分配角色-确定-取消" tabindex="-1"><a class="header-anchor" href="#_2-3-给员工分配角色-确定-取消" aria-hidden="true">#</a> 2.3 给员工分配角色 确定-取消</h3>
<p><img src="@source/.vuepress/public/images/fenpei00.png" alt="图片">
<strong>分配角色接口</strong>  <strong><code>api/employees.js</code></strong></p>
<p><img src="@source/.vuepress/public/images/fenpei01.png" alt="图片"></p>
<p><strong>确定保存 - 取消</strong>  <strong><code>assign-role.vue</code></strong>
<img src="@source/.vuepress/public/images/fenpei02.png" alt="图片"></p>
<p><strong>绑定事件</strong>
<img src="@source/.vuepress/public/images/fenpei03.png" alt="图片">
<img src="@source/.vuepress/public/images/fenpei04.png" alt="图片"></p>
<h2 id="_3-权限点管理页面开发" tabindex="-1"><a class="header-anchor" href="#_3-权限点管理页面开发" aria-hidden="true">#</a> 3. 权限点管理页面开发</h2>
<p>完成权限点页面的开发和管理</p>
<h3 id="_3-1-新建权限点管理页面" tabindex="-1"><a class="header-anchor" href="#_3-1-新建权限点管理页面" aria-hidden="true">#</a> 3.1 新建权限点管理页面</h3>
<blockquote>
<p>人已经有了角色， 那么权限是什么</p>
</blockquote>
<p>在企业服务中，权限一般分割为 <strong>页面访问权限</strong>，<strong>按钮操作权限</strong>，<strong>API访问权限</strong></p>
<blockquote>
<p>API权限多见于在后端进行拦截，所以我们这一版本只做**<code>页面访问</code><strong>和</strong><code>按钮操作授权</code>/**</p>
</blockquote>
<p>由此，可以根据业务需求设计权限管理页面</p>
<p><strong>完成权限页面结构</strong> <strong><code>src/views/permission/index.vue</code></strong>
<img src="@source/.vuepress/public/images/per1.png" alt="图片">
封装权限管理的增删改查请求  <strong><code>src/api/permisson.js</code></strong>
<img src="@source/.vuepress/public/images/per2.png" alt="图片"></p>
<h3 id="_3-2-获取权限数据并转化树形" tabindex="-1"><a class="header-anchor" href="#_3-2-获取权限数据并转化树形" aria-hidden="true">#</a> 3.2 获取权限数据并转化树形</h3>
<p>el-table 展示属性数据
<img src="@source/.vuepress/public/images/quanxianshuxing1.png" alt="图片">
<img src="@source/.vuepress/public/images/quanxianshuxing2.png" alt="图片">
需要注意的是， 如果需要树表， 需要给<strong>el-table</strong>配置<strong>row-key</strong>属性 id , <a href="https://element.eleme.io/#/zh-CN/component/table#shu-xing-shu-ju-yu-lan-jia-zai" target="_blank" rel="noopener noreferrer">el-table 树形数据展示<ExternalLinkIcon/></a></p>
<blockquote>
<p>当type为 1时为访问权限，type为2时为功能权限</p>
</blockquote>
<blockquote>
<p>下面还需要完成 新增权限 / 删除权限 / 编辑权限</p>
</blockquote>
<h3 id="_3-3-新增编辑权限的弹层" tabindex="-1"><a class="header-anchor" href="#_3-3-新增编辑权限的弹层" aria-hidden="true">#</a> 3.3 新增编辑权限的弹层</h3>
<p>新增权限/编辑权限弹层
<img src="@source/.vuepress/public/images/qxtc1.png" alt="图片">
<img src="@source/.vuepress/public/images/qxtc2.png" alt="图片"></p>
<h3 id="_3-4-新增-编辑-删除权限点-细节多" tabindex="-1"><a class="header-anchor" href="#_3-4-新增-编辑-删除权限点-细节多" aria-hidden="true">#</a> 3.4 新增，编辑，删除权限点 (细节多)</h3>
<p>新增/ 删除/ 编辑 逻辑
<img src="@source/.vuepress/public/images/perper1.png" alt="图片">
<img src="@source/.vuepress/public/images/perper2.png" alt="图片">
<img src="@source/.vuepress/public/images/perper3.png" alt="图片">
<img src="@source/.vuepress/public/images/tianjia1.png" alt="图片"></p>
<p>绑定
<img src="@source/.vuepress/public/images/perper4.png" alt="图片">
<img src="@source/.vuepress/public/images/perper5.png" alt="图片">
<img src="@source/.vuepress/public/images/perper6.png" alt="图片"></p>
<h2 id="_4-给角色分配权限" tabindex="-1"><a class="header-anchor" href="#_4-给角色分配权限" aria-hidden="true">#</a> 4. 给角色分配权限</h2>
<p>完成给角色分配权限的业务
<img src="@source/.vuepress/public/images/fpqx.png" alt="图片"></p>
<h3 id="_4-1-新建分配权限弹出层" tabindex="-1"><a class="header-anchor" href="#_4-1-新建分配权限弹出层" aria-hidden="true">#</a> 4.1 新建分配权限弹出层</h3>
<p>封装分配权限的api  <strong><code>src/api/setting.js</code></strong>
<img src="@source/.vuepress/public/images/fenpei1.png" alt="图片">
<strong>给角色分配权限弹出层</strong>
<img src="@source/.vuepress/public/images/fenpei2.png" alt="图片">
<strong>定义数据</strong>
<img src="@source/.vuepress/public/images/fenpei3.png" alt="图片">
<strong>点击分配权限</strong>
<img src="@source/.vuepress/public/images/fenpei5.png" alt="图片"></p>
<h3 id="_4-2-给角色分配权限" tabindex="-1"><a class="header-anchor" href="#_4-2-给角色分配权限" aria-hidden="true">#</a> 4.2 给角色分配权限</h3>
<p><img src="@source/.vuepress/public/images/perm1.png" alt="图片">
<img src="@source/.vuepress/public/images/perm2.png" alt="图片"></p>
<h2 id="_5-权限应用-页面访问和菜单" tabindex="-1"><a class="header-anchor" href="#_5-权限应用-页面访问和菜单" aria-hidden="true">#</a> 5. 权限应用 - 页面访问和菜单</h2>
<p>在当前项目应用用户的页面访问权限</p>
<h3 id="_5-1-权限受控的主体思路" tabindex="-1"><a class="header-anchor" href="#_5-1-权限受控的主体思路" aria-hidden="true">#</a> 5.1 权限受控的主体思路</h3>
<p>在上面，已经给用户分配了角色， 给角色分配了权限，那么在用户登录获取资料的时候，会自动查出该用户拥有哪些权限，这个权限需要和我们的菜单还有路由有效结合起来</p>
<blockquote>
<p>动态权限其实就是根据用户的实际权限来访问的，接下来操作一下</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/biaoshi1.png" alt="图片"></p>
<p>在权限管理页面中，设置了一个<strong>标识</strong>， 这个标识可以和我们的路由模块进行关联，也就是说，如果用户拥有这个标识，那么用户就可以<strong>拥有这个路由模块</strong>，如果没有这个标识，就不能<strong>访问路由模块</strong></p>
<blockquote>
<p>用什么来实现？</p>
</blockquote>
<p>vue-router 提供了一个叫做<a href="https://router.vuejs.org/zh/api/#router-addroutes" target="_blank" rel="noopener noreferrer">addRoutes<ExternalLinkIcon/></a>的API方法，这个方法的含义是<strong>动态添加路由规则</strong></p>
<p>思路如下</p>
<p><img src="@source/.vuepress/public/images/biaoshi2.png" alt="图片"></p>
<h3 id="_5-2-新建-vuex-中管理权限的模块" tabindex="-1"><a class="header-anchor" href="#_5-2-新建-vuex-中管理权限的模块" aria-hidden="true">#</a> 5.2 新建 Vuex 中管理权限的模块</h3>
<p>可以在vuex中新增一个permission模块</p>
<blockquote>
<p>为什么用Vuex ?  最后面有必要用 state里的 routes 加载左侧的菜单, 还有下面原因</p>
</blockquote>
<p><strong><code>src/store/modules/permission.js</code></strong>
<img src="@source/.vuepress/public/images/vuexperm.png" alt="图片"></p>
<p>在 Vuex 管理模块中引入 permisson 模块
<img src="@source/.vuepress/public/images/yinruperm.png" alt="图片"></p>
<h3 id="_5-3-vuex-筛选权限路由" tabindex="-1"><a class="header-anchor" href="#_5-3-vuex-筛选权限路由" aria-hidden="true">#</a> 5.3 Vuex 筛选权限路由</h3>
<blockquote>
<p>将用户的标识和权限进行关联</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/lanjie05.png" alt="图片"></p>
<p>访问权限的数据在用户属性 <strong><code>menus</code></strong> 中
<img src="@source/.vuepress/public/images/menus.png" alt="图片"></p>
<blockquote>
<p>可以将路由模块的根节点**<code>name</code>**属性命名和权限标识一致，这样只要标识能对上，就说明用户拥有了该权限</p>
</blockquote>
<p><img src="@source/.vuepress/public/images/name05.png" alt="图片"></p>
<p><strong>接下来， vuex的permission中提供一个action，进行关联</strong>
<img src="@source/.vuepress/public/images/zhuyi11.png" alt="图片">
<img src="@source/.vuepress/public/images/xiangxi.png" alt="图片"></p>
<h3 id="_5-4-权限拦截出调用筛选权限action" tabindex="-1"><a class="header-anchor" href="#_5-4-权限拦截出调用筛选权限action" aria-hidden="true">#</a> 5.4 权限拦截出调用筛选权限Action</h3>
<p><img src="@source/.vuepress/public/images/lanjie05.png" alt="图片"></p>
<p>在拦截的位置，调用关联action， 获取新增 routes，并且 <strong>addRoutes</strong></p>
<p><img src="@source/.vuepress/public/images/addadd.png" alt="图片">
<img src="@source/.vuepress/public/images/addadd2.png" alt="图片"></p>
<h3 id="_5-5-静态路由动态路由解除合并" tabindex="-1"><a class="header-anchor" href="#_5-5-静态路由动态路由解除合并" aria-hidden="true">#</a> 5.5 静态路由动态路由解除合并</h3>
<p><strong>注意</strong>： 这里有个非常容易出问题的位置，当我们判断用户是否已经添加路由的前后，不能都是用<strong>next()</strong>，</p>
<p>在添加路由之后应该使用 <strong>next(to.path)</strong>， 否则会使刷新页面之后 权限消失，这属于一个vue-router的<strong>已知缺陷</strong></p>
<p>同时，不要忘记，将原来的静态路由 + 动态路由合体的模式 改成 只有静态路由  <strong><code>src/router/index.js</code></strong></p>
<p><img src="@source/.vuepress/public/images/jiechu1.png" alt="图片"></p>
<p>此时，已经完成了权限设置的一半， 此时发现左侧菜单失去了内容，这是因为左侧菜单读取的是固定的路由，我们要把它换成实时的最新路由</p>
<p>在 <strong><code>src/store/getters.js</code></strong> 配置导出routes
<img src="@source/.vuepress/public/images/jiechu2.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/jiechu3.png" alt="图片">
<img src="@source/.vuepress/public/images/jiechu4.png" alt="图片"></p>
<h2 id="_6-登出时-重置路由权限-和-404问题" tabindex="-1"><a class="header-anchor" href="#_6-登出时-重置路由权限-和-404问题" aria-hidden="true">#</a> 6. 登出时，重置路由权限 和 404问题</h2>
<blockquote>
<p>在上面，看似完成了访问权限的功能，实则不然，因为当我登出操作之后，虽然看不到菜单，但是用户实际上可以访问页面，直接在地址栏输入地址就能访问</p>
</blockquote>
<p>这是怎么回事？</p>
<blockquote>
<p>这是因为前面在<strong>addRoutes</strong>的时候，一直都是在<strong>加</strong>，登出的时候，我们并没有删，也没有重置，也就是说，之前加的路由在登出之后一直在，这怎么处理？</p>
</blockquote>
<p>去留意<strong>router/index.js</strong>文件，发现一个重置路由方法</p>
<p><img src="@source/.vuepress/public/images/luyouchongzhi.png" alt="图片"></p>
<p>这个方法就是将路由重新实例化，相当于换了一个新的路由，之前 <strong><code>加的路由</code></strong> 自然不存在了 ，<strong>只需要在登出的时候</strong>， 处理一下即可</p>
<p>user模块中:
<img src="@source/.vuepress/public/images/dengchu555.png" alt="图片"></p>
<p>除此之外，发现在页面刷新的时候，本来应该拥有权限的页面出现了404，这是因为 404 的匹配权限放在了静态路由，而动态路由在没有addRoutes之前，找不到对应的地址，就会显示404，所以<strong>需要将404放置到动态路由的最后</strong></p>
<p><img src="@source/.vuepress/public/images/4045.png" alt="图片">
如上图不能放在静态路由最后面(直接删掉) , 需要放在动态路由后面</p>
<p><strong>src/permission.js</strong>
<img src="@source/.vuepress/public/images/4046.png" alt="图片"></p>
<h2 id="_7-功能权限应用" tabindex="-1"><a class="header-anchor" href="#_7-功能权限应用" aria-hidden="true">#</a> 7. 功能权限应用</h2>
<h2 id="_7-1-功能权限的受控思路" tabindex="-1"><a class="header-anchor" href="#_7-1-功能权限的受控思路" aria-hidden="true">#</a> 7.1 功能权限的受控思路</h2>
<blockquote>
<p>上面，当拥有了一个模块，一个页面的访问权限之后，页面中的某些功能，用户可能有，也可能没有，这就是功能权限</p>
</blockquote>
<p>这就是查询出来的数据中的 <strong><code>points</code></strong></p>
<blockquote>
<p>比如，想对员工管理的删除功能做个权限怎么做？</p>
</blockquote>
<p>首先需要在员工管理的权限点下， 新增一个删除权限点，启用</p>
<p><img src="@source/.vuepress/public/images/delete11.png" alt="图片"></p>
<blockquote>
<p>现在要做的就是看看用户，是否拥有<strong>page-user-delete</strong>这个point，有就可以让删除能用，没有就隐藏或者禁用</p>
</blockquote>
<h2 id="_7-2-使用mixin技术将检查方法注入" tabindex="-1"><a class="header-anchor" href="#_7-2-使用mixin技术将检查方法注入" aria-hidden="true">#</a> 7.2 使用Mixin技术将检查方法注入</h2>
<p>所以，可以采用一个新的技术 <a href="https://cn.vuejs.org/v2/guide/mixins.html" target="_blank" rel="noopener noreferrer">mixin(混入)<ExternalLinkIcon/></a>来让所有的组件可以拥有一个公共的方法</p>
<p><strong><code>src/mixin/checkPermission.js</code></strong>
<img src="@source/.vuepress/public/images/gongneng1.png" alt="图片"></p>
<p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> CheckPermission <span class="token keyword">from</span> <span class="token string">"@/mixin/checkPermission.js"</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>CheckPermission<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在员工组件中检查权限点</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!checkPermission(<span class="token punctuation">'</span>POINT-USER-UPDATE<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$router.push(`/employees/detail/${obj.row.id}`)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
