<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label for="biddingInfo" class="block text-gray-700 mb-2">竞价须知</label>
      <textarea
        id="biddingInfo"
        v-model="biddingInfo"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="4"
        placeholder="输入竞价须知"
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="stallCategories" class="block text-gray-700 mb-2">摊位分类说明</label>
      <textarea
        id="stallCategories"
        v-model="stallCategories"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="4"
        placeholder="输入摊位分类说明"
      ></textarea>
    </div>
    <button
      @click="saveChanges"
      class="w-full md:w-auto px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      保存更改
    </button>
  </div>
</template>

<script lang="ts" setup>
// ... (保持脚本部分不变)
</script>