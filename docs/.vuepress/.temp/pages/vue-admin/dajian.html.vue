<template><h1 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h1>
<h2 id="使用-vue-cli-创建项目" tabindex="-1"><a class="header-anchor" href="#使用-vue-cli-创建项目" aria-hidden="true">#</a> 使用 vue-cli 创建项目</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create vue3-admin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="了解一下-eslint" tabindex="-1"><a class="header-anchor" href="#了解一下-eslint" aria-hidden="true">#</a> 了解一下 ESLint</h2>
<p>在创建项目时，就进行过这样的选择：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>? Pick a linter / formatter config: 
  ESLint with error prevention only // 仅包含错误的 ESLint
  ESLint + Airbnb config // Airbnb 的 ESLint 延伸规则
  ESLint + Standard config // 标准的 ESLint 规则
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当前选择了 <strong>标准的 ESLint 规则</strong> ，就在该规则之下，看一看 <code>ESLint</code> 它的一些配置都有什么？</p>
<p>打开项目中的 <code>.eslintrc.js</code> 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ESLint 配置文件遵循 commonJS 的导出规则，所导出的对象就是 ESLint 的配置对象</span>
<span class="token comment">// 文档：https://eslint.bootcss.com/docs/user-guide/configuring</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 表示当前目录即为根目录，ESLint 规则将被限制到该目录下</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// env 表示启用 ESLint 检测的环境</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 node 环境下启动 ESLint 检测</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ESLint 中基础配置需要继承的配置</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"plugin:vue/vue3-essential"</span><span class="token punctuation">,</span> <span class="token string">"@vue/standard"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 解析器</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"babel-eslint"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 需要修改的启用规则及其各自的错误级别</span>
  <span class="token doc-comment comment">/**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"no-console"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token string">"warn"</span> <span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"no-debugger"</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"production"</span> <span class="token operator">?</span> <span class="token string">"warn"</span> <span class="token operator">:</span> <span class="token string">"off"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>想要解决 ESLint 错误，通常情况下有两种方式：</p>
<ol>
<li>按照 <code>ESLint</code> 的要求修改代码</li>
<li>修改 <code>ESLint</code> 的验证规则</li>
</ol>
<p><strong>修改 <code>ESLint</code> 的验证规则：</strong></p>
<ul>
<li>在 <code>.eslintrc.js</code> 文件中，新增一条验证规则
<img src="@source/.vuepress/public/images/mw1.png" alt="图片"></li>
</ul>
<h2 id="代码格式化-prettier" tabindex="-1"><a class="header-anchor" href="#代码格式化-prettier" aria-hidden="true">#</a> 代码格式化 Prettier</h2>
<p>有没有办法既可以保证 <code>ESLint</code> 规则校验，又可以让开发者无需关注格式问题来进行顺畅的开发呢？使用 prettier</p>
<ol>
<li>一个代码格式化工具</li>
<li>开箱即用</li>
<li>可以直接集成到 <code>VSCode</code> 之中</li>
<li>在保存时，让代码直接符合 <code>ESLint</code> 标准（需要通过一些简单配置）</li>
</ol>
<h2 id="eslint-与-prettier-配合解决代码格式问题" tabindex="-1"><a class="header-anchor" href="#eslint-与-prettier-配合解决代码格式问题" aria-hidden="true">#</a> ESLint 与 Prettier 配合解决代码格式问题</h2>
<ol>
<li>在 <code>VSCode</code> 中安装 <code>prettier</code> 插件（搜索 <code>prettier</code>），这个插件可以帮助我们在配置 <code>prettier</code> 的时候获得提示</li>
</ol>
<p><img src="@source/.vuepress/public/images/pret1.png" alt="图片">
2. 在项目中新建 <code>.prettierrc</code> 文件，该文件为 <code>perttier</code> 默认配置文件
3. 在该文件中写入如下配置：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 不尾随分号</span>
  <span class="token property">"semi"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 多行逗号分割的语法中，最后一行不加逗号</span>
  <span class="token property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"none"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li>打开 <code>VSCode</code> 《设置面板》, 在设置中，搜索 <code>save</code> ，勾选 <code>Format On Save</code></li>
</ol>
<p><img src="@source/.vuepress/public/images/save1.png" alt="图片"></p>
<p>至此，即可在 <strong><code>VSCode</code> 保存(ctrl+s)时，自动格式化代码！</strong></p>
<p><strong>但是！</strong> 你只做到这样还不够！</p>
<blockquote>
<ol>
<li>VSCode 而言，默认一个 tab 等于 4 个空格，而 ESLint 希望一个 tab 为两个空格</li>
<li>如果我们的 VSCode 安装了多个代码格式化工具的化</li>
<li>ESLint 和 prettier 之间的冲突问题</li>
</ol>
</blockquote>
<p>尝试在 <code>Home.vue</code> 中写入一个 <code>created</code> 方法，写入完成之后，打开我们的控制台我们会发现，此时代码抛出了一个 <code>ESLint</code> 的错误</p>
<p><img src="@source/.vuepress/public/images/created1.png" alt="图片"></p>
<p>这个错误的意思是说：<strong><code>created</code> 这个方法名和后面的小括号之间，应该有一个空格！</strong></p>
<p>但是当加入了这个空格之后，只要一保存代码，就会发现 <code>prettier</code> 会自动帮助我们去除掉这个空格</p>
<p>那么此时的这个问题就是 <code>prettier</code> 和 <code>ESLint</code> 的冲突问题</p>
<p>针对于这个问题我们想要解决也非常简单：</p>
<ol>
<li>打开 <code>.eslintrc.js</code> 配置文件</li>
<li>在 <code>rules</code> 规则下，新增一条规则</li>
</ol>
<p><img src="@source/.vuepress/public/images/off1.png" alt="图片">
3. 该规则表示关闭《方法名后增加空格》的规则
4. 重启项目</p>
<p>至此整个的 <code>perttier</code> 和 <code>ESLint</code> 的配合使用就算是全部完成</p>
<p>在之后写代码的过程中，只需要保存代码，那么 <code>perttier</code> 就会帮助我们自动格式化代码，使其符合 <code>ESLint</code> 的校验规则。而无需手动进行更改了\</p>
<h2 id="约定式-git-提交规范" tabindex="-1"><a class="header-anchor" href="#约定式-git-提交规范" aria-hidden="true">#</a> 约定式 git 提交规范</h2>
<p>对于 <strong><code>git</code> 提交规范</strong> 来说，不同的团队可能会有不同的标准，这次就以目前使用较多的 <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines" target="_blank" rel="noopener noreferrer">Angular团队规范<ExternalLinkIcon/></a> 延伸出的 <a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">Conventional Commits specification（约定式提交）<ExternalLinkIcon/></a> 为例，看一下  <strong><code>git</code> 提交规范</strong></p>
<p>约定式提交规范要求如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;type>[optional scope]: &lt;description>

[optional body]

[optional footer(s)]

--------  翻译 -------------
    
&lt;类型>[可选 范围]: &lt;描述>

[可选 正文]

[可选 脚注]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>其中 <code>&lt;type&gt;</code> 类型，必须是一个可选的值，比如：</p>
<ol>
<li>新功能：<code>feat</code></li>
<li>修复：<code>fix</code></li>
<li>文档变更：<code>docs</code></li>
<li>....</li>
</ol>
<h2 id="commitizen-规范化提交代码" tabindex="-1"><a class="header-anchor" href="#commitizen-规范化提交代码" aria-hidden="true">#</a> Commitizen 规范化提交代码</h2>
<p>如果严格安装 <strong>约定式提交规范</strong>， 来手动进行代码提交的话，那么是一件非常痛苦的事情，但是 <strong>git 提交规范的处理</strong> 又势在必行，那么怎么办</p>
<p>经过了很多人的冥思苦想，就出现了一种叫做 <strong>git 提交规范化工具</strong> 的东西</p>
<p><code>commitizen</code> 仓库名为 <a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">cz-cli<ExternalLinkIcon/></a> ，它提供了一个 <code>git cz</code> 的指令用于代替 <code>git commit</code>，简单一句话介绍它：</p>
<blockquote>
<p>当你使用 <code>commitizen</code> 进行代码提交（git commit）时，<code>commitizen</code> 会提交你在提交时填写所有必需的提交字段！</p>
</blockquote>
<ol>
<li>全局安装 <code>Commitizen</code></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g commitizen@4.2.4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>安装并配置 <code>cz-customizable</code> 插件</li>
</ol>
<ul>
<li>使用 <code>npm</code> 下载 <code>cz-customizable</code><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i cz-customizable@6.3.0 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>添加以下配置到 <code>package.json </code> 中<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<ol start="3">
<li>项目根目录下创建 <code>.cz-config.js</code> 自定义提示文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可选类型</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'feat'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'feat:     新功能'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fix'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'fix:      修复'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'docs:     文档变更'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'style'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'style:    代码格式(不影响代码运行的变动)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'refactor'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'refactor: 重构(既不是增加feature，也不是修复bug)'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'perf'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'perf:     性能优化'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'test:     增加测试'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'chore'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'chore:    构建过程或辅助工具的变动'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'revert'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'revert:   回退'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'build'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'build:    打包'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 消息步骤</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'请选择提交类型:'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">'请输入修改范围(可选):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">'请简要描述提交(必填):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'请输入详细描述(可选):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">'请输入要关闭的issue(可选):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">'确认使用以上信息提交？(y/n/e/h)'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 跳过问题</span>
  <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'body'</span><span class="token punctuation">,</span> <span class="token string">'footer'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// subject文字长度默认是72</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ol start="4">
<li>使用 <code>git cz</code> 代替 <code>git commit</code>
<img src="@source/.vuepress/public/images/gcz1.png" alt="图片"></li>
</ol>
<p>那么如果有马虎的同事，它们忘记了使用 <code>git cz</code> 指令，直接就提交了怎么办呢？</p>
<p>那么有没有方式来限制这种错误的出现呢？</p>
<p>答案是有的, 看下一节</p>
<h2 id="什么是-git-hooks" tabindex="-1"><a class="header-anchor" href="#什么是-git-hooks" aria-hidden="true">#</a> 什么是 Git Hooks</h2>
<p>上一节中使用了 <code>git cz</code> 来代替了 <code>git commit</code> 实现了规范化的提交诉求，但是依然存在着有人会忘记使用的问题</p>
<blockquote>
<p>我们希望：
当《提交描述信息》不符合 <a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">约定式提交规范<ExternalLinkIcon/></a> 的时候，阻止当前的提交，并抛出对应的错误提示</p>
</blockquote>
<p>而要实现这个目的，就需要先来了解一个概念，叫做 <code>Git hooks（git 钩子 || git 回调方法）</code></p>
<p>也就是：<strong><code>git</code> 在执行某个事件之前或之后进行一些其他额外的操作</strong></p>
<p>而我们所期望的 <strong>阻止不合规的提交消息</strong>，那么就需要使用到 <code>hooks</code> 的钩子函数</p>
<p>下面是整理出来的所有的 <code>hooks</code> ，可以进行一下参考，其中加粗的是常用到的 <code>hooks</code>：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Git Hook</th>
<th>调用时机</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">pre-applypatch</td>
<td><code>git am</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">applypatch-msg</td>
<td><code>git am</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">post-applypatch</td>
<td><code>git am</code>执行后</td>
<td>不影响<code>git am</code>的结果</td>
</tr>
<tr>
<td style="text-align:left"><strong>pre-commit</strong></td>
<td><code>git commit</code>执行前</td>
<td>可以用<code>git commit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left"><strong>commit-msg</strong></td>
<td><code>git commit</code>执行前</td>
<td>可以用<code>git commit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left">post-commit</td>
<td><code>git commit</code>执行后</td>
<td>不影响<code>git commit</code>的结果</td>
</tr>
<tr>
<td style="text-align:left">pre-merge-commit</td>
<td><code>git merge</code>执行前</td>
<td>可以用<code>git merge --no-verify</code>绕过。</td>
</tr>
<tr>
<td style="text-align:left">prepare-commit-msg</td>
<td><code>git commit</code>执行后，编辑器打开之前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">pre-rebase</td>
<td><code>git rebase</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">post-checkout</td>
<td><code>git checkout</code>或<code>git switch</code>执行后</td>
<td>如果不使用<code>--no-checkout</code>参数，则在<code>git clone</code>之后也会执行。</td>
</tr>
<tr>
<td style="text-align:left">post-merge</td>
<td><code>git commit</code>执行后</td>
<td>在执行<code>git pull</code>时也会被调用</td>
</tr>
<tr>
<td style="text-align:left">pre-push</td>
<td><code>git push</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">pre-receive</td>
<td><code>git-receive-pack</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">update</td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">post-receive</td>
<td><code>git-receive-pack</code>执行后</td>
<td>不影响<code>git-receive-pack</code>的结果</td>
</tr>
<tr>
<td style="text-align:left">post-update</td>
<td>当 <code>git-receive-pack</code>对 <code>git push</code> 作出反应并更新仓库中的引用时</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">push-to-checkout</td>
<td>当``git-receive-pack<code>对</code>git push<code>做出反应并更新仓库中的引用时，以及当推送试图更新当前被签出的分支且</code>receive.denyCurrentBranch<code>配置被设置为</code>updateInstead`时</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">pre-auto-gc</td>
<td><code>git gc --auto</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">post-rewrite</td>
<td>执行<code>git commit --amend</code>或<code>git rebase</code>时</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">sendemail-validate</td>
<td><code>git send-email</code>执行前</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">fsmonitor-watchman</td>
<td>配置<code>core.fsmonitor</code>被设置为<code>.git/hooks/fsmonitor-watchman</code>或<code>.git/hooks/fsmonitor-watchmanv2</code>时</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">p4-pre-submit</td>
<td><code>git-p4 submit</code>执行前</td>
<td>可以用<code>git-p4 submit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left">p4-prepare-changelist</td>
<td><code>git-p4 submit</code>执行后，编辑器启动前</td>
<td>可以用<code>git-p4 submit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left">p4-changelist</td>
<td><code>git-p4 submit</code>执行并编辑完<code>changelist message</code>后</td>
<td>可以用<code>git-p4 submit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left">p4-post-changelist</td>
<td><code>git-p4 submit</code>执行后</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">post-index-change</td>
<td>索引被写入到<code>read-cache.c do_write_locked_index</code>后</td>
<td></td>
</tr>
</tbody>
</table>
<p>PS：详细的 <code>HOOKS介绍</code> 可点击<a href="https://git-scm.com/docs/githooks" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>查看</p>
<p>整体的 <code>hooks</code> 非常多，但是其中用的比较多的其实只有两个：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Git Hook</th>
<th>调用时机</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>pre-commit</strong></td>
<td><code>git commit</code>执行前<br />它不接受任何参数，并且在获取提交日志消息并进行提交之前被调用。脚本<code>git commit</code>以非零状态退出会导致命令在创建提交之前中止。</td>
<td>可以用<code>git commit --no-verify</code>绕过</td>
</tr>
<tr>
<td style="text-align:left"><strong>commit-msg</strong></td>
<td><code>git commit</code>执行前<br />可用于将消息规范化为某种项目标准格式。<br />还可用于在检查消息文件后拒绝提交。</td>
<td>可以用<code>git commit --no-verify</code>绕过</td>
</tr>
</tbody>
</table>
<p>简单来说这两个钩子：</p>
<ol>
<li><code>commit-msg</code>：可以用来规范化标准格式，并且可以按需指定是否要拒绝本次提交</li>
<li><code>pre-commit</code>：会在提交前被调用，并且可以按需指定是否要拒绝本次提交</li>
</ol>
<p>而我们接下来要做的关键，就在这两个钩子上面。</p>
<h2 id="使用-husky-commitlint-检查提交描述是否符合规范要求" tabindex="-1"><a class="header-anchor" href="#使用-husky-commitlint-检查提交描述是否符合规范要求" aria-hidden="true">#</a> 使用 husky + commitlint 检查提交描述是否符合规范要求</h2>
<p>需要使用两个工具：</p>
<ol>
<li><a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint<ExternalLinkIcon/></a>：用于检查提交信息</li>
<li><a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">husky<ExternalLinkIcon/></a>：是<code>git hooks</code>工具</li>
</ol>
<p>注意：<strong><code>npm</code> 需要在 7.x 以上版本！！！！！</strong></p>
<h3 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h3>
<ol>
<li>
<p>安装依赖：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>创建 <code>commitlint.config.js</code> 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>打开 <code>commitlint.config.js</code> ， 增加配置项（ <a href="https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js" target="_blank" rel="noopener noreferrer">config-conventional 默认配置点击可查看<ExternalLinkIcon/></a> ）：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承的规则</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@commitlint/config-conventional'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 定义规则类型</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// type 类型定义，表示 git 提交的 type 必须在以下类型范围内</span>
    <span class="token string-property property">'type-enum'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">'always'</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">'feat'</span><span class="token punctuation">,</span> <span class="token comment">// 新功能 feature</span>
        <span class="token string">'fix'</span><span class="token punctuation">,</span> <span class="token comment">// 修复 bug</span>
        <span class="token string">'docs'</span><span class="token punctuation">,</span> <span class="token comment">// 文档注释</span>
        <span class="token string">'style'</span><span class="token punctuation">,</span> <span class="token comment">// 代码格式(不影响代码运行的变动)</span>
        <span class="token string">'refactor'</span><span class="token punctuation">,</span> <span class="token comment">// 重构(既不增加新功能，也不是修复bug)</span>
        <span class="token string">'perf'</span><span class="token punctuation">,</span> <span class="token comment">// 性能优化</span>
        <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token comment">// 增加测试</span>
        <span class="token string">'chore'</span><span class="token punctuation">,</span> <span class="token comment">// 构建过程或辅助工具的变动</span>
        <span class="token string">'revert'</span><span class="token punctuation">,</span> <span class="token comment">// 回退</span>
        <span class="token string">'build'</span> <span class="token comment">// 打包</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// subject 大小写不做校验</span>
    <span class="token string-property property">'subject-case'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li>
</ol>
<p><strong>注意：确保保存为 <code>UTF-8</code> 的编码格式</strong>
<img src="@source/.vuepress/public/images/utf1.png" alt="图片">
否则可能会出现错误</p>
<h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3>
<ol>
<li>安装依赖：<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install husky@7.0.1 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>启动 <code>hooks</code> ， 生成 <code>.husky</code> 文件夹<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx husky install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ol>
<p><img src="@source/.vuepress/public/images/husk1.png" alt="图片"></p>
<ol start="3">
<li>在 <code>package.json</code> 中生成 <code>prepare</code> 指令（<strong>需要 npm &gt; 7.0 版本</strong>)
<img src="@source/.vuepress/public/images/prepare1.png" alt="图片"></li>
<li>执行 <code>prepare</code> 指令</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>执行成功，提示
<img src="@source/.vuepress/public/images/ped1.png" alt="图片"></li>
<li>添加 <code>commitlint</code> 的 <code>hook</code> 到 <code>husky</code>中，并指令在 <code>commit-msg</code> 的 <code>hooks</code> 下执行 <code>npx --no-install commitlint --edit &quot;$1&quot;</code> 指令</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7">
<li>此时的 <code>.husky</code> 的文件结构
<img src="@source/.vuepress/public/images/commitmsg.png" alt="图片"></li>
</ol>
<p>至此， 不符合规范的 commit 将不再可提交：
<img src="@source/.vuepress/public/images/hu1.png" alt="图片"></p>
<p>现在还缺少一个 <strong>规范化的处理</strong> ，那就是 <strong>代码格式提交规范处理！</strong></p>
<h2 id="通过-pre-commit-检测提交时代码规范" tabindex="-1"><a class="header-anchor" href="#通过-pre-commit-检测提交时代码规范" aria-hidden="true">#</a> 通过 pre-commit 检测提交时代码规范</h2>
<p>在 <strong><code>ESLint</code> 与 <code>Prettier</code> 配合解决代码格式问题</strong> 的小节中，总结了如何处理 <strong>本地！代码格式问题。</strong></p>
<p>但是这样的一个格式处理问题，他只能够在本地进行处理，并且我们还需要 <strong>手动在  <code>VSCode</code> 中配置自动保存</strong> 才可以。那么这样就会存在一个问题，要是有人忘记配置这个东西了怎么办呢？他把代码写的乱七八糟的直接就提交了怎么办呢？</p>
<p>所以我们就需要有一种方式来规避这种风险。</p>
<p>那么想要完成这么一个操作就需要使用 <code>husky</code> 配合 <code>eslint</code> 才可以实现。</p>
<p>我们期望通过 <strong><code>husky</code> 监测 <code>pre-commit</code> 钩子，在该钩子下执行 <code>npx eslint --ext .js,.vue src</code></strong> 指令来去进行相关检测：</p>
<ol>
<li>执行 <code>npx husky add .husky/pre-commit &quot;npx eslint --ext .js,.vue src&quot;</code> 添加 <code>commit</code> 时的 <code>hook</code> （<code>npx eslint --ext .js,.vue src</code> 会在执行到该 hook 时运行）</li>
<li>该操作会生成对应文件 <code>pre-commit</code>：
<img src="@source/.vuepress/public/images/prec1.png" alt="图片"></li>
</ol>
<p>想要提交代码，必须处理完成所有的 eslint 错误信息</p>
<p>那么有没有办法，让程序猿在 0 配置的前提下，哪怕代码格式再乱，也可以 <strong>”自动“</strong> 帮助他修复对应的问题，并且完成提交呢？</p>
<h2 id="lint-staged-自动修复格式错误" tabindex="-1"><a class="header-anchor" href="#lint-staged-自动修复格式错误" aria-hidden="true">#</a> lint-staged 自动修复格式错误</h2>
<p>在上一节中通过 <code>pre-commit</code> 处理了 <strong>检测代码的提交规范问题，当我们进行代码提交时，会检测所有的代码格式规范</strong></p>
<p>但是这样会存在两个问题：</p>
<ol>
<li>我们只修改了个别的文件，没有必要检测所有的文件代码格式</li>
<li>它只能给我们提示出对应的错误，我们还需要手动的进行代码修改</li>
</ol>
<p>这一小节，就需要处理这两个问题</p>
<p>那么想要处理这两个问题，就需要使用另外一个插件 <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a> ！</p>
<p><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a> 可以让你当前的代码检查 <strong>只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送</strong></p>
<p><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a> 无需单独安装，我们生成项目时，<code>vue-cli</code> 已经帮助我们安装过了，所以我们直接使用就可以了</p>
<p>如果没有则安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save-dev lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li>
<p>修改 <code>package.json</code> 配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"src/**/*.{js,vue}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"eslint --fix"</span><span class="token punctuation">,</span>
      <span class="token string">"git add"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>如上配置，每次它只会在你本地 <code>commit</code> 之前，校验你提交的内容是否符合你本地配置的 <code>eslint</code>规则(这个见文档 <a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a> )，校验会出现两种结果：</p>
