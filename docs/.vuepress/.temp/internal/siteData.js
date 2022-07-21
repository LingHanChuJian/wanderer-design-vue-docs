export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Wanderer Design Vue Docs",
  "description": "Personal blog UI is implemented based on Vue 3.x",
  "head": [
    [
      "meta",
      {
        "name": "author",
        "content": "凌寒初见"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "vue, vue3, wanderer, design, docs, vitest, typescript, vueComponent, component, components, ui, framework, frontend"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "Wanderer Design Vue Docs"
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "Personal blog UI is implemented based on Vue 3.x"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:title",
        "content": "Wanderer Design Vue Docs"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:description",
        "content": "Personal blog UI is implemented based on Vue 3.x"
      }
    ],
    [
      "link",
      {
        "href": "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap",
        "rel": "stylesheet"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-us",
      "title": "Wanderer Design Vue",
      "description": "Personal blog UI is implemented based on Vue 3.x",
      "selectText": "Languages",
      "label": "English",
      "docsearch": {
        "placeholder": "Search Documentation",
        "translations": {
          "button": {
            "buttonText": "Search Documentation"
          }
        }
      },
      "footer": {
        "author": "{year} · Mr. LingHanChuJian",
        "description": "The shadow of the moon flows and the flowers are silent",
        "survive": "d [Day] h [Hour] s [Second]",
        "info": "{title} survive {time}"
      },
      "menu": [
        {
          "title": "Docs",
          "link": "/",
          "name": "docs"
        },
        {
          "title": "Components",
          "link": "/components/layout",
          "name": "components"
        }
      ],
      "side": {
        "docs": [
          {
            "title": "Wanderer Design Vue",
            "link": "/",
            "name": "WandererDesignDocs"
          },
          {
            "title": "Quick Start",
            "link": "/quickstart",
            "name": "QuickStart"
          },
          {
            "title": "Cuslinkmize Theme",
            "link": "/cuslinkmizetheme",
            "name": "CuslinkmizeTheme"
          }
        ],
        "components": [
          {
            "title": "Layout",
            "link": "/components/layout",
            "name": "Layout"
          },
          {
            "title": "Menu",
            "link": "/components/menu",
            "name": "Menu"
          }
        ]
      }
    },
    "/zh/": {
      "lang": "zh-cn",
      "title": "Wanderer Design Vue",
      "description": "blog UI 界面设计基于 Vue 3.x 实现",
      "selectText": "选择语言",
      "label": "简体中文",
      "docsearch": {
        "placeholder": "搜索文档",
        "translations": {
          "button": {
            "buttonText": "搜索文档"
          }
        }
      },
      "footer": {
        "author": "{year} · 凌寒初见",
        "description": "月影流花花不语 * 梦入烟水水不兴",
        "survive": "d 天 h 小时 s 秒",
        "info": "{title} 存活 {time}"
      },
      "menu": [
        {
          "title": "文档",
          "link": "/",
          "name": "docs"
        },
        {
          "title": "组件",
          "link": "/components/layout",
          "name": "components"
        }
      ],
      "side": {
        "docs": [
          {
            "title": "Wanderer Design Vue",
            "link": "/",
            "name": "WandererDesignDocs"
          },
          {
            "title": "快速上手",
            "link": "/quickstart",
            "name": "QuickStart"
          }
        ],
        "components": [
          {
            "title": "Layout 布局",
            "link": "/components/layout",
            "name": "Layout"
          },
          {
            "title": "Menu 菜单",
            "link": "/components/menu",
            "name": "Menu"
          }
        ]
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
