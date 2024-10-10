<template>
  <div class="max-w-md mx-auto text-center">
    <h1 class="text-3xl font-bold text-red-800 mb-6">现场签到</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <template v-if="!isCheckedIn">
        <p class="mb-4">请扫描现场的临时二维码完成签到</p>
        <button
          @click="handleScan"
          :disabled="isScanning"
          :class="[
            'flex items-center justify-center mx-auto px-6 py-3 bg-red-600 text-white rounded-lg transition',
            isScanning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
          ]"
        >
          <QrCode class="mr-2" />
          {{ isScanning ? '扫描中...' : '扫描二维码' }}
        </button>
      </template>
      <div v-else class="text-green-600">
        <h2 class="text-2xl font-bold mb-2">签到成功！</h2>
        <p>您已完成现场签到，可以参与竞价了。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { QrCode } from 'lucide-vue-next'

const isScanning = ref(false)
const isCheckedIn = ref(false)

const handleScan = () => {
  // Simulate QR code scanning
  isScanning.value = true
  setTimeout(() => {
    isScanning.value = false
    isCheckedIn.value = true
  }, 2000)
}
</script>