<template><h1 id="搭建项目架构" tabindex="-1"><a class="header-anchor" href="#搭建项目架构" aria-hidden="true">#</a> 搭建项目架构</h1>
<h2 id="使用-vite-创建项目" tabindex="-1"><a class="header-anchor" href="#使用-vite-创建项目" aria-hidden="true">#</a> 使用 Vite 创建项目</h2>
<blockquote>
<p>使用 Vite 创建项目
<a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noopener noreferrer">参考 Vite 官方指南<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm create vite@latest

Need to install the following packages:
  create-vite@latest
Ok to proceed? (y) y
√ Project name: ... shop-admin
√ Select a framework: » Vue
√ Select a variant: » TypeScript

Scaffolding project in C:\Users\86188\Desktop\shop-admin\shop-admin...

Done. Now run:

  cd shop-admin
  npm install  
  npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在安装了 Vite 的项目中，可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span> <span class="token comment">// 启动开发服务器</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span> <span class="token comment">// 为生产环境构建产物</span>
    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span> <span class="token comment">// 本地预览生产构建产物</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="调整目录结构" tabindex="-1"><a class="header-anchor" href="#调整目录结构" aria-hidden="true">#</a> 调整目录结构</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="代码规范和-eslint" tabindex="-1"><a class="header-anchor" href="#代码规范和-eslint" aria-hidden="true">#</a> 代码规范和 ESLint</h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3>
<ol>
<li>安装 ESLint 到项目中</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>初始化 ESLint 配置</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint-plugin-vue@latest, eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^5.0.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0, typescript@*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="3">
<li>ESLint 配置文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/essential',
    
    // 使用 Vue 3 规则
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="4">
<li>在 npm scripts 中添加验证脚本</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	...
  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint src/**/*.{js,jsx,vue,ts,tsx} --fix"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="编辑器集成" tabindex="-1"><a class="header-anchor" href="#编辑器集成" aria-hidden="true">#</a> 编辑器集成</h3>
<ul>
<li>禁用 Vetur</li>
<li>安装 eslint 插件</li>
<li>安装 volar 插件</li>
</ul>
<h3 id="defineprops、defineemits、no-undef-规则警告" tabindex="-1"><a class="header-anchor" href="#defineprops、defineemits、no-undef-规则警告" aria-hidden="true">#</a> defineProps、defineEmits、no-undef 规则警告</h3>
<p>需要定义全局变量 （打开新窗口）在 ESLint 配置文件中</p>
<p>如果不想定义全局变量，请使用 import { defineProps, defineEmits } from 'vue'.</p>
<p>示例 .eslintrc.js：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="typescript-相关" tabindex="-1"><a class="header-anchor" href="#typescript-相关" aria-hidden="true">#</a> TypeScript 相关</h2>
<ul>
<li><a href="https://cn.vitejs.dev/guide/features.html#typescript" target="_blank" rel="noopener noreferrer">TS 环境说明<ExternalLinkIcon/></a></li>
<li>shimes-vue.d.ts 文件的作用</li>
<li>vite-env.d.ts 文件的作用</li>
<li>vue-tsc 和 tsc
<ul>
<li>tsc 只能验证 ts 代码类型</li>
<li>vue-tsc 可以验证 ts + Vue Template 中的类型（基于 Volar）</li>
</ul>
</li>
</ul>
<h3 id="vue-3-中的-ts-支持" tabindex="-1"><a class="header-anchor" href="#vue-3-中的-ts-支持" aria-hidden="true">#</a> Vue 3 中的 TS 支持</h3>
<p><a href="https://v3.cn.vuejs.org/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">https://v3.cn.vuejs.org/guide/typescript-support.html<ExternalLinkIcon/></a></p>
<ol>
<li>lang=&quot;ts&quot;</li>
<li>要让 TypeScript 正确推断 Vue 组件选项中的类型, 需要使用的 <strong>defineComponent</strong> 中 全局方法定义组件</li>
<li><a href="https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props" target="_blank" rel="noopener noreferrer">组合式 API 配合 TS<ExternalLinkIcon/></a></li>
</ol>
<h2 id="初始化-vue-router" tabindex="-1"><a class="header-anchor" href="#初始化-vue-router" aria-hidden="true">#</a> 初始化 Vue Router</h2>
<h3 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h3>
<p>1、安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、初始化路由实例</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src\router\index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> RouteRecordRaw<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span>RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/home/index.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/login/index.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src\main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_404-未找到" tabindex="-1"><a class="header-anchor" href="#_404-未找到" aria-hidden="true">#</a> 404 未找到</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">'/:pathMatch(.*)*'</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">'notFound'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/notFound/index.vue'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="初始化-vuex" tabindex="-1"><a class="header-anchor" href="#初始化-vuex" aria-hidden="true">#</a> 初始化 Vuex</h2>
<p>1、安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vuex@next --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、配置</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src\store\index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  modules<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src\main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'element-plus/lib/theme-chalk/index.css'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="ts-支持" tabindex="-1"><a class="header-anchor" href="#ts-支持" aria-hidden="true">#</a> TS 支持</h3>
<p>官方文档方案（仅支持 state）：<a href="https://next.vuex.vuejs.org/zh/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">https://next.vuex.vuejs.org/zh/guide/typescript-support.html<ExternalLinkIcon/></a></p>
<p>store/index.ts 在这里生命的 State 类型传递给 vuex.d.ts , 形成依赖关系</p>
<p><img src="@source/.vuepress/public/images/sta1.png" alt="图片"></p>
<p>vuex.d.ts</p>
<p><img src="@source/.vuepress/public/images/sta2.png" alt="图片"></p>
<p>Vuex 4 版本依然没有很好的解决 TS 类型问题，官方宣称会在 Vuex 5 中提供更好的方案</p>
<p><a href="https://vuex.vuejs.org/zh/guide/typescript-support.html#usestore-%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E" target="_blank" rel="noopener noreferrer">useStore 类型声明<ExternalLinkIcon/></a></p>
<h2 id="配置模块路径别名" tabindex="-1"><a class="header-anchor" href="#配置模块路径别名" aria-hidden="true">#</a> 配置模块路径别名</h2>
<p>在 Vite 中支持模块路径别名自定义，<a href="https://cn.vitejs.dev/config/" target="_blank" rel="noopener noreferrer">参考文档<ExternalLinkIcon/></a></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>
<span class="token comment">// 注意：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：npm i -D @types/node</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果项目中使用了 TS，则还需要告诉 TS 别名的路径，否则 TS 会报错</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="css-样式管理" tabindex="-1"><a class="header-anchor" href="#css-样式管理" aria-hidden="true">#</a> CSS 样式管理</h2>
<p>Vite 中对 CSS 的支持：</p>
<ul>
<li><a href="https://cn.vitejs.dev/guide/features.html#css" target="_blank" rel="noopener noreferrer">https://cn.vitejs.dev/guide/features.html#css<ExternalLinkIcon/></a></li>
</ul>
<p>（1）由于 Vite 的目标仅为现代浏览器，因此建议使用原生 CSS 变量和实现 CSSWG 草案的 PostCSS 插件（例如 postcss-nesting）来编写简单的、符合未来标准的 CSS。</p>
<p>（2）但 Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># .scss and .sass</span>
<span class="token function">npm</span> <span class="token function">install</span> -D sass

