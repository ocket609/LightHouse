<template>
  <header class="bg-black d-flex justify-content-between align-items-center">
    <div class="header-side d-flex align-items-center">
      <div class="header-menu">
        <!--<a href="#" class="material-icon d-xl-none">
          <span class="material-symbols-outlined text-white link-primary align-middle"> menu </span>
        </a>
        <a href="#" class="material-icon d-xl-none">
          <span class="material-symbols-outlined text-white link-primary align-middle">
            close
          </span>
        </a>-->
        <!---->
        <nav class="navbar navbar-black bg-black d-lg-none py-0">
          <div class="container-fluid justify-content-center px-0">
            <button
              class="navbar-toggler material-icon border-0 d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleMenu"
            >
              <!-- 當 isMenuOpen 為 true 時顯示 close -->
              <span
                class="material-symbols-outlined text-white link-primary align-middle"
                v-if="isMenuOpen"
              >
                close
              </span>
              <!-- 當 isMenuOpen 為 false 時顯示 menu -->
              <span class="material-symbols-outlined text-white link-primary align-middle" v-else>
                menu
              </span>
            </button>
          </div>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent" ref="menu">
          <ul class="header-menu-link my-0 px-0">
            <li class="mt-4">
              <RouterLink
                class="header-navbar-link text-success link-primary fs-8 fs-sm-6"
                to="/consumer"
                >首頁</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="header-navbar-link text-success link-primary fs-8 fs-sm-6"
                to="/consumer/location"
                >燈塔資訊</RouterLink
              >
            </li>
            <li>
              <RouterLink class="header-navbar-link text-success link-primary fs-8 fs-sm-6" to="/"
                >心靈雞湯</RouterLink
              >
            </li>
            <li>
              <RouterLink class="header-navbar-link text-success link-primary fs-8 fs-sm-6" to="/"
                >週邊小物</RouterLink
              >
            </li>
            <li class="mb-4">
              <RouterLink class="header-navbar-link text-success link-primary fs-8 fs-sm-6" to="/"
                >查詢訂單</RouterLink
              >
            </li>
          </ul>
        </div>
        <!---->
      </div>
      <a href="#" class="header-logo">
        <img class="img-logo" src="/public/lighthouse_img/Lighthouse Logo.svg" alt="LOGO" />
      </a>
    </div>
    <div class="header-nav d-flex justify-content-between align-items-center px-sm-6">
      <ul class="header-navbar my-0 px-0 d-none d-lg-flex">
        <li class="text-success">
          <RouterLink class="header-navbar-link text-success link-primary" to="/consumer"
            >首頁</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/consumer/location"
            >燈塔資訊</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/"
            >心靈雞湯</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/"
            >週邊小物</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/"
            >查詢訂單</RouterLink
          >
        </li>
      </ul>
      <ul class="header-nav-icon d-flex my-0 px-0">
        <li>
          <a href="#" class="material-icon">
            <span
              class="material-symbols-outlined material-symbols-outlined-fill text-success link-primary align-middle"
            >
              favorite
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="material-icon">
            <span class="material-symbols-outlined text-success link-primary align-middle">
              shopping_cart
            </span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// menu 按鈕切換
// 定義布林變量 isMenuOpen
const isMenuOpen = ref(false)

// 定義切換函數
// 切換菜單開啟/關閉狀態
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<style></style>
