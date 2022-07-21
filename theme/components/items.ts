import type { RouteLocationRaw } from 'vue-router'

export type Target = '_self' | '_blank' | '_parent' | '_top'

export interface LinkOptions {
    to: RouteLocationRaw
    replace?: boolean
    target?: Target
}

export interface ItemsProps {
    name: string | number
    link?: LinkOptions
    title: string
    children?: ItemsProps[]
}
