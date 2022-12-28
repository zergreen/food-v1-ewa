import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/homer/eam/my-project (tailwind)/food-v1-ewa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}