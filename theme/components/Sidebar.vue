<template>
    <nav :class="prefixCls">
        
    </nav>
</template>

<script lang="ts" setup>
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('sidebar')
</script>
