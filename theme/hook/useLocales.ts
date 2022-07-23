import type { SiteLocaleData } from '@vuepress/client'

import { reactive } from 'vue'
import { get } from 'lodash-unified'

export type Options = Record<string, string | number>

export const translate = (path: string, options: Options | undefined, locale: SiteLocaleData) => {
    const value = get(locale, path, path)
    if (typeof value === 'string') {
        return value.replace( /\{(\w+)\}/g, (_, key) => `${options?.[key] ?? `{${key}}`}`)
    }
    return value
}

const useLocaleReceiver = (value: SiteLocaleData) => {
    return reactive({
        lang: value.lang,
        locale: value,
        t: (path: string, options?: Options) => translate(path, options, value)
    })
}

export default useLocaleReceiver
