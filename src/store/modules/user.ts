// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 'User'小仓库名字
// 引入发送请求的登录接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
import type { loginFormData, loginResponsData, userInfoResponsData } from "@/api/user/type";
import type { UserState } from './types/type'
// 引入存储和读取token的方法
import { SET_TOKEN, GET_TOKEN, REMOBE_TOKEN } from '@/utils/token'
// 引入路由(常备路由)
import { constantRoute } from '@/router/routes'
const useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(),//
            menuRoutes: constantRoute,//仓库生成菜单需要的数组(路由)
            avatar: '',//头像
            username: '',

        }
    },
    // 处理异步||逻辑
    actions: {
        // 用户登录调用的方法
        async userLogin(params: loginFormData) {
            const result: loginResponsData = await reqLogin(params)

            // 请求成功获取token 失败提示失败信息
            if (result.code === 200) {
                // 需要本地存储持持久化一份
                this.token = (result.data as string)
                SET_TOKEN(result.data as string)
                // 让当前的async函数返回一个成功的promise
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data))
            }

        },
        // 登录获取用户信息的方法
        async userInfo() {
            // 获取用户信息 存储仓库当中 /头像和名字
            const reslut: userInfoResponsData = await reqUserInfo()
            if (reslut.code === 200) {
                this.username = reslut.data.name
                this.avatar = reslut.data.avatar
                return 'ok'
            } else {
                return Promise.reject('获取用户信息失败')
            }

        },
        // 退出登录
        async userLogout() {
            // 这里mock没有清除token接口
            const reslut: any = await reqLogout()
            if (reslut.code === 200) {//退出登录成功
                this.token = '',
                    this.username = '',
                    this.avatar = '',
                    REMOBE_TOKEN()
                return 'ok'
            } else {
                return Promise.reject(new Error(reslut.message))
            }

        }
    },
    // 相对于计算属性
    getters: {

    }
})

export default useUserStore