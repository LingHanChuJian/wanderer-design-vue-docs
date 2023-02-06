<template>
    <Menu.SubMenu v-if="item.children" :name="item.name" :link="item.link">
        <template #title>{{ item.title }}</template>
        <SubMenu v-for="childrenItem in item.children" :key="childrenItem.name" :item="childrenItem"></SubMenu>
    </Menu.SubMenu>
    <MenuItem v-else v-bind="$props" />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ItemsProps } from './interface'

import MenuItem from './MenuItem.vue'
import { Menu } from 'wanderer-design-vue'

defineProps({
    item: { type: Object as PropType<ItemsProps>, required: true }
})
</script>
