<template>
    <nav :class="prefixCls">
        <Items mode="vertical" v-model:activeKey="activeKey" :items="items"></Items>
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './items'

import Items from './Items.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useConfigProvider } from '../hook/useConfig'
import { useSiteLocaleData } from '@vuepress/client'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('sidebar')

const route = useRoute()
const activeKey = ref('')
const items = ref([])
const siteLocaleData = useSiteLocaleData()
const sidebar = siteLocaleData.value.sidebar
const initActiveKey = () => {
    for(const key in sidebar) {
        const result = sidebar[key].find((item: ItemsProps) => item.link === route.path)
        if (!!result) {
            items.value = sidebar[key]
            activeKey.value = result.name
        }
    }
}
initActiveKey()
</script>
