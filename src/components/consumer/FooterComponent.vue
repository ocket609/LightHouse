<template>
  <div class="footer-bg-lighthouse">
    <div class="footer-container">
        <div class="d-flex justify-content-center">
            <div class="footer-content">
                <div class="mb-10">
                    <p class="mb-6 footer-input-title fs-7 fs-sm-4">訂閱LightHouse電子報</p>
                    <p class="mb-3 footer-input-content fs-9 fs-sm-6">瞭解更多最新燈塔資訊!</p>
                </div>
              <div class="input-group mb-10 px-3 px-lg-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入Email 訂閱"
                  aria-label="請輸入Email 訂閱"
                  aria-describedby="button-addon2"
                />
                <button class="btn btn-lh-black" type="button" id="button-addon2">訂閱</button>
              </div>
              <ul class="footer-icon list-unstyled d-flex justify-content-center mb-0">
                <li class="mx-2"><a href="#"><i class="fa-brands fa-square-facebook icon-size"></i></a></li>
                <li class="mx-2"><a href="#"><i class="bi bi-instagram icon-size"></i></a></li>
              </ul>
            </div>
        </div>
      <ul
        class="footer-end list-unstyled d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center mx-2 mx-xxl-0 mb-0"
      >
        <li class="mt-3 mt-lg-0 mb-6 mb-lg-0">
          <a href="/">
            <img src="/src/assets/lighthouse_img/Lighthouse Logo.svg" alt="Lighthouse" />
          </a>
        </li>
        <li class="mb-6 mb-lg-0">@2023 資料、圖片、文章來源皆來自網路，僅用來做為學習用途。</li>
        <li class="mb-3 mb-lg-0"><a href="/">後台管理</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-size{
  font-size: 36px;
}
.form-control {
  border-radius: 16px;
  font-size: 18px;
}
@media(min-width: 768px){
  .form-control {
  font-size: 13px;
}
}
.btn-lh-black[data-v-f048872f] {
    border-radius: 16px;
}
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
    margin-bottom: 60px;
}
@media(min-width:768px){
  .footer-content {
    margin-bottom: 120px;
}
}
.input-group {
    height: 50px;
}
@media(min-width:768px){
  .input-group {
    height: 90px;
}
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
.footer-end{
  padding: 0 88px;
}
@media(min-width:768px){
  .footer-end {
    padding: 0;
  }
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
