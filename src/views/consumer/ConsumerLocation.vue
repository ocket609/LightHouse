<script setup>
import { onMounted } from 'vue'
import AdComponent from '@/components/consumer/location/AdComponent.vue'
import SearchComponent from '@/components/consumer/location/SearchComponent.vue'
import LHListComponent from '@/components/consumer/location/LHListComponent.vue'
import LHListComponent2 from '@/components/consumer/location/LHListComponent2.vue'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

const lighthouseStore = useLighthouseStore()
// 在組件掛載時觸發資料加載
onMounted(async () => {
  lighthouseStore.isLoading = true // 設置為加載中
  await lighthouseStore.getArticleData() // 獲取資料
  lighthouseStore.isLoading = false // 加載完成
})
</script>
<template>
  <AdComponent />
  <SearchComponent />
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <div>
        <LHListComponent class="d-lg-none" />
        <LHListComponent2 class="d-none d-lg-block" />
      </div>
    </div>
  </div>
</template>
