<script setup>
import { onMounted } from 'vue'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

const lighthouseStore = useLighthouseStore()
onMounted(async () => {
    await lighthouseStore.getArticleData(); // 確保數據已載入
    window.scrollTo(0, 0)

  });
</script>

<template>
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <template v-if="lighthouseStore.isLoading">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6 justify-content-between">
          <div
            class="card card-width"
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
      </template>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6" v-else>
        <template v-if="lighthouseStore.lighthousesMobile.length > 0">
          <template v-for="region in lighthouseStore.lighthousesMobile" :key="region.id">
              <div class="col">
                <div class="card h-100 border-0">
                  <div class="card-overlay">
                    <img :src="region.image" class="card-img-top" :alt="region.title">
                    <div class="overlay text-center d-flex flex-column align-items-center justify-content-center p-5">
                      <h5 class="card-title fs-3">{{ region.title }}</h5>
                      <p>{{ region.description.slice(0, 12) }}...</p>
                      <RouterLink
                      :to="{ name: 'singleLocation', params: { singleLocationId: region.title } }"
                      class="fs-4 btn btn-outline-primary"
                    >
                    查看更多
                    </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
          </template>
        </template>
        <!-- 如果沒有資料，顯示提示訊息 -->
         <template v-else>
          <div class="text-center w-100">
            <p class="fs-2 text-white pb-0 mb-16">沒有符合條件的燈塔資料</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
  overflow: hidden;
}
.card-width {
  width: calc(100% - 12px);
}
@media(min-width: 768px){
  .card-width {
  width: calc(50% - 12px);
}
}
@media(min-width: 1024px){
  .card-width {
  width: calc(33% - 12px);
}
}
.card-overlay {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, opacity 0.3s ease;
  color: #000; /* 文字顏色 */
}
.card-overlay:hover .overlay {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  opacity: 1;
}
.btn:hover {
  color: #fff;
}
</style>

