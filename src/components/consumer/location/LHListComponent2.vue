<template>
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
    <div class="row" ref="masonryContainer">
      <div
        class="col-6 col-lg-4 mb-3"
        v-for="region in lighthousesMobile"
        :key="region"
      >
        <template v-for="item in region.areaData" :key="item.title">
          <div class="card h-100 border-0 mb-3" @load="layoutMasonry">
            <div class="card-overlay">
              <img :src="item.imageSrc" class="card-img-top" :alt="item.alt" />
              <div
                class="overlay text-center d-flex flex-column align-items-center justify-content-center"
              >
                <h5 class="card-title fs-3">{{ item.title }}</h5>
                <p>{{ item.content }}</p>
                <a href="#" class="fs-4 btn btn-outline-primary">查看更多</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  </div>
  </template>

<script>
import { ref, onMounted } from 'vue'
// 瀑布流套件https://bootstrap5.hexschool.com/docs/5.1/examples/masonry/
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { lighthouses, lighthousesMobile } from '@/constants/lightHouseData.js'

export default {
  setup() {
    const masonryContainer = ref(null)
    let masonryInstance = null

    const layoutMasonry = () => {
      if (masonryInstance) {
        masonryInstance.layout()
      }
    }

    onMounted(() => {
      imagesLoaded(masonryContainer.value, () => {
        masonryInstance = new Masonry(masonryContainer.value, {
          itemSelector: '.col-6, .col-lg-4',
          percentPosition: true
        })
      })
    })

    return {
      masonryContainer,
      lighthouses,
      layoutMasonry,
      lighthousesMobile
    }
  }
}
</script>

<style>
@media (max-width: 992px) {
  .col-6 {
    width: 50%; /* 992px 以下顯示兩個 */
  }
}

@media (max-width: 768px) {
  .col-6 {
    width: 100%; /* 768px 以下顯示一個 */
  }
}

/* 可選擇性添加樣式來優化外觀 */
.container {
  margin-top: 20px;
}
.card-img-top {
  width: 100%;
  height: auto; /* 讓圖片保持其原始比例 */
}
</style>
