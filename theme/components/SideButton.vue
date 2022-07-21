<template>
    <div :class="prefixCls" @click="toggleSidebar">
        <div :class="iconCls"></div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('side-button')

const emit = defineEmits(['toggle-sidebar'])

const opened = ref(false)
const iconCls = computed(() => {
    return [
        `${prefixCls}-icon`,
        {
            [`${prefixCls}-icon-opened`] : opened.value
        }
    ]
})

const toggleSidebar = () => {
    emit('toggle-sidebar')
    opened.value = !opened.value
}
</script>

<style lang="less" scoped>
@import '../styles/default.less';

@prefix-cls: ~'@{wanderer-theme-prefix}-side-button';

.icons-menu() {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: @black-color;
    transition: all 0.2s;
}

.@{prefix-cls} {
    display: inline-block;
    margin-left: -10px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: relative;

    &-icon {
        top: 24px;
        left: 10px;
        .icons-menu();
        transition-duration: 0.2s;

        &::before {
            top: -8px;
            left: 0;
            content: "";
            .icons-menu();
            transition-duration: 0.5s;
        }

        &::after {
            top: 8px;
            left: 0;
            content: "";
            .icons-menu();
            transition-duration: 0.5s;
        }
    }

    &-icon-opened {
        background-color: transparent;

        &::before {
            top: 0;
            transform: rotate(-45deg);
        }

        &::after {
            top: 0;
            transform: rotate(45deg);
        }
    }

    @media screen and (min-width: @screen-mobile-width) {
        display: none;
    }
}
</style>
