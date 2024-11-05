<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">竞标时段控制</h3>
        <div class="mt-2 px-7 py-3">
          <select
            v-model="currentStage"
            class="mb-4 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          >
            <option value="pre-bidding">准备阶段</option>
            <option value="bidding">竞标阶段</option>
            <option value="post-bidding">结果公布阶段</option>
          </select>
          <button
            @click="changeStage"
            class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            切换到选中阶段
          </button>
        </div>
        <div class="items-center px-4 py-3">
          <button
            @click="$emit('close')"
            class="mt-3 px-4 py-2 bg-gray-300 text-black text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentStage = ref('pre-bidding')

const changeStage = () => {
  // TODO: 实现阶段切换逻辑，可能需要调用API
  console.log('切换到阶段:', currentStage.value)
  // 在实际应用中，这里应该调用一个API来更新竞标阶段
}

defineEmits(['close'])
</script>