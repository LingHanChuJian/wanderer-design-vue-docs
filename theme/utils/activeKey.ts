import type { LinkOptions } from 'wanderer-design-vue'

import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const handleActiveKey = (route: RouteLocationNormalizedLoaded, link?: LinkOptions) => {
    const path = route.path.replace('.html', '')
    switch(typeof link) {
        case 'string': return link === path
        case 'object':
            if (typeof link.to === 'string') {
                return link.to === path
            }
            return (link.to as { path: string }).path === path
    }
}
