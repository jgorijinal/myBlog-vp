<template><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1>
<ul>
<li>如果有 <code>dist</code> 目录，则删除 <code>dist</code> 目录</li>
<li>在 <code>.gitignore</code> 添加一行 <code>/dist</code> 然后提交代码</li>
<li>运行<code> yarn build</code> 创建出最新的 <code>dist</code></li>
<li>运行 hs dist 在本地测试网站是否成功运行 http-server dist -c-1</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g http-server
http-server dist -c-1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="设置-build-path" tabindex="-1"><a class="header-anchor" href="#设置-build-path" aria-hidden="true">#</a> 设置 build path</h2>
<p>在 <code>vite.config.js</code> 中设置正确的 <code>base</code></p>
<ul>
<li>
<p>如果你要部署在 <code>https://&lt;USERNAME&gt;.github.io/</code> 上，你可以省略 <code>base</code> 使其默认为 <code>'/'</code></p>
</li>
<li>
<p>如果你要部署在 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> 上，例如你的仓库地址为 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>，那么请设置 <code>base</code> 为 <code>'/&lt;REPO&gt;/'</code></p>
</li>
</ul>
<p>简单可以写成 <code>{base:'./' , ....}</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">...</span> 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span><span class="token string">'./'</span><span class="token punctuation">,</span>              <span class="token comment">//加这两句 , 因为中间要有仓库名, 加点会用相对的路径</span>
  assetsDir<span class="token operator">:</span><span class="token string">'assets'</span><span class="token punctuation">,</span>     <span class="token comment">//加这两句  github不支持下划线 _asset , 所以改成assets</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">md</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  vueCustomBlockTransforms<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">demo</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> options
          <span class="token keyword">const</span> file <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> parsed <span class="token operator">=</span> <span class="token function">baseParse</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>n <span class="token operator">=></span> n<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">'demo'</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> title <span class="token operator">=</span> parsed<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>content
          <span class="token keyword">const</span> main <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>parsed<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>source<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export default function (Component) {
      Component.__sourceCode = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
            <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>main<span class="token punctuation">)</span>
          <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      Component.__sourceCodeTitle = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    }</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="部署-1" tabindex="-1"><a class="header-anchor" href="#部署-1" aria-hidden="true">#</a> 部署</h2>
<ul>
<li>新建仓库</li>
<li>部署到 GitHub</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> dist
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">"first commit"</span>
<span class="token function">git</span> branch -M main
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:jgorijinal/vue3-ui-website.git
<span class="token function">git</span> push -f -u origin main
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="一键部署" tabindex="-1"><a class="header-anchor" href="#一键部署" aria-hidden="true">#</a> 一键部署</h2>
<p>deploy.sh:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf dist
<span class="token function">yarn</span> build
<span class="token builtin class-name">cd</span> dist
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">'first commit'</span>
<span class="token function">git</span> branch -M main
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:jgorijinal/vue3-ui-website.git
<span class="token function">git</span> push -f -u origin main
<span class="token builtin class-name">cd</span> -
<span class="token builtin class-name">echo</span> https://jgorijinal.github.io/vue3-ui-website/<span class="token comment">#/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>运行时 <code>sh deploy.sh</code></p>
</template>
