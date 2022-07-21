import type { InjectionKey, UnwrapNestedRefs } from 'vue'

import { provide, inject, reactive } from 'vue'
import { title, author, description } from '../../meta'

export interface ConfigHookProviderKey {
    title: string
    author: string
    description: string
    prefixCls: string
    getPrefixCls: (suffixCls: string) => string
}

export const ConfigProviderKey: InjectionKey<ConfigHookProviderKey> = Symbol('ConfigProvider')

export const defaultConfigProvider: UnwrapNestedRefs<ConfigHookProviderKey> = reactive({
    title,
    author,
    description,
    prefixCls: 'wanderer-theme',
    getPrefixCls(suffixCls) {
        return `wanderer-theme-${suffixCls}`
    }
})

export const useConfigReceiver = (value: ConfigHookProviderKey) => {
    provide(ConfigProviderKey, value)
}

export const useConfigProvider = () => {
    return inject(ConfigProviderKey, defaultConfigProvider)
}
