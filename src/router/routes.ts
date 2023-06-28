// 对外暴露常量配置路由
export const constantRoute = [
    {//登录路由
        path: '/login',
        component: () => import('@/view/login/index.vue'),
        name: 'login'//命名路由
    },
    {//登录成功展示数据的路由
        path: '/',
        component: () => import('@/view/home/index.vue'),
        name: 'home'//命名路由
    },
    {//404路由
        path: '/404',
        component: () => import('@/view/404/index.vue'),
        name: '404'//命名路由
    },
    {//任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'//命名路由
    }
]