import { containerPlugin } from '@vuepress/plugin-container'

export const containerPlugins = () => {
    const examplesPlugin = containerPlugin({
        type: 'Examples',
        before(info) {
            return `<Examples title="${info}">`
        },
        after() {
            return '</Examples>'
        }
    })

    const templatePlugin = containerPlugin({
        type: 'template',
        before(info) {
            return `<template #${info}>`
        },
        after() {
            return '</template>'
        }
    })

    return [examplesPlugin, templatePlugin]
}
