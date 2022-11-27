<template><h1 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h1>
<h2 id="通过-vite-构建项目" tabindex="-1"><a class="header-anchor" href="#通过-vite-构建项目" aria-hidden="true">#</a> 通过 Vite 构建项目</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>兼容性注意</p>
<p>Vite 需要 Node.js 版本 &gt;= 12.0.0</p>
</div>
<p>在 vite 下载完成之后，通过以下流程来构建一个 vite 项目</p>
<ol>
<li>创建一个项目</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>如果没有安装过 vite@latest，那么则会提示进行安装，选择 y 即可</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Need to <span class="token function">install</span> the following packages:
  create-vite@latest
Ok to proceed? <span class="token punctuation">(</span>y<span class="token punctuation">)</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>
<p>选配置, 创建项目</p>
</li>
<li>
<p>项目创建完成之后，依次执行三个指令即可</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd imooc-front
npm install   
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5">
<li>如果你期望你的项目可以显示 Network 的路径，那么可以到 package.json 中，修改 dev 指令</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite --host"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-tailwindcss-和-sass" tabindex="-1"><a class="header-anchor" href="#安装-tailwindcss-和-sass" aria-hidden="true">#</a> 安装 tailwindcss 和 sass</h2>
<h4 id="tailwindcss-的价值体现" tabindex="-1"><a class="header-anchor" href="#tailwindcss-的价值体现" aria-hidden="true">#</a> <strong>tailwindcss 的价值体现</strong></h4>
<p><code>tailwindcss</code> 中一个非常核心的内容就是： 每一个类名都代表了一个 <code>css</code> 属性 ，这个样式在 <code>tailwindcss</code> 中被称作为 <strong>原子化 CSS</strong></p>
<p>  对于 <strong>高定制化、高个性化、高交互性</strong> 的前台应用而言， <strong>通用组件库</strong> 这种普适的组件系统是很难满足对应需求的。那么这也就意味着我们无法借助现有的样式，而需要 <strong>手动</strong> 写入大量的 css 样式和动画。</p>
<p>  因为这个项目中，包含 <strong>响应式 和 主题更换</strong> ，而这两种功能如果想要通过 <strong>传统形式</strong> 来进行实现的话，是比较复杂的。因为这意味着我们需要定义大量的 <strong>媒体查询 和 主题类名</strong></p>
<p>  所以综上所述，在 <strong>高定制化、高个性化、高交互性</strong> 的前台应用中， <strong>原子化 <code>CSS</code></strong> 是最合适的一种形式。而这种形式的具体体现就是 <strong><code>tailwindcss</code></strong></p>
<h4 id="安装-tailwindcss" tabindex="-1"><a class="header-anchor" href="#安装-tailwindcss" aria-hidden="true">#</a> 安装 tailwindcss</h4>
<p><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">tailwindcss官网 https://tailwindcss.com/docs/installation<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>在我们的项目中执行 <code>npm install -D tailwindcss@3.0.23 postcss@8.4.8 autoprefixer@10.4.2</code> ，安装 <code>tailwindcss</code></p>
</li>
<li>
<p>执行 <code>npx tailwindcss init -p</code> 创建 <code>tailwind.config.js</code> 文件，该文件为 <code>tailwindcss</code> 的配置文件，该文件默认内容为：</p>
</li>
</ol>
<p><img src="@source/.vuepress/public/images/tw1.png" alt="图片"></p>
<ol start="3">
<li>
<p>接下来需要添加 模板路径（tailwind 的应用范围）</p>
</li>
<li>
<p>在 <code>tailwind.config.js</code> 文件中的 <code>content</code> 选项下，写入如下内容：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Tailwind 应用范围</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./index.html'</span><span class="token punctuation">,</span> <span class="token string">'./src/**/*.{vue,js}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="5">
<li>
<p>接下来需要添加一些 tailwind 的指令</p>
</li>
<li>
<p>创建 <code>src/styles/index.scss</code> 文件，并写入如下代码：</p>
</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>// 导入 tailwind 的基础指令组件
<span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="7">
<li>
<p>然后在 <code>src/main.js</code> 中引入该 <code>index.scss</code></p>
</li>
<li>
<p>因为我们使用了 <code>scss</code> ，所以需要安装 <code>sass</code> ，执行 <code>npm i -D sass@1.45.0</code> 安装 sass</p>
</li>
<li>
<p>此时 <code>tailwind</code> 已经安装到我们的项目中</p>
</li>
<li>
<p>我们可以在 <code>src/App.vue</code> 中为 <code>img</code> 标签增加一个 <code>class=&quot;bg-red-900&quot;</code></p>
</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red-900<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo <span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="11">
<li>查看项目 img 标签背景变为红色，则表示成功</li>
</ol>
<p><img src="@source/.vuepress/public/images/bg1.png" alt="图片"></p>
<h2 id="搭建基础项目结构" tabindex="-1"><a class="header-anchor" href="#搭建基础项目结构" aria-hidden="true">#</a> 搭建基础项目结构</h2>
<p>  前面已经使用了 <code>Vite</code> 搭建了项目, 并且引入了 <code>tailwindcss</code></p>
<p>接下来主要需要构建项目的基础架构，其中包括：</p>
<ol>
<li>VS Code 辅助插件安装</li>
<li>项目基础结构路由分析</li>
<li>路由表划分</li>
<li>项目架构搭建</li>
<li>...</li>
</ol>
<h3 id="项目开发助手-prettier-code-formatter-、-tailwind-css-intellisense、volar" tabindex="-1"><a class="header-anchor" href="#项目开发助手-prettier-code-formatter-、-tailwind-css-intellisense、volar" aria-hidden="true">#</a> 项目开发助手 Prettier - Code formatter 、 Tailwind CSS IntelliSense、Volar</h3>
<h4 id="prettier-code-formatter" tabindex="-1"><a class="header-anchor" href="#prettier-code-formatter" aria-hidden="true">#</a> Prettier - Code formatter</h4>
<ol>
<li>
<p>在 VSCode 的扩展中，安装插件 Prettier - Code formatter
<img src="@source/.vuepress/public/images/pre1.png" alt="图片"></p>
</li>
<li>
<p>然后需要在 <strong>项目根目录</strong> 之中创建 <code>.prettierrc</code>并且写入如下内容：</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  // 代码结尾不加分号
  "semi": false,
  // 优先单引号
  "singleQuote": true,
  // 不添加尾随逗号
  "trailingComma": "none"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>
