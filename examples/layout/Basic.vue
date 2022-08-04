<template>
    <Layout class="text-#FFFFFF text-center mb-48px">
        <Layout.Header class="bg-#7dbcea">Header</Layout.Header>
        <Layout.Content class="bg-[rgba(16,142,233,1)] !min-h-120px lh-120px">Content</Layout.Content>
        <Layout.Footer class="bg-#7dbcea min-h-75px lh-75px">Footer</Layout.Footer>
    </Layout>

    <Layout class="text-#FFFFFF text-center mb-48px">
        <Layout.Header class="bg-#7dbcea">Header</Layout.Header>
        <Layout>
            <Layout.Sider v-model:collapsed="collapsed" class="bg-#3ba0e9 lh-120px">Sider</Layout.Sider>
            <Layout.Content class="bg-[rgba(16,142,233,1)] !min-h-120px lh-120px">Content</Layout.Content>
        </Layout>
        <Layout.Footer class="bg-#7dbcea min-h-75px lh-75px">Footer</Layout.Footer>
    </Layout>

    <Layout class="text-#FFFFFF text-center mb-48px">
        <Layout.Header class="bg-#7dbcea">Header</Layout.Header>
        <Layout>
            <Layout.Content class="bg-[rgba(16,142,233,1)] !min-h-120px lh-120px">Content</Layout.Content>
            <Layout.Sider v-model:collapsed="collapsed" class="bg-#3ba0e9 lh-120px">Sider</Layout.Sider>
        </Layout>
        <Layout.Footer class="bg-#7dbcea min-h-75px lh-75px">Footer</Layout.Footer>
    </Layout>

    <Layout class="text-#FFFFFF text-center mb-48px">
        <Layout.Sider v-model:collapsed="collapsed" class="bg-#3ba0e9 lh-270px">Sider</Layout.Sider>
        <Layout>
            <Layout.Header class="bg-#7dbcea">Header</Layout.Header>
            <Layout.Content class="bg-[rgba(16,142,233,1)] !min-h-120px lh-120px">Content</Layout.Content>
            <Layout.Footer class="bg-#7dbcea min-h-75px lh-75px">Footer</Layout.Footer>
        </Layout>
    </Layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Layout } from 'wanderer-design-vue'

const collapsed = ref(false)
</script>
