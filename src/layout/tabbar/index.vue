<!--  -->
<template>
    <div class="tabbar">
        <div class="tabbar_left">
           <Breadcrumb></Breadcrumb>
        </div>
        <!-- 右侧设置 -->
        <div class="tabbar_right">
           <Setting></Setting>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Breadcrumb from  './breadcrumb/index.vue'
import Setting from  './setting/index.vue'
</script>
<script lang="ts">
export default {
    name: 'Tabbar'
}
</script>
<style lang='scss' scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right , white , rgb(251, 251, 251) ,rgb(234, 233, 233));
    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
    .tabbar_right {
        display: flex;
        align-items: center;
    }
}
</style>