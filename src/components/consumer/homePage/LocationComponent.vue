<script setup>
import { ref } from 'vue';
import LocationSwiper from '@/components/consumer/utils/LocationSwiper.vue'

const tabs = ref([
    { id: 'pills-home', label: '北部區域', imageSrc: './src/assets/lighthouse_img/paulius-dragunas-Nhs0sLAn1Is-unsplash.jpg' },
    { id: 'pills-profile', label: '南部區域' },
    { id: 'pills-contact', label: '東部區域' },
    { id: 'pills-disabled', label: '西部區域' }
]);

</script>
<template>
    <div class="bg-black text-white pt-16" style="padding-bottom: 160px;">
        <div class="container">
            <div class="fs-1 d-flex justify-content-center">LIGHTHOUSE</div>
            <div class="d-flex justify-content-center" style="margin-top: 160px;">
                <div class="location-title mb-16">
                    <h3 class="mb-6" style="letter-spacing:16px;">週邊小物</h3>
                    <p style="letter-spacing:4px;">LIGHTHOUSE STORE</p>
                    <div class="d-flex justify-content-center">
                        <div class="border border-2 border-primary" style="width: 120px;"></div>
                    </div>
                </div>
            </div>

            <ul class="nav nav-underline mb-16" id="pills-tab" role="tablist">
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
                    <LocationSwiper v-if="tab.label === '北部區域'" :region="tab.label" />
                    <LocationSwiper v-if="tab.label === '南部區域'" :region="tab.label" />
                    <LocationSwiper v-if="tab.label === '東部區域'" :region="tab.label" />
                    <LocationSwiper v-if="tab.label === '西部區域'" :region="tab.label" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.location-title {
    width: 275px;
    text-align: center;
    letter-spacing:16px;
}
.nav-item {
    width: calc(25% - 12px);
    display: flex;
    justify-content: center;
}

.nav-link {
    color: var(--bs-white);
}

.nav-underline .nav-link {
    width: 100%;
}

.location-title {
    width: 275px;
    text-align: center;
}

.nav-underline .nav-link.active {
    color: var(--bs-lh-Tertiary-100);
}

.nav-underline .nav-link:hover,
.nav-underline .nav-link:focus {
    color: var(--bs-lh-Tertiary-100);
    border-bottom-color: var(--bs-lh-Tertiary-100)
}
</style>