<template>
    <Menu mode="vertical" v-model:activeKey="activeKey" v-model:openKeys="openKeys" class="w-250px">
        <Menu.MenuItem name="home">
            <i class="i-ant-design:home-filled"></i>
            home
        </Menu.MenuItem>
        <Menu.SubMenu name="archive">
            <template #title>
                <i class="i-fluent:archive-20-regular"></i>
                archive
            </template>
            <Menu.MenuItem name="whatever">
                <i class="i-fa6-regular:comment-dots"></i>
                whatever
            </Menu.MenuItem>
            <Menu.MenuItem name="record">
                <i class="i-bi:bookmark-heart"></i>
                record
            </Menu.MenuItem>
        </Menu.SubMenu>
        <Menu.SubMenu name="list">
            <template #title>
                <i class="i-ci:list-ul"></i>
                list
            </template>
            <Menu.MenuItem name="anime">
                <i class="i-fa6-solid:film"></i>
                anime
            </Menu.MenuItem>
            <Menu.MenuItem name="music">
                <i class="i-fa6-solid:headphones-simple"></i>
                music
            </Menu.MenuItem>
        </Menu.SubMenu>
        <Menu.MenuItem name="comment">
            <i class="i-clarity:note-edit-line"></i>
            comment
        </Menu.MenuItem>
        <Menu.MenuItem name="friends">
            <i class="i-entypo:link"></i>
            friends
        </Menu.MenuItem>
    </Menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu } from 'wanderer-design-vue'

const activeKey = ref('home')
const openKeys = ref(['archive', 'list'])
</script>