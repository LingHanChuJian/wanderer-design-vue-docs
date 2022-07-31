import type { Plugin } from 'vuepress'
import type { ImportCodePluginOptions } from './render/domeCodePlugin'

import { path } from '@vuepress/utils'
import { domeCodePlugin } from './render/domeCodePlugin'
import { containerPlugins } from './render/containerPlugins'

export default (): Plugin[] => {
    const options: ImportCodePluginOptions = {
        handleImportPath: (str) => str
    }

    const plugin: Plugin = {
        name: '@vuepress/plugin-examples-container',
        clientConfigFile: path.resolve(__dirname, 'setup.ts'),
        extendsMarkdownOptions: (markdownOptions) => {
            if (typeof markdownOptions.importCode === 'object') {
                options.handleImportPath = markdownOptions.importCode.handleImportPath
            }
        },
        extendsMarkdown: (md) => {
            md.use(domeCodePlugin, options)
        }
    }

    return [...containerPlugins() as any, plugin as any]
}
