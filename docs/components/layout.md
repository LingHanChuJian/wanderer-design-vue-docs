# Layout 布局

Handling the overall layout of a page.

# Component Overview

* `Layout`: The layout wrapper, in which `Header` `Sider` `Content` `Footer` or `Layout` itself can be nested, and can be placed in any parent container.
* `Header`: The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.
* `Sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.
* `Content`: The content layout with the default style, in which any element can be nested, and must be placed in `Layout`.
* `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.

> Based on `flex layout`, please pay attention to the [compatibility](http://caniuse.com/#search=flex).

# Examples

:::: Examples Basic Structure
::: template dome
<Basic />
:::
::: template description
Classic page layouts.
:::
::: template code
@[code vue](@examples/layout/Basic.vue)
:::
::::

:::: Examples Custom trigger
::: template dome
<CustomTrigger />
:::
::: template description
Directly add button settings corresponding to collapsed
:::
::: template code
@[code vue](@examples/layout/CustomTrigger.vue)
:::
::::

<script lang='ts' setup>
import Basic from '/@/examples/layout/Basic.vue'
import CustomTrigger from '/@/examples/layout/CustomTrigger.vue'
</script>
