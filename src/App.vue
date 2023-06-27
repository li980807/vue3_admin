<template>
  <div class="">
    <h1>App22sss5cd521</h1>
    <p class="box">{{ str }}</p>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" :icon="Star">Success</el-button>
    <el-button type="primary" :icon="Star" circle />
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <pagination></pagination>
    <svg-icon name="home"></svg-icon>
  </div>
</template>

<script setup lang="ts">


import { Star } from '@element-plus/icons-vue'
let str = '猪猪'
const fun = () => {
  console.log('中国')
}
fun()
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