<span class="token comment"># .less</span>
<span class="token function">npm</span> <span class="token function">install</span> -D <span class="token function">less</span>

<span class="token comment"># .styl and .stylus</span>
<span class="token function">npm</span> <span class="token function">install</span> -D stylus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果是用的是单文件组件，可以通过 <code>&lt;style lang=&quot;scss&quot;&gt;</code>（或其他预处理器）自动开启</p>
<p>注意事项:</p>
<ul>
<li>Vite 为 Sass 和 Less 改进了 @import 解析，以保证 Vite 别名也能被使用。</li>
<li>另外，url() 中的相对路径引用的，与根文件不同目录中的 Sass/Less 文件会自动变基以保证正确性。</li>
<li>由于 Stylus API 限制，@import 别名和 URL 变基不支持 Stylus。</li>
<li>你还可以通过在文件扩展名前加上 .module 来结合使用 CSS modules 和预处理器，例如 style.module.scss</li>
</ul>
<h3 id="样式目录结构" tabindex="-1"><a class="header-anchor" href="#样式目录结构" aria-hidden="true">#</a> 样式目录结构</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>variables.scss  # 全局 Sass 变量
mixin.scss      # 全局 mixin
common.scss     # 全局公共样式
transition.scss # 全局过渡动画样式
index.scss      # 组织统一导出
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>的工作流程是，全局样式都写在 src/styles 目录下，每个页面自己对应的样式都写在自己的 .vue 文件之中</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// index.scss
@import './variables.scss';
@import './mixin.scss';
@import './transition.scss';
@import './common.scss';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后在 main.ts 中导入 index.scss</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import "./styles/index.scss"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置使用全局样式变量" tabindex="-1"><a class="header-anchor" href="#配置使用全局样式变量" aria-hidden="true">#</a> 配置使用全局样式变量</h3>
<p>为了能够在组件内直接使用全局变量、mixin 等，需要特殊配置。</p>
<p>具体配置参见 Vite 官方文档：<a href="https://cn.vitejs.dev/config/" target="_blank" rel="noopener noreferrer">css.preprocessorOptions<ExternalLinkIcon/></a>。</p>
<p>这是一个常见的配置参考示例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给 sass-loader 传递选项</span>
    <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @/ 是 src/ 的别名</span>
      <span class="token comment">// 所以这里假设你有 `src/variables.sass` 这个文件</span>
      <span class="token comment">// 注意：在 sass-loader v8 中，这个选项名是 "prependData"</span>
      <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "@/styles/variables.scss"</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效</span>
    <span class="token comment">// 因为 `scss` 语法在内部也是由 sass-loader 处理的</span>
    <span class="token comment">// 但是在配置 `prependData` 选项的时候</span>
    <span class="token comment">// `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号</span>
    <span class="token comment">// 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "~@/variables.scss";</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 给 less-loader 传递 Less.js 相关选项</span>
    <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// http://lesscss.org/usage/#less-options-strict-units `Global Variables`</span>
      <span class="token comment">// `primary` is global variables fields name</span>
      <span class="token literal-property property">globalVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#fff'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>
