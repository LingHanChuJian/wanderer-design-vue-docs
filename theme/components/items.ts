import type { LinkOptions } from 'wanderer-design-vue'

export type Target = '_self' | '_blank' | '_parent' | '_top'

export interface ItemsProps {
    name: string | number
    link?: LinkOptions
    title: string
    children?: ItemsProps[]
}
