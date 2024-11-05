<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label for="stallType" class="block text-gray-700 mb-2">选择摊位类型</label>
      <select
        id="stallType"
        v-model="selectedStallType"
        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-4"
        @change="loadWinners"
      >
        <option v-for="type in stallTypes" :key="type.value" :value="type.value">
          {{ type.label }}
        </option>
      </select>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">姓名</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">电话</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">身份证号</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">中标价格</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">缴费状态</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="winner in winners" :key="winner.id">
            <td class="py-2 px-4 border-b border-gray-200">{{ winner.name }}</td>
            <td class="py-2 px-4 border-b border-gray-200">{{ winner.phone }}</td>
            <td class="py-2 px-4 border-b border-gray-200">{{ winner.idNumber }}</td>
            <td class="py-2 px-4 border-b border-gray-200">¥{{ winner.bidAmount.toFixed(2) }}</td>
            <td class="py-2 px-4 border-b border-gray-200">
              <span :class="winner.hasPaid ? 'text-green-600' : 'text-red-600'">
                {{ winner.hasPaid ? '已缴费' : '未缴费' }}
              </span>
            </td>
            <td class="py-2 px-4 border-b border-gray-200">
              <button
                @click="togglePaymentStatus(winner)"
                class="px-3 py-1 text-sm rounded-full"
                :class="winner.hasPaid ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'"
              >
                {{ winner.hasPaid ? '标记为未缴费' : '标记为已缴费' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
const winners = ref([])

// 模拟加载中标者数据
const loadWinners = () => {
  // 在实际应用中，这里应该调用API来获取真实数据
  winners.value = [
    { id: 1, name: '张三', phone: '13800138000', idNumber: '310000199001011234', bidAmount: 5000, hasPaid: true },
    { id: 2, name: '李四', phone: '13900139000', idNumber: '320000199101011234', bidAmount: 4800, hasPaid: false },
    { id: 3, name: '王五', phone: '13700137000', idNumber: '330000199201011234', bidAmount: 4600, hasPaid: true },
  ]
}

// 切换缴费状态
const togglePaymentStatus = (winner) => {
  winner.hasPaid = !winner.hasPaid
  // 在实际应用中，这里应该调用API来更新缴费状态
  console.log(`更新 ${winner.name} 的缴费状态为: ${winner.hasPaid ? '已缴费' : '未缴费'}`)
}

// 初始加载
loadWinners()
</script>