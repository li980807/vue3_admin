<!-- 顶部导航右侧 -->
<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="FullScreen"></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" alt="" style="width: 24px;height: 24px;margin: 0px 10px;border-radius: 50%;">
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang='ts'>
import useLayOutSettingStore from '@/store/modules/setting'
// import { FullScreen } from '@element-plus/icons-vue';
import useUserStore from '@/store/modules/user'
// 引入辅助函数
import { useRouter, useRoute } from 'vue-router'

const LayOutSettingStore = useLayOutSettingStore()
// 刷新按钮点击的回调
const updateRefsh = () => {
    LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}
// 控制全屏
const FullScreen = () => {
    // dom对象的一个属性: 用来判断是否全屏
    const full = document.fullscreenElement

    // 不是全屏切换为全屏
    if (!full) {
        // 利用根节点的requestFullscreen方法实现全屏模式
        document.documentElement.requestFullscreen()
    } else {
        // 全屏模式 退出全屏模式
        document.exitFullscreen()
    }
}
// 获取用户的头像和名字信息
const userStore = useUserStore()
// 获取路由器
const $router = useRouter()
const $route = useRoute()
// 点击退出登录
const logout = async () => {
    // 添加了await异步语句 会跳转到登录页面
    await userStore.userLogout()
    $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>
<script lang="ts">
export default {
    name: 'Setting'
}
</script>
<style lang='scss' scoped></style>