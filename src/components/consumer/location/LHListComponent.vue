<script setup>
import { lighthouses } from '@/constants/lightHouseData.js'

</script>

<template>
  <div class="bg-dark pt-5 pb-10">
    <div class="container py-10">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6">
        <template v-for="region in lighthouses" :key="region.area">
          <!-- <h3 class="text-white">{{ region.area }}</h3> -->
          <template v-for="item in region.areaData" :key="item.title">
            <div class="col">
              <div class="card h-100 border-0">
                <img :src="item.imageSrc" class="card-img-top" :alt="item.alt">
                <div class="card-body">
                  <p class="card-text">{{ item.subtitle }}</p>
                  <a href="#">
                    <h5 class="card-title">{{ item.title }}</h5>
                  </a>
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
