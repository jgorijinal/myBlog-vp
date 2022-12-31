<template><h1 id="项目改造" tabindex="-1"><a class="header-anchor" href="#项目改造" aria-hidden="true">#</a> 项目改造</h1>
<p>原项目源码:<a href="https://github.com/NewCoder798/ZBestPC" target="_blank" rel="noopener noreferrer">https://github.com/NewCoder798/ZBestPC<ExternalLinkIcon/></a></p>
<p>源代码存在的问题分析:</p>
<ol>
<li><code>css</code> 和 <code>js</code> 资源多,  且全部采用了同步加载, 所以渲染是需要多次请求和加载, 降低了页面的性能</li>
<li><code>css</code> 和 <code>js</code> 源码未压缩</li>
<li>开发模式陈旧, 需要同时维护 <code>html, css 和 js</code> , 代码逻辑和解构不清晰, 迭代困难</li>
<li>项目不支持 <code>source-map</code>, 调试困难, 手动维护 <code>source-map</code> 成本大</li>
</ol>
</template>
