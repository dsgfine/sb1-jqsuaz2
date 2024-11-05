<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">经营者信息预录入</h3>
        <div class="mt-2 px-7 py-3">
          <input
            v-model="name"
            type="text"
            placeholder="姓名"
            class="mt-2 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <input
            v-model="phone"
            type="tel"
            placeholder="电话"
            class="mt-2 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <input
            v-model="idNumber"
            type="text"
            placeholder="身份证号"
            class="mt-2 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <select
            v-model="stallType"
            class="mt-2 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          >
            <option value="">选择摊位类型</option>
            <option value="flower">鲜花摊位</option>
            <option value="plant">绿植摊位</option>
            <option value="tool">园艺用品摊位</option>
            <option value="design">花艺设计摊位</option>
            <option value="seed">种子和球茎摊位</option>
          </select>
        </div>
        <div class="items-center px-4 py-3">
          <button
            @click="registerOperator"
            class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            注册经营者
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

const name = ref('')
const phone = ref('')
const idNumber = ref('')
const stallType = ref('')

const registerOperator = () => {
  // TODO: 实现注册逻辑，可能需要调用API
  console.log('注册经营者:', { name: name.value, phone: phone.value, idNumber: idNumber.value, stallType: stallType.value })
  // 在实际应用中，这里应该调用一个API来保存数据
}

defineEmits(['close'])
</script>