export default {
    lang: 'zh-cn',
    title: 'Wanderer Design Vue',
    description: 'blog UI 界面设计基于 Vue 3.x 实现',
    label: 'English',
    link: '',
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
    sidebar: [
        {
            title: '文档',
            name: 'zh-docs',
            children: [
                {
                    title: 'Wanderer Design Vue',
                    link: '/zh',
                    name: 'zh-docs-wanderer-design-vue',
                },
                {
                    title: '开始',
                    link: '/zh/getting-started',
                    name: 'zh-docs-getting-started',
                }
            ]
        },
        {
            title: '组件',
            name: 'zh-components',
            children: [
                {
                    title: 'Layout 布局',
                    link: '/zh/components/layout',
                    name: 'zh-components-layout',
                },
                {
                    title: 'Menu 菜单',
                    link: '/zh/components/menu',
                    name: 'zh-components-menu',
                },
                {
                    title: 'Button 按钮',
                    link: '/components/button',
                    name: 'zh-components-button',
                },
                {
                    title: 'Live2d 看板娘',
                    link: '/zh/components/live2d',
                    name: 'zh-components-live2d',
                },
                {
                    title: 'Timeline 时间轴',
                    link: '/zh/components/timeline',
                    name: 'zh-components-timeline'
                }
            ]
        }
    ]
}
