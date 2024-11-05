<template>
  <view class="container">
    <view class="text-center px-4">
      <text class="text-4xl font-bold text-red-800 mb-6 block">欢迎来到花市摊位竞标系统</text>
      <text class="text-xl mb-8 block">在这里，您可以参与花市摊位的竞标，实现您的经营梦想！</text>
      <view class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <navigator 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :url="item.url" 
          :class="[
            'p-6 rounded-lg shadow-md hover:opacity-90',
            item.bgColor,
            item.textColor
          ]"
        >
          <text class="text-2xl font-semibold mb-2 block">{{ item.title }}</text>
          <text>{{ item.description }}</text>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const menuItems = [
  { 
    title: '认证和注册', 
    description: '开始您的竞标之旅', 
    url: '/pages/auth/index',
    bgColor: 'bg-emerald-400',
    textColor: 'text-white'
  },
  { 
    title: '竞价须知', 
    description: '了解竞标规则和摊位分类', 
    url: '/pages/bidding-info/index',
    bgColor: 'bg-amber-400',
    textColor: 'text-gray-800'
  },
  { 
    title: '现场签到', 
    description: '扫描二维码完成签到', 
    url: '/pages/check-in/index',
    bgColor: 'bg-sky-400',
    textColor: 'text-white'
  },
  { 
    title: '竞价投标', 
    description: '参与实时竞价，赢得理想摊位', 
    url: '/pages/bidding/index',
    bgColor: 'bg-red-400',
    textColor: 'text-white'
  },
]
</script>

<style>
.container {
  padding: 20px;
}
</style>