<p>在 <code>.vue</code> 文件、<code>.js</code> 文件中，鼠标右键，<strong>选择 使用…格式化文档</strong>, 选择 <strong>配置默认格式化程序</strong>, 选择 <code>prettier</code>
<img src="@source/.vuepress/public/images/pre2.png" alt="图片"></p>
</li>
<li>
<p>如果你希望在 <strong>保存代码</strong> 时，自动格式化代码内容，则可以在 设置 中勾选 <code>format on save</code>
<img src="@source/.vuepress/public/images/pre3.png" alt="图片"></p>
</li>
</ol>
<h4 id="tailwind-css-intellisense" tabindex="-1"><a class="header-anchor" href="#tailwind-css-intellisense" aria-hidden="true">#</a> Tailwind CSS IntelliSense</h4>
<p><img src="@source/.vuepress/public/images/tw55.png" alt="图片"></p>
<p>安装成功之后，此时只需要在：<strong>元素的 class 中，先按下《空格》，然后输入任意的 tailwind 类名，则可得到对应提示</strong></p>
<h4 id="volar" tabindex="-1"><a class="header-anchor" href="#volar" aria-hidden="true">#</a> Volar</h4>
<p>Volar 全名是 <code>Vue Language Features (Volar)</code> ，是一个专门的 vue3 辅助插件</p>
<p>这个插件不需要做什么特殊的处理，只需要安装即可
<img src="@source/.vuepress/public/images/volar2.png" alt="图片"></p>
<h3 id="项目架构基本结构处理分析" tabindex="-1"><a class="header-anchor" href="#项目架构基本结构处理分析" aria-hidden="true">#</a> 项目架构基本结构处理分析</h3>
<p>  这个项目分为 <strong>移动端</strong> 和 <strong>PC端</strong> 两种显示结果，但是这两种显示结果通过同一套代码进行实现，也就是所谓的 <strong>响应式</strong> 构建方案。那么在分析的时候就需要分别分析（此处只分析大的路由方案，目的是对基本的项目结构有一个初步的认识，以方便项目结构处理，后续具体的细节构建方案不在这次分析行为之内）</p>
<ol>
<li>移动端结构</li>
<li>PC 端结构</li>
</ol>
<p>然后把这两种的分析方案，合并到一起，组成一个最终的架构方案</p>
<h4 id="移动端结构分析" tabindex="-1"><a class="header-anchor" href="#移动端结构分析" aria-hidden="true">#</a> 移动端结构分析</h4>
<p>移动端的结构相对比较简单，当我们去进行路由跳转时，它是以 <strong>整个页面进行的整体路由切换</strong></p>
<p>那么由此可知，<strong>移动端</strong> 不存在 嵌套路由的概念，只需要在 <code>APP.vue</code> 中保留 <strong>一个路由出口</strong> 即可</p>
<p><img src="@source/.vuepress/public/images/chukou1.png" alt="图片"></p>
<h4 id="pc-端结构分析" tabindex="-1"><a class="header-anchor" href="#pc-端结构分析" aria-hidden="true">#</a> PC 端结构分析</h4>
<p>而 PC 端的结构相对比较复杂，如下图所示</p>
<p><img src="@source/.vuepress/public/images/chukou2.png" alt="图片"></p>
<p>需要通过 <strong>两个路由出口</strong> 进行表示：</p>
<ol>
<li>App.vue: 一级路由出口，用作整页路由切换</li>
<li>Main.vue：二级路由出口，用作局部路由切换</li>
</ol>
<p>  由此可知, <strong>移动端</strong> 和 <strong>PC 端</strong> 两者的路由结构是不同的，所以这就要求我们需要根据 <strong>当前用户所在设备的不同，构建不同的路由表</strong></p>
<p><strong>项目在不同设备中，需要具备不同的路由结构</strong>，所以我们就需要生成 <strong>多个路由表</strong> 来应对不同的情况。</p>
<h3 id="构建项目架构" tabindex="-1"><a class="header-anchor" href="#构建项目架构" aria-hidden="true">#</a> 构建项目架构</h3>
<p>先安装这两个插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i --save vuex@4.0.2 vue-router@4.0.14
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后去处理项目基本架构，最终架构如下（部分省略）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>├── src
│   ├── App<span class="token punctuation">.</span>vue <span class="token comment">// 项目根组件，一级路由出口</span>
│   ├── api <span class="token comment">// 接口请求</span>
│   ├── assets <span class="token comment">// 静态资源</span>
│   │   ├── icons <span class="token comment">// svg icon 图标</span>
│   │   ├── images <span class="token comment">// image 图标。比如:xxx.png</span>
│   │   └── logo<span class="token punctuation">.</span>png <span class="token comment">// logo</span>
│   ├── components <span class="token comment">// 通用的业务组件。比如：一个组件在多个页面中使用到</span>
│   ├── constants <span class="token comment">// 常量</span>
│   ├── directives <span class="token comment">// 自定义指令</span>
│   ├── libs <span class="token comment">// 通用组件，可用于构建中台物料库或通用组件库</span>
│   ├── main<span class="token punctuation">.</span>js <span class="token comment">// 入口文件</span>
│   ├── permission<span class="token punctuation">.</span>js <span class="token comment">// 页面权限控制中心</span>
│   ├── router <span class="token comment">// 路由</span>
│   │   ├── index<span class="token punctuation">.</span>js <span class="token comment">// 路由处理中心</span>
│   │   └── modules <span class="token comment">// 路由模块</span>
│   │       ├── mobile<span class="token operator">-</span>routes<span class="token punctuation">.</span>js <span class="token comment">// 移动端路由</span>
│   │       └── pc<span class="token operator">-</span>routes<span class="token punctuation">.</span>js <span class="token comment">// PC 端路由</span>
│   ├── store <span class="token comment">// 全局状态</span>
│   │   ├── getters<span class="token punctuation">.</span>js <span class="token comment">// 全局状态访问处理</span>
│   │   ├── index<span class="token punctuation">.</span>js <span class="token comment">// 全局状态中心</span>
│   │   └── modules <span class="token comment">// 状态子模块</span>
│   ├── styles <span class="token comment">// 全局样式</span>
│   │   └── index<span class="token punctuation">.</span>scss <span class="token comment">// 全局通用的样式处理</span>
│   ├── utils <span class="token comment">// 工具模块</span>
│   ├── vendor <span class="token comment">// 外部供应资源。比如：人类行为认证</span>
│   └── views <span class="token comment">// 页面组件。与 components 的区别在于：此处组件对应路由表，以页面的形式展示</span>
│       └── layout <span class="token comment">// 用于 PC 端，分割一级路由和二级路由</span>
│           ├── components <span class="token comment">// 该页面组件下的业务组件</span>
│           └── index<span class="token punctuation">.</span>vue <span class="token comment">// layout 组件</span>
├── tailwind<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js <span class="token comment">// wailwind css 配置文件，与 src 平级</span>
└── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js <span class="token comment">// vite 配置文件，与 src 平级</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="vite配置方案" tabindex="-1"><a class="header-anchor" href="#vite配置方案" aria-hidden="true">#</a> vite配置方案</h2>
<h3 id="明确移动端和-pc-端的构建顺序" tabindex="-1"><a class="header-anchor" href="#明确移动端和-pc-端的构建顺序" aria-hidden="true">#</a> 明确移动端和 PC 端的构建顺序</h3>
<p>因为这个项目是使用的 <code>tailwindcss</code> 作为样式处理的核心库，所以我们的 <strong>构建顺序</strong> 需要尊重 <code>tailwindcss</code> <strong>的构建顺序</strong> 的。</p>
<p>那么在 tailwind 中，有 <a href="https://tailwindcss.com/docs/responsive-design#mobile-first" target="_blank" rel="noopener noreferrer">这样<ExternalLinkIcon/></a> 一段内容：</p>
<p><img src="@source/.vuepress/public/images/yidongyouxian1.png" alt="图片"></p>
<p>就是 <strong>移动优先</strong> 的原则</p>
<p>也就是说，使用 <code>tailwind</code> 构建 <strong>响应式系统时</strong>，需要 <strong>先构建移动端，再构建 PC 端</strong></p>
<h3 id="构建移动处理工具-ismobileterminal" tabindex="-1"><a class="header-anchor" href="#构建移动处理工具-ismobileterminal" aria-hidden="true">#</a> 构建移动处理工具 isMobileTerminal</h3>
<p>如何判断当前的设备是移动设备呢？</p>
<p>为什么达到这个目的，就需要先去构建出咱们的第一个工具方法：<code>isMobileTerminal</code> ，该方法将返回一个 <code>boolean</code> 形的数据，如果为 <code>true</code> 则表示当前所在为 <strong>移动端</strong>，如果为 <code>false</code> 则表示当前为 <strong>PC 端</strong></p>
<p>那么根据之前的 <strong>构建方案</strong> ，所有的工具方法需要被放入到 <code>utils</code> 中，所以下面首先需要在 <code>utils</code> 中创建一个 工具类 <code>flexible.js</code> ，在该方法中规定 <strong>屏幕宽度 &lt; 1280 则为移动设备</strong> ，并且为了保证这个方法的灵活性，可以让它称为一个 <strong>计算属性</strong> ，所以得出如下代码：</p>
<p>utils/flexible.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PC_DEVICE_WIDTH</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../constants'</span>

