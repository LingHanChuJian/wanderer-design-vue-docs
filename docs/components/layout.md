# Layout

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
Just add the button binding v-model:collapsed directly
:::
::: template code
@[code vue](@examples/layout/CustomTrigger.vue)
:::
::::

# API

```vue
<template>
    <Layout>
        <Header>header</Header>
        <Layout>
            <Sider>left sidebar</Sider>
            <Content>main content</Content>
            <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
    </Layout>
</template>

<script lang="ts" setup>
import { Layout, Header, Content, Sider, Footer } from 'wanderer-design-vue'
</script>
```

### Layout.Sider

The sidebar.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| collapsed(v-model) | to set the current status | `boolean` | false |
| width | the expanded width of the sidebar | `number` | 250 |
| collapsedWidth | width of the collapsed sidebar | `number` | 0 |
| matchMedia | whether to enable media query | `boolean` | true |
| matchMediaWidth | media query width | `number` | 860 |

<script lang='ts' setup>
import Basic from '/@/examples/layout/Basic.vue'
import CustomTrigger from '/@/examples/layout/CustomTrigger.vue'
</script>
