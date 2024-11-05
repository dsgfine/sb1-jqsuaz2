<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">数据导出</h3>
        <div class="mt-2 px-7 py-3">
          <button
            @click="exportOperators"
            class="mb-2 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            导出经营者信息
          </button>
          <button
            @click="exportBidding"
            class="mb-2 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            导出投标信息
          </button>
          <button
            @click="exportWinners"
            class="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            导出中标信息
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
const exportOperators = () => {
  // TODO: 实现经营者信息导出逻辑
  console.log('导出经营者信息')
  // 在实际应用中，这里应该调用一个API来获取数据并生成导出文件
}

const exportBidding = () => {
  // TODO: 实现投标信息导出逻辑
  console.log('导出投标信息')
  // 在实际应用中，这里应该调用一个API来获取数据并生成导出文件
}

const exportWinners = () => {
  // TODO: 实现中标信息导出逻辑
  console.log('导出中标信息')
  // 在实际应用中，这里应该调用一个API来获取数据并生成导出文件
}

defineEmits(['close'])
</script>