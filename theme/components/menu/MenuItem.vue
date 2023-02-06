<template>
    <MenuItem :name="item.name" :link="item.link">
        {{ item.title }}
    </MenuItem>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ItemsProps } from './interface'

import { MenuItem } from 'wanderer-design-vue'

defineProps({
    item: { type: Object as PropType<ItemsProps>, required: true }
})
</script>
