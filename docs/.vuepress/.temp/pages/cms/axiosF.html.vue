<template><h1 id="axios-封装" tabindex="-1"><a class="header-anchor" href="#axios-封装" aria-hidden="true">#</a> axios 封装</h1>
<p>创建HYRequest类 , 这个类允许别人创建多个axios实例(默认是一个)  new HYRequest(config) =&gt; 对象</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service 
|-- request 
      index.ts
|--index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="hyrequest类最基本封装" tabindex="-1"><a class="header-anchor" href="#hyrequest类最基本封装" aria-hidden="true">#</a> HYRequest类最基本封装</h2>
<p>在 constructor 里axios.create(config)创建实例。目的是为了在外面传入不同的配置的时候 , 每次会创造新的axios实例</p>
<ul>
<li>request/index.ts
<img src="@source/.vuepress/public/images/HYRequest.png" alt="图片">
service/index.ts  创建实例
<img src="@source/.vuepress/public/images/req.png" alt="图片"></li>
</ul>
<h2 id="hyrequest请求config拦截器的封装" tabindex="-1"><a class="header-anchor" href="#hyrequest请求config拦截器的封装" aria-hidden="true">#</a> HYRequest请求config拦截器的封装</h2>
<p>希望在new一个axios对象并传入 config 的时候 , 想要传入自定义的拦截器, 如下图
<img src="@source/.vuepress/public/images/inters.png" alt="图片"></p>
<ul>
<li>request/index.ts</li>
</ul>
<p><img src="@source/.vuepress/public/images/inters1.png" alt="图片">
<img src="@source/.vuepress/public/images/inters2.png" alt="图片"></p>
<h2 id="封装全局的拦截器和-request-单独的拦截器" tabindex="-1"><a class="header-anchor" href="#封装全局的拦截器和-request-单独的拦截器" aria-hidden="true">#</a> 封装全局的拦截器和 request 单独的拦截器</h2>
<ul>
<li>封装每个实例都拥有的拦截器</li>
<li>axios实例.request(config) 中想要在 config 里配置单独的拦截器 (如下图)</li>
</ul>
<p><img src="@source/.vuepress/public/images/alone.png" alt="图片"></p>
<p>封装</p>
<ul>
<li>request/index.ts
<img src="@source/.vuepress/public/images/all6.png" alt="图片">
<img src="@source/.vuepress/public/images/small.png" alt="图片"></li>
</ul>
<h2 id="拦截器的应用-token-data-error" tabindex="-1"><a class="header-anchor" href="#拦截器的应用-token-data-error" aria-hidden="true">#</a> 拦截器的应用 token-data-error</h2>
<ul>
<li>携带 token 的拦截</li>
</ul>
<p>请求都会拦截一下, 先获取一下token, 如过有token的情况下, 把token自动给他携带过去 , 这就意味着我以后的请求自动会携带token的
<img src="@source/.vuepress/public/images/rtoken.png" alt="图片"></p>
<ul>
<li>data</li>
</ul>
<p>这是axios内部自己封装的对象(如下图) , 真正的数据会在 data 属性里面
<img src="@source/.vuepress/public/images/response7.png" alt="图片"></p>
<p>来到全局的响应拦截器里面, 其实真正需要返回的是 res.data
<img src="@source/.vuepress/public/images/rd2.png" alt="图片">
<img src="@source/.vuepress/public/images/rd.png" alt="图片"></p>
<ul>
<li>error 的处理
<img src="@source/.vuepress/public/images/eerr.png" alt="图片">
<img src="@source/.vuepress/public/images/eeee.png" alt="图片"></li>
</ul>
<h2 id="拦截器-loading-组件的显示和隐藏" tabindex="-1"><a class="header-anchor" href="#拦截器-loading-组件的显示和隐藏" aria-hidden="true">#</a> 拦截器- loading 组件的显示和隐藏</h2>
<p>想要实现请求的 loading 效果, 用到了element-plus的 <a href="https://element-plus.gitee.io/zh-CN/component/loading.html#%E4%BB%A5%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9D%A5%E8%B0%83%E7%94%A8" target="_blank" rel="noopener noreferrer">loading 组件<ExternalLinkIcon/></a></p>
<p><img src="@source/.vuepress/public/images/Elloading.png" alt="图片">
<img src="@source/.vuepress/public/images/el1.png" alt="图片">
<img src="@source/.vuepress/public/images/ELloading2.png" alt="图片">
<img src="@source/.vuepress/public/images/ELloading3.png" alt="图片">
<img src="@source/.vuepress/public/images/ELloading4.png" alt="图片"></p>
<h2 id="request请求的promise封装和其他请求" tabindex="-1"><a class="header-anchor" href="#request请求的promise封装和其他请求" aria-hidden="true">#</a> request请求的Promise封装和其他请求</h2>
<p>使用实例的request请求时想要通过 then 来获取 res (如下图) , 并且传入返回值的类型
<img src="@source/.vuepress/public/images/requestreturn.png" alt="图片"></p>
<p>封装 request
<img src="@source/.vuepress/public/images/promiserequest.png" alt="图片"></p>
<p>responseInterceptor 的类型先这么改
<img src="@source/.vuepress/public/images/9999.png" alt="图片"></p>
<p>其他请求 :  (...展开 , config参数加上自己对应的的 method)
<img src="@source/.vuepress/public/images/else.png" alt="图片"></p>
</template>
