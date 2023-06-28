// 统一管理项目用户现关的接口
import request from '@/utils/request'
//import type 只会生成该模块的类型信息，而不会生成实际的值。
import type { loginForm, loginResPonseData, userResPonseData } from './type'
// 统一管理接口

// 在 TypeScript 中，enum 是一种类型，用于定义一组命名的常量值。它们可以用来为一组相关的值创建一个命名空间，并提供更好的类型安全性

enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) => request.post<any, loginResPonseData>(API.LOGIN_URL, data)
// 获取用户信息接口
export const reqUserInfo = () => request.get<any, userResPonseData>(API.USERINFO_URL)