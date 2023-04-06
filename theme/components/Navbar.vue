<template>
    <nav :class="prefixCls">
        <SideButton @toggle-sidebar="toggleSidebar"></SideButton>
        <Logo />
        <div :class="`${prefixCls}-menu-wrap`">
            <Button class="m-5px !px-5px" @click="handleLangClick">{{ siteLocaleData.label }}</Button>
            <a class="i-ant-design-github-filled w-50px h-30px" :href="wandererLink" target="_blank"></a>
            <Docsearch />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue'
import Docsearch from './Docsearch.vue'
import SideButton from './SideButton.vue'
import { Button } from 'wanderer-design-vue'

import { useRoute, useRouter } from 'vue-router'
import { useSiteLocaleData } from '@vuepress/client'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls, wandererLink } = useConfigProvider()
const prefixCls = getPrefixCls('navbar')

const route = useRoute()
const router = useRouter()

const siteLocaleData = useSiteLocaleData()

const emit = defineEmits(['toggle-sidebar', 'menu'])
const toggleSidebar = () => {
    emit('toggle-sidebar')
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
