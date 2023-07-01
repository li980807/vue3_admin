//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/test.vue'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局对象
const gloalcomponent = { SvgIcon, Pagination }
// console.log(Object.keys(gloalcomponent));

// console.log(gloalcomponent)
// 对外暴露插件
export default {
  install(app: any) {
    // 注册项目的全部全局组件
    Object.keys(gloalcomponent).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      app.component(key, gloalcomponent[key])
    });
    // 导入所有图标并进行全局注
    
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
