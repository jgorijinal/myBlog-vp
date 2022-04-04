export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "sidebar": [
    {
      "text": "Vue系列",
      "collapsible": true,
      "sidebarDepth": 2,
      "children": [
        {
          "text": "Vue和React对比",
          "link": "/vue/character.md",
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
        }
      ]
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
  "lastUpdated": true,
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
