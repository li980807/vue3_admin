/// <reference types="vite/client" />
// main.ts 找不到模块“./App.vue”或其相应的类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const vueComponent: DefineComponent<object, object, any>

  export default vueComponent
}
// import { ElMessage } from 'element-plus';
// // 手动声明 ElMessage 模块 ""element-plus"" 没有导出的成员 "ElMessage"。你是想改用 "import ElMessage from "element-plus"" 吗?
// declare module 'element-plus' {
//   export class ElMessage {
//     static success(message: string): void;
//     static warning(message: string): void;
//     static info(message: string): void;
//     static error(message: string): void;
//   }
// }
