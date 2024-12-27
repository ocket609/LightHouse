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
      <!-- Loading 遮罩 -->
      <div v-if="lighthouseStore.isLoading">
        <div class="row gap-1 flex-lg-nowrap">
          <div
            class="card col-6 col-lg-4 mb-3"
            aria-hidden="true"
            style="background: #dadee3d6"
            v-for="i in 3"
            :key="i"
          >
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
          </div>
        </div>
      </div>

      <!-- 正常顯示內容 -->
      <div v-else>
        <LHListComponent class="d-lg-none" />
        <LHListComponent2 class="d-none d-lg-block" />
      </div>
    </div>
  </div>
</template>
