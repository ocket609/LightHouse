<script setup>
import { ref } from 'vue';
import { searchList } from '@/constants/searchListData.js'
import { useLighthouseStore } from '@/stores/lightHouseList.js'
import { useWaterfallStore } from '@/stores/waterfall.js'
// import { lighthousesData } from '@/constants/searchListData'
const lighthouseStore = useLighthouseStore()
const waterfallStore = useWaterfallStore()
const isSearchVisible = ref(false); // 控制搜尋列顯示狀態
const searchText = ref('');
const clickFilterValue = (value) => {
  lighthouseStore.filterLighthouses(value);
  waterfallStore.initMasonry(); // 篩選後重新佈局
}
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};
</script>

<template>
  <div class="bg-dark pt-5">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- 左側空白區塊 -->
      <div class="initial d-none d-lg-block"></div>

      <!-- 中間的 dropdown 群組置中 -->
      <div class="d-flex initial justify-content-lg-center justify-content-lg-start justify-content-center">
        <template v-for="item in searchList" :key="item.title">
          <div class="btn-group my-2 my-lg-10 mx-2 mx-lg-5">
            <button type="button" class="btn btn-outline-secondary rounded-bottom-2 btn-dropDown-bg"
              @click="lighthouseStore.filterLighthouses(item.title)">
              {{ item.title }}
            </button>
            <button type="button"
              class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split rounded-start-2 btn-dropDown-bg"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
              <span class="visually-hidden">{{ item.title }}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-bg">
              <li v-for="item2 in item.items" :key="item2.id">
                <button class="dropdown-item" type="button" @click="clickFilterValue(item2.label)">{{ item2.label
                  }}</button>
              </li>
            </ul>

          </div>
        </template>
      </div>

      <!-- 右側的 dropdown2 -->
      <div class="d-none d-lg-flex initial justify-content-end">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <button type="button" class="btn bg-transparent text-bg-dark border-0" @click="toggleSearch">
              <i class="bi bi-search search-icon"
              :class="{ 'active-icon': isSearchVisible }"></i>
            </button>
            <!-- 搜尋列 -->
            <div v-show="isSearchVisible" class="search-bar position-relative">
              <input type="text" placeholder="輸入搜尋內容" v-model="searchText" class="search-input"
              @input="lighthouseStore.filterLighthouses(searchText)" />
              <ul class="list-unstyled bg-white text-center rounded-1 mb-0 position-absolute w-100"
              :class="{ 'd-none': !isSearchVisible }"
              style="top: 50px;z-index: 999;">
                <template v-if="searchText && lighthouseStore.lighthouses.length > 0">
                  <li v-for="item in lighthouseStore.lighthouses.slice(0, 3)" :key="item + 123">
                    <a href="#">{{ item.title }}</a>
                  </li>
                </template>
                <li v-if="lighthouseStore.lighthouses.length === 0">關鍵字：希望、溫暖</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dropdown2">
          <button class="btn btn-secondary bg-transparent border-0 text-bg-dark" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-sort-down"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <li class="text-center">
              <button type="button" class="btn bg-transparent btn-search-sort"
              @click="lighthouseStore.filterLighthouses('所有區域')">
              最新資訊
            </button>
            </li>
            <li class="text-center">
              <button type="button" class="btn bg-transparent btn-search-sort"
              @click="lighthouseStore.sortLighthouses('由北至南')">
              由北至南
            </button>
            </li>
            <li class="text-center">
              <button type="button" class="btn bg-transparent btn-search-sort"
              @click="lighthouseStore.sortLighthouses('由南至北')">
              由南至北
            </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn-search-sort {
  --bs-btn-color: #ccc;
}
.btn-search-sort:hover {
  color:  rgb(255, 125, 51) !important; 
}
.btn-search-sort:active {
  border: 0px solid transparent;
}
.search-icon {
  color: #ccc; 
  transition: color 0.3s ease;
}

.search-icon.active-icon {
  color: rgb(255, 125, 51); 
}
.search-bar {
  margin-left: 8px;
}

.search-input {
  font-size: 16px;
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s; 
}
.search-input:focus {
  border-color: rgb(255, 125, 51); 
  box-shadow: 0 0 8px rgba(255, 125, 51,0.5); 
}

.initial {
  flex: auto;
}

@media (min-width: 1200px) {
  .initial {
    flex: 2;
  }
}

.btn-dropDown-bg:hover {
  color: var(--bs-lh-Tertiary-100) !important;
  background-color: #d9d9d917;
}

.dropdown-item {
  color: #fff;
}

.dropdown-menu-bg {
  --bs-dropdown-bg: #343a40;
}
</style>
