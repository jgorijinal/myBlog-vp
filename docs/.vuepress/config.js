module.exports = {
    // 站点配置
    base:'/myBlog-vp/',
    lang: 'zh-CN',
    title: 'Eren的博客 - 记录优于记忆',
    description: '这是我的第一个 VuePress 站点',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        displayAllHeaders: true,// 默认值：false
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        collapsable: true,
        sidebar: [
            // SidebarItem
            {
                text: 'Vue系列',
                collapsible: true,
                children: [
                    {
                        text: 'Vue和React对比',
                        link: '/vue/character.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的生命周期',
                        link: '/vue/lifeCycle.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的v-show和v-if的区别',
                        link: '/vue/showIf.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的computed和watch',
                        link: '/vue/computedWatch.md',
                        children: [],
                    },
                    {
                        text: 'Vue组件之间的通信方式',
                        link: '/vue/communication.md',
                        children: [],
                    },
                    {
                        text: 'Vue中常用的修饰符',
                        link: '/vue/modifier.md',
                        children: [],
                    },
                    {
                        text: 'Vue中常用的指令',
                        link: '/vue/directives.md',
                        children: [],
                    },
                    {
                        text: '使用Vue中的开发插件',
                        link: '/vue/plugin.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的slot插槽的使用',
                        link: '/vue/slot.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的表单的基本使用',
                        link: '/vue/form.md',
                        children: [],
                    },
                    {
                        text: 'Vue中的动态组件',
                        link: '/vue/dynamic.md',
                        children: [],
                    },

                ],
            },
            {
                text: 'Vue3系列',
                collapsible: true,
                children: [
                    '/vue3/vue3.md',
                    '/vue3/v-model.md',
                    '/vue3/composition.md',
                    '/vue3/script-setup.md',
                ]
            },
            {
                text: 'Vue Router系列',
                collapsible: true,
                children: [
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
                text: 'JS系列',
                collapsible: true,
                children: [
                    '/JS/promise.md',
                    '/JS/closure.md'
                ]
            },
            {
                text: '脚手架项目',
                collapsible: true,
                children: [
                    {
                        text: `路由初始配置`,
                        link: '/admin-project/start.md',
                        children: [],
                    },
                    {
                        text: `Vite环境变量`,
                        link: '/admin-project/vite.md',
                        children: [],
                    },
                ]
            },
            {
                text: 'json-server与mock',
                sidebarDepth: 2,
                link:'/json-server与mock/README.md',
                children: []
            }
        ],
    }
}