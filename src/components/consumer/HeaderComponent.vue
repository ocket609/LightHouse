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
        <nav class="navbar navbar-black bg-black d-xl-none py-0">
          <div class="container-fluid justify-content-center px-0">
            <button
              class="navbar-toggler material-icon border-0 d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="material-symbols-outlined text-white link-primary align-middle">
                menu
              </span>
              <span class="material-symbols-outlined text-white link-primary align-middle">
                close
              </span>
            </button>
          </div>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
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
                to="/about"
                >燈塔資訊</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="header-navbar-link text-success link-primary fs-8 fs-sm-6"
                to="/about"
                >心靈雞湯</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="header-navbar-link text-success link-primary fs-8 fs-sm-6"
                to="/about"
                >週邊小物</RouterLink
              >
            </li>
            <li class="mb-4">
              <RouterLink
                class="header-navbar-link text-success link-primary fs-8 fs-sm-6"
                to="/about"
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
      <ul class="header-navbar my-0 px-0 d-none d-xl-flex">
        <li class="text-success">
          <RouterLink class="header-navbar-link text-success link-primary" to="/">首頁</RouterLink>
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/about"
            >燈塔資訊</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/"
            >心靈雞湯</RouterLink
          >
        </li>
        <li>
          <RouterLink class="header-navbar-link text-success link-primary" to="/about"
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
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->
    <!-- <div class="header-sideR"></div> -->
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
<style></style>
