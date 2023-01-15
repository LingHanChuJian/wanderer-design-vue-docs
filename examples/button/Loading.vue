<template>
    <Button class="mr-10px" loading>Loading</Button>
    <Button class="mr-10px" size="small" loading>Loading</Button>
    <Button class="mr-10px" :loading="loading" @click="handleClick">
        <template #icon>
            <i class="i-ant-design:download-outlined inline-block w-20px h-20px"></i>
        </template>
        下载
    </Button>
    <Button class="mr-10px" loading></Button>
    <Button loading shape="round"></Button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from 'wanderer-design-vue'

const loading = ref(false)
const handleClick = () => {
    loading.value = true

    setTimeout(() => {
        loading.value = false
    }, 3000)
}
</script>
