<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-red-800 mb-6">竞价须知</h1>
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 class="text-2xl font-semibold mb-4">竞标规则</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>竞标者必须在指定时间内完成现场签到</li>
        <li>每种类型的摊位有特定的竞价时段</li>
        <li>在竞价时段内，您可以多次修改出价</li>
        <li>竞价时段结束后，将无法再次出价或修改</li>
        <li>最终中标结果将在所有竞价结束后公布</li>
      </ul>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">摊位分类</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(type, index) in stallTypes" :key="index" class="border border-gray-200 p-4 rounded-lg">
          <h3 class="text-xl font-semibold text-red-700 mb-2">{{ type.name }}</h3>
          <p>{{ type.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const stallTypes = [
  { name: '鲜花摊位', description: '适合销售各种鲜切花和盆栽花卉' },
  { name: '绿植摊位', description: '专门用于销售室内外观赏植物和盆景' },
  { name: '园艺用品摊位', description: '销售园艺工具、肥料、花盆等相关用品' },
  { name: '花艺设计摊位', description: '提供现场花艺设计和定制服务' },
  { name: '种子和球茎摊位', description: '销售各种花卉和蔬菜种子，以及球茎类植物' },
]
</script>