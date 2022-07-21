<template>
    <Layout :class="prefixCls">
        <Layout.Header><Navbar @toggle-sidebar="toggleSidebar" /></Layout.Header>
        <Layout>
            <Layout.Sider v-model:collapsed="collapsed" :class="`${prefixCls}-sidebar`"></Layout.Sider>
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
import { ref } from 'vue'
import Navbar from '@theme/Navbar.vue'
import Footer from '@theme/Footer.vue'
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

</style>
