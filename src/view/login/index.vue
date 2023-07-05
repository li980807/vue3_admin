<!--  -->
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到娴宝平台</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
// 引入辅助函数
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time'
const userStore = useUserStore()
// 收集表单数据
let loginForm = reactive({ username: 'admin', password: '123456' })
let loading = ref(false)
// 获取路由器
const $router = useRouter()
// 获取路由对象 登录的时候判断
const $route = useRoute()
let loginForms = ref()

const login = async () => {
  await loginForms.value.validate()

  loading.value = true
  // 点击登录按钮 通知仓库发送登录请求
  // 请求成功 跳转首页展示 请求失败弹出登录失败信息
  try {
    await userStore.userLogin(loginForm)
    const redirect:any = $route.query.redirect
      $router.push({ path: redirect || '/'})
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hello${getTime()}好猪猪`
    })
  } catch (error) {

    ElNotification({
      type: 'error',
      message: (error as Error).message
    })

  }
  finally {
    loading.value = false
  }
}
// rule验证规则对象 valuer 表单的文本内容 callback为回调函数 符合条件放行 不符合注入错误信息
// const validatorUsername = (rule: any, value: any, callback: any) => {  
//   if (value.length >= 5) {
//     callback()
//   } else
//     callback(new Error('账号长度至少五位数s'))
// }
// const validatorPassword = (rule: any, value: any, callback: any) => {
//   if (value.length >= 5) {
//     callback()
//   } else
//     callback(new Error('账号长度至少五位数s'))
// }
const rules = {
  username: [
    // { required: true ,message: '请输入用户名', trigger: 'blur' },
    { required: true, min: 5, max: 10, message: '账号长度至少五位数', trigger: 'change' }
    // { validator: validatorUsername, trigger: 'change' }
  ],
  password: [
    // { required: true, message: '请输入密码', trigger: 'blur' },
    { required: true, min: 6, max: 10, message: '密码长度至少六位数', trigger: 'change' },
    // { validator: validatorPassword, trigger: 'change' }
  ]
}

</script>

<style lang='scss' scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px 0px;

  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0px;
  }

  .login_btn {
    width: 100%;
  }
}
</style>