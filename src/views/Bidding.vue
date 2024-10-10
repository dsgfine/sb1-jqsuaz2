<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold text-red-800 mb-6">竞价</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <p class="text-lg font-semibold">
          {{ isBiddingOpen
            ? `竞价剩余时间: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`
            : '竞价已结束' }}
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="stallType" class="block text-gray-700 mb-2">选择摊位类型</label>
          <select
            id="stallType"
            v-model="selectedType"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">请选择</option>
            <option v-for="type in stallTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
        <div class="mb-6">
          <label for="bidAmount" class="block text-gray-700 mb-2">出价金额 (¥)</label>
          <input
            type="number"
            id="bidAmount"
            v-model="bidAmount"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
            min="0"
            step="0.01"
          />
        </div>
        <button
          type="submit"
          :disabled="!isBiddingOpen"
          :class="[
            'w-full py-2 px-4 rounded-md transition',
            isBiddingOpen
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          ]"
        >
          {{ isBiddingOpen ? '提交竞价' : '竞价已结束' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stallTypes = [
  '鲜花摊位', '绿植摊位', '园艺用品摊位', '花艺设计摊位', '种子和球茎摊位'
]

const selectedType = ref('')
const bidAmount = ref('')
const timeLeft = ref(300) // 5 minutes in seconds
const isBiddingOpen = ref(true)

let timer: number

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0 && isBiddingOpen.value) {
      timeLeft.value--
    } else {
      isBiddingOpen.value = false
      clearInterval(timer)
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})

const handleSubmit = () => {
  if (isBiddingOpen.value) {
    console.log(`Bid submitted for ${selectedType.value}: ¥${bidAmount.value}`)
    // TODO: Implement bid submission logic
  }
}
</script>