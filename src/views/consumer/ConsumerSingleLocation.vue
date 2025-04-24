<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AdComponent from '@/components/consumer/location/AdComponent.vue'
import { useLighthouseStore } from '@/stores/lightHouseList.js'
import { searchList } from '@/constants/searchListData.js'


const route = useRoute()
const lighthouseStore = useLighthouseStore()
// 假設 URL 上有一個參數是 title，例如：/lighthouse/白沙岬燈塔的寧靜港灣
const currentTitle = route.params.singleLocationId

// 根據 title 找出對應的 tag
const currentTags = computed(() => {
  const match = lighthouseStore.lighthouses.find(item => item.title === currentTitle)
  return match ? match.tag : []
})
console.log(lighthouseStore.lighthouses);
//根據 title 找出對應的img
const currentImg = computed(() => {
  const match = lighthouseStore.lighthouses.find(item => item.title === currentTitle)
  return match ? match.image : ''
})

const currentDesc = computed(() => {
  const match = lighthouseStore.lighthouses.find(item => item.title === currentTitle)
  return match ? match.description : ''
})
const allUniqueTags = computed(() => {
  // 抓出所有 tag
  const tags = lighthouseStore.lighthouses.flatMap(item => item.tag)

  // 抓出所有 label（你提供的是 searchList[1].items）
  const labels = searchList[1].items.map(item => item.label)

  // 合併後去除重複
  return [...new Set([...tags, ...labels])]
});

const searchText = ref('');
onMounted(async () => {
  await lighthouseStore.getArticleData() // 確保數據已載入
  window.scrollTo(0, 0)
})
</script>
<template>
  <AdComponent />
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10 text-white">
      <div class="row">
        <div class="col-md-7 col-lg-8">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink class="" to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink class="" to="/consumer/location">燈塔資訊</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ route.params.singleLocationId }}
              </li>
            </ol>
          </nav>
          <h3>{{ route.params.singleLocationId }}</h3>
          <ul class="d-flex ps-0">
            <li v-for="(tag, index) in currentTags" :key="index" class="me-4">
              <i class="bi bi-tag-fill"></i>
              <span class="ms-1">{{ tag }}</span>
            </li>
          </ul>
          <div class="artice-img-area">
            <img :src="currentImg" :alt="route.params.singleLocationId" class="rounded ">
          </div>
          <div class="artice-content my-10 fs-4">
            {{ currentDesc }}
          </div>
        </div>
        <div class="col-md-5 col-lg-4">
          <h4 class="mt-4  mt-lg-0 mb-4">搜尋</h4>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="搜尋最近燈塔縣市" aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="searchText">
            <button class="btn btn-orange" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
          </div>
          <h4 class="mt-4  mt-lg-8 mb-4">Tags</h4>
          <ul class="d-flex ps-0 flex-wrap">
            <li v-for="(tag, index) in allUniqueTags" :key="index" class="me-4">
              <i class="bi bi-tag-fill"></i>
              <span class="ms-1">{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.artice-img-area img {
  max-height: 500px;
  max-width: 90%;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
@media(min-width: 1024px){
  .artice-img-area img {
  max-height: 600px;
  max-width: 75%;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin:0px;
}
}



.btn-orange {
  transition:
    background-color 0.5s ease,
    border-color 0.5s ease;
  background-color: var(--bs-black);
  border: 1px solid var(--bs-black);
  color: var(--bs-white);
}

.btn-orange:hover {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
</style>