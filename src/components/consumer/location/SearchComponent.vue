<script setup>
import { searchList } from '@/constants/searchListData.js'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

const lighthouseStore = useLighthouseStore()

</script>

<template>
  <div class="bg-dark pt-5">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- 左側空白區塊 -->
      <div class="initial d-none d-lg-block"></div>

      <!-- 中間的 dropdown 群組置中 -->
      <div class="d-flex initial justify-content-lg-center justify-content-md-start justify-content-center">
        <template v-for="item in searchList" :key="item.title">
          <div class="btn-group my-5 my-lg-10 mx-2 mx-lg-5">
            <button type="button" class="btn btn-outline-secondary rounded-bottom-2 btn-dropDown-bg"
              @click="lighthouseStore.getArticleData">
              {{ item.title }}
            </button>
            <button type="button"
              class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split rounded-start-2 btn-dropDown-bg"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
              <span class="visually-hidden">{{ item.title }}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-bg">
              <li v-for="item2 in item.items" :key="item2.id">
                <button class="dropdown-item" type="button" @click="() => {
                  lighthouseStore.filterLighthouses(item2.label);
                  layoutMasonry(); // 篩選後重新佈局
                }">{{ item2.label }}</button>
              </li>
            </ul>

          </div>
        </template>
      </div>

      <!-- 右側的 dropdown2 -->
      <div class="d-none d-md-flex initial justify-content-end">
        <button type="button" class="btn bg-transparent text-bg-dark border-0">
          <i class="bi bi-search"></i>
        </button>
        <div class="dropdown2">
          <button class="btn btn-secondary bg-transparent border-0 text-bg-dark" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-sort-down"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <li><a class="dropdown-item active" href="#">最新資訊</a></li>
            <li><a class="dropdown-item" href="#">由北至南</a></li>
            <li><a class="dropdown-item" href="#">由南至北</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
