<template>
    <div :class="prefixCls">
        <p :class="['i-fa-regular-snowflake', `${prefixCls}-snowflake`, 'w-100%']"></p>
        <p>&copy;{{ t('footer.author', { year }) }}</p>
        <p>{{ t('footer.description') }}</p>
        <p><span :class="`${prefixCls}-dance`">(ง •̀_•́)ง</span> {{ t('footer.info', { title, time }) }}</p>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import useLocaleReceiver from '../hook/useLocales'
import { useSiteLocaleData } from '@vuepress/client'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useConfigProvider } from '../hook/useConfig'
// import Snowflake from '~icons/fa-regular/snowflake'

const { getPrefixCls, title } = useConfigProvider()
const prefixCls = getPrefixCls('footer-info')

const siteLocaleData = useSiteLocaleData()
const { t } = useLocaleReceiver(siteLocaleData.value)

const liveTime = (value: string) => {
    const duration = dayjs(new Date()).diff(dayjs(value))
    return dayjs(duration).format(t('footer.survive'))
}

let timer: number
const time = ref('')
const year = dayjs(new Date()).year()

onMounted(() => {
    if (typeof window !== undefined) {
        timer = window.setInterval(() => time.value = liveTime('2022/06/13'))
    }  
})

onBeforeUnmount(() => {
    if (typeof window !== undefined && timer) { window.clearInterval(timer) }
})

</script>

<style lang="less" scoped>
@import '../styles/default.less';

@prefix-cls: ~'@{wanderer-theme-prefix}-footer-info';


.@{prefix-cls} {
    text-align: center;

    p {
        margin: 5px 0;
    }

    &-snowflake {
        animation: csnow 12s infinite linear;
    }

    &-dance {
        display: inline-block;
        animation: dance 4s infinite ease-in-out;
    }
}

@keyframes csnow {
    0% {
        transform:rotate(0deg);
    }

    100% {
        transform:rotate(360deg);
    }
}

@keyframes dance {
    2%, 24%, 80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }

    4%, 68%, 98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }

    38%, 6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }

    8%, 86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }

    10%, 72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }

    12%, 64%, 78%, 96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }

    14%, 54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }

    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }

    18%, 22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }

    20%, 36%, 46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }

    26%, 50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }

    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }

    30%, 40%, 62%, 76%, 88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }

    32%, 34%, 66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }

    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }

    44%, 70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }

    48%, 74%, 82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }

    52%, 56%, 60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }

    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }

    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }

    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }

    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }

    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }

    0%, 100% {
        transform: translate(0, 0) rotate(0);
    }
}
</style>
