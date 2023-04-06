<template>
    <Timeline mode="middle" reverse>
        <SubTimeline>
            <template #title>Create a services site 2015-08-01</template>
            <TimelineItem>Technical testing 1</TimelineItem>
            <TimelineItem>Technical testing 2</TimelineItem>
            <TimelineItem>Technical testing 3</TimelineItem>
        </SubTimeline>
        <TimelineItem>Create a services site 2015-09-01</TimelineItem>
        <TimelineItem>
            <p class="m-0">Solve initial network problems 1</p>
            <p class="m-0">Solve initial network problems 2</p>
            <p class="m-0">Solve initial network problems 3 2015-09-01</p>
        </TimelineItem>
        <TimelineItem>Create a services site 2015-11-01</TimelineItem>
        <SubTimeline>
            <template #title>Create a services site 2015-12-01</template>
            <TimelineItem>Technical testing 1</TimelineItem>
            <TimelineItem>Technical testing 2</TimelineItem>
            <TimelineItem>Technical testing 3</TimelineItem>
        </SubTimeline>
        <TimelineItem>Create a services site 2016-11-01</TimelineItem>
    </Timeline>
</template>

<script lang="ts" setup>
import { Timeline, SubTimeline, TimelineItem } from 'wanderer-design-vue'
</script>
