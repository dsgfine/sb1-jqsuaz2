<template>
  <header class="bg-red-600 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link :to="{ name: 'home' }" class="flex items-center space-x-2">
        <Flower2 :size="32" />
        <span class="text-2xl font-bold">花市竞标</span>
      </router-link>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link :to="{ name: 'home' }" class="hover:text-yellow-300">首页</router-link></li>
          <li><router-link :to="{ name: 'auth' }" class="hover:text-yellow-300">登录/注册</router-link></li>
          <li><router-link :to="{ name: 'bidding-info' }" class="hover:text-yellow-300">竞标信息</router-link></li>
          <li><router-link :to="{ name: 'check-in' }" class="hover:text-yellow-300">现场签到</router-link></li>
          <li><router-link :to="{ name: 'bidding' }" class="hover:text-yellow-300">竞价</router-link></li>
          <li><router-link :to="{ name: 'contact' }" class="hover:text-yellow-300">联系我们</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Flower2 } from 'lucide-vue-next'
</script>