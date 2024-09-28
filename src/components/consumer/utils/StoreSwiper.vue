<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref, computed } from 'vue'
import 'swiper/css/navigation'

// Import required modules
import { Navigation } from 'swiper/modules'

// Define the modules array for Swiper
const modules = [Navigation]

const breakpoints = {
  375: {
    slidesPerView: 1
  },
  992: {
    slidesPerView: 2
  }
}

const storeData = ref([
  {
    title: '燈塔模型',
    imageSrc: './public/pic-north-lighthouse-3.jpg',
    alt: '燈塔模型'
  },
  {
    title: '燈塔模型',
    imageSrc: './public/pic-north-lighthouse-4.jpg',
    alt: '燈塔模型'
  },
  {
    title: '燈塔模型',
    imageSrc: './public/pic-north-lighthouse-2.jpg',
    alt: '燈塔模型'
  }
])
</script>
<template>
  <div class="swiper-box">
    <swiper
      :navigation="true"
      :modules="modules"
      :spaceBetween="30"
      :breakpoints="breakpoints"
      class="mySwiper"
    >
      <swiper-slide v-for="(storeData, index) in storeData" :key="index">
        <div class="card mb-0 border-0">
          <div class="row g-0">
            <div class="col-md-6" style="overflow: hidden">
              <img
                :src="storeData.imageSrc"
                class="img-fluid rounded-start h-100"
                :alt="storeData.alt"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body px-6 py-8 d-flex justify-content-between flex-column h-100">
                <div class="card-header bg-transparent border-0 p-0 m-0">
                  <div class="d-flex justify-content-between mb-4 align-items-center">
                    <h4 class="card-title mb-0">{{ storeData.title }}</h4>
                    <i class="bi bi-heart-fill text-success" style="font-size: 28px"></i>
                  </div>

                  <p class="fs-6 text-success mb-0">商品資訊</p>
                </div>

                <div class="card-end mb-0 d-flex justify-content-between align-items-center">
                  <div class="side-left">
                    <p class="mb-0 text-decoration-line-through text-success fs-6">$250</p>
                    <p class="mb-0 fs-4">$199</p>
                  </div>
                  <div class="addBtnCart">
                    <i
                      class="bi bi-cart4"
                      style="font-size: 24px; color: #fff; padding-right: 10px"
                    ></i>
                    <span style="color: #f5f5f5">加入購物車</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-next">
          <i class="bi bi-chevron-right"></i>
      </div>
      <div class="swiper-button-prev">
          <i class="bi bi-chevron-left"></i>
      </div>
    </swiper>
  </div>
</template>
<style lang="scss">
.addBtnCart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bs-lh-Tertiary-100);
  border-radius: 8px;
  padding: 16px;
}
.swiper-box .card{
    border-radius: 16px;
    overflow: hidden;
}
.swiper-box .card img {
  transform: scale(1, 1);
  transition: all 2s ease-out;

}
.swiper-box .card img:hover {
  transform: scale(1.2, 1.2);
  border-bottom-left-radius: 64px !important;
  border-top-left-radius: 64px !important;
}
.swiper-box {
  position: relative;
  
  .mySwiper {
    position: unset;
    
    .swiper-wrapper {
      position: unset !important;
    }
  }
  
  
}
.swiper-box .swiper-button-next {
right: -70px !important;  // 控制箭头的右侧位置
top: 55%;                // 控制箭头的垂直位置
transform: translateY(-35%);  // 保证箭头垂直居中
width: 40px;             // 可以根据需求调整宽度
height: 40px;            // 可以根据需求调整高度
background: var(--bs-lh-Tertiary-100);             // 调整箭头颜色
border-radius: 32px;
color: var(--bs-white);
z-index: 999;             // 确保箭头位于滑块上方
}
.swiper-button-next:after {
    content: '';
}
.swiper-button-prev:after {
    content: '';
}
.swiper-box .swiper-button-prev {
left: -70px !important;  // 控制箭头的右侧位置
top: 55%;                // 控制箭头的垂直位置
transform: translateY(-35%);  // 保证箭头垂直居中
width: 40px;             // 可以根据需求调整宽度
height: 40px;            // 可以根据需求调整高度
background: var(--bs-lh-Tertiary-100);             // 调整箭头颜色
border-radius: 32px;
color: var(--bs-white);
z-index: 999;             // 确保箭头位于滑块上方
}
</style>
