<template>
    <div :class="prefixCls">
        <router-link to="/" style="text-decoration: none;">
            <span :class="`${prefixCls}-title`">
                <ruby>凌<rt>こん</rt></ruby>
                <ruby>寒<rt>にちは</rt></ruby>
            </span>
            <ruby>初见</ruby>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { useConfigProvider } from '../hook/useConfig'

const { getPrefixCls } = useConfigProvider()
const prefixCls = getPrefixCls('logo')
</script>

<style lang="less" scoped>
@import '../styles/default.less';

@prefix-cls: ~'@{wanderer-theme-prefix}-logo';

.@{prefix-cls} {
    display: inline-block;
    font-size: @text-font-size-lg;
    cursor: pointer;

    &:hover &-title {
        background-color: @text-hover-color;
        color: @white-color;

        rt {
            color: @text-hover-color;
        }
    }

    &-title {
        border-radius: @border-radius;
        transition: background 0.2s ease-in-out;
    }

    @media screen and (max-width: @screen-mobile-width) {
        display: none;
    }
}
</style>
