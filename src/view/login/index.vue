<!--  -->
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到娴宝平台</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
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
import { useUserStore } from '@/store/modules/user'
// 引入辅助函数
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus';
const useStore = useUserStore()
// 收集表单数据
let loginForm = reactive({ username: 'admin', password: '123456' })
let loading = ref(false)
// 获取路由器
const $router = useRouter()
const login = async () => {
  loading.value = true
  // 点击登录按钮 通知仓库发送登录请求
  // 请求成功 跳转首页展示 请求失败弹出登录失败信息
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功'
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