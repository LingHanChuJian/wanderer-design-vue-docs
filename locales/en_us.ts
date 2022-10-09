export default {
    lang: 'en-us',
    title: 'Wanderer Design Vue',
    description: 'Personal blog UI is implemented based on Vue 3.x',
    selectText: 'Languages',
    label: 'English',
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
    navbar: [
        {
            title: 'Docs',
            link: '/',
            name: 'docs'
        },
        {
            title: 'Components',
            link: '/components/layout',
            name: 'components'
        }
    ],
    sidebar: {
        '/': [
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
        ],
        '/components/layout': [
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
                title: 'Live2d',
                link: '/components/live2d',
                name: 'components-live2d',
            }
        ]
    }
}
