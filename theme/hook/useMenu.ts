import type { ItemsPorps } from '../components/items'

import { useSiteLocaleData } from '@vuepress/client'

const useMenu = () => {
    const siteLocaleData = useSiteLocaleData()
    return siteLocaleData.value.menu
}

const useSideMenu = (name: string| number) => {
    
}
