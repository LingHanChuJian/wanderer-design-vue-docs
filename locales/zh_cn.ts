export default {
    lang: 'zh-cn',
    title: 'Wanderer Design Vue',
    description: 'blog UI 界面设计基于 Vue 3.x 实现',
    selectText: '选择语言',
    label: '简体中文',
    docsearch: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
            }
        }
    },
    footer: {
        author: '{year} · 凌寒初见',
        description: '月影流花花不语 * 梦入烟水水不兴',
        survive: 'd 天 h 小时 s 秒',
        info: '{title} 存活 {time}'
    },
    menu: [
        {
            title: '文档',
            link: '/',
            name: 'docs'
        },
        {
            title: '组件',
            link: '/components/layout',
            name: 'components'
        }
    ],
    side: {
        docs: [
            {
                title: 'Wanderer Design Vue',
                link: '/',
                name: 'WandererDesignDocs',
            },
            {
                title: '快速上手',
                link: '/quickstart',
                name: 'QuickStart',
            }
        ],
        components: [
            {
                title: 'Layout 布局',
                link: '/components/layout',
                name: 'Layout',
            },
            {
                title: 'Menu 菜单',
                link: '/components/menu',
                name: 'Menu',
            }
        ]
    }
}
