<template>
    <div ref="docsearchRef"></div>
</template>

<script lang="ts" setup>
import '@docsearch/css'

import { onMounted, ref } from 'vue'
import docsearch from '@docsearch/js'
import useLocaleReceiver from '../hook/useLocales'
import { useSiteLocaleData } from '@vuepress/client'

import { apiKey, appId, indexName } from '../../meta'

const docsearchRef = ref()

const siteLocaleData = useSiteLocaleData()
const { t } = useLocaleReceiver(siteLocaleData.value)

onMounted(() => {
    docsearch({
        container: docsearchRef.value,
        apiKey,
        appId,
        indexName,
        placeholder: t('docsearch.placeholder')
    })
})
</script>
