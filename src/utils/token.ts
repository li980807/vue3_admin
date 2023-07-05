// 封装本地存储和读取数据方法
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN')
}
// 删除token
export const REMOBE_TOKEN = () => {
    localStorage.removeItem('TOKEN')
}