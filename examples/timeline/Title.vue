<template>
    <Timeline mode="middle" reverse>
        <TimelineTitle>2015 年</TimelineTitle>
        <SubTimeline>
            <template #title>Create a services site 2015-08-01</template>
            <TimelineItem>Technical testing 1</TimelineItem>
            <TimelineItem>Technical testing 2</TimelineItem>
            <TimelineItem>Technical testing 3</TimelineItem>
        </SubTimeline>
        <TimelineTitle>2014 年</TimelineTitle>
        <TimelineItem>Create a services site 2015-09-01</TimelineItem>
        <TimelineItem>
            <p class="m-0">Solve initial network problems 1</p>
            <p class="m-0">Solve initial network problems 2</p>
            <p class="m-0">Solve initial network problems 3 2015-09-01</p>
        </TimelineItem>
        <TimelineTitle>2013 年</TimelineTitle>
        <TimelineItem>Create a services site 2015-11-01</TimelineItem>
        <TimelineTitle>2012 年</TimelineTitle>
        <SubTimeline>
            <template #title>Create a services site 2015-12-01</template>
            <TimelineItem>Technical testing 1</TimelineItem>
            <TimelineItem>Technical testing 2</TimelineItem>
            <TimelineItem>Technical testing 3</TimelineItem>
        </SubTimeline>
        <TimelineTitle>2011 年</TimelineTitle>
        <TimelineItem>Create a services site 2016-11-01</TimelineItem>
    </Timeline>
</template>

<script lang="ts" setup>
import { Timeline, SubTimeline, TimelineItem, TimelineTitle } from 'wanderer-design-vue'
</script>
