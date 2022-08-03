import type { Theme } from 'vuepress'

import { path } from '@vuepress/utils'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import examplesPlugin from './plugins/examples-container'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

const theme = (): Theme => {
    return {
        name: '@vuepress/theme-wanderer-design',
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
            nprogressPlugin(),
            prismjsPlugin({
                preloadLanguages: ['css', 'javascript', 'markdown', 'typescript', 'less', 'xml']
            }),
            examplesPlugin() as any
        ]
    }
}

export default theme
