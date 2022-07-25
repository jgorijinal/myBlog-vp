<template><h1 id="项目-6" tabindex="-1"><a class="header-anchor" href="#项目-6" aria-hidden="true">#</a> 项目 6</h1>
<h2 id="使用-echarts-基本步骤" tabindex="-1"><a class="header-anchor" href="#使用-echarts-基本步骤" aria-hidden="true">#</a> 使用 Echarts 基本步骤</h2>
<p>第一步：我们可以通过以下方式获取 ECharts：</p>
<ul>
<li>从 Apache ECharts 官网下载界面 获取官方源码包后构建；</li>
<li>在 ECharts 的 GitHub 获取；</li>
<li>通过 npm 获取 echarts，npm install echarts --save；</li>
<li>通过 jsDelivr 等 CDN 引入；</li>
</ul>
<p>用 npm 安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> echarts --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步：引入 Echarts</p>
<ul>
<li>可以通过不同的方式引入</li>
</ul>
<p>第三步：初始化 Echarts 对象，并且设置配置进行绘制</p>
<ul>
<li>通过 echarts.init(dom, theme, options) 初始化；</li>
<li>通过 setOption 方法设置绘制的数据</li>
</ul>
<h2 id="echarts-最基本使用" tabindex="-1"><a class="header-anchor" href="#echarts-最基本使用" aria-hidden="true">#</a> Echarts 最基本使用</h2>
<p><img src="@source/.vuepress/public/images/ec1.png" alt="图片"></p>
<h2 id="dashboard-中数据的请求与保存" tabindex="-1"><a class="header-anchor" href="#dashboard-中数据的请求与保存" aria-hidden="true">#</a> dashboard 中数据的请求与保存</h2>
<p>创建 Vuex 的 dashboard 模块
<img src="@source/.vuepress/public/images/dash1.png" alt="图片">
<img src="@source/.vuepress/public/images/dash2.png" alt="图片">
<img src="@source/.vuepress/public/images/dash3.png" alt="图片">
dashboard 网络请求
<img src="@source/.vuepress/public/images/dash4.png" alt="图片">
<img src="@source/.vuepress/public/images/dash5.png" alt="图片">
<img src="@source/.vuepress/public/images/dash6.png" alt="图片"></p>
<p>dispatch 触发 action
<img src="@source/.vuepress/public/images/dash7.png" alt="图片">
最终拿到了数据
<img src="@source/.vuepress/public/images/dash8.png" alt="图片"></p>
<h2 id="dashboard-页面的基本布局搭建" tabindex="-1"><a class="header-anchor" href="#dashboard-页面的基本布局搭建" aria-hidden="true">#</a> dashboard 页面的基本布局搭建</h2>
<p><img src="@source/.vuepress/public/images/bj2.png" alt="图片">
<img src="@source/.vuepress/public/images/bj1.png" alt="图片"></p>
<h2 id="base-echart-的最基本的封装和-setup-语法的使用" tabindex="-1"><a class="header-anchor" href="#base-echart-的最基本的封装和-setup-语法的使用" aria-hidden="true">#</a> base-echart 的最基本的封装和 setup 语法的使用</h2>
<p><img src="@source/.vuepress/public/images/ee1.png" alt="图片">
<img src="@source/.vuepress/public/images/be1.png" alt="图片"></p>
<h2 id="useechart-hook-的封装" tabindex="-1"><a class="header-anchor" href="#useechart-hook-的封装" aria-hidden="true">#</a> useEchart hook 的封装</h2>
<p><img src="@source/.vuepress/public/images/eh1.png" alt="图片">
useEchart.ts hook
<img src="@source/.vuepress/public/images/eh2.png" alt="图片">
base-echart.vue
<img src="@source/.vuepress/public/images/eh3.png" alt="图片">
<strong>但是 options 的数据可能会变, 每当变化时需重新调用 setOptions 方法所以 , 使用了 watchEffect</strong>
<img src="@source/.vuepress/public/images/we9.png" alt="图片"></p>
<h2 id="pieechart-饼图的封装" tabindex="-1"><a class="header-anchor" href="#pieechart-饼图的封装" aria-hidden="true">#</a> PieEchart 饼图的封装</h2>
<p><a href="https://echarts.apache.org/examples/zh/editor.html?c=pie-simple" target="_blank" rel="noopener noreferrer">options配置官网<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/bt.png" alt="图片"></p>
<p><strong>图是不变的 , 也就是里面的数据可能会变, 所以要单独封装</strong></p>
<p><img src="@source/.vuepress/public/images/bt1.png" alt="图片"></p>
<p>pie-echart.vue <strong>封装目的 : 在外面要使用 pieEchart 时 , 只需通过 props 传具体数据 pieData 即可</strong>
<img src="@source/.vuepress/public/images/bt2.png" alt="图片">
<img src="@source/.vuepress/public/images/bt3.png" alt="图片">
<strong>其实要传入 base-echart options 属性被改了 , 所以每当 options 被改是 base-echart 组件里的 setOptions(props.options) 要重新调一遍, 所以</strong></p>
<p>base-echart.vue
<img src="@source/.vuepress/public/images/we9.png" alt="图片"></p>
<p>dashboard.vue <strong>使用封装的 pieEchart</strong>
<img src="@source/.vuepress/public/images/bt4.png" alt="图片">
<img src="@source/.vuepress/public/images/bt5.png" alt="图片"></p>
<h2 id="rose-echart-玫瑰图的封装" tabindex="-1"><a class="header-anchor" href="#rose-echart-玫瑰图的封装" aria-hidden="true">#</a> rose-echart 玫瑰图的封装</h2>
<p><a href="https://echarts.apache.org/examples/zh/editor.html?c=pie-roseType-simple" target="_blank" rel="noopener noreferrer">options配置官网<ExternalLinkIcon/></a>
<strong>封装思路跟上面 PieEchart 一模一样</strong>
<img src="@source/.vuepress/public/images/re.png" alt="图片">
<img src="@source/.vuepress/public/images/re1.png" alt="图片"></p>
<p><strong>rose-echart.vue</strong>
<img src="@source/.vuepress/public/images/re2.png" alt="图片">
<img src="@source/.vuepress/public/images/re3.png" alt="图片">
page-echart/index.ts <strong>导出</strong>
<img src="@source/.vuepress/public/images/re4.png" alt="图片">
dashboard.vue 使用
<img src="@source/.vuepress/public/images/re5.png" alt="图片"></p>
<h2 id="line-echart-折线图的封装" tabindex="-1"><a class="header-anchor" href="#line-echart-折线图的封装" aria-hidden="true">#</a> line-echart 折线图的封装</h2>
<p><a href="https://echarts.apache.org/examples/zh/editor.html?c=area-stack" target="_blank" rel="noopener noreferrer">options配置官网<ExternalLinkIcon/></a>
<img src="@source/.vuepress/public/images/line1.png" alt="图片">
<img src="@source/.vuepress/public/images/line2.png" alt="图片"></p>
<p>props 接受 x 轴的 y 轴的数据 , 都是数组 , 就这么简单</p>
<p>line-echart.vue
<img src="@source/.vuepress/public/images/line3.png" alt="图片">
<img src="@source/.vuepress/public/images/line4.png" alt="图片">
page-echart/index.ts <strong>导出</strong>
<img src="@source/.vuepress/public/images/line5.png" alt="图片">
dashboard.vue <strong>使用 line-echart</strong>
<img src="@source/.vuepress/public/images/line6.png" alt="图片">
<img src="@source/.vuepress/public/images/line7.png" alt="图片"></p>
<h2 id="bar-echart-柱状图的封装" tabindex="-1"><a class="header-anchor" href="#bar-echart-柱状图的封装" aria-hidden="true">#</a> bar-echart 柱状图的封装</h2>
<p><strong>封装思路跟 lineEchart 一模一样</strong></p>
<p><a href="https://echarts.apache.org/examples/zh/editor.html?c=bar-gradient" target="_blank" rel="noopener noreferrer">options配置官网<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/bar1.png" alt="图片">
<img src="@source/.vuepress/public/images/bar2.png" alt="图片"></p>
<p>bar-echart.vue
<img src="@source/.vuepress/public/images/bar3.png" alt="图片">
<img src="@source/.vuepress/public/images/bar4.png" alt="图片">
<img src="@source/.vuepress/public/images/bar5.png" alt="图片">
base-echart/index.ts  <strong>导出</strong>
<img src="@source/.vuepress/public/images/bar6.png" alt="图片">
dashboard.vue  <strong>使用 bar-echart组件</strong>
<img src="@source/.vuepress/public/images/bar7.png" alt="图片">
<img src="@source/.vuepress/public/images/bar8.png" alt="图片"></p>
<h2 id="map-echart-地图的封装" tabindex="-1"><a class="header-anchor" href="#map-echart-地图的封装" aria-hidden="true">#</a> map-echart 地图的封装</h2>
<p><img src="@source/.vuepress/public/images/mee.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/me1.png" alt="图片">
china.json在附件里</p>
<p>useEchart.ts
<img src="@source/.vuepress/public/images/me2.png" alt="图片">
<img src="@source/.vuepress/public/images/me3.png" alt="图片"></p>
<p><strong>下面附件</strong></p>
<p>map-echart.vue
<img src="@source/.vuepress/public/images/me6.png" alt="图片">
<img src="@source/.vuepress/public/images/me7.png" alt="图片">
<img src="@source/.vuepress/public/images/me8.png" alt="图片">
dashboard.vue  使用 map-echart 地图组件
<img src="@source/.vuepress/public/images/me00.png" alt="图片">
<img src="@source/.vuepress/public/images/me11.png" alt="图片"></p>
<h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>
<p>china.json</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "710000",
      "properties": {
        "id": "710000",
        "cp": [121.509062, 24.044332],
        "name": "台湾",
        "childNum": 6
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@°Ü¯Û"],
          [
            "@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿@ăƑ¥ĘWǬÏĶŁâ"
          ],
          ["@@\\p|WoYG¿¥Ij@¢"],
          ["@@¡@V^RqBbAnTXeRz¤L«³I"],
          ["@@ÆEEkWqë @"],
          ["@@fced"],
          ["@@¯ɜÄèaì¯ØǓIġĽ"],
          ["@@çûĖëĄhòř "]
        ],
        "encodeOffsets": [
          [[122886, 24033]],
          [[123335, 22980]],
          [[122375, 24193]],
          [[122518, 24117]],
          [[124427, 22618]],
          [[124862, 26043]],
          [[126259, 26318]],
          [[127671, 26683]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "130000",
      "properties": {
        "id": "130000",
        "cp": [114.502461, 38.045474],
        "name": "河北",
        "childNum": 3
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@o~Z]ªrºc_ħ²G¼s`jÎŸnüsÂłNX_M`Ç½ÓnUKĜēs¤­©yrý§uģcJe"],
          ["@@U`Ts¿mÂ"],
          [
            "@@oºƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäìë|³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝlNd®²Ğ ǆiGĘJ¼lr}~K¨ŸƐÌWöÆzR¤lêmĞLÎ@¡|q]SvKÑcwpÏÏĿćènĪWlĄkT}J¤~ÈTdpddʾĬBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âDùyŜŲIÄuĐ¨D¸dɂFOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏlTíb ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±´°^[À|ĠO@ÆxO\\ta\\tĕtû{ġȧXýĪÓjùÎRb^ÎfK[ÝděYfíÙTyuUSyŌŏů@Oi½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï"
          ]
        ],
        "encodeOffsets": [[[119712, 40641]], [[121616, 39981]], [[116462, 37237]]]
      }
    },
    {
      "type": "Feature",
      "id": "140000",
      "properties": {
        "id": "140000",
        "cp": [111.849248, 36.857014],
        "name": "山西",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ÞĩÒSra}ÁyWix±Üe´lèßÓǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£Pmc¸mQÝWďȥoÅîɡųAďä³aÏJ½¥PG­ąSM­EÅruµéYÓŌ_dĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ·Wµ|¡¥ăFÏs×¥ŅxÊdÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTŸʂōĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤Ðz"
        ],
        "encodeOffsets": [[116874, 41716]]
      }
    },
    {
      "type": "Feature",
      "id": "150000",
      "properties": {
        "id": "150000",
        "cp": [111.670801, 41.818311],
        "name": "内蒙古",
        "childNum": 2
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            "@@¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARë¥_sgÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉv¦wĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYLq§IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃOrÍdÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC£µsKCGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯YȵƓñǙµïċĻ|Düȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmǐnǔĎȆÞǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂc|ÀtƐK f{ĘFĒƌXƲąo½Ę\\¥o}Ûu£ç­kX{uĩ«āíÓUŅßŢqŤ¥lyň[oi{¦LńðFȪȖĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ġu¦öČ^â£ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\̀ʉÌÛMĀ[bÓEn}¶Vcês"
          ]
        ],
        "encodeOffsets": [[[129102, 52189]]]
      }
    },
    {
      "type": "Feature",
      "id": "210000",
      "properties": {
        "id": "210000",
        "cp": [123.429096, 41.796767],
        "name": "辽宁",
        "childNum": 16
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@L@@sa"],
          ["@@MnNm"],
          ["@@dc"],
          ["@@eÀC@b"],
          ["@@fXwkbrÄ`qg"],
          ["@@^jtWQ"],
          ["@@~ Y]c"],
          ["@@G`ĔN^_¿ZÃM"],
          ["@@iX¶BY"],
          ["@@YZ"],
          ["@@L_{Epf"],
          ["@@^WqCT\\"],
          ["@@\\[§t|¤_"],
          ["@@m`n_"],
          ["@@Ïxǌ{q_×^Giip"],
          [
            "@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅÎcPqńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRZk°IS§fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«zZf²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ÍOt¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ģÁFıĉĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EżĀdQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|Əlĳ¥ãn·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÃA"
          ]
        ],
        "encodeOffsets": [
          [[123686, 41445]],
          [[126019, 40435]],
          [[124393, 40128]],
          [[126117, 39963]],
          [[125322, 40140]],
          [[126686, 40700]],
          [[126041, 40374]],
          [[125584, 40168]],
          [[125453, 40165]],
          [[125362, 40214]],
          [[125280, 40291]],
          [[125774, 39997]],
          [[125976, 40496]],
          [[125822, 39993]],
          [[125509, 40217]],
          [[122731, 40949]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "220000",
      "properties": { "id": "220000", "cp": [125.3245, 43.886841], "name": "吉林", "childNum": 1 },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@pä³PClFbbÍzwBGĭZÅi»lY­ċ²SgkÇ£^Sqd¯R©é£¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ÛmTþ¤D²ÄufàÀ­XXÈ±AeyYw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǡű_°Õ\\ÚÊĝþâőàerR¨­JYlďQ[ ÏYëÐ§TGztnß¡gFkMāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUuP@vRY¾\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðævxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĀÖŠåưÎs­lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GMehccďÏd©ÑW_ÏYƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ýqT^rme\\PpZZbyuybQefµ]UhĿDCmûvaÙNSkCwncćfv~YÇG"
        ],
        "encodeOffsets": [[130196, 42528]]
      }
    },
    {
      "type": "Feature",
      "id": "230000",
      "properties": {
        "id": "230000",
        "cp": [128.642464, 46.756967],
        "name": "黑龙江",
        "childNum": 2
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            "@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Þ]"
          ]
        ],
        "encodeOffsets": [[[134456, 44547]]]
      }
    },
    {
      "type": "Feature",
      "id": "320000",
      "properties": {
        "id": "320000",
        "cp": [119.767413, 33.041544],
        "name": "江苏",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@cþÅPi`ZRu¥É\\]~°Y`µÓ^phÁbnÀşúòaĬºTÖŒbe¦¦{¸ZâćNp©Hr|^mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdfåqm¿QûùŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yxcitğ®jű¢KOķCoy`å®VTa­_Ā]ŐÝɞï²ʯÊ^]afYǸÃĆēĪȣJđ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌŕoēdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMü`oæŀ"
        ],
        "encodeOffsets": [[121740, 32276]]
      }
    },
    {
      "type": "Feature",
      "id": "330000",
      "properties": {
        "id": "330000",
        "cp": [120.153576, 29.287459],
        "name": "浙江",
        "childNum": 45
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@E^dQ]K"],
          ["@@jX^j"],
          ["@@sfbU"],
          ["@@qP\\xz[ck"],
          ["@@R¢FX}°[s_"],
          ["@@Cb\\}"],
          ["@@e|v\\la{u"],
          ["@@v~u}"],
          ["@@QxÂF¯}"],
          ["@@¹nvÞs¯o"],
          ["@@rSkUEj"],
          ["@@bi­ZP"],
          ["@@p[}INf"],
          ["@@À¿"],
          ["@@¹dnb"],
          ["@@rSBnR"],
          ["@@g~h}"],
          ["@@FlEk"],
          ["@@OdPc"],
          ["@@v[u\\"],
          ["@@FjâL~wyoo~sµL\\"],
          ["@@¬e¹aN"],
          ["@@\\nÔ¡q]L³ë\\ÿ®QÖ"],
          ["@@ÊA­©[¬"],
          ["@@Kxv­"],
          ["@@@hlIk]"],
          ["@@pW{o||j"],
          ["@@Md|_mC"],
          ["@@¢X£ÏylD¼XtH"],
          ["@@hlÜ[LykAvyfw^E¤"],
          ["@@fp¤MusR"],
          ["@@®_ma~LÁ¬Z"],
          ["@@iMxZ"],
          ["@@ZcYd"],
          ["@@Z~dOSo|A¿qZv"],
          ["@@@`EN¡v"],
          ["@@|TY{"],
          ["@@@n@m"],
          ["@@XWkCT\\"],
          ["@@ºwZRkĕWO¢"],
          ["@@X®±GrÆª\\ÔáXq{"],
          ["@@ůTG°ĄLHm°UC"],
          [
            "@@¤aÜx~}dtüGæţŎíĔcŖpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_Bıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŸīàLłčŴǝĂíÀBŖÕªÁŖHŗŉåqûõi¨hÜ·ñt»¹ýv_[«¸mYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xKd¡gěŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfåÂŧįƋǝÊĕġć£g³ne­ą»@­¦S®\\ßðChiqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ}þÙ]¡FKwsPlU[}¦Rvn`hq¬\\nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntuÖZÜÄjL®EÌFª²iÊxØ¨IÈhhst"
          ],
          ["@@o\\VzRZ}y"],
          ["@@@°¡mÛGĕ¨§Ianá[ýƤjfæØLäGr"]
        ],
        "encodeOffsets": [
          [[125592, 31553]],
          [[125785, 31436]],
          [[125729, 31431]],
          [[125513, 31380]],
          [[125223, 30438]],
          [[125115, 30114]],
          [[124815, 29155]],
          [[124419, 28746]],
          [[124095, 28635]],
          [[124005, 28609]],
          [[125000, 30713]],
          [[125111, 30698]],
          [[125078, 30682]],
          [[125150, 30684]],
          [[124014, 28103]],
          [[125008, 31331]],
          [[125411, 31468]],
          [[125329, 31479]],
          [[125626, 30916]],
          [[125417, 30956]],
          [[125254, 30976]],
          [[125199, 30997]],
          [[125095, 31058]],
          [[125083, 30915]],
          [[124885, 31015]],
          [[125218, 30798]],
          [[124867, 30838]],
          [[124755, 30788]],
          [[124802, 30809]],
          [[125267, 30657]],
          [[125218, 30578]],
          [[125200, 30562]],
          [[124968, 30474]],
          [[125167, 30396]],
          [[124955, 29879]],
          [[124714, 29781]],
          [[124762, 29462]],
          [[124325, 28754]],
          [[123990, 28459]],
          [[125366, 31477]],
          [[125115, 30363]],
          [[125369, 31139]],
          [[122495, 31878]],
          [[125329, 30690]],
          [[125192, 30787]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "340000",
      "properties": { "id": "340000", "cp": [117.283042, 31.26119], "name": "安徽", "childNum": 3 },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@^iuLX^"],
          ["@@e©Ehl"],
          [
            "@@°ZÆëĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|t^iĠGÀtÚsd]ĮÐDE¶zAb àiödK¡~H¸íæAǿYj{ď¿À½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mvˊBÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggJÇ§w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOjNÕËT¡¿tNæŇàåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏFlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbtHĔ~BmlRV_ħTLnñH±DL¼Lªl§Ťa¸ĚlK²\\RòvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóZ ň¶vHrľ\\ÊJuxAT|dmÀO[ÃÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálwKhïgA¢ųÆ©Þ¤OÈm°K´"
          ]
        ],
        "encodeOffsets": [[[121722, 32278]], [[119475, 30423]], [[119168, 35472]]]
      }
    },
    {
      "type": "Feature",
      "id": "350000",
      "properties": {
        "id": "350000",
        "cp": [118.306239, 26.075302],
        "name": "福建",
        "childNum": 18
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@zht´]"],
          ["@@aj^~ĆG©O"],
          ["@@ed¨C}}i"],
          ["@@@vPGsQ"],
          ["@@sBzddW]Q"],
          ["@@S¨Q{"],
          ["@@NVucW"],
          ["@@qptBAq"],
          ["@@¸[mu"],
          ["@@Q\\pD]_"],
          ["@@jSwUadpF"],
          ["@@eXª~"],
          ["@@AjvFso"],
          ["@@fT_Çí\\v|ba¦jZÆy°"],
          ["@@IjJi"],
          ["@@wJIx«¼AoNe{M­"],
          ["@@K±¡ÓČäeZ"],
          [
            "@@k¡¹Eh~c®wBkUplÀ¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧSW¥Qûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀEttĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮck\\_"
          ]
        ],
        "encodeOffsets": [
          [[123250, 27563]],
          [[122541, 27268]],
          [[123020, 27189]],
          [[122916, 27125]],
          [[122887, 26845]],
          [[122808, 26762]],
          [[122568, 25912]],
          [[122778, 26197]],
          [[122515, 26757]],
          [[122816, 26587]],
          [[123388, 27005]],
          [[122450, 26243]],
          [[122578, 25962]],
          [[121255, 25103]],
          [[120987, 24903]],
          [[122339, 25802]],
          [[121042, 25093]],
          [[122439, 26024]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "360000",
      "properties": {
        "id": "360000",
        "cp": [115.592151, 27.676493],
        "name": "江西",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ĢĨƐgļ¼ÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢûXD®QgÄWiØPÞìºr¤ǆNĠ¢lĄtZoCƞÔºCxrpĠV®Ê{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwȠĚ¦G®ǒĤäTŠÆ~Ħw«|TF¡nc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|ňÓMå¼ibµ¯»åDT±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýêPóqoě±_Êw§ÑªåƗā¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqss¿FūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[×zkKN¶Õ»lčÓ{XSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyáV¼Ã~­`gsÙfIƋlę¹e|~udjuTlXµf`¿Jd[\\L²"
        ],
        "encodeOffsets": [[116689, 26234]]
      }
    },
    {
      "type": "Feature",
      "id": "370000",
      "properties": {
        "id": "370000",
        "cp": [118.000923, 36.275807],
        "name": "山东",
        "childNum": 13
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@Xjd]{K"],
          ["@@itbFHy"],
          ["@@HlGk"],
          ["@@TGy"],
          ["@@K¬U"],
          ["@@WdXc"],
          ["@@PtOs"],
          ["@@LnXhc"],
          ["@@ppVu]Or"],
          ["@@cdzAUa"],
          ["@@udRhnCI"],
          ["@@oIpR"],
          [
            "@@Ľč{fzƤîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞEzVL®öØBkŖÝĐĖ¹ŧ̄±ÀbÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµ¾Z|ZWyFY¨Mf~C¿`à_RÇzwƌfQnny´INoƬèôº|sTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ïWuøCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£Č×GDyÃ¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛWp["
          ]
        ],
        "encodeOffsets": [
          [[123806, 39303]],
          [[123821, 39266]],
          [[123742, 39256]],
          [[123702, 39203]],
          [[123649, 39066]],
          [[123847, 38933]],
          [[123580, 38839]],
          [[123894, 37288]],
          [[123043, 36624]],
          [[123344, 38676]],
          [[123522, 38857]],
          [[123628, 38858]],
          [[118260, 36742]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "410000",
      "properties": {
        "id": "410000",
        "cp": [113.665412, 33.757975],
        "name": "河南",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ýLùµP³swIÓxcŢĞð´E®ÚPtĴXØxÂ¶@«ŕŕQGYfa[şußǩđš_X³ĳÕčC]kbc¥CS¯ëÍB©÷³­Si_}mYTt³xlàcČzÀD}ÂOQ³ÐTĨ¯ƗòËŖ[hłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`Ƴĕg}V¡om½faÇo³TTj¥tĠRyK{ùÓjuµ{t}uËRivGçJFjµÍyqÎàQÂFewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzËčľ^KLiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÀ«ìUMhTº¨¸ǡîSÔDruÂÇZÖEvPZW~ØÐtĄE¢¦Ðy¸bô´oŬ¬²Ês~]®tªapŎJ¨Öº_Ŕ`Ŗ^Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lGlRjsp¢ED}Fio~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼Pk|m"
        ],
        "encodeOffsets": [[118256, 37017]]
      }
    },
    {
      "type": "Feature",
      "id": "420000",
      "properties": {
        "id": "420000",
        "cp": [113.298572, 30.684355],
        "name": "湖北",
        "childNum": 3
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@AB"],
          ["@@lskt"],
          [
            "@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"
          ]
        ],
        "encodeOffsets": [[[113712, 34000]], [[115612, 30507]], [[113649, 34054]]]
      }
    },
    {
      "type": "Feature",
      "id": "430000",
      "properties": { "id": "430000", "cp": [111.782279, 28.09409], "name": "湖南", "childNum": 3 },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@nFTs"],
          ["@@ßÅÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇòAVM"],
          [
            "@@©KA·³CQ±Á«³BUƑ¹AtćOwD]JiØSm¯b£ylXHËÑ±H«C^õľAÅ§¤É¥ïyuǙuA¢^{ÌC´­¦ŷJ£^[ª¿ĕ~ƇN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąMąıuZmZcÒ ĲĪ²SÊǄŶ¨ƚCÖŎªQØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄ¢dVi`p˔vŎµªÉF~Ød¢ºgİàw¸Áb[¦Zb¦z½xBĖ@ªpºlS¸Ö\\Ĕ[N¥ˀmĎăJ\\ŀ`ňSÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M´wÀÒzJ²ò¨ oTçüöoÛÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©ò³I±³}_EÃħg®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþ¨[]f]Ņ©C}ÁN»hĻħƏĩ"
          ]
        ],
        "encodeOffsets": [[[115640, 30489]], [[112543, 27312]], [[116690, 26230]]]
      }
    },
    {
      "type": "Feature",
      "id": "440000",
      "properties": {
        "id": "440000",
        "cp": [113.280637, 23.125178],
        "name": "广东",
        "childNum": 24
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@QdAua"],
          ["@@lxDLo"],
          ["@@sbhNLo"],
          ["@@Ă ā"],
          ["@@WltO[["],
          ["@@Kr]S"],
          ["@@eI]y"],
          ["@@I|Mym"],
          ["@@Û³LS¼Y"],
          ["@@nvºBëui©`¾"],
          ["@@zdÛJw®"],
          ["@@°¯"],
          ["@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo"],
          ["@@sŗÃÔėAƁZÄ ~°ČPäh"],
          ["@@¶ÝÌvmĞh­ıQ"],
          ["@@HdSjĒ¢D}waru«ZqadYM"],
          ["@@el\\LqqU"],
          ["@@~rMo\\"],
          ["@@f^C"],
          ["@@øPªoj÷ÍÝħXČx°Q¨ıXNv"],
          ["@@gÇƳo[~tly"],
          ["@@EÆC¿"],
          ["@@OP"],
          [
            "@@wđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCőâUâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿Çdğ·ùTßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěi"
          ]
        ],
        "encodeOffsets": [
          [[117381, 22988]],
          [[116552, 22934]],
          [[116790, 22617]],
          [[116973, 22545]],
          [[116444, 22536]],
          [[116931, 22515]],
          [[116496, 22490]],
          [[116453, 22449]],
          [[113301, 21439]],
          [[118726, 21604]],
          [[118709, 21486]],
          [[113210, 20816]],
          [[115482, 22082]],
          [[113171, 21585]],
          [[113199, 21590]],
          [[115232, 22102]],
          [[115739, 22373]],
          [[115134, 22184]],
          [[113056, 21175]],
          [[119573, 21271]],
          [[119957, 24020]],
          [[115859, 22356]],
          [[116561, 22649]],
          [[116285, 22746]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "450000",
      "properties": { "id": "450000", "cp": [108.320004, 22.82402], "name": "广西", "childNum": 2 },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@H TQ§A"],
          [
            "@@ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucà÷gÕuíÙćĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűmcih³K~µh¯e]lµélEģEďsmÇŧē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²"
          ]
        ],
        "encodeOffsets": [[[111707, 21520]], [[107619, 25527]]]
      }
    },
    {
      "type": "Feature",
      "id": "460000",
      "properties": { "id": "460000", "cp": [109.83119, 19.031971], "name": "海南", "childNum": 1 },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ "
        ],
        "encodeOffsets": [[112750, 20508]]
      }
    },
    {
      "type": "Feature",
      "id": "510000",
      "properties": {
        "id": "510000",
        "cp": [104.065735, 30.659462],
        "name": "四川",
        "childNum": 2
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@LqKr"],
          [
            "@@[ĻéV£_ţġñpG réÏ·~ąSfy×Í·ºſƽiÍıƣıĻmHH}siaX@iÇ°ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©ĈtCĢɽŠȣ¦āæ·HĽîôNÔ~^¤Ɗu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞŒQìÛÐ@ĞǎRS¤Á§di´ezÝúØã]HqkIþËQÇ¦ÃsÇ¤[E¬ÉŪÍxXƒ·ÖƁİlƞ¹ª¹|XÊwnÆƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§áCNęÎ[ĀÕĪgÖÉªXøx¬½Ů¦¦[NÎLÜUÖ´òrÙŠxR^JkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû^"
          ]
        ],
        "encodeOffsets": [[[108815, 30935]], [[110617, 31811]]]
      }
    },
    {
      "type": "Feature",
      "id": "520000",
      "properties": {
        "id": "520000",
        "cp": [106.713478, 26.578343],
        "name": "贵州",
        "childNum": 3
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@G\\lY£in"],
          ["@@q|mc¯tÏVSÎ"],
          [
            "@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxŪÒ¢@£ÀEîôruńb[§nWuMÆLl¿]x}ĳ­½"
          ]
        ],
        "encodeOffsets": [[[112158, 27383]], [[112105, 27474]], [[112095, 27476]]]
      }
    },
    {
      "type": "Feature",
      "id": "530000",
      "properties": {
        "id": "530000",
        "cp": [101.512251, 24.740609],
        "name": "云南",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ë}ǝeďºȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZï`"
        ],
        "encodeOffsets": [[104636, 22969]]
      }
    },
    {
      "type": "Feature",
      "id": "540000",
      "properties": { "id": "540000", "cp": [89.132212, 30.860361], "name": "西藏", "childNum": 1 },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥cc¡ÙaSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó´ÇĊµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"
        ],
        "encodeOffsets": [[90849, 37210]]
      }
    },
    {
      "type": "Feature",
      "id": "610000",
      "properties": {
        "id": "610000",
        "cp": [108.948024, 34.263161],
        "name": "陕西",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@p¢ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYǠȰÌTÎ¨ÂW|fcă§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷY¹W@µ÷Kãï³ÛIcñ·VȋÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ċcEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOÿEËßŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ßå¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙgBƕŀrÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|§hoĕ@E±iYd¥OĻ¹S|}F@¾oAO²{tfÜ¢FǂÒW²°BĤh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«Y§@·pHµàåVKepWftsAÅqC·¬ko«pHÆuK@oHĆÛķhxenS³àǍrqƶRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSj"
        ],
        "encodeOffsets": [[110234, 38774]]
      }
    },
    {
      "type": "Feature",
      "id": "620000",
      "properties": {
        "id": "620000",
        "cp": [103.823557, 36.058039],
        "name": "甘肃",
        "childNum": 2
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@VuUv"],
          [
            "@@ũEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡ĨÒ¤úSHbjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­Kq´ï¦ºĒǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PĤoH{tK"
          ]
        ],
        "encodeOffsets": [[[108619, 36299]], [[108589, 36341]]]
      }
    },
    {
      "type": "Feature",
      "id": "630000",
      "properties": { "id": "630000", "cp": [96.778916, 35.623178], "name": "青海", "childNum": 2 },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@InJm"],
          [
            "@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qĉ¶³ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveOg"
          ]
        ],
        "encodeOffsets": [[[105308, 37219]], [[95370, 40081]]]
      }
    },
    {
      "type": "Feature",
      "id": "640000",
      "properties": { "id": "640000", "cp": [106.278179, 37.26637], "name": "宁夏", "childNum": 2 },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            "@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjÕ"
          ],
          ["@@mfwěwMrŢªv@G"]
        ],
        "encodeOffsets": [[[109366, 40242]], [[108600, 36303]]]
      }
    },
    {
      "type": "Feature",
      "id": "650000",
      "properties": { "id": "650000", "cp": [85.617733, 40.792818], "name": "新疆", "childNum": 1 },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ¹đ¥³ðLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw[mG½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³àjĨoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãØ"
        ],
        "encodeOffsets": [[88824, 50096]]
      }
    },
    {
      "type": "Feature",
      "id": "110000",
      "properties": {
        "id": "110000",
        "cp": [116.405285, 39.904989],
        "name": "北京",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ĽOÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßcÂ±x¯oœRcfe£o§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯rNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚSeîĜZczî¾i]ÍQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¥A¨ÏÑ¨j¯X\\¯MKpA³[Hīu}}"
        ],
        "encodeOffsets": [[120023, 41045]]
      }
    },
    {
      "type": "Feature",
      "id": "120000",
      "properties": {
        "id": "120000",
        "cp": [117.190182, 39.125596],
        "name": "天津",
        "childNum": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥îakS¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZŏR§òoY×Ógcĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"
        ],
        "encodeOffsets": [[120237, 41215]]
      }
    },
    {
      "type": "Feature",
      "id": "310000",
      "properties": {
        "id": "310000",
        "cp": [121.472644, 31.231706],
        "name": "上海",
        "childNum": 6
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@ɧư¬EpƸÁxc"],
          ["@@©ª"],
          ["@@MA"],
          ["@@QpİE§ÉC¾"],
          ["@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÃƌÃ͎ó"],
          ["@@ǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚhr|ǀ^MĲvtbe´R¯Ô¬¨Yô¤r]ìƬį"]
        ],
        "encodeOffsets": [
          [[124702, 32062]],
          [[124547, 32200]],
          [[124808, 31991]],
          [[124726, 32110]],
          [[124903, 32376]],
          [[124438, 32149]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "500000",
      "properties": {
        "id": "500000",
        "cp": [107.304962, 29.533155],
        "name": "重庆",
        "childNum": 2
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            "@@vjG~nGŘŬĶȂƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÖ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMûƱ½~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƅġ^ÖÛbÙŽŏml½SêqDu[RãË»ÿw`»y¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg`d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëĬhxW}KÓe­XsbkF¦LØgTkïƵNï¶}Gyw\\oñ¡nmĈzj@Óc£»Wă¹Ój_m»¹·~MvÛaq»­ê\\ÂoVnÓØÍ²«bq¿efE Ĝ^Q~ Évýş¤²ĮpEİ}zcĺL½¿gÅ¡ýE¡ya£³t\\¨\\vú»¼§·Ñr_oÒý¥u_n»_At©ÞÅ±ā§IVeëY}{VPÀFA¨ąB}q@|Ou\\FmQFÝMwå}]|FmÏCawu_p¯sfÙgYDHl`{QEfNysB¦zG¸rHeN\\CvEsÐùÜ_·ÖĉsaQ¯}_UxÃđqNH¬Äd^ÝŰR¬ã°wećJE·vÝ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼£N"
          ],
          ["@@ifjN@s"]
        ],
        "encodeOffsets": [[[109628, 30765]], [[111725, 31320]]]
      }
    },
    {
      "type": "Feature",
      "id": "810000",
      "properties": {
        "id": "810000",
        "cp": [114.173355, 22.320048],
        "name": "香港",
        "childNum": 5
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@AlBk"],
          ["@@mn"],
          ["@@EpFo"],
          ["@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÈc"],
          ["@@rMUwAS®e"]
        ],
        "encodeOffsets": [
          [[117111, 23002]],
          [[117072, 22876]],
          [[117045, 22887]],
          [[116975, 23082]],
          [[116882, 22747]]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "820000",
      "properties": { "id": "820000", "cp": [113.54909, 22.198951], "name": "澳门", "childNum": 1 },
      "geometry": {
        "type": "Polygon",
        "coordinates": ["@@kÊd°å§s"],
        "encodeOffsets": [[116279, 22639]]
      }
    }
  ],
  "UTF8Encoding": true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br><span class="line-number">804</span><br><span class="line-number">805</span><br><span class="line-number">806</span><br><span class="line-number">807</span><br><span class="line-number">808</span><br><span class="line-number">809</span><br><span class="line-number">810</span><br><span class="line-number">811</span><br><span class="line-number">812</span><br><span class="line-number">813</span><br><span class="line-number">814</span><br><span class="line-number">815</span><br><span class="line-number">816</span><br><span class="line-number">817</span><br><span class="line-number">818</span><br><span class="line-number">819</span><br><span class="line-number">820</span><br><span class="line-number">821</span><br><span class="line-number">822</span><br><span class="line-number">823</span><br><span class="line-number">824</span><br><span class="line-number">825</span><br><span class="line-number">826</span><br><span class="line-number">827</span><br><span class="line-number">828</span><br><span class="line-number">829</span><br><span class="line-number">830</span><br><span class="line-number">831</span><br><span class="line-number">832</span><br><span class="line-number">833</span><br><span class="line-number">834</span><br><span class="line-number">835</span><br><span class="line-number">836</span><br><span class="line-number">837</span><br><span class="line-number">838</span><br><span class="line-number">839</span><br><span class="line-number">840</span><br><span class="line-number">841</span><br><span class="line-number">842</span><br><span class="line-number">843</span><br><span class="line-number">844</span><br><span class="line-number">845</span><br><span class="line-number">846</span><br><span class="line-number">847</span><br><span class="line-number">848</span><br><span class="line-number">849</span><br><span class="line-number">850</span><br><span class="line-number">851</span><br><span class="line-number">852</span><br><span class="line-number">853</span><br><span class="line-number">854</span><br><span class="line-number">855</span><br><span class="line-number">856</span><br></div></div><p>convert-data.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> coordinateData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./coordinate-data"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">convertData</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> geoCoord <span class="token operator">=</span> coordinateData<span class="token punctuation">[</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>geoCoord<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
        value<span class="token operator">:</span> geoCoord<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>coordinate-data.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> coordinateData<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  海门<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.15</span><span class="token punctuation">,</span> <span class="token number">31.89</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  鄂尔多斯<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.781327</span><span class="token punctuation">,</span> <span class="token number">39.608266</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  招远<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.38</span><span class="token punctuation">,</span> <span class="token number">37.35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  舟山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.207216</span><span class="token punctuation">,</span> <span class="token number">29.985295</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  齐齐哈尔<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123.97</span><span class="token punctuation">,</span> <span class="token number">47.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  盐城<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.13</span><span class="token punctuation">,</span> <span class="token number">33.38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  赤峰<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.87</span><span class="token punctuation">,</span> <span class="token number">42.28</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  青岛<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.33</span><span class="token punctuation">,</span> <span class="token number">36.07</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  乳山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.52</span><span class="token punctuation">,</span> <span class="token number">36.89</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  金昌<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">102.188043</span><span class="token punctuation">,</span> <span class="token number">38.520089</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  泉州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.58</span><span class="token punctuation">,</span> <span class="token number">24.93</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  莱西<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.53</span><span class="token punctuation">,</span> <span class="token number">36.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  日照<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.46</span><span class="token punctuation">,</span> <span class="token number">35.42</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  胶南<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.97</span><span class="token punctuation">,</span> <span class="token number">35.88</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  南通<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.05</span><span class="token punctuation">,</span> <span class="token number">32.08</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  拉萨<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">91.11</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  云浮<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.02</span><span class="token punctuation">,</span> <span class="token number">22.93</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  梅州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.1</span><span class="token punctuation">,</span> <span class="token number">24.55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  文登<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.05</span><span class="token punctuation">,</span> <span class="token number">37.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  上海<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.48</span><span class="token punctuation">,</span> <span class="token number">31.22</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  攀枝花<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">101.718637</span><span class="token punctuation">,</span> <span class="token number">26.582347</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  威海<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.1</span><span class="token punctuation">,</span> <span class="token number">37.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  承德<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.93</span><span class="token punctuation">,</span> <span class="token number">40.97</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  厦门<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.1</span><span class="token punctuation">,</span> <span class="token number">24.46</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  汕尾<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.375279</span><span class="token punctuation">,</span> <span class="token number">22.786211</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  潮州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.63</span><span class="token punctuation">,</span> <span class="token number">23.68</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  丹东<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">124.37</span><span class="token punctuation">,</span> <span class="token number">40.13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  太仓<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.1</span><span class="token punctuation">,</span> <span class="token number">31.45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  曲靖<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">103.79</span><span class="token punctuation">,</span> <span class="token number">25.51</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  烟台<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.39</span><span class="token punctuation">,</span> <span class="token number">37.52</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  福州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.3</span><span class="token punctuation">,</span> <span class="token number">26.08</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  瓦房店<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.979603</span><span class="token punctuation">,</span> <span class="token number">39.627114</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  即墨<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.45</span><span class="token punctuation">,</span> <span class="token number">36.38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  抚顺<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123.97</span><span class="token punctuation">,</span> <span class="token number">41.97</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  玉溪<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">102.52</span><span class="token punctuation">,</span> <span class="token number">24.35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  张家口<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.87</span><span class="token punctuation">,</span> <span class="token number">40.82</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  阳泉<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.57</span><span class="token punctuation">,</span> <span class="token number">37.85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  莱州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.942327</span><span class="token punctuation">,</span> <span class="token number">37.177017</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  湖州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.1</span><span class="token punctuation">,</span> <span class="token number">30.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  汕头<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.69</span><span class="token punctuation">,</span> <span class="token number">23.39</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  昆山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.95</span><span class="token punctuation">,</span> <span class="token number">31.39</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宁波<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.56</span><span class="token punctuation">,</span> <span class="token number">29.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  湛江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.359377</span><span class="token punctuation">,</span> <span class="token number">21.270708</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  揭阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.35</span><span class="token punctuation">,</span> <span class="token number">23.55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  荣成<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.41</span><span class="token punctuation">,</span> <span class="token number">37.16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  连云港<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.16</span><span class="token punctuation">,</span> <span class="token number">34.59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  葫芦岛<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.836932</span><span class="token punctuation">,</span> <span class="token number">40.711052</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  常熟<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.74</span><span class="token punctuation">,</span> <span class="token number">31.64</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  东莞<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.75</span><span class="token punctuation">,</span> <span class="token number">23.04</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  河源<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.68</span><span class="token punctuation">,</span> <span class="token number">23.73</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  淮安<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.15</span><span class="token punctuation">,</span> <span class="token number">33.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  泰州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.9</span><span class="token punctuation">,</span> <span class="token number">32.49</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  南宁<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">108.33</span><span class="token punctuation">,</span> <span class="token number">22.84</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  营口<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.18</span><span class="token punctuation">,</span> <span class="token number">40.65</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  惠州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.4</span><span class="token punctuation">,</span> <span class="token number">23.09</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  江阴<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.26</span><span class="token punctuation">,</span> <span class="token number">31.91</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  蓬莱<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.75</span><span class="token punctuation">,</span> <span class="token number">37.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  韶关<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.62</span><span class="token punctuation">,</span> <span class="token number">24.84</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  嘉峪关<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">98.289152</span><span class="token punctuation">,</span> <span class="token number">39.77313</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  广州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.23</span><span class="token punctuation">,</span> <span class="token number">23.16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  延安<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.47</span><span class="token punctuation">,</span> <span class="token number">36.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  太原<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.53</span><span class="token punctuation">,</span> <span class="token number">37.87</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  清远<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.01</span><span class="token punctuation">,</span> <span class="token number">23.7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  中山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.38</span><span class="token punctuation">,</span> <span class="token number">22.52</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  昆明<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">102.73</span><span class="token punctuation">,</span> <span class="token number">25.04</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  寿光<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.73</span><span class="token punctuation">,</span> <span class="token number">36.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  盘锦<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.070714</span><span class="token punctuation">,</span> <span class="token number">41.119997</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  长治<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.08</span><span class="token punctuation">,</span> <span class="token number">36.18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  深圳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.07</span><span class="token punctuation">,</span> <span class="token number">22.62</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  珠海<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.52</span><span class="token punctuation">,</span> <span class="token number">22.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宿迁<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.3</span><span class="token punctuation">,</span> <span class="token number">33.96</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  咸阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">108.72</span><span class="token punctuation">,</span> <span class="token number">34.36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  铜川<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.11</span><span class="token punctuation">,</span> <span class="token number">35.09</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  平度<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.97</span><span class="token punctuation">,</span> <span class="token number">36.77</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  佛山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.11</span><span class="token punctuation">,</span> <span class="token number">23.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  海口<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.35</span><span class="token punctuation">,</span> <span class="token number">20.02</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  江门<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.06</span><span class="token punctuation">,</span> <span class="token number">22.61</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  章丘<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.53</span><span class="token punctuation">,</span> <span class="token number">36.72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  肇庆<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.44</span><span class="token punctuation">,</span> <span class="token number">23.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  大连<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.62</span><span class="token punctuation">,</span> <span class="token number">38.92</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  临汾<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.5</span><span class="token punctuation">,</span> <span class="token number">36.08</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  吴江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.63</span><span class="token punctuation">,</span> <span class="token number">31.16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  石嘴山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.39</span><span class="token punctuation">,</span> <span class="token number">39.04</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  沈阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123.38</span><span class="token punctuation">,</span> <span class="token number">41.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  苏州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.62</span><span class="token punctuation">,</span> <span class="token number">31.32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  茂名<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.88</span><span class="token punctuation">,</span> <span class="token number">21.68</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  嘉兴<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.76</span><span class="token punctuation">,</span> <span class="token number">30.77</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  长春<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">125.35</span><span class="token punctuation">,</span> <span class="token number">43.88</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  胶州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.03336</span><span class="token punctuation">,</span> <span class="token number">36.264622</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  银川<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.27</span><span class="token punctuation">,</span> <span class="token number">38.47</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  张家港<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.555821</span><span class="token punctuation">,</span> <span class="token number">31.875428</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  三门峡<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.19</span><span class="token punctuation">,</span> <span class="token number">34.76</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  锦州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.15</span><span class="token punctuation">,</span> <span class="token number">41.13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  南昌<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.89</span><span class="token punctuation">,</span> <span class="token number">28.68</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  柳州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.4</span><span class="token punctuation">,</span> <span class="token number">24.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  三亚<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.511909</span><span class="token punctuation">,</span> <span class="token number">18.252847</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  自贡<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.778442</span><span class="token punctuation">,</span> <span class="token number">29.33903</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  吉林<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">126.57</span><span class="token punctuation">,</span> <span class="token number">43.87</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  阳江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.95</span><span class="token punctuation">,</span> <span class="token number">21.85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  泸州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">105.39</span><span class="token punctuation">,</span> <span class="token number">28.91</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  西宁<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">101.74</span><span class="token punctuation">,</span> <span class="token number">36.56</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宜宾<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.56</span><span class="token punctuation">,</span> <span class="token number">29.77</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  呼和浩特<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.65</span><span class="token punctuation">,</span> <span class="token number">40.82</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  成都<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.06</span><span class="token punctuation">,</span> <span class="token number">30.67</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  大同<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.3</span><span class="token punctuation">,</span> <span class="token number">40.12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  镇江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.44</span><span class="token punctuation">,</span> <span class="token number">32.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  桂林<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.28</span><span class="token punctuation">,</span> <span class="token number">25.29</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  张家界<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110.479191</span><span class="token punctuation">,</span> <span class="token number">29.117096</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宜兴<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.82</span><span class="token punctuation">,</span> <span class="token number">31.36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  北海<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.12</span><span class="token punctuation">,</span> <span class="token number">21.49</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  西安<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">108.95</span><span class="token punctuation">,</span> <span class="token number">34.27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  金坛<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.56</span><span class="token punctuation">,</span> <span class="token number">31.74</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  东营<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.49</span><span class="token punctuation">,</span> <span class="token number">37.46</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  牡丹江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">129.58</span><span class="token punctuation">,</span> <span class="token number">44.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  遵义<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.9</span><span class="token punctuation">,</span> <span class="token number">27.7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  绍兴<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.58</span><span class="token punctuation">,</span> <span class="token number">30.01</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  扬州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.42</span><span class="token punctuation">,</span> <span class="token number">32.39</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  常州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.95</span><span class="token punctuation">,</span> <span class="token number">31.79</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  潍坊<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.1</span><span class="token punctuation">,</span> <span class="token number">36.62</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  重庆<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.54</span><span class="token punctuation">,</span> <span class="token number">29.59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  台州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">121.420757</span><span class="token punctuation">,</span> <span class="token number">28.656386</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  南京<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.78</span><span class="token punctuation">,</span> <span class="token number">32.04</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  滨州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.03</span><span class="token punctuation">,</span> <span class="token number">37.36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  贵阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.71</span><span class="token punctuation">,</span> <span class="token number">26.57</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  无锡<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.29</span><span class="token punctuation">,</span> <span class="token number">31.59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  本溪<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123.73</span><span class="token punctuation">,</span> <span class="token number">41.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  克拉玛依<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">84.77</span><span class="token punctuation">,</span> <span class="token number">45.59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  渭南<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">109.5</span><span class="token punctuation">,</span> <span class="token number">34.52</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  马鞍山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.48</span><span class="token punctuation">,</span> <span class="token number">31.56</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宝鸡<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">107.15</span><span class="token punctuation">,</span> <span class="token number">34.38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  焦作<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.21</span><span class="token punctuation">,</span> <span class="token number">35.24</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  句容<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.16</span><span class="token punctuation">,</span> <span class="token number">31.95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  北京<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.46</span><span class="token punctuation">,</span> <span class="token number">39.92</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  徐州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.2</span><span class="token punctuation">,</span> <span class="token number">34.26</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  衡水<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.72</span><span class="token punctuation">,</span> <span class="token number">37.72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  包头<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">40.58</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  绵阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.73</span><span class="token punctuation">,</span> <span class="token number">31.48</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  乌鲁木齐<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">87.68</span><span class="token punctuation">,</span> <span class="token number">43.77</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  枣庄<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.57</span><span class="token punctuation">,</span> <span class="token number">34.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  杭州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.19</span><span class="token punctuation">,</span> <span class="token number">30.26</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  淄博<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.05</span><span class="token punctuation">,</span> <span class="token number">36.78</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  鞍山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">122.85</span><span class="token punctuation">,</span> <span class="token number">41.12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  溧阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.48</span><span class="token punctuation">,</span> <span class="token number">31.43</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  库尔勒<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">86.06</span><span class="token punctuation">,</span> <span class="token number">41.68</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  安阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.35</span><span class="token punctuation">,</span> <span class="token number">36.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  开封<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.35</span><span class="token punctuation">,</span> <span class="token number">34.79</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  济南<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117</span><span class="token punctuation">,</span> <span class="token number">36.65</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  德阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.37</span><span class="token punctuation">,</span> <span class="token number">31.13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  温州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.65</span><span class="token punctuation">,</span> <span class="token number">28.01</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  九江<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.97</span><span class="token punctuation">,</span> <span class="token number">29.71</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  邯郸<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.47</span><span class="token punctuation">,</span> <span class="token number">36.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  临安<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.72</span><span class="token punctuation">,</span> <span class="token number">30.23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  兰州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">103.73</span><span class="token punctuation">,</span> <span class="token number">36.03</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  沧州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.83</span><span class="token punctuation">,</span> <span class="token number">38.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  临沂<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.35</span><span class="token punctuation">,</span> <span class="token number">35.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  南充<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">106.110698</span><span class="token punctuation">,</span> <span class="token number">30.837793</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  天津<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.2</span><span class="token punctuation">,</span> <span class="token number">39.13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  富阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.95</span><span class="token punctuation">,</span> <span class="token number">30.07</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  泰安<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.13</span><span class="token punctuation">,</span> <span class="token number">36.18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  诸暨<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.23</span><span class="token punctuation">,</span> <span class="token number">29.71</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  郑州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.65</span><span class="token punctuation">,</span> <span class="token number">34.76</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  哈尔滨<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">126.63</span><span class="token punctuation">,</span> <span class="token number">45.75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  聊城<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.97</span><span class="token punctuation">,</span> <span class="token number">36.45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  芜湖<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.38</span><span class="token punctuation">,</span> <span class="token number">31.33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  唐山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.02</span><span class="token punctuation">,</span> <span class="token number">39.63</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  平顶山<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.29</span><span class="token punctuation">,</span> <span class="token number">33.75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  邢台<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.48</span><span class="token punctuation">,</span> <span class="token number">37.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  德州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.29</span><span class="token punctuation">,</span> <span class="token number">37.45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  济宁<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.59</span><span class="token punctuation">,</span> <span class="token number">35.38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  荆州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.239741</span><span class="token punctuation">,</span> <span class="token number">30.335165</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  宜昌<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.3</span><span class="token punctuation">,</span> <span class="token number">30.7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  义乌<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.06</span><span class="token punctuation">,</span> <span class="token number">29.32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  丽水<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.92</span><span class="token punctuation">,</span> <span class="token number">28.45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  洛阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.44</span><span class="token punctuation">,</span> <span class="token number">34.7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  秦皇岛<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.57</span><span class="token punctuation">,</span> <span class="token number">39.95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  株洲<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.16</span><span class="token punctuation">,</span> <span class="token number">27.83</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  石家庄<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.48</span><span class="token punctuation">,</span> <span class="token number">38.03</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  莱芜<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.67</span><span class="token punctuation">,</span> <span class="token number">36.19</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  常德<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">111.69</span><span class="token punctuation">,</span> <span class="token number">29.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  保定<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.48</span><span class="token punctuation">,</span> <span class="token number">38.85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  湘潭<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">112.91</span><span class="token punctuation">,</span> <span class="token number">27.87</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  金华<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.64</span><span class="token punctuation">,</span> <span class="token number">29.12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  岳阳<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.09</span><span class="token punctuation">,</span> <span class="token number">29.37</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  长沙<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113</span><span class="token punctuation">,</span> <span class="token number">28.21</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  衢州<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.88</span><span class="token punctuation">,</span> <span class="token number">28.97</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  廊坊<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.7</span><span class="token punctuation">,</span> <span class="token number">39.53</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  菏泽<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">115.480656</span><span class="token punctuation">,</span> <span class="token number">35.23375</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  合肥<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">117.27</span><span class="token punctuation">,</span> <span class="token number">31.86</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  武汉<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.31</span><span class="token punctuation">,</span> <span class="token number">30.52</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  大庆<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">125.03</span><span class="token punctuation">,</span> <span class="token number">46.58</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br></div></div></template>
