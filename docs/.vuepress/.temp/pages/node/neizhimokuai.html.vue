<template><h1 id="常见的内置模块" tabindex="-1"><a class="header-anchor" href="#常见的内置模块" aria-hidden="true">#</a> 常见的内置模块</h1>
<h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2>
<p>用来<strong>处理路径</strong>的模块</p>
<p>例如:</p>
<ul>
<li>path.join() 方法 , 用来<strong>将多个片段拼接成一个完整的路径字符串</strong></li>
<li>path.basename() 方法, 用来从路径字符串 , 将文件名解析出来</li>
</ul>
<p>需要导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token string">"./User/why"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token string">"abc.txt"</span><span class="token punctuation">;</span>


<span class="token comment">// join 路径拼接</span>
<span class="token comment">// 直接拼接</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  \User\why\abc.txt</span>
<span class="token comment">// resolve 路径拼接</span>
<span class="token comment">// resolve 会拼接的是 /或 ./ 或 ../ 开头的路径, 查找拼接(比较智能)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  C:\Users\86188\Desktop\node-demo\User\why\abc.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>获取路径信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token string">'/User/why/abc.txt'</span>

<span class="token comment">// 目录名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// /User/why</span>
<span class="token comment">// 文件名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// abc.txt</span>
<span class="token comment">// 文件名后缀</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// .txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="webpack-中的使用" tabindex="-1"><a class="header-anchor" href="#webpack-中的使用" aria-hidden="true">#</a> webpack 中的使用</h3>
<p><img src="@source/.vuepress/public/images/pathqita.png" alt="图片"></p>
<h2 id="fs" tabindex="-1"><a class="header-anchor" href="#fs" aria-hidden="true">#</a> fs</h2>
<h3 id="fs的三种操作方式" tabindex="-1"><a class="header-anchor" href="#fs的三种操作方式" aria-hidden="true">#</a> fs的三种操作方式</h3>
<p><img src="@source/.vuepress/public/images/fs1.png" alt="图片"></p>
<h4 id="同步操作" tabindex="-1"><a class="header-anchor" href="#同步操作" aria-hidden="true">#</a> 同步操作</h4>
<p><img src="@source/.vuepress/public/images/fs2.png" alt="图片"></p>
<p>终端会打出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>后续需要执行的代码
Stats {
  dev: 1745203973,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 20547673300363388,
  size: 25,
  blocks: 0,
  atimeMs: 1665300898547.661,
  mtimeMs: 1665300898444.702,
  ctimeMs: 1665300898444.702,
  birthtimeMs: 1665300886624.2046,
  atime: 2022-10-09T07:34:58.548Z,
  mtime: 2022-10-09T07:34:58.445Z,
  ctime: 2022-10-09T07:34:58.445Z,
  birthtime: 2022-10-09T07:34:46.624Z
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="异步操作" tabindex="-1"><a class="header-anchor" href="#异步操作" aria-hidden="true">#</a> 异步操作</h4>
<p><img src="@source/.vuepress/public/images/fs3.png" alt="图片"></p>
<h4 id="promise-的方式" tabindex="-1"><a class="header-anchor" href="#promise-的方式" aria-hidden="true">#</a> promise 的方式</h4>
<p><img src="@source/.vuepress/public/images/fs4.png" alt="图片"></p>
<h3 id="文件描述符" tabindex="-1"><a class="header-anchor" href="#文件描述符" aria-hidden="true">#</a> 文件描述符</h3>
<p><img src="@source/.vuepress/public/images/fd02.png" alt="图片">
<img src="@source/.vuepress/public/images/fd01.png" alt="图片"></p>
<h3 id="文件的读写" tabindex="-1"><a class="header-anchor" href="#文件的读写" aria-hidden="true">#</a> 文件的读写</h3>
<p><img src="@source/.vuepress/public/images/dx1.png" alt="图片"></p>
<h4 id="flag-选项" tabindex="-1"><a class="header-anchor" href="#flag-选项" aria-hidden="true">#</a> flag 选项</h4>
<p>flag 的值很多:
<img src="@source/.vuepress/public/images/flag1.png" alt="图片">
例:
<img src="@source/.vuepress/public/images/xr1.png" alt="图片"></p>
<h4 id="encoding-选项" tabindex="-1"><a class="header-anchor" href="#encoding-选项" aria-hidden="true">#</a> encoding 选项</h4>
<p><img src="@source/.vuepress/public/images/dq1.png" alt="图片"></p>
<h3 id="文件夹操作" tabindex="-1"><a class="header-anchor" href="#文件夹操作" aria-hidden="true">#</a> 文件夹操作</h3>
<h4 id="创建文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件夹" aria-hidden="true">#</a> 创建文件夹</h4>
<p><img src="@source/.vuepress/public/images/cjjj.png" alt="图片"></p>
<h4 id="读取文件夹中的所有文件" tabindex="-1"><a class="header-anchor" href="#读取文件夹中的所有文件" aria-hidden="true">#</a> 读取文件夹中的所有文件</h4>
<p><img src="@source/.vuepress/public/images/dq111.png" alt="图片">
<img src="@source/.vuepress/public/images/wjj1.png" alt="图片"></p>
<h4 id="重命名" tabindex="-1"><a class="header-anchor" href="#重命名" aria-hidden="true">#</a> 重命名</h4>
<p><img src="@source/.vuepress/public/images/rename1.png" alt="图片"></p>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> events</h2>
<p><img src="@source/.vuepress/public/images/eve1.png" alt="图片"></p>
<h3 id="基础方法" tabindex="-1"><a class="header-anchor" href="#基础方法" aria-hidden="true">#</a> 基础方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'events'</span><span class="token punctuation">)</span>
<span class="token comment">// 1. 创建发射器 </span>
<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听1'</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听2'</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>


<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'kobe'</span><span class="token punctuation">,</span> <span class="token string">'james'</span><span class="token punctuation">)</span>
  emitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'kobe'</span><span class="token punctuation">,</span> <span class="token string">'james'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="获取信息" tabindex="-1"><a class="header-anchor" href="#获取信息" aria-hidden="true">#</a> 获取信息</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">eventNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 绑定的事件名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">listenerCount</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 绑定的事件个数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emitter<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 绑定的事件函数</span>
<span class="token comment">// [ 'click' ]</span>
<span class="token comment">// 2</span>
<span class="token comment">// [ [Function (anonymous)], [Function: fn] ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="不常用的一些方法" tabindex="-1"><a class="header-anchor" href="#不常用的一些方法" aria-hidden="true">#</a> 不常用的一些方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 只执行一次 </span>
emitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 将本次监听放到最前面</span>
emitter<span class="token punctuation">.</span><span class="token function">prependListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 移除'全部的'监听</span>
emitter<span class="token punctuation">.</span><span class="token function">removeListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
