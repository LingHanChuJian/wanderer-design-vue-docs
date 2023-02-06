# Button

To trigger an operation.

# When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Wanderer Design Vue we provide 4 types of button

* `Default button`: indicate a series of actions without priority.
* `Dashed button`: used for adding action commonly.
* `Text button`: used for the most secondary action.
* `Link button`: used for external links.

And 2 other properties additionally.

* `disabled`: when actions are not available.
* `loading`: add loading spinner in button, avoiding multiple submits too.

# Examples

:::: Examples Type
::: template dome
<Basic />
:::
::: template description
There are `default` button, `dashed` button, `text` button and `link` button in wanderer.
:::
::: template code
@[code vue](@examples/button/Basic.vue)
:::
::::

:::: Examples Loading
::: template dome
<Loading />
:::
::: template description
A loading indicator can be added to a button by setting the `loading` property on the `Button`.
:::
::: template code
@[code vue](@examples/button/Loading.vue)
:::
::::

:::: Examples Disabled
::: template dome
<Disabled />
:::
::: template description
To mark a button as disabled, add the `disabled` property to the `Button`.
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
Buttons are available in `large`, `middle`, `small` and `mini` sizes.
Omit the size property for a button with the `middle` size.
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
