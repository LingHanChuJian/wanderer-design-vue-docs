<template>
    <Menu :mode="mode" :active-key="activeKey" @update:active-key="handleActiveKey" @open-change="openChange" @click="menuClick">
        <template v-for="menu in items" :key="menu.name">
            <Menu.SubMenu v-if="menu.children" :name="menu.name">
                <template #title>
                    {{ menu.title }}
                </template>
                <Menu.MenuItem v-for="item in menu.children" :key="item.name" :name="item.name" :link="item.link">
                    {{ item.title }}
                </Menu.MenuItem>
            </Menu.SubMenu>
            <Menu.MenuItem v-else :name="menu.name" :link="menu.link">
                {{ menu.title }}
            </Menu.MenuItem>
        </template>
    </Menu>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ItemsProps } from './items'
import type { MenuMode, MenuInfo } from 'wanderer-design-vue'

import { Menu } from 'wanderer-design-vue'

const props = defineProps({
    mode: { type: String as PropType<MenuMode> },
    activeKey: [String, Number],
    items: { type: Array as PropType<ItemsProps[]>, required: true }
})

const emit = defineEmits(['click', 'update:activeKey', 'openChange'])

const handleActiveKey = (key: string | number) => {
    emit('update:activeKey', key)
}

const openChange = (openKeys: Array<string | number>) => {
    emit('openChange', openKeys)
}

const menuClick = (info: MenuInfo) => {
    emit('click', info)
}
</script>
