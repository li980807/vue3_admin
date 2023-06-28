<template>
  <div class="">{{ data }}</div>
</template>

<script setup lang="ts">
const data = '测试3'
import {reqLogin} from '@/api/user'
// import request from '@/utils/request'
import { onMounted } from 'vue';
onMounted(() => {
  reqLogin({  username: 'admin',password: '111111',})
  // request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username: 'admin',
  //     password: '111111',
  //   },
  // }).then((res)=>{
  //   console.log(res,89);
  // })
})
</script>

<style scoped lang="scss"></style>
