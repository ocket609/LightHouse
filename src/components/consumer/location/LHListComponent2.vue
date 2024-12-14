<template>
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <template v-if="lighthouseStore.isLoading">
        <div class="row gap-1 flex-nowrap">
          <div class="card col-6 col-lg-4 mb-3" aria-hidden="true" style="background: #dadee3d6" v-for="i in 3"
            :key="i">
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
      <div class="row" ref="masonryContainer" v-else>
        <!-- 如果有資料，正常渲染卡片 -->
        <template v-if="lighthouseStore.lighthouses.length > 0">
          <div class="col-6 col-lg-4 mb-3 " v-for="region in lighthouseStore.lighthouses" :key="region.id">
            <div class="card border-0 mb-3">
              <div class="card-overlay">
                <img
                  :src="region.image"
                  class="card-img-top"
                  :alt="region.title"
                  @load="layoutMasonry"
                />
                <div class="overlay text-center d-flex flex-column align-items-center justify-content-center p-5">
                  <h5 class="card-title fs-3">{{ region.title }}</h5>
                  <p>{{ region.description.slice(0, 12) }}...</p>
                  <button type="button" class="fs-4 btn btn-outline-primary">查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 如果沒有資料，顯示提示訊息 -->
        <template v-else>
          <div class="text-center w-100">
            <p class="fs-2 text-white">沒有符合條件的燈塔資料</p>
          </div>
        </template>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

const lighthouseStore = useLighthouseStore()
const masonryContainer = ref(null)
let masonryInstance = null


// 初始化 Masonry 佈局
const initMasonry = () => {
    if (!masonryContainer.value) {
        // console.warn("Skipping Masonry initialization, container not ready.");
        return;
    }
    imagesLoaded(masonryContainer.value, () => {
        masonryInstance = new Masonry(masonryContainer.value, {
            itemSelector: '.col-6, .col-lg-4',
            percentPosition: true,
        });
    });
};
// 重新佈局 Masonry
const layoutMasonry = () => {
  if (masonryInstance) {
    masonryInstance.layout()
  }
}
// 監測資料改變並重新佈局
watch(
  () => lighthouseStore.lighthouses,
  () => {
    layoutMasonry()
  }
)


onMounted(async () => {
    await lighthouseStore.getArticleData();
    initMasonry();
});



</script>

<style>
.masonry-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
}
@media (max-width: 992px) {
  .col-6 {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .col-6 {
    width: 100%;
  }
}

.container {
  margin-top: 20px;
}

.card-img-top {
  width: 100%;
  height: auto;
}
</style>
