import{_ as a,d as r}from"./app.fcb85f29.js";var e="/myBlog-vp/assets/pulldown1.d710cb0c.png",i="/myBlog-vp/assets/stoppulldown.bfe9d4f6.png",s="/myBlog-vp/assets/rb1.50fea59e.png",l="/myBlog-vp/assets/color1.53a51521.png",o="/myBlog-vp/assets/color2.89ee91ca.png",t="/myBlog-vp/assets/color3.bab777dd.png",n="/myBlog-vp/assets/color5.efaa11a7.png",d="/myBlog-vp/assets/color6.83a0dac5.png",h="/myBlog-vp/assets/color7.5dc1790f.png",p="/myBlog-vp/assets/color8.2c76a4fc.png",c="/myBlog-vp/assets/bianyi1.bd449c9e.png";const g={},u=r('<h1 id="\u9875\u9762\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4E8B\u4EF6" aria-hidden="true">#</a> \u9875\u9762\u4E8B\u4EF6</h1><h2 id="\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u4E0B\u62C9\u5237\u65B0</h2><p>\u4E0B\u62C9\u5237\u65B0 -&gt; \u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u6570\u636E</p><h3 id="\u542F\u7528\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u542F\u7528\u4E0B\u62C9\u5237\u65B0</h3><ol><li>\u5168\u5C40\u5F00\u542F(\u4E0D\u63A8\u8350)</li></ol><ul><li>\u5728 app.json \u7684 window \u8282\u70B9\u4E2D\uFF0C\u5C06 enablePullDownRefresh \u8BBE\u7F6E\u4E3A true</li></ul><ol start="2"><li>\u5C40\u90E8\u5F00\u542F(\u66F4\u63A8\u8350)</li></ol><ul><li>\u5728\u9875\u9762\u7684 .json \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06 enablePullDownRefresh \u8BBE\u7F6E\u4E3A true</li></ul><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u63A8\u8350\u4F7F\u7528\u7B2C 2 \u79CD\u65B9\u5F0F\uFF0C<strong>\u4E3A\u9700\u8981\u7684\u9875\u9762\u5355\u72EC\u5F00\u542F\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C</strong></p><h3 id="\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u914D\u7F6E</h3><p>\u5728\u5168\u5C40\u6216\u9875\u9762\u7684 .json \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7 backgroundColor \u548C backgroundTextStyle \u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3 \u7684\u6837\u5F0F\uFF0C\u5176\u4E2D\uFF1A</p><ul><li><strong>backgroundColor</strong> \u7528\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0<strong>\u7A97\u53E3\u7684\u80CC\u666F\u989C\u8272</strong>\uFF0C\u4EC5\u652F\u630116 \u8FDB\u5236\u7684\u989C\u8272\u503C</li><li><strong>backgroundTextStyle</strong> \u7528\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0 <strong>loading \u7684\u6837\u5F0F</strong>\uFF0C\u4EC5\u652F\u6301 dark \u548C light</li></ul><h3 id="\u76D1\u542C\u9875\u9762\u7684\u5462\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u9875\u9762\u7684\u5462\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6" aria-hidden="true">#</a> \u76D1\u542C\u9875\u9762\u7684\u5462\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6</h3><p>\u5728\u9875\u9762\u7684 .js \u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <strong>onPullDownRefresh()</strong> \u51FD\u6570\u5373\u53EF\u76D1\u542C\u5F53\u524D\u9875\u9762\u7684\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6</p><p>\u4F8B\u5982\uFF0C\u5728\u9875\u9762\u7684 wxml \u4E2D\u6709\u5982\u4E0B\u7684 UI \u7ED3\u6784\uFF0C\u70B9\u51FB\u6309\u94AE\u53EF\u4EE5\u8BA9 count \u503C\u81EA\u589E +1</p><p><img src="'+e+'" alt="\u56FE\u7247"></p><h3 id="\u505C\u6B62\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u505C\u6B62\u4E0B\u62C9\u5237\u65B0</h3><p>\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C<strong>\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931</strong>\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u3002\u6B64\u65F6\uFF0C\u8C03\u7528 <strong>wx.stopPullDownRefresh()</strong> \u53EF\u4EE5\u505C\u6B62\u5F53\u524D\u9875\u9762\u7684\u4E0B\u62C9\u5237\u65B0</p><p><img src="'+i+'" alt="\u56FE\u7247"></p><h2 id="\u4E0A\u62C9\u89E6\u5E95" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62C9\u89E6\u5E95" aria-hidden="true">#</a> \u4E0A\u62C9\u89E6\u5E95</h2><p>\u6C99\u62C9\u89E6\u5E95 -&gt; \u52A0\u8F7D\u66F4\u591A\u6570\u636E(\u5206\u9875\u529F\u80FD)</p><h3 id="\u76D1\u542C\u9875\u9762\u7684\u4E0A\u62C9\u89E6\u5E95" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u9875\u9762\u7684\u4E0A\u62C9\u89E6\u5E95" aria-hidden="true">#</a> \u76D1\u542C\u9875\u9762\u7684\u4E0A\u62C9\u89E6\u5E95</h3><p>\u5728\u9875\u9762\u7684 .js \u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <strong>onReachBottom() \u51FD\u6570</strong>\u5373\u53EF\u76D1\u542C\u5F53\u524D\u9875\u9762\u7684\u4E0A\u62C9\u89E6\u5E95\u4E8B\u4EF6</p><p><img src="'+s+'" alt="\u56FE\u7247"></p><h3 id="\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u4E3E\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u4E3E\u4F8B</h3><p>\u4E0A\u62C9\u89E6\u5E95\u8DDD\u79BB\u6307\u7684\u662F\u89E6\u53D1\u4E0A\u62C9\u89E6\u5E95\u4E8B\u4EF6\u65F6\uFF0C\u6EDA\u52A8\u6761\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB</p><p>\u53EF\u4EE5\u5728\u5168\u5C40\u6216\u9875\u9762\u7684 .json \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <strong>onReachBottomDistance \u5C5E\u6027</strong>\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB</p><p>\u5C0F\u7A0B\u5E8F\u9ED8\u8BA4\u7684\u89E6\u5E95\u8DDD\u79BB\u662F <strong>50px</strong>\uFF0C\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u4FEE\u6539\u8FD9\u4E2A\u9ED8\u8BA4\u503C</p><h3 id="\u4E0A\u62C9\u89E6\u5E95\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62C9\u89E6\u5E95\u6848\u4F8B" aria-hidden="true">#</a> \u4E0A\u62C9\u89E6\u5E95\u6848\u4F8B</h3><ul><li>\u5B9A\u4E49\u83B7\u53D6\u968F\u673A\u989C\u8272\u7684\u65B9\u6CD5</li><li>\u5728\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u53D6\u521D\u59CB\u6570\u636E</li><li>\u6E32\u67D3 UI \u7ED3\u6784\u5E76\u7F8E\u5316\u9875\u9762\u6548\u679C</li><li><strong>\u5728\u4E0A\u62C9\u89E6\u5E95\u65F6\u8C03\u7528\u83B7\u53D6\u968F\u673A\u989C\u8272\u7684\u65B9\u6CD5</strong></li><li><strong>\u6DFB\u52A0 loading \u63D0\u793A\u6548\u679C</strong></li><li><strong>\u5BF9\u4E0A\u62C9\u89E6\u5E95\u8FDB\u884C\u8282\u6D41\u5904\u7406</strong></li></ul><h3 id="_1-\u5B9A\u4E49\u83B7\u53D6\u968F\u673A\u989C\u8272\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9A\u4E49\u83B7\u53D6\u968F\u673A\u989C\u8272\u7684\u65B9\u6CD5" aria-hidden="true">#</a> (1) \u5B9A\u4E49\u83B7\u53D6\u968F\u673A\u989C\u8272\u7684\u65B9\u6CD5</h3><p><img src="'+l+'" alt="\u56FE\u7247"></p><h3 id="_2-\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> (2) \u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u53D6\u6570\u636E</h3><p><img src="'+o+'" alt="\u56FE\u7247"></p><h3 id="_3-\u6E32\u67D3\u5230\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_3-\u6E32\u67D3\u5230\u9875\u9762" aria-hidden="true">#</a> (3)\u6E32\u67D3\u5230\u9875\u9762</h3><p><img src="'+t+'" alt="\u56FE\u7247"></p><h3 id="_4-\u4E0A\u5566\u89E6\u5E95\u83B7\u53D6\u968F\u673A\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0A\u5566\u89E6\u5E95\u83B7\u53D6\u968F\u673A\u989C\u8272" aria-hidden="true">#</a> (4)\u4E0A\u5566\u89E6\u5E95\u83B7\u53D6\u968F\u673A\u989C\u8272</h3><p><img src="'+n+'" alt="\u56FE\u7247"></p><h3 id="_5-\u6DFB\u52A0-loading-\u63D0\u793A\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_5-\u6DFB\u52A0-loading-\u63D0\u793A\u6548\u679C" aria-hidden="true">#</a> (5) \u6DFB\u52A0 loading \u63D0\u793A\u6548\u679C</h3><p>[\u5B98\u7F51][https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html]</p><p><img src="'+d+'" alt="\u56FE\u7247"></p><h3 id="_6-\u8282\u6D41\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_6-\u8282\u6D41\u5904\u7406" aria-hidden="true">#</a> (6) \u8282\u6D41\u5904\u7406</h3><ol><li>\u5728 data \u4E2D\u5B9A\u4E49 isloading \u8282\u6D41\u9600</li></ol><ul><li>false \u8868\u793A\u5F53\u524D\u6CA1\u6709\u8FDB\u884C\u4EFB\u4F55\u6570\u636E\u8BF7\u6C42</li><li>true \u8868\u793A\u5F53\u524D\u6B63\u5728\u8FDB\u884C\u6570\u636E\u8BF7\u6C42</li></ul><ol start="2"><li>\u5728 getColors() \u65B9\u6CD5\u4E2D\u4FEE\u6539 isloading \u8282\u6D41\u9600\u7684\u503C</li></ol><ul><li>\u5728\u521A\u8C03\u7528 getColors \u65F6\u5C06\u8282\u6D41\u9600\u8BBE\u7F6E true</li><li>\u5728\u7F51\u7EDC\u8BF7\u6C42\u7684 complete \u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u5C06\u8282\u6D41\u9600\u91CD\u7F6E\u4E3A false</li></ul><ol start="3"><li>\u5728 onReachBottom \u4E2D\u5224\u65AD\u8282\u6D41\u9600\u7684\u503C\uFF0C\u4ECE\u800C\u5BF9\u6570\u636E\u8BF7\u6C42\u8FDB\u884C\u8282\u6D41\u63A7\u5236</li></ol><ul><li>\u5982\u679C\u8282\u6D41\u9600\u7684\u503C\u4E3A true\uFF0C\u5219\u963B\u6B62\u5F53\u524D\u8BF7\u6C42</li><li>\u5982\u679C\u8282\u6D41\u9600\u7684\u503C\u4E3A false\uFF0C\u5219\u53D1\u8D77\u6570\u636E\u8BF7\u6C42</li></ul><p><img src="'+h+'" alt="\u56FE\u7247"><img src="'+p+'" alt="\u56FE\u7247"></p><h2 id="\u81EA\u5B9A\u4E49\u7F16\u8BD1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7F16\u8BD1\u6A21\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7F16\u8BD1\u6A21\u5F0F</h2><p><img src="'+c+'" alt="\u56FE\u7247"></p>',51);function m(_,f){return u}var x=a(g,[["render",m],["__file","yemianshijian.html.vue"]]);export{x as default};
