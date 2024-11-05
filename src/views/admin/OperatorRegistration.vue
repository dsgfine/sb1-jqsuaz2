<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
    <div class="mb-4 space-y-2">
      <input
        v-model="name"
        type="text"
        placeholder="姓名"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <input
        v-model="phone"
        type="tel"
        placeholder="电话"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <input
        v-model="idNumber"
        type="text"
        placeholder="身份证号"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <select
        v-model="stallType"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      >
        <option value="">选择摊位类型</option>
        <option value="flower">鲜花摊位</option>
        <option value="plant">绿植摊位</option>
        <option value="tool">园艺用品摊位</option>
        <option value="design">花艺设计摊位</option>
        <option value="seed">种子和球茎摊位</option>
      </select>
    </div>
    <button
      @click="registerOperator"
      class="w-full px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      注册经营者
    </button>
  </div>
</template>

<script lang="ts" setup>
// ... (保持脚本部分不变)
</script>