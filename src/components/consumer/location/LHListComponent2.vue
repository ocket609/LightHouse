<template>
  {{ lighthouseStore.lighthouses }}
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <div class="row" ref="masonryContainer">
        <div
          class="col-6 col-lg-4 mb-3"
          v-for="region in lighthouseStore.lighthouses"
          :key="region.id"
        >
          <div class="card h-100 border-0 mb-3">
            <div class="card-overlay">
              <img
                :src="region.image"
                class="card-img-top"
                :alt="region.title"
                @load="layoutMasonry"
              />
              <div
                class="overlay text-center d-flex flex-column align-items-center justify-content-center"
              >
                <h5 class="card-title fs-3">{{ region.title }}</h5>
                <p>{{ region.description }}</p>
                <a href="#" class="fs-4 btn btn-outline-primary">查看更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

const lighthouseStore = useLighthouseStore()
const masonryContainer = ref(null)
let masonryInstance = null

const layoutMasonry = () => {
  if (masonryInstance) {
    masonryInstance.layout()
  }
}

onMounted(async () => {
  await lighthouseStore.getArticleData()
  imagesLoaded(masonryContainer.value, () => {
    masonryInstance = new Masonry(masonryContainer.value, {
      itemSelector: '.col-6, .col-lg-4',
      percentPosition: true,
    })
  })
})

</script>

<style>
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
