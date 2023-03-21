import{_ as e,d as a}from"./app.fcb85f29.js";var l="/myBlog-vp/assets/plu1.d176e032.png",n="/myBlog-vp/assets/plu3.a13f9ca7.png",i="/myBlog-vp/assets/plug4.ae91179b.png",s="/myBlog-vp/assets/plu5.cf0e9ada.png",p="/myBlog-vp/assets/hp1.92eda1b7.png",t="/myBlog-vp/assets/hp2.86f87d37.png",r="/myBlog-vp/assets/hp3.5bae2b21.png",d="/myBlog-vp/assets/hp4.59603ac3.png",o="/myBlog-vp/assets/hp5.0d5ba716.png";const c={},u=a('<h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h1><p><code>loader</code> \u662F\u6587\u4EF6\u52A0\u8F7D\u5668</p><ul><li>\u529F\u80FD\uFF1A\u80FD\u591F\u5BF9\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\u3001\u4F18\u5316\u3001\u6DF7\u6DC6\uFF08\u538B\u7F29\uFF09\u7B49 , \u7528\u4E8E <strong>\u7279\u5B9A\u7684\u6A21\u5757\u7C7B\u578B</strong>(\u5904\u7406\u6216\u8F6C\u6362\u67D0\u4E00\u4E2A\u6587\u4EF6) \u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 babel-loader , vue-loader</li><li>\u8FD0\u884C\u65F6\u673A\uFF1A\u5728\u521B\u5EFA\u6700\u7EC8\u4EA7\u7269\u4E4B\u524D\u8FD0\u884C</li></ul><p><code>plugin</code> \u662F webpack \u63D2\u4EF6</p><ul><li>\u529F\u80FD\uFF1A\u80FD\u5B9E\u73B0\u66F4\u591A\u529F\u80FD\uFF0C\u6BD4\u5982\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u3001Code Split\u3001\u52A0\u901F\u7F16\u8BD1\u7B49 , \u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u73AF\u5883\u53D8\u91CF\u6CE8\u5165...</li><li>\u8FD0\u884C\u65F6\u673A\uFF1A\u5728\u6574\u4E2A\u6253\u5305\u8FC7\u7A0B\uFF08\u4EE5\u53CA\u524D\u540E\uFF09\u90FD\u80FD\u8FD0\u884C <img src="'+l+`" alt="\u56FE\u7247"></li></ul><h2 id="cleanwebpackplugin" tabindex="-1"><a class="header-anchor" href="#cleanwebpackplugin" aria-hidden="true">#</a> CleanWebpackPlugin</h2><p>\u5728\u524D\u9762\uFF0C\u6BCF\u6B21\u4FEE\u6539\u4E86\u4E00\u4E9B\u914D\u7F6E\uFF0C\u91CD\u65B0\u6253\u5305\u65F6\uFF0C\u90FD\u9700\u8981\u624B\u52A8\u5220\u9664dist\u6587\u4EF6\u5939\uFF1A</p><ul><li>\u53EF\u4EE5\u501F\u52A9\u4E8E\u4E00\u4E2A\u63D2\u4EF6\u6765\u5E2E\u52A9\u6211\u4EEC\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u5C31\u662F <strong><code>CleanWebpackPlugin</code></strong></li></ul><p>\u9996\u5148\uFF0C\u5148\u5B89\u88C5\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> clean-webpack-plugin -D 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4E4B\u540E\u5728\u63D2\u4EF6\u4E2D\u914D\u7F6E\uFF1A</li></ul><p><img src="`+n+`" alt="\u56FE\u7247"></p><h2 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> HtmlWebpackPlugin</h2><p>\u53E6\u5916\u8FD8\u6709\u4E00\u4E2A\u4E0D\u592A\u89C4\u8303\u7684\u5730\u65B9\uFF1A</p><ul><li>\u6211\u4EEC\u7684 HTML \u6587\u4EF6\u662F\u7F16\u5199\u5728\u6839\u76EE\u5F55\u4E0B\u7684\uFF0C\u800C\u6700\u7EC8\u6253\u5305\u7684<strong>dist \u6587\u4EF6\u5939\u4E2D\u662F\u6CA1\u6709index.html\u6587\u4EF6</strong>\u7684</li><li>\u5728<strong>\u8FDB\u884C\u9879\u76EE\u90E8\u7F72\u7684</strong>\u65F6\uFF0C\u5FC5\u7136\u4E5F\u662F\u9700\u8981<strong>\u6709\u5BF9\u5E94\u7684\u5165\u53E3\u6587\u4EF6 index.html</strong></li><li>\u6240\u4EE5\u6211\u4EEC\u4E5F\u9700\u8981\u5BF9 <strong>index.html \u8FDB\u884C\u6253\u5305\u5904\u7406</strong></li></ul><p>\u5BF9 HTML \u8FDB\u884C\u6253\u5305\u5904\u7406\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u63D2\u4EF6\uFF1A<strong><code>HtmlWebpackPlugin</code></strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> html-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+i+'" alt="\u56FE\u7247"></p><h3 id="\u751F\u6210\u7684-index-html-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u7684-index-html-\u5206\u6790" aria-hidden="true">#</a> \u751F\u6210\u7684 index.html \u5206\u6790</h3><p>\u4F1A\u53D1\u73B0\uFF0C\u73B0\u5728\u81EA\u52A8\u5728 dist \u6587\u4EF6\u5939\u4E2D\uFF0C\u751F\u6210\u4E86\u4E00\u4E2A index.html \u7684\u6587\u4EF6\uFF1A</p><ul><li>\u8BE5\u6587\u4EF6\u4E2D\u4E5F\u81EA\u52A8\u6DFB\u52A0\u4E86\u6253\u5305\u7684 bundle.js \u6587\u4EF6</li></ul><p><img src="'+s+'" alt="\u56FE\u7247"></p><p>\u8FD9\u4E2A\u6587\u4EF6\u662F\u5982\u4F55\u751F\u6210\u7684\u5462\uFF1F</p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u6839\u636E<strong>ejs \u7684\u4E00\u4E2A\u6A21\u677F</strong>\u6765\u751F\u6210\u7684\uFF1B</li><li>\u5728 html-webpack-plugin \u7684\u6E90\u7801\u4E2D\uFF0C\u6709\u4E00\u4E2A default_index.ejs \u6A21\u5757\uFF1B</li></ul><h3 id="\u81EA\u5B9A\u4E49-html-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-html-\u6A21\u677F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 HTML \u6A21\u677F</h3><p>\u5982\u679C\u6211\u4EEC\u60F3\u5728\u81EA\u5DF1\u7684\u6A21\u5757\u4E2D\u52A0\u5165\u4E00\u4E9B\u6BD4\u8F83\u7279\u522B\u7684\u5185\u5BB9\uFF1A</p><ul><li>\u6BD4\u5982\u6DFB\u52A0\u4E00\u4E2Anoscript\u6807\u7B7E\uFF0C\u5728\u7528\u6237\u7684JavaScript\u88AB\u5173\u95ED\u65F6\uFF0C\u7ED9\u4E88\u54CD\u5E94\u7684\u63D0\u793A</li><li>\u6BD4\u5982\u5728<strong>\u5F00\u53D1vue\u6216\u8005react\u9879\u76EE</strong>\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u53EF\u4EE5\u6302\u8F7D\u540E\u7EED\u7EC4\u4EF6\u7684<strong>\u6839\u6807\u7B7E</strong> <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code></li></ul><p>\u8FD9\u4E2A\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5C5E\u4E8E\u81EA\u5DF1\u7684 index.html \u6A21\u5757 <img src="'+p+'" alt="\u56FE\u7247"></p><h3 id="\u81EA\u5B9A\u4E49\u6A21\u677F\u6570\u636E\u586B\u5145" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6A21\u677F\u6570\u636E\u586B\u5145" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6A21\u677F\u6570\u636E\u586B\u5145</h3><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u4F1A\u6709\u4E00\u4E9B\u7C7B\u4F3C\u8FD9\u6837\u7684\u8BED\u6CD5&lt;% \u53D8\u91CF %&gt;\uFF0C\u8FD9\u4E2A\u662FEJS\u6A21\u5757\u586B\u5145\u6570\u636E\u7684\u65B9\u5F0F\u3002</p><p>\u5728\u914D\u7F6E HtmlWebpackPlugin \u65F6 \uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><ul><li><strong>template</strong>\uFF1A\u6307\u5B9A\u6211\u4EEC\u8981\u4F7F\u7528\u7684\u6A21\u5757\u6240\u5728\u7684\u8DEF\u5F84</li><li><strong>title</strong>\uFF1A\u5728\u8FDB\u884C <code>htmlWebpackPlugin.options.title</code> \u8BFB\u53D6\u65F6\uFF0C\u5C31\u4F1A\u8BFB\u5230\u8BE5\u4FE1\u606F</li></ul><h3 id="defineplugin-\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#defineplugin-\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> DefinePlugin \u7684\u4ECB\u7ECD</h3><p>\u4F46\u662F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7F16\u8BD1\u8FD8\u662F\u4F1A<strong>\u62A5\u9519</strong>\uFF0C\u56E0\u4E3A\u5728\u6211\u4EEC\u7684\u6A21\u5757\u4E2D\u8FD8\u4F7F\u7528\u5230\u4E00\u4E2A <strong><code>BASE_URL</code></strong> \u7684\u5E38\u91CF <img src="'+t+'" alt="\u56FE\u7247"></p><p>\u8FD9\u662F\u56E0\u4E3A\u5728\u7F16\u8BD1template\u6A21\u5757\u65F6\uFF0C\u6709\u4E00\u4E2ABASE_URL\uFF1A</p><ul><li><code>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;\uFF1B</code></li><li>\u4F46\u662F\u6211\u4EEC\u5E76\u6CA1\u6709\u8BBE\u7F6E\u8FC7\u8FD9\u4E2A\u5E38\u91CF\u503C\uFF0C\u6240\u4EE5\u4F1A\u51FA\u73B0\u6CA1\u6709\u5B9A\u4E49\u7684\u9519\u8BEF</li></ul><p>\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 <strong>DefinePlugin</strong> \u63D2\u4EF6</p><h3 id="defineplugin-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#defineplugin-\u7684\u4F7F\u7528" aria-hidden="true">#</a> DefinePlugin \u7684\u4F7F\u7528</h3><p>DefinePlugin \u5141\u8BB8\u5728\u7F16\u8BD1\u65F6\u521B\u5EFA\u914D\u7F6E\u7684\u5168\u5C40\u5E38\u91CF\uFF0C\u662F\u4E00\u4E2A webpack \u5185\u7F6E\u7684\u63D2\u4EF6\uFF08\u4E0D\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF09\uFF1A</p><p><img src="'+r+`" alt="\u56FE\u7247"></p><p>\u8FD9\u4E2A\u65F6\u5019\uFF0C<code>npm run build</code>\u7F16\u8BD1 template \u5C31\u53EF\u4EE5\u6B63\u786E\u7684\u7F16\u8BD1\u4E86\uFF0C\u4F1A\u8BFB\u53D6\u5230BASE_URL\u7684\u503C\uFF1B</p><p>\u540E\u7EED\u8FD8\u4F1A\u518D\u603B\u7ED3 DefinePlugin \u7684\u4E00\u4E9B\u5176\u4ED6\u7528\u6CD5</p><h2 id="copywebpackplugin" tabindex="-1"><a class="header-anchor" href="#copywebpackplugin" aria-hidden="true">#</a> CopyWebpackPlugin</h2><p>\u5728vue\u7684\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E00\u4E9B\u6587\u4EF6\u653E\u5230public\u7684\u76EE\u5F55\u4E0B\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u76EE\u5F55\u4F1A\u88AB\u590D\u5236\u5230dist\u6587\u4EF6\u5939\u4E2D\u3002</p><ul><li>\u8FD9\u4E2A\u590D\u5236\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 CopyWebpackPlugin \u6765\u5B8C\u6210\uFF1B</li></ul><p>\u5B89\u88C5 CopyWebpackPlugin \u63D2\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> copy-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A5\u4E0B\u6765\u914D\u7F6E CopyWebpackPlugin \u5373\u53EF <img src="`+d+'" alt="\u56FE\u7247"></p><p><img src="'+o+'" alt="\u56FE\u7247"></p>',49);function g(h,m){return u}var v=e(c,[["render",g],["__file","plugin1.html.vue"]]);export{v as default};