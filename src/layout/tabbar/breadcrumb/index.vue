<!-- 顶部导航左侧  -->
<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 15px;cursor: pointer;" @click="changeIcon">
        <component :is="LayOutSettingStore.fold?'Fold':'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'

const LayOutSettingStore = useLayOutSettingStore()
// 定义一个响应式数据控制图标的切换

const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<script lang="ts">
export default {
    name: 'Breadcrumb'
}
</script>
<style lang='scss' scoped></style>