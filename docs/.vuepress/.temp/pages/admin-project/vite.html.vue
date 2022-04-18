<template><h1 id="vite环境变量" tabindex="-1"><a class="header-anchor" href="#vite环境变量" aria-hidden="true">#</a> Vite环境变量</h1>
<h2 id="环境变量-env文件" tabindex="-1"><a class="header-anchor" href="#环境变量-env文件" aria-hidden="true">#</a> 环境变量 .env文件</h2>
<p><a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p><code>.env</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VITE_SOME_KEY=123
VITE_ROUTE_AUTOLOAD=true
VITE_API_URL="/api"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>加载的环境变量也会通过<code>import.meta.env</code> 以<strong>字符串形式</strong>暴露给客户端源码。</p>
</template>
