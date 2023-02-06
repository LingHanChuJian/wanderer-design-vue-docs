<template>
    <Menu
        :mode="mode"
        :active-key="activeKey"
        @update:active-key="handleActiveKey"
        @open-change="openChange"
        @click="menuClick"
    >
        <SubMenu v-for="(item, index) in items" :key="index" :item="item" />
    </Menu>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ItemsProps } from './interface'
import type { MenuMode, MenuInfo } from 'wanderer-design-vue'

import SubMenu from './SubMenu.vue'
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
