import { defineClientConfig, withBase } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        router.beforeEach((to, from) => {
            if (to.path.includes('live2d')) {
                const script = document.createElement('script')
                script.setAttribute('defer', 'defer')
                script.setAttribute('type', 'text/javascript')
                script.setAttribute('src', withBase('/Core/live2dcubismcore.min.js'))
                document.head.appendChild(script)
            }
        })
    },
    setup() {
    },
    rootComponents: []
})
