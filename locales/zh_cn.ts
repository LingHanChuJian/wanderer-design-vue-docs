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
        survive: '{day} 天 {hour} 小时 {minute} 分 {second} 秒',
        info: '{title} 存活 {time}'
    },
    navbar: [
        {
            title: '文档',
            link: '/zh',
            name: 'docs'
        },
        {
            title: '组件',
            link: '/zh/components/layout',
            name: 'components'
        }
    ],
    sidebar: {
        '/zh': [
            {
                title: 'Wanderer Design Vue',
                link: '/zh',
                name: 'docs-wanderer-design-vue',
            },
            {
                title: '开始',
                link: '/getting-started',
                name: 'docs-getting-started',
            }
        ],
        '/zh/components/layout': [
            {
                title: 'Layout 布局',
                link: '/zh/components/layout',
                name: 'components-layout',
            },
            {
                title: 'Menu 菜单',
                link: '/zh/components/menu',
                name: 'components-menu',
            },
            {
                title: 'Button 按钮',
                link: '/components/button',
                name: 'components-button',
            },
            {
                title: 'Live2d 看板娘',
                link: '/zh/components/live2d',
                name: 'components-live2d',
            }
        ]
    }
}
