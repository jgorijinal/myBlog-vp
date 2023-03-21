import{_ as t,d as e}from"./app.fcb85f29.js";const d={},o=e('<h1 id="vue\u4E2D\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> Vue\u4E2D\u7684\u751F\u547D\u5468\u671F</h1><h2 id="\u4E00-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u4E00 . \u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B</h2><p>Vue\u751F\u547D\u5468\u671F\u603B\u5171\u53EF\u4EE5\u5206\u4E3A8\u4E2A\u9636\u6BB5\uFF1A <code>beforeCreate</code> , <code>created</code> , <code>beforeMount</code> , <code>mounted</code> , <code>beforeUpdate</code> , <code>updated</code> , <code>beforeDestroy</code> , <code>destroyed</code> \u4EE5\u53CA\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u7684\u751F\u547D\u5468\u671F<code>activated</code> , <code>deactivated</code></p><table><thead><tr><th>\u751F\u547D\u5468\u671F</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td>beforeCreate</td><td style="text-align:center;">\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u4E4B\u521D</td></tr><tr><td>created</td><td style="text-align:center;">\u7EC4\u4EF6\u5B9E\u4F8B\u5DF2\u7ECF\u5B8C\u5168\u521B\u5EFA</td></tr><tr><td>beforeMount</td><td style="text-align:center;">\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u524D</td></tr><tr><td>mounted</td><td style="text-align:center;">\u7EC4\u4EF6\u6302\u8F7D\u5230\u5B9E\u4F8B\u4E0A\u53BB\u4E4B\u540E</td></tr><tr><td>beforeUpdate</td><td style="text-align:center;">\u7EC4\u4EF6\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u66F4\u65B0\u4E4B\u524D</td></tr><tr><td>updated</td><td style="text-align:center;">\u7EC4\u4EF6\u6570\u636E\u66F4\u65B0\u4E4B\u540E</td></tr><tr><td>beforeDestroy</td><td style="text-align:center;">\u7EC4\u4EF6\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u524D</td></tr><tr><td>destroyed</td><td style="text-align:center;">\u7EC4\u4EF6\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u540E</td></tr><tr><td>activated</td><td style="text-align:center;">keep-alive \u7F13\u5B58\u7684\u7EC4\u4EF6\u6FC0\u6D3B\u65F6</td></tr><tr><td>deactivated</td><td style="text-align:center;">keep-alive \u7F13\u5B58\u7684\u7EC4\u4EF6\u505C\u7528\u65F6\u8C03\u7528</td></tr></tbody></table><h2 id="\u4E8C-\u751F\u547D\u5468\u671F\u5177\u4F53\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u751F\u547D\u5468\u671F\u5177\u4F53\u5206\u6790" aria-hidden="true">#</a> \u4E8C . \u751F\u547D\u5468\u671F\u5177\u4F53\u5206\u6790</h2><p><strong>beforeCreate -&gt; created</strong></p><ul><li>\u521D\u59CB\u5316<code>vue</code>\u5B9E\u4F8B\uFF0C\u8FDB\u884C\u6570\u636E\u89C2\u6D4B</li></ul><p><strong>created</strong></p><ul><li>\u5B8C\u6210\u6570\u636E\u89C2\u6D4B\uFF0C\u5C5E\u6027\u4E0E\u65B9\u6CD5\u7684\u8FD0\u7B97\uFF0C<code>watch</code>\u3001<code>event</code>\u4E8B\u4EF6\u56DE\u8C03\u7684\u914D\u7F6E</li><li>\u53EF\u8C03\u7528<code>methods</code>\u4E2D\u7684\u65B9\u6CD5\uFF0C\u8BBF\u95EE\u548C\u4FEE\u6539<code>data</code>\u6570\u636E\u89E6\u53D1\u54CD\u5E94\u5F0F\u6E32\u67D3<code>dom</code>\uFF0C\u53EF\u901A\u8FC7<code>computed</code>\u548C<code>watch</code>\u5B8C\u6210\u6570\u636E\u8BA1\u7B97</li><li>\u6B64\u65F6<code>vm.$el</code> \u5E76\u6CA1\u6709\u88AB\u521B\u5EFA</li></ul><p><strong>created -&gt; beforeMount</strong></p><ul><li>\u5224\u65AD\u662F\u5426\u5B58\u5728<code>el</code>\u9009\u9879\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u505C\u6B62\u7F16\u8BD1\uFF0C\u76F4\u5230\u8C03\u7528<code>vm.$mount(el)</code>\u624D\u4F1A\u7EE7\u7EED\u7F16\u8BD1</li><li><code>vm.el</code>\u83B7\u53D6\u5230\u7684\u662F\u6302\u8F7D<code>DOM</code>\u7684</li></ul><p><strong>beforeMount</strong></p><ul><li>\u5728\u6B64\u9636\u6BB5\u53EF\u83B7\u53D6\u5230<code>vm.el</code></li><li>\u6B64\u9636\u6BB5<code>vm.el</code>\u867D\u5DF2\u5B8C\u6210<code>DOM</code>\u521D\u59CB\u5316\uFF0C\u4F46\u5E76\u672A\u6302\u8F7D\u5728<code>el</code>\u9009\u9879\u4E0A</li></ul><p><strong>beforeMount -&gt; mounted</strong></p><ul><li><strong>\u6B64\u9636\u6BB5<code>vm.el</code>\u5B8C\u6210\u6302\u8F7D</strong>\uFF0C<code>vm.$el</code>\u751F\u6210\u7684<code>DOM</code>\u66FF\u6362\u4E86<code>el</code>\u9009\u9879\u6240\u5BF9\u5E94\u7684DOM</li></ul><p><strong>mounted</strong></p><ul><li><code>vm.el</code>\u5DF2\u5B8C\u6210<code>DOM</code>\u7684\u6302\u8F7D\u4E0E\u6E32\u67D3\uFF0C\u6B64\u523B\u6253\u5370<code>vm.$el</code>\uFF0C\u53D1\u73B0\u4E4B\u524D\u7684\u6302\u8F7D\u70B9\u53CA\u5185\u5BB9\u5DF2\u88AB\u66FF\u6362\u6210\u65B0\u7684<code>DOM</code></li><li><strong>\u6CE8\u610F <code>mounted</code> <strong>\u4E0D\u4F1A</strong>\u4FDD\u8BC1\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E5F\u90FD\u88AB\u6302\u8F7D\u5B8C\u6210\u3002\u5982\u679C\u5E0C\u671B\u7B49\u5230\u6574\u4E2A\u89C6\u56FE\u90FD\u6E32\u67D3\u5B8C\u6BD5\u518D\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5728 <code>mounted</code> \u5185\u90E8\u4F7F\u7528 <code>vm.$nextTick</code></strong></li><li><strong>\u6570\u636E\u8BF7\u6C42</strong>\u53EF\u4EE5\u5728<code>mounted</code>\u94A9\u5B50\u505A</li></ul><p><strong>beforeUpdate</strong></p><ul><li>\u6B64\u65F6<code>view</code>\u5C42\u8FD8\u672A\u66F4\u65B0</li><li>\u82E5\u5728<code>beforeUpdate</code>\u4E2D\u518D\u6B21\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u518D\u6B21\u89E6\u53D1\u66F4\u65B0\u65B9\u6CD5</li></ul><p><strong>updated</strong></p><ul><li>\u5B8C\u6210<code>view</code>\u5C42\u7684\u66F4\u65B0</li><li>\u82E5\u5728<code>updated</code>\u4E2D\u518D\u6B21\u4FEE\u6539\u6570\u636E\uFF0C\u4F1A\u518D\u6B21\u89E6\u53D1\u66F4\u65B0\u65B9\u6CD5\uFF08<code>beforeUpdate</code>\u3001<code>updated</code>\uFF09</li></ul><p><strong>beforeDestroy</strong></p><ul><li>\u5B9E\u4F8B\u88AB\u9500\u6BC1\u524D\u8C03\u7528\uFF0C\u6B64\u65F6\u5B9E\u4F8B\u5C5E\u6027\u4E0E\u65B9\u6CD5\u4ECD\u53EF\u8BBF\u95EE</li></ul><p><strong>destroyed</strong></p><ul><li>\u5B8C\u5168\u9500\u6BC1\u4E00\u4E2A\u5B9E\u4F8B\u3002\u53EF\u6E05\u7406\u5B83\u4E0E\u5176\u5B83\u5B9E\u4F8B\u7684\u8FDE\u63A5\uFF0C\u89E3\u7ED1\u5B83\u7684\u5168\u90E8\u6307\u4EE4\u53CA\u4E8B\u4EF6\u76D1\u542C\u5668</li><li>\u5E76\u4E0D\u80FD\u6E05\u9664<code>DOM</code>\uFF0C\u4EC5\u4EC5\u9500\u6BC1\u5B9E\u4F8B</li></ul><p><strong>\u4F7F\u7528\u573A\u666F\u5206\u6790</strong></p><table><thead><tr><th>\u751F\u547D\u5468\u671F</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td>beforeCreate</td><td style="text-align:center;">\u6267\u884C\u65F6\u7EC4\u4EF6\u5B9E\u4F8B\u8FD8<strong>\u672A\u521B\u5EFA</strong>\uFF0C\u901A\u5E38\u7528\u4E8E\u63D2\u4EF6\u5F00\u53D1\u4E2D\u6267\u884C\u4E00\u4E9B<strong>\u521D\u59CB\u5316\u4EFB\u52A1</strong></td></tr><tr><td>created</td><td style="text-align:center;">\u7EC4\u4EF6<strong>\u521D\u59CB\u5316\u5B8C\u6BD5</strong>\uFF0C\u5404\u79CD\u6570\u636E\u53EF\u4EE5\u4F7F\u7528</td></tr><tr><td>beforeMount</td><td style="text-align:center;">\u672A\u6267\u884C\u6E32\u67D3\u3001\u66F4\u65B0\uFF0C<strong>dom\u672A\u521B\u5EFA</strong></td></tr><tr><td>mounted</td><td style="text-align:center;">\u521D\u59CB\u5316\u7ED3\u675F\uFF0C<strong>dom\u5DF2\u521B\u5EFA</strong>\uFF0C\u53EF\u7528\u4E8E<strong>\u83B7\u53D6\u8BBF\u95EE\u6570\u636E\u548Cdom\u5143\u7D20</strong></td></tr><tr><td>beforeUpdate</td><td style="text-align:center;"><strong>\u66F4\u65B0\u524D</strong>\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u66F4\u65B0\u524D\u5404\u79CD\u72B6\u6001</td></tr><tr><td>updated</td><td style="text-align:center;"><strong>\u66F4\u65B0\u540E</strong>\uFF0C\u6240\u6709\u72B6\u6001\u5DF2\u662F\u6700\u65B0</td></tr><tr><td>beforeDestroy</td><td style="text-align:center;">\u9500\u6BC1\u524D\uFF0C\u53EF\u7528\u4E8E\u4E00\u4E9B\u5B9A\u65F6\u5668\u6216\u8BA2\u9605\u7684<strong>\u53D6\u6D88</strong></td></tr><tr><td>destroyed</td><td style="text-align:center;">\u7EC4\u4EF6<strong>\u5DF2\u9500\u6BC1</strong>\uFF0C\u4F5C\u7528\u540C\u4E0A</td></tr></tbody></table>',27);function r(c,l){return o}var a=t(d,[["render",r],["__file","lifeCycle.html.vue"]]);export{a as default};