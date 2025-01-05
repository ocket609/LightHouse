<template>
  <div>
    <h1>燈塔詳情</h1>
    <p>燈塔 ID: {{ route.params.singleLocationId }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
window.scrollTo(0, 0)
</script>