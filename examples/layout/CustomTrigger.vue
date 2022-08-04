<template>
    <layout class="border-solid border-#f0f2f5 boder-1px">
        <Layout.Sider v-model:collapsed="collapsed" style="box-shadow: 0 2px 8px #f0f1f2;">
            <Menu mode="vertical" v-model:activeKey="activeKey" v-model:openKeys="openKeys">
                <div class="h-75px lh-75px text-center">logo</div>
                <Menu.SubMenu name="user">
                    <template #title>
                        <i class="i-bx:user inline-block"></i>
                        User
                    </template>
                    <Menu.MenuItem name="user-one">User One</Menu.MenuItem>
                    <Menu.MenuItem name="user-two">User Two</Menu.MenuItem>
                    <Menu.MenuItem name="user-three">User Three</Menu.MenuItem>
                </Menu.SubMenu>
                <Menu.MenuItem name="archive">
                    <i class="i-fluent:archive-20-regular inline-block"></i>
                    归档
                </Menu.MenuItem>
            </Menu>
        </Layout.Sider>
        <layout>
            <Layout.Header class="p-[0px_10px]" style="box-shadow: 0 2px 8px #f0f1f2;">
                <div class="w-25px h-25px inline-block cursor-pointer translate-y-1/2" @click="() => (collapsed = !collapsed)">
                    <i v-show="!collapsed" class="i-ant-design:menu-fold-outlined block w-inherit h-inherit"></i>
                    <i v-show="collapsed" class="i-ant-design:menu-unfold-outlined block w-inherit h-inherit"></i>
                </div>
            </Layout.Header>
            <Layout.Content class="p-20px h-300px">Content</Layout.Content>
        </layout>
    </layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Layout, Menu } from 'wanderer-design-vue'

const collapsed = ref(false)
const openKeys = ref(['user'])
const activeKey = ref('user-one')
</script>
