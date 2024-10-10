<template>
  <div class="min-h-screen bg-red-50 flex flex-col">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>