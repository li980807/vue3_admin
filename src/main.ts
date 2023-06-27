import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element创建和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置国际化
// @ts-expect-error 没有定义ts的类型文件所以报错 最直接的方法是让ts忽略这个文件的检测
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// createApp(App).mount('#app')
import gloalcomponent from '@/components'
// 引入模板的全局样式
import '@/styles/index.scss'
const app = createApp(App)
// 安装自定义插件
app.use(gloalcomponent)
// 设置默认文字
app.use(ElementPlus, {
  locale: zhCn,
})
// svg插件需要的配置代码
import 'virtual:svg-icons-register'

app.mount('#app')
