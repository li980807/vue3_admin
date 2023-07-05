<!--  -->
<template>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <!-- 渲染layout一级路由组件的子路由 -->
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>

<script setup lang='ts'>
import { watch, ref, nextTick } from 'vue';
import useLayOutSettingStore from '@/store/modules/setting'
// 用于控制当前组件的销毁重建
const flag = ref(true)
const LayOutSettingStore = useLayOutSettingStore()
// 监听仓库员内部数据是否发生变化 如果发生变化说明 用户点击过刷新按钮
watch(() => LayOutSettingStore.refsh, () => {
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>
<script lang="ts">
export default {
    name: 'Mains'
}
</script>
<style lang='scss' scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>