import type { Plugin } from 'vuepress'

export default (): Plugin => {
    return {
        name: '@vuepress/plugin-markdown-code',
        extendsMarkdown: (md) => {

        }
    }
}
