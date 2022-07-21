import 'uno.css'
import * as meta from '../meta'
import { defineClientConfig } from '@vuepress/client'
import { useConfigReceiver, defaultConfigProvider } from './hook/useConfig'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // node
    },
    setup() {
        // 提供config配置
        useConfigReceiver(Object.assign(defaultConfigProvider, meta))
    },
    rootComponents: []
})
