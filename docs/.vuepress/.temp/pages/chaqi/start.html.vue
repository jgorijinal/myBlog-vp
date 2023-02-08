<template><h1 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h1>
<h2 id="git-操作" tabindex="-1"><a class="header-anchor" href="#git-操作" aria-hidden="true">#</a> git 操作</h2>
<ol>
<li>领导创建项目</li>
</ol>
<ul>
<li>在 <code>main</code> 主分支下创建 <code>develop</code> 分支, 并把分支提交到远程仓库中
<ul>
<li>创建 develop 分支 <code>git branch develop</code></li>
<li>切换到 <code>git checkout develop</code></li>
<li>添加到远程仓库 <code>git push --set-upstream origin develop</code></li>
</ul>
</li>
<li>在 <code>develop</code> 分支下创建各对应的功能分支
<ul>
<li>比如创建了 <code>git branch feature/home</code></li>
<li>切换到 <code>git checkout feature/home</code></li>
<li>再提交到远程仓库 <code>git push --set-upstream origin feature/home</code></li>
</ul>
</li>
</ul>
<ol start="2">
<li>初始化项目</li>
</ol>
<ul>
<li>创建前端 : <code>vue create &lt;同样的项目名&gt;</code> <strong><code>merge</code>合并</strong> 并创建项目</li>
<li>创建后端
<ul>
<li>切换到 <code>develop</code> 分支下</li>
<li><code>npm install express-generator -g</code> 全局安装</li>
<li>进入到项目目录, <code>express --view=ejs &lt;文件夹名&gt;</code> 如 <code>express --view=ejs server</code></li>
<li>然后进入创建的 server 目录需要执行 <code>npm install</code> 把依赖安装</li>
<li><code>npm run start</code> 启动后端, 访问 <code>http://localhost:3000/</code> 正常访问及成功</li>
</ul>
</li>
</ul>
<ol start="3">
<li>提交项目</li>
</ol>
<ul>
<li>在 <code>develop</code> 分支下
<ul>
<li><code>git add .</code></li>
<li><code>git commit -m '初始化项目</code></li>
<li><code>git push</code></li>
</ul>
</li>
</ul>
<p><strong>普通员工:</strong></p>
<ol>
<li>克隆指定分支代码</li>
</ol>
<ul>
<li>需要注意: <code>git clone https://xxx</code> 这么克隆代码是在 <code>主分支</code>下克隆代码<strong>并不是在 <code>develop</code> 分支下</strong></li>
<li>所以需要指定分支克隆代码  <code>git clone -b develop https://xxx</code></li>
</ul>
<ol start="2">
<li>现在是在 <code>develop</code> 分支下, 但是上传代码是在某一个其他分支上</li>
</ol>
<ul>
<li>先配置一下身份
<ul>
<li><code>git config user.name '张三'</code> , <code>git config user.email 'zhangsan@163.com'</code></li>
</ul>
</li>
<li>在 <code>develop</code> 分支下看一下日志 , <code>git log</code>
<ul>
<li>记录 <code>hash</code>值 , 比如  <code>90f8eeb3786fdcfcd99fddb3185dbf9be12f184e</code></li>
</ul>
</li>
<li>把远程分支拉到本地仓库 <code>git checkout -b feature/home origin/feature/home</code> , 这么个写法 <code>git checkout -b 本地分支名 origin/远程分支名</code></li>
<li>将 develope 分支 commit 对应的 <code>hash</code> 值提交的代码<strong>合并</strong>到 <code>feature/home</code> 分支上
<ul>
<li><code>git cherry-pick 90f8eeb3786fdcfcd99fddb3185dbf9be12f184e</code></li>
</ul>
</li>
<li>功能开发完毕之后在当前分支提交代码
<ul>
<li><code>git add .</code> ,<code>git commit -m 'xxx</code> ,<code>git push</code></li>
</ul>
</li>
</ul>
<h2 id="css-重置样式" tabindex="-1"><a class="header-anchor" href="#css-重置样式" aria-hidden="true">#</a> css 重置样式</h2>
<p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener noreferrer">normalize.css<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save normalize.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>main.js</code> 引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'normalize.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lib-flexible-移动端适配" tabindex="-1"><a class="header-anchor" href="#lib-flexible-移动端适配" aria-hidden="true">#</a> lib-flexible 移动端适配</h2>
<p><code>utils/flexible.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">flexible</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span> document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> docEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  <span class="token keyword">var</span> dpr <span class="token operator">=</span> window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> <span class="token number">1</span>

  <span class="token comment">// adjust body font size</span>
  <span class="token keyword">function</span> <span class="token function">setBodyFontSize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">12</span> <span class="token operator">*</span> dpr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'px'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> setBodyFontSize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">setBodyFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set 1rem = viewWidth / 10</span>
  <span class="token keyword">function</span> <span class="token function">setRemUnit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> rem <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> <span class="token number">10</span>
    docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">'px'</span>
  <span class="token punctuation">}</span>

  <span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// reset rem unit on page resize</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> setRemUnit<span class="token punctuation">)</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'pageshow'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>persisted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// detect 0.5px supports</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dpr <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fakeBody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> testElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
    testElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">'.5px solid transparent'</span>
    fakeBody<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>testElement<span class="token punctuation">)</span>
    docEl<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fakeBody<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>testElement<span class="token punctuation">.</span>offsetHeight <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      docEl<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'hairlines'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    docEl<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>fakeBody<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>直接在 <code>main.js</code> 引入此文件, html 根元素的 <code>font-size</code>属性会根据屏幕的大小自动地变化</p>
<p>此后可以使用 <code>rem</code> 进行布局即可</p>
<h2 id="项目中-别名" tabindex="-1"><a class="header-anchor" href="#项目中-别名" aria-hidden="true">#</a> 项目中 @ 别名</h2>
<p><code>vue.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@vue/cli-service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>resolve <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.json'</span><span class="token punctuation">,</span> <span class="token string">'.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="头部的navbar切换插件" tabindex="-1"><a class="header-anchor" href="#头部的navbar切换插件" aria-hidden="true">#</a> 头部的navbar切换插件</h2>
<p><a href="https://github.com/ScoutYin/ly-tab" target="_blank" rel="noopener noreferrer">ly-tab 移动端tab组件插件<ExternalLinkIcon/></a></p>
<h2 id="swiper-插件" tabindex="-1"><a class="header-anchor" href="#swiper-插件" aria-hidden="true">#</a> swiper 插件</h2>
<p><a href="https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3" target="_blank" rel="noopener noreferrer">vue-awesome-swiper@3.1.3<ExternalLinkIcon/></a></p>
<h2 id="滑动插件-better-scroll" tabindex="-1"><a class="header-anchor" href="#滑动插件-better-scroll" aria-hidden="true">#</a> 滑动插件 better-scroll</h2>
<p><a href="https://github.com/ustbhuangyi/better-scroll" target="_blank" rel="noopener noreferrer">better-scroll<ExternalLinkIcon/></a></p>
<ul>
<li>子元素的高度一定要比父元素的高度<strong>高</strong></li>
<li>必须要添加到 <code>mounted</code> 中</li>
<li>也可以用 <code>ref</code> 获取 <code>DOM</code></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    子元素
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">BetterScroll</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>wrapper<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">movable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
