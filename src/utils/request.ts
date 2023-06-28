// 对axios二次封装 使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 模块 ""element-plus"" 没有导出的成员 "ElMessage"。你是想改用 "import ElMessage from "element-plus"" 吗?
declare module 'element-plus' {
  export class ElMessage {
    static success(message: string): void;
    static warning(message: string): void;
    static info(message: string): void;
    static error(message: string): void;
  }
}
// 第一步:利用axios对象的create方法 去创建axios实例(其他的配置:基础路径、超时的时间)
// create创建的request也是axios 只不过可以写一些配置

const request = axios.create({
    // 基础路径 会携带API
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,//发送请求的超时时间设置
})
// 第二步 给request实例添加请求与响应拦截器
// 发送请求之前触发请求拦截器 会传进一个配置对象
request.interceptors.request.use((config) => {
    // config.headers.token = '8899'
    // config配置对象有headers请求头 给服务器端携带公共的参数
    return config

})
// 第三步 响应拦截器 两个回调 成功的回调和失败的回调
request.interceptors.response.use((response) => {
    // 成功的回调
    return response.data
    
}, (error) => {

    // 失败的回调 处理http网络的错误
    // 定义一个变量 存储网络错误休息
    let message = ''
    // 网络错误状态码
    const status = error.response.status

    switch (status) {
        case 401:
            message = "token过期";
            break;
        case 403:
            message = '无权访问';
            break;
        case 404:
            message = "请求地址错误";
            break;
        case 500:
            message = "服务器出现问题";
            break;
        default:
            message = "无网络";

    }
    ElMessage.error(`${message}`)
    return Promise.reject(error)
})

export default request