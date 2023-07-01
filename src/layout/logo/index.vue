<!--  -->
<template>
    <div class="logo">
        <img v-if="setting.logoShow" :src="setting.logo" alt="">
        <p :class="{ fold: LayOutSettingStore.fold ? true : false }">{{ setting.title }}</p>
    </div>
</template>

<script setup lang='ts'>
// 引入设置logo和标题文件
import setting from '@/setting'
// 获取layout配置仓库 用于设置页面的折叠和展开
import useLayOutSettingStore from '@/store/modules/setting'

const LayOutSettingStore = useLayOutSettingStore()

</script>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>
<style lang='scss' scoped>
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px;
    
    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-menu-title-fontSize ;
        margin-left: 10px;
    }
    .fold {
        display: none;
    }
}
</style>