# Menu

A versatile menu for navigation.

Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers two navigation options: top and side. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website.

# Notes for developers

* Menu is rendered as a `ul` element, so it only supports [`li` and `script-supporting` elements](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element) as children nodes。Your customized node should be wrapped by Menu.Item.

* A unique value name must be set for SubMenu MenuItem

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

The children of Menu.SubMenu must be `MenuItem` or `SubMenu`.

`SubMenu` or `MenuItem` must pass the name. If it is not passed, program does not work properly. 

<script lang='ts' setup>
import Horizontal from '/@/examples/menu/Horizontal.vue'
import Vertical from '/@/examples/menu/Vertical.vue'
</script>