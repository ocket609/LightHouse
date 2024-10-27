<template>
    <div class="bg-dark text-white">
      <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
          <div class="col">
            <div class="card border-0 h-100 bg-transparent lighthouse">
              <div class="image-container" @mouseover="startHover" @mouseleave="resetHover">
                <!-- <img src="/public/lighthouse_img/mael-balland-BtTY5Y5dAa0-unsplash.jpg" class="card-img-top rounded-top-corners" alt="..." /> -->
                 <div class="card-img-top rounded-top-corners store-img-1 position-relative text-white">
                    <p class="position-absolute mb-0 text-center">忍受寂寞扛起整個夜晚<br />深夜裡的曙光<br />是燈塔人的驕傲</p>
                 </div>
                <div class="overlay">
                  <div class="text" style="padding-top: 120px;">more</div>
                  <div class="homeStory-content-card-hover-text"></div>
                </div>
                <div class="beam  d-none d-md-block" :class="{ 'beam-hover': isHovering }"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100 bg-transparent lighthouse">
              <div class="image-container" @mouseover="startHover" @mouseleave="resetHover">
                <img src="/public/lighthouse_img/michael-krahn-ikgFjrzGsAE-unsplash.jpg" class="card-img-top rounded-top-corners" alt="..." />
                <div class="overlay">
                  <div class="text">more</div>
                </div>
                <div class="beam d-none d-md-block" :class="{ 'beam-hover': isHovering }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isHovering = ref(false);
  
  function startHover() {
    isHovering.value = true;
  }
  
  function resetHover() {
    isHovering.value = false;
  }
  </script>
  
  
  <style>
  .image-container {
    position: relative;
    overflow: visible;
  }
@media (min-width: 768px) {
    .beam {
    position: absolute;
    top: -160px;
    left: 50%;
    width: 160px;
    height: 250px;
    background: linear-gradient(to bottom, rgba(255, 94, 0, 0), rgba(255, 92, 0, 0.4)); /* 漸層從淺到深 */
    transform-origin: bottom center;
    clip-path: polygon(0 0, 100% 0, 50% 100%); /* 錐形光束 */
    transform: translateX(-50%) rotate(30deg);
    opacity: 0;
    transition: opacity 0.1s ease;
    z-index: 2;
  }
  @keyframes sway-and-stop {
    0% {
      transform: translateX(-50%) rotate(-30deg);
    }
    100% {
      transform: translateX(-50%) rotate(30deg);
    }
  }
}
@media (min-width: 992px) {
    .beam {
    transform: translateX(-50%) rotate(60deg);
    }
    @keyframes sway-and-stop {
    0% {
      transform: translateX(-50%) rotate(-60deg);
    }
    100% {
      transform: translateX(-50%) rotate(60deg);
    }
  }
}
  
  .image-container:hover .beam {
    opacity: 1;
  }
  
  .beam-hover {
    animation: sway-and-stop 1s ease forwards;
  }
  

  
  .rounded-top-corners {
    width: 100%;
    height: 452px;
    border-top-left-radius: 428.04px;
    border-top-right-radius: 428.04px;
    position: relative;
    z-index: 3;
  }
  .store-img-1{
    background-image: url("/public/lighthouse_img/mael-balland-BtTY5Y5dAa0-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 428.04px;
    border-top-right-radius: 428.04px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 4;
  }
  
  .image-container:hover .overlay {
    opacity: 1;
  }
  
  .text {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }
  .homeStory-content-card-hover-text {
    width: 100%;
    height: 100%;
    position: absolute;
    border-bottom: 12px solid #ff5c00;
}
  </style>
  