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
        displayAllHeaders: false ,// 默认值：false
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
                    {
                        text: 'Vue2到vue3的变化',
                        link: '/vue3/vue3.md',
                        children: [],
                    },
                    {
                        text: 'Vue3中的v-model的使用',
                        link: '/vue3/v-model.md',
                        children: [],
                    },
                    {
                        text: 'Vue3中的Composition API',
                        link: '/vue3/composition.md',
                        children: [],
                    },
                    {
                        text: 'Vue3中的Composition之script-setup',
                        link: '/vue3/script-setup.md',
                        children: [],
                    },
                ]
            },
            {
                text: 'Vue Router系列',
                collapsible: true,
                children: [
                    {
                        text: '初始配置',
                        link: '/vue-router/start.md',
                    },
                    {
                        text: 'HTML',
                        link: '/vue-router/routerHTML.md',
                        children: [],
                    },
                    {
                        text: '命名路由',
                        link: '/vue-router/name.md',
                        children: [],
                    },
                    {
                        text: '动态路由匹配',
                        link: '/vue-router/params.md',
                        children: [],
                    },
                    {
                        text:'嵌套路由',
                        link: '/vue-router/nest.md',
                        children: [],
                    },
                    {
                        text: '命名视图',
                        link: '/vue-router/router-view-name.md',
                        children: [],
                    },
                    {
                        text: '重定向和别名',
                        link: '/vue-router/redirectAlias.md',
                        children: [],
                    },
                    {
                        text: '编程式导航',
                        link: '/vue-router/function.md',
                        children: [],
                    },
                    {
                        text: '路由守卫',
                        link: '/vue-router/guard.md',
                        children: [],
                    },
                    {
                        text: '过度动画',
                        link: '/vue-router/animation.md',
                        children: [],
                    },
                    {
                        text: '滚动行为',
                        link: '/vue-router/scroll.md',
                        children: [],
                    },
                ]
            },
            {
                text: 'JS系列',
                collapsible: true,
                children: [
                    {
                        text: `Promise`,
                        link: '/JS/promise.md',
                        children: [],
                    }
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