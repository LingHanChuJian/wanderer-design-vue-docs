import 'uno.css'

import * as meta from '../meta'
import { createPinia } from 'pinia'
import { defineClientConfig } from '@vuepress/client'
import { useConfigReceiver, defaultConfigProvider } from './hook/useConfig'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // node
        const pinia = createPinia()
        app.use(pinia)
    },
    setup() {
        // 提供config配置
        useConfigReceiver(Object.assign(defaultConfigProvider, meta))
    },
    rootComponents: []
})
