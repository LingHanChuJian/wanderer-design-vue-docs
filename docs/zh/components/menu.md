# Menu 导航菜单

为页面和功能提供导航的菜单列表.

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：通用布局。

# 开发者注意事项

* Menu 元素为 `ul`, 因而仅支持 [li 以及 script-supporting 子元素](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)。因而你的子节点元素应该都在 Menu.MenuItem 内使用.

* 必须为 SubMenu 和 MenuItem 设置唯一 key.

# Examples

:::: Examples Top Navigation
::: template dome
<Horizontal />
:::
::: template description
Horizontal top navigation menu.
:::
::: template code
@[code vue](@examples/menu/Horizontal.vue)
:::
::::

:::: Examples Side Navigation
::: template dome
<Vertical />
:::
::: template description
Vertical side navigation menu.
:::
::: template code
@[code vue](@examples/menu/Vertical.vue)
:::
::::

# API

```vue
<template>
    <Menu>
        <MenuItem name="1">MenuItem</MenuItem>
        <SubMenu name="2">
            <MenuItem name="2-1">SubMenuItem</MenuItem>
        </SubMenu>
    </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuItem, SubMenu } from 'wanderer-design-vue'
</script>
```

### Menu

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey(v-model) | string with the keys of currently selected menu item | `string` \| `number` | - |
| openKeys(v-model) | array with the keys of currently opened sub menus | Array<`string` \| `number`> | [] |
| mode | type of the menu | `vertical` \| `horizontal` | `horizontal` |
| triggerSubMenuAction | method of trigger submenu | `click` \| `hover` | `hover` |

### Menu Events

| Events Name | Description | Arguments |
| ----------- | ----------- | --------- |
| openChange | called when open/close sub menu | function(openKeys: string[]) |
| click | callback executed when a menu item is clicked | function({ name, link, domEvent }) |

### Menu.SubMenu

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| name | Unique ID of the sub menu, required | `string` \| `number` | - |
| disabled | whether sub menu is disabled or not | `boolean` | false |
| title | title of the sub menu | `string` \| `slot` | - |

### Menu.MenuItem

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| name | unique id of the menu item, required | `string` \| `number` | - |
| disabled | whether menu item is disabled or not | `boolean` | false |

Menu.SubMenu 的子元素必须是 `MenuItem` 或者 `SubMenu`.

`SubMenu` 和 `MenuItem` 必须传递 name，如不传递, 会导致程序无法正常运行.
