<template>
    <section :id="uuid" :class="prefixCls">
        <section :class="`${prefixCls}-box-dome`">
            <slot name="dome"></slot>
        </section>
        <section :class="`${prefixCls}-box-meta`">
            <div :class="`${prefixCls}-box-title`">
                <a :href="`#${uuid}`">{{ title }}</a>
            </div>
            <div :class="`${prefixCls}-box-description`">
                <slot name="description"></slot>
            </div>
            <div :class="`${prefixCls}-box-actions`">
                <span :class="`${prefixCls}-box-actions-code`" @click="showCode">
                    <img v-show="!visible" :src="getAssets('expand.svg')" />
                    <img v-show="visible" :src="getAssets('unexpand.svg')" />
                </span>
            </div>
        </section>
        <section :class="`${prefixCls}-box-code`">
            <Dropdown appear :visible="visible">
                <slot name="code"></slot>
            </Dropdown>
        </section>
    </section>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { Dropdown } from 'wanderer-design-vue'

const props = defineProps({
    title: String
})

const instance = getCurrentInstance()

const prefixCls = 'examples'
const visible = ref(false)
const uuid = ref(`uuid-${prefixCls}-${instance?.uid}`)

const showCode = () => {
    visible.value = !visible.value
}

const getAssets = (name: string) => {
    return new URL(`./assets/${name}`, import.meta.url).href
}
</script>

<style lang="less" scoped>
@prefix-cls: examples;

.@{prefix-cls} {
    border: 1px solid #f0f0f0;

    &-box-dome {
        padding: 42px 24px 50px;
        border-bottom: 1px solid #f0f0f0;
    }

    &-box-meta {
        position: relative;
    }

    &-box-title {
        position: absolute;
        padding: 1px 8px;
        margin-left: 16px;
        top: -10px;
        background-color: #FFFFFF;

        a {
            text-decoration: none;
        }
    }

    &-box-actions {
        display: flex;
        justify-content: center;
        padding: 12px 0;

        span {
            width: 16px;
            height: 16px;
            margin-left: 16px;
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
            color: #00000073;

            img {
                width: 16px;
                height: 16px;
            }

            &:hover {
                color: #000000d9;
                transform: scale(1.2);
            }
        }
    }

    &-box-description {
        padding: 18px 24px 12px;
        border-bottom: 1px dashed #f0f0f0;
    }


}
</style>
