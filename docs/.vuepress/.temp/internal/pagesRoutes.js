import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"记录优于记忆"},["/index.html","/README.md"]],
  ["v-36e3d6c4","/admin-project/animationList.html",{"title":"动画列表组件"},["/admin-project/animationList","/admin-project/animationList.md"]],
  ["v-14a862a4","/admin-project/auth.html",{"title":"根据权限控制路由"},["/admin-project/auth","/admin-project/auth.md"]],
  ["v-a950b3e0","/admin-project/axios.html",{"title":"Axios结合Typescript"},["/admin-project/axios","/admin-project/axios.md"]],
  ["v-12f9abb8","/admin-project/backMainUI.html",{"title":"后台主体界面"},["/admin-project/backMainUI","/admin-project/backMainUI.md"]],
  ["v-34681369","/admin-project/component.html",{"title":"全局组件注册"},["/admin-project/component","/admin-project/component.md"]],
  ["v-29734508","/admin-project/form.html",{"title":"表单验证 vee-validate"},["/admin-project/form","/admin-project/form.md"]],
  ["v-2358cd7e","/admin-project/guard.html",{"title":"路由守卫"},["/admin-project/guard","/admin-project/guard.md"]],
  ["v-d9f0d722","/admin-project/improveMenu.html",{"title":"后台菜单优化"},["/admin-project/improveMenu","/admin-project/improveMenu.md"]],
  ["v-1e697386","/admin-project/markdown.html",{"title":"toastui的 markdown 编辑器"},["/admin-project/markdown","/admin-project/markdown.md"]],
  ["v-6294654d","/admin-project/menu.html",{"title":"左侧菜单的实现"},["/admin-project/menu","/admin-project/menu.md"]],
  ["v-37b2b1e9","/admin-project/moduleRoute.html",{"title":"模块路由自动注册"},["/admin-project/moduleRoute","/admin-project/moduleRoute.md"]],
  ["v-4e2f15e2","/admin-project/optimize.html",{"title":"各种优化"},["/admin-project/optimize","/admin-project/optimize.md"]],
  ["v-a6e8ce00","/admin-project/package.html",{"title":"打包"},["/admin-project/package","/admin-project/package.md"]],
  ["v-7938c31a","/admin-project/reactive.html",{"title":"菜单的响应处理"},["/admin-project/reactive","/admin-project/reactive.md"]],
  ["v-0150a664","/admin-project/routerAutoload.html",{"title":"根据配置项自定义路由自动注册"},["/admin-project/routerAutoload","/admin-project/routerAutoload.md"]],
  ["v-2e63fcb8","/admin-project/start.html",{"title":"路由配置"},["/admin-project/start","/admin-project/start.md"]],
  ["v-15de9f3b","/admin-project/tailwindcss.html",{"title":"tailwindcss"},["/admin-project/tailwindcss","/admin-project/tailwindcss.md"]],
  ["v-4c9ef26d","/admin-project/token.html",{"title":"TOKEN储存与登录请求"},["/admin-project/token","/admin-project/token.md"]],
  ["v-5a98d968","/admin-project/vite.html",{"title":"Vite环境"},["/admin-project/vite","/admin-project/vite.md"]],
  ["v-45aad488","/admin-project/wangEditor.html",{"title":"wangEditor  富文本编辑器"},["/admin-project/wangEditor","/admin-project/wangEditor.md"]],
  ["v-20631287","/cms/1.html",{"title":"项目 1"},["/cms/1","/cms/1.md"]],
  ["v-2217eb26","/cms/2.html",{"title":"项目 2"},["/cms/2","/cms/2.md"]],
  ["v-23ccc3c5","/cms/3.html",{"title":"项目 3"},["/cms/3","/cms/3.md"]],
  ["v-25819c64","/cms/4.html",{"title":"项目 4"},["/cms/4","/cms/4.md"]],
  ["v-27367503","/cms/5.html",{"title":"项目 5"},["/cms/5","/cms/5.md"]],
  ["v-28eb4da2","/cms/6.html",{"title":"项目 6"},["/cms/6","/cms/6.md"]],
  ["v-2aa02641","/cms/7.html",{"title":""},["/cms/7","/cms/7.md"]],
  ["v-5eee594e","/cms/axioos.html",{"title":"axios的基本使用"},["/cms/axioos","/cms/axioos.md"]],
  ["v-5757ac6a","/cms/axiosF.html",{"title":"axios 封装"},["/cms/axiosF","/cms/axiosF.md"]],
  ["v-4e09a76d","/cms/code.html",{"title":"项目搭建规范"},["/cms/code","/cms/code.md"]],
  ["v-3895be74","/css/background.html",{"title":"背景"},["/css/background","/css/background.md"]],
  ["v-575fa460","/css/beijing.html",{"title":"CSS设置背景"},["/css/beijing","/css/beijing.md"]],
  ["v-4be67d5a","/css/ewai.html",{"title":"额外知识"},["/css/ewai","/css/ewai.md"]],
  ["v-3485e386","/css/ewai2.html",{"title":"额外知识 (2)"},["/css/ewai2","/css/ewai2.md"]],
  ["v-363abc25","/css/ewai3.html",{"title":"额外知识 (3)"},["/css/ewai3","/css/ewai3.md"]],
  ["v-56af9d1b","/css/flex.html",{"title":"flex 布局"},["/css/flex","/css/flex.md"]],
  ["v-0ebfac7e","/css/fudong.html",{"title":"浮动"},["/css/fudong","/css/fudong.md"]],
  ["v-0bb319ee","/css/grid.html",{"title":"Grid 栅格"},["/css/grid","/css/grid.md"]],
  ["v-5dd27d57","/css/he.html",{"title":"盒模型"},["/css/he","/css/he.md"]],
  ["v-354b27f0","/css/hezi.html",{"title":"盒子模型"},["/css/hezi","/css/hezi.md"]],
  ["v-9ff66338","/css/init.html",{"title":"样式初始化"},["/css/init","/css/init.md"]],
  ["v-66b96224","/css/jicheng.html",{"title":"继承 - 层叠 - 元素类型"},["/css/jicheng","/css/jicheng.md"]],
  ["v-6990a8fe","/css/san.html",{"title":"三大特性 层叠性、继承性、优先级"},["/css/san","/css/san.md"]],
  ["v-d5e91a58","/css/shipei.html",{"title":"移动端适配"},["/css/shipei","/css/shipei.md"]],
  ["v-2074b47c","/css/start.html",{"title":"CSS"},["/css/start","/css/start.md"]],
  ["v-fcef0f32","/css/text.html",{"title":"text  - font - 选择器"},["/css/text","/css/text.md"]],
  ["v-45905cc6","/css/zongjie.html",{"title":"总结"},["/css/zongjie","/css/zongjie.md"]],
  ["v-658e9812","/elementui/jicheng.html",{"title":"element-ui"},["/elementui/jicheng","/elementui/jicheng.md"]],
  ["v-ad803f64","/fengzhuang/chuxia.html",{"title":"初级组件 - 下"},["/fengzhuang/chuxia","/fengzhuang/chuxia.md"]],
  ["v-ec0589b6","/fengzhuang/dajian.html",{"title":"初级组件 上"},["/fengzhuang/dajian","/fengzhuang/dajian.md"]],
  ["v-1ba55b3a","/fengzhuang/zhongshang.html",{"title":"中级组件"},["/fengzhuang/zhongshang","/fengzhuang/zhongshang.md"]],
  ["v-b8d85b08","/front/biaodan.html",{"title":"人类行为验证处理方案 - 脱离UI组件库实现登录、注册+表单校验"},["/front/biaodan","/front/biaodan.md"]],
  ["v-a9d9e7dc","/front/changliebiao.html",{"title":"长列表组件 infinite + 图片懒加载(自定义指令)"},["/front/changliebiao","/front/changliebiao.md"]],
  ["v-16af1ca6","/front/header.html",{"title":"通用业务 Header 处理方案"},["/front/header","/front/header.md"]],
  ["v-13bc26df","/front/lanjiazai.html",{"title":"瀑布流 + 长列表 + 懒加载处理方案- 高性能通用模块"},["/front/lanjiazai","/front/lanjiazai.md"]],
  ["v-38194fac","/front/liandong.html",{"title":"多组件联动与高阶组件解决方案"},["/front/liandong","/front/liandong.md"]],
  ["v-1429a57c","/front/luyou.html",{"title":"高阶路由过渡处理方案 - 浏览器堆栈主动介入"},["/front/luyou","/front/luyou.md"]],
  ["v-6a147738","/front/pubuliu.html",{"title":"瀑布流展示"},["/front/pubuliu","/front/pubuliu.md"]],
  ["v-20eb0b54","/front/start.html",{"title":"搭建"},["/front/start","/front/start.md"]],
  ["v-10f3f693","/front/tupian.html",{"title":"图片裁剪与上传处理方案 - 基于阿里云 OSS 处理用户资料"},["/front/tupian","/front/tupian.md"]],
  ["v-fd421290","/front/xiangyingshi.html",{"title":"前中台响应式处理方案"},["/front/xiangyingshi","/front/xiangyingshi.md"]],
  ["v-1e7eb2c8","/front/xiazai.html",{"title":"前台常见功能解决方案：下载+全屏+引导"},["/front/xiazai","/front/xiazai.md"]],
  ["v-1ef6073c","/front/zhuti.html",{"title":"主题替换解决方案"},["/front/zhuti","/front/zhuti.md"]],
  ["v-14b58d13","/front/zujian.html",{"title":"构建自己的组件库 - 实现前端设计"},["/front/zujian","/front/zujian.md"]],
  ["v-522485bf","/category_2/child1.html",{"title":"子 1"},["/category_2/child1","/category_2/child1.md"]],
  ["v-53d95e5e","/category_2/child2.html",{"title":"子 2"},["/category_2/child2","/category_2/child2.md"]],
  ["v-e34766f6","/category_2/",{"title":"category_2"},["/category_2/index.html","/category_2/README.md"]],
  ["v-5e7f3f4d","/git/start.html",{"title":"Git"},["/git/start","/git/start.md"]],
  ["v-3d7d7eae","/gongcheng/mokuaihua.html",{"title":"模块化"},["/gongcheng/mokuaihua","/gongcheng/mokuaihua.md"]],
  ["v-55119a1c","/gongcheng/webpack.html",{"title":"Webpack"},["/gongcheng/webpack","/gongcheng/webpack.md"]],
  ["v-30067f33","/hongyuan/dabao.html",{"title":"打包"},["/hongyuan/dabao","/hongyuan/dabao.md"]],
  ["v-0e09661e","/hongyuan/service.html",{"title":"网络请求封装"},["/hongyuan/service","/hongyuan/service.md"]],
  ["v-b54d4ab8","/hongyuan/start.html",{"title":"搭建"},["/hongyuan/start","/hongyuan/start.md"]],
  ["v-096eaf7c","/hongyuan/start2.html",{"title":"业务 (1)"},["/hongyuan/start2","/hongyuan/start2.md"]],
  ["v-6b079784","/hongyuan/yewu2.html",{"title":"业务 (2)"},["/hongyuan/yewu2","/hongyuan/yewu2.md"]],
  ["v-679de646","/hongyuan/yewu3.html",{"title":"业务 (3)"},["/hongyuan/yewu3","/hongyuan/yewu3.md"]],
  ["v-25322e6c","/hrsass/bushu.html",{"title":"部署"},["/hrsass/bushu","/hrsass/bushu.md"]],
  ["v-ceaf0e38","/hrsass/gongsi.html",{"title":"公司和角色"},["/hrsass/gongsi","/hrsass/gongsi.md"]],
  ["v-4910ee6e","/hrsass/login.html",{"title":"登录模块"},["/hrsass/login","/hrsass/login.md"]],
  ["v-59d80001","/hrsass/luyou.html",{"title":"路由和页面"},["/hrsass/luyou","/hrsass/luyou.md"]],
  ["v-23af7a6c","/hrsass/quanxian.html",{"title":"权限"},["/hrsass/quanxian","/hrsass/quanxian.md"]],
  ["v-5e85a654","/hrsass/shouye.html",{"title":"主页"},["/hrsass/shouye","/hrsass/shouye.md"]],
  ["v-53774d15","/hrsass/start.html",{"title":"项目搭建"},["/hrsass/start","/hrsass/start.md"]],
  ["v-c66ccd7c","/hrsass/tab.html",{"title":"多语言tab页全屏主题"},["/hrsass/tab","/hrsass/tab.md"]],
  ["v-2aa17bb4","/hrsass/tupian.html",{"title":"图片上传预览及打印"},["/hrsass/tupian","/hrsass/tupian.md"]],
  ["v-5b7b1ade","/hrsass/yuangong.html",{"title":"员工管理"},["/hrsass/yuangong","/hrsass/yuangong.md"]],
  ["v-f6e2c078","/hrsass/zhuye.html",{"title":"主页模块"},["/hrsass/zhuye","/hrsass/zhuye.md"]],
  ["v-156f8f28","/hrsass/zuzhijiagou.html",{"title":"组织架构"},["/hrsass/zuzhijiagou","/hrsass/zuzhijiagou.md"]],
  ["v-74126682","/html/start.html",{"title":"HTML"},["/html/start","/html/start.md"]],
  ["v-7df79d83","/http/xieyi.html",{"title":"http 协议"},["/http/xieyi","/http/xieyi.md"]],
  ["v-16efa396","/jizhang/dajian.html",{"title":"搭建"},["/jizhang/dajian","/jizhang/dajian.md"]],
  ["v-0ac03658","/jizhang/yewu.html",{"title":"业务功能"},["/jizhang/yewu","/jizhang/yewu.md"]],
  ["v-54273d92","/jizhang/zujian.html",{"title":"封装业务组件"},["/jizhang/zujian","/jizhang/zujian.md"]],
  ["v-603fcf66","/JS/array.html",{"title":"数组"},["/JS/array","/JS/array.md"]],
  ["v-7559deb2","/JS/asyncawait.html",{"title":"async - await"},["/JS/asyncawait","/JS/asyncawait.md"]],
  ["v-1e48451e","/JS/baoguanli.html",{"title":"包管理工具"},["/JS/baoguanli","/JS/baoguanli.md"]],
  ["v-55b2d8d0","/JS/basic.html",{"title":"基础知识"},["/JS/basic","/JS/basic.md"]],
  ["v-06d77c8e","/JS/class.html",{"title":"类"},["/JS/class","/JS/class.md"]],
  ["v-4244732a","/JS/closure.html",{"title":"闭包"},["/JS/closure","/JS/closure.md"]],
  ["v-b7be8050","/JS/cunchu.html",{"title":"数据存储"},["/JS/cunchu","/JS/cunchu.md"]],
  ["v-530b47e8","/JS/diedaiqi.html",{"title":"Iterator - Generator"},["/JS/diedaiqi","/JS/diedaiqi.md"]],
  ["v-0656ae30","/JS/digui.html",{"title":"递归"},["/JS/digui","/JS/digui.md"]],
  ["v-2c9bd378","/JS/dom.html",{"title":"DOM"},["/JS/dom","/JS/dom.md"]],
  ["v-3067ec64","/JS/dombom.html",{"title":"BOM"},["/JS/dombom","/JS/dombom.md"]],
  ["v-79ab2dfe","/JS/error.html",{"title":"错误处理"},["/JS/error","/JS/error.md"]],
  ["v-715cb404","/JS/es6.html",{"title":"ES6 (一)"},["/JS/es6","/JS/es6.md"]],
  ["v-267fcf62","/JS/es62.html",{"title":"ES6 (二)"},["/JS/es62","/JS/es62.md"]],
  ["v-5e4f4f3c","/JS/es789.html",{"title":"ES6 +"},["/JS/es789","/JS/es789.md"]],
  ["v-d1c291f0","/JS/eventloop.html",{"title":"事件循环"},["/JS/eventloop","/JS/eventloop.md"]],
  ["v-0f3e649e","/JS/fangdoujieliu.html",{"title":"手写防抖和节流"},["/JS/fangdoujieliu","/JS/fangdoujieliu.md"]],
  ["v-73f5eeb4","/JS/function.html",{"title":"函数"},["/JS/function","/JS/function.md"]],
  ["v-162395be","/JS/hanshu.html",{"title":"函数式编程"},["/JS/hanshu","/JS/hanshu.md"]],
  ["v-036a2e4b","/JS/hongwei.html",{"title":"任务机制"},["/JS/hongwei","/JS/hongwei.md"]],
  ["v-3567178c","/JS/jicheng.html",{"title":"面向对象 - 继承"},["/JS/jicheng","/JS/jicheng.md"]],
  ["v-397bf124","/JS/json.html",{"title":"JSON"},["/JS/json","/JS/json.md"]],
  ["v-205a0153","/JS/kuayu.html",{"title":"跨域"},["/JS/kuayu","/JS/kuayu.md"]],
  ["v-10e9ca36","/JS/lei.html",{"title":"面向对象 - 类"},["/JS/lei","/JS/lei.md"]],
  ["v-12696d40","/JS/module.html",{"title":"模块"},["/JS/module","/JS/module.md"]],
  ["v-61734074","/JS/mokuaihua.html",{"title":"模块化"},["/JS/mokuaihua","/JS/mokuaihua.md"]],
  ["v-f87371bc","/JS/neicun.html",{"title":"JS 的内存管理"},["/JS/neicun","/JS/neicun.md"]],
  ["v-1bfe53c1","/JS/ppromise.html",{"title":"Promise"},["/JS/ppromise","/JS/ppromise.md"]],
  ["v-c60638ea","/JS/promise.html",{"title":"Promise"},["/JS/promise","/JS/promise.md"]],
  ["v-76dfbbc4","/JS/proto.html",{"title":"原型"},["/JS/proto","/JS/proto.md"]],
  ["v-7cc72632","/JS/reg.html",{"title":"正则表达式"},["/JS/reg","/JS/reg.md"]],
  ["v-12ef8b3e","/JS/shenkaobei.html",{"title":"深拷贝 - 事件总线"},["/JS/shenkaobei","/JS/shenkaobei.md"]],
  ["v-589e312e","/JS/this.html",{"title":"this"},["/JS/this","/JS/this.md"]],
  ["v-2773c739","/JS/yuanxing.html",{"title":"面向对象"},["/JS/yuanxing","/JS/yuanxing.md"]],
  ["v-5b635b6e","/json-server%E4%B8%8Emock/",{"title":""},["/json-server与mock/","/json-server%E4%B8%8Emock/index.html","/json-server与mock/README.md","/json-server%E4%B8%8Emock/README.md"]],
  ["v-3d5e2dca","/keshihua/echarts.html",{"title":"Echarts 基本概念"},["/keshihua/echarts","/keshihua/echarts.md"]],
  ["v-7b3dc7fc","/keshihua/rumen.html",{"title":"入门"},["/keshihua/rumen","/keshihua/rumen.md"]],
  ["v-482a8985","/node/baoguanli.html",{"title":"包管理工具"},["/node/baoguanli","/node/baoguanli.md"]],
  ["v-e19b65f6","/node/buffer.html",{"title":"Buffer"},["/node/buffer","/node/buffer.md"]],
  ["v-08211fcc","/node/events.html",{"title":"events 模块"},["/node/events","/node/events.md"]],
  ["v-525bec7d","/node/express.html",{"title":"express"},["/node/express","/node/express.md"]],
  ["v-4c0d8ad0","/node/fs.html",{"title":"fs 文件系统模块"},["/node/fs","/node/fs.md"]],
  ["v-51bd70bd","/node/http.html",{"title":"http 模块"},["/node/http","/node/http.md"]],
  ["v-4c24e15a","/node/jiekou.html",{"title":"使用 Express 写接口"},["/node/jiekou","/node/jiekou.md"]],
  ["v-0daeb7a6","/node/mokuaihua.html",{"title":"模块化"},["/node/mokuaihua","/node/mokuaihua.md"]],
  ["v-460cb570","/node/neizhimokuai.html",{"title":"常见的内置模块"},["/node/neizhimokuai","/node/neizhimokuai.md"]],
  ["v-3083cf40","/node/path.html",{"title":"path 路径模块"},["/node/path","/node/path.md"]],
  ["v-e529986a","/node/start.html",{"title":"初识 Node"},["/node/start","/node/start.md"]],
  ["v-2d4b99c5","/node/stream.html",{"title":"Stream"},["/node/stream","/node/stream.md"]],
  ["v-4750e65b","/node/zhongjianjian.html",{"title":"Express 中间件"},["/node/zhongjianjian","/node/zhongjianjian.md"]],
  ["v-79ea3892","/pinia/start.html",{"title":"Pinia"},["/pinia/start","/pinia/start.md"]],
  ["v-3025b7ec","/shop-admin-vue3/dajian.html",{"title":"搭建项目架构"},["/shop-admin-vue3/dajian","/shop-admin-vue3/dajian.md"]],
  ["v-195412d6","/shop-admin-vue3/dajian2.html",{"title":"起步"},["/shop-admin-vue3/dajian2","/shop-admin-vue3/dajian2.md"]],
  ["v-7fe09cdb","/toutiao/bianji.html",{"title":"编辑资料"},["/toutiao/bianji","/toutiao/bianji.md"]],
  ["v-45420998","/toutiao/chushihua.html",{"title":"项目初始化"},["/toutiao/chushihua","/toutiao/chushihua.md"]],
  ["v-071c44cb","/toutiao/denglu.html",{"title":"登录注册"},["/toutiao/denglu","/toutiao/denglu.md"]],
  ["v-5f4b0b72","/toutiao/geren.html",{"title":"个人中心"},["/toutiao/geren","/toutiao/geren.md"]],
  ["v-4b354431","/toutiao/pindao.html",{"title":"首页 - 频道编辑"},["/toutiao/pindao","/toutiao/pindao.md"]],
  ["v-135b4a1e","/toutiao/pinglun.html",{"title":"文章评论"},["/toutiao/pinglun","/toutiao/pinglun.md"]],
  ["v-09a94e5a","/toutiao/sousuo.html",{"title":"文章搜索"},["/toutiao/sousuo","/toutiao/sousuo.md"]],
  ["v-4b9f51a2","/toutiao/wenzhang.html",{"title":"首页 - 文章列表"},["/toutiao/wenzhang","/toutiao/wenzhang.md"]],
  ["v-7e67cb4a","/toutiao/xiangqing.html",{"title":"文章详情"},["/toutiao/xiangqing","/toutiao/xiangqing.md"]],
  ["v-15b7265c","/toutiao/yonghu.html",{"title":"用户页面"},["/toutiao/yonghu","/toutiao/yonghu.md"]],
  ["v-222ca7e0","/TS/as.html",{"title":"断言"},["/TS/as","/TS/as.md"]],
  ["v-2644d4a2","/TS/basic.html",{"title":"基础类型"},["/TS/basic","/TS/basic.md"]],
  ["v-57f5bd98","/TS/class.html",{"title":"类"},["/TS/class","/TS/class.md"]],
  ["v-11b7e280","/TS/config.html",{"title":"tsconfig.json 文件"},["/TS/config","/TS/config.md"]],
  ["v-43a8996a","/TS/function.html",{"title":"函数类型"},["/TS/function","/TS/function.md"]],
  ["v-04d8c246","/TS/generics.html",{"title":"泛型"},["/TS/generics","/TS/generics.md"]],
  ["v-6a70b6f7","/TS/interface.html",{"title":"接口"},["/TS/interface","/TS/interface.md"]],
  ["v-6d15acd4","/TS/module.html",{"title":"模块化开发"},["/TS/module","/TS/module.md"]],
  ["v-0b7ee4ee","/TS/start.html",{"title":"TypeScript 的运行环境"},["/TS/start","/TS/start.md"]],
  ["v-342b3070","/TS/type.html",{"title":"类型缩小"},["/TS/type","/TS/type.md"]],
  ["v-4b29d755","/TS/Vue3.html",{"title":"TS 与 Vue 结合"},["/TS/Vue3","/TS/Vue3.md"]],
  ["v-6b306c28","/typescript/start.html",{"title":"TypeScript 的运行环境"},["/typescript/start","/typescript/start.md"]],
  ["v-c2a3dd64","/typescript/type.html",{"title":"数据类型"},["/typescript/type","/typescript/type.md"]],
  ["v-fec01d08","/uniapp/start.html",{"title":"起步"},["/uniapp/start","/uniapp/start.md"]],
  ["v-be84b7d4","/uniapp/tabbar.html",{"title":"tabBar"},["/uniapp/tabbar","/uniapp/tabbar.md"]],
  ["v-53a40a20","/utils/util.html",{"title":"日期格式化"},["/utils/util","/utils/util.md"]],
  ["v-b1db4c9c","/vue/character.html",{"title":"Vue和React对比"},["/vue/character","/vue/character.md"]],
  ["v-4b0bafb6","/vue/communication.html",{"title":"Vue组件之间的通信方式"},["/vue/communication","/vue/communication.md"]],
  ["v-5aef15b9","/vue/computedWatch.html",{"title":"computed 和 watch"},["/vue/computedWatch","/vue/computedWatch.md"]],
  ["v-d3b8299a","/vue/directives.html",{"title":""},["/vue/directives","/vue/directives.md"]],
  ["v-3f43a2dc","/vue/dynamic.html",{"title":"动态组件"},["/vue/dynamic","/vue/dynamic.md"]],
  ["v-6c4c521a","/vue/form.html",{"title":"Vue中的表单基本使用"},["/vue/form","/vue/form.md"]],
  ["v-9ea8eb9e","/vue/lifeCycle.html",{"title":"Vue中的生命周期"},["/vue/lifeCycle","/vue/lifeCycle.md"]],
  ["v-5cf855c0","/vue/modifier.html",{"title":"Vue中常用的修饰符"},["/vue/modifier","/vue/modifier.md"]],
  ["v-33c90264","/vue/plugin.html",{"title":"开发插件"},["/vue/plugin","/vue/plugin.md"]],
  ["v-7b5b5cfd","/vue/showIf.html",{"title":"v-show和v-if有什么区别？"},["/vue/showIf","/vue/showIf.md"]],
  ["v-f221a40e","/vue/slot.html",{"title":"Vue中的插槽 - slot"},["/vue/slot","/vue/slot.md"]],
  ["v-46d2f20c","/vue-admin/bushu.html",{"title":"部署"},["/vue-admin/bushu","/vue-admin/bushu.md"]],
  ["v-2113fe30","/vue-admin/dajian.html",{"title":"搭建"},["/vue-admin/dajian","/vue-admin/dajian.md"]],
  ["v-7540c5d4","/vue-admin/denglu.html",{"title":"登录"},["/vue-admin/denglu","/vue-admin/denglu.md"]],
  ["v-3ef7f324","/vue-admin/dongtaibiaoge.html",{"title":"动态表格渲染方案 - 文章排名业务实现"},["/vue-admin/dongtaibiaoge","/vue-admin/dongtaibiaoge.md"]],
  ["v-6e2e49bf","/vue-admin/fuwenben.html",{"title":"富文本和 markdown 之 创建文章"},["/vue-admin/fuwenben","/vue-admin/fuwenben.md"]],
  ["v-13bcd74f","/vue-admin/layout.html",{"title":"项目架构之搭建 Layout架构 解决方案与实现"},["/vue-admin/layout","/vue-admin/layout.md"]],
  ["v-236cc505","/vue-admin/mokuai.html",{"title":"vue3+ElementPlus 基础模块实现"},["/vue-admin/mokuai","/vue-admin/mokuai.md"]],
  ["v-46f8d1ea","/vue-admin/quanxian.html",{"title":"权限受控解决方案"},["/vue-admin/quanxian","/vue-admin/quanxian.md"]],
  ["v-6d3d9356","/vue-admin/tongyong.html",{"title":"通用功能开发"},["/vue-admin/tongyong","/vue-admin/tongyong.md"]],
  ["v-993075c6","/vue-admin/yonghu.html",{"title":"excel 、zip 与前端结合解决方案 - 用户管理页面实现"},["/vue-admin/yonghu","/vue-admin/yonghu.md"]],
  ["v-cd0741f4","/vue-manage/dajian.html",{"title":"搭建"},["/vue-manage/dajian","/vue-manage/dajian.md"]],
  ["v-54b9850a","/vue-router/animation.html",{"title":"过渡动画"},["/vue-router/animation","/vue-router/animation.md"]],
  ["v-6529e7d2","/vue-router/dynamicRouter.html",{"title":"动态路由"},["/vue-router/dynamicRouter","/vue-router/dynamicRouter.md"]],
  ["v-cb8cbcca","/vue-router/function.html",{"title":"编程式的导航"},["/vue-router/function","/vue-router/function.md"]],
  ["v-6b326c0c","/vue-router/guard.html",{"title":"路由守卫"},["/vue-router/guard","/vue-router/guard.md"]],
  ["v-2bcc5a52","/vue-router/lazyLoading.html",{"title":"懒加载"},["/vue-router/lazyLoading","/vue-router/lazyLoading.md"]],
  ["v-05f7afc8","/vue-router/name.html",{"title":"命名路由"},["/vue-router/name","/vue-router/name.md"]],
  ["v-070b0fca","/vue-router/nest.html",{"title":"嵌套路由"},["/vue-router/nest","/vue-router/nest.md"]],
  ["v-2c11d1a6","/vue-router/params.html",{"title":"动态路由匹配"},["/vue-router/params","/vue-router/params.md"]],
  ["v-50c6102b","/vue-router/redirectAlias.html",{"title":"重定向和别名"},["/vue-router/redirectAlias","/vue-router/redirectAlias.md"]],
  ["v-571ee6a4","/vue-router/router-view-name.html",{"title":"<router-view>的命名视图"},["/vue-router/router-view-name","/vue-router/router-view-name.md"]],
  ["v-39619b4a","/vue-router/router.html",{"title":"路由的原理"},["/vue-router/router","/vue-router/router.md"]],
  ["v-5821e402","/vue-router/routerHTML.html",{"title":"HTML"},["/vue-router/routerHTML","/vue-router/routerHTML.md"]],
  ["v-029f4374","/vue-router/scroll.html",{"title":"滚动行为"},["/vue-router/scroll","/vue-router/scroll.md"]],
  ["v-763d9b46","/vue-router/start.html",{"title":"vue-router的基本使用"},["/vue-router/start","/vue-router/start.md"]],
  ["v-e20b43ce","/vue2ui/layout.html",{"title":"Container 布局容器"},["/vue2ui/layout","/vue2ui/layout.md"]],
  ["v-267a8676","/vue2ui/tabs.html",{"title":"Tabs 标签页"},["/vue2ui/tabs","/vue2ui/tabs.md"]],
  ["v-58a360b0","/vue2ui/toast.html",{"title":"Toast 轻提示"},["/vue2ui/toast","/vue2ui/toast.md"]],
  ["v-205c7ba6","/vue3/async.html",{"title":"异步组件"},["/vue3/async","/vue3/async.md"]],
  ["v-276651cc","/vue3/chajian.html",{"title":"Vue 插件"},["/vue3/chajian","/vue3/chajian.md"]],
  ["v-f9f1c4e8","/vue3/communication.html",{"title":"组件通信"},["/vue3/communication","/vue3/communication.md"]],
  ["v-29530678","/vue3/composition.html",{"title":"Composition API"},["/vue3/composition","/vue3/composition.md"]],
  ["v-7fb371a8","/vue3/directives.html",{"title":"自定义指令"},["/vue3/directives","/vue3/directives.md"]],
  ["v-3c727183","/vue3/dynamic.html",{"title":"动态组件"},["/vue3/dynamic","/vue3/dynamic.md"]],
  ["v-15009dba","/vue3/h.html",{"title":"h()函数"},["/vue3/h","/vue3/h.md"]],
  ["v-64663b18","/vue3/life.html",{"title":"生命周期"},["/vue3/life","/vue3/life.md"]],
  ["v-6b866cc1","/vue3/mixin.html",{"title":"Mixin 和 extends"},["/vue3/mixin","/vue3/mixin.md"]],
  ["v-b71522f8","/vue3/options.html",{"title":"Options API"},["/vue3/options","/vue3/options.md"]],
  ["v-6831bb92","/vue3/other.html",{"title":""},["/vue3/other","/vue3/other.md"]],
  ["v-812fd256","/vue3/script-setup.html",{"title":"Composition API之script setup"},["/vue3/script-setup","/vue3/script-setup.md"]],
  ["v-1549f980","/vue3/start.html",{"title":"Vue 基础"},["/vue3/start","/vue3/start.md"]],
  ["v-a561730a","/vue3/transition.html",{"title":"Transition 过度动画"},["/vue3/transition","/vue3/transition.md"]],
  ["v-4f57be90","/vue3/v-model.html",{"title":"v-model"},["/vue3/v-model","/vue3/v-model.md"]],
  ["v-26626eba","/vue3/vue3.html",{"title":"Vue2到Vue3的变化"},["/vue3/vue3","/vue3/vue3.md"]],
  ["v-2650fd40","/vue3UI/build.html",{"title":"部署"},["/vue3UI/build","/vue3UI/build.md"]],
  ["v-663f64fc","/vue3UI/dialog.html",{"title":"Dialog 对话框组件"},["/vue3UI/dialog","/vue3UI/dialog.md"]],
  ["v-a9c5c828","/vue3UI/start.html",{"title":"使用 vite 搭建官网"},["/vue3UI/start","/vue3UI/start.md"]],
  ["v-387e02e0","/vue3UI/switch.html",{"title":"Switch 开关组件"},["/vue3UI/switch","/vue3UI/switch.md"]],
  ["v-802641b4","/vue3UI/Tabs.html",{"title":"Tabs 标签页组件"},["/vue3UI/Tabs","/vue3UI/Tabs.md"]],
  ["v-c2e2706a","/vue3UI/Tooltip.html",{"title":"Tooltip 文字提示组件"},["/vue3UI/Tooltip","/vue3UI/Tooltip.md"]],
  ["v-282b8c1b","/vuex/start.html",{"title":"Vuex"},["/vuex/start","/vuex/start.md"]],
  ["v-4a1e6116","/webpack/babel2.html",{"title":"babel"},["/webpack/babel2","/webpack/babel2.md"]],
  ["v-33fd45c9","/webpack/devServerHMR.html",{"title":"devServer 和 HMR"},["/webpack/devServerHMR","/webpack/devServerHMR.md"]],
  ["v-7a93c68d","/webpack/eslint.html",{"title":"ESLint"},["/webpack/eslint","/webpack/eslint.md"]],
  ["v-5772bda8","/webpack/fenli.html",{"title":"环境分离和代码分离"},["/webpack/fenli","/webpack/fenli.md"]],
  ["v-456ef816","/webpack/plugin1.html",{"title":"plugin"},["/webpack/plugin1","/webpack/plugin1.md"]],
  ["v-78d56b33","/webpack/sourcemap.html",{"title":"sourcemap"},["/webpack/sourcemap","/webpack/sourcemap.md"]],
  ["v-b32d0222","/webpack/start1.html",{"title":"Webpack"},["/webpack/start1","/webpack/start1.md"]],
  ["v-afc350e4","/webpack/start2.html",{"title":"webpack"},["/webpack/start2","/webpack/start2.md"]],
  ["v-31e4acf2","/xiaochengxu/fenbao.html",{"title":"分包"},["/xiaochengxu/fenbao","/xiaochengxu/fenbao.md"]],
  ["v-a81a874e","/xiaochengxu/jichu.html",{"title":"模板语法"},["/xiaochengxu/jichu","/xiaochengxu/jichu.md"]],
  ["v-3e1df85e","/xiaochengxu/jinjie.html",{"title":"进阶"},["/xiaochengxu/jinjie","/xiaochengxu/jinjie.md"]],
  ["v-580da8ff","/xiaochengxu/npm.html",{"title":"使用 npm 包"},["/xiaochengxu/npm","/xiaochengxu/npm.md"]],
  ["v-3ed16a1e","/xiaochengxu/qingqiu.html",{"title":"网络请求"},["/xiaochengxu/qingqiu","/xiaochengxu/qingqiu.md"]],
  ["v-2fc8906f","/xiaochengxu/renshi.html",{"title":"起步"},["/xiaochengxu/renshi","/xiaochengxu/renshi.md"]],
  ["v-79796760","/xiaochengxu/shengmingzhouqi.html",{"title":"生命周期 和 WSX脚本"},["/xiaochengxu/shengmingzhouqi","/xiaochengxu/shengmingzhouqi.md"]],
  ["v-cfcc9aea","/xiaochengxu/shujugongxiang.html",{"title":"全局数据共享"},["/xiaochengxu/shujugongxiang","/xiaochengxu/shujugongxiang.md"]],
  ["v-ea101af6","/xiaochengxu/suzhu.html",{"title":"宿主环境"},["/xiaochengxu/suzhu","/xiaochengxu/suzhu.md"]],
  ["v-c30e4efe","/xiaochengxu/tongxin.html",{"title":"父子组件通信 和 behavior"},["/xiaochengxu/tongxin","/xiaochengxu/tongxin.md"]],
  ["v-63fe1b50","/xiaochengxu/xiaoxiangmu.html",{"title":"案例 - 本地生活(列表页面)"},["/xiaochengxu/xiaoxiangmu","/xiaochengxu/xiaoxiangmu.md"]],
  ["v-039f3b9b","/xiaochengxu/yemiandaohang.html",{"title":"页面导航"},["/xiaochengxu/yemiandaohang","/xiaochengxu/yemiandaohang.md"]],
  ["v-d9395082","/xiaochengxu/yemianshijian.html",{"title":"页面事件"},["/xiaochengxu/yemianshijian","/xiaochengxu/yemianshijian.md"]],
  ["v-56671738","/xiaochengxu/zidingyizujian.html",{"title":"自定义组件"},["/xiaochengxu/zidingyizujian","/xiaochengxu/zidingyizujian.md"]],
  ["v-2884c733","/xiaochengxu/zujianshengming.html",{"title":"组件生命周期和插槽"},["/xiaochengxu/zujianshengming","/xiaochengxu/zujianshengming.md"]],
  ["v-50982d42","/xiaochengxu2/shiwu.html",{"title":"常见失误"},["/xiaochengxu2/shiwu","/xiaochengxu2/shiwu.md"]],
  ["v-606516c9","/xiaochengxu2/taolu.html",{"title":"技巧"},["/xiaochengxu2/taolu","/xiaochengxu2/taolu.md"]],
  ["v-743892aa","/xiaochengxuyinyue/dajian.html",{"title":"搭建"},["/xiaochengxuyinyue/dajian","/xiaochengxuyinyue/dajian.md"]],
  ["v-f4814c68","/xiaochengxuyinyue/shouye.html",{"title":"首页 - 音乐页面"},["/xiaochengxuyinyue/shouye","/xiaochengxuyinyue/shouye.md"]],
  ["v-1e38101a","/zhuanlanxiangmu/start.html",{"title":"起步"},["/zhuanlanxiangmu/start","/zhuanlanxiangmu/start.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
