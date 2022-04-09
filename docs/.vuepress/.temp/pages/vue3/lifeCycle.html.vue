<template><h1 id="vue3中的生命周期" tabindex="-1"><a class="header-anchor" href="#vue3中的生命周期" aria-hidden="true">#</a> Vue3中的生命周期</h1>
<h2 id="_1-beforecreate-与-created" tabindex="-1"><a class="header-anchor" href="#_1-beforecreate-与-created" aria-hidden="true">#</a> 1. beforeCreate 与 created</h2>
<blockquote>
<p>beforeCreate</p>
</blockquote>
<p>会在组件被初始化、 <code>props</code> 解析后的那一刻、且是处理其他如 <code>data()</code> 或 <code>computed</code>之类的属性之前被立刻调用。</p>
<p>注意，组合式 API 的 <code>setup()</code> 钩子会在任何选项式 API 钩子之前调用，即使是 beforeCreate()。</p>
<blockquote>
<p>created</p>
</blockquote>
</template>
