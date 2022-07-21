import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/linghanchujian/Desktop/wanderer-design-vue-docs/theme/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/linghanchujian/Desktop/wanderer-design-vue-docs/theme/layouts/Layout.vue")),
}
