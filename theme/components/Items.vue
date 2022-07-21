<template>
    <Menu :mode="mode" :activeKey="activeKey" @update:active-key="handlerActiveKey" @open-change="openChange" @click="menuClick">
        <template v-for="menu, index in items" :key="index">
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
import type { MenuMode } from 'wanderer-design-vue'

import { Menu } from 'wanderer-design-vue'

const emit = defineEmits(['click', 'update:activeKey', 'openChange'])

const props = defineProps({
    mode: { type: String as PropType<MenuMode> },
    activeKey: [String, Number],
    items: { type: Array as PropType<ItemsProps[]>, required: true }
})

const handlerActiveKey = (key: String | Number) => {
    emit('update:activeKey', key)
}

const openChange = (openKeys: Array<String | Number>) => {
    emit('openChange', openKeys)
}

const menuClick = (info: { key: String | Number, domEvent: MouseEvent }) => {
    emit('click', info)
}
</script>
