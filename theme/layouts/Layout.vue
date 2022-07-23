<template>
    <Layout :class="prefixCls">
        <Layout.Header style="box-shadow: 0 2px 8px #f0f1f2;"><Navbar @toggle-sidebar="toggleSidebar" /></Layout.Header>
        <Layout>
            <Layout.Sider v-model:collapsed="collapsed" :class="`${prefixCls}-sidebar`">
                <Sidebar />
            </Layout.Sider>
            <Layout.Content>
                <keep-alive>
                    <Content />
                </keep-alive>
            </Layout.Content>
        </Layout>
        <Layout.Footer><Footer /></Layout.Footer>
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

const collapsed = ref(true)
const toggleSidebar = () => {
    collapsed.value = !collapsed.value
}
</script>

<style lang="less">
@import '../styles/default.less';
@import '../styles/index.less';

</style>
