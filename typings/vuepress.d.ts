import '@vuepress/client'

declare module '@vuepress/client' {
    interface SiteLocaleData {
        [key: string]: any
    }
}
