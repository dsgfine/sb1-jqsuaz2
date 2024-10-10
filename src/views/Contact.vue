<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-red-800 mb-6">联系我们</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">主办单位联系方式</h2>
      <div class="space-y-4">
        <div class="flex items-center">
          <Phone class="text-red-600 mr-3" />
          <span>电话：123-456-7890</span>
        </div>
        <div class="flex items-center">
          <Mail class="text-red-600 mr-3" />
          <span>邮箱：info@flowermarket.com</span>
        </div>
        <div class="flex items-center">
          <MapPin class="text-red-600 mr-3" />
          <span>地址：花市大道123号，花城市</span>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-2">工作时间</h3>
        <p>周一至周五：上午9:00 - 下午5:00</p>
        <p>周六、周日：上午10:00 - 下午4:00</p>
      </div>
      <div class="mt-8">
        <h3 class="text-xl font-semibold mb-2">紧急联系</h3>
        <p>如遇紧急情况，请拨打：999-888-7777</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Phone, Mail, MapPin } from 'lucide-vue-next'
</script>