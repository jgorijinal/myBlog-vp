module.exports = {
    // 站点配置
    base:'/myBlog-vp/',
    lang: 'zh-CN',
    title: 'Eren的个人文档 - 记录优于记忆',
    description: '这是我的第一个 VuePress 站点',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    head: [
        [
            'link', {rel:'stylesheet',href:'/css/index.css'}
        ]
    ],
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        displayAllHeaders: true,// 默认值：false
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        collapsable: true,
        lastUpdated:false,
        sidebar: [
            // SidebarItem
            // {
            //     text: 'Vue系列',
            //     collapsible: true,
            //     children: [
            //         {
            //             text: 'Vue和React对比',
            //             link: '/vue/character.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的生命周期',
            //             link: '/vue/lifeCycle.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的v-show和v-if的区别',
            //             link: '/vue/showIf.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的computed和watch',
            //             link: '/vue/computedWatch.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue组件之间的通信方式',
            //             link: '/vue/communication.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中常用的修饰符',
            //             link: '/vue/modifier.md',
            //             children: [],
            //         },
            //         {
            //             text: '使用Vue中的开发插件',
            //             link: '/vue/plugin.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的slot插槽的使用',
            //             link: '/vue/slot.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的表单的基本使用',
            //             link: '/vue/form.md',
            //             children: [],
            //         },
            //         {
            //             text: 'Vue中的动态组件',
            //             link: '/vue/dynamic.md',
            //             children: [],
            //         },

            //     ],
            // },
            {
                text: 'HTML系列',
                collapsible: true,
                children: [
                    '/html/start.md',
                ]
            },
            {
                text: 'CSS系列',
                collapsible: true,
                children: [
                    // '/css/init.md',
                    // '/css/grid.md',
                    // '/css/background.md',
                    // '/css/san.md',
                    // '/css/he.md',
                    '/css/start.md',
                    '/css/text.md',
                    '/css/jicheng.md',
                    '/css/hezi.md',
                    '/css/beijing.md',
                    '/css/ewai.md',
                    '/css/fudong.md',
                    '/css/flex.md',
                    '/css/ewai2.md',
                    '/css/ewai3.md',
                    '/css/shipei.md',
                ]
            },
            {
                text: 'Vue3系列',
                collapsible: true,
                children: [
                    // '/vue3/xiangyingshi.md',
                    '/vue3/vue3.md',
                    '/vue3/life.md',
                    '/vue3/communication.md',
                    '/vue3/dynamic.md',
                    '/vue3/async.md',
                    '/vue3/v-model.md',
                    '/vue3/start.md',
                    '/vue3/options.md',
                    '/vue3/mixin.md',
                    '/vue3/directives.md',
                    '/vue3/chajian.md',
                    '/vue3/composition.md',
                    // '/vue3/script-setup.md',
                    '/vue3/h.md',
                    '/vue3/transition.md',
                ]
            },
            {
                text: 'Vue Router系列',
                collapsible: true,
                children: [
                    '/vue-router/router.md',
                    '/vue-router/start.md',
                    '/vue-router/routerHTML.md',
                    '/vue-router/name.md',
                    '/vue-router/params.md',
                    '/vue-router/nest.md',
                    '/vue-router/router-view-name.md',
                    '/vue-router/redirectAlias.md',
                    '/vue-router/function.md',
                    '/vue-router/guard.md',
                    '/vue-router/animation.md',
                    '/vue-router/scroll.md',
                    '/vue-router/lazyLoading.md',
                    '/vue-router/dynamicRouter.md',
                ]
            },
            {
                text: 'Vuex系列',
                collapsible: true,
                children: [
                    '/vuex/start.md',
                
                ]
            },
            {
                text: 'Pinia系列',
                collapsible: true,
                children: [
                    '/pinia/start.md',
                
                ]
            },
            // {
            //     text: 'TS系列',
            //     collapsible: true,
            //     children: [
            //         '/typescript/start.md',
                
            //     ]
            // },
            // {
            //     text: 'Webpack系列',
            //     collapsible: true,
            //     children: [
            //         '/webpack/start1.md',
            //         '/webpack/start2.md',
            //         '/webpack/plugin1.md',
            //         '/webpack/sourcemap.md',
            //         '/webpack/babel2.md',
            //         '/webpack/devServerHMR.md',
            //         '/webpack/fenli.md'
                
            //     ]
            // },
            {
                text: 'Webpack',
                collapsible: true,
                children: [
                    // '/gongcheng/mokuaihua.md',
                    // '/gongcheng/webpack.md',
                    '/gongcheng/start.md',
                    '/gongcheng/gaoji.md',
                    '/gongcheng/fuxi.md',
                ]
            },
            {
                text: 'JS系列',
                collapsible: true,
                children: [
                    '/JS/xuanranyuanli.md',
                    '/JS/yunxing.md',
                    '/JS/neicun.md',
                    '/JS/this.md',
                    '/JS/hanshu.md',
                    '/JS/yuanxing.md',
                    '/JS/jicheng.md',
                    '/JS/lei.md',
                    '/JS/es6.md',
                    '/JS/es62.md',
                    '/JS/es789.md',
                    '/JS/ppromise.md',
                    '/JS/diedaiqi.md',
                    '/JS/asyncawait.md',
                    '/JS/eventloop.md',
                    '/JS/error.md',
                    '/JS/mokuaihua.md',
                    '/JS/json.md',
                    '/JS/cunchu.md',
                    '/JS/dombom.md',
                    '/JS/dom.md',
                    '/JS/fangdoujieliu.md',
                    '/JS/digui.md',
                    '/JS/kuayu.md',
                    '/JS/shenkaobei.md',
                    '/JS/baoguanli.md',
                    '/JS/basic.md',
                    '/JS/array.md',
                    '/JS/reg2.md',
                    '/JS/http.md',
                    // '/JS/function.md',
                    // '/JS/closure.md',
                    // '/JS/proto.md',
                    // '/JS/class.md',
                    // '/JS/module.md',
                    // '/JS/hongwei.md',
                ]
            },
            {
                text: 'TS系列',
                collapsible: true,
                children: [
                    '/TS/start.md',
                    '/TS/basic.md',
                    '/TS/as.md',
                    '/TS/type.md',
                    '/TS/function.md',
                    '/TS/class.md',
                    '/TS/interface.md',
                    '/TS/generics.md',
                    '/TS/module.md',
                    // '/TS/Vue3.md'
                ]
            },
                {
                text: '小程序',
                collapsible: true,
                children: [
                    '/xiaochengxutixi/start.md',
                    '/xiaochengxutixi/yufa.md',
                    '/xiaochengxutixi/jinjie.md',
                ]
            },
            {
                text: 'Git系列',
                collapsible: true,
                children: [
                    '/ggit/start.md',
                ]
            },
            // {
            //     text: '可视化',
            //     collapsible: true,
            //     children: [
            //         '/keshihua/rumen.md',
            //         '/keshihua/echarts.md',
            //     ]
            // },
            // {
            //     text: 'Node系列',
            //     collapsible: true,
            //     children: [
            //         '/node/start.md',
            //         '/node/mokuaihua.md',
            //         '/node/neizhimokuai.md',
            //         '/node/baoguanli.md',
            //         '/node/buffer.md',
            //         '/node/stream.md',
            //         '/node/http.md',
            //         '/node/express.md',
            //         '/node/zhongjianjian.md',
            //         '/node/jiekou.md',
            //     ]
            // },
            // {
            //     text: 'Git系列',
            //     collapsible: true,
            //     children: [
            //         '/git/start.md'
            //     ]
            // },
            // {
            //     text: '微信小程序系列',
            //     collapsible: true,
            //     children: [
            //         '/xiaochengxu/renshi.md',
            //         '/xiaochengxu/suzhu.md',
            //         '/xiaochengxu/jichu.md',
            //         '/xiaochengxu/jinjie.md',
            //         '/xiaochengxu/qingqiu.md',
            //         '/xiaochengxu/yemiandaohang.md',
            //         '/xiaochengxu/yemianshijian.md',
            //         '/xiaochengxu/shengmingzhouqi.md',
            //         '/xiaochengxu/xiaoxiangmu.md',
            //         '/xiaochengxu/zidingyizujian.md',
            //         '/xiaochengxu/zujianshengming.md',
            //         '/xiaochengxu/tongxin.md',
            //         '/xiaochengxu/npm.md',
            //         '/xiaochengxu/shujugongxiang.md',
            //         ]
            // },
            // {
            //     text: '微信小程序经验',
            //     collapsible: true,
            //     children: [
            //         '/xiaochengxu2/shiwu.md',
            //         '/xiaochengxu2/taolu.md'
            //         ]
            // },
            {
                text: 'uni-app',
                collapsible: true,
                children: [
                    '/uni-app/start.md',
                    '/uni-app/yufa.md',
                    '/uni-app/gouwujie.md',
                    ]
            },
            // {
            //     text: '小程序音乐开发项目',
            //     collapsible: true,
            //     children: [
            //         '/xiaochengxuyinyue/dajian.md',
            //         '/xiaochengxuyinyue/shouye.md'
            //         ]
            // },
            {
                text: '前台项目',
                collapsible: true,
                children: [
                    '/front/start.md',
                    '/front/zujian.md',
                    '/front/header.md',
                    '/front/xiangyingshi.md',
                    '/front/zhuti.md',
                    // '/front/lanjiazai.md',
                    '/front/changliebiao.md',
                    '/front/liandong.md',
                    '/front/xiazai.md',
                    '/front/luyou.md',
                    '/front/biaodan.md',
                    '/front/tupian.md',
                    '/front/yidongduan.md',
                    // '/front/denglu.md',
                    '/front/fankui.md',
                ]
            },
            // {
            //     text: '电商项目',
            //     collapsible: true,
            //     children: [
            //         '/chaqi/start.md',
            //     ]
            // },
            {
                text: '旅途项目',
                collapsible: true,
                children: [
                    '/hongyuan/start.md',
                    '/hongyuan/service.md',
                    '/hongyuan/start2.md',
                    '/hongyuan/yewu2.md',
                    '/hongyuan/yewu3.md',
                ]
            },
            {
                text: 'Vue3后台管理项目',
                collapsible: true,
                children: [
                    '/vue-admin/dajian.md',
                    '/vue-admin/denglu.md',
                    '/vue-admin/layout.md',
                    '/vue-admin/tongyong.md',
                    '/vue-admin/mokuai.md',
                    '/vue-admin/yonghu.md',
                    '/vue-admin/quanxian.md',
                    '/vue-admin/dongtaibiaoge.md',
                    '/vue-admin/fuwenben.md',
                    ]
            },
            {
                text: '日常记账项目',
                collapsible: true,
                children: [
                    '/jizhang/dajian.md',
                    '/jizhang/zujian.md',
                    '/jizhang/yewu.md',
                ]
            },
            {
                text: '基于Element Plus二次封装组件',
                collapsible: true,
                children: [
                    '/fengzhuang/dajian.md',
                    '/fengzhuang/chuxia.md',
                    '/fengzhuang/zhongshang.md',
                    ]
            },
            // {
            //     text: 'Element-ui',
            //     collapsible: true,
            //     children: [
            //         '/elementui/jicheng.md',
            //     ]
            // },
            // {
            //     text: 'uni-app商城',
            //     collapsible: true,
            //     children: [
            //         '/uniapp/start.md',
            //         '/uniapp/tabbar.md',
            //         ]
            // },
            // {
            //     text: 'http系列',
            //     collapsible: true,
            //     children: [
            //         '/http/xieyi.md',
            //     ]
            // },
            {
                text: 'Vue2 UI',
                collapsible: true,
                children: [
                    '/vue2ui/layout.md',
                    '/vue2ui/toast.md',
                    '/vue2ui/tabs.md',
                    ]
            },
            {
                text: 'Vue3 UI',
                collapsible: true,
                children: [
                    '/vue3UI/start.md',
                    '/vue3UI/switch.md',
                    '/vue3UI/dialog.md',
                    '/vue3UI/tabs.md',
                    '/vue3UI/Tooltip.md',
                    '/vue3UI/build.md',
                    ]
            },
            {
                text: 'HRSaas项目',
                collapsible: true,
                children: [
                    '/hrsass/start.md',
                    '/hrsass/login.md',
                    '/hrsass/zhuye.md',
                    '/hrsass/luyou.md',
                    '/hrsass/zuzhijiagou.md',
                    '/hrsass/gongsi.md',
                    '/hrsass/yuangong.md',
                    '/hrsass/tupian.md',
                    '/hrsass/quanxian.md',
                    '/hrsass/shouye.md',
                    '/hrsass/tab.md',
                    '/hrsass/bushu.md',
                ]
            },
            {
                text: 'Vue3 + TS 后台管理项目',
                collapsible: true,
                children: [
                    '/cms/code.md',
                    '/cms/axioos.md',
                    '/cms/axiosF.md',
                    '/cms/1.md',
                    '/cms/2.md',
                    '/cms/3.md',
                    '/cms/4.md',
                    '/cms/5.md',
                    '/cms/6.md',
                    '/cms/7.md',
                    ]
            },
            {
                text: '每日头条项目',
                collapsible: true,
                children: [
                    '/toutiao/chushihua.md',
                    '/toutiao/denglu.md',
                    '/toutiao/geren.md',
                    '/toutiao/wenzhang.md',
                    '/toutiao/pindao.md',
                    '/toutiao/sousuo.md',
                    '/toutiao/xiangqing.md',
                    '/toutiao/pinglun.md',
                    // '/toutiao/yonghu.md',
                    '/toutiao/bianji.md',
                    ]
            },
            // {
            //     text: '仿知乎专栏项目',
            //     collapsible: true,
            //     children: [
            //         '/zhuanlanxiangmu/start.md'
            //         ]
            // },
            // {
            //     text: '脚手架项目',
            //     collapsible: true,
            //     children: [
            //         '/admin-project/start.md',
            //         '/admin-project/vite.md',
            //         '/admin-project/axios.md',
            //         '/admin-project/tailwindcss.md',
            //         '/admin-project/component.md',
            //         '/admin-project/routerAutoload.md',
            //         '/admin-project/form.md',
            //         '/admin-project/token.md',
            //         '/admin-project/guard.md',
            //         '/admin-project/menu.md',
            //         '/admin-project/backMainUI.md',
            //         '/admin-project/moduleRoute.md',
            //         '/admin-project/improveMenu.md',
            //         '/admin-project/reactive.md',
            //         '/admin-project/auth.md',
            //         '/admin-project/markdown.md',
            //         '/admin-project/package.md',
            //         '/admin-project/wangEditor.md',
            //         '/admin-project/animationList.md',
            //         '/admin-project/optimize.md',
            //     ]
            // },
            // {
            //     text: 'json-server与mock',
            //     sidebarDepth: 2,
            //     link:'/json-server与mock/README.md',
            //     children: []
            // }
        ],
    }
}
