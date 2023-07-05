// 小仓库 layout组件相关配置
import { defineStore } from 'pinia'

 const useLayOutSettingStore = defineStore('SettingStore', {
    // 小仓库存储数据的地方
    state: () => {
        return {
            fold: false,//控制菜单折叠还是收起
            refsh: false,//用于控制刷新效果
        }
    },
})
export default useLayOutSettingStore