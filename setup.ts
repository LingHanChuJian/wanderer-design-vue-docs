import { defineClientConfig, withBase } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        router.beforeEach((to, from) => {
            if (to.path.includes('live2d')) {
                if (document.querySelector('#live2d-core')) { return }
                const script = document.createElement('script')
                script.setAttribute('id', 'live2d-core')
                script.setAttribute('defer', 'defer')
                script.setAttribute('type', 'text/javascript')
                script.setAttribute('src', withBase('/Core/live2dcubismcore.min.js'))
                document.body.appendChild(script)
            }
        })
    },
    setup() {
    },
    rootComponents: []
})
