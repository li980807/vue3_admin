import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element创建和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置国际化
import zhCn from 'element-plus'
// createApp(App).mount('#app')
import gloalcomponent from '@/components'
// 引入模板的全局样式
import '@/styles/index.scss'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入路由
import router from './router'
// 引入pinia仓库
import pinia from './store/index'
const app = createApp(App)
// 安装自定义插件
app.use(gloalcomponent)
// 设置默认文字
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(pinia)
// 注册模板路由
app.use(router)
app.mount('#app')
