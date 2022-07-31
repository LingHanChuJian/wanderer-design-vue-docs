import Examples from './Examples.vue'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app }) {
        app.component('Examples', Examples)
    }
})
