<template><h1 id="浏览器的渲染原理" tabindex="-1"><a class="header-anchor" href="#浏览器的渲染原理" aria-hidden="true">#</a> 浏览器的渲染原理</h1>
<h2 id="渲染页面的详细流程" tabindex="-1"><a class="header-anchor" href="#渲染页面的详细流程" aria-hidden="true">#</a> 渲染页面的详细流程</h2>
<p><img src="@source/.vuepress/public/images/xxrr1.png" alt="图片"></p>
<h3 id="解析一-html解析过程" tabindex="-1"><a class="header-anchor" href="#解析一-html解析过程" aria-hidden="true">#</a> 解析一 - HTML解析过程</h3>
<p>因为默认情况服务器会给浏览器返回 <code>index.html</code> 文件, 所以解析 <code>HTML</code> 是所有步骤的开始</p>
<p>解析 <code>HTML</code> 会构建 <code>DOM tree</code>
<img src="@source/.vuepress/public/images/xxrr2.png" alt="图片"></p>
<h3 id="解析二-–-生成css规则" tabindex="-1"><a class="header-anchor" href="#解析二-–-生成css规则" aria-hidden="true">#</a> 解析二 – 生成CSS规则</h3>
<p>在解析过程中, 如果会遇到 <code>CSS</code> 的 <code>link</code>元素, 那么会由浏览器下载对应的CSS文件</p>
<ul>
<li>注意: 下载 <code>CSS</code> 文件是不会影响 <code>DOM</code> 的解析</li>
</ul>
<p>浏览器下载完 <code>CSS</code> 文件之后 , 会对 <code>CSS</code> 进行解析, <strong>解析出对应的规则树</strong></p>
<ul>
<li>我们可以称之为 <code>CSSOM(CSS Object Model , CSS 对象模型)</code></li>
</ul>
<p><img src="@source/.vuepress/public/images/xxrr3.png" alt="图片"></p>
<h3 id="解析三-构建-render-tree" tabindex="-1"><a class="header-anchor" href="#解析三-构建-render-tree" aria-hidden="true">#</a> 解析三 - 构建 render  tree</h3>
<p><strong>当有了  <code>DOM tree</code>  和 <code>CSSOM tree</code> 之后, 就可以两个结合来构建 <code>Render tree</code></strong>
<img src="@source/.vuepress/public/images/xxrr4.png" alt="图片"></p>
<p>注意1 : <strong><code>link</code> 元素不会阻塞 <code>DOM tree</code> 的构建过程, 但是会阻塞 <code>Render tree</code> 的构建过程</strong></p>
<ul>
<li>因为 <code>Render tree</code> 在构建时, 需要对应的  <code>CSSOM tree</code></li>
</ul>
<p>注意2 : <strong><code>Render tree</code> 和 <code>DOM tree</code> 并不是一一对应的关系</strong>, 比如 <code>display:none</code> 的元素, 压根不存在在 <code>Render tree</code> 里</p>
<h3 id="解析四-–-布局-layout-和绘制-paint" tabindex="-1"><a class="header-anchor" href="#解析四-–-布局-layout-和绘制-paint" aria-hidden="true">#</a> 解析四 – 布局（layout）和绘制（Paint）</h3>
<p><strong>第四步是在渲染树<code>（Render Tree）</code>上运行布局<code>（Layout）</code>以计算每个节点的几何体</strong></p>
<ul>
<li>渲染树会表示显示哪些节点以及其他样式，但是不表示每个节点的尺寸、位置等信息；</li>
<li>布局是确定呈现树中所有节点的宽度、高度和位置信息；</li>
</ul>
<p><strong>第五步是将每个节点绘制（Paint）到屏幕上</strong></p>
<ul>
<li>在绘制阶段，浏览器将布局阶段计算的每个frame转为屏幕上实际的像素点；</li>
<li>包括将元素的可见部分进行绘制，比如文本、颜色、边框、阴影、替换元素（比如img）</li>
</ul>
<h2 id="回流和重绘" tabindex="-1"><a class="header-anchor" href="#回流和重绘" aria-hidden="true">#</a> 回流和重绘</h2>
<ol>
<li><strong>理解回流 reflow, (也可以称之为重排)</strong></li>
</ol>
<ul>
<li>第一次确定节点的大小和位置, 称之为布局(layout)</li>
<li>之后布局发生了改变, 对节点的大小和位置重新进行计算称之为回流</li>
</ul>
<p><strong>什么情况下引起回流?</strong></p>
<ul>
<li>比如 <code>DOM</code> 结构发生了变化 (添加新的节点, 移除节点)</li>
<li>比如改变了布局 (修改了 <code>width, height , padding , font-size</code> 等等)</li>
<li>窗口 <code>resize</code> 事件</li>
<li>调用了 <code>getComputedStyle</code> 方法获取尺寸,位置信息</li>
</ul>
<ol start="2">
<li><strong>理解重绘(repaint)</strong></li>
</ol>
<ul>
<li>第一次渲染内容称之为绘制(paint)</li>
<li>之后重新渲染称之为重绘</li>
</ul>
<p><strong>什么情况下引起重绘</strong></p>
<ul>
<li>比如修改了背景色, 文字颜色, 边框颜色, 样式等</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><em>回流一定会引起重绘，所以回流是一件很消耗性能的事情。</em></p>
</div>
<p>所以在开发中应该避免发生回流</p>
<ol>
<li>修改样式时尽量一次性修改</li>
</ol>
<ul>
<li>比如通过添加 class 修改</li>
</ul>
<ol start="2">
<li>尽量避免频繁的操作 <code>DOM</code></li>
</ol>
<ul>
<li>我们可以在一个 <code>DocumentFragment</code> 或者父元素中将要操作的DOM操作完成，再一次性的操作；</li>
</ul>
<ol start="3">
<li>尽量避免通过 <code>getComputedStyle</code> 获取尺寸、位置等信息；</li>
<li>对某些元素使用 <code>position</code> 的 <strong>absolute或者fixed</strong></li>
</ol>
<ul>
<li>并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响</li>
</ul>
<h2 id="script-元素和页面解析的关系" tabindex="-1"><a class="header-anchor" href="#script-元素和页面解析的关系" aria-hidden="true">#</a> script 元素和页面解析的关系</h2>
<ul>
<li>事实上, 浏览器在解析 <code>HTML</code> 的过程中, 如果遇到了 <code>script</code> 标签是不能继续构建 <code>DOM</code> 树的</li>
<li>他会停止继续构建, 首先下载 <code>javascript</code> 的代码, 并且执行 javascript 脚本</li>
<li>只有等到 <code>javascript</code> 脚本执行完成后, 才会继续解析 <code>HTML</code> , 构建 <code>DOM tree</code></li>
</ul>
<p>为什么要这样做呢？</p>
<ul>
<li>这是因为 <code>javascript</code> 的作用之一就是操作DOM, 并且可以修改 <code>DOM</code></li>
<li>如果等到DOM树构建完成并渲染再执行 <code>javascript</code> , 会造成严重的回流和重绘, 影响页面的性能</li>
<li>所以遇到 <code>script</code> 标签, 会优先下载和执行 <code>javascript</code> 代码, 再构建 <code>DOM</code> 树</li>
</ul>
<p>但是这个也往往会带来新的问题，特别是现代页面开发中：</p>
<ul>
<li>在目前的开发模式中 (Vue, React), 脚本往往比 HTML 页面更&quot;重&quot;, 处理时间还比较长</li>
<li>所以会造成页面的解析阻塞, 在脚本下载并执行之前, 用户在界面什么都看不到</li>
</ul>
<p>为了解决这个问题，script元素给我们提供了两个属性（attribute）：<code>defer 和 async</code></p>
<h3 id="defer-属性" tabindex="-1"><a class="header-anchor" href="#defer-属性" aria-hidden="true">#</a> defer 属性</h3>
<p><code>defer</code> 属性告诉浏览器, <strong>不要等待脚本的下载, 而继续解析 <code>HTML</code>, 构建 <code>DOM tree</code></strong></p>
<ul>
<li>脚本会由浏览器进行下载, 但是不会阻塞 <code>DOM tree</code> 的构建</li>
<li>如果脚本提前下载好了, 他会等待 <code>DOM Tree</code> 的构建完成, 在 <code>DOMContentLoaded</code> 事件之前再执行 <code>defer</code> 中的代码</li>
</ul>
<p>所以 <code>DOMContentLoaded</code> 总是会等待 <code>defer</code> 中的代码先执行完成
<img src="@source/.vuepress/public/images/df1.png" alt="图片"></p>
<p>另外多个带 defer 的脚本可以保证顺序来执行的</p>
<p>从某种角度来说, defer 可以提高页面的性能, 并且推荐放到 head 元素中</p>
<p>注意：defer 仅适用于外部脚本，对于script默认内容会被忽略。</p>
<h3 id="async-属性" tabindex="-1"><a class="header-anchor" href="#async-属性" aria-hidden="true">#</a> async 属性</h3>
<p><code>async</code> 特性与 <code>defer</code> 有些类似，它也能够让脚本不阻塞页面。</p>
<p><strong>async 让一个脚本完全独立</strong></p>
<ul>
<li>浏览器不会因 <code>async</code> 脚本而阻塞(与 <code>defer</code> 类似)</li>
<li><code>async</code> 脚本不能保证顺序, 它是独立下载, 独立运行, 不会等待其他脚本</li>
<li><code>async</code> 不会能保证在 <code>DOMContentLoaded</code> 之前或者之后执行</li>
</ul>
<p><code>defer</code> 通常用于需要在文档解析后操作 <code>DOM</code> 的 <code>JavaScrip</code> t代码，并且对多个 <code>script</code> 文件有顺序要求的；</p>
<p><code>async</code> 通常用于独立的脚本，对其他脚本，甚至 <code>DOM</code> 没有依赖的</p>
</template>
