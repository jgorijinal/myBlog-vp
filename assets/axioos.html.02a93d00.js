import{_ as s,d as i}from"./app.fcb85f29.js";var e="/myBlog-vp/assets/r.84c7b4f7.png",r="/myBlog-vp/assets/axios1.4b2aa035.png",t="/myBlog-vp/assets/axios2.42c20bcd.png",l="/myBlog-vp/assets/axios3.eac28878.png",p="/myBlog-vp/assets/mem.52453592.png",o="/myBlog-vp/assets/aaxx.0a4966f5.png",m="/myBlog-vp/assets/all.5e086c6d.png",d="/myBlog-vp/assets/ai.7e221d11.png",c="/myBlog-vp/assets/envnode.05a9f942.png",n="/myBlog-vp/assets/pe1.37411a7f.png",h="/myBlog-vp/assets/hhhh.d88d272b.png",g="/myBlog-vp/assets/ed.f9dd0edc.png",_="/myBlog-vp/assets/ep.0e63d488.png",a="/myBlog-vp/assets/et.b6877f8c.png",v="/myBlog-vp/assets/999.1a4e40cf.png",x="/myBlog-vp/assets/oooo.257ac408.png",u="/myBlog-vp/assets/pe.d983d48e.png";const f={},y=i('<h1 id="axios\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#axios\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> axios\u7684\u57FA\u672C\u4F7F\u7528</h1><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>axios \u7684\u529F\u80FD\u7279\u70B9:</p><ul><li>\u5728\u6D4F\u89C8\u5668\u4E2D\u53D1\u9001 XMLHttpRequests \u8BF7\u6C42</li><li>\u5728 node.js \u4E2D\u53D1\u9001 http \u8BF7\u6C42</li><li>\u652F\u6301 Promise API</li><li>\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li><li>\u8F6C\u6362\u8BF7\u6C42\u548C\u54CD\u5E94\u6570\u636E</li><li>\u7B49\u7B49</li></ul><h3 id="\u8BF7\u6C42\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u5F0F" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u5F0F</h3><p><img src="'+e+'" alt="\u56FE\u7247"></p><p>\u7B80\u5355\u5B9E\u4F8B:</p><p>http://123.207.32.32:8000/home/multidata <img src="'+r+'" alt="\u56FE\u7247"><img src="'+t+'" alt="\u56FE\u7247"><img src="'+l+'" alt="\u56FE\u7247"></p><h3 id="\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9009\u9879</h3><p><img src="'+p+'" alt="\u56FE\u7247"><img src="'+o+'" alt="\u56FE\u7247"></p><h3 id="axios-all" tabindex="-1"><a class="header-anchor" href="#axios-all" aria-hidden="true">#</a> axios.all([])</h3><p><img src="'+m+'" alt="\u56FE\u7247"></p><h3 id="\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a> \u62E6\u622A\u5668</h3><p>axios \u7684\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u62E6\u622A\u5668\uFF1A\u62E6\u622A\u6BCF\u6B21\u8BF7\u6C42\u548C\u54CD\u5E94</p><ul><li>axios.interceptors.request.use(\u8BF7\u6C42\u6210\u529F\u62E6\u622A, \u8BF7\u6C42\u5931\u8D25\u62E6\u622A)</li><li>axios.interceptors.response.use(\u54CD\u5E94\u6210\u529F\u62E6\u622A, \u54CD\u5E94\u5931\u8D25\u62E6\u622A <img src="'+d+'" alt="\u56FE\u7247"></li></ul><h2 id="\u533A\u5206\u4E0D\u540C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u533A\u5206\u4E0D\u540C\u73AF\u5883" aria-hidden="true">#</a> \u533A\u5206\u4E0D\u540C\u73AF\u5883</h2><p>\u5728\u5F00\u53D1\u4E2D\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u73AF\u5883\u8BBE\u7F6E\u4E0D\u540C\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5E38\u89C1\u7684\u6709\u4E09\u79CD\u73AF\u5883\uFF1A</p><ul><li>\u5F00\u53D1\u73AF\u5883\uFF1Adevelopment\uFF1B</li><li>\u751F\u4EA7\u73AF\u5883\uFF1Aproduction\uFF1B</li><li>\u6D4B\u8BD5\u73AF\u5883\uFF1Atest\uFF1B</li></ul><p>\u5982\u4F55\u533A\u5206\u73AF\u5883\u53D8\u91CF\u5462\uFF1F\u5E38\u89C1\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u65B9\u5F0F\u4E00\uFF1A\u624B\u52A8\u4FEE\u6539\u4E0D\u540C\u7684\u53D8\u91CF\uFF1B</p></li><li><p>\u65B9\u5F0F\u4E8C(\u7528\u5F97\u6700\u591A)\uFF1A\u6839\u636E p<wbr>rocess.env.NODE_ENV \u7684\u503C\u8FDB\u884C\u533A\u5206\uFF1B <img src="'+c+'" alt="\u56FE\u7247"></p></li><li><p>\u65B9\u5F0F\u4E09(\u4E5F\u652F\u6301\u8FD9\u79CD\u529E\u6CD5)\uFF1A\u7F16\u5199\u4E0D\u540C\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u6587\u4EF6\uFF1B</p><p>\u6839\u76EE\u5F55\u4E0B: <img src="'+n+'" alt="\u56FE\u7247"><img src="'+h+'" alt="\u56FE\u7247"><img src="'+g+'" alt="\u56FE\u7247"><img src="'+_+'" alt="\u56FE\u7247"><img src="'+a+'" alt="\u56FE\u7247"><img src="'+v+'" alt="\u56FE\u7247"><img src="'+a+'" alt="\u56FE\u7247"><img src="'+x+'" alt="\u56FE\u7247"> \u6253\u51FA\u6765\u770B\u770B <img src="'+u+'" alt="\u56FE\u7247"></p></li></ul>',20);function B(b,N){return y}var E=s(f,[["render",B],["__file","axioos.html.vue"]]);export{E as default};