<ol>
<li>如果符合规则：则会提交成功。</li>
<li>如果不符合规则：它会自动执行 <code>eslint --fix</code> 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。</li>
</ol>
</li>
<li>
<p>修改 <code>.husky/pre-commit</code> 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/sh</span>
<span class="token punctuation">.</span> <span class="token string">"$(dirname "</span>$0<span class="token string">")/_/husky.sh"</span>

npx lint<span class="token operator">-</span>staged

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>再次执行提交代码</p>
</li>
<li>
<p>发现 <strong>暂存区中</strong> 不符合 <code>ESlint</code> 的内容，被自动修复</p>
</li>
</ol>
<h2 id="关于-vetur-检测-template-的单一根元素的问题" tabindex="-1"><a class="header-anchor" href="#关于-vetur-检测-template-的单一根元素的问题" aria-hidden="true">#</a> 关于 <code>vetur</code> 检测 <code>template</code> 的单一根元素的问题</h2>
<p>在 vue2 中， template 只允许存在一个根元素，但是这种情况在 vue3 里发生了一些变化。</p>
<p>在 Vue3 中开始支持 template 存在<strong>多个根元素</strong>了。但是因为 VSCode 中的一些插件没有及时更新，所以当在 template 中写入多个根元素
有可能会出现错误</p>
<p>出现这个问题的原因主要是： vetur 这个 vsCode 插件依然按照 vue2 的单一根元素逻辑进行检测，所以会出现提示错误的问题</p>
<p>但是要注意，虽然这样不太好看，但是 该问题<strong>并不影响代码运行</strong>！</p>
<p>如果实在觉得这样太丑的话，那么可以通过以下方案来 <strong>取消 vetur 对 template 的检测：</strong></p>
<ol>
<li>在 VSCode 的设置中，搜索 vetur ，找到如下设置，取消勾选
<img src="@source/.vuepress/public/images/ve1.png" alt="图片"></li>
<li>重启 vscode</li>
</ol>
<p>按以上两种方式执行之后，多根元素就不会出现不好看的错误</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>处理了 <strong>编程格式规范的问题</strong>，整个规范大体可以分为两大类：</p>
<ol>
<li>代码格式规范</li>
<li><code>git</code> 提交规范</li>
</ol>
<p><strong>代码格式规范：</strong></p>
<p>对于 <strong>代码格式规范</strong> 而言，通过 <code>ESLint</code> + <code>Prettier</code> + <code>VSCode 配置</code> 配合进行了处理。</p>
<p>最终达到了在保存代码时，自动规范化代码格式的目的。</p>
<p><strong><code>git</code> 提交规范：</strong></p>
<p>对于 <strong><code>git</code> 提交规范</strong> 而言我们使用了 <code>husky</code> 来监测 <code>Git hooks</code> 钩子，并且通过以下插件完成了对应的配置：</p>
<ol>
<li><a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">约定式提交规范<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">commitizen<ExternalLinkIcon/></a>：git 提交规范化工具</li>
<li><a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint<ExternalLinkIcon/></a>：用于检查提交信息</li>
<li><code>pre-commit</code>： <code>git hooks</code> 钩子</li>
<li><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a>：只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送</li>
</ol>
</template>
