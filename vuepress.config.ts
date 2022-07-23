import theme from './theme'
import locales from './locales'
import unocss from 'unocss/vite'
import { path } from '@vuepress/utils'
import vitePluginImp from 'vite-plugin-imp'
import presetMini from '@unocss/preset-mini'
import presetIcons from '@unocss/preset-icons'
import { defineUserConfig, viteBundler } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { font, title, author, description, keywords } from './meta'

export default defineUserConfig({
    lang: 'en-US',
    theme,
    locales,
    title,
    description,
    head: [
        ['meta', { name: 'author', content: author }],
        ['meta', { name: 'keywords', content: keywords.join(', ') }],
        ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:description', content: description }],
        // ['meta', { property: 'og:url', content: ogUrl }],
        // ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { name: 'twitter:title', content: title }],
        ['meta', { name: 'twitter:description', content: description }],
        // ['meta', { name: 'twitter:image', content: ogImage }],
        // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['link', { href: font, rel: 'stylesheet' }]
    ],
    public: path.resolve(__dirname, 'public'),
    bundler: viteBundler({
        viteOptions: {
            plugins: [
                vitePluginImp({
                    libList: [
                        {
                            libName: 'wanderer-design-vue',
                            style(name) {
                                return `wanderer-design-vue/es/${name}/style/index`
                            }
                        }
                    ]
                }),
                unocss({
                    presets: [
                        presetIcons(),
                        presetMini({
                            dark: 'media'
                        })
                    ]
                })
            ]
        }
    }),
    plugins: [
        nprogressPlugin()
    ]
})
