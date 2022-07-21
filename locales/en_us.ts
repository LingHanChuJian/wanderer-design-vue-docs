export default {
    lang: 'en-us',
    title: 'Wanderer Design Vue',
    description: 'Personal blog UI is implemented based on Vue 3.x',
    selectText: 'Languages',
    label: 'English',
    docsearch: {
        placeholder: 'Search Documentation',
        translations: {
            button: {
              buttonText: 'Search Documentation',
            }
        }
    },
    footer: {
        author: '{year} · Mr. LingHanChuJian',
        description: 'The shadow of the moon flows and the flowers are silent',
        survive: 'd [Day] h [Hour] s [Second]',
        info: '{title} survive {time}'
    },
    menu: [
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
    side: {
        docs: [
            {
                title: 'Wanderer Design Vue',
                link: '/',
                name: 'WandererDesignDocs',
            },
            {
                title: 'Quick Start',
                link: '/quickstart',
                name: 'QuickStart',
            },
            {
                title: 'Cuslinkmize Theme',
                link: '/cuslinkmizetheme',
                name: 'CuslinkmizeTheme',
            }
        ],
        components: [
            {
                title: 'Layout',
                link: '/components/layout',
                name: 'Layout',
            },
            {
                title: 'Menu',
                link: '/components/menu',
                name: 'Menu',
            }
        ]
    }
}
