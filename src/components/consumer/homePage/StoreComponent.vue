<script setup>
import { ref } from 'vue'
import StoreSwiper from '@/components/consumer/utils/StoreSwiper.vue'
</script>

<template>
  <div class="bg-info text-white pt-16" style="padding-bottom: 160px">
    <div class="container">
      <div class="d-flex justify-content-center" style="margin-top: 160px">
        <div class="location-title mb-16">
          <h3 class="mb-6">
            <span style="letter-spacing:16px;">週邊小</span>
            <span>物</span>
          </h3>
          <p>
            <span style="letter-spacing:4px;">LIGHTHOUSE STOR</span>
            <span>E</span>
          </p>
          <div class="d-flex justify-content-center">
            <div class="border border-2 border-primary" style="width: 120px"></div>
          </div>
        </div>
      </div>

      <StoreSwiper />
    </div>
  </div>

</template>
<style scoped>
.location-title {
  width: 275px;
  text-align: center;
}
</style>