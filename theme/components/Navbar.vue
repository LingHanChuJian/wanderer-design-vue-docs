<template>
    <nav :class="prefixCls">
        <SideButton @toggle-sidebar="toggleSidebar"></SideButton>
        <Logo />
        <div :class="`${prefixCls}-menu-wrap`">
            <Menu mode="horizontal" v-model:activeKey="activeKey" :items="navbar" @click="handleMenuClick" />
            <Button class="m-5px !px-5px" @click="handleLangClick">{{ siteLocaleData.label }}</Button>
            <a class="i-ant-design-github-filled w-50px h-30px" :href="wandererLink" target="_blank"></a>
            <Docsearch />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import type { ItemsProps } from './menu'
import type { MenuInfo } from 'wanderer-design-vue'

import Logo from './Logo.vue'
import Menu from './menu'
import Docsearch from './Docsearch.vue'
import SideButton from './SideButton.vue'
import { Button } from 'wanderer-design-vue'

import { ref, computed, watch } from 'vue'
import emitter from '../utils/eventBus'
import { useRoute, useRouter } from 'vue-router'
import { useSiteLocaleData } from '@vuepress/client'
import { handleActiveKey } from '../utils/activeKey'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls, wandererLink } = useConfigProvider()
const prefixCls = getPrefixCls('navbar')

const activeKey = ref<string | number>('')

const route = useRoute()
const router = useRouter()

const siteLocaleData = useSiteLocaleData()
const navbar = computed(() => siteLocaleData.value.navbar)
const sidebar = computed(() => siteLocaleData.value.sidebar)

watch(() => navbar.value, (v) => { console.log(JSON.stringify(v)) }, { immediate: true })

const initActiveKey = () => {
    const result = navbar.value.find((item: ItemsProps) => handleActiveKey(route, item.link))
    if (!!result) {
        activeKey.value = result.name
        return
    }

    for(const link in sidebar.value) {
        const isSidebar = sidebar.value[link].find((item: ItemsProps) => handleActiveKey(route, item.link))
        if (!!isSidebar) {
            navbar.value.forEach((item: ItemsProps) => {
                if (item.link === link) {
                    activeKey.value = item.name
                }
            })
            break
        }
    }
}

initActiveKey()

const emit = defineEmits(['toggle-sidebar', 'menu'])
const toggleSidebar = () => {
    emit('toggle-sidebar')
}

const handleMenuClick = (info: MenuInfo) => {
    emitter.emit('navbarMenuClick', info)
}

const handleLangClick = () => {
    router.push(siteLocaleData.value.link + route.path.replace('/zh', ''))
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
