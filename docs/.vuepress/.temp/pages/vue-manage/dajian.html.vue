<template><h1 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h1>
<h2 id="脚手架搭建项目" tabindex="-1"><a class="header-anchor" href="#脚手架搭建项目" aria-hidden="true">#</a> 脚手架搭建项目</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create vue-manage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="elementui-按需引入" tabindex="-1"><a class="header-anchor" href="#elementui-按需引入" aria-hidden="true">#</a> ElementUI 按需引入</h2>
<p>安装 Element UI</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i element-ui -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>全局引入 element-ui 组件库, 打包后包的体积最终会很大</p>
<p>所以可以只<strong>按需引入</strong>需要的组件，以达到<strong>减小项目体积的目的</strong></p>
<p>创建文件 src/global/register-element.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-ui"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'element-ui/lib/theme-chalk/index.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>Button<span class="token punctuation">,</span> Select<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> component <span class="token keyword">of</span> components<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span>name<span class="token punctuation">,</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>main.js: 调用 registerElement(Vue) 函数注册 ElementUI</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> registerElement <span class="token keyword">from</span> <span class="token string">'./global/register-element'</span><span class="token punctuation">;</span>

<span class="token function">registerElement</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span> <span class="token comment">// 注册element-ui</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vue-rotuer" tabindex="-1"><a class="header-anchor" href="#vue-rotuer" aria-hidden="true">#</a> vue rotuer</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue-router@3.5.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>


<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/Home.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/User.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'hash'</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="安装-less" tabindex="-1"><a class="header-anchor" href="#安装-less" aria-hidden="true">#</a> 安装 less</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install less@4.1.2
npm install less-loader
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="首页搭建" tabindex="-1"><a class="header-anchor" href="#首页搭建" aria-hidden="true">#</a> 首页搭建</h2>
<p><a href="https://element.eleme.io/#/zh-CN/component/container#footer-attributes" target="_blank" rel="noopener noreferrer">Container 布局容器<ExternalLinkIcon/></a></p>
<h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2>
<p>把侧边栏封装成一个组件, 同样也使用组件库 <a href="https://element.eleme.io/#/zh-CN/component/menu" target="_blank" rel="noopener noreferrer">NavMenu 导航菜单<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="一级菜单展示" tabindex="-1"><a class="header-anchor" href="#一级菜单展示" aria-hidden="true">#</a> 一级菜单展示</h3>
<p>需要区分<strong>只有一级菜单的菜单</strong>和<strong>有二级菜单的菜单</strong>并分别展示, 那怎么区分? 有二级菜单的菜单它们有自己的 <strong>children</strong></p>
<p>所以使用 computed 计算属性分别过滤一下 <strong>无children/有children</strong>菜单</p>
<p><img src="@source/.vuepress/public/images/caidan11.png" alt="图片"></p>
<p>先用 v-for 循环遍历展示 nocChildrenMenus 菜单
<img src="@source/.vuepress/public/images/caidan22.png" alt="图片"></p>
<h3 id="二级菜单展示" tabindex="-1"><a class="header-anchor" href="#二级菜单展示" aria-hidden="true">#</a> 二级菜单展示</h3>
<p><img src="@source/.vuepress/public/images/erjicaidan1.png" alt="图片"></p>
<h2 id="侧边栏的样式和路由的跳转" tabindex="-1"><a class="header-anchor" href="#侧边栏的样式和路由的跳转" aria-hidden="true">#</a> 侧边栏的样式和路由的跳转</h2>
<p><img src="@source/.vuepress/public/images/hcm2.png" alt="图片">
<img src="@source/.vuepress/public/images/hcm1.png" alt="图片"></p>
<p>改一改路由表的结构, main 路由中用了嵌套路由
<img src="@source/.vuepress/public/images/qiantao1.png" alt="图片"></p>
<p>并且在 main.vue 加上 <code>&lt;router-view&gt;</code> , 展示自己的嵌套路由
<img src="@source/.vuepress/public/images/rv1.png" alt="图片"></p>
<h2 id="header-组件" tabindex="-1"><a class="header-anchor" href="#header-组件" aria-hidden="true">#</a> header 组件</h2>
<p><img src="@source/.vuepress/public/images/hea1.png" alt="图片">
<img src="@source/.vuepress/public/images/hea2.png" alt="图片"></p>
<p>其中折叠侧边栏功能呢 ,可以直接用<strong>组件通信</strong>来实现, 很简单</p>
<p><img src="@source/.vuepress/public/images/him1.png" alt="图片">
折叠功能时 el-menu组件的 collapse 属性控制 , 所以直接用 ref 获取到 侧边栏组件控制 iscollapse 变量的值
<img src="@source/.vuepress/public/images/him2.png" alt="图片"></p>
<h3 id="使用-vuex-实现折叠侧边栏" tabindex="-1"><a class="header-anchor" href="#使用-vuex-实现折叠侧边栏" aria-hidden="true">#</a> 使用 Vuex 实现折叠侧边栏</h3>
<p>这里还有一种方法可以用 Vuex 来实现, 逼格更高</p>
<p>Vue2的项目需要安装 Vuex 3.x版本的 Vuex</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vuex@3 --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/vs1.png" alt="图片">
<img src="@source/.vuepress/public/images/vs2.png" alt="图片">
<img src="@source/.vuepress/public/images/vs3.png" alt="图片"></p>
<p>然后只需要在对应的组件上<strong>绑定和调用</strong>就 ok</p>
<p><img src="@source/.vuepress/public/images/vs4.png" alt="图片">
<img src="@source/.vuepress/public/images/vs5.png" alt="图片"></p>
<h2 id="main-组件" tabindex="-1"><a class="header-anchor" href="#main-组件" aria-hidden="true">#</a> main 组件</h2>
</template>
