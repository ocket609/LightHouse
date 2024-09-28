<template>
  <div class="banner bg-black">
    <div class="banner-content banner-container position-relative">
      <div class="banner-main">
        <h1 class="fw-bold text-white fs-sm-1 fs-2 text-lg-start text-center pb-md-10 pb-6 mb-0">
          LIGHTHOUSE
        </h1>
        <div class="banner-text text-success d-none d-lg-block py-2">
          <p class="mb-0 pb-6">燈塔就像一位守望者 深夜中忽明忽暗的守候</p>
          <p class="mb-0">給予希望一盞光，往您所嚮往目標吸引前進 而實現目標</p>
        </div>
        <div class="banner-text text-success fs-sm-6 fs-9 text-center d-lg-none py-2">
          <p class="mb-0 pb-3">燈塔就像一位守望者</p>
          <p class="mb-0 pb-3">深夜中忽明忽暗的守候 給予希望一盞光，</p>
          <p class="mb-0">往您所嚮往目標吸引前進 而實現目標</p>
        </div>
        <div class="input-group banner-search my-md-2 my-0">
          <input
            type="text"
            class="form-control text-primary bg-black border-primary banner-search-column fs-sm-6 fs-9"
            placeholder="搜尋最近燈塔位置"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = '搜尋最近燈塔位置'"
            aria-label="搜尋最近燈塔位置"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary bg-primary text-white border-primary banner-search-btn"
            type="button"
            id="button-addon2"
          >
            <span class="material-symbols-outlined text-white"> search </span>
            <p class="d-none d-lg-block mb-0">搜尋</p>
          </button>
        </div>
      </div>

      <div class="banner-img position-absolute"></div>
    </div>
  </div>
</template>

<script setup></script>
