<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center text-red-800 mb-6">
      {{ isLogin ? '登录' : '注册' }}
    </h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 mb-2">用户名</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 mb-2">密码</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
      >
        {{ isLogin ? '登录' : '注册' }}
      </button>
    </form>
    <p class="mt-4 text-center">
      {{ isLogin ? '还没有账号？' : '已有账号？' }}
      <button
        @click="isLogin = !isLogin"
        class="text-red-600 hover:underline ml-1"
      >
        {{ isLogin ? '立即注册' : '立即登录' }}
      </button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isLogin = ref(true)
const username = ref('')
const password = ref('')

const handleSubmit = () => {
  // TODO: Implement authentication logic
  console.log(isLogin.value ? 'Logging in' : 'Registering', { username: username.value, password: password.value })
}
</script>