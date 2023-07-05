<!-- 一级路由组件 -->
<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_silder">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <!-- :collapse-transition="false"关闭自带动画 -->
                <el-menu :collapse-transition="false" :collapse="LayOutSettingStore.fold" :default-active="$route.path"
                    background-color="#001529" text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区 -->
        <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang='ts'>
// 获取路由对象 
import { useRoute } from 'vue-router'
// 左侧菜单栏logo组件
import Logo from './logo/index.vue'
// 菜单组件
import Menu from './menu/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
// 引入顶部tabbar组件
import Tabbar from './tabbar/index.vue'
// 右侧内容展示区
import Main from './main/index.vue'
// 获取layout配置仓库 用于设置页面的折叠和展开
import useLayOutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()
const LayOutSettingStore = useLayOutSettingStore()
// 获取路由器对象地址
const $route = useRoute()

</script>

<script lang="ts">
export default {
    name: 'Layout'
}
</script>
<style lang='scss' scoped>
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_silder {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        color: white;
        transition: all 0.3s;

        .scrollbar {
            // width: $base-menu-width;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        position: absolute;
        top: 0;
        // right: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: yellow;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>