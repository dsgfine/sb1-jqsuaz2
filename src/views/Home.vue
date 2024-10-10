<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-red-800 mb-6">欢迎来到花市摊位竞标系统</h1>
    <p class="text-xl mb-8">在这里，您可以参与花市摊位的竞标，实现您的经营梦想！</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <router-link 
        v-for="(item, index) in menuItems" 
        :key="index" 
        :to="{ name: item.routeName }" 
        :class="[
          'p-6 rounded-lg shadow-md hover:opacity-90 transition',
          item.bgColor,
          item.textColor
        ]"
      >
        <h2 class="text-2xl font-semibold mb-2">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuItems = [
  { 
    title: '认证和注册', 
    description: '开始您的竞标之旅', 
    routeName: 'auth',
    bgColor: 'bg-emerald-400',
    textColor: 'text-white'
  },
  { 
    title: '竞价须知', 
    description: '了解竞标规则和摊位分类', 
    routeName: 'bidding-info',
    bgColor: 'bg-amber-400',
    textColor: 'text-gray-800'
  },
  { 
    title: '现场签到', 
    description: '扫描二维码完成签到', 
    routeName: 'check-in',
    bgColor: 'bg-sky-400',
    textColor: 'text-white'
  },
  { 
    title: '竞价投标', 
    description: '参与实时竞价，赢得理想摊位', 
    routeName: 'bidding',
    bgColor: 'bg-red-400',
    textColor: 'text-white'
  },
]
</script>