<template>
  <header>
    <div class="header-logo">
      <a href="#">
        <img src="" alt="LOGO" />
      </a>
    </div>
    <div class="header-nav">
      <ul>
        <!-- <li><a href="#">首頁</a></li>
        <li><a href="#">燈塔資訊</a></li>
        <li><a href="#">心靈雞湯</a></li>
        <li><a href="#">週邊小物</a></li>
        <li><a href="#">查詢訂單</a></li> -->
        <li>
          <RouterLink to="/">首頁</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">燈塔資訊</RouterLink>
        </li>
        <li>
          <RouterLink to="/">心靈雞湯</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">週邊小物</RouterLink>
        </li>
        <li>
          <RouterLink to="/">查詢訂單</RouterLink>
        </li>
      </ul>
    </div>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->
    <div class="header-sideR">
      <ul>
        <li>
          <a href="#"><span class="material-symbols-outlined"> favorite </span></a>
        </li>
        <li><a href="#">找不到車子的icon</a></li>
      </ul>
    </div>
  </header>
  Header
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
<style></style>
