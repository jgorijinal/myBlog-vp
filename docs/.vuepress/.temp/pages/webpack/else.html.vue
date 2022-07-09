<template><h1 id="webpack-打包其他资源" tabindex="-1"><a class="header-anchor" href="#webpack-打包其他资源" aria-hidden="true">#</a> webpack 打包其他资源</h1>
<h2 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h2>
<p>比较常见的使用图片的方式是两种：</p>
<ul>
<li>
<p>img元素，设置src属性；</p>
</li>
<li>
<p>其他元素（比如div），设置 background-image 的css属性
<img src="@source/.vuepress/public/images/img1.png" alt="图片">
<img src="@source/.vuepress/public/images/img2.png" alt="图片">
<img src="@source/.vuepress/public/images/img3.png" alt="图片"></p>
</li>
<li>
<p>file-loader</p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/fileloader.png" alt="图片"></p>
<h2 id="文件的命名规则" tabindex="-1"><a class="header-anchor" href="#文件的命名规则" aria-hidden="true">#</a> 文件的命名规则</h2>
<p>有时候处理后的<strong>文件名称</strong>按照一定的规则进行显示：</p>
<ul>
<li>比如保留原来的<strong>文件名、扩展名</strong>，同时为了防止重复，包含一个hash值等；
这个时候可以使用<strong>PlaceHolders</strong>来完成，webpack给我们提供了大量的 PlaceHolders 来显示不同的内容：</li>
<li><a href="https://webpack.js.org/loaders/file-loader/#placeholders" target="_blank" rel="noopener noreferrer">https://webpack.js.org/loaders/file-loader/#placeholders<ExternalLinkIcon/></a></li>
<li>可以在文档中查阅自己需要的placeholder；
几个最常用的placeholder：</li>
<li><code>[ext]</code>： 处理文件的扩展名；</li>
<li><code>[name]</code>：处理文件的名称；</li>
<li><code>[hash]</code>：文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）；</li>
<li><code>[contentHash]</code>：在file-loader中和<code>[hash]</code>结果是一致的（在webpack的一些其他地方不一样）；</li>
<li><code>[hash:&lt;length&gt;]</code>：截图hash的长度，默认32个字符太长了；</li>
<li><code>[path]</code>：文件相对于webpack配置文件的路径</li>
</ul>
<h2 id="设置文件的名称" tabindex="-1"><a class="header-anchor" href="#设置文件的名称" aria-hidden="true">#</a> 设置文件的名称</h2>
<p><img src="@source/.vuepress/public/images/mmmxx.png" alt="图片"></p>
<h2 id="设置文件的存放路径" tabindex="-1"><a class="header-anchor" href="#设置文件的存放路径" aria-hidden="true">#</a> 设置文件的存放路径</h2>
<p>也可以通过 <strong>outputPath</strong> 来设置输出的文件夹
<img src="@source/.vuepress/public/images/opp.png" alt="图片"></p>
<h2 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h2>
<p>url-loader 和 file-loader 的工作方式是相似的，但是可以将较小的文件，转成<strong>base64的URI</strong></p>
<p>安装url-loader：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install url-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/.vuepress/public/images/url.png" alt="图片"></p>
</template>
