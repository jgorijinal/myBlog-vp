import{_ as r,r as l,o,c as n,a as s,e as t,F as p,d as e,b as i}from"./app.fcb85f29.js";var d="/myBlog-vp/assets/pcss1.3269293d.png",c="/myBlog-vp/assets/autop1.1ef6f1dc.png",u="/myBlog-vp/assets/autop2.0cbb2fb9.png",g="/myBlog-vp/assets/postc1.ac2ab873.png",h="/myBlog-vp/assets/penv1.03b4960f.png",m="/myBlog-vp/assets/penv2.410dcc1e.png",b="/myBlog-vp/assets/clcl1.840083aa.png",f="/myBlog-vp/assets/filel3.b6cffb24.png",v="/myBlog-vp/assets/filel2.5debba4b.png",_="/myBlog-vp/assets/ph1.fae2343e.png",x="/myBlog-vp/assets/ph2.cb7f463f.png",k="/myBlog-vp/assets/ph3.b9610a43.png",y="/myBlog-vp/assets/urll1.8937fe18.png",B="/myBlog-vp/assets/urll3.c90dc550.png",S="/myBlog-vp/assets/am1.1679f376.png",w="/myBlog-vp/assets/am2.222367a6.png",C="/myBlog-vp/assets/am3.27c64b61.png",P="/myBlog-vp/assets/am4.8a988aa9.png",D="/myBlog-vp/assets/am5.152d76e3.png",j="/myBlog-vp/assets/fon1.e3d94da9.png",N="/myBlog-vp/assets/fon2.8415ceb4.png",V="/myBlog-vp/assets/fon3.4f105de1.png";const E={},F=e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="\u8BA4\u8BC6-postcss-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC6-postcss-\u5DE5\u5177" aria-hidden="true">#</a> \u8BA4\u8BC6 PostCSS \u5DE5\u5177</h2><p>\u4EC0\u4E48\u662FPostCSS\u5462\uFF1F</p><ul><li>PostCSS\u662F\u4E00\u4E2A\u901A\u8FC7<strong>JavaScript</strong>\u6765<strong>\u8F6C\u6362\u6837\u5F0F\u7684\u5DE5\u5177</strong>\uFF1B</li><li>\u8FD9\u4E2A\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u8FDB\u884C\u4E00\u4E9B<strong>CSS\u7684\u8F6C\u6362\u548C\u9002\u914D</strong>\uFF0C\u6BD4\u5982<strong>\u81EA\u52A8\u6DFB\u52A0\u6D4F\u89C8\u5668\u524D\u7F00\u3001css\u6837\u5F0F\u7684\u91CD\u7F6E\uFF1B</strong></li><li>\u4F46\u662F\u5B9E\u73B0\u8FD9\u4E9B\u5DE5\u5177\uFF0C\u6211\u4EEC\u9700\u8981\u501F\u52A9\u4E8E PostCSS \u5BF9\u5E94\u7684\u63D2\u4EF6\uFF1B</li></ul><p>\u5982\u4F55\u4F7F\u7528PostCSS\u5462\uFF1F\u4E3B\u8981\u5C31\u662F\u4E24\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u67E5\u627E PostCSS \u5728\u6784\u5EFA\u5DE5\u5177\u4E2D\u7684\u6269\u5C55\uFF0C\u6BD4\u5982 webpack \u4E2D\u7684 postcss-loader\uFF1B</li><li>\u7B2C\u4E8C\u6B65\uFF1A\u9009\u62E9\u53EF\u4EE5\u6DFB\u52A0\u4F60\u9700\u8981\u7684 PostCSS \u76F8\u5173\u7684\u63D2\u4EF6\uFF1B</li></ul><h3 id="\u547D\u4EE4\u884C\u4F7F\u7528-postcss" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u4F7F\u7528-postcss" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u4F7F\u7528 postcss</h3><p>\u5F53\u7136\uFF0C\u80FD\u4E0D\u80FD\u4E5F\u76F4\u63A5\u5728\u7EC8\u7AEF\u4F7F\u7528PostCSS\u5462\uFF1F</p><ul><li>\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u9700\u8981\u5355\u72EC\u5B89\u88C5\u4E00\u4E2A\u5DE5\u5177postcss-cli\uFF1B</li></ul><p>\u53EF\u4EE5\u5B89\u88C5\u4E00\u4E0B\u5B83\u4EEC\uFF1Apostcss\u3001postcss-cli</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss -D

