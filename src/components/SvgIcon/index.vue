<template>
    <div class="">
        <!-- 测试sgv图标使用 -->
        <!-- svg:内部图标外层容器节点 内部需要与use标签结合使用 -->
        <svg :style="{width,height}">
            <!-- xlink-href 指定用哪一个图标 属性值# icon + 图标名字-->
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
const ab = defineProps({
    // 前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    // name 图标名字 
    name: String,
    // 颜色
    color: {
        type:String,
        default: 'pink'
    },
    // 大小
    width: {
        type: String,
        default: '50px'
    },
    height: {
        type: String,
        default: '50px'
    }
})
console.log(ab);

</script>

<style scoped lang="scss"></style>
