import type { MenuInfo } from 'wanderer-design-vue'

import mitt from 'mitt'

type Events = {
    navbarMenuClick: MenuInfo
}

export default mitt<Events>()
