<template><h1 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> http 协议</h1>
<h2 id="网络分层模型" tabindex="-1"><a class="header-anchor" href="#网络分层模型" aria-hidden="true">#</a> 网络分层模型</h2>
<p><img src="@source/.vuepress/public/images/ois.png" alt="图片"></p>
<h4 id="低三层" tabindex="-1"><a class="header-anchor" href="#低三层" aria-hidden="true">#</a> 低三层</h4>
<ul>
<li><strong>物理层</strong> : 主要作用是定义物理设备如何传输数据</li>
<li><strong>数据链路层</strong>在通信的实体间简历数据链路链接</li>
<li><strong>网络层</strong>: 为数据在节点之间传输创建逻辑链路</li>
</ul>
<h3 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h3>
<h2 id="http协议的发展历史" tabindex="-1"><a class="header-anchor" href="#http协议的发展历史" aria-hidden="true">#</a> http协议的发展历史</h2>
<h3 id="http-0-9" tabindex="-1"><a class="header-anchor" href="#http-0-9" aria-hidden="true">#</a> HTTP/0.9</h3>
<ul>
<li>只有一个命令 get</li>
<li>没有 header 等描述数据的信息</li>
<li>服务器发送完毕, 就关闭 TCP 链接</li>
</ul>
<h3 id="http-1-0" tabindex="-1"><a class="header-anchor" href="#http-1-0" aria-hidden="true">#</a> HTTP/1.0</h3>
<ul>
<li>增加了很多命令</li>
<li>增加 status code 和 header</li>
<li>多自字符集支持, 多部分的发送, 权限, 缓存等</li>
</ul>
<h3 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP/1.1</h3>
<ul>
<li>持久链接</li>
<li>pipeline</li>
<li>增加 host 和其他一些命令</li>
</ul>
<h3 id="http-2" tabindex="-1"><a class="header-anchor" href="#http-2" aria-hidden="true">#</a> HTTP/2</h3>
<ul>
<li>所有数据以二进制传输</li>
<li>同一个连接里面发送多个请求不在需要按照顺序来</li>
<li>头信息压缩以及推送等提高效率的功能</li>
</ul>
<h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h2>
</template>
