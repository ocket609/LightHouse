<script setup>
import { searchList } from '@/constants/searchListData.js'
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
            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split rounded-start-2" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-reference="parent">
              <span class="visually-hidden">{{ item.title }}</span>
            </button>
            <ul class="dropdown-menu">
              <li v-for="item2 in item.items" :key="item2.id">
                <a class="dropdown-item" href="#">{{ item2.label }}</a>
              </li>
            </ul>
            <button type="button" class="btn btn-outline-secondary rounded-bottom-2">{{ item.title }}</button>
          </div>
        </template>
      </div>
      
      <!-- 右側的 dropdown2 -->
       <div class="d-none d-md-flex initial justify-content-end">
          <button type="button" class="btn bg-transparent text-bg-dark border-0">
            <i class="bi bi-search"></i>
          </button>
         <div class="dropdown2">
           <button class="btn btn-secondary bg-transparent border-0 text-bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
@media(min-width: 1200px){
  .initial {
  flex: 2;
}
}
</style>