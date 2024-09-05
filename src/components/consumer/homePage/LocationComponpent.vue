<script setup>
import { ref } from 'vue';
const tabs = ref([
    { id: 'pills-home', label: '北部區域', imageSrc: './src/assets/lighthouse_img/paulius-dragunas-Nhs0sLAn1Is-unsplash.jpg' },
    { id: 'pills-profile', label: '南部區域' },
    { id: 'pills-contact', label: '東部區域' },
    { id: 'pills-disabled', label: '西部區域' }
]);


</script>
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
                <li v-for="(tab, index) in tabs" :key="index" class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ active: index === 0 }" :id="tab.id + '-tab'"
                        data-bs-toggle="pill" :data-bs-target="'#' + tab.id" type="button" role="tab"
                        :aria-controls="tab.id" :aria-selected="index === 0">
                        {{ tab.label }}
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div v-for="(tab, index) in tabs" :key="index" class="tab-pane fade"
                    :class="{ 'show active': index === 0 }" :id="tab.id" role="tabpanel"
                    :aria-labelledby="tab.id + '-tab'" tabindex="0">
                    <img v-if="tab.imageSrc" :src="tab.imageSrc" alt="">
                    <div v-else>...</div>
                </div>
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