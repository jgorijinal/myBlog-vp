import{_ as a,d as s}from"./app.fcb85f29.js";var e="/myBlog-vp/assets/async01.c035bc6c.png",r="/myBlog-vp/assets/async02.380e5baa.png",i="/myBlog-vp/assets/afan1.a721e940.png",t="/myBlog-vp/assets/afan2.133869f8.png",n="/myBlog-vp/assets/afan3.79224874.png",o="/myBlog-vp/assets/ayi1.1dee81fb.png",l="/myBlog-vp/assets/await001.2df1ea6e.png",c="/myBlog-vp/assets/qita55.ad6bb7d3.png",m="/myBlog-vp/assets/reject123.27271b50.png";const p={},h=s('<h1 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async - await</h1><h2 id="\u5F02\u6B65\u51FD\u6570-async-function" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570-async-function" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570 async function</h2><p>async \u5173\u952E\u5B57\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570</p><ul><li>async \u662F asynchronous \u5355\u8BCD\u7684\u7F29\u5199\uFF0C\u5F02\u6B65\u3001\u975E\u540C\u6B65\uFF1B</li><li>sync \u662F synchronous \u5355\u8BCD\u7684\u7F29\u5199\uFF0C\u540C\u6B65\u3001\u540C\u65F6</li></ul><p>async \u5F02\u6B65\u51FD\u6570\u53EF\u4EE5\u6709\u5F88\u591A\u4E2D\u5199\u6CD5 :</p><p><img src="'+e+'" alt="\u56FE\u7247"></p><h2 id="\u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u6D41\u7A0B</h2><p><em>\u5F02\u6B65\u51FD\u6570\u7684\u5185\u90E8\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u548C\u666E\u901A\u51FD\u6570\u662F\u4E00\u81F4\u7684 , \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E5F\u662F\u4F1A\u88AB<strong>\u540C\u6B65\u6267\u884C</strong></em><img src="'+r+'" alt="\u56FE\u7247"></p><h2 id="\u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B - \u8FD4\u56DE\u503C</h2><p><em>\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E00\u5B9A\u662F Promise</em></p><p><strong>\u5F02\u6B65\u51FD\u6570\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u548C\u666E\u901A\u51FD\u6570\u4F1A\u6709\u533A\u522B\uFF1A</strong></p><ul><li><strong>\u60C5\u51B5\u4E00\uFF1A</strong> \u5F02\u6B65\u51FD\u6570\u4E5F\u53EF\u4EE5\u6709\u8FD4\u56DE\u503C\uFF0C\u4F46\u662F\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u5305\u88F9\u5230 Promise.resolve \u4E2D\uFF1B</li><li><strong>\u60C5\u51B5\u4E8C\uFF1A</strong> \u5982\u679C\u6211\u4EEC\u7684\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F Promise\uFF0CPromise.resolve \u7684\u72B6\u6001\u4F1A\u7531 Promise \u51B3\u5B9A\uFF1B</li><li><strong>\u60C5\u51B5\u4E09\uFF1A</strong> \u5982\u679C\u6211\u4EEC\u7684\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\u5E76\u4E14\u5B9E\u73B0\u4E86 thenable\uFF0C\u90A3\u4E48\u4F1A\u7531\u5BF9\u8C61\u7684 then \u65B9\u6CD5\u6765\u51B3\u5B9A\uFF1B</li></ul><p><img src="'+i+'" alt="\u56FE\u7247"><img src="'+t+'" alt="\u56FE\u7247"><img src="'+n+'" alt="\u56FE\u7247"></p><h2 id="\u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B-\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B-\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u6B65\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u533A\u522B - \u5F02\u5E38</h2><ul><li>\u5982\u679C\u5728 async \u4E2D\u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u90A3\u4E48\u7A0B\u5E8F\u5B83\u5E76\u4E0D\u4F1A\u50CF\u666E\u901A\u51FD\u6570\u4E00\u6837\u62A5\u9519\uFF0C\u800C\u662F\u4F1A\u4F5C\u4E3A Promise \u7684 reject \u6765\u4F20\u9012 <img src="'+o+'" alt="\u56FE\u7247"></li></ul><h2 id="await-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#await-\u5173\u952E\u5B57" aria-hidden="true">#</a> await \u5173\u952E\u5B57</h2><p><em>async \u51FD\u6570\u53E6\u5916\u4E00\u4E2A\u7279\u6B8A\u4E4B\u5904\u5C31\u662F\u53EF\u4EE5\u5728\u5B83\u5185\u90E8\u4F7F\u7528 await \u5173\u952E\u5B57\uFF0C\u800C\u666E\u901A\u51FD\u6570\u4E2D\u662F\u4E0D\u53EF\u4EE5\u7684</em></p><p><strong>await \u5173\u952E\u5B57\u6709\u4EC0\u4E48\u7279\u70B9 ?</strong></p><ul><li><em>\u901A\u5E38\u4F7F\u7528 await \u662F\u540E\u9762\u4F1A\u8DDF\u4E0A\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u4F1A\u8FD4\u56DE\u4E00\u4E2A Promise</em></li><li><em>\u90A3\u4E48 await \u4F1A\u7B49\u5230Promise\u7684\u72B6\u6001\u53D8\u6210 fulfilled \u72B6\u6001\uFF0C\u4E4B\u540E\u7EE7\u7EED\u6267\u884C\u5F02\u6B65\u51FD\u6570</em></li></ul><p><img src="'+l+'" alt="\u56FE\u7247"></p><p>await \u540E\u9762\u8DDF\u4E0A\u5176\u4ED6\u7684\u503C :</p><ul><li>\u5982\u679C await \u540E\u9762\u662F\u4E00\u4E2A\u666E\u901A\u7684\u503C\uFF0C\u90A3\u4E48\u4F1A\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u503C\uFF1B</li><li>\u5982\u679C await \u540E\u9762\u662F\u4E00\u4E2A thenable \u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u4F1A\u6839\u636E\u5BF9\u8C61\u7684 then \u65B9\u6CD5\u8C03\u7528\u6765\u51B3\u5B9A\u540E\u7EED\u7684\u503C\uFF1B</li><li>\u5982\u679C await \u540E\u9762\u7684\u8868\u8FBE\u5F0F\uFF0C<em>\u8FD4\u56DE\u7684 Promise \u662F <strong>reject \u7684\u72B6\u6001</strong>\uFF0C\u90A3\u4E48\u4F1A<strong>\u5C06\u8FD9\u4E2A reject \u7ED3\u679C\u76F4\u63A5\u4F5C\u4E3A\u5F02\u6B65\u51FD\u6570\u7684 Promise \u7684 reject \u503C</strong></em></li></ul><p><img src="'+c+'" alt="\u56FE\u7247"><img src="'+m+'" alt="\u56FE\u7247"></p>',23);function g(d,_){return h}var u=a(p,[["render",g],["__file","asyncawait.html.vue"]]);export{u as default};
