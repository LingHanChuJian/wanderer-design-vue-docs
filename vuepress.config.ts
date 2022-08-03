import theme from './theme'
import locales from './locales'
import unocss from 'unocss/vite'
import { path } from '@vuepress/utils'
import vitePluginImp from 'vite-plugin-imp'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import { defineUserConfig, viteBundler } from 'vuepress'
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
    markdown: {
        importCode: {
            handleImportPath: str => str.replace(/^@examples/, path.resolve(__dirname, 'examples'))
        },
        // code: {
        //     highlightLines: false,
        //     lineNumbers: false
        // }
    },
    bundler: viteBundler({
        viteOptions: {
            resolve: {
                alias: [
                    {
                        find: /\/@\//,
                        replacement: process.cwd() + '/'
                    }
                ]
            },
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
                        presetWind({ dark: 'media' }) as any,
                        presetIcons()
                    ]
                })
            ]
        }
    })
})