<span class="token function">npm</span> <span class="token function">install</span> postcss-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7F16\u5199\u4E00\u4E2A\u9700\u8981\u6DFB\u52A0\u524D\u7F00\u7684css\uFF1A</p><p><img src="`+d+`" alt="\u56FE\u7247"></p><h3 id="\u63D2\u4EF6autoprefixer" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6autoprefixer" aria-hidden="true">#</a> \u63D2\u4EF6autoprefixer</h3><p>\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u524D\u7F00\uFF0C\u6240\u4EE5\u8981\u5B89\u88C5autoprefixer\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u76F4\u63A5\u4F7F\u7528\u4F7F\u7528postcss\u5DE5\u5177\uFF0C\u5E76\u4E14\u5236\u5B9A\u4F7F\u7528autoprefixer</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx postcss --use autoprefixer -o end.css ./src/css/style.css
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F6C\u5316\u4E4B\u540E\u7684css\u6837\u5F0F\u5982\u4E0B</p><p><img src="`+c+`" alt="\u56FE\u7247"></p><h3 id="postcss-loader" tabindex="-1"><a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a> postcss-loader</h3><p>\u771F\u5B9E\u5F00\u53D1\u4E2D\u6211\u4EEC\u5FC5\u7136\u4E0D\u4F1A\u76F4\u63A5\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177\u6765\u5BF9 css \u8FDB\u884C\u5904\u7406\uFF0C\u800C\u662F\u8981<code>npm run build</code> , \u501F\u52A9\u4E8Ewebpack\u6784\u5EFA\u5DE5\u5177\u6253\u5305\u65F6\u5904\u7406\uFF1A</p><ul><li><strong>\u5728webpack\u4E2D\u4F7F\u7528postcss \u5C31\u662F\u4F7F\u7528postcss-loader\u6765\u5904\u7406\u7684</strong></li></ul><p>\u6765\u5B89\u88C5postcss-loader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u52A0\u8F7Dcss\u7684loader\uFF1A</p><ul><li>\u6CE8\u610F\uFF1A<strong>\u56E0\u4E3A postcss \u9700\u8981\u6709\u5BF9\u5E94\u7684\u63D2\u4EF6(autoprefixer)\u624D\u4F1A\u8D77\u6548\u679C\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u5B83\u7684 plugin</strong></li></ul><p><img src="`+u+'" alt="\u56FE\u7247"></p><h3 id="\u5355\u72EC\u7684-postcss-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u7684-postcss-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5355\u72EC\u7684 postcss \u914D\u7F6E\u6587\u4EF6</h3><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u914D\u7F6E\u4FE1\u606F\u653E\u5230<strong>\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6</strong>\u4E2D\u8FDB\u884C\u7BA1\u7406\uFF1A</p><ul><li>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>postcss.config.js</code></li></ul><p><img src="'+g+`" alt="\u56FE\u7247"></p><h3 id="postcss-preset-env" tabindex="-1"><a class="header-anchor" href="#postcss-preset-env" aria-hidden="true">#</a> postcss-preset-env</h3><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5728\u914D\u7F6E postcss-loader \u65F6\uFF0C\u6211\u4EEC\u914D\u7F6E\u63D2\u4EF6\u5E76\u4E0D\u9700\u8981\u4F7F\u7528 autoprefixer</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u63D2\u4EF6\uFF1A<strong><code>postcss-preset-env</code></strong></p><ul><li><code>postcss-preset-env</code> \u4E5F\u662F\u4E00\u4E2A postcss \u7684\u63D2\u4EF6\uFF1B</li><li>\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5C06\u4E00\u4E9B\u73B0\u4EE3\u7684CSS\u7279\u6027\uFF0C\u8F6C\u6210\u5927\u591A\u6570\u6D4F\u89C8\u5668\u8BA4\u8BC6\u7684CSS\uFF0C\u5E76\u4E14\u4F1A\u6839\u636E\u76EE\u6807\u6D4F\u89C8\u5668\u6216\u8005\u8FD0\u884C\u65F6\u73AF \u5883\u6DFB\u52A0\u6240\u9700\u7684polyfill\uFF1B</li><li>\u4E5F\u5305\u62EC\u4F1A\u81EA\u52A8\u5E2E\u52A9\u6211\u4EEC\u6DFB\u52A0 autoprefixer\uFF08\u6240\u4EE5\u76F8\u5F53\u4E8E\u5DF2\u7ECF\u5185\u7F6E\u4E86autoprefixer\uFF09\uFF1B</li></ul><p>\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u5B89\u88C5postcss-preset-env\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\uFF0C\u6211\u4EEC\u76F4\u63A5\u4FEE\u6539\u6389\u4E4B\u524D\u7684 autoprefixer \u5373\u53EF <img src="`+h+'" alt="\u56FE\u7247"></p><p>\u6CE8\u610F\uFF1A\u6211\u4EEC\u5728\u4F7F\u7528\u67D0\u4E9Bpostcss\u63D2\u4EF6\u65F6\uFF0C<code>postcss.config.js</code>\u6587\u4EF6 \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u5B57\u7B26\u4E32 <img src="'+m+'" alt="\u56FE\u7247"></p><h3 id="css-loader\u7684-importloaders-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#css-loader\u7684-importloaders-\u5C5E\u6027" aria-hidden="true">#</a> css-loader\u7684 importLoaders \u5C5E\u6027</h3><p><img src="'+b+'" alt="\u56FE\u7247"></p><h2 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h2><p>\u6BD4\u8F83\u5E38\u89C1\u7684\u4F7F\u7528\u56FE\u7247\u7684\u65B9\u5F0F\u662F\u4E24\u79CD\uFF1A</p><ul><li><strong>img \u5143\u7D20</strong>\uFF0C\u8BBE\u7F6E src \u5C5E\u6027\uFF1B</li><li><strong>\u5176\u4ED6\u5143\u7D20</strong>\uFF08\u6BD4\u5982div\uFF09\uFF0C\u8BBE\u7F6Ebackground-image\u7684css\u5C5E\u6027</li></ul><p><img src="'+f+`" alt="\u56FE\u7247"></p><p>\u8981\u5904\u7406 jpg\u3001png \u7B49\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u4E5F\u9700\u8981\u6709\u5BF9\u5E94\u7684loader\uFF1A<code>file-loader</code></p><ul><li>file-loader \u7684\u4F5C\u7528\u5C31\u662F\u5E2E\u52A9\u6211\u4EEC\u5904\u7406 <strong>import/require()\u65B9\u5F0F</strong>\u5F15\u5165\u7684\u4E00\u4E2A\u6587\u4EF6\u8D44\u6E90\uFF0C\u5E76\u4E14\u4F1A\u5C06\u5B83\u653E\u5230\u6211\u4EEC<strong>\u8F93\u51FA\u7684\u6587\u4EF6\u5939</strong>\u4E2D\uFF1B</li><li>\u5F85\u4F1A\u513F\u603B\u7ED3\u5982\u4F55\u4FEE\u6539\u5B83\u7684\u540D\u5B57\u548C\u6240\u5728\u6587\u4EF6\u5939\uFF1B</li></ul><p>\u5B89\u88C5 file-loader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> file-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u5904\u7406\u56FE\u7247\u7684Rule\uFF1A <img src="`+v+'" alt="\u56FE\u7247"></p><h2 id="\u6587\u4EF6\u7684\u540D\u79F0\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u7684\u540D\u79F0\u89C4\u5219" aria-hidden="true">#</a> \u6587\u4EF6\u7684\u540D\u79F0\u89C4\u5219</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u5904\u7406\u540E\u7684 <strong>\u6587\u4EF6\u540D\u79F0</strong> \u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u663E\u793A\uFF1A</p><ul><li>\u6BD4\u5982\u4FDD\u7559\u539F\u6765\u7684 <strong>\u6587\u4EF6\u540D\u3001\u6269\u5C55\u540D</strong>\uFF0C\u540C\u65F6\u4E3A\u4E86\u9632\u6B62\u91CD\u590D\uFF0C\u5305\u542B\u4E00\u4E2A <strong>hash \u503C</strong>\u7B49\uFF1B</li></ul><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528PlaceHolders\u6765\u5B8C\u6210\uFF0Cwebpack\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u5927\u91CF\u7684PlaceHolders\u6765\u663E\u793A\u4E0D\u540C\u7684\u5185\u5BB9\uFF1A</p>',55),I={href:"https://webpack.js.org/loaders/file-loader/#placeholders",target:"_blank",rel:"noopener noreferrer"},L=i("https://webpack.js.org/loaders/file-loader/#placeholders"),R=s("li",null,"\u53EF\u4EE5\u5728\u6587\u6863\u4E2D\u67E5\u9605\u81EA\u5DF1\u9700\u8981\u7684 placeholder\uFF1B",-1),H=e('<p>\u8FD9\u91CC\u7ED9\u51E0\u4E2A\u6700\u5E38\u7528\u7684placeholder <img src="'+_+'" alt="\u56FE\u7247"></p><h3 id="\u8BBE\u7F6E\u6587\u4EF6\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6587\u4EF6\u540D\u79F0" aria-hidden="true">#</a> \u8BBE\u7F6E\u6587\u4EF6\u540D\u79F0</h3><p>\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u7684\u683C\u5F0F\u7F16\u5199\uFF1A</p><ul><li>\u8FD9\u4E2A\u4E5F\u662Fvue\u7684\u5199\u6CD5\uFF1B</li></ul><p><img src="'+x+'" alt="\u56FE\u7247"></p><h3 id="\u8BBE\u7F6E\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84" aria-hidden="true">#</a> \u8BBE\u7F6E\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</h3><p>\u5F53\u7136\uFF0C\u521A\u624D\u901A\u8FC7 <code>img/</code> \u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u6587\u4EF6\u5939\uFF0C\u8FD9\u4E2A\u4E5F\u662F vue\u3001react\u811A\u624B\u67B6\u4E2D\u5E38\u89C1\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF1A</p><ul><li>\u5176\u5B9E\u6309\u7167\u8FD9\u79CD\u8BBE\u7F6E\u65B9\u5F0F\u5C31\u53EF\u4EE5\u4E86\uFF1B</li><li>\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 <strong>outputPath</strong> \u6765\u8BBE\u7F6E\u8F93\u51FA\u7684\u6587\u4EF6\u5939\uFF1B</li></ul><p><img src="'+k+`" alt="\u56FE\u7247"></p><h2 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h2><p>url-loader\u548Cfile-loader\u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\u76F8\u4F3C\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u5C06\u8F83\u5C0F\u7684\u6587\u4EF6\uFF0C\u8F6C\u6210 <strong>base64\u7684URI</strong></p><p>\u5B89\u88C5 url-loader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> url-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+y+'" alt="\u56FE\u7247"></p><p>\u663E\u793A\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u5E76\u4E14\u56FE\u7247\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\uFF1B</p><p>\u4F46\u662F\u5728dist\u6587\u4EF6\u5939\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u770B\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A</p><ul><li>\u8FD9\u662F\u56E0\u4E3A\u6211\u7684\u4E24\u5F20\u56FE\u7247\u7684\u5927\u5C0F\u5206\u522B\u662F38kb\u548C295kb\uFF1B</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B url-loader \u4F1A\u5C06\u6240\u6709\u7684\u56FE\u7247\u6587\u4EF6\u8F6C\u6210base64\u7F16\u7801</li></ul><h3 id="url-loader-\u7684-limit" tabindex="-1"><a class="header-anchor" href="#url-loader-\u7684-limit" aria-hidden="true">#</a> url-loader \u7684 limit</h3><p>\u4F46\u662F\u5F00\u53D1\u4E2D\u6211\u4EEC\u5F80\u5F80\u662F<strong>\u5C0F\u7684\u56FE\u7247\u9700\u8981\u8F6C\u6362</strong>\uFF0C<strong>\u4F46\u662F\u5927\u7684\u56FE\u7247\u76F4\u63A5\u4F7F\u7528\u56FE\u7247\u5373\u53EF</strong></p><ul><li>\u8FD9\u662F\u56E0\u4E3A<strong>\u5C0F\u7684\u56FE\u7247\u8F6C\u6362base64\u4E4B\u540E</strong>\u53EF\u4EE5<strong>\u548C\u9875\u9762\u4E00\u8D77\u88AB\u8BF7\u6C42\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8BF7\u6C42\u8FC7\u7A0B\uFF1B</strong></li><li>\u800C<strong>\u5927\u7684\u56FE\u7247\u4E5F\u8FDB\u884C\u8F6C\u6362</strong>\uFF0C\u53CD\u800C\u4F1A<strong>\u5F71\u54CD\u9875\u9762\u7684\u8BF7\u6C42\u901F\u5EA6</strong></li></ul><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u5982\u4F55\u53EF\u4EE5\u9650\u5236\u54EA\u4E9B\u5927\u5C0F\u7684\u56FE\u7247\u8F6C\u6362\u548C\u4E0D\u8F6C\u6362\u5462\uFF1F</p><ul><li>url-loader\u6709\u4E00\u4E2Aoptions\u5C5E\u6027 <strong>limit</strong>\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BBE\u7F6E\u8F6C\u6362\u7684\u9650\u5236\uFF1B</li><li>\u4E0B\u9762\u7684\u4EE3\u780138kb (<strong>&lt; 100kb</strong>)\u7684\u56FE\u7247\u4F1A\u8FDB\u884C base64 \u7F16\u7801\uFF0C\u800C295kb\u7684\u4E0D\u4F1A <img src="'+B+'" alt="\u56FE\u7247"></li></ul><h2 id="asset-module-type-\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#asset-module-type-\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> asset module type \u7684\u4ECB\u7ECD</h2><p>\u5F53\u524D\u4F7F\u7528\u7684webpack\u7248\u672C\u662Fwebpack5\uFF1A</p><ul><li>\u5728 webpack5\u4E4B\u524D\uFF0C\u52A0\u8F7D\u8FD9\u4E9B\u8D44\u6E90\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4E00\u4E9B loader\uFF0C\u6BD4\u5982raw-loader \u3001url-loader\u3001file-loader\uFF1B</li><li>\u5728 webpack5\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8D44\u6E90\u6A21\u5757\u7C7B\u578B **\uFF08asset module type\uFF09**\u6765\u66FF\u4EE3\u4E0A\u9762\u7684\u8FD9\u4E9B loader</li></ul><p><strong>\u8D44\u6E90\u6A21\u5757\u7C7B\u578B(asset module type)</strong>\uFF0C\u901A\u8FC7\u6DFB\u52A0 4 \u79CD\u65B0\u7684\u6A21\u5757\u7C7B\u578B\uFF0C\u6765\u66FF\u6362\u6240\u6709\u8FD9\u4E9B loader\uFF1A <img src="'+S+'" alt="\u56FE\u7247"></p><h3 id="asset-module-type\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#asset-module-type\u7684\u4F7F\u7528" aria-hidden="true">#</a> asset module type\u7684\u4F7F\u7528</h3><p>\u6BD4\u5982\u52A0\u8F7D\u56FE\u7247\uFF0C\u4E4B\u524D\u4F7F\u7528\u7684\u662F file-loader \u6216\u8005 url-loader , \u4F46\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F <img src="'+w+'" alt="\u56FE\u7247"></p><p>\u4F46\u662F\uFF0C\u5982\u4F55\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6587\u4EF6\u7684<strong>\u8F93\u51FA\u8DEF\u5F84</strong>\u548C<strong>\u6587\u4EF6\u540D</strong>\u5462\uFF1F</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u4FEE\u6539 output \u4E2D\uFF0C\u6DFB\u52A0 <code>assetModuleFilename</code> \u5C5E\u6027\uFF1B <img src="'+C+'" alt="\u56FE\u7247"></li></ul><p>\u901A\u5E38\u4E0D\u7528\u8FD9\u79CD\u65B9\u6CD5, \u56E0\u4E3A\u5728\u8FD9\u91CC\u8BBE\u7F6E\u7684\u8BDD \u6240\u6709 asset module type \u90FD\u4F1A\u9075\u5FAA\u8FD9\u4E2A\u89C4\u5219, \u6240\u4EE5\u4E0D\u5408\u7406</p><ul><li><strong>\u65B9\u5F0F\u4E8C\uFF1A</strong> \u5728 Rule \u4E2D\uFF0C\u6DFB\u52A0\u4E00\u4E2A <code>generator</code> \u5C5E\u6027\uFF0C\u5E76\u4E14\u8BBE\u7F6E <code>filename</code><img src="'+P+'" alt="\u56FE\u7247"></li></ul><h3 id="url-loader\u7684-limit-\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#url-loader\u7684-limit-\u6548\u679C" aria-hidden="true">#</a> url-loader\u7684 limit \u6548\u679C</h3><p>\u6211\u4EEC\u9700\u8981\u4E24\u4E2A\u6B65\u9AA4\u6765\u5B9E\u73B0\uFF1A</p><ul><li>\u6B65\u9AA4\u4E00\uFF1A\u5C06 type \u4FEE\u6539\u4E3A asset\uFF1B</li><li>\u6B65\u9AA4\u4E8C\uFF1A\u6DFB\u52A0\u4E00\u4E2A <code>parser</code> \u5C5E\u6027\uFF0C\u5E76\u4E14\u5236\u5B9A <code>dataUrl</code> \u7684\u6761\u4EF6\uFF0C\u6DFB\u52A0 <code>maxSize</code> \u5C5E\u6027</li></ul><p><img src="'+D+'" alt="\u56FE\u7247"></p><h2 id="\u52A0\u8F7D\u5B57\u4F53\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u5B57\u4F53\u6587\u4EF6" aria-hidden="true">#</a> \u52A0\u8F7D\u5B57\u4F53\u6587\u4EF6</h2><p>\u5982\u679C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u67D0\u4E9B\u7279\u6B8A\u7684\u5B57\u4F53\u6216\u8005\u5B57\u4F53\u56FE\u6807\uFF0C\u90A3\u4E48\u6211\u4EEC\u4F1A\u5F15\u5165\u5F88\u591A\u5B57\u4F53\u76F8\u5173\u7684\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u7684\u5904\u7406\u4E5F\u662F\u4E00\u6837 \u7684</p><p>\u9996\u5148\uFF0C\u4ECE\u963F\u91CC\u56FE\u6807\u5E93\u4E2D\u4E0B\u8F7D\u4E86\u51E0\u4E2A\u5B57\u4F53\u56FE\u6807\uFF1A <img src="'+j+'" alt="\u56FE\u7247"></p><p>\u5728 component \u4E2D\u5F15\u5165\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E00\u4E2Ai\u5143\u7D20\u7528\u4E8E\u663E\u793A\u5B57\u4F53\u56FE\u6807 <img src="'+N+'" alt="\u56FE\u7247"></p><h3 id="\u5B57\u4F53\u7684\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u7684\u6253\u5305" aria-hidden="true">#</a> \u5B57\u4F53\u7684\u6253\u5305</h3><p>\u8FD9\u4E2A\u65F6\u5019\u6253\u5305\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u6B63\u786E\u7684\u5904\u7406<strong>eot\u3001ttf\u3001woff</strong>\u7B49\u6587\u4EF6\uFF1A</p><ul><li>\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 <code>file-loader</code> \u6765\u5904\u7406\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u76F4\u63A5\u4F7F\u7528webpack5\u7684\u8D44\u6E90\u6A21\u5757\u7C7B\u578B(asset module type)\u6765\u5904\u7406</li></ul><p><img src="'+V+'" alt="\u56FE\u7247"></p>',44);function U(q,z){const a=l("ExternalLinkIcon");return o(),n(p,null,[F,s("ul",null,[s("li",null,[s("a",I,[L,t(a)])]),R]),H],64)}var M=r(E,[["render",U],["__file","start2.html.vue"]]);export{M as default};