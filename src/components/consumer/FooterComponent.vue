<template>
  <div class="footer-bg-lighthouse">
    <div class="footer-container">
        <div class="d-flex justify-content-center">
            <div class="footer-content">
                <div class="mb-5">
                    <p class="mb-4 footer-input-title">訂閱LightHouse電子報</p>
                    <p class="mb-3 footer-input-content">瞭解更多最新燈塔資訊!</p>
                </div>
              <div class="input-group mb-5 px-3 px-lg-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入Email 訂閱"
                  aria-label="請輸入Email 訂閱"
                  aria-describedby="button-addon2"
                />
                <button class="btn btn-lh-black" type="button" id="button-addon2">訂閱</button>
              </div>
              <ul class="footer-icon list-unstyled d-flex justify-content-center">
                <li class="mx-2"><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                <li class="mx-2"><a href="#"><i class="bi bi-instagram"></i></a></li>
              </ul>
            </div>
        </div>
      <ul
        class="footer-end list-unstyled d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center"
      >
        <li>
          <a href="/">
            <img src="/src/assets/lighthouse_img/Lighthouse Logo.svg" alt="Lighthouse" />
          </a>
        </li>
        <li>@2023 資料、圖片、文章來源皆來自網路，僅用來做為學習用途。</li>
        <li><a href="/">後台管理</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-bg-lighthouse {
  background-image: url('@/assets/lighthouse_img/footer-img2.jfif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 720px;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  z-index: 1;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 992px) {
  .footer-bg-lighthouse {
    min-height: 940px;
  }
}
.footer-container {
  width: 1296px;
  max-width: 100%;
}
.footer-content {
    width: 750px;
    max-width: 100%;
    margin-bottom: 120px;
}
.input-group {
    height: 90px;
}
.btn-lh-black {
    width: 100px;
    background-color:var(--bs-black);
    color: var(--bs-white);
}
.btn-lh-black:hover {
  color: var(--bs-primary);
}
.footer-icon a{
  color: var(--bs-white);
}
.footer-icon a:hover {
  color: var(--bs-primary);
}
.footer-end a{
  color: var(--bs-white);
  text-decoration: none;
}
.footer-end a:hover{
  color: var(--bs-primary);
}
.footer-input-title {
  line-height: 1.2;
  color: var(--bs-lh-Nuetral-100);
  font-weight: 700;
  font-size: 24px;
}
.footer-input-content {
  color: var(--bs-lh-Nuetral-100);
}
</style>
