import 'uno.css'
// import { useConfigReceiver } from './hook/useConfig'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // node
    },
    setup() {
        // 提供config配置
        // useConfigReceiver()
    },
    rootComponents: []
})
