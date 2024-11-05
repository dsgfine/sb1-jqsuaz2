<template>
  <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row">
    <!-- 侧边栏 -->
    <nav class="w-full md:w-64 bg-white shadow-md">
      <div class="p-4 bg-red-600 flex justify-between items-center md:block">
        <h1 class="text-xl font-bold text-white">花市竞标系统</h1>
        <p class="text-sm text-red-200 hidden md:block">后台管理</p>
        <button @click="toggleMenu" class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul :class="{'hidden': !menuOpen, 'block': menuOpen}" class="py-4 md:block">
        <li v-for="(item, index) in menuItems" :key="index" class="px-2">
          <router-link 
            :to="item.route" 
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            :class="{ 'bg-red-50 text-red-600 font-semibold': $route.name === item.route.name }"
            @click="menuOpen = false"
          >
            <component :is="item.icon" :class="item.iconColor" class="w-5 h-5 mr-3" />
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- 主内容区 -->
    <main class="flex-grow p-4 md:p-8 bg-gray-50 overflow-x-hidden">
      <div class="max-w-4xl mx-auto">
        <header class="mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ getCurrentPageTitle() }}</h2>
        </header>
        <div class="bg-white shadow-sm rounded-lg">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { FileText, Users, Clock, Database, Award } from 'lucide-vue-next'

const route = useRoute()
const menuOpen = ref(false)

const menuItems = [
  { title: '竞价基本信息编辑', route: { name: 'admin-basic-info' }, icon: FileText, iconColor: 'text-blue-500' },
  { title: '经营者信息预录入', route: { name: 'admin-operator-registration' }, icon: Users, iconColor: 'text-green-500' },
  { title: '竞标时段切换', route: { name: 'admin-bidding-stage' }, icon: Clock, iconColor: 'text-yellow-500' },
  { title: '竞标结果及缴费', route: { name: 'admin-bidding-results' }, icon: Award, iconColor: 'text-red-500' },
  { title: '数据导出', route: { name: 'admin-data-export' }, icon: Database, iconColor: 'text-purple-500' },
]

const getCurrentPageTitle = () => {
  const currentRoute = menuItems.find(item => item.route.name === route.name)
  return currentRoute ? currentRoute.title : '后台管理'
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>