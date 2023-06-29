/// <reference types="vite/client" />
// main.ts 找不到模块“./App.vue”或其相应的类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const vueComponent: DefineComponent<object, object, any>

  export default vueComponent
}

// //  xxx 模块 ""element-plus"" 没有导出的成员 "xxx"。你是想改用 "import xxx from "element-plus"" 吗?

declare module "element-plus";