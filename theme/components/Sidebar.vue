<template>
    <nav :class="prefixCls">
        <Menu mode="vertical" v-model:activeKey="activeKey" :items="items" :key="key" />
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './menu'

import Menu from './menu'

import { ref, computed } from 'vue'
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
const sidebar = computed(() => siteLocaleData.value.sidebar)

const initActiveKey = () => {
    for(const key in sidebar.value) {
        const result = sidebar.value[key].find((item: ItemsProps) => handleActiveKey(route, item.link))
        if (!!result) {
            items.value = sidebar.value[key]
            activeKey.value = result.name
        }
    }
}
initActiveKey()

emitter.on('navbarMenuClick', ({ link }) => {
    switch(typeof link) {
        case 'string':
            items.value = sidebar.value[link]
            activeKey.value = sidebar.value[link][0].name
            key.value = link
            break
        case 'object':
            if (typeof link.to === 'string') {
                items.value = sidebar.value[link.to]
                activeKey.value = sidebar.value[link.to][0].name
                key.value = link.to
                return
            }
            items.value = sidebar.value[(link.to as { path: string }).path]
            activeKey.value = sidebar.value[(link.to as { path: string }).path][0].name
            key.value = (link.to as { path: string }).path
            break
    }
})
</script>
