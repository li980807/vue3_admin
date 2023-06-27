//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/test.vue'

// 全局对象 
const gloalcomponent = {SvgIcon, Pagination}
// console.log(Object.keys(gloalcomponent));

console.log(gloalcomponent); 
// 对外暴露插件
export default {
    install(app){
        // 注册项目的全部全局组件
        Object.keys(gloalcomponent).forEach(key=>{
            app.component(key,gloalcomponent[key])
        })
    } 
}