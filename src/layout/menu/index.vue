<!-- 动态生成菜单 -->
<template>
    <!-- 菜单组件 -->
    <template v-for="item in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <el-menu-item v-if="!item.children && item.meta.show" :index="item.path" @click="goRoute">
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <template #title>
                <span>{{ item.meta.title }}</span>
            </template>
        </el-menu-item>
        <!-- 只有一个子路由 -->
        <el-menu-item v-if="item.children && item.children.length == 1 && item.meta.show" :index="item.children[0].path"
            @click="goRoute">
            <el-icon>
                <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            <template #title>
                <span>{{ item.children[0].meta.title }}</span>
            </template>
        </el-menu-item>
        <!-- 子路由不止一个 -->
        <el-sub-menu v-if="item.children && item.children.length > 1 && item.meta.show" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <Menus :menuList="item.children"></Menus>
        </el-sub-menu>
    </template>
</template>

<script setup lang='ts'>
// 引入辅助函数
import { useRouter } from 'vue-router'
// 获取路由器
const $router = useRouter()
// 获取父组件传过来的全部路由数组
defineProps(['menuList'])
const goRoute = (vc: any) => {
    $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
    name: 'Menus'
}
</script>
<style lang='scss' scoped></style>