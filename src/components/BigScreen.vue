<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-red-600 text-white py-4">
      <h1 class="text-4xl font-bold text-center">花市摊位竞标大屏显示</h1>
    </header>
    <main class="flex-grow container mx-auto px-4 py-8">
      <div v-if="currentStage === 'pre-bidding'" class="text-center">
        <h2 class="text-3xl font-semibold mb-4">即将开始竞标</h2>
        <p class="text-xl mb-2">当前竞标场次：{{ currentCategory }}</p>
        <p class="text-lg">竞标开始时间：{{ biddingStartTime }}</p>
      </div>
      <div v-else-if="currentStage === 'bidding'" class="text-center">
        <h2 class="text-3xl font-semibold mb-4">竞标进行中</h2>
        <p class="text-xl mb-2">当前竞标场次：{{ currentCategory }}</p>
        <p class="text-2xl font-bold mb-4">倒计时：{{ countdown }}</p>
        <p class="text-lg">竞标结束时间：{{ biddingEndTime }}</p>
      </div>
      <div v-else-if="currentStage === 'post-bidding'" class="text-center">
        <h2 class="text-3xl font-semibold mb-4">竞标结果</h2>
        <p class="text-xl mb-4">当前竞标场次：{{ currentCategory }}</p>
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 px-4 py-2">排名</th>
              <th class="border border-gray-300 px-4 py-2">中标价</th>
              <th class="border border-gray-300 px-4 py-2">中标者姓名</th>
              <th class="border border-gray-300 px-4 py-2">手机号</th>
              <th class="border border-gray-300 px-4 py-2">状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(winner, index) in winners" :key="index" :class="{'bg-red-100': !winner.responded}">
              <td class="border border-gray-300 px-4 py-2">{{ index + 1 }}</td>
              <td class="border border-gray-300 px-4 py-2">¥{{ winner.price.toFixed(2) }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ winner.name }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ winner.phone }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ winner.responded ? '已应标' : '未应标' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-8 text-center">
        <button @click="changeStage('pre-bidding')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          准备
        </button>
        <button @click="changeStage('bidding')" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
          竞标
        </button>
        <button @click="changeStage('post-bidding')" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          结果
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentStage = ref('pre-bidding')
const currentCategory = ref('鲜花摊位')
const biddingStartTime = ref('2024-03-15 10:00:00')
const biddingEndTime = ref('2024-03-15 10:30:00')
const countdown = ref('30:00')
const winners = ref([
  { name: '张*三', price: 5000, phone: '139****1234', responded: true },
  { name: '李*四', price: 4800, phone: '138****5678', responded: false },
  { name: '王*五', price: 4600, phone: '137****9012', responded: true },
])

let timer: number

const updateCountdown = () => {
  const [minutes, seconds] = countdown.value.split(':').map(Number)
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer)
    currentStage.value = 'post-bidding'
    return
  }
  
  let newSeconds = seconds - 1
  let newMinutes = minutes
  
  if (newSeconds < 0) {
    newSeconds = 59
    newMinutes -= 1
  }
  
  countdown.value = `${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}

const changeStage = (stage: string) => {
  currentStage.value = stage
  if (stage === 'bidding') {
    countdown.value = '30:00'
    timer = setInterval(updateCountdown, 1000)
  } else {
    clearInterval(timer)
  }
}

onMounted(() => {
  // 模拟实时更新中标结果
  const eventSource = new EventSource('/api/bidding-updates')
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (data.type === 'winner_update') {
      const index = winners.value.findIndex(w => w.name === data.name)
      if (index !== -1) {
        winners.value[index].responded = data.responded
      }
    }
  }
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>