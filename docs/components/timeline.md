# Timeline

Vertical display timeline.

# When To Use

* When a series of information needs to be ordered by time.
* When you need a timeline to make a visual connection.

# Examples

:::: Examples Basic usage
::: template dome
<Basic />
:::
::: template description
Basic timeline.
:::
::: template code
@[code vue](@examples/timeline/Basic.vue)
:::
::::

:::: Examples Middle
::: template dome
<Middle />
:::
::: template description
Middle timeline.
:::
::: template code
@[code vue](@examples/timeline/Middle.vue)
:::
::::

:::: Examples Right
::: template dome
<Right />
:::
::: template description
Right timeline.
:::
::: template code
@[code vue](@examples/timeline/Right.vue)
:::
::::

:::: Examples Color or Custom Icon
::: template dome
<Color />
:::
::: template description
`Color` or `Custom Icon` timeline.
:::
::: template code
@[code vue](@examples/timeline/Color.vue)
:::
::::

:::: Examples Title
::: template dome
<Title />
:::
::: template description
Title timeline.
:::
::: template code
@[code vue](@examples/timeline/Title.vue)
:::
::::

# API

```vue
<template>
    <Timeline>
        <TimelineTitle>TimelineTitle</TimelineTitle>
        <TimelineItem>TimelineItem</TimelineItem>
        <SubTimeline>
            <TimelineItem>SubTimeline</TimelineItem>
        </SubTimeline>
    </Timeline>
</template>

<script lang="ts" setup>
import { Timeline, SubTimeline, TimelineItem, TimelineTitle } from 'wanderer-design-vue'
</script>
```

### Timeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| open | expand all timelines | `boolean` | false |
| reverse | reverse nodes position or not. only takes effect when the `mode` is `middle` | `boolean` | false |
| tailColor | tail color | `string` | `#009FE8` |
| openKeys(v-model) | array with the keys of currently opened sub timeline | Array<`string` \| `number`> | [] |
| mode | type of the timeline | `left` \| `middle` \| `right` | `left` | 
| triggerSubTimelineAction | method of trigger SubTimeline | `click` \| `hover` | `click` |

### Timeline Events

| Events Name | Description | Arguments |
| ----------- | ----------- | --------- |
| openChange | called when open/close sub timeline | function(openKeys: string[]) |

### Timeline.SubTimeline

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| title | title of the sub timeline | `string` \| `slot` | - |
| position | sub timeline display position | `left` \| `right` | `left` |
| color | dot after color | `string` | `#009FE8` |

### Timeline.TimelineItem

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| title | title of the timeline item | `string` \| `default slot` | - |
| position | timeline item display position | `left` \| `right` | `left` |
| color | dot after color | `string` | `#009FE8` |

<script lang='ts' setup>
import Basic from '/@/examples/timeline/Basic.vue'
import Middle from '/@/examples/timeline/Middle.vue'
import Right from '/@/examples/timeline/Right.vue'
import Color from '/@/examples/timeline/Color.vue'
import Title from '/@/examples/timeline/Title.vue'
</script>