<span class="token doc-comment comment">/**
 * 判断当前是否为移动设备，判断依据为屏幕的宽度是否大于指定值（1280）
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isMobileTerminal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">&lt;</span> <span class="token constant">PC_DEVICE_WIDTH</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>src/constants/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// PC 设备指定宽度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PC_DEVICE_WIDTH</span> <span class="token operator">=</span> <span class="token number">1280</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>src/App.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ isMobileTerminal }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils/flexible'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>此时当切换浏览器设备时，就可以得到对应的判断结果。</p>
<p><strong>注意</strong>： 因为要在后面进行 <strong>响应式的视图处理</strong> 所以此处通过 <strong>宽度</strong> 进行移动端判断！！！！</p>
<p>在实际开发中更建议通过以下代码来进行</p>
<details class="custom-container details">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 判断当前是否为移动设备
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isMobileTerminal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
     navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<h3 id="通过-vueuse-优化处理方案" tabindex="-1"><a class="header-anchor" href="#通过-vueuse-优化处理方案" aria-hidden="true">#</a> 通过 vueuse 优化处理方案</h3>
<p>对于 <code>isMobileTerminal</code> 方法，此时还存在一个问题，那就是当我们切换浏览器设备时，它的结果并 <strong>不是响应式</strong> 的，这种让计算属性显得毫无意义了</p>
<p>那么为什么会这样呢？</p>
<p>对于计算属性而言，它会在 <strong>依赖的响应式数据发生变化时</strong>，重新计算。但是现在以来的 <code>document.documentElement.clientWidth</code> 并非响应式数据，所以 <strong>计算属性无法发生重新计算</strong></p>
<p>那么要怎么做呢？</p>
<p>在这里需要给使用一个新的库 <a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">vueuse<ExternalLinkIcon/></a>,  <code>vueuse</code> 是一个 <strong>vue 的工具类库</strong> 。它内部提供了很多的方法，可以帮助进行很多的便捷操作</p>
<p>比如说 <a href="https://vueuse.org/core/useWindowSize/" target="_blank" rel="noopener noreferrer">useWindowSize<ExternalLinkIcon/></a> 这个方法，这个方法会给我们返回一个 <strong>响应式</strong> 的页面宽高，那么就可以利用这个响应式数据实现 <code>isMobileTerminal</code></p>
<ol>
<li>安装 vueuse</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @vueuse/core@8.1.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 <code>src/utils/flexible.js</code> 中使用 <code>useWindowSize</code> 方法, 利用 <code>width</code> 计算 <code>isMobileTerminal</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PC_DEVICE_WIDTH</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../constants'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useWindowSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> width <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWindowSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 判断当前是否为移动设备, 判断依据为 屏幕的宽度是否小于指定值(1280)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isMobileTerminal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> width<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token constant">PC_DEVICE_WIDTH</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="定义-软链接" tabindex="-1"><a class="header-anchor" href="#定义-软链接" aria-hidden="true">#</a> 定义 @ 软链接</h3>
<p>在 webpack 中可以直接通过 @ 符号表示 src 路径，但是在 vite 默认是不可以的。</p>
<p>如果修改 constants 的导入路径为</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PC_DEVICE_WIDTH</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/constants'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>那么则会得到错误</p>
<p>vite 默认不支持 <code>@</code> 软链接</p>
<p>vite 提供了 <a href="https://cn.vitejs.dev/config/#resolve-alias" target="_blank" rel="noopener noreferrer">resolve.alias<ExternalLinkIcon/></a> 功能，表示：<strong>通过别名在指向一个具体的路径</strong></p>
<p>在 <code>vite.config.js</code> 中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 软链接</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'/src'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>此时，重启项目，该错误消失</p>
<h3 id="构建-vuerouter-移动端路由表" tabindex="-1"><a class="header-anchor" href="#构建-vuerouter-移动端路由表" aria-hidden="true">#</a> 构建 VueRouter 移动端路由表</h3>
<p>那么到现在已经有了 <code>isMobileTerminal</code> 方法，那么接下来就可以利用这个方法处理 <strong>移动端路由表</strong>，不过在处理该路由表之前还需初始化咱们的 vue-router</p>
<ol>
<li>在 <code>src/router/index.js</code> 中初始化 VueRouter</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/flexible'</span>
<span class="token keyword">import</span> mobileTerminalRoutes <span class="token keyword">from</span> <span class="token string">'./modules/mobile-routes'</span>
<span class="token keyword">import</span> pcTerminalRoutes <span class="token keyword">from</span> <span class="token string">'./modules/pc-routes'</span>

<span class="token comment">// 创建 vueRouter 实例</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> isMobileTerminal<span class="token punctuation">.</span>value <span class="token operator">?</span> mobileTerminalRoutes <span class="token operator">:</span> pcTerminalRoutes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2">
<li>在 <code>src/router/modules/mobile-routes.js</code> 构建移动端路由表</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/main/index.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li>在 <code>src/router/modules/pc-routes.js</code> 构建 PC 端路由表</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>在 <code>src/main.js</code> 中，注册 VueRouter</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5">
<li>在 src/App.vue 中写入 <strong>一级路由出口</strong></li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 一级路由出口 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6">
<li>创建首页组件 <code>src/views/main/index.vue</code> ，并且写入如下内容</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>这是首页内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>此时移动端初始路由表构建完成，在 <strong>移动端下</strong>，可访问 <code>Home</code> 组件</p>
<h3 id="划分移动端首页模块" tabindex="-1"><a class="header-anchor" href="#划分移动端首页模块" aria-hidden="true">#</a> 划分移动端首页模块</h3>
<p>移动端首页模块总共可分为三部分：</p>
<ol>
<li>顶部的 <code>navigationBar</code></li>
</ol>
<p><img src="@source/.vuepress/public/images/navi1.png" alt="图片"></p>
<ol start="2">
<li>中间的列表内容</li>
</ol>
<p><img src="@source/.vuepress/public/images/navi2.png" alt="图片"></p>
<ol start="3">
<li>底部的 tabbar</li>
</ol>
<p><img src="@source/.vuepress/public/images/navi3.png" alt="图片"></p>
<p>那么首先要开发的就是 <strong>顶部的 navigationBar</strong> 部分</p>
<p>而对于该部分又可以分为三块内容：</p>
<ul>
<li><code>navigator</code> 列表：</li>
<li>右侧汉堡按钮：</li>
<li>点击汉堡按钮展示的 <code>popup</code> 弹出层</li>
</ul>
<p>那么明确好这些内容之后，接下来就可以按照这个顺序进行依次开发。</p>
<p>下面首先创建 移动端的 <code>navigation</code> 模块</p>
<p><img src="@source/.vuepress/public/images/navi4.png" alt="图片"></p>
<ol>
<li>创建 <code>src/views/main/components/navigation/mobile/index.vue</code> 组件, 也为 PC端 在mobile平级中 pc/index.vue 创建一个</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>移动端下的 navigation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>创建 <code>src/views/main/components/navigation/index.vue</code> 组件，为 <strong>控制移动端和 PC 端</strong>的 navigation 展示组件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mobile-navigation-vue</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isMobileTerminal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> isMobileTerminal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/flexible'</span>
<span class="token keyword">import</span> mobileNavigationVue <span class="token keyword">from</span> <span class="token string">'./mobile/index.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>在 <code>src/views/main/index.vue</code> 中导入该组件</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-vue</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-vue</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> navigationVue <span class="token keyword">from</span> <span class="token string">'./components/navigation/index.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="导入并配置-axios" tabindex="-1"><a class="header-anchor" href="#导入并配置-axios" aria-hidden="true">#</a> 导入并配置 axios</h3>
<p>在有了 <code>navigation</code> 组件之后，接下来就可以尝试 <strong>获取数据，渲染数据</strong> 了</p>
<p>那么想要获取数据，要使用 <code>axios</code></p>
<ol>
<li>安装 <code>axios</code> 依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>创建 <code>src/utils/request.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-front.lgdsunday.club/api'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>创建请求接口 <code>src/api/category.js</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span>

<span class="token doc-comment comment">/**
 * 获取分类列表
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/category'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4">
<li>在 <code>src/views/main/components/navigation/index.vue</code> 调用接口，尝试获取数据</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/category'</span>

<span class="token keyword">const</span> <span class="token function-variable function">getCategoryData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getCategoryData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>请求标准流程</strong> 就完成了，但是此时运行项目，将会得到一个错误</p>
<p><img src="@source/.vuepress/public/images/ky66.png" alt="图片"></p>
<p>这是因为 <strong>跨域</strong> 导致的</p>
<p>那么在 <code>webpack</code> 中，可以直接通过 <code>proxy</code> 处理跨域错误，但是在 <code>vite</code> 中应该怎么做？</p>
<h3 id="vite-处理代理服务器-跨域" tabindex="-1"><a class="header-anchor" href="#vite-处理代理服务器-跨域" aria-hidden="true">#</a> vite 处理代理服务器 ( 跨域 )</h3>
<p>在上面遇到了一个跨域的问题，这个问题在 <strong>前后端分离</strong> 的项目开发中是非常常见的。同时对于 <code>webpack</code> 可以直接通过 <code>proxy</code> 进行处理，那么 vite 中是否也提供了类似的能力呢？</p>
<p>是的，<code>vite</code> 同样提供了 <code>proxy</code> 的配置项。</p>
<p>具体使用的方式与 <code>webpack</code> 中的 <code>proxy</code> 基本没有区别，<strong>依然是通过 <code>devServer</code> 根据 <code>url</code> 进行代理处理</strong></p>
<p>具体配置方式如下：</p>
<ol>
<li>在 <code>src/utils/request.js</code> 中，修改 <code>basURL</code> 为 <code>/api</code> ，表示当前请求为 <code>开发时的 api</code> 请求</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>在 <code>vite.config.js</code> 中新增 <code>server</code> 选项，配置代理</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// 代理</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 代理所有 /api 的请求，该求情将被代理到 target 中</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 代理请求之后的请求地址</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://api.imooc-front.lgdsunday.club/'</span><span class="token punctuation">,</span>
        <span class="token comment">// 跨域</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="vite-处理环境变量" tabindex="-1"><a class="header-anchor" href="#vite-处理环境变量" aria-hidden="true">#</a> vite 处理环境变量</h3>
<p>已经可以请求到服务端，并且得到对应的数据响应了</p>
<p>这个项目 <code>baseURL</code> <strong>分为两种</strong>：</p>
<ul>
<li>
<p><code>DEV</code> ： <code>https://api.imooc-front.lgdsunday.club/api</code></p>
</li>
<li>
<p><code>PROD</code> ： <code>https://api.imooc-front.lgdsunday.club/prod-api</code></p>
</li>
</ul>
<p>在通常企业级项目开发之中，都会区分 <strong>开发时服务</strong> 和 <strong>生产时服务</strong></p>
<p>对于开发时服务而言，它内部的数据是 <strong>假数据</strong> ，所以可以随便修改</p>
<p>而生产时服务，它内部数据为 <strong>真实数据</strong>，所以是不能随意修改的</p>
<p>那么在进行项目开发时，我们需要把服务切换为 <code>DEV</code> 模式，而在打包项目时需要切换为 <code>PROD</code> 模式</p>
<p>所以可以期望可以 <strong>根据项目状态，自动切换请求的服务地址</strong></p>
<p>在 vite 中提供了 <a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-files" target="_blank" rel="noopener noreferrer">.env<ExternalLinkIcon/></a> 文件 ，该文件为环境变量文件，默认提供了四种文件格式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中有一种 <code>.env.[mode]</code> 的格式可以在 <strong>不同模式下加载不同内容</strong> ，这不正是想要的吗？</p>
<ol>
<li>新建 <code>.env.development</code> 文件，表示 <strong>开发时</strong> 的 <code>.env</code> 文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 只在指定模式（development）下加载

# base api, 只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理
VITE_BASE_API = '/api'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>新建 <code>.env.production</code> 文件，表示 <strong>生产时</strong> 的 <code>.env</code> 文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 只在指定模式（production）下加载

# base api, 只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理
VITE_BASE_API = '/prod-api'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li>在 <code>src/utils/request.js</code> 中打印 <code>VITE_BASE_API</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_API</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时当我们执行 <code>npm run dev</code> 时，可以发现浏览器打印为 <code>/api</code> ，表示 <strong>开发时服务地址</strong></p>
<p>执行 <code>npm run build</code> 打包项目后运行（可以通过 anywhere 运行 dist 目录），浏览器打印为 <code>/prod-api</code>，表示 <strong>发布时服务地址</strong></p>
<p>表明咱们的 <strong>环境变量配置成功</strong></p>
<p>那么只需要修改 <code>baseURL</code> 为 <code>import.meta.env.VITE_BASE_API</code> 变量即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_API</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重新运行项目，接口依然请求成功</p>
<h3 id="数据拦截简化数据获取流程" tabindex="-1"><a class="header-anchor" href="#数据拦截简化数据获取流程" aria-hidden="true">#</a> 数据拦截简化数据获取流程</h3>
<p>如果我们想要获取到 <code>categorys</code> ，那么就必须要 <code>res.data.data.categorys</code> 。</p>
<p>有没有简单的方式可以不用嵌套那么多层级呢？</p>
<p>答案肯定是：有的。</p>
<p>可以利用 <code>axios</code> 的 <strong>响应拦截器</strong> 进行处理。</p>
<p>在 <code>src/utils/request.js</code> 中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> message<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>data
  <span class="token comment">// 要根据success的成功与否决定下面的操作</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO：业务错误</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
