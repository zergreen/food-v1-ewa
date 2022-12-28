import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/homer/eam/my-project (tailwind)/food-v1-ewa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}