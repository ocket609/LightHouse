<script setup>
import { useRoute } from 'vue-router'
import AdComponent from '@/components/consumer/location/AdComponent.vue'
const route = useRoute()
console.log(route)
window.scrollTo(0, 0)
</script>
<template>
  <AdComponent />
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10 text-white">
      <div>
        <h1>燈塔詳情</h1>
        <p>燈塔 ID: {{ route.params.singleLocationId }}</p>
      </div>
    </div>
  </div>
</template>
