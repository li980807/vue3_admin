// 路由鉴权 项目当中路由能不能被访问的权限设置 
import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './setting'
// 进度条不要右侧加载小圆圈
nprogress.configure({ showSpinner: false });
// 想在组件的外部通过同步的语句获取到Pinia小仓库的数据，必须引入大仓库。
// 这是因为Pinia小仓库只能在组件内部被访问，而在组件的外部无法直接访问它
import pinia from './store'
// 小仓库
import useUserStore from '@/store/modules/user'
// 传入大仓库
const userStore = useUserStore(pinia)
// 全局前置守卫:项目当中任意路由的切换都会出发的钩子
// 获取用户名字
const username = userStore.username
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title = setting.title + '_' + to.meta.title
    // 访问某个路由之前的守卫 to访问的路由对象 from从哪个路由而来 next 是放行函数
    nprogress.start();//这是进度条开始 
    const token = userStore.token
    if (token) {
        //用户登录 
        if (to.path == '/login') {
            //登录成功想访问登录页面 指向原来页面或者是 指向首页也可
            next({ path: `${from.path}` })
        } else {
            // 登录成功可以访问其他页面
            // 其他路由指向logo
            if (username) {//登录成功有用户信息放行
                next()
            } else {
                try {
                    // 没有用户信息 获取用户信息
                    await userStore.userInfo()
                    next()
                } catch (error) {
                    // token过期 获取不到用户信息 ||  用户手动修改本地存储token
                    userStore.userLogout()
                    next({ path: '/login', query: { redirect: to.path } })
                }
            }

        }
    } else {
        // 用户未登录
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }

})
// 全局后置守卫
router.afterEach((to: any, from: any) => {
    // 进度条结束
    console.log(to,from);
    
    nprogress.done()
})
// 任意路由切换进度条业务 插件npm i nprogress
// 全部路由 登录/404/任意路由/首页/数据大屏/权限管理/商品管理

// 用户未登录 可以访问login其余不能访问(指向login)
// 用户登录成功 不可以访问login[指向首页？]其余可以访问