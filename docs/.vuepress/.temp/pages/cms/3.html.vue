<template><h1 id="项目-3" tabindex="-1"><a class="header-anchor" href="#项目-3" aria-hidden="true">#</a> 项目 3</h1>
<h2 id="用户页-hyform-的基本封装" tabindex="-1"><a class="header-anchor" href="#用户页-hyform-的基本封装" aria-hidden="true">#</a> 用户页 - HyForm 的基本封装</h2>
<p>使用时通过 props 传的是 配置选项数组</p>
<p><img src="@source/.vuepress/public/images/hyform.png" alt="图片"></p>
<p><img src="@source/.vuepress/public/images/baseui.png" alt="图片"></p>
<ul>
<li>base-ui/types/index.ts  HyForm组件的 props 配置选项数组的 IFormItems ts类型</li>
</ul>
<p><img src="@source/.vuepress/public/images/fts.png" alt="图片"></p>
<ul>
<li>user.vue  props 传的是 IFormItems[] 数组</li>
</ul>
<p><img src="@source/.vuepress/public/images/hf1.png" alt="图片">
<img src="@source/.vuepress/public/images/hf2.png" alt="图片"></p>
<ul>
<li>base-ui/src/form.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/form1.png" alt="图片">
<img src="@source/.vuepress/public/images/form2.png" alt="图片"></p>
<h2 id="用户页-hyform的其他-props-封装和配置文件" tabindex="-1"><a class="header-anchor" href="#用户页-hyform的其他-props-封装和配置文件" aria-hidden="true">#</a> 用户页 - HyForm的其他 props 封装和配置文件</h2>
<ul>
<li>
<p>form.vue 其他的 props
<img src="@source/.vuepress/public/images/fp1.png" alt="图片">
<img src="@source/.vuepress/public/images/fp2.png" alt="图片"></p>
</li>
<li>
<p>base-ui/types/index.ts
<img src="@source/.vuepress/public/images/peizhileixing.png" alt="图片"></p>
</li>
<li>
<p>user.vue  使用组件
<img src="@source/.vuepress/public/images/user55.png" alt="图片"></p>
</li>
</ul>
<p>当然 searchFormConfig 配置对象可以单独抽出来 , 放在一个配置文件中即可
<img src="@source/.vuepress/public/images/sc1.png" alt="图片">
<img src="@source/.vuepress/public/images/sc8.png" alt="图片"></p>
<p>直接导入配置文件即可
<img src="@source/.vuepress/public/images/sc9.png" alt="图片"></p>
</template>
