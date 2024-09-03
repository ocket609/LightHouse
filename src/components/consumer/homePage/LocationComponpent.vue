<template>
    <div class="bg-black text-white">
        <div class="container">
            <div class="fs-1 d-flex justify-content-center mt-16">LIGHTHOUSE</div>
            <div class="d-flex justify-content-center">
                <div class="location-title mb-16">
                    <h3 class="mb-6">燈塔分佈</h3>
                    <p>LIGHT HOUSE LOCATION</p>
                    <div class="d-flex justify-content-center">
                        <div class="border border-2 border-primary" style="width: 120px;"></div>
                    </div>
                </div>
            </div>
            <ul class="nav nav-underline mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                        type="button" role="tab" aria-controls="pills-home" aria-selected="true">北部區域</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">南部區域</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">東部區域</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled"
                        type="button" role="tab" aria-controls="pills-disabled" aria-selected="false"
                        >西部區域</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0"><img src="/src/assets/lighthouse_img/paulius-dragunas-Nhs0sLAn1Is-unsplash.jpg" alt=""></div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">...</div>
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                    tabindex="0">...</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.nav-item {
    width: calc(25% - 12px);
    display: flex;
    justify-content: center;
}
.nav-underline .nav-link {
    width: 100%;
}
.location-title {
    width: 275px;
    text-align: center;
}
.tab-content {
    padding-bottom: 160px;
}
.nav-underline .nav-link.active {
    color: var(--bs-white);
}
</style>