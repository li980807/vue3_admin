<template>
  <div class="">
    <h1>App22sss5cd521</h1>
    <p class="box">{{ str }}</p>
  </div>
</template>

<script setup lang="ts">
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
