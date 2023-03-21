import{_ as s,r as t,o as i,c as l,a as e,e as o,F as n,b as a,d as p}from"./app.fcb85f29.js";var d="/myBlog-vp/assets/router1.890f2465.png",u="/myBlog-vp/assets/router2.def5b534.png",c="/myBlog-vp/assets/router3.0cddc2aa.png",h="/myBlog-vp/assets/lan.7d29eca1.png",g="/myBlog-vp/assets/chunk.ea52dd25.png",m="/myBlog-vp/assets/dist.e618acb3.png",v="/myBlog-vp/assets/id.e817f97a.png",_="/myBlog-vp/assets/lid.259a6bff.png",f="/myBlog-vp/assets/tid.d18ded13.png",b="/myBlog-vp/assets/routeid.fb37fd23.png",y="/myBlog-vp/assets/duo.a6a03935.png",x="/myBlog-vp/assets/duo2.65e6d812.png",B="/myBlog-vp/assets/404.40595c62.png",k="/myBlog-vp/assets/4041.c4f91db5.png",R="/myBlog-vp/assets/4042.19190159.png",V="/myBlog-vp/assets/404p.2be2872e.png",j="/myBlog-vp/assets/jth.9eb64108.png",w="/myBlog-vp/assets/jti.e16f41f5.png",N="/myBlog-vp/assets/jjj.830816e6.png",E="/myBlog-vp/assets/linkslot.f11c9cc6.png",F="/myBlog-vp/assets/vslot.67e5e085.png",I="/myBlog-vp/assets/vstyle.18e0ba6a.png",$="/myBlog-vp/assets/addRoute.b65772d6.png",C="/myBlog-vp/assets/caddRoute.762f9308.png",D="/myBlog-vp/assets/r1.de3e5567.png",L="/myBlog-vp/assets/r2.97196430.png",P="/myBlog-vp/assets/r3.bee67cb7.png",S="/myBlog-vp/assets/login1.0fa78136.png",U="/myBlog-vp/assets/login2.b942b361.png";const q={},z=e("h1",{id:"vue-router\u7684\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-router\u7684\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#"),a(" vue-router\u7684\u57FA\u672C\u4F7F\u7528")],-1),J={href:"https://router.vuejs.org/zh/introduction.html",target:"_blank",rel:"noopener noreferrer"},M=a("\u5B98\u7F51"),T=p(`<p>Vue Router \u662F Vue.js\u5B98\u65B9\u7684\u8DEF\u7531\u7BA1\u7406\u5668 , \u9002\u7528\u4E8E\u6784\u5EFA\u5355\u9875\u9762\u5E94\u7528 (\u5355\u9875\u5E94\u7528\u8DEF\u7531\u7BA1\u7406\u5668)</p><p>vue router \u662F\u57FA\u4E8E\u8DEF\u7531\u7EC4\u4EF6\u7684</p><ul><li>\u8DEF\u7531\u7528\u4E8E\u8BBE\u5B9A\u8BBF\u95EE\u8DEF\u5F84, \u5C06\u8DEF\u5F84\u548C\u7EC4\u4EF6\u6620\u5C04\u8D77\u6765</li><li>\u5728 vue-router \u7684\u5355\u9875\u9762\u5E94\u7528\u4E2D, \u9875\u9762\u7684\u8DEF\u5F84\u7684\u6539\u53D8\u662F\u7EC4\u4EF6\u7684\u5207\u6362</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> create vite vue --template vue
<span class="token function">yarn</span> <span class="token function">add</span> vue-router@4
<span class="token function">yarn</span> <span class="token function">add</span> -D sass@1.26.10  <span class="token comment">#\u5B89\u88C5sass </span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8DEF\u7531\u7684\u4F7F\u7528\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7684\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a> \u8DEF\u7531\u7684\u4F7F\u7528\u6B65\u9AA4</h2><p>\u4F7F\u7528vue-router\u7684\u6B65\u9AA4:</p><ul><li>\u7B2C\u4E00\u6B65 : \u521B\u5EFA\u8DEF\u7531\u7EC4\u4EF6\u7684\u7EC4\u4EF6</li><li>\u7B2C\u4E8C\u6B65 : \u914D\u7F6E\u8DEF\u7531\u6620\u5C04: \u7EC4\u4EF6\u548C\u8DEF\u5F84\u6620\u5C04\u5173\u7CFB\u7684 routes \u6570\u7EC4</li><li>\u7B2C\u4E09\u6B65 : \u901A\u8FC7createRouter \u521B\u5EFA\u8DEF\u7531\u5BF9\u8C61, \u5E76\u4E14\u4F20\u5165 routes \u548C history \u6A21\u5F0F</li><li>\u7B2C\u56DB\u6B65 : \u4F7F\u7528\u8DEF\u7531 , \u901A\u8FC7 <code>&lt;router-link&gt;</code>\u548C<code>&lt;router-view&gt;</code></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528\u6D41\u7A0B" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528\u6D41\u7A0B</h2><p><img src="`+d+'" alt="\u56FE\u7247"><img src="'+u+'" alt="\u56FE\u7247"><img src="'+c+'" alt="\u56FE\u7247"></p><h2 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> router-link</h2><p>router-link \u4E0A\u6709\u5F88\u591A\u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E:</p><ul><li><strong>to \u5C5E\u6027</strong> : \u662F\u4E00\u4E2A\u5B57\u7B26\u4E32, \u6216\u8005\u662F\u4E00\u4E2A\u5BF9\u8C61</li><li><strong>replace \u5C5E\u6027</strong> : \u8BBE\u7F6E replace \u5C5E\u6027\u7684\u8BDD, \u5F53\u70B9\u51FB\u65F6\u56DE\u8C03\u7528 router.replace(), \u800C\u4E0D\u662F router.push()</li><li><strong>active-class \u5C5E\u6027</strong> : \u8BBE\u7F6E\u6FC0\u6D3B a \u5143\u7D20\u540E\u5E94\u7528\u7684 class , \u9ED8\u8BA4\u662F router-link-active</li><li><strong>exact-active-class \u5C5E\u6027</strong> : \u94FE\u63A5\u7CBE\u51C6\u6FC0\u6D3B\u65F6 , \u5E94\u7528\u4E8E\u6E32\u67D3 a \u7684class, \u9ED8\u8BA4\u662F router-link-exact-active</li></ul><h2 id="\u8DEF\u7531\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u8DEF\u7531\u61D2\u52A0\u8F7D</h2><p>\u5F53\u6253\u5305\u6784\u5EFA\u5E94\u7528\u65F6, JavaScript\u5305\u4F1A\u53D8\u5F97\u975E\u5E38\u5927, \u5F71\u54CD\u9875\u9762\u52A0\u8F7D</p><ul><li>\u5982\u679C\u80FD\u628A\u4E0D\u540C\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5206\u5272\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u5757, \u7136\u540E\u5F53\u8DEF\u7531\u88AB\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u52A0\u8F7D\u5BF9\u5E94\u7EC4\u4EF6, \u8FD9\u6837\u5C31\u4F1A\u66F4\u52A0\u9AD8\u6548</li><li>\u4E5F\u53EF\u4EE5\u63D0\u9AD8\u9996\u5C4F\u7684\u52A0\u8F7D\u6548\u7387</li></ul><p>Vue router \u9ED8\u8BA4\u5C31\u652F\u6301\u52A8\u6001\u6765\u5BFC\u5165\u7EC4\u4EF6</p><ul><li>\u8FD9\u662F\u56E0\u4E3Acomponent \u53EF\u4EE5\u7A7F\u5165\u4E00\u4E2A\u7EC4\u4EF6, \u4E5F\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570, \u8BE5\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2APromise</li><li>\u800C import \u51FD\u6570\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2APromise</li></ul><p><img src="'+h+'" alt="\u56FE\u7247"></p><h3 id="\u6253\u5305\u6548\u679C\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u6548\u679C\u5206\u6790" aria-hidden="true">#</a> \u6253\u5305\u6548\u679C\u5206\u6790</h3><ul><li>\u4ECE webpack3.x \u5F00\u59CB\u652F\u6301\u5BF9\u5206\u5305\u8FDB\u884C\u547D\u540D (chunk-name)</li><li>\u770B\u4E00\u4E0B yarn build \u6253\u5305\u7ED3\u679C <img src="'+g+'" alt="\u56FE\u7247"><img src="'+m+'" alt="\u56FE\u7247"></li></ul><h2 id="\u52A8\u6001\u8DEF\u7531\u57FA\u672C\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531\u57FA\u672C\u5339\u914D" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531\u57FA\u672C\u5339\u914D</h2><p>\u5F88\u591A\u65F6\u5019\u9700\u8981\u5C06\u7ED9\u5B9A\u5339\u914D\u6A21\u5F0F\u7684\u8DEF\u7531\u6620\u5C04\u5230\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF1A</p><ul><li>\u4F8B\u5982\uFF0C \u53EF\u80FD\u6709\u4E00\u4E2A User \u7EC4\u4EF6\uFF0C \u5B83\u5E94\u8BE5\u5BF9\u6240\u6709\u7684\u7528\u6237\u8FDB\u884C\u6E32\u67D3\uFF0C \u4F46\u662F\u7528\u6237\u7684 ID \u662F\u4E0D\u540C\u7684</li><li>\u5728Vue router \u4E2D\uFF0C \u53EF\u4EE5\u5728\u8DEF\u5F84\u4E2D\u4F7F\u7528\u4E00\u4E2A\u52A8\u6001\u5B57\u6BB5\u6765\u5B9E\u73B0\uFF0C \u79F0\u4E4B\u4E3A <strong>\u8DEF\u5F84\u53C2\u6570</strong><img src="'+v+'" alt="\u56FE\u7247"></li><li>\u5728router-link \u4E2D\u8FDB\u884C\u8DF3\u8F6C <img src="'+_+'" alt="\u56FE\u7247"></li></ul><h3 id="\u83B7\u53D6\u52A8\u6001\u8DEF\u7531\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u52A8\u6001\u8DEF\u7531\u7684\u503C" aria-hidden="true">#</a> \u83B7\u53D6\u52A8\u6001\u8DEF\u7531\u7684\u503C</h3><p>\u5728 User \u7EC4\u4EF6\u5185\u90E8\u5982\u4F55\u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u503C ?</p><ul><li>\u5728 template \u4E2D\u76F4\u63A5\u901A\u8FC7 $route.params.id \u83B7\u53D6\u503C</li><li>\u5728 created \u4E2D, \u901A\u8FC7 this.$route.params.id \u83B7\u53D6\u503C</li><li>\u5728 setup \u51FD\u6570\u4E2D, \u4F7F\u7528 vue-router \u63D0\u4F9B\u7684\u4E00\u4E2Ahook useRoute</li></ul><p>\u8BE5hook \u4F1A\u8FD4\u56DE\u4E00\u4E2A Route\u5BF9\u8C61, \u5BF9\u8C61\u4FDD\u5B58\u7740\u5F53\u524D\u8DEF\u7531\u76F8\u5173\u7684\u503C <img src="'+f+'" alt="\u56FE\u7247"><img src="'+b+'" alt="\u56FE\u7247"></p><h3 id="\u5339\u914D\u591A\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u591A\u4E2A\u53C2\u6570" aria-hidden="true">#</a> \u5339\u914D\u591A\u4E2A\u53C2\u6570</h3><p><img src="'+y+'" alt="\u56FE\u7247"><img src="'+x+'" alt="\u56FE\u7247"></p><h2 id="not-found" tabindex="-1"><a class="header-anchor" href="#not-found" aria-hidden="true">#</a> Not Found</h2><p>\u5BF9\u4E8E\u90A3\u4E9B\u6CA1\u6709\u5339\u914D\u5230\u7684\u8DEF\u7531 , \u901A\u5E38\u4F1A\u5339\u914D\u5230\u56FA\u5B9A\u7684\u9875\u9762</p><ul><li>\u6BD4\u5982 Not Found\u7684\u9519\u8BEF\u9875\u9762\u4E2D, \u53EF\u4EE5\u7F16\u5199\u52A8\u6001\u8DEF\u7531\u7528\u4E8E\u5339\u914D\u6240\u6709\u7684\u9875\u9762 <img src="'+B+'" alt="\u56FE\u7247"></li><li>\u53EF\u4EE5\u901A\u8FC7 $route.params.pathMatch \u83B7\u53D6\u5230\u4F20\u5165\u7684\u53C2\u6570 <img src="'+k+'" alt="\u56FE\u7247"></li></ul><h3 id="\u5339\u914D\u89C4\u5219\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u89C4\u5219\u52A0" aria-hidden="true">#</a> \u5339\u914D\u89C4\u5219\u52A0 *</h3><p><img src="'+R+'" alt="\u56FE\u7247"> \u533A\u522B\u5728\u4E8E\u89E3\u6790\u7684\u65F6\u5019 , \u662F\u5426\u89E3\u6790 / <img src="'+V+'" alt="\u56FE\u7247"></p><h2 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h2><ul><li>\u5E0C\u671B\u901A\u8FC7\u4EE3\u7801\u5566\u8DF3\u8F6C\u9875\u9762, \u6BD4\u5982\u70B9\u51FB\u7684\u662F\u4E00\u4E2A\u6309\u94AE</li></ul><p><img src="'+j+'" alt="\u56FE\u7247"></p><ul><li>\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61</li></ul><p><img src="'+w+'" alt="\u56FE\u7247"></p><ul><li>\u5728setup\u51FD\u6570\u91CC\u7F16\u5199\u4EE3\u7801 , \u53EF\u4EE5\u7528 useRouter</li></ul><p><img src="'+N+'" alt="\u56FE\u7247"></p><h2 id="router-link\u7684-v-slot" tabindex="-1"><a class="header-anchor" href="#router-link\u7684-v-slot" aria-hidden="true">#</a> router-link\u7684 v-slot</h2><p><img src="'+E+'" alt="\u56FE\u7247"></p><h2 id="router-view\u7684-v-slot" tabindex="-1"><a class="header-anchor" href="#router-view\u7684-v-slot" aria-hidden="true">#</a> router-view\u7684 v-slot</h2><p>router-view \u4E5F\u63D0\u4F9B\u4E86\u6211\u4EEC\u4E00\u4E2A\u63D2\u69FD, \u53EF\u4EE5\u7528\u4E8E<code>&lt;transition&gt;</code> \u548C <code>&lt;keep-alive&gt;</code>\u7EC4\u4EF6\u6765\u5305\u88F9\u6211\u7684\u8DEF\u7531\u7EC4\u4EF6</p><ul><li><strong>Component : \u8981\u6E32\u67D3\u7684\u7EC4\u4EF6</strong></li><li><strong>route : \u89E3\u6790\u51FA\u6765\u7684\u6807\u51C6\u5316\u8DEF\u7531\u5BF9\u8C61</strong></li></ul><p><img src="'+F+'" alt="\u56FE\u7247"><img src="'+I+'" alt="\u56FE\u7247"></p><h2 id="\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u6DFB\u52A0\u8DEF\u7531</h2><p>\u67D0\u4E9B\u60C5\u51B5\u4E0B\u9700\u8981\u52A8\u6001\u7684\u6765\u6DFB\u52A0\u8DEF\u7531</p><ul><li>\u6BD4\u5982\u6839\u636E\u8DEF\u7531\u4E0D\u540C\u7684\u6743\u9650, \u6CE8\u518C\u4E0D\u540C\u7684\u8DEF\u7531</li><li>\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u65B9\u6CD5 addRoute</li></ul><p><img src="'+$+'" alt="\u56FE\u7247"></p><p>\u5982\u679C\u4E3A route \u6DFB\u52A0\u4E00\u4E2Achildren \u8DEF\u7531 , \u90A3\u4E48\u53EF\u4EE5\u4F20\u5165\u5BF9\u5E94\u7684 name :</p><p><img src="'+C+'" alt="\u56FE\u7247"></p><h3 id="\u52A8\u6001\u5220\u9664\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5220\u9664\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u5220\u9664\u8DEF\u7531</h3><p>\u5220\u9664\u8DEF\u7531\u7684\u65B9\u5F0F\u6709\u4E09\u79CD:</p><ul><li>\u65B9\u5F0F\u4E00 : \u6DFB\u52A0\u4E00\u4E2A name \u76F8\u540C\u7684\u8DEF\u7531</li><li>\u65B9\u5F0F\u4E8C : \u901A\u8FC7 removeRoute \u65B9\u6CD5 , \u4F20\u5165\u8DEF\u7531\u7684\u540D\u79F0</li><li>\u65B9\u5F0F\u4E09 : \u901A\u8FC7 addRoute \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u56DE\u8C03</li></ul><p><img src="'+D+'" alt="\u56FE\u7247"><img src="'+L+'" alt="\u56FE\u7247"><img src="'+P+'" alt="\u56FE\u7247"></p><h4 id="\u8DEF\u7531\u7684\u5176\u4ED6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7684\u5176\u4ED6\u65B9\u5F0F" aria-hidden="true">#</a> \u8DEF\u7531\u7684\u5176\u4ED6\u65B9\u5F0F</h4><ul><li><strong>router.hasRoute() :</strong> \u68C0\u67E5\u8DEF\u7531\u662F\u5426\u5B58\u5728</li><li><strong>router.getRoutes() :</strong> \u83B7\u53D6\u4E00\u4E2A\u5305\u542B\u6240\u6709\u8DEF\u7531\u8BB0\u5F55\u7684\u6570\u7EC4</li></ul><h2 id="\u8DEF\u7531\u5BFC\u822A\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5BFC\u822A\u5B88\u536B" aria-hidden="true">#</a> \u8DEF\u7531\u5BFC\u822A\u5B88\u536B</h2><p>vue-router \u63D0\u4F9B\u7684\u5BFC\u822A\u5B88\u536B\u4E3B\u8981\u662F\u7528\u6765\u901A\u8FC7\u8DF3\u8F6C\u6216\u8005\u53D6\u6D88\u7684\u65B9\u5F0F\u5B88\u536B\u5BFC\u822A</p><ul><li><strong>\u5168\u5C40\u7684\u524D\u7F6E\u5B88\u536B beforeEach \u662F\u5728\u5BFC\u822A\u89E6\u53D1\u524D\u4F1A\u88AB\u56DE\u8C03\u7684</strong></li></ul><p>\u6709\u4E24\u4E2A\u53C2\u6570:</p><ul><li>to : \u5373\u5C06\u8FDB\u5165\u7684\u8DEF\u7531 Route \u5BF9\u8C61</li><li>from : \u5373\u5C06\u79BB\u5F00\u7684\u8DEF\u7531 Route \u5BF9\u8C61</li></ul><p>\u8FD4\u56DE\u503C:</p><ul><li>false : \u53D6\u6D88\u5F53\u524D\u5BFC\u822A</li><li>\u4E0D\u8FD4\u56DE\u6216\u8005\u8FD4\u56DEundefined : \u8FDB\u884C\u9ED8\u8BA4\u5BFC\u822A</li><li>\u8FD4\u56DE\u4E00\u4E2A\u5730\u5740: <ul><li>\u53EF\u4EE5\u662F string \u7C7B\u578B\u7684\u8DEF\u5F84</li><li>\u53EF\u4EE5\u662F\u5BF9\u8C61, \u5BF9\u8C61\u4E2D\u5305\u542Bpath , query , params\u7B49\u4FE1\u606F</li></ul></li></ul><p>\u53EF\u9009\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570:</p><ul><li>Vue2 \u4E2D\u901A\u8FC7next \u53C2\u6570\u6765\u51B3\u5B9A\u5982\u4F55\u8FDB\u884C\u8DF3\u8F6C</li><li>\u4F46\u662F\u5728Vue3\u4E2D\u66F4\u5EFA\u8BAE\u901A\u8FC7\u8FD4\u56DE\u503C\u6765\u63A7\u5236, \u4E0D\u5728\u63A8\u8350\u4F7F\u7528 next \u51FD\u6570, \u8FD9\u662F\u56E0\u4E3A\u5F00\u53D1\u4E2D\u5F88\u5BB9\u6613\u8C03\u7528\u591A\u6B21 next</li></ul><p>\u6BD4\u5982\u5B8C\u6210\u4E00\u4E2A\u529F\u80FD , \u53EA\u6709\u767B\u5F55\u540E\u624D\u80FD\u770B\u5230\u5176\u4ED6\u9875\u9762:</p><p><img src="'+S+'" alt="\u56FE\u7247"><img src="'+U+'" alt="\u56FE\u7247"></p>',71);function A(G,H){const r=t("ExternalLinkIcon");return i(),l(n,null,[z,e("p",null,[e("a",J,[M,o(r)])]),T],64)}var O=s(q,[["render",A],["__file","start.html.vue"]]);export{O as default};