// 定义小仓库数据state类型

// 获取可以对象类型 
import { RouteRecordRaw } from "vue-router"
export interface UserState {
    token: string | null;
    menuRoutes: RouteRecordRaw[]
}
