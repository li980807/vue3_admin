// 对外暴露常量配置路由
export const constantRoute = [
    {//登录路由
        path: '/login',
        component: () => import('@/view/login/index.vue'),
        name: 'login',//命名路由
        meta: {
            title: '登录',
            show: false,//代表路由在菜单中是否展示
            icon: 'UserFilled'//菜单左侧图标
        },
    },
    {//登录成功展示数据的路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'home',//命名路由
        redirect: '/home',
        meta: {
            title: '', show: true, icon: ''
        },
        children: [
            {
                path: '/home',
                component: () => import('@/view/home/index.vue'),
                meta: { title: '首页', icon: 'UserFilled' }
            }
        ]
    },
    {//数据大屏路由
        path: '/screen',
        component: () => import('@/view/screen/index.vue'),
        name: 'Screen',//命名路由
        meta: { title: '数据大屏', show: true, icon: 'StarFilled' }
    },
    {//权限管理数据的路由
        path: '/acl',
        component: () => import('@/layout/index.vue'),
        name: 'Acl',//命名路由
        meta: {
            title: '权限管理', show: true, icon: 'Lock'
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: () => import('@/view/acl/user/index.vue'),
                name: 'User',
                meta: { title: '用户管理',show: true, icon: 'Comment' }
            },
            {
                path: '/acl/role',
                component: () => import('@/view/acl/role/index.vue'),
                name: 'Role',
                meta: { title: '角色管理',show: true, icon: 'UserFilled' }
            },
            {
                path: '/acl/permission',
                component: () => import('@/view/acl/permission/index.vue'),
                name: 'Permission',
                meta: { title: '菜单管理',show: true, icon: 'Bell' }
            }
        ]
    },
    {//商品管理数据的路由
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',//命名路由
        meta: {
            title: '商品管理', show: true, icon: 'Sugar'
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/view/product/trademark/index.vue'),
                name: 'trademark',
                meta: { title: '品牌管理',show: true, icon: 'IceCream' }
            },
            {
                path: '/product/attr',
                component: () => import('@/view/product/attr/index.vue'),
                name: 'Attr',
                meta: { title: '属性管理',show: true, icon: 'ForkSpoon' }
            },
            {
                path: '/product/spu',
                component: () => import('@/view/product/spu/index.vue'),
                name: 'Spu',
                meta: { title: 'SPU管理',show: true, icon: 'MilkTea' }
            },
            {
                path: '/product/sku',
                component: () => import('@/view/product/sku/index.vue'),
                name: 'Sku',
                meta: { title: 'SKU管理',show: true, icon: 'Cherry' }
            }
        ]
    },
    {//404路由
        path: '/404',
        component: () => import('@/view/404/index.vue'),
        name: '404',//命名路由
        meta: { title: '404', show: false, icon: 'StarFilled' }
    },
    {//任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any',//命名路由
        meta: { title: '任意路由', show: false, icon: 'RefreshLeft' }
    }
]