import type { InjectionKey, UnwrapNestedRefs } from 'vue'

import { provide, inject, reactive } from 'vue'

export interface ConfigHookProviderKey {
    [key: string]: any
    prefixCls: string
    getPrefixCls: (suffixCls: string) => string
}

export const ConfigProviderKey: InjectionKey<ConfigHookProviderKey> = Symbol('ConfigProvider')

export const defaultConfigProvider: UnwrapNestedRefs<ConfigHookProviderKey> = reactive({
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
