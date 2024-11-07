<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { ref,computed  } from 'vue';

const breakpoints = {
  375: {
    slidesPerView: 1,
  },
  992: {
    slidesPerView: 2,
  },
};


const props = defineProps({
  region: {
    type: String,
    required: true
  }
});

const lighthouses = ref([
  {
    area:"北部區域",
      areaData:[{

          title: '新北市富貴角燈塔',
      subtitle: 'New Taipei City Fuguijiao Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-1.png',
      alt: '新北市富貴角燈塔'
    },
    {
      title: '桃園市白沙岬燈陶塔',
      subtitle: 'Taoyuan City Baishajia Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-2.png',
      alt: '桃園市白沙岬燈陶塔'
    },
    {
      title: '新北市富貴角燈塔',
      subtitle: 'New Taipei City Fuguijiao Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-1.png',
      alt: '新北市富貴角燈塔'
    }]
  },
  {
    area:"南部區域",
      areaData:[{
      title: '新北市富貴角燈塔2',
      subtitle: 'New Taipei City Fuguijiao Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-1.png',
      alt: '新北市富貴角燈塔'
    },
    {
      title: '桃園市白沙岬燈陶塔2',
      subtitle: 'Taoyuan City Baishajia Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-2.png',
      alt: '桃園市白沙岬燈陶塔'
    },
    {
      title: '新北市富貴角燈塔2',
      subtitle: 'New Taipei City Fuguijiao Lighthouse',
      imageSrc: './src/assets/lighthouse_img/north-1.png',
      alt: '新北市富貴角燈塔'
    }]
  },
  {
    area:"東部區域",
      areaData:[{
      title: '....',
      subtitle: '...',
      imageSrc: '...',
      alt: '...'
      },
      ]
  },
  {
    area:"西部區域",
      areaData:[{
      title: '....',
      subtitle: '...',
      imageSrc: '...',
      alt: '...'
      },
      ]
  }
]);
// 過濾出props傳入區域和v-for資料是否相符
const filteredLighthouses = computed(() => {
  return lighthouses.value.filter(lighthouse => lighthouse.area === props.region);
});
</script>
<template>
    <swiper :spaceBetween="30" :breakpoints="breakpoints"
     class="mySwiper">
    <swiper-slide v-for="(lighthouse, index) in filteredLighthouses[0]?.areaData" :key="index">
      <div class="card bg-transparent" style="overflow: hidden;">
        <div class="card-body p-0">
          <div class="card-title ps-6 pb-12 bottom-0 text-white mb-0" style="position: absolute; z-index: 999;">
            <h4 class="pb-5">{{ lighthouse.title }}</h4>
            <p class="mb-0">{{ lighthouse.subtitle }}</p>
          </div>
          <img :src="lighthouse.imageSrc" class="card-img-top" :alt="lighthouse.alt">
          <a href="#" class="btn btn-dark position-absolute end-0 text-white bottom-0 px-6 py-14 rounded-0">MORE</a>
        </div>
      </div>
    </swiper-slide>
    </swiper>
</template>
<style lang="scss" scoped>
.btn:hover{
    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
}
.card img {
  transform: scale(1, 1);
  transition: all 2s ease-out;
}
.card img:hover {
  transform: scale(1.2, 1.2);
}
</style>
