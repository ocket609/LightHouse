<template>
  <div class="bg-dark">
    <div class="container d-flex justify-content-center pb-10 mt-0">
			<!-- 需動態判斷目前頁面及active、disabled -->
      <nav aria-label="...">
        <ul class="pagination mb-0">
          <li class="page-item disabled">
            <a class="page-link border-0" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link border-0" href="#">1</a></li>
          <li class="page-item" aria-current="page">
            <span class="page-link border-0">2</span>
          </li>
          <li class="page-item"><a class="page-link border-0" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link border-0" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-link {
	background: transparent;
}
</style>