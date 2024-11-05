<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
    <div class="space-y-4">
      <button
        @click="exportOperators"
        class="w-full px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        导出经营者信息
      </button>
      <button
        @click="exportBidding"
        class="w-full px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        导出投标信息
      </button>
      <button
        @click="exportWinners"
        class="w-full px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        导出中标信息
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// ... (保持脚本部分不变)
</script>