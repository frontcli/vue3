declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module "axios"
declare module '*.json'
declare module '*.png'
declare module '*.jpg'
