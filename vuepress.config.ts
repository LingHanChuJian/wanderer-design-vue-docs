import theme from './theme'
import locales from './locales'
import unocss from 'unocss/vite'
import { path } from '@vuepress/utils'
import presetUno from '@unocss/preset-uno'
import vitePluginImp from 'vite-plugin-imp'
import presetIcons from '@unocss/preset-icons'
import { defineUserConfig, viteBundler } from 'vuepress'
import { font, title, author, description, keywords } from './meta'

interface IMatcher {
    pattern: RegExp
    styleDir: string
}

const matchComponents: IMatcher[] = [
    {
        pattern: /^Button/i,
        styleDir: 'button',
    },
    {
        pattern: /^Dropdown/i,
        styleDir: 'dropdown'
    },
    {
        pattern: /^Layout|^Header|^Sider|^Content|^Footer/i,
        styleDir: 'layout'
    },
    {
        pattern: /^Live2d/i,
        styleDir: 'live2d'
    },
    {
        pattern: /^Menu|^Sub-Menu/i,
        styleDir: 'menu'
    },
    {
        pattern: /^Popup/i,
        styleDir: 'popup'
    },
    {
        pattern: /^Timeline|^Sub-Timeline/i,
        styleDir: 'timeline'
    }
]

function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
}

function getStyleDir(compName: string): string {
    let styleDir: string | undefined
    for (let i = 0, len = matchComponents.length; i < len; i++) {
      const matcher = matchComponents[i]
      if (compName.match(matcher.pattern)) {
        styleDir = matcher.styleDir
        break
      }
    }
    if (!styleDir)
      styleDir = kebabCase(compName)
  
    return styleDir
}

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
    clientConfigFile: path.resolve(__dirname, 'setup.ts'),
    markdown: {
        importCode: {
            handleImportPath: str => str.replace(/^@examples/, path.resolve(__dirname, 'examples'))
        },
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
                                const dir = getStyleDir(name)
                                return `wanderer-design-vue/es/${dir}/style`
                            }
                        }
                    ]
                }),
                unocss({
                    presets: [
                        presetUno({ dark: 'media' }) as any,
                        presetIcons()
                    ]
                })
            ]
        }
    })
})
