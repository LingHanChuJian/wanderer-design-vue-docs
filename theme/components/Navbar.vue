<template>
    <nav :class="prefixCls">
        <SideButton @toggle-sidebar="toggleSidebar"></SideButton>
        <Logo />
        <div :class="`${prefixCls}-menu-wrap`">
            <Items mode="horizontal" v-model:activeKey="activeKey" :items="items" @click="handleClick"></Items>
            <a class="i-ant-design-github-filled w-20px h-20px" :href="wandererLink" target="_blank"></a>
            <Docsearch />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './items'
import type { MenuInfo } from 'wanderer-design-vue'

import Logo from './Logo.vue'
import Items from './Items.vue'
import Docsearch from './Docsearch.vue'
import SideButton from './SideButton.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import emitter from '../utils/eventBus'
import { useSiteLocaleData } from '@vuepress/client'
import { handleActiveKey } from '../utils/activeKey'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls, wandererLink } = useConfigProvider()
const prefixCls = getPrefixCls('navbar')

const route = useRoute()
const activeKey = ref<string | number>('')
const siteLocaleData = useSiteLocaleData()
const navbar = siteLocaleData.value.navbar
const sidebar = siteLocaleData.value.sidebar

const initActiveKey = () => {
    const result = navbar.find((item: ItemsProps) => handleActiveKey(route, item.link))
    if (!!result) {
        activeKey.value = result.name
        return
    }

    for(const link in sidebar) {
        const isSidebar = sidebar[link].find((item: ItemsProps) => handleActiveKey(route, item.link))
        if (!!isSidebar) {
            navbar.forEach((item: ItemsProps) => {
                if (item.link === link) {
                     activeKey.value = item.name
                }
            })
            break
        }
    }
}
initActiveKey()
const items: ItemsProps[] = navbar

const emit = defineEmits(['toggle-sidebar', 'menu'])
const toggleSidebar = () => {
    emit('toggle-sidebar')
}

const handleClick = (info: MenuInfo) => {
    emitter.emit('navbarMenuClick', info)
}
</script>

<style lang="less" scoped>
@import '../styles/default.less';

@prefix-cls: ~'@{wanderer-theme-prefix}-navbar';

.@{prefix-cls} {
    width: 100%;
    padding: 0 10px;
    display: inline-flex;
    justify-content: space-between;

    &-menu-wrap {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
