# Live2d 看板娘

Live2d SDK 4.x

# Examples

:::: Examples 基本结构
::: template dome
<Basic />
:::
::: template description
基于 Live2d SDK 4.x
:::
::: template code
@[code vue](@examples/live2d/Basic.vue)
:::
::::

<script lang="ts" setup>
import Basic from '/@/examples/live2d/Basic.vue'
</script>

# API

```vue
<template>
    <Live2d />
</template>

<script lang="ts" setup>
import { Live2d } from 'wanderer-design-vue'
</script>
```
### Live2d

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| width | canvas width | number | - |
| height | canvas height | number | - |
| models | model3.json collection | string[] | [] |
| scale | live2d scale | number | 1 |
| centerPosition | live2d center position | [number, number] | - |

### Live2d Expose

```typescript
interface Events {
    message: string
}

interface Live2dReturn {
    emitter: Emitter<Events>;
    nextModel: () => void;
    nextRandomModel: () => void;
    onResize: () => void;
    setScale: (scale: number) => void;
    release: () => void;
}
```