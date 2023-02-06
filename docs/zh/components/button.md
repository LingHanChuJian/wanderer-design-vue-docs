# Button 按钮

按钮用于开始一个即时操作

# 如何使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Wanderer Design Vue 中我们提供了四种按钮。

* `Default button`: 用于没有主次之分的一组行动点.
* `Dashed button`: 常用于添加操作.
* `Text button`: 用于最次级的行动点.
* `Link button`: 一般用于链接，即导航至某位置.

以及两种状态属性与上面配合使用.

* `disabled`: 行动点不可用的时候，一般需要文案解释.
* `loading`: 用于异步操作等待反馈的时候，也可以避免多次提交.

# Examples

:::: Examples 按钮类型
::: template dome
<Basic />
:::
::: template description
按钮有四种类型: `default` `dashed` `text` `link`
:::
::: template code
@[code vue](@examples/button/Basic.vue)
:::
::::

:::: Examples 加载按钮
::: template dome
<Loading />
:::
::: template description
添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
:::
::: template code
@[code vue](@examples/button/Loading.vue)
:::
::::

:::: Examples 禁止按钮
::: template dome
<Disabled />
:::
::: template description
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
:::
::: template code
@[code vue](@examples/button/Disabled.vue)
:::
::::

:::: Examples Size
::: template dome
<Size />
:::
::: template description
按钮有四种尺寸分别是 `large`, `middle`, `small` 和 `mini`.
如果不设置尺寸, 默认是 `middle`.
:::
::: template code
@[code vue](@examples/button/Size.vue)
:::
::::

<script lang='ts' setup>
import Size from '/@/examples/Button/Size.vue'
import Basic from '/@/examples/Button/Basic.vue'
import Loading from '/@/examples/Button/Loading.vue'
import Disabled from '/@/examples/Button/Disabled.vue'
</script>
