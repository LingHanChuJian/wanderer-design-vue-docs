<template>
    <nav :class="prefixCls">
        <Items mode="vertical" v-model:activeKey="activeKey" :items="items" :key="key"></Items>
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './items'

import Items from './Items.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import emitter from '../utils/eventBus'
import { useSiteLocaleData } from '@vuepress/client'
import { handleActiveKey } from '../utils/activeKey'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('sidebar')

const key = ref('')
const items = ref([])
const route = useRoute()
const activeKey = ref<string | number>('')
const siteLocaleData = useSiteLocaleData()
const sidebar = siteLocaleData.value.sidebar
const initActiveKey = () => {
    for(const key in sidebar) {
        const result = sidebar[key].find((item: ItemsProps) => handleActiveKey(route, item.link))
        if (!!result) {
            items.value = sidebar[key]
            activeKey.value = result.name
        }
    }
}
initActiveKey()

emitter.on('navbarMenuClick', ({ link }) => {
    switch(typeof link) {
        case 'string':
            items.value = sidebar[link]
            activeKey.value = sidebar[link][0].name
            key.value = link
            break
        case 'object':
            if (typeof link.to === 'string') {
                items.value = sidebar[link.to]
                activeKey.value = sidebar[link.to][0].name
                key.value = link.to
                return
            }
            items.value = sidebar[(link.to as { path: string }).path]
            activeKey.value = sidebar[(link.to as { path: string }).path][0].name
            key.value = (link.to as { path: string }).path
            break
    }
})
</script>
