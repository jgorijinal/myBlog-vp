<template><h1 id="登录通用解决方案-—-第三方登录处理" tabindex="-1"><a class="header-anchor" href="#登录通用解决方案-—-第三方登录处理" aria-hidden="true">#</a> 登录通用解决方案 — 第三方登录处理</h1>
<h2 id="第三方平台登录解决方案流程大解析" tabindex="-1"><a class="header-anchor" href="#第三方平台登录解决方案流程大解析" aria-hidden="true">#</a> 第三方平台登录解决方案流程大解析</h2>
<p>通常情况下第三方登录，多指的是：<strong>通过第三方 APP (qq,微信)进行登录</strong></p>
<p>那么这个第三方的 <code>APP</code> 是如何和自己的应用进行关联的呢?</p>
<p>首先需要搞清楚整个第三方登录的流程是如何进行的</p>
<ol>
<li>
<p>点击第三方登录按钮：执行 <code>window.open</code> 方法，打开一个第三方指定的 <code>URL</code> 窗口，该地址会指向第三方登录的 <code>URL</code>，并且由第三方提供一个对应的 <strong>二维码</strong></p>
</li>
<li>
<p>弹出一个小窗口，展示对应二维码：此处展示的二维码，即为上一步中第三方提供的二维码</p>
</li>
<li>
<p>手机打开对应的 <code>APP</code> 进行扫码之后，会跳转到 <strong>同意页面</strong>，同时浏览器端也会显示扫码成功：在第三方中会一直对该页面进行 <strong>轮询</strong>，配合第三方 <strong>APP</strong> 来判断是否扫码成功</p>
</li>
<li>
<p>手机端操作同意登录之后，会出现两种情况：在 <strong>APP</strong> 中同意之后，第三方会进行对应的跳转，跳转地址为你指定的地址，在该地址中可以获取到 <strong>第三方的用户信息</strong>，该信息即为第三方登录时要获取到的关键数据。</p>
</li>
<li>
<p>至此，第三方操作完成。接下来需要进行本平台的登录判定</p>
<ol>
<li>该注册指的是 <strong>第三方用户</strong> 是否在本平台中进行了注册。</li>
<li>因为在之前的所有操作中，拿到的是 <strong>第三方的用户信息</strong> 。</li>
<li>该信息可以帮助我们直接显示对用的用户名（<code>nickname</code>）和头像，但是因为不包含关键信息（手机号、用户名（<code>username</code>）、密码）所以无法使用该信息帮助用户直接登录</li>
<li>所以需要判断当前用户是否在咱们自己的平台中完成了注册
<ol>
<li>当前用户已注册：</li>
</ol>
<ul>
<li>直接登录</li>
</ul>
<ol start="2">
<li>当前用户未注册：</li>
</ol>
<ul>
<li>执行注册功能</li>
</ul>
</li>
</ol>
</li>
</ol>
<h2 id="qq-登录对接流程-获取-qq-用户信息" tabindex="-1"><a class="header-anchor" href="#qq-登录对接流程-获取-qq-用户信息" aria-hidden="true">#</a> QQ 登录对接流程：获取 QQ 用户信息</h2>
<p>对接 <code>QQ</code> 登录分为以下几步：</p>
<ol>
<li>展示 <code>QQ</code> 登录二维码（现在做）</li>
<li>获取用户信息（现在做）</li>
<li>完成跨页面数据传输</li>
<li>认证是否已注册</li>
<li>完成 <code>QQ</code> 对接</li>
</ol>
</template>
