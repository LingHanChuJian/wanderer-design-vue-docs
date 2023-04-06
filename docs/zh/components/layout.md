# Layout 布局

协助进行页面级整体布局.

# 组件概述
* `Layout`: 布局容器, 其下可嵌套 `Header` `Sider` `Content` `Footer` 或者 `Layout` 本身, 可以放在任何父容器中.
* `Header`: 顶部布局, 自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中.
* `Sider`: 侧边栏, 自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中.
* `Content`: 内容部分, 自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中.
* `Footer`: 底部布局, 自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中.

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

# Examples

:::: Examples 基本结构
::: template dome
<Basic />
:::
::: template description
典型的页面布局.
:::
::: template code
@[code vue](@examples/layout/Basic.vue)
:::
::::

:::: Examples 自定义触发器
::: template dome
<CustomTrigger />
:::
::: template description
直接添加按钮绑定 v-model:collapsed 即可
:::
::: template code
@[code vue](@examples/layout/CustomTrigger.vue)
:::
::::

# API

```vue
<Layout>
    <Header>header</Header>
    <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
    </Layout>
    <Footer>footer</Footer>
</Layout>
```

### Layout.Sider

侧边栏.

| Property | Description | Type | Default | 
| -------- | ----------- | ---- | ------- |
| collapsed(v-model) | 当前收起状态 | `boolean` | false |
| width | 展开宽度 | `number` | 250 |
| collapsedWidth | 收缩宽度 | `number` | 0 |
| matchMedia | 是否开启自适应 | `boolean` | true |
| matchMediaWidth | 媒体查询自适应宽度 | `number` | 860 |

<script lang='ts' setup>
import Basic from '/@/examples/layout/Basic.vue'
import CustomTrigger from '/@/examples/layout/CustomTrigger.vue'
</script>
