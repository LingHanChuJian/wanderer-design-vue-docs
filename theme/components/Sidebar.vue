<template>
    <nav :class="prefixCls">
        <Menu mode="vertical" v-model:activeKey="activeKey" :open-keys="openKeys" :items="sidebar" :key="key" />
    </nav>
</template>

<script lang="ts" setup>
import Menu from './menu'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { flatMapDeep, map } from 'lodash-es'
import { useSiteLocaleData } from '@vuepress/client'
import { handleActiveKey } from '../utils/activeKey'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('sidebar')

const key = ref('')
const route = useRoute()
const activeKey = ref<string | number>('/zh')
const siteLocaleData = useSiteLocaleData()
const sidebar = computed(() => siteLocaleData.value.sidebar)
const openKeys = computed(() => map(sidebar.value, 'name'))

const flatSidebar = flatMapDeep(sidebar.value, item => item.children)
for (let i = 0, len = flatSidebar.length; i < len; i++) {
    const { name, link } = flatSidebar[i]
    if (handleActiveKey(route, link)) {
        activeKey.value = name
    }
}
</script>
