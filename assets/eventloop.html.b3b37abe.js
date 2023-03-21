import{_ as e,d as i}from"./app.fcb85f29.js";var l="/myBlog-vp/assets/sjxh1.b84a622c.png",a="/myBlog-vp/assets/pmian1.c239c2a0.png",r="/myBlog-vp/assets/pmian2.a7740f64.png",t="/myBlog-vp/assets/pmian3.7e3190e3.png",s="/myBlog-vp/assets/pmian4.0f395b97.png",o="/myBlog-vp/assets/node01.979de68b.png",n="/myBlog-vp/assets/node02.f79a940b.png",p="/myBlog-vp/assets/nodemian.a757359c.png",c="/myBlog-vp/assets/nodemian2.5d4cb52c.png";const u={},d=i('<h1 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h1><h2 id="\u6D4F\u89C8\u5668\u4E2D\u7684-javascript-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E2D\u7684-javascript-\u7EBF\u7A0B" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4E2D\u7684 JavaScript \u7EBF\u7A0B</h2><ul><li><p>\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8BF4 <strong>JavaScript \u662F\u5355\u7EBF\u7A0B</strong>\u7684\uFF0C\u4F46\u662F JavaScript \u7684\u7EBF\u7A0B\u5E94\u8BE5\u6709\u81EA\u5DF1\u7684\u5BB9\u5668\u8FDB\u7A0B\uFF1A<strong>\u6D4F\u89C8\u5668\u6216\u8005Node</strong>\u3002</p></li><li><p>\u6D4F\u89C8\u5668\u662F\u4E00\u4E2A\u8FDB\u7A0B\u5417\uFF0C\u5B83\u91CC\u9762\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u5417\uFF1F</p><ul><li>\u76EE\u524D\u591A\u6570\u7684\u6D4F\u89C8\u5668\u5176\u5B9E\u90FD\u662F\u591A\u8FDB\u7A0B\u7684\uFF0C\u5F53\u6211\u4EEC\u6253\u5F00\u4E00\u4E2Atab\u9875\u9762\u65F6\u5C31\u4F1A\u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\uFF0C\u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u4E00\u4E2A\u9875 \u9762\u5361\u6B7B\u800C\u9020\u6210\u6240\u6709\u9875\u9762\u65E0\u6CD5\u54CD\u5E94\uFF0C\u6574\u4E2A\u6D4F\u89C8\u5668\u9700\u8981\u5F3A\u5236\u9000\u51FA\uFF1B</li><li>\u6BCF\u4E2A\u8FDB\u7A0B\u4E2D\u53C8\u6709\u5F88\u591A\u7684\u7EBF\u7A0B\uFF0C\u5176\u4E2D\u5305\u62EC\u6267\u884C JavaScript \u4EE3\u7801\u7684\u7EBF\u7A0B\uFF1B</li></ul></li></ul><p>JavaScript\u7684\u4EE3\u7801\u6267\u884C\u662F\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\u4E2D\u6267\u884C\u7684\uFF1A</p><ul><li>\u8FD9\u5C31\u610F\u5473\u7740 JavaScript \u7684\u4EE3\u7801\uFF0C\u5728<strong>\u540C\u4E00\u4E2A\u65F6\u523B\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B</strong>\uFF1B</li><li>\u5982\u679C<strong>\u8FD9\u4EF6\u4E8B\u662F\u975E\u5E38\u8017\u65F6</strong>\u7684\uFF0C\u5C31\u610F\u5473\u7740\u5F53\u524D\u7684\u7EBF\u7A0B\u5C31\u4F1A\u88AB<strong>\u963B\u585E</strong>\uFF1B</li></ul><p>\u6240\u4EE5\u771F\u6B63\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u5B9E\u9645\u4E0A\u5E76\u4E0D\u662F\u7531 JavaScript \u7EBF\u7A0B\u5728\u6267\u884C\u7684\uFF1A</p><ul><li>\u6D4F\u89C8\u5668\u7684\u6BCF\u4E2A\u8FDB\u7A0B\u662F\u591A\u7EBF\u7A0B\u7684\uFF0C\u90A3\u4E48<strong>\u5176\u4ED6\u7EBF\u7A0B\u53EF\u4EE5\u6765\u5B8C\u6210\u8FD9\u4E2A\u8017\u65F6\u7684\u64CD\u4F5C</strong></li><li>\u6BD4\u5982<strong>\u7F51\u7EDC\u8BF7\u6C42</strong>\u3001<strong>\u5B9A\u65F6\u5668</strong>\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u7279\u6027\u7684\u65F6\u5019\u6267\u884C\u5E94\u8BE5\u6709\u7684\u56DE\u8C03\u5373\u53EF\uFF1B</li></ul><h2 id="\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF</h2><p><em>\u6709JS\u7EBF\u7A0B\u3001\u6D4F\u89C8\u5668\u5176\u4ED6\u7EBF\u7A0B \u3001\u4E8B\u4EF6\u961F\u5217</em></p><p>\u6D4F\u89C8\u5668\u7EBF\u7A0B\u53EF\u5904\u7406\u5F88\u591A\u64CD\u4F5C\u6BD4\u5982 DOM \u76D1\u542C, \u7F51\u7EDC\u8BF7\u6C42 , \u5B9A\u65F6\u5668 \u6216\u8005\u5176\u4ED6\u4E00\u4E9B\u4E1C\u897F\u3002\u5F53\u6211\u4EEC\u5230\u4E86\u67D0\u4E00\u65F6\u95F4 \u9700\u8981\u6267\u884C\u56DE\u8C03\u7684\u8BDD\u5C31\u4F1A\u52A0\u5165\u5230\u4E8B\u4EF6\u961F\u5217\u91CC\u9762, \u7136\u540EJS\u5F15\u64CE\u5728\u4ECE\u8FD9\u4E2A\u4E8B\u4EF6\u961F\u5217\u91CC\u9762\u83B7\u53D6\u5BF9\u5E94\u7684\u51FD\u6570 , \u653E\u5230\u8C03\u7528\u6808\u6267\u884C\u3002 \u8FD9\u4E2A\u4E00\u4E2A\u95ED\u73AF\u5C31\u53EB\u505A \u4E8B\u4EF6\u5FAA\u73AF</p><p><img src="'+l+'" alt="\u56FE\u7247"></p><h2 id="\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1</h2><p><strong>\u4F46\u662F\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u5E76\u975E\u53EA\u7EF4\u62A4\u7740\u4E00\u4E2A\u961F\u5217 , \u4E8B\u5B9E\u4E0A\u6709\u4E24\u4E2A\u961F\u5217 :</strong></p><ul><li>\u5B8F\u4EFB\u52A1\u961F\u5217 <em>macrotask queue</em>: ajax , setInterval, setTimeout , DOM \u76D1\u542C , UI Rendering \u7B49</li><li>\u5FAE\u4EFB\u52A1\u961F\u5217 <em>micotask queue</em> : Promise\u7684then\u56DE\u8C03 , Mutation Observer API , queueMicrotask() \u7B49</li></ul><p><strong>\u90A3\u4E48\u4E8B\u4EF6\u5FAA\u73AF\u5BF9\u4E8E\u4E24\u4E2A\u961F\u5217\u7684\u4F18\u5148\u7EA7\u662F\u600E\u4E48\u6837\u5462\uFF1F</strong></p><ul><li><ol><li>main script \u4E2D\u7684\u4EE3\u7801\u4F18\u5148\u6267\u884C(\u7F16\u5199\u7684\u9876\u5C42 script \u4EE3\u7801)</li></ol></li><li><ol start="2"><li><strong>\u5728\u4EFB\u4F55\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u4E4B\u524D (\u4E0D\u662F\u961F\u5217 , \u662F\u4E00\u4E2A\u5B8F\u4EFB\u52A1) , \u90FD\u4F1A\u5148\u67E5\u770B\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u662F\u5426\u6709\u4EFB\u52A1\u9700\u8981\u6267\u884C</strong></li></ol><ul><li>\u4E5F\u5C31\u662F\u8BF4\u5B8F\u4EFB\u52A1\u6267\u884C\u4E4B\u524D , \u5FC5\u987B\u8981\u4FDD\u8BC1\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u7A7A\u7684</li><li>\u5982\u679C\u4E0D\u4E3A\u7A7A , \u90A3\u4E48\u4E45\u4F18\u5148\u6267\u884C\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1(\u56DE\u8C03)</li></ul></li></ul><h2 id="promise-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#promise-\u9762\u8BD5\u9898" aria-hidden="true">#</a> Promise \u9762\u8BD5\u9898</h2><p>\u753B\u4E00\u4E0B main script , \u5FAE , \u5B8F \u7136\u540E\u518D\u5206\u6790</p><ul><li>\u6CE8\u610F\u70B9 : (1) \u6267\u884C\u5B8F\u4EFB\u52A1\u4E4B\u524D\u5FAE\u4EFB\u52A1\u8981\u6E05\u7A7A , \u5426\u5219\u4E0D\u80FD\u6267\u884C\u5B8F\u4EFB\u52A1</li></ul><p><img src="'+a+'" alt="\u56FE\u7247"></p><p>\u70ED\u8EAB :</p><ul><li>\u6CE8\u610F\u70B9: async \u5728\u524D\u9762\u603B\u7ED3\u8FC7 , \u5F02\u6B65\u51FD\u6570\u7684\u5185\u90E8\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u548C\u666E\u901A\u51FD\u6570\u662F\u4E00\u81F4\u7684 , \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E5F\u662F\u4F1A\u88AB<strong>\u540C\u6B65\u6267\u884C</strong><img src="'+r+'" alt="\u56FE\u7247"> \u7B54\u6848: 1111 2222 4444 333</li></ul><p><img src="'+t+'" alt="\u56FE\u7247"><img src="'+s+'" alt="\u56FE\u7247"></p><h2 id="node\u7684\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#node\u7684\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> Node\u7684\u4E8B\u4EF6\u5FAA\u73AF</h2><p>\u6D4F\u89C8\u5668\u4E2D\u7684 EventLoop \u662F\u6839\u636EHTML5\u5B9A\u4E49\u7684\u89C4\u8303\u6765\u5B9E\u73B0\u7684\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\u7684\u5B9E\u73B0\uFF0C\u800C Node \u4E2D\u662F\u7531 libuv \u5B9E\u73B0\u7684\u3002</p><ul><li>\u4E0B\u9762\u662F\u4E00\u4E2ANode\u7684\u67B6\u6784\u56FE:</li><li>\u6211\u4EEC\u4F1A\u53D1\u73B0 libuv \u4E2D\u4E3B\u8981\u7EF4\u62A4\u4E86\u4E00\u4E2A EventLoop \u548C worker threads\uFF08\u7EBF\u7A0B\u6C60\uFF09\uFF1B</li><li>ventLoop\u8D1F\u8D23\u8C03\u7528\u7CFB\u7EDF\u7684\u4E00\u4E9B\u5176\u4ED6\u64CD\u4F5C\uFF1A\u6587\u4EF6\u7684IO\u3001Network\u3001child-processes\u7B49</li></ul><p>libuv\u662F\u4E00\u4E2A\u591A\u5E73\u53F0\u7684\u4E13\u6CE8\u4E8E\u5F02\u6B65IO\u7684\u5E93\uFF0C\u5B83\u6700\u521D\u662F\u4E3ANode\u5F00\u53D1\u7684\uFF0C\u4F46\u662F\u73B0\u5728\u4E5F\u88AB\u4F7F\u7528\u5230Luvit\u3001Julia\u3001pyuv\u7B49\u5176 \u4ED6\u5730\u65B9 <img src="'+o+'" alt="\u56FE\u7247"></p><h2 id="node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u9636\u6BB5" aria-hidden="true">#</a> Node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u9636\u6BB5</h2><p><strong>\u4E8B\u4EF6\u5FAA\u73AF\u50CF\u662F\u4E00\u4E2A\u6865\u6881</strong>\uFF0C\u662F\u8FDE\u63A5\u7740\u5E94\u7528\u7A0B\u5E8F\u7684 <strong>JavaScript \u548C\u7CFB\u7EDF\u8C03\u7528</strong>\u4E4B\u95F4\u7684\u901A\u9053\uFF1A</p><ul><li>\u65E0\u8BBA\u662F\u6211\u4EEC\u7684\u6587\u4EF6IO\u3001\u6570\u636E\u5E93\u3001\u7F51\u7EDCIO\u3001\u5B9A\u65F6\u5668\u3001\u5B50\u8FDB\u7A0B\uFF0C\u5728\u5B8C\u6210\u5BF9\u5E94\u7684\u64CD\u4F5C\u540E\uFF0C\u90FD\u4F1A\u5C06<strong>\u5BF9\u5E94\u7684\u7ED3\u679C\u548C\u56DE\u8C03\u51FD\u6570</strong>\u653E\u5230\u4E8B\u4EF6\u5FAA\u73AF\uFF08\u4EFB\u52A1\u961F\u5217\uFF09\u4E2D\uFF1B</li><li>\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u4E0D\u65AD\u7684\u4ECE**\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF08\u56DE\u8C03\u51FD\u6570\uFF09**\u6765\u6267\u884C\uFF1B</li></ul><p><em>\u4F46\u662F\u4E00\u6B21\u5B8C\u6574\u7684\u4E8B\u4EF6\u5FAA\u73AFTick\u5206\u6210\u5F88\u591A\u4E2A\u9636\u6BB5\uFF1A</em></p><ul><li><em>\u5B9A\u65F6\u5668\uFF08Timers\uFF09</em>\uFF1A\u672C\u9636\u6BB5\u6267\u884C\u5DF2\u7ECF\u88AB setTimeout() \u548C setInterval() \u7684\u8C03\u5EA6\u56DE\u8C03\u51FD\u6570\u3002</li><li><em>\u5F85\u5B9A\u56DE\u8C03\uFF08Pending Callback\uFF09</em>\uFF1A\u5BF9\u67D0\u4E9B\u7CFB\u7EDF\u64CD\u4F5C\uFF08\u5982TCP\u9519\u8BEF\u7C7B\u578B\uFF09\u6267\u884C\u56DE\u8C03\uFF0C\u6BD4\u5982 TCP \u8FDE\u63A5\u65F6\u63A5\u6536\u5230 ECONNREFUSED\u3002</li><li><em>idle, prepare</em>\uFF1A\u4EC5\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\u3002</li><li><em>\u8F6E\u8BE2\uFF08Poll\uFF09</em>\uFF1A\u68C0\u7D22\u65B0\u7684 I/O \u4E8B\u4EF6\uFF1B\u6267\u884C\u4E0E I/O \u76F8\u5173\u7684\u56DE\u8C03\uFF1B</li><li><em>\u68C0\u6D4B\uFF08check\uFF09</em>\uFF1AsetImmediate() \u56DE\u8C03\u51FD\u6570\u5728\u8FD9\u91CC\u6267\u884C\u3002</li><li><em>\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570</em>\uFF1A\u4E00\u4E9B\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\uFF1Asocket.on(&#39;close&#39;, ...)\u3002</li></ul><p><img src="'+n+'" alt="\u56FE\u7247"></p><h2 id="node-\u7684\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#node-\u7684\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> Node \u7684\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1</h2><p>\u6211\u4EEC\u4F1A\u53D1\u73B0\u4ECE\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u7684 Tick \u6765\u8BF4\uFF0CNode \u7684\u4E8B\u4EF6\u5FAA\u73AF\u66F4\u590D\u6742\uFF0C\u5B83\u4E5F\u5206\u4E3A\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\uFF1A</p><ul><li>\u5B8F\u4EFB\u52A1 (macrotask) :setTimeout , setInterval , IO\u4E8B\u4EF6 , setImmediate , close \u4E8B\u4EF6</li><li>\u5FAE\u4EFB\u52A1 (microtask) : Promise\u7684then\u56DE\u8C03 , process.nextTick , queueMicro</li></ul><p>\u4F46\u662F , Node \u7684\u4E8B\u4EF6\u5FAA\u73AF\u4E0D\u53EA\u662F\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u961F\u5217 :</p><ul><li><strong>\u5FAE\u4EFB\u52A1\u961F\u5217\uFF1A</strong><ul><li>next tick queue\uFF1Aprocess.nextTick\uFF1B</li><li>other queue\uFF1APromise\u7684then\u56DE\u8C03\u3001queueMicrotask\uFF1B</li></ul></li><li><strong>\u5B8F\u4EFB\u52A1\u961F\u5217\uFF1A</strong><ul><li>timer queue\uFF1AsetTimeout\u3001setInterval\uFF1B</li><li>poll queue\uFF1AIO\u4E8B\u4EF6\uFF1B</li><li>check queue\uFF1A<em>setImmediate\uFF1B</em></li><li>close queue\uFF1Aclose\u4E8B\u4EF6\uFF1B</li></ul></li></ul><h2 id="node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u987A\u5E8F" aria-hidden="true">#</a> Node\u4E8B\u4EF6\u5FAA\u73AF\u7684\u987A\u5E8F</h2><p>\u6240\u4EE5\uFF0C\u5728\u6BCF\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u7684 tick \u4E2D\uFF0C\u4F1A\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u6765\u6267\u884C\u4EE3\u7801\uFF1A</p><ul><li>next tick microtask queue\uFF1B</li><li>other microtask queue\uFF1B</li><li>timer queue\uFF1B</li><li>poll queue\uFF1B</li><li>check queue\uFF1B</li><li>close queue</li></ul><h2 id="node-\u6267\u884C\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#node-\u6267\u884C\u9762\u8BD5\u9898" aria-hidden="true">#</a> Node \u6267\u884C\u9762\u8BD5\u9898</h2><p><img src="'+p+'" alt="\u56FE\u7247"><img src="'+c+'" alt="\u56FE\u7247"></p>',43);function m(h,g){return d}var _=e(u,[["render",m],["__file","eventloop.html.vue"]]);export{_ as default};