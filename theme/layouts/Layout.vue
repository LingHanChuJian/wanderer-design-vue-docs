<template>
    <Layout :class="prefixCls">
        <Layout.Header style="box-shadow: 0 2px 8px #f0f1f2;"><Navbar @toggle-sidebar="toggleSidebar" /></Layout.Header>
        <Layout>
            <Layout.Sider v-model:collapsed="collapsed" :class="`${prefixCls}-sidebar`" style="box-shadow: 0 2px 8px #f0f1f2;">
                <Sidebar />
            </Layout.Sider>
            <Layout>
                <Layout.Content :class="`${prefixCls}-content m-[20px_40px]`">
                    <keep-alive>
                        <Content class="markdown" />
                    </keep-alive>
                </Layout.Content>
                <Layout.Footer><Footer /></Layout.Footer>
            </Layout>
        </Layout>
    </Layout>
</template>

<script lang="ts" setup>
import Navbar from '@theme/Navbar.vue'
import Footer from '@theme/Footer.vue'
import Sidebar from '@theme/Sidebar.vue'

import { ref } from 'vue'
import { Layout } from 'wanderer-design-vue'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('layout')

const collapsed = ref(false)
const toggleSidebar = () => {
    collapsed.value = !collapsed.value
}
</script>

<style lang="less">
@import '../styles/default.less';
@import '../styles/index.less';

@layout-prefix-cls: ~'@{wanderer-theme-prefix}-layout';

.@{layout-prefix-cls} {
    
    @media (max-width: 860px) {
        &-content {
            margin: 10px;
        }
    }
}
</style>
