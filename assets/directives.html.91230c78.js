import{_ as s,d as a}from"./app.fcb85f29.js";var r="/myBlog-vp/assets/focus.c048d51b.png",e="/myBlog-vp/assets/focus2.87804503.png",i="/myBlog-vp/assets/focus3.1ce105c7.png",t="/myBlog-vp/assets/directiveLife.e51f4a72.png",n="/myBlog-vp/assets/b.10a88243.png",l="/myBlog-vp/assets/dp.11d2ab43.png",p="/myBlog-vp/assets/dIndex.88bb8c54.png",o="/myBlog-vp/assets/fd.50bed469.png",d="/myBlog-vp/assets/md.c39a0159.png",c="/myBlog-vp/assets/fd3.c8b33947.png",g="/myBlog-vp/assets/tfd.0095303f.png";const m={},h=a('<h1 id="\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4</h1><ul><li>\u5728 Vue \u4E2D, <strong>\u4EE3\u7801\u7684\u590D\u7528\u548C\u62BD\u8C61\u4E3B\u8981\u8FD8\u662F\u901A\u8FC7\u7EC4\u4EF6</strong></li><li>\u901A\u5E38\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B, \u9700\u8981\u5BF9 <strong>DOM \u5143\u7D20\u8FDB\u884C\u5E95\u5C42\u7684\u64CD\u4F5C</strong>, \u8FD9\u4E2A\u65F6\u5019\u4F1A\u7528\u5230<strong>\u81EA\u5B9A\u4E49\u6307\u4EE4</strong></li></ul><p>\u81EA\u5B9A\u4E49\u6307\u4EE4\u5206\u4E3A</p><ul><li>\u81EA\u5B9A\u4E49\u5C40\u90E8\u6307\u4EE4: \u7EC4\u4EF6\u4E2D\u901A\u8FC7 <strong>directives \u9009\u9879</strong>, \u53EA\u6709\u5728\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528</li><li>\u81EA\u5B9A\u4E49\u5168\u5C40\u6307\u4EE4: app\u7684 <strong>directives \u65B9\u6CD5</strong>, \u53EF\u4EE5\u5728\u4EFB\u610F\u7EC4\u4EF6\u4E2D\u88AB\u4F7F\u7528</li></ul><p>\u5B9E\u73B0\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u5B9E\u4F8B: <strong>\u8BA9\u8F93\u5165\u6846\u6302\u8F7D\u5B8C\u6210\u540E\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</strong></p><ul><li><ol><li>\u9ED8\u8BA4\u5B9E\u73B0</li></ol></li><li><ol start="2"><li>\u81EA\u5B9A\u4E49\u4E00\u4E2A v-focus <strong>\u5C40\u90E8</strong>\u6307\u4EE4</li></ol></li><li><ol start="3"><li>\u81EA\u5B9A\u4E49\u4E00\u4E2A v-focus <strong>\u5168\u5C40</strong>\u6307\u4EE4 <img src="'+r+'" alt="\u56FE\u7247"><img src="'+e+'" alt="\u56FE\u7247"><img src="'+i+'" alt="\u56FE\u7247"></li></ol></li></ul><h4 id="\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u6307\u4EE4\u7684\u751F\u547D\u5468\u671F</h4><p><img src="'+t+'" alt="\u56FE\u7247"></p><h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><p>\u628A bindings \u6253\u51FA\u6765\u770B\u770B: <img src="'+n+'" alt="\u56FE\u7247"><img src="'+l+`" alt="\u56FE\u7247"></p><h4 id="\u81EA\u5B9A\u4E49\u6307\u4EE4\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4\u7EC3\u4E60" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4\u7EC3\u4E60</h4><p>\u6848\u4F8B: \u65F6\u95F4\u6233\u7684\u663E\u793A\u9700\u6C42</p><ul><li>\u5728\u5F00\u53D1\u4E2D, \u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u670D\u52A1\u5668\u83B7\u53D6\u5230\u7684\u662F\u65F6\u95F4\u6233</li><li>\u901A\u8FC7\u81EA\u5B9A\u4E49\u6307\u4EE4\u6765\u5B8C\u6210\u9700\u6C42</li></ul><h5 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>directives
|-- index.js \u5165\u53E3\u6587\u4EF6
|-- format-time.js 
|-- ....
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>index.js</p><p><img src="`+p+'" alt="\u56FE\u7247"></p><p>format-time.js</p><p><img src="'+o+'" alt="\u56FE\u7247"></p><p>main.js</p><p><img src="'+d+'" alt="\u56FE\u7247"></p><h5 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h5><p>format-time.js <img src="'+c+'" alt="\u56FE\u7247"> \u7EC4\u4EF6\u5185\u4F7F\u7528: <img src="'+g+'" alt="\u56FE\u7247"></p>',23);function v(_,u){return h}var b=s(m,[["render",v],["__file","directives.html.vue"]]);export{b as default};