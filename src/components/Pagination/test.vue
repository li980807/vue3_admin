<template>
  <div class="">{{ data }}</div>
</template>

<script setup lang="ts">
const data = '测试3'
import request from '@/utils/request'
import { onMounted } from 'vue';
onMounted(() => {
  request({
    url: '/user/losgin',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res)=>{
    console.log(res,89);
  })
})
</script>

<style scoped lang="scss"></style>
