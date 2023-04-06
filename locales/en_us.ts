export default {
    lang: 'en-us',
    title: 'Wanderer Design Vue',
    description: 'Personal blog UI is implemented based on Vue 3.x',
    link: '/zh',
    label: '简体中文',
    docsearch: {
        placeholder: 'Search',
        translations: {
            button: {
              buttonText: 'Search',
            }
        }
    },
    footer: {
        author: '{year} · Mr. LingHanChuJian',
        description: 'The shadow of the moon flows and the flowers are silent',
        survive: '{day} day {hour} hour {minute} minute {second} second',
        info: '{title} survive {time}'
    },
    sidebar: [
        {
            title: 'Docs',
            name: 'docs',
            children: [
                {
                    title: 'Wanderer Design Vue',
                    link: '/',
                    name: 'docs-wanderer-design-vue',
                },
                {
                    title: 'Getting Started',
                    link: '/getting-started',
                    name: 'docs-getting-started',
                }
            ]
        },
        {
            title: 'Components',
            name: 'components',
            children: [
                {
                    title: 'Layout',
                    link: '/components/layout',
                    name: 'components-layout',
                },
                {
                    title: 'Menu',
                    link: '/components/menu',
                    name: 'components-menu',
                },
                {
                    title: 'Button',
                    link: '/components/button',
                    name: 'components-button',
                },
                {
                    title: 'Live2d',
                    link: '/components/live2d',
                    name: 'components-live2d',
                },
                {
                    title: 'Timeline',
                    link: '/components/timeline',
                    name: 'components-timeline'
                }
            ]
        }
    ]
}
