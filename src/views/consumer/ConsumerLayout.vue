<script setup>
import HeaderComponent from '@/components/consumer/HeaderComponent.vue'
import FooterComponent from '@/components/consumer/FooterComponent.vue'
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <main>
        <RouterView/>
    </main>
  <FooterComponent></FooterComponent>
  </template>

