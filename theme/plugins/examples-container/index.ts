import type { Plugin } from 'vuepress'

import { path } from '@vuepress/utils'
import { containerPlugins } from './containerPlugins'

export default () => {
    const plugin: Plugin = {
        name: '@vuepress/plugin-examples-container',
        clientConfigFile: path.resolve(__dirname, 'setup.ts'),
    }

    return [...containerPlugins(), plugin]
}
