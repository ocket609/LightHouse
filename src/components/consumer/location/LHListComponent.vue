<script setup>
import { lighthouses } from '@/constants/lightHouseData.js'

</script>

<template>
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6">
        <template v-for="region in lighthouses" :key="region.area">
          <template v-for="item in region.areaData" :key="item.title">
            <div class="col">
              <div class="card h-100 border-0">
                <div class="card-overlay">
                  <img :src="item.imageSrc" class="card-img-top" :alt="item.alt">
                  <div class="overlay text-center d-flex flex-column align-items-center justify-content-center">
                    <h5 class="card-title fs-3">{{ item.title }}</h5>
                    <p>{{ item.content }}</p>
                    <a href="#" class="fs-4 btn btn-outline-primary">查看更多</a>
                  </div>
                </div>
              </div>
            </div>
          </template>
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

