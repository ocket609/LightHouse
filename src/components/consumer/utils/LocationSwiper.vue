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
      imageSrc: './public/pic-north-lighthouse-3.jpg',
      alt: '新北市富貴角燈塔'
    },
    {
      title: '桃園市白沙岬燈陶塔',
      subtitle: 'Taoyuan City Baishajia Lighthouse',
      imageSrc: './public/pic-north-lighthouse-4.jpg',
      alt: '桃園市白沙岬燈陶塔'
    },
    {
      title: '新北市三貂角燈塔',
      subtitle: 'Sandiao Cape Lighthouse',
      imageSrc: './public/pic-north-lighthouse-2.jpg',
      alt: '新北市三貂角燈塔'
    }]
  },
  {
    area:"南部區域",
      areaData:[{
      title: '台南市國聖港燈塔',
      subtitle: 'Guosheng Lighthouse',
      imageSrc: './public/pic-sorth-lighthouse-1.jpg',
      alt: '台南市國聖港燈塔'
    },
    {
      title: '高雄燈塔（旗后燈塔）',
      subtitle: 'Kaohsiung Lighthouse',
      imageSrc: './public/pic-sorth-lighthouse-2.jpg',
      alt: '高雄燈塔（旗后燈塔）'
    },
    {
      title: '屏東鵝鑾鼻燈塔',
      subtitle: 'Eluanbi Cape Lighthouse',
      imageSrc: './public/pic-sorth-lighthouse-3.jpg',
      alt: '屏東鵝鑾鼻燈塔'
    }]
  },
  {
    area:"東部區域",
      areaData:[{
      title: '台東縣綠島燈塔',
      subtitle: 'Green Island Lighthouse',
      imageSrc: './public/pic-east-lighthouse-1.jpg',
      alt: '台東縣綠島燈塔'
      },
      ]
  },
  {
    area:"西部區域",
      areaData:[{
      title: '彰化縣芳苑燈塔',
      subtitle: 'Fangyuan Lighthouse',
      imageSrc: './public/pic-wast-lighthouse-1.jpg',
      alt: '彰化縣芳苑燈塔'
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
