<template>
  <view class="container">
    <view class="auth-box">
      <text class="text-2xl font-bold text-center text-red-800 mb-6 block">
        {{ isLogin ? '登录' : '注册' }}
      </text>
      <form @submit.prevent="handleSubmit">
        <view class="mb-4">
          <text class="block text-gray-700 mb-2">用户名</text>
          <input
            type="text"
            v-model="username"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="请输入用户名"
          />
        </view>
        <view class="mb-6">
          <text class="block text-gray-700 mb-2">密码</text>
          <input
            type="password"
            v-model="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="请输入密码"
          />
        </view>
        <button
          form-type="submit"
          :class="[
            'w-full py-2 px-4 rounded-md transition',
            'bg-red-600 text-white hover:bg-red-700'
          ]"
        >
          {{ isLogin ? '登录' : '注册' }}
        </button>
      </form>
      <view class="mt-4 text-center">
        <text>{{ isLogin ? '还没有账号？' : '已有账号？' }}</text>
        <text
          @tap="isLogin = !isLogin"
          class="text-red-600 hover:underline ml-1"
        >
          {{ isLogin ? '立即注册' : '立即登录' }}
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLogin = ref(true)
const username = ref('')
const password = ref('')

const handleSubmit = () => {
  // TODO: 实现认证逻辑
  console.log(isLogin.value ? '登录' : '注册', { username: username.value, password: password.value })
}
</script>

<style>
.container {
  padding: 20px;
}
.auth-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 400px;
}
</style>