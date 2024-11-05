<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">编辑竞价基本信息</h3>
        <div class="mt-2 px-7 py-3">
          <textarea
            v-model="biddingInfo"
            class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="输入竞价须知"
          ></textarea>
          <textarea
            v-model="stallCategories"
            class="mt-4 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="输入摊位分类说明"
          ></textarea>
        </div>
        <div class="items-center px-4 py-3">
          <button
            id="ok-btn"
            @click="saveChanges"
            class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            保存更改
          </button>
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

const biddingInfo = ref('')
const stallCategories = ref('')

const saveChanges = () => {
  // TODO: 实现保存逻辑，可能需要调用API
  console.log('保存竞价基本信息:', { biddingInfo: biddingInfo.value, stallCategories: stallCategories.value })
  // 在实际应用中，这里应该调用一个API来保存数据
}

defineEmits(['close'])
</script>