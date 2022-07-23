import { defineStore } from 'pinia'
import { useSiteLocaleData } from '@vuepress/client'

const siteLocaleData = useSiteLocaleData()

const useMenuStore = defineStore('menu', {
    state: () => ({
        navbarActiveKey: ''
    }),
    getters: {
        getSidebar() {
            return siteLocaleData.value.sidebar
        }
    }
})

export default useMenuStore
