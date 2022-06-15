export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "displayAllHeaders": true,
  "collapsable": true,
  "lastUpdated": false,
  "sidebar": [
    {
      "text": "Vue系列",
      "collapsible": true,
      "children": [
        {
          "text": "Vue和React对比",
          "link": "/vue/character.md",
          "children": []
        },
        {
          "text": "Vue中的生命周期",
          "link": "/vue/lifeCycle.md",
          "children": []
        },
        {
          "text": "Vue中的v-show和v-if的区别",
          "link": "/vue/showIf.md",
          "children": []
        },
        {
          "text": "Vue中的computed和watch",
          "link": "/vue/computedWatch.md",
          "children": []
        },
        {
          "text": "Vue组件之间的通信方式",
          "link": "/vue/communication.md",
          "children": []
        },
        {
          "text": "Vue中常用的修饰符",
          "link": "/vue/modifier.md",
          "children": []
        },
        {
          "text": "Vue中常用的指令",
          "link": "/vue/directives.md",
          "children": []
        },
        {
          "text": "使用Vue中的开发插件",
          "link": "/vue/plugin.md",
          "children": []
        },
        {
          "text": "Vue中的slot插槽的使用",
          "link": "/vue/slot.md",
          "children": []
        },
        {
          "text": "Vue中的表单的基本使用",
          "link": "/vue/form.md",
          "children": []
        },
        {
          "text": "Vue中的动态组件",
          "link": "/vue/dynamic.md",
          "children": []
        }
      ]
    },
    {
      "text": "Vue3系列",
      "collapsible": true,
      "children": [
        "/vue3/vue3.md",
        "/vue3/v-model.md",
        "/vue3/composition.md",
        "/vue3/script-setup.md"
      ]
    },
    {
      "text": "Vue Router系列",
      "collapsible": true,
      "children": [
        "/vue-router/start.md",
        "/vue-router/routerHTML.md",
        "/vue-router/name.md",
        "/vue-router/params.md",
        "/vue-router/nest.md",
        "/vue-router/router-view-name.md",
        "/vue-router/redirectAlias.md",
        "/vue-router/function.md",
        "/vue-router/guard.md",
        "/vue-router/animation.md",
        "/vue-router/scroll.md",
        "/vue-router/lazyLoading.md",
        "/vue-router/dynamicRouter.md"
      ]
    },
    {
      "text": "CSS系列",
      "collapsible": true,
      "children": [
        "/css/init.md",
        "/css/grid.md"
      ]
    },
    {
      "text": "JS系列",
      "collapsible": true,
      "children": [
        "/JS/basic.md",
        "/JS/array.md",
        "/JS/function.md",
        "/JS/closure.md",
        "/JS/proto.md",
        "/JS/class.md",
        "/JS/promise.md",
        "/JS/reg.md",
        "/JS/module.md",
        "/JS/hongwei.md"
      ]
    },
    {
      "text": "TS系列",
      "collapsible": true,
      "children": [
        "/TS/start.md",
        "/TS/basic.md",
        "/TS/as.md",
        "/TS/class.md",
        "/TS/generics.md",
        "/TS/Vue3.md"
      ]
    },
    {
      "text": "Vue3组件库项目",
      "collapsible": true,
      "children": [
        "/vue3UI/start.md",
        "/vue3UI/switch.md",
        "/vue3UI/dialog.md",
        "/vue3UI/tabs.md",
        "/vue3UI/Tooltip.md",
        "/vue3UI/build.md"
      ]
    },
    {
      "text": "脚手架项目",
      "collapsible": true,
      "children": [
        "/admin-project/start.md",
        "/admin-project/vite.md",
        "/admin-project/axios.md",
        "/admin-project/tailwindcss.md",
        "/admin-project/component.md",
        "/admin-project/routerAutoload.md",
        "/admin-project/form.md",
        "/admin-project/token.md",
        "/admin-project/guard.md",
        "/admin-project/menu.md",
        "/admin-project/backMainUI.md",
        "/admin-project/moduleRoute.md",
        "/admin-project/improveMenu.md",
        "/admin-project/reactive.md",
        "/admin-project/auth.md",
        "/admin-project/markdown.md",
        "/admin-project/package.md",
        "/admin-project/wangEditor.md"
      ]
    },
    {
      "text": "json-server与mock",
      "sidebarDepth": 2,
      "link": "/json-server与mock/README.md",
      "children": []
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
