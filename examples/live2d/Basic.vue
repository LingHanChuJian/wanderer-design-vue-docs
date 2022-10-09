<template>
    <div class="relative w-100% h-1400px">
        <Live2d class="absolute" ref="live2dRef" :width="1400" :height="1400" :models="models"></Live2d>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
import { withBase } from '@vuepress/client'
import { Live2d } from 'wanderer-design-vue'

const live2dRef = ref()
const models = ref(['../models/Murasame/Murasame.model3.json'].map(item => withBase(item)))

onBeforeUnmount(() => {
    live2dRef.value.states.value.release()
})
</script>
