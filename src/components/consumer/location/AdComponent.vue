<template>
    <div class="footer-bg-lighthouse">
      <div class="container">
        <h4><span style="letter-spacing:6px;">燈塔列</span>表</h4>
        <p class="fs-7 fs-lg-6 mb-0"><span style="letter-spacing:6px;">一閃一閃散發著光芒燈塔<br>指引船隻方向的明</span>燈</p>
      </div>
    </div>
</template>
<style scoped>
.footer-bg-lighthouse {
  background-image: url('./public/location-ad-2.jpg');
  background-repeat: no-repeat;
  background-position: center 45%;
  background-size: cover;
  min-height: 150px;
  max-width: 100%;
  height: 150px;
  background-color: rgb(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 576px) {
  .footer-bg-lighthouse {
    min-height: 250px;
  }
}
</style>