<script setup>
import { searchList } from '@/constants/searchListData.js'


</script>
<template>
  <div class="bg-dark pt-5">
    <div class="container d-flex justify-content-center">
      <template v-for="item in searchList" :key="item.title">
        <div class="btn-group my-10 mx-3">
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
  </div>
</template>