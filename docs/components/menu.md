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

<script lang='ts' setup>
import Horizontal from '/@/examples/menu/Horizontal.vue'
import Vertical from '/@/examples/menu/Vertical.vue'
</script>