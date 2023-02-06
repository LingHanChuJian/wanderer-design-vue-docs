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
                <span :class="`${prefixCls}-box-actions-copy`" ref="copy">
                    <i class="i-fa-regular:copy"></i>
                </span>
                <span :class="`${prefixCls}-box-actions-code`" @click="showCode">
                    <i v-show="!visible" class="i-bx:code"></i>
                    <i v-show="visible" class="i-bx:code-alt"></i>
                </span>
            </div>
        </section>
        <section :class="`${prefixCls}-box-code`" ref="code">
            <Dropdown appear :visible="visible">
                <slot name="code"></slot>
            </Dropdown>
        </section>
    </section>
</template>

<script lang="ts" setup>
import Clipboard from 'clipboard'
import { Dropdown } from 'wanderer-design-vue'
import { getCurrentInstance, ref, nextTick, onUnmounted } from 'vue'

const props = defineProps({
    title: String
})

const instance = getCurrentInstance()

const code = ref()
const copy = ref()
const prefixCls = 'examples'
const visible = ref(false)
const uuid = ref(`uuid-${prefixCls}-${instance?.uid}`)

let clipboard: Clipboard

nextTick(() => {
    if (!clipboard) {
        clipboard = new Clipboard(copy.value, {
            text: () => {
                return code.value.querySelector('code').innerText
            }
        })

        clipboard.on('success', (e) => {
            e.clearSelection()
        })

        clipboard.on('error', function(e) {
            console.error('Action:', e.action)
            console.error('Trigger:', e.trigger)
        })
    }
})

const showCode = () => {
    visible.value = !visible.value
}

onUnmounted(() => {
    if (clipboard) {
        clipboard.destroy()
    }
})
</script>

<style lang="less" scoped>
@prefix-cls: examples;

.@{prefix-cls} {
    margin-bottom: 20px;
    border: 1px solid #f0f0f0;

    &-box-dome {
        padding: 40px 20px;
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
            color: #000000d9;
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

            i {
                display: inline-block;
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

    &-box-code {
        padding: 0 24px;
    }

    @media (max-width: 860px) {
        &-box-dome {
            padding: 20px;
        }
    }
}
</style>
