<!-- 顶部导航左侧  -->
<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 15px;cursor: pointer;" @click="changeIcon">
        <component :is="LayOutSettingStore.fold?'Fold':'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="margin: 0 2px;vertical-align: top;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
// 获取路由对象 
import { useRoute } from 'vue-router'
const LayOutSettingStore = useLayOutSettingStore()
// 定义一个响应式数据控制图标的切换
// 获取路由器对象地址
const $route = useRoute()
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