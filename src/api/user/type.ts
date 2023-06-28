// 登录接口需要携带参数的ts类型 interface可以用来定义对象的属性、方法以及类型
export interface loginForm {
    username: string,
    password: string
}

// 登录接口返回的数据类型
export interface loginResPonseData {
    code: number,
    data: {
        token: string
    }
}
// 定义服务器返回用户信息相关的数据类型
export interface userResPonseData {
    code: number,
    data: {
        checkUser: {
            userId: number,
            avatar: string,
            username: string,
            password: string,
            desc: string,
            roles: string[],
            buttons: string[],
            routes: string[],
            token: string
        }
    }
}