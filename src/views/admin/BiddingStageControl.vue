<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label for="stallType" class="block text-gray-700 mb-2">选择摊位类型</label>
      <select
        id="stallType"
        v-model="selectedStallType"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-4"
      >
        <option v-for="type in stallTypes" :key="type.value" :value="type.value">
          {{ type.label }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label for="biddingStage" class="block text-gray-700 mb-2">选择竞标时段</label>
      <select
        id="biddingStage"
        v-model="currentStage"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-4"
      >
        <option value="pre-bidding">准备阶段</option>
        <option value="bidding">竞标阶段</option>
        <option value="post-bidding">结果公布阶段</option>
      </select>
    </div>
    <button
      @click="changeStage"
      class="w-full px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      切换到选中阶段
    </button>
    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-2">当前大屏展示：</h3>
      <p class="mb-2">
        {{ getCurrentStallTypeLabel() }}: {{ getStageLabel(currentDisplayStage) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const stallTypes = [
  { value: 'flower', label: '鲜花摊位' },
  { value: 'plant', label: '绿植摊位' },
  { value: 'tool', label: '园艺用品摊位' },
  { value: 'design', label: '花艺设计摊位' },
  { value: 'seed', label: '种子和球茎摊位' }
]

const selectedStallType = ref(stallTypes[0].value)
const currentStage = ref('pre-bidding')
const currentDisplayStage = ref('pre-bidding')
const currentDisplayStallType = ref(stallTypes[0].value)

const changeStage = () => {
  currentDisplayStage.value = currentStage.value
  currentDisplayStallType.value = selectedStallType.value
  console.log(`Changed ${selectedStallType.value} to ${currentStage.value}`)
  // TODO: 在实际应用中，这里应该调用一个API来更新竞标阶段
}

const getStageLabel = (stage: string) => {
  switch (stage) {
    case 'pre-bidding':
      return '准备阶段'
    case 'bidding':
      return '竞标阶段'
    case 'post-bidding':
      return '结果公布阶段'
    default:
      return '未知阶段'
  }
}

const getCurrentStallTypeLabel = () => {
  const currentType = stallTypes.find(type => type.value === currentDisplayStallType.value)
  return currentType ? currentType.label : '未知摊位类型'
}
</script>