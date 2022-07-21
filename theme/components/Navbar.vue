<template>
    <nav :class="prefixCls">
        <SideButton @toggle-sidebar="toggleSidebar"></SideButton>
        <Logo />
        <div :class="`${prefixCls}-menu-wrap`">
            <Items mode="horizontal" :items="items"></Items>
            <a class="i-ant-design-github-filled w-20px h-20px" :href="wandererLink" target="_blank"></a>
            <Docsearch />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './items'

import Logo from './Logo.vue'
import Items from './Items.vue'
import Docsearch from './Docsearch.vue'
import SideButton from './SideButton.vue'
import { useConfigProvider } from '../hook/useConfig'
import { useSiteLocaleData } from '@vuepress/client'

const { getPrefixCls, wandererLink } = useConfigProvider()
const prefixCls = getPrefixCls('navbar')

const siteLocaleData = useSiteLocaleData()
const items: ItemsProps[] = siteLocaleData.value.menu

const emit = defineEmits(['toggle-sidebar'])
const toggleSidebar = () => {
    emit('toggle-sidebar')
}

const handleGithub = () => {
    window.open()
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
