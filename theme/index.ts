import type { Theme } from 'vuepress'

import { path } from '@vuepress/utils'
import examples from './plugins/examples-container'

const theme = (): Theme => {
    return {
        name: 'vuepress-theme-wanderer',
        alias: {
            '@theme/Logo.vue': path.resolve(__dirname, 'components/Logo.vue'),
            '@theme/Footer.vue': path.resolve(__dirname, 'components/Footer.vue'),
            '@theme/Navbar.vue': path.resolve(__dirname, 'components/Navbar.vue'),
            '@theme/Sidebar.vue': path.resolve(__dirname, 'components/Sidebar.vue'),
        },
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            404: path.resolve(__dirname, 'layouts/404.vue')
        },
        clientConfigFile: path.resolve(__dirname, './setup.ts'),
        plugins: [
            ...examples()
        ]
    }
}

export default theme
