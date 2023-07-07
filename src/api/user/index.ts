// 统一管理项目用户现关的接口
import request from '@/utils/request'
//import type 只会生成该模块的类型信息，而不会生成实际的值。
import type { loginFormData, loginResponsData , userInfoResponsData} from "./type";
// 项目用户相关的请求地址
// 在 TypeScript 中，enum 是一种类型，用于定义一组命名的常量值。它们可以用来为一组相关的值创建一个命名空间，并提供更好的类型安全性
enum API {
    LOGIN_URL = "/admin/acl/index/login",
    USERINFO_URL = "/admin/acl/index/info",
    LOGOUT_url = "/admin/acl/index/logout"
}

// 登录接口
export const reqLogin = (data: loginFormData) => request.post<any, loginResponsData>(API.LOGIN_URL, data)
// 获取用户信息
export const reqUserInfo = () => request.get<any, userInfoResponsData>(API.USERINFO_URL)
// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_url)