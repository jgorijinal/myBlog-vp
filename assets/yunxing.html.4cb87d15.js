import{_ as e,d as o}from"./app.fcb85f29.js";var a="/myBlog-vp/assets/go1.02f56177.png",t="/myBlog-vp/assets/go2.1e8b28af.png",r="/myBlog-vp/assets/go3.95562ea2.png",s="/myBlog-vp/assets/ao1.e2031345.png",n="/myBlog-vp/assets/ao2.04fcd557.png";const c={},i=o('<h1 id="js\u7684\u8FD0\u884C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#js\u7684\u8FD0\u884C\u539F\u7406" aria-hidden="true">#</a> js\u7684\u8FD0\u884C\u539F\u7406</h1><h2 id="\u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61-go" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61-go" aria-hidden="true">#</a> \u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61 GO</h2><p>js\u5F15\u64CE\u5728<strong>\u6267\u884C\u4EE3\u7801\u4E4B\u524D</strong>, <strong>\u4F1A\u5728\u5806\u5185\u5B58\u91CC\u9762\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61 <code>(Global Object - GO)</code></strong></p><ul><li>\u8BE5\u5BF9\u8C61\u5728\u6240\u6709\u4F5C\u7528\u57DF(scope)\u90FD\u80FD\u8BBF\u95EE</li><li>\u91CC\u9762\u5305\u542B <code>Date, Array , String, Number, setTimeout, setInterval</code> \u7B49\u7B49</li><li>\u5176\u4E2D\u8FD8\u6709 window \u5C5E\u6027\u6307\u5411\u81EA\u5DF1</li></ul><p><img src="'+a+'" alt="\u56FE\u7247"></p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587-execution-contexts-ec" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587-execution-contexts-ec" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\uFF08 Execution Contexts - EC\uFF09</h2><p>js\u5F15\u64CE\u5185\u90E8\u6709\u4E00\u4E2A<strong>\u6267\u884C\u4E0A\u4E0B\u6587\u6808</strong><code>\uFF08Execution Context Stack\uFF0C\u7B80\u79F0ECS\uFF09</code>\uFF0C\u5B83\u662F\u7528\u4E8E<strong>\u6267\u884C\u4EE3\u7801\u7684\u8C03\u7528\u6808</strong></p><p>\u90A3\u4E48\u4E00\u5F00\u59CB\u4F1A\u6267\u884C\u8C01\u5462? \u6267\u884C\u7684\u662F <strong>\u5168\u5C40\u7684\u4EE3\u7801\u5757</strong></p><ul><li>\u5168\u5C40\u4EE3\u7801\u5757\u4E3A\u4E86\u6267\u884C\u4F1A\u521B\u5EFA\u4E00\u4E2A <strong>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</strong><code>(Global Execution Context)</code></li><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587(GEC) \u4F1A\u653E\u5165\u5230 \u6267\u884C\u4E0A\u4E0B\u6587(ECS)\u91CC\u9762</li></ul><p><code>GEC</code> \u88AB\u653E\u5165\u5230 <code>ECS</code> \u91CC\u9762\u5305\u542B\u4E24\u4E2A\u5185\u5BB9:</p><ol><li>\u7B2C\u4E00\u90E8\u5206 : \u5728\u4EE3\u7801\u6267\u884C\u524D, \u5728 parser \u8F6C\u6210 AST \u7684\u8FC7\u7A0B\u4E2D, \u4F1A\u5C06\u5168\u5C40\u5B9A\u4E49\u7684\u53D8\u91CF.\u51FD\u6570\u7B49\u52A0\u5165\u5230 <code>Global Object(GO)</code> \u91CC, <strong>\u4F46\u662F\u5E76\u4E0D\u4F1A\u8D4B\u503C</strong></li></ol><p>\u8FD9\u4E2A\u8FC7\u7A0B\u4E5F\u79F0\u4E4B\u4E3A <strong>\u53D8\u91CF\u63D0\u5347</strong> 2. \u7B2C\u4E8C\u90E8\u5206 \uFF1A\u5728\u4EE3\u7801\u6267\u884C\u4E2D\uFF0C\u5BF9\u53D8\u91CF\u8D4B\u503C\uFF0C\u6216\u8005\u6267\u884C\u5176\u4ED6\u7684\u51FD\u6570\uFF1B</p><h2 id="\u8BA4\u8BC6-vo-\u5BF9\u8C61-variable-object" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC6-vo-\u5BF9\u8C61-variable-object" aria-hidden="true">#</a> \u8BA4\u8BC6 VO \u5BF9\u8C61\uFF08Variable Object\uFF09</h2><p><strong>\u6BCF\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u90FD\u4F1A\u5173\u8054\u4E00\u4E2A <code>VO (Variable Object)</code></strong>, <strong>\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E</strong>\u90FD\u4F1A\u6DFB\u52A0\u5230\u8FD9\u4E2AVO\u5BF9\u8C61\u4E0A</p><p><strong>\u5F53\u5168\u5C40\u4EE3\u7801\u88AB\u6267\u884C\u7684\u65F6\u5019\uFF0C<code>VO</code> \u5C31\u662F <code>GO</code>\u5BF9\u8C61\u4E86</strong></p><h3 id="\u5168\u5C40\u4EE3\u7801\u6267\u884C\u524D" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4EE3\u7801\u6267\u884C\u524D" aria-hidden="true">#</a> \u5168\u5C40\u4EE3\u7801\u6267\u884C\u524D</h3><p><img src="'+t+'" alt="\u56FE\u7247"></p><h3 id="\u5168\u5C40\u4EE3\u7801\u6267\u884C\u540E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4EE3\u7801\u6267\u884C\u540E" aria-hidden="true">#</a> \u5168\u5C40\u4EE3\u7801\u6267\u884C\u540E</h3><p><img src="'+r+'" alt="\u56FE\u7247"></p><h2 id="\u51FD\u6570\u5982\u4F55\u88AB\u6267\u884C\u5462" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5982\u4F55\u88AB\u6267\u884C\u5462" aria-hidden="true">#</a> \u51FD\u6570\u5982\u4F55\u88AB\u6267\u884C\u5462\uFF1F</h2><p>\u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u6267\u884C\u5230\u4E00\u4E2A<strong>\u51FD\u6570</strong>\u65F6\uFF0C\u5C31\u4F1A\u6839\u636E\u51FD\u6570\u4F53\u521B\u5EFA\u4E00\u4E2A<strong>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</strong><code>\uFF08Functional Execution Context\uFF0C\u7B80\u79F0FEC\uFF09</code>\uFF0C \u5E76\u4E14\u538B\u5165\u5230 <code>EC Stack</code> \u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D</p><p>\u56E0\u4E3A\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u90FD\u4F1A\u5173\u8054\u4E00\u4E2A<code>VO</code>\uFF0C\u90A3\u4E48\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u5173\u8054\u7684<code>VO</code>\u662F\u4EC0\u4E48\u5462\uFF1F</p><ul><li>\u5F53\u8FDB\u5165\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A <code>AO</code> \u5BF9\u8C61<code>\uFF08Activation Object\uFF09</code>\uFF1B</li><li>\u8FD9\u4E2A AO \u5BF9\u8C61\u4F1A\u4F7F\u7528 <strong>arguments \u4F5C\u4E3A\u521D\u59CB\u5316</strong>\uFF0C\u5E76\u4E14\u521D\u59CB\u503C\u662F\u4F20\u5165\u7684\u53C2\u6570\uFF1B</li><li><strong>\u8FD9\u4E2A AO \u5BF9\u8C61\u4F1A\u4F5C\u4E3A\u6267\u884C\u4E0A\u4E0B\u6587\u7684 VO \u6765\u5B58\u653E\u53D8\u91CF\u7684\u521D\u59CB\u5316</strong>\uFF1B</li></ul><h3 id="\u51FD\u6570\u6267\u884C\u524D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6267\u884C\u524D" aria-hidden="true">#</a> \u51FD\u6570\u6267\u884C\u524D</h3><p><img src="'+s+'" alt="\u56FE\u7247"></p><h2 id="\u4F5C\u7528\u57DF\u63D0\u5347\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D0\u5347\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D0\u5347\u9762\u8BD5\u9898</h2><p><img src="'+n+'" alt="\u56FE\u7247"></p>',27);function d(l,h){return i}var p=e(c,[["render",d],["__file","yunxing.html.vue"]]);export{p as default